import { BrowserMultiFormatReader as i, Exception as m } from "@zxing/library";
import { defineComponent as l, openBlock as p, createElementBlock as h, withDirectives as u, createElementVNode as a, vShow as _, pushScopeId as f, popScopeId as v } from "vue";
const n = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, s] of t)
    r[o] = s;
  return r;
}, $ = {
  name: "image-barcode-reader",
  data() {
    return {
      codeReader: new i()
    };
  },
  methods: {
    onChangeInput(e) {
      const t = e.target.files || e.dataTransfer.files;
      if (!t.length)
        return;
      const r = new FileReader();
      r.onload = this.processFile, r.readAsDataURL(t[0]);
    },
    processFile(e) {
      this.$el.innerHTML += `<img id="image" src="${e.target.result}"/>`, this.codeReader.decodeFromImage("image").then((t) => {
        this.$emit("decode", t.text), this.$emit("result", t);
      }).catch((t) => this.$emit("error", t));
    }
  }
};
function g(e, t, r, o, s, c) {
  return null;
}
const B = /* @__PURE__ */ n($, [["render", g]]), I = l({
  name: "stream-barcode-reader",
  data() {
    return {
      isLoading: !0,
      codeReader: new i(),
      isMediaStreamAPISupported: navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices
    };
  },
  mounted() {
    if (!this.isMediaStreamAPISupported)
      throw new m("Media Stream API is not supported");
    this.start(), this.$refs.scanner.oncanplay = (e) => {
      this.isLoading = !1, this.$emit("loaded");
    };
  },
  beforeUnmount() {
    this.codeReader.reset();
  },
  methods: {
    start() {
      this.codeReader.decodeFromVideoDevice(void 0, this.$refs.scanner, (e, t) => {
        e && (this.$emit("decode", e.text), this.$emit("result", e));
      });
    }
  }
}), d = (e) => (f("data-v-d01ad009"), e = e(), v(), e), R = { class: "scanner-container" }, S = {
  poster: "data:image/gif,AAAA",
  ref: "scanner"
}, w = /* @__PURE__ */ d(() => /* @__PURE__ */ a("div", { class: "overlay-element" }, null, -1)), A = /* @__PURE__ */ d(() => /* @__PURE__ */ a("div", { class: "laser" }, null, -1));
function x(e, t, r, o, s, c) {
  return p(), h("div", R, [
    u(a("div", null, [
      a("video", S, null, 512),
      w,
      A
    ], 512), [
      [_, !e.isLoading]
    ])
  ]);
}
const L = /* @__PURE__ */ n(I, [["render", x], ["__scopeId", "data-v-d01ad009"]]);
export {
  B as ImageBarcodeReader,
  L as StreamBarcodeReader
};
