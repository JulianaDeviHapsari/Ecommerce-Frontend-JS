import { ref, watchEffect } from 'vue';
import { i as i$1 } from './focus-management-vHH7q6nP.mjs';
import { o as o$1 } from './keyboard-Duq8EHr3.mjs';

function r(e) {
  return [e.screenX, e.screenY];
}
function u$1() {
  let e = ref([-1, -1]);
  return { wasMoved(n) {
    let t = r(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? false : (e.value = t, true);
  }, update(n) {
    e.value = r(n);
  } };
}
function i({ container: e, accept: t, walk: d, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e.value;
    if (!r2 || o2 !== void 0 && !o2.value) return;
    let l = i$1(e);
    if (!l) return;
    let c2 = Object.assign((f2) => t(f2), { acceptNode: t }), n = l.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n.nextNode(); ) d(n.currentNode);
  });
}
function u(l) {
  throw new Error("Unexpected object: " + l);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f(l, n) {
  let t = n.resolveItems();
  if (t.length <= 0) return null;
  let r2 = n.resolveActiveIndex(), s = r2 != null ? r2 : -1;
  switch (l.focus) {
    case 0: {
      for (let e = 0; e < t.length; ++e) if (!n.resolveDisabled(t[e], e, t)) return e;
      return r2;
    }
    case 1: {
      s === -1 && (s = t.length);
      for (let e = s - 1; e >= 0; --e) if (!n.resolveDisabled(t[e], e, t)) return e;
      return r2;
    }
    case 2: {
      for (let e = s + 1; e < t.length; ++e) if (!n.resolveDisabled(t[e], e, t)) return e;
      return r2;
    }
    case 3: {
      for (let e = t.length - 1; e >= 0; --e) if (!n.resolveDisabled(t[e], e, t)) return e;
      return r2;
    }
    case 4: {
      for (let e = 0; e < t.length; ++e) if (n.resolveId(t[e], e, t) === l.id) return e;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l);
  }
}
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e) {
  var r2, i2;
  let n = (r2 = e.innerText) != null ? r2 : "", t = e.cloneNode(true);
  if (!(t instanceof HTMLElement)) return n;
  let u2 = false;
  for (let f2 of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
  let l = u2 ? (i2 = t.innerText) != null ? i2 : "" : n;
  return a.test(l) && (l = l.replace(a, "")), l;
}
function g(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let u2 = t.split(" ").map((l) => {
      let r2 = (void 0).getElementById(l);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0) return u2.join(", ");
  }
  return o(e).trim();
}
function p(a2) {
  let t = ref(""), r2 = ref("");
  return () => {
    let e = o$1(a2);
    if (!e) return "";
    let l = e.innerText;
    if (t.value === l) return r2.value;
    let u2 = g(e).trim().toLowerCase();
    return t.value = l, r2.value = u2, u2;
  };
}

export { c, f, i, p, u$1 as u };
//# sourceMappingURL=use-text-value-CKO20D-4.mjs.map
