import {
  _ as j, c as y, o as f, q as N, I as K, s as G, f as L,
  a as i, b as r, i as I, x as R, t as D, w as m, g as u,
  k as Z, z as q, r as E, h as S, F as H, p as J, d as A
} from "./BVdw5vJQ.js";
import { _ as X } from "./BrHeijYS.js";
import { _ as Q } from "./C_ZdkJcR.js";
import { _ as W } from "./BnWJvLOa.js";
import { _ as Y } from "./0-e7FVdg.js";
import { _ as ee } from "./Cpznx1_E.js";
import { _ as oe } from "./DF4dXhcg.js";
import { u as z, r as F, m as te, a as T } from "./COQxO7zj.js";
import { u as ae } from "./C4HB1ECi.js";
import { u as O } from "./DOzJKxRB.js";
import { _ as se } from "./p7QnFScQ.js";
import { _ as ne } from "./DE8bu4_G.js";
import { b as ie } from "./CCYVfaL6.js";

const re = {};
const le = { width: "20", height: "21", viewBox: "0 0 20 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

function pe(_, o) {
  return f(), y("svg", le, [...o[0] || (o[0] = [N(/* svg path */)])])
}
const de = j(re, [["render", pe]]);

const ue = { class: "space-y-5 mt-8" };
const me = { class: "border border-yellow-500 bg-yellow-50 rounded-sm py-2 px-3 flex gap-2" };
const ce = { class: "flex gap-2 items-center" };
const fe = { key: 0 };
const _e = { class: "bg-gray-100 px-6 py-3 rounded-sm space-y-3" };
const Ce = { class: "flex gap-2 items-start" };
const ve = { class: "space-y-4" };
const ge = { class: "flex gap-2 items-center" };

const xe = {
  __name: "Item",
  props: K({
    item: { type: Object, default: () => ({}) }
  }, {
    modelValue: {
      type: Object,
      default: () => ({ rating: 0, courierRating: 0, description: "", photo: [], video: [], showUsername: !1 })
    }, modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(_) {
    const o = G(_, "modelValue"),
      V = {
        rating: { minValue: T(1), required: F },
        courierRating: { minValue: T(1), required: F },
        description: { minLength: te(50), required: F },
        photo: {}, video: {}
      },
      g = z(V, o, { $autoDirty: !0, $scope: "review" }),
      { maskText: C } = ae(),
      v = O(),
      p = L(() => `Username yang akan ditampilkan adalah ${C(v.profile.username, 1, 1)}`),
      c = ["Sangat Buruk", "Buruk", "Biasa", "Baik", "Sangat Baik"];

    return (B, t) => {
      const w = de, x = X, h = Q, U = W, b = Y, a = Z, e = ee, n = oe;
      return f(), y("div", ue, [
        i("div", me, [r(w), t[6] || (t[6] = i("span", { class: "font-medium" }, "Beri penilaian & dapatkan 25 Koin!", -1))]),
        r(x, { "hide-price": "", "hide-description": "", size: "sm", item: _.item }, null, 8, ["item"]),
        i("div", ce, [
          t[7] || (t[7] = i("span", { class: "w-44" }, "Kualitas Produk", -1)),
          r(h, { modelValue: o.value.rating, "onUpdate:modelValue": t[0] || (t[0] = s => o.value.rating = s), size: "lg", color: "yellow" }, null, 8, ["modelValue"]),
          i("span", { class: R({ "text-yellow-500": o.value.rating > 3, "text-black/55": o.value.rating <= 3 }) }, D(c[o.value.rating - 1]), 3)
        ]),
        o.value.rating ? (f(), y("div", fe, [
          i("div", _e, [
            r(b, { error: (u(g).description.$errors?.[0])?.$message }, {
              default: m(() => [
                r(U, { modelValue: o.value.description, "onUpdate:modelValue": t[1] || (t[1] = s => o.value.description = s), placeholder: "Bagikan penilaianmu..." }, null, 8, ["modelValue"])
              ]), _: 1
            }, 8, ["error"]),
            i("div", Ce, [
              r(e, { modelValue: o.value.photo, "onUpdate:modelValue": t[2] || (t[2] = s => o.value.photo = s), max: 2, class: "items-start !gap-2 flex-row-reverse" }, {
                activator: m(({ onChooseFile: s }) => [r(a, { size: "xs", variant: "soft", icon: "i-heroicons:camera-solid", label: "Tambah Foto", onClick: s }, null, 8, ["onClick"])]),
                _: 1
              }, 8, ["modelValue"]),
              r(e, { modelValue: o.value.video, "onUpdate:modelValue": t[3] || (t[3] = s => o.value.video = s), max: 1, class: "items-start !gap-2 flex-row-reverse", type: "video" }, {
                activator: m(({ onChooseFile: s }) => [r(a, { size: "xs", variant: "soft", icon: "i-heroicons:video-camera-solid", label: "Tambahkan video", onClick: s }, null, 8, ["onClick"])]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            t[8] || (t[8] = i("p", { class: "text-right text-black/55" }, " Tambahkan 50 karakter dengan 1 foto untuk mendapatkan 25 Koin! ", -1))
          ])
        ])) : I("", !0),
        r(n, { modelValue: o.value.showUsername, "onUpdate:modelValue": t[4] || (t[4] = s => o.value.showUsername = s), label: "Tampilkan username pada penilaian", help: u(p) }, null, 8, ["modelValue", "help"]),
        i("div", ve, [
          t[10] || (t[10] = i("p", { class: "text-base" }, "Tentang Layanan", -1)),
          i("div", ge, [
            t[9] || (t[9] = i("span", { class: "w-44" }, "Kecepatan Jasa Kirim", -1)),
            r(h, { modelValue: o.value.courierRating, "onUpdate:modelValue": t[5] || (t[5] = s => o.value.courierRating = s), size: "lg", color: "yellow" }, null, 8, ["modelValue"]),
            i("span", { class: R({ "text-yellow-500": o.value.courierRating > 3, "text-black/55": o.value.courierRating <= 3 }) }, D(c[o.value.courierRating - 1]), 3)
          ])
        ])
      ])
    }
  }
};

const he = { class: "flex justify-end gap-2 pt-6" };

const Se = {
  __name: "Review",
  props: { open: { type: Boolean, default: !1 }, openModifiers: {} },
  emits: ["update:open"],
  setup(_, { expose: o, emit }) {
    const V = O(), g = q(), C = G(_, "open"),
      v = E({}), p = E([{ uuid: "", rating: 0, courierRating: 0, description: "", photo: [], video: [], showUsername: !1 }]),
      c = z({}, p, { $scope: "review" });

    function B(a) {
      a && typeof a == "object" && (v.value = a, p.value = (v.value.items ?? []).map(n => ({
        uuid: n.uuid, rating: 0, courierRating: 0, description: "", photo: [], video: [], showUsername: !1
      })))
    }
    function t() {
      p.value = [{ uuid: "", rating: 0, courierRating: 0, description: "", photo: [], video: [], showUsername: !1 }];
      c.value.$reset(); C.value = !1
    }

    const { execute: w, status: x, error: h } = ie(() => Promise.all(p.value.map(a => b(a))), { immediate: !1 }, "$CLkXrspHra");

    async function U() {
      if (!await c.value.$validate()) {
        g.add({ color: "red", title: c.value.$errors?.[0]?.$message?.replace("value", "rating") });
        return
      }
      await w();
      !h.value && (emit("success"), t())
    }

    // PATCHED FUNCTION: tidak pakai API lagi, hanya simpan dummy
    async function b(a) {
      console.log("Review tersimpan (dummy):", a);
      return new Promise(resolve => {
        setTimeout(() => resolve({ success: true, data: a }), 500);
      });
    }

    return o({ setDefaultData: B }), (a, e) => {
      const n = xe, l = Z, d = se, s = ne;
      return f(), S(s, { modelValue: C.value, "onUpdate:modelValue": e[0] || (e[0] = k => C.value = k), "prevent-close": "" }, {
        default: m(() => [
          r(d, { class: "text-black/85 text-sm" }, {
            default: m(() => {
              var k;
              return [
                e[3] || (e[3] = i("p", { class: "text-xl font-normal" }, "Nilai Produk", -1)),
                (f(!0), y(H, null, J((k = u(v))?.items, ($, M) => (f(), S(n, {
                  key: $.uuid,
                  modelValue: u(p)[M],
                  "onUpdate:modelValue": P => u(p)[M] = P,
                  item: $
                }, null, 8, ["modelValue", "onUpdate:modelValue", "item"]))), 128)),
                i("div", he, [
                  r(l, { class: "min-w-36 justify-center", variant: "link", color: "gray", disabled: u(x) === "pending", onClick: t }, { default: m(() => [A(" Nanti Saja ")]), _: 1 }, 8, ["disabled"]),
                  r(l, { class: "min-w-36 justify-center", loading: u(x) === "pending", onClick: U }, { default: m(() => [A(" Ok ")]), _: 1 }, 8, ["loading"])
                ])
              ]
            }), _: 1
          })
        ]), _: 1
      }, 8, ["modelValue"])
    }
  }
};

export { Se as _ };
