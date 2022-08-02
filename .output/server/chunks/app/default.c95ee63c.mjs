import { f as buildAssetsURL, e as _export_sfc } from './server.mjs';
import { v as vue_cjs_prod, s as serverRenderer } from '../handlers/renderer.mjs';
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

const _imports_0$2 = buildAssetsURL("i_logo_m1.162c4c80.svg");
const _sfc_main$4 = {
  setup() {
    let showMenu = vue_cjs_prod.ref(false);
    const toggleNav = () => {
      console.log("dodo");
      showMenu.value = !showMenu.value;
    };
    return { showMenu, toggleNav };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div><nav class="${serverRenderer.exports.ssrRenderClass([$setup.showMenu ? "bg-black" : "", "py-4 w-screen font-noto mx-auto md:flex md:justify-between md:items-center md:bg-[#00000000] md:h-auto"])}"><div class="flex items-center justify-between"><a href="/" class="pl-6 mr-20 text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0$2)} alt="" class="h-1/2 w-10/12"></a><div class="flex md:hidden"><button type="button" class="pr-6 text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"><svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg></button></div></div><ul class="${serverRenderer.exports.ssrRenderClass([$setup.showMenu ? "flex top-[20vh] h-[80vh]" : "hidden", "bg-black items-center flex-col mt-[-7rem] space-y-4 text-lg cursor-pointer md:flex md:space-y-0 md:flex-row md:items-center md:space-x-14 md:mt-0 md:bg-[#00000009] md:h-auto"])}"><li class="pt-[8rem] md:pt-0 text-gray-100 hover:text-[#7135E9]"><a href="#menu-1">\u8A8D\u8B58\u7926\u5BF5</a></li><li class="text-gray-100 hover:text-[#7135E9]"><a href="#menu-2">\u5982\u4F55\u6316\u7926</a></li><li class="text-gray-100 hover:text-[#7135E9]"><a href="#menu-3">\u88AB\u52D5\u6536\u5165</a></li><li class="text-gray-100 hover:text-[#7135E9]"><a href="#menu-4">\u904A\u6232\u7279\u8272</a></li><li class="text-gray-100 hover:text-[#7135E9]"><a href="#menu-5">\u9810\u7D04\u767B\u9304</a></li></ul><ul class="${serverRenderer.exports.ssrRenderClass([$setup.showMenu ? "flex" : "hidden", "flex-col mt-8 mr-4 space-y-4 text-lg cursor-pointer md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0"])}"><li class="hidden md:block text-gray-100 px-8 bg-[#7135E9] py-2 rounded-full hover:text-indigo-400"><a href="/">PLAY NOW</a></li></ul></nav></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "scrollBox",
    class: "font-noto pb-4"
  }, _attrs))}><p class="leading-2"> \u897F\u51432469\u5E74\uFF0C\u5168\u7403\u7D93\u6FDF\u5168\u9762\u74E6\u89E3\uFF0C\u4EBA\u985E\u7684\u751F\u5B58\u5DF2\u6210\u6B7B\u5C40\uFF0C\u800C\u4EBA\u985E\u4E5F\u5DF2\u7D93\u4E0D\u518D\u7E41\u884D\u5F8C\u4EE3\u3002\u4EBA\u985E\u907A\u50B3\u5B78\u8207\u751F\u7522\u6B0A\u5A01\u827E\u745E\u514B\u535A\u58EB\u70BA\u4E86\u62EF\u6551\u4EBA\u985E\u7684\u547D\u904B\uFF0C\u6C7A\u5B9A\u4F7F\u7528\u6642\u5149\u6A5F\u56DE\u52302022\u5E74\uFF0C\u628A\u4E00\u6B21\u4E00\u6B21\u5E6B\u52A9\u4EBA\u985E\u6E21\u904E\u96E3\u95DC\u7684\u79D1\u6280\u795E\u5BF5\uFF0C\u7528\u7A7A\u6295\u7684\u65B9\u5F0F\u964D\u843D\u56DE\u300C\u53E4\u4EE3\u300D <br><b class="text-4xl mt-4 block">\u300C\u7926\u5BF5\u300D</b><br> \u7942\u5011\u6B63\u5728\u5C0B\u627E\u5929\u9078\u4E4B\u4EBA\u3002\u53EA\u8981\u64C1\u6709\u7942\uFF0C\u7942\u6703\u5E6B\u52A9\u4F60\u627E\u5230\u6709\u50F9\u503C\u7684\u7926\u7522\u5BF6\u7269... </p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoText/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = buildAssetsURL("i_logo_m2.84595a1b.svg");
const _sfc_main$2 = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0$1;
  const _component_InfoText = __nuxt_component_1$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "w-full h-screen bg-moheaderImg md:bg-headerImg relative bg-no-repeat bg-cover",
    id: "header"
  }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Navbar, { class: "z-20 absolute" }, null, _parent));
  _push(`<div class="mine__top flex flex-col items-center justify-end h-full max-w-[800px] mx-auto p-[20px] md:p-0"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)} class="mb-0 md:mb-12 w-[187px] md:w-full mb-[20px] max-w-[490px]">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_InfoText, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const img1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABHNCSVQICAgIfAhkiAAAB85JREFUaEPNWmtsVEUUntldXkJBorwVod0CJVATTFqeqQu77RaF0sZECBjLD8Xw0KiJBYmIDxB+QEQeiokRAkRRAm0U27JbCvIorQhYlCJdoCLQQGOAUmEN3Tuec8std+/O3Mc+gEk2m9175pzzzXnOzKUkjmPgged6dgq2TmOEpBNK+lFC+jFG+uM3ioH/Gykll/EbfjTC/7X/dXYUX5iw+1q81ACesY3BFZOfsktSAXDJg894UNhuhSMADgH4A4SxkpDNvuv8pJ/+sjJfSxs1IKc/dzgl0kpC6POxKBA5l/0o2dmis649v0fD1zKgZJ97oI3YPwYgM8EatmiEGs0Bq0ngoNtaHXRJg6uswYhe/dwSoBRfziuU0jUwqYsVIdHSQqzdhrkLAu6yr8zyMAWoT3l21yQ73UoJnWaWcTzpANiOG/bg7CbXvhYjvoaAnBU5owij3wFhihGzRD5njNUzByswii1dQE6f901KGQZ+h0Qqa5a3GRcUAnL6ckdTKv0cC5gBXfqQAZ17h+l7s/UWqbt51iwGDh27I9kk19mJvkM8JlxAQyomDmCs4wmY8LhZyd0d3UhGz5Ek49F0ktkznaQlJetObW79l9RcqyXV8Km5ftISSMiCTcRBRwVcpRcN69DQg+OSpGDSQSBMNwMGrbBg8ExS0M9jhlxIg8B2NvrIrka/KT7gfsdb7cGxDa59Qd207fTnrIBsVmTENS0phbyb+qpsjXiOS8Er5LNzW00BY4StDLjLFwoBtRVNxxkomJ30lHz5yWlkQfIs0t3RNZ5YwnihxebVfkSaW8WZGgAFQ9Q+TN0uhcUQWOdbsM6LIi0xTtanvxd3q4jkYZy9dKxIN74A1Haw0nSFRzug1L3ZmUSyHdEDs2XUSsNgj7fJENTCU6uJv+mwkDWzsRGBieV/IEE7IKg5+8DVsniz0DIPAoxal7ngfiJQkPXKA54ybzugQZXZwzqEbHWiJdiQvoS4e42J9+Jb4oeWmnioUBhTd+xSWoNrz2nZQmCdhWCdT3gS3L3Gkg0QNw/D8DdVkbm1H3JVASstAitBhoaR6ss5QijN5FEezdqR0GxmdaGErsdYdb2nfDQdVDm5ryMUugzZLaJrKOjvISvS3rIqM6H0IitBtmN3OpIBNLUi5zXopj/naSGKnZprJ8msY++AK0bGliJQebawbjW5dPuKTJukqlt5NfNly2Oy4SmJiagkc31EL4h6ug4XyjwjBiWzaarf+wU8mKN9iAyPZn3PXe2157aRtee3QsszCwrszDAa7bMhFbny88KB+XJnoQzl/zOTSuVag4VUO0oy1nPLxPL6L8mmC7t4um2kTl9OMexC8YAjbGBLg6vHG9EAQj5qi/IAoYvn93XLIrG1EnUi2O8VnVoVoRrsmUqoKCHoZbdoAandiAeIZ3Hegiouz0FUTZ1+bwNkg6e0D/WYRwMIFwgLI658ScY6YuRyejGEDawLahJn/Aku5w3ymtF4A8L0n1czTw5mjCclBqKJIZGFwOVuYAxdhxjqkegYQsXrbp6TQamHGlCsLicDgix3GgQM1QJSXCNeSQEVx6G4q8I3GkCipAA8ZZcTNqWV4zZz64BWKUU5zGJoBXVKV8eKQqdO0yKX04shUbcA7c9+SAriPdDiIXMIbua0Q1StEdBNaCIxpa4c/jbJ7+cGF5svT8dEoAxsNNH1nujcRy4NvAVqA7QOFrRPmHjk/8z+F3iOA+f/bDtN8ed8aiP0DR6FnttxOd6HP0XegaIlwtYAIO90OKD+RqSLstL3QVdDEWgdTNeibTkciM+gziO53UmLdJ3XnKIENH3luE1hfZih5AQRYF+487JP5G7M3rmlh+H2AWc/DHuizX8Xk2VnNoqXStk+IIXeBk/h8CC3EqdbzpGp1eH1S4ssbINntAVXJms75gR5VhhbBDPr1yLd4yycELYFv2slYT1SS8AuXLu3SRQws2Cw/sD2+1nUo32XmrLXM84m2fEI2HDg8e/rsBfCOpOogbUOj6/0DhoV2XAsPBYuxarCALVZib83EimN1sL+Cw/p4zkME4BKGO6BAp7y9uofdo6QUpk9grbaTli9yUaLFfT1EEwc2usTK0Cxziyr3yhMzZxEECJ29rRyyBhhobuxtBQAvW9FETUtgkvrlgKfZOLpPYYMg28zA+OlCFzMyt0RxM4HEDtL1fwj74cYoc4Kbwk8mGJGESMaM5kRu2esMWbipV0eY7vr3eVTIAtACN0b3AsvuIXoYaOO33g7WSMA2ud6ZxNtjaz+uTVPHsTNBZJkGxkYXdqsfS6+ksTLYokeAPd7xCoINb0IkJUspuYHbnYLkvP4gKf0OE8v3Uvj1ApvIRj061gAaV3uUvAqpONV3GMrU3Lg7K1+UtkmEa3xtb7fOwbc9AdYlcdMCdQQKdtqdK9NF4rlzV90g/0D4T1FqTdRA8KJ+IKSQwqVwWnxMKvKYNZDt/NfrbIW9CpBeJ8aorZ8My82GVpI4YuXyaHb3bbwDiWtgrRCj4Uz2LV5xsWxVfiajOEwDUjh5NzrnUolthhcMMOQe2wEv0hEWn7WvafYChvLgO4By82ikoTAYrvPj9CW+Rmjy6Bg7rMCRKGNGpDCoO0FwFA+xFceZMQJVtsm+QVAQrAphhcAbTvNxIke0JgBqZk/DK9o/g9hcN3/YxIxXgAAAABJRU5ErkJggg==";
const img2 = "data:image/png;base64,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";
const img3 = "data:image/png;base64,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";
const _imports_0 = buildAssetsURL("i_logo_gpg.9c0dd693.png");
const _imports_1 = buildAssetsURL("i_15plus.391f3e97.jpg");
function ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="bg-[#1F1631] h-auto"><div class="md:w-[1220px] md:flex-row w-full m-auto flex justify-around flex-col"><div class="w-10/12 md:w-6/12 md:py-24 py-12 flex flex-col m-auto"><div class="md:w-8/12 w-full m-auto"><img class="w-4/12 md:w-auto mb-6 m-auto"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt=""><div class="flex flex-row justify-center"><!--[-->`);
  serverRenderer.exports.ssrRenderList($setup.iconlist, (item) => {
    _push(`<a class="w-[14%] mx-1"${serverRenderer.exports.ssrRenderAttr("href", item.href)} target="_blank"><img${serverRenderer.exports.ssrRenderAttr("src", item.url)}></a>`);
  });
  _push(`<!--]--></div></div></div><div class="md:w-8/12 md:gap-1 md:pt-20 md:pb-14 md:text-left w-full text-white grid grid-cols-2 gap-6 pt-10 pb-10 text-center"><!--[-->`);
  serverRenderer.exports.ssrRenderList($setup.hreflist, (item) => {
    _push(`<a${serverRenderer.exports.ssrRenderAttr("href", item.href)}><div>${serverRenderer.exports.ssrInterpolate(item.title)}</div></a>`);
  });
  _push(`<!--]--></div></div></div><div class="bg-black h-auto pt-10 pb-10"><div class="w-10/12 md:w-6/12 m-auto flex justify-center mb-16 flex-row"><div class="md:mr-4 w-3/12 md:w-4/12 flex items-center m-auto"><img class="md:w-5/12 m-auto w-full"${serverRenderer.exports.ssrRenderAttr("src", _imports_1)} alt=""></div><div class="text-[#ffffffa9] text-[12px] md:w-full w-8/12 flex flex-col"><!--[-->`);
  serverRenderer.exports.ssrRenderList($setup.rulelist, (item) => {
    _push(`<div><p>${serverRenderer.exports.ssrInterpolate(item.message)}</p></div>`);
  });
  _push(`<!--]--></div></div><div class="text-[#ffffffa9] flex justify-center">\xA92021 GOD PLAY GAME. All Rights Reserved.</div></div><!--]-->`);
}
const _sfc_main$1 = {
  setup() {
    const displayAwardView = vue_cjs_prod.ref(true);
    const iconlist = vue_cjs_prod.ref([
      { id: 1, url: img1, title: "LINE", href: "https://line.me/ti/p/@gpg.game" },
      { id: 2, url: img2, title: "Facebook", href: "https://www.facebook.com/GodPlayGameFun" },
      { id: 3, url: img3, title: "twitter", href: "https://twitter.com/GodGpg" },
      { id: 4, url: img1, title: "instagram", href: "https://www.instagram.com/gpg.godplaygame/" }
    ]);
    const hreflist = vue_cjs_prod.ref([
      { id: 1, title: "TOP", href: "#header" },
      { id: 2, title: "\u904A\u6232\u7279\u8272", href: "#menu-4" },
      { id: 3, title: "\u8A8D\u8B58\u7926\u5BF5", href: "#menu-1" },
      { id: 4, title: "\u9810\u7D04\u767B\u9304", href: "#menu-5" },
      { id: 7, title: "\u88AB\u52D5\u6536\u5165", href: "#menu-3" },
      { id: 8, title: "\u806F\u7D61\u6211\u5011", href: "https://line.me/ti/p/@gpg.game" }
    ]);
    const rulelist = vue_cjs_prod.ref([
      { id: 1, message: "\u8ACB\u52FF\u9577\u6642\u9593\u9023\u7E8C\u9032\u884C\u904A\u6232\uFF0C\u907F\u514D\u6C89\u8FF7\u3001\u5F71\u97FF\u8EAB\u5FC3\u5065\u5EB7\u3002" },
      { id: 2, message: "\u904A\u6232\u5167\u7686\u70BA\u865B\u64EC\u60C5\u7BC0\uFF0C\u8ACB\u52FF\u4EFB\u610F\u6A21\u4EFF\u3002" },
      { id: 3, message: "GPG\u5132\u503C\u9801\u9762\u70BA\u552F\u4E00\u8CFC\u5165\u904A\u6232\u9EDE\u6578\u4E4B\u5B98\u65B9\u7A97\u53E3\uFF0C\u4E00\u7D93\u8CFC\u5165\u514C\u63DB\u904A\u6232\u5E63\u5F8C\u7121\u6CD5\u4EE5\u4EFB\u4F55\u7406\u7531\u9000\u63DB\u73FE\u91D1\u3002" },
      { id: 4, message: "\u672C\u904A\u6232\u60C5\u7BC0\u6D89\u53CA\u68CB\u724C\u76CA\u667A\u53CA\u5A1B\u6A02\uFF0C \u4E0D\u5F97\u5229\u7528\u904A\u6232\u8CED\u535A\u3001\u5F9E\u4E8B\u9055\u53CD\u6CD5\u4EE4\u6216\u5176\u4ED6\u985E\u4F3C\u884C\u70BA\uFF0C\u4EA6\u8ACB\u52FF\u9032\u884C\u975E\u6CD5\u904A\u6232\u5E63\u4EA4\u6613\u3002" }
    ]);
    return {
      displayAwardView,
      rulelist,
      hreflist,
      iconlist
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", ssrRender$1]]);
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Header, null, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_main = {
  setup() {
    return {};
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.c95ee63c.mjs.map
