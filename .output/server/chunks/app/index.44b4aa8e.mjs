import { e as _export_sfc, _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_4 } from './server.mjs';
import { s as serverRenderer, v as vue_cjs_prod } from '../handlers/renderer.mjs';
import 'ufo';
import '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'unenv/runtime/mock/proxy';
import 'stream';

function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Pet = __nuxt_component_0$1;
  const _component_Airdrop = __nuxt_component_1;
  const _component_Gpginfo = __nuxt_component_2;
  const _component_Roadmap = __nuxt_component_3;
  const _component_Video = __nuxt_component_4;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Pet, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Airdrop, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Gpginfo, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Roadmap, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Video, null, null, _parent));
  _push(`</div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { index as default };
//# sourceMappingURL=index.44b4aa8e.mjs.map
