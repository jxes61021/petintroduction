globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"./","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_nuxt/bg_part101.9151dad3.png": {
    "type": "image/png",
    "etag": "\"8750-0OOczWlz+XwNl8RWb9Yh9AFhocE\"",
    "mtime": "2022-08-02T08:28:33.616Z",
    "path": "../public/_nuxt/bg_part101.9151dad3.png"
  },
  "/_nuxt/bg_part102.691302fa.png": {
    "type": "image/png",
    "etag": "\"8644-n5UOLpl7mDvNOAddPBTBacI9afQ\"",
    "mtime": "2022-08-02T08:28:33.616Z",
    "path": "../public/_nuxt/bg_part102.691302fa.png"
  },
  "/_nuxt/bg_part103.dc28ceb2.png": {
    "type": "image/png",
    "etag": "\"7861-hK9PEK+X3Q9iAVSHCD2kKiF78Ug\"",
    "mtime": "2022-08-02T08:28:33.616Z",
    "path": "../public/_nuxt/bg_part103.dc28ceb2.png"
  },
  "/_nuxt/bg_part104.ae649f3e.png": {
    "type": "image/png",
    "etag": "\"df21-Aul/8iL2b0lw4/qUetgZZuZ3Wu0\"",
    "mtime": "2022-08-02T08:28:33.615Z",
    "path": "../public/_nuxt/bg_part104.ae649f3e.png"
  },
  "/_nuxt/bg_part105.dd27b322.png": {
    "type": "image/png",
    "etag": "\"22a5-+Fjmu6Twr+nsxkuLQpxsdhPW03o\"",
    "mtime": "2022-08-02T08:28:33.615Z",
    "path": "../public/_nuxt/bg_part105.dd27b322.png"
  },
  "/_nuxt/bg_part106.8b20fae0.png": {
    "type": "image/png",
    "etag": "\"225f-JYeUZd6L0cdt6hsXe9InHhtS4AQ\"",
    "mtime": "2022-08-02T08:28:33.615Z",
    "path": "../public/_nuxt/bg_part106.8b20fae0.png"
  },
  "/_nuxt/bg_part107.7e6e0685.png": {
    "type": "image/png",
    "etag": "\"1202-7YL0Dd1WYkS4waQhrJY3NjNAUWI\"",
    "mtime": "2022-08-02T08:28:33.615Z",
    "path": "../public/_nuxt/bg_part107.7e6e0685.png"
  },
  "/_nuxt/default-b8c36ec5.mjs": {
    "type": "application/javascript",
    "etag": "\"38f8-gqpyEdiN2sLA/EOrlfNguovo+CM\"",
    "mtime": "2022-08-02T08:28:33.614Z",
    "path": "../public/_nuxt/default-b8c36ec5.mjs"
  },
  "/_nuxt/default.bb0892f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"be-5rJRxvKIDAiaJOMjOvGhGS0nnr8\"",
    "mtime": "2022-08-02T08:28:33.614Z",
    "path": "../public/_nuxt/default.bb0892f5.css"
  },
  "/_nuxt/entry-24b21f59.mjs": {
    "type": "application/javascript",
    "etag": "\"3e149-PQ3r8o2mVJ1OOLOQO0QChJJ7E3M\"",
    "mtime": "2022-08-02T08:28:33.614Z",
    "path": "../public/_nuxt/entry-24b21f59.mjs"
  },
  "/_nuxt/entry.37979810.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bf52-6BvkF35mTN16HI93Cn5x207R/7o\"",
    "mtime": "2022-08-02T08:28:33.613Z",
    "path": "../public/_nuxt/entry.37979810.css"
  },
  "/_nuxt/error-404-3524e16b.mjs": {
    "type": "application/javascript",
    "etag": "\"81a-qNtFfUN4+vZPKHaHoPK7Xs5agdE\"",
    "mtime": "2022-08-02T08:28:33.613Z",
    "path": "../public/_nuxt/error-404-3524e16b.mjs"
  },
  "/_nuxt/error-404.314f7075.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11bd-kF6SKfdJYaoPOx5XSNB4IuKqq6c\"",
    "mtime": "2022-08-02T08:28:33.612Z",
    "path": "../public/_nuxt/error-404.314f7075.css"
  },
  "/_nuxt/error-500-39535432.mjs": {
    "type": "application/javascript",
    "etag": "\"6c8-eQheMvptLtYOH+s70bMN7gNZzb4\"",
    "mtime": "2022-08-02T08:28:33.612Z",
    "path": "../public/_nuxt/error-500-39535432.mjs"
  },
  "/_nuxt/error-500.4e3461e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"af4-ckENJljqPJ6JYcymKbQpp8F2r1I\"",
    "mtime": "2022-08-02T08:28:33.612Z",
    "path": "../public/_nuxt/error-500.4e3461e5.css"
  },
  "/_nuxt/error-component-4d34ca9a.mjs": {
    "type": "application/javascript",
    "etag": "\"425-37cUEsyBGrpI+FJyaKVQbuEli14\"",
    "mtime": "2022-08-02T08:28:33.612Z",
    "path": "../public/_nuxt/error-component-4d34ca9a.mjs"
  },
  "/_nuxt/i_15plus.391f3e97.jpg": {
    "type": "image/jpeg",
    "etag": "\"25cd-2gHi7/mElmn6rCbzljOhJc6qPuU\"",
    "mtime": "2022-08-02T08:28:33.612Z",
    "path": "../public/_nuxt/i_15plus.391f3e97.jpg"
  },
  "/_nuxt/i_logo_gpg.9c0dd693.png": {
    "type": "image/png",
    "etag": "\"1350-828N4ePMMZiErUL7gcggCh0tU8Q\"",
    "mtime": "2022-08-02T08:28:33.612Z",
    "path": "../public/_nuxt/i_logo_gpg.9c0dd693.png"
  },
  "/_nuxt/i_logo_m1.162c4c80.svg": {
    "type": "image/svg+xml",
    "etag": "\"25c4-YlnrVNd+jSJfLgZnw5QLgW8sgys\"",
    "mtime": "2022-08-02T08:28:33.611Z",
    "path": "../public/_nuxt/i_logo_m1.162c4c80.svg"
  },
  "/_nuxt/i_logo_m2.84595a1b.svg": {
    "type": "image/svg+xml",
    "etag": "\"30ba-zlkjucbwk8PP1ZAuDPCLxsTLsk8\"",
    "mtime": "2022-08-02T08:28:33.611Z",
    "path": "../public/_nuxt/i_logo_m2.84595a1b.svg"
  },
  "/_nuxt/img02_pc.7d57085e.png": {
    "type": "image/png",
    "etag": "\"dba04-l/ljNhgydQGmBv1x/mC+p2hWkU8\"",
    "mtime": "2022-08-02T08:28:33.611Z",
    "path": "../public/_nuxt/img02_pc.7d57085e.png"
  },
  "/_nuxt/img03_pc.22df6aa0.png": {
    "type": "image/png",
    "etag": "\"2588d-TW6shPqDSWGxHawNnccYe/VOhdI\"",
    "mtime": "2022-08-02T08:28:33.610Z",
    "path": "../public/_nuxt/img03_pc.22df6aa0.png"
  },
  "/_nuxt/index-7a90c092.mjs": {
    "type": "application/javascript",
    "etag": "\"431b-cQJMXkNMpZeB6d8HIGsRO4woZZ8\"",
    "mtime": "2022-08-02T08:28:33.610Z",
    "path": "../public/_nuxt/index-7a90c092.mjs"
  },
  "/_nuxt/info01.5da5ec72.png": {
    "type": "image/png",
    "etag": "\"4606b-cNZ8S8KhkkjwWNiyqPhM1bZZAVw\"",
    "mtime": "2022-08-02T08:28:33.610Z",
    "path": "../public/_nuxt/info01.5da5ec72.png"
  },
  "/_nuxt/m2_101.2daa208d.png": {
    "type": "image/png",
    "etag": "\"4290-xKqE+fjfJfyRGOAQaekT7mAQonU\"",
    "mtime": "2022-08-02T08:28:33.610Z",
    "path": "../public/_nuxt/m2_101.2daa208d.png"
  },
  "/_nuxt/m2_102.563cd572.png": {
    "type": "image/png",
    "etag": "\"1c1c-pcHtbNHCnAuA88EbOj5tj/NGkd0\"",
    "mtime": "2022-08-02T08:28:33.609Z",
    "path": "../public/_nuxt/m2_102.563cd572.png"
  },
  "/_nuxt/m2_103.88d1d4bd.png": {
    "type": "image/png",
    "etag": "\"2c93-LAFCa77VOaMRrtgh9TsI7IuyRoA\"",
    "mtime": "2022-08-02T08:28:33.609Z",
    "path": "../public/_nuxt/m2_103.88d1d4bd.png"
  },
  "/_nuxt/m2_104.da135b27.png": {
    "type": "image/png",
    "etag": "\"2c27-T6xUfu0s3tjgWXj59DisljEeOVw\"",
    "mtime": "2022-08-02T08:28:33.609Z",
    "path": "../public/_nuxt/m2_104.da135b27.png"
  },
  "/_nuxt/m2_105.8f19e61d.png": {
    "type": "image/png",
    "etag": "\"3e59-fhTZWuBpVkIQmQciJ4l8n+JRIAk\"",
    "mtime": "2022-08-02T08:28:33.609Z",
    "path": "../public/_nuxt/m2_105.8f19e61d.png"
  },
  "/_nuxt/m2_201.8801e303.png": {
    "type": "image/png",
    "etag": "\"4d67-cYFQUPmGDC6pTy0VA1WZOvJ8ec0\"",
    "mtime": "2022-08-02T08:28:33.609Z",
    "path": "../public/_nuxt/m2_201.8801e303.png"
  },
  "/_nuxt/m2_202.9448f3d6.png": {
    "type": "image/png",
    "etag": "\"2ed8-x4xu8+1oemH5gpJJNoMYt7RyYAg\"",
    "mtime": "2022-08-02T08:28:33.609Z",
    "path": "../public/_nuxt/m2_202.9448f3d6.png"
  },
  "/_nuxt/m2_203.1053c539.png": {
    "type": "image/png",
    "etag": "\"deda-JKaHZHDtHDxSFiG+JX6ZAyUPDAk\"",
    "mtime": "2022-08-02T08:28:33.608Z",
    "path": "../public/_nuxt/m2_203.1053c539.png"
  },
  "/_nuxt/m2_204.26fc74ab.png": {
    "type": "image/png",
    "etag": "\"7447-59klq36akdxE0Y3IcDSvVwAJHaY\"",
    "mtime": "2022-08-02T08:28:33.608Z",
    "path": "../public/_nuxt/m2_204.26fc74ab.png"
  },
  "/_nuxt/m2_205.225d08b6.png": {
    "type": "image/png",
    "etag": "\"4da2-21HbTBpsitVS3P0PdfIgA1Mcx38\"",
    "mtime": "2022-08-02T08:28:33.608Z",
    "path": "../public/_nuxt/m2_205.225d08b6.png"
  },
  "/_nuxt/m2_250.859e6518.png": {
    "type": "image/png",
    "etag": "\"92c7-89dpVvvJLqyUlU+M5aHL96I2kWg\"",
    "mtime": "2022-08-02T08:28:33.608Z",
    "path": "../public/_nuxt/m2_250.859e6518.png"
  },
  "/_nuxt/m2_302.57d0dc3c.png": {
    "type": "image/png",
    "etag": "\"279d-xoIWDN4evR+z+gj1I7EHRrz7xCc\"",
    "mtime": "2022-08-02T08:28:33.607Z",
    "path": "../public/_nuxt/m2_302.57d0dc3c.png"
  },
  "/_nuxt/m2_303.73644800.png": {
    "type": "image/png",
    "etag": "\"9c10-uh/4K+ebWMm8Zw+bEzsn0ioUXUo\"",
    "mtime": "2022-08-02T08:28:33.607Z",
    "path": "../public/_nuxt/m2_303.73644800.png"
  },
  "/_nuxt/m2_304-2.fac08135.png": {
    "type": "image/png",
    "etag": "\"6d3c-pkKfN51jGQmsSW+mNKL5JybOuxw\"",
    "mtime": "2022-08-02T08:28:33.607Z",
    "path": "../public/_nuxt/m2_304-2.fac08135.png"
  },
  "/_nuxt/m2_304.7bd3e0c2.png": {
    "type": "image/png",
    "etag": "\"24a24-a3vm7LjDpveycUeHxzL2A02H+ZI\"",
    "mtime": "2022-08-02T08:28:33.607Z",
    "path": "../public/_nuxt/m2_304.7bd3e0c2.png"
  },
  "/_nuxt/m2_306.89a004bc.jpg": {
    "type": "image/jpeg",
    "etag": "\"7890-PXvG+Vk5/p0qdNRceXEW35X345A\"",
    "mtime": "2022-08-02T08:28:33.606Z",
    "path": "../public/_nuxt/m2_306.89a004bc.jpg"
  },
  "/_nuxt/m2_307.ac6812ab.jpg": {
    "type": "image/jpeg",
    "etag": "\"10df3-Ez3Z5QKGb+eQSeM6Q5hBUsDmWkI\"",
    "mtime": "2022-08-02T08:28:33.606Z",
    "path": "../public/_nuxt/m2_307.ac6812ab.jpg"
  },
  "/_nuxt/m2_308.17de6eb2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e12-a/UkX3bdGCTvJ8PW/LTAAHFaMG0\"",
    "mtime": "2022-08-02T08:28:33.606Z",
    "path": "../public/_nuxt/m2_308.17de6eb2.jpg"
  },
  "/_nuxt/m2_309.e1b56664.jpg": {
    "type": "image/jpeg",
    "etag": "\"8d48-HFW/RtDuIt9q2K6Eh0Bpco7f4po\"",
    "mtime": "2022-08-02T08:28:33.606Z",
    "path": "../public/_nuxt/m2_309.e1b56664.jpg"
  },
  "/_nuxt/m2_310.362470ad.jpg": {
    "type": "image/jpeg",
    "etag": "\"759c-TmtsIlrh2b+FK9OcgDOxFFmEHjs\"",
    "mtime": "2022-08-02T08:28:33.606Z",
    "path": "../public/_nuxt/m2_310.362470ad.jpg"
  },
  "/_nuxt/m2_321.4fdf4488.jpg": {
    "type": "image/jpeg",
    "etag": "\"cb4d-TK2Z2GG9WQd6LXppRymFCplJvuM\"",
    "mtime": "2022-08-02T08:28:33.605Z",
    "path": "../public/_nuxt/m2_321.4fdf4488.jpg"
  },
  "/_nuxt/m2_322.1f4de9e0.jpg": {
    "type": "image/jpeg",
    "etag": "\"b1ca-3FxJYrdWbhMD0V8K+21xJ/KVixk\"",
    "mtime": "2022-08-02T08:28:33.605Z",
    "path": "../public/_nuxt/m2_322.1f4de9e0.jpg"
  },
  "/_nuxt/m2_323.aaab7f48.jpg": {
    "type": "image/jpeg",
    "etag": "\"b2ec-nxqdolfJTzwbJCiFDThROyCy0ZI\"",
    "mtime": "2022-08-02T08:28:33.605Z",
    "path": "../public/_nuxt/m2_323.aaab7f48.jpg"
  },
  "/_nuxt/m2_324.700860d2.jpg": {
    "type": "image/jpeg",
    "etag": "\"a771-787c8Xh1dXzaK7/T9q+ZWHpgYrI\"",
    "mtime": "2022-08-02T08:28:33.605Z",
    "path": "../public/_nuxt/m2_324.700860d2.jpg"
  },
  "/_nuxt/m2_325.fe77a16a.jpg": {
    "type": "image/jpeg",
    "etag": "\"11a33-MiUYIANUB8YwsOVOTeDbLMGNcVo\"",
    "mtime": "2022-08-02T08:28:33.605Z",
    "path": "../public/_nuxt/m2_325.fe77a16a.jpg"
  },
  "/_nuxt/m2_326.e331c6ae.jpg": {
    "type": "image/jpeg",
    "etag": "\"b5d3-TucVf7p94Ie/bNTJ1lAk9Jil+J4\"",
    "mtime": "2022-08-02T08:28:33.604Z",
    "path": "../public/_nuxt/m2_326.e331c6ae.jpg"
  },
  "/_nuxt/m2_403.8a0d48d9.png": {
    "type": "image/png",
    "etag": "\"12543-WdqdrOMHs5EECn5jZ/6HkiSD5/o\"",
    "mtime": "2022-08-02T08:28:33.604Z",
    "path": "../public/_nuxt/m2_403.8a0d48d9.png"
  },
  "/_nuxt/m2_404.3e484f4a.png": {
    "type": "image/png",
    "etag": "\"11318-iHiA/qRwI1nqNmnS7vdZ2e1L4rQ\"",
    "mtime": "2022-08-02T08:28:33.604Z",
    "path": "../public/_nuxt/m2_404.3e484f4a.png"
  },
  "/_nuxt/m2_405.e81e883d.png": {
    "type": "image/png",
    "etag": "\"c5e2-cgk/Z9kOZN8Hr8l8POdfOmS3yxw\"",
    "mtime": "2022-08-02T08:28:33.603Z",
    "path": "../public/_nuxt/m2_405.e81e883d.png"
  },
  "/_nuxt/m2_bg002.e53d8fd5.jpg": {
    "type": "image/jpeg",
    "etag": "\"9667-M1pak+pAVACtZ69bhOjsv1+cZOg\"",
    "mtime": "2022-08-02T08:28:33.603Z",
    "path": "../public/_nuxt/m2_bg002.e53d8fd5.jpg"
  },
  "/_nuxt/m2_close.e0589bc5.svg": {
    "type": "image/svg+xml",
    "etag": "\"337-d7BtKVap/mbABMm6zMHH9ZJXxls\"",
    "mtime": "2022-08-02T08:28:33.603Z",
    "path": "../public/_nuxt/m2_close.e0589bc5.svg"
  },
  "/_nuxt/m2_gif101.99dbeda0.gif": {
    "type": "image/gif",
    "etag": "\"3feaab-j7NdS3fQ3qgSGIlnsDmLrG1jtVc\"",
    "mtime": "2022-08-02T08:28:33.602Z",
    "path": "../public/_nuxt/m2_gif101.99dbeda0.gif"
  },
  "/_nuxt/m2_gif102.465c8519.jpg": {
    "type": "image/jpeg",
    "etag": "\"10ad2-gCqKoUckV2hsQ/vcYAo6iXogqsw\"",
    "mtime": "2022-08-02T08:28:33.598Z",
    "path": "../public/_nuxt/m2_gif102.465c8519.jpg"
  },
  "/_nuxt/m2mo_event01.05a84139.jpg": {
    "type": "image/jpeg",
    "etag": "\"10116-CmNnK/4x7vjlr+sMzb3hDuNqACk\"",
    "mtime": "2022-08-02T08:28:33.598Z",
    "path": "../public/_nuxt/m2mo_event01.05a84139.jpg"
  },
  "/_nuxt/m2mo_islandbg.aefa03d8.jpg": {
    "type": "image/jpeg",
    "etag": "\"d8f7-CLDu1tp1svD14eyH9I2n3NZXwbs\"",
    "mtime": "2022-08-02T08:28:33.598Z",
    "path": "../public/_nuxt/m2mo_islandbg.aefa03d8.jpg"
  },
  "/_nuxt/m2mo_topbg.1ab16b12.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ad2c-OXedURFD529SKGUvtFeOmDJ9FEE\"",
    "mtime": "2022-08-02T08:28:33.597Z",
    "path": "../public/_nuxt/m2mo_topbg.1ab16b12.jpg"
  },
  "/_nuxt/m2pc_islandbg.dcb9802c.jpg": {
    "type": "image/jpeg",
    "etag": "\"28fa3-ABbSEFz18hH3vFi4P1RQFXx/vu8\"",
    "mtime": "2022-08-02T08:28:33.597Z",
    "path": "../public/_nuxt/m2pc_islandbg.dcb9802c.jpg"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"e52-ry4vXZIJrjFtvKgqAOBsBW+kSPU\"",
    "mtime": "2022-08-02T08:28:33.597Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/videobg.7d89539f.png": {
    "type": "image/png",
    "etag": "\"31da1-hyOBI3GAN5Oa569dq1f/KRGLL+E\"",
    "mtime": "2022-08-02T08:28:33.596Z",
    "path": "../public/_nuxt/videobg.7d89539f.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_EEQobV = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_EEQobV, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_EEQobV, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map