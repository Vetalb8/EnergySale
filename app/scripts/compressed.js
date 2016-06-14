!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document)throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = "length" in e && e.length, n = Z.type(e);
    return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function r(e, t, n) {
    if (Z.isFunction(t))return Z.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType)return Z.grep(e, function (e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (ae.test(t))return Z.filter(t, e, n);
      t = Z.filter(t, e)
    }
    return Z.grep(e, function (e) {
      return U.call(t, e) >= 0 !== n
    })
  }

  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function o(e) {
    var t = he[e] = {};
    return Z.each(e.match(de) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function s() {
    J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
  }

  function a() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    }), this.expando = Z.expando + a.uid++
  }

  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
      try {
        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
      } catch (i) {
      }
      ye.set(e, t, n)
    } else n = void 0;
    return n
  }

  function l() {
    return !0
  }

  function c() {
    return !1
  }

  function f() {
    try {
      return J.activeElement
    } catch (e) {
    }
  }

  function p(e, t) {
    return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function d(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function h(e) {
    var t = Pe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function g(e, t) {
    for (var n = 0, r = e.length; r > n; n++)ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
  }

  function m(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)for (n = 0, r = l[i].length; r > n; n++)Z.event.add(t, i, l[i][n])
      }
      ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
    }
  }

  function v(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
  }

  function y(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
  }

  function x(t, n) {
    var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
    return i.detach(), o
  }

  function b(e) {
    var t = J, n = $e[e];
    return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
  }

  function w(e, t, n) {
    var r, i, o, s, a = e.style;
    return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Be.test(s) && Ie.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function T(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function C(e, t) {
    if (t in e)return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)if (t = Ge[i] + n, t in e)return t;
    return r
  }

  function N(e, t, n) {
    var r = Xe.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function k(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
    return s
  }

  function E(e, t, n) {
    var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = _e(e), s = "border-box" === Z.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Be.test(i))return i;
      r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
  }

  function S(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
    for (s = 0; a > s; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    return e
  }

  function D(e, t, n, r, i) {
    return new D.prototype.init(e, t, n, r, i)
  }

  function j() {
    return setTimeout(function () {
      Qe = void 0
    }), Qe = Z.now()
  }

  function A(e, t) {
    var n, r = 0, i = {height: e};
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Te[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function L(e, t, n) {
    for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)if (r = i[o].call(n, t, e))return r
  }

  function q(e, t, n) {
    var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ce(e), g = ve.get(e, "fxshow");
    n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u()
    }), a.unqueued++, f.always(function () {
      f.always(function () {
        a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
    }));
    for (r in t)if (i = t[r], Ke.exec(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
        if ("show" !== i || !g || void 0 === g[r])continue;
        h = !0
      }
      p[r] = g && g[r] || Z.style(e, r)
    } else l = void 0;
    if (Z.isEmptyObject(p))"inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l); else {
      g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function () {
        Z(e).hide()
      }), f.done(function () {
        var t;
        ve.remove(e, "fxshow");
        for (t in p)Z.style(e, t, p[t])
      });
      for (r in p)s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function H(e, t) {
    var n, r, i, o, s;
    for (n in e)if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
      o = s.expand(o), delete e[r];
      for (n in o)n in e || (e[n] = o[n], t[n] = i)
    } else t[r] = i
  }

  function O(e, t, n) {
    var r, i, o = 0, s = tt.length, a = Z.Deferred().always(function () {
      delete u.elem
    }), u = function () {
      if (i)return !1;
      for (var t = Qe || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)l.tweens[s].run(o);
      return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
    }, l = a.promise({
      elem: e,
      props: Z.extend({}, t),
      opts: Z.extend(!0, {specialEasing: {}}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Qe || j(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r
      },
      stop: function (t) {
        var n = 0, r = t ? l.tweens.length : 0;
        if (i)return this;
        for (i = !0; r > n; n++)l.tweens[n].run(1);
        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
      }
    }), c = l.props;
    for (H(c, l.opts.specialEasing); s > o; o++)if (r = tt[o].call(l, e, c, l.opts))return r;
    return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function F(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0, o = t.toLowerCase().match(de) || [];
      if (Z.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function P(e, t, n, r) {
    function i(a) {
      var u;
      return o[a] = !0, Z.each(e[a] || [], function (e, a) {
        var l = a(t, n, r);
        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }

    var o = {}, s = e === xt;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function R(e, t) {
    var n, r, i = Z.ajaxSettings.flatOptions || {};
    for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && Z.extend(!0, e, r), e
  }

  function M(e, t, n) {
    for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)for (i in a)if (a[i] && a[i].test(r)) {
      u.unshift(i);
      break
    }
    if (u[0] in n)o = u[0]; else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break
        }
        s || (s = i)
      }
      o = o || s
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function W(e, t, n, r) {
    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
    if (c[1])for (s in e.converters)l[s.toLowerCase()] = e.converters[s];
    for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
      if (s = l[u + " " + o] || l["* " + o], !s)for (i in l)if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
        break
      }
      if (s !== !0)if (s && e["throws"])t = s(t); else try {
        t = s(t)
      } catch (f) {
        return {state: "parsererror", error: s ? f : "No conversion from " + u + " to " + o}
      }
    }
    return {state: "success", data: t}
  }

  function $(e, t, n, r) {
    var i;
    if (Z.isArray(t))Z.each(t, function (t, i) {
      n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    }); else if (n || "object" !== Z.type(t))r(e, t); else for (i in t)$(e + "[" + i + "]", t[i], n, r)
  }

  function I(e) {
    return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  var B = [], _ = B.slice, z = B.concat, X = B.push, U = B.indexOf, V = {}, Y = V.toString, G = V.hasOwnProperty, Q = {}, J = e.document, K = "2.1.4", Z = function (e, t) {
    return new Z.fn.init(e, t)
  }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function (e, t) {
    return t.toUpperCase()
  };
  Z.fn = Z.prototype = {
    jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
      return _.call(this)
    }, get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
    }, pushStack: function (e) {
      var t = Z.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
      return Z.each(this, e, t)
    }, map: function (e) {
      return this.pushStack(Z.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, slice: function () {
      return this.pushStack(_.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: X, sort: B.sort, splice: B.splice
  }, Z.extend = Z.fn.extend = function () {
    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
    return s
  }, Z.extend({
    expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isFunction: function (e) {
      return "function" === Z.type(e)
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
    }, isPlainObject: function (e) {
      return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }, isEmptyObject: function (e) {
      var t;
      for (t in e)return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      var t, n = eval;
      e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    }, camelCase: function (e) {
      return e.replace(te, "ms-").replace(ne, re)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, r) {
      var i, o = 0, s = e.length, a = n(e);
      if (r) {
        if (a)for (; s > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
      } else if (a)for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(ee, "")
    }, makeArray: function (e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
    }, inArray: function (e, t, n) {
      return null == t ? -1 : U.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
      return e.length = i, e
    }, grep: function (e, t, n) {
      for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)r = !t(e[o], o), r !== a && i.push(e[o]);
      return i
    }, map: function (e, t, r) {
      var i, o = 0, s = e.length, a = n(e), u = [];
      if (a)for (; s > o; o++)i = t(e[o], o, r), null != i && u.push(i); else for (o in e)i = t(e[o], o, r), null != i && u.push(i);
      return z.apply([], u)
    }, guid: 1, proxy: function (e, t) {
      var n, r, i;
      return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function () {
        return e.apply(t || this, r.concat(_.call(arguments)))
      }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
    }, now: Date.now, support: Q
  }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    V["[object " + t + "]"] = t.toLowerCase()
  });
  var ie = function (e) {
    function t(e, t, n, r) {
      var i, o, s, a, u, l, f, d, h, g;
      if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)return n;
      if (!r && O) {
        if (11 !== a && (i = ye.exec(e)))if (s = i[1]) {
          if (9 === a) {
            if (o = t.getElementById(s), !o || !o.parentNode)return n;
            if (o.id === s)return n.push(o), n
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s)return n.push(o), n
        } else {
          if (i[2])return K.apply(n, t.getElementsByTagName(e)), n;
          if ((s = i[3]) && w.getElementsByClassName)return K.apply(n, t.getElementsByClassName(s)), n
        }
        if (w.qsa && (!F || !F.test(e))) {
          if (d = f = W, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;)l[u] = d + p(l[u]);
            h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
          }
          if (g)try {
            return K.apply(n, h.querySelectorAll(g)), n
          } catch (m) {
          } finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return S(e.replace(ue, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
      }

      var t = [];
      return e
    }

    function r(e) {
      return e[W] = !0, e
    }

    function i(e) {
      var t = q.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--;)T.attrHandle[n[r]] = t
    }

    function s(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r)return r;
      if (n)for (; n = n.nextSibling;)if (n === t)return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--;)n[i = o[s]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function c(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    function f() {
    }

    function p(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
      return r
    }

    function d(e, t, n) {
      var r = t.dir, i = n && "parentNode" === r, o = B++;
      return t.first ? function (t, n, o) {
        for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
      } : function (t, n, s) {
        var a, u, l = [I, o];
        if (s) {
          for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, s))return !0
        } else for (; t = t[r];)if (1 === t.nodeType || i) {
          if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === I && a[1] === o)return l[2] = a[2];
          if (u[r] = l, l[2] = e(t, n, s))return !0
        }
      }
    }

    function h(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
        return !0
      } : e[0]
    }

    function g(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
      return r
    }

    function m(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s
    }

    function v(e, t, n, i, o, s) {
      return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function (r, s, a, u) {
        var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
        if (n && n(y, x, a, u), i)for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
              o(null, x = [], l, u)
            }
            for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
          }
        } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
      })
    }

    function y(e) {
      for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function (e) {
        return e === t
      }, s, !0), l = d(function (e) {
        return ee(t, e) > -1
      }, s, !0), c = [function (e, n, r) {
        var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
        return t = null, i
      }]; i > a; a++)if (n = T.relative[e[a].type])c = [d(h(c), n)]; else {
        if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
          for (r = ++a; i > r && !T.relative[e[r].type]; r++);
          return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
        }
        c.push(n)
      }
      return h(c)
    }

    function x(e, n) {
      var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, l) {
        var c, f, p, d = 0, h = "0", g = r && [], v = [], y = D, x = r || o && T.find.TAG("*", l), b = I += null == y ? 1 : Math.random() || .1, w = x.length;
        for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
          if (o && c) {
            for (f = 0; p = e[f++];)if (p(c, s, a)) {
              u.push(c);
              break
            }
            l && (I = b)
          }
          i && ((c = !p && c) && d--, r && g.push(c))
        }
        if (d += h, i && h !== d) {
          for (f = 0; p = n[f++];)p(g, v, s, a);
          if (r) {
            if (d > 0)for (; h--;)g[h] || v[h] || (v[h] = Q.call(u));
            v = m(v)
          }
          K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
        }
        return l && (I = b, D = y), g
      };
      return i ? r(s) : s
    }

    var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date, $ = e.document, I = 0, B = 0, _ = n(), z = n(), X = n(), U = function (e, t) {
      return e === t && (A = !0), 0
    }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function (e, t) {
      for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
      return -1
    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(se), de = new RegExp("^" + ie + "$"), he = {
      ID: new RegExp("^#(" + re + ")"),
      CLASS: new RegExp("^\\.(" + re + ")"),
      TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + oe),
      PSEUDO: new RegExp("^" + se),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + te + ")$", "i"),
      needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
    }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function (e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    }, Ce = function () {
      L()
    };
    try {
      K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
    } catch (Ne) {
      K = {
        apply: G.length ? function (e, t) {
          J.apply(e, Z.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, N = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    }, L = t.setDocument = function (e) {
      var t, n, r = e ? e.ownerDocument || e : $;
      return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = !N(r), w.attributes = i(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = i(function (e) {
        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function (e) {
        return H.appendChild(e).id = W, !r.getElementsByName || !r.getElementsByName(W).length
      }), w.getById ? (T.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && O) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, T.filter.ID = function (e) {
        var t = e.replace(we, Te);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (delete T.find.ID, T.filter.ID = function (e) {
        var t = e.replace(we, Te);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];)1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
          return O ? t.getElementsByClassName(e) : void 0
        }, P = [], F = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function (e) {
        H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
      }), i(function (e) {
        var t = r.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
      })), (w.matchesSelector = ve.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
        w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", se)
      }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), M = t || ve.test(H.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t)for (; t = t.parentNode;)if (t === e)return !0;
        return !1
      }, U = t ? function (e, t) {
        if (e === t)return A = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t)return A = !0, 0;
        var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
        if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
        if (o === a)return s(e, t);
        for (n = e; n = n.parentNode;)u.unshift(n);
        for (n = t; n = n.parentNode;)l.unshift(n);
        for (; u[i] === l[i];)i++;
        return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
      }, r) : q
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n)))try {
        var r = R.call(e, n);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
      } catch (i) {
      }
      return t(n, q, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== q && L(e), M(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== q && L(e);
      var n = T.attrHandle[t.toLowerCase()], r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
      return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0;
      if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
        for (; t = e[i++];)t === e[i] && (r = n.push(i));
        for (; r--;)e.splice(n[r], 1)
      }
      return j = null, e
    }, C = t.getText = function (e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent)return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
        } else if (3 === i || 4 === i)return e.nodeValue
      } else for (; t = e[r++];)n += C(t);
      return n
    }, T = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(we, Te).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = _[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, n, r) {
          return function (i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
          }
        }, CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode
          } : function (t, n, u) {
            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a;
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = t; f = f[g];)if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? m.firstChild : m.lastChild], s && y) {
                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === t) {
                  c[e] = [I, d, p];
                  break
                }
              } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I)p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]), f !== t)););
              return p -= i, p === r || p % r === 0 && p / r >= 0
            }
          }
        }, PSEUDO: function (e, n) {
          var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = o(e, n), s = i.length; s--;)r = ee(e, i[s]), e[r] = !(t[r] = i[s])
          }) : function (e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function (e) {
          var t = [], n = [], i = E(e.replace(ue, "$1"));
          return i[W] ? r(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
          }
        }), has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }), contains: r(function (e) {
          return e = e.replace(we, Te), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
          }
        }), lang: r(function (e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function (t) {
            var n;
            do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === H
        }, focus: function (e) {
          return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return e.disabled === !1
        }, disabled: function (e) {
          return e.disabled === !0
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
          return !0
        }, parent: function (e) {
          return !T.pseudos.empty(e)
        }, header: function (e) {
          return me.test(e.nodeName)
        }, input: function (e) {
          return ge.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: l(function () {
          return [0]
        }), last: l(function (e, t) {
          return [t - 1]
        }), eq: l(function (e, t, n) {
          return [0 > n ? n + t : n]
        }), even: l(function (e, t) {
          for (var n = 0; t > n; n += 2)e.push(n);
          return e
        }), odd: l(function (e, t) {
          for (var n = 1; t > n; n += 2)e.push(n);
          return e
        }), lt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
          return e
        }), gt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
          return e
        })
      }
    }, T.pseudos.nth = T.pseudos.eq;
    for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[b] = a(b);
    for (b in{submit: !0, reset: !0})T.pseudos[b] = u(b);
    return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
      var r, i, o, s, a, u, l, c = z[e + " "];
      if (c)return n ? 0 : c.slice(0);
      for (a = e, u = [], l = T.preFilter; a;) {
        (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(ue, " ")
        }), a = a.slice(r.length));
        for (s in T.filter)!(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
          value: r,
          type: s,
          matches: i
        }), a = a.slice(r.length));
        if (!r)break
      }
      return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
    }, E = t.compile = function (e, t) {
      var n, r = [], i = [], o = X[e + " "];
      if (!o) {
        for (t || (t = k(e)), n = t.length; n--;)o = y(t[n]), o[W] ? r.push(o) : i.push(o);
        o = X(e, x(i, r)), o.selector = e
      }
      return o
    }, S = t.select = function (e, t, n, r) {
      var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
          if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t)return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
          if (o.splice(i, 1), e = r.length && p(o), !e)return K.apply(n, r), n;
          break
        }
      }
      return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(q.createElement("div"))
    }), i(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), i(function (e) {
      return null == e.getAttribute("disabled")
    }) || o(te, function (e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
  var oe = Z.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
  Z.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, Z.fn.extend({
    find: function (e) {
      var t, n = this.length, r = [], i = this;
      if ("string" != typeof e)return this.pushStack(Z(e).filter(function () {
        for (t = 0; n > t; t++)if (Z.contains(i[t], this))return !0
      }));
      for (t = 0; n > t; t++)Z.find(e, i[t], r);
      return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    }, filter: function (e) {
      return this.pushStack(r(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(r(this, e || [], !0))
    }, is: function (e) {
      return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
    }
  });
  var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function (e, t) {
    var n, r;
    if (!e)return this;
    if ("string" == typeof e) {
      if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))for (n in t)Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this
      }
      return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
  };
  ce.prototype = Z.fn, ue = Z(J);
  var fe = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
  Z.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
        if (i && Z(e).is(n))break;
        r.push(e)
      }
      return r
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), Z.fn.extend({
    has: function (e) {
      var t = Z(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++)if (Z.contains(this, t[e]))return !0
      })
    }, closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(o.length > 1 ? Z.unique(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), Z.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return Z.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return Z.dir(e, "parentNode", n)
    }, next: function (e) {
      return i(e, "nextSibling")
    }, prev: function (e) {
      return i(e, "previousSibling")
    }, nextAll: function (e) {
      return Z.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return Z.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return Z.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return Z.dir(e, "previousSibling", n)
    }, siblings: function (e) {
      return Z.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return Z.sibling(e.firstChild)
    }, contents: function (e) {
      return e.contentDocument || Z.merge([], e.childNodes)
    }
  }, function (e, t) {
    Z.fn[e] = function (n, r) {
      var i = Z.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var de = /\S+/g, he = {};
  Z.Callbacks = function (e) {
    e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
    var t, n, r, i, s, a, u = [], l = !e.once && [], c = function (o) {
      for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
        t = !1;
        break
      }
      r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
    }, f = {
      add: function () {
        if (u) {
          var n = u.length;
          !function o(t) {
            Z.each(t, function (t, n) {
              var r = Z.type(n);
              "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
            })
          }(arguments), r ? s = u.length : t && (i = n, c(t))
        }
        return this
      }, remove: function () {
        return u && Z.each(arguments, function (e, t) {
          for (var n; (n = Z.inArray(t, u, n)) > -1;)u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
        }), this
      }, has: function (e) {
        return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
      }, empty: function () {
        return u = [], s = 0, this
      }, disable: function () {
        return u = l = t = void 0, this
      }, disabled: function () {
        return !u
      }, lock: function () {
        return l = void 0, t || f.disable(), this
      }, locked: function () {
        return !l
      }, fireWith: function (e, t) {
        return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!n
      }
    };
    return f
  }, Z.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", r = {
        state: function () {
          return n
        }, always: function () {
          return i.done(arguments).fail(arguments), this
        }, then: function () {
          var e = arguments;
          return Z.Deferred(function (n) {
            Z.each(t, function (t, o) {
              var s = Z.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = s && s.apply(this, arguments);
                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
              })
            }), e = null
          }).promise()
        }, promise: function (e) {
          return null != e ? Z.extend(e, r) : r
        }
      }, i = {};
      return r.pipe = r.then, Z.each(t, function (e, o) {
        var s = o[2], a = o[3];
        r[o[1]] = s.add, a && s.add(function () {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = s.fireWith
      }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
      var t, n, r, i = 0, o = _.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(), l = function (e, n, r) {
        return function (i) {
          n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
        }
      };
      if (s > 1)for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++)o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
      return a || u.resolveWith(r, o), u.promise()
    }
  });
  var ge;
  Z.fn.ready = function (e) {
    return Z.ready.promise().done(e), this
  }, Z.extend({
    isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? Z.readyWait++ : Z.ready(!0)
    }, ready: function (e) {
      (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
    }
  }), Z.ready.promise = function (t) {
    return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
  }, Z.ready.promise();
  var me = Z.access = function (e, t, n, r, i, o, s) {
    var a = 0, u = e.length, l = null == n;
    if ("object" === Z.type(n)) {
      i = !0;
      for (a in n)Z.access(e, t, a, n[a], !0, o, s)
    } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(Z(e), n)
      })), t))for (; u > a; a++)t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };
  Z.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
    key: function (e) {
      if (!a.accepts(e))return 0;
      var t = {}, n = e[this.expando];
      if (!n) {
        n = a.uid++;
        try {
          t[this.expando] = {value: n}, Object.defineProperties(e, t)
        } catch (r) {
          t[this.expando] = n, Z.extend(e, t)
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n
    }, set: function (e, t, n) {
      var r, i = this.key(e), o = this.cache[i];
      if ("string" == typeof t)o[t] = n; else if (Z.isEmptyObject(o))Z.extend(this.cache[i], t); else for (r in t)o[r] = t[r];
      return o
    }, get: function (e, t) {
      var n = this.cache[this.key(e)];
      return void 0 === t ? n : n[t]
    }, access: function (e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, r, i, o = this.key(e), s = this.cache[o];
      if (void 0 === t)this.cache[o] = {}; else {
        Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
        for (; n--;)delete s[r[n]]
      }
    }, hasData: function (e) {
      return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
    }, discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var ve = new a, ye = new a, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
  Z.extend({
    hasData: function (e) {
      return ye.hasData(e) || ve.hasData(e)
    }, data: function (e, t, n) {
      return ye.access(e, t, n)
    }, removeData: function (e, t) {
      ye.remove(e, t)
    }, _data: function (e, t, n) {
      return ve.access(e, t, n)
    }, _removeData: function (e, t) {
      ve.remove(e, t)
    }
  }), Z.fn.extend({
    data: function (e, t) {
      var n, r, i, o = this[0], s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;)s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
          ve.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function () {
        ye.set(this, e)
      }) : me(this, function (t) {
        var n, r = Z.camelCase(e);
        if (o && void 0 === t) {
          if (n = ye.get(o, e), void 0 !== n)return n;
          if (n = ye.get(o, r), void 0 !== n)return n;
          if (n = u(o, r, void 0), void 0 !== n)return n
        } else this.each(function () {
          var n = ye.get(this, r);
          ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        ye.remove(this, e)
      })
    }
  }), Z.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), s = function () {
        Z.dequeue(e, t)
      };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return ve.get(e, n) || ve.access(e, n, {
          empty: Z.Callbacks("once memory").add(function () {
            ve.remove(e, [t + "queue", n])
          })
        })
    }
  }), Z.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = Z.queue(this, e, t);
        Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        Z.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function () {
        --r || i.resolveWith(o, [o])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t)
    }
  });
  var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"], Ce = function (e, t) {
    return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
  }, Ne = /^(?:checkbox|radio)$/i;
  !function () {
    var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var ke = "undefined";
  Q.focusinBubbles = "onfocusin" in e;
  var Ee = /^key/, Se = /^(?:mouse|pointer|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, je = /^([^.]*)(?:\.(.+)|)$/;
  Z.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
      if (m)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
        return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
      }), t = (t || "").match(de) || [""], l = t.length; l--;)a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
        type: d,
        origType: g,
        data: r,
        handler: n,
        guid: n.guid,
        selector: i,
        needsContext: i && Z.expr.match.needsContext.test(i),
        namespace: h.join(".")
      }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
    },
    remove: function (e, t, n, r, i) {
      var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(de) || [""], l = t.length; l--;)if (a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
          for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
        } else for (d in u)Z.event.remove(e, d + t[l], n, r, !0);
        Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
      }
    },
    trigger: function (t, n, r, i) {
      var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !Z.isWindow(r)) {
          for (u = f.delegateType || d, De.test(u + d) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
          a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0; (s = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
      }
    },
    dispatch: function (e) {
      e = Z.event.fix(e);
      var t, n, r, i, o, s = [], a = _.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type))for (; u !== this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) {
        for (r = [], n = 0; a > n; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
        r.length && s.push({elem: u, handlers: r})
      }
      return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n, r, i, o = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    fix: function (e) {
      if (e[Z.expando])return e;
      var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
      for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
      return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== f() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === f() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (e) {
          return Z.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
      r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, Z.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }, Z.Event = function (e, t) {
    return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
  }, Z.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, Z.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    Z.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), Q.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = function (e) {
      Z.event.simulate(t, e.target, Z.event.fix(e), !0)
    };
    Z.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this, i = ve.access(r, t);
        i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
      }, teardown: function () {
        var r = this.ownerDocument || this, i = ve.access(r, t) - 1;
        i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
      }
    }
  }), Z.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (s in e)this.on(s, t, n, e[s], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)r = c; else if (!r)return this;
      return 1 === i && (o = r, r = function (e) {
        return Z().off(e), o.apply(this, arguments)
      }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
        Z.event.add(this, e, r, n, t)
      })
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    }, off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e)this.off(i, t, e[i]);
        return this
      }
      return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
        Z.event.remove(this, e, n, t)
      })
    }, trigger: function (e, t) {
      return this.each(function () {
        Z.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      return n ? Z.event.trigger(e, t, n, !0) : void 0
    }
  });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Le = /<([\w:]+)/, qe = /<|&#?\w+;/, He = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^$|\/(?:java|ecma)script/i, Pe = /^true\/(.*)/, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Me = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
    clone: function (e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
      if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++)y(o[r], s[r]);
      if (t)if (n)for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++)m(o[r], s[r]); else m(e, a);
      return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
    }, buildFragment: function (e, t, n, r) {
      for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)if (i = e[p], i || 0 === i)if ("object" === Z.type(i))Z.merge(f, i.nodeType ? [i] : i); else if (qe.test(i)) {
        for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Me[s] || Me._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;)o = o.lastChild;
        Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
      } else f.push(t.createTextNode(i));
      for (c.textContent = "", p = 0; i = f[p++];)if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))for (l = 0; i = o[l++];)Fe.test(i.type || "") && n.push(i);
      return c
    }, cleanData: function (e) {
      for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
          if (t.events)for (r in t.events)o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
          ve.cache[i] && delete ve.cache[i]
        }
        delete ye.cache[n[ye.expando]]
      }
    }
  }), Z.fn.extend({
    text: function (e) {
      return me(this, function (e) {
        return void 0 === e ? Z.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);
          t.appendChild(e)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, remove: function (e, t) {
      for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
      return this
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return Z.clone(this, e, t)
      })
    }, html: function (e) {
      return me(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
        if ("string" == typeof e && !He.test(e) && !Me[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Ae, "<$1></$2>");
          try {
            for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
            t = 0
          } catch (i) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = arguments[0];
      return this.domManip(arguments, function (t) {
        e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (e, t) {
      e = z.apply([], e);
      var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
      if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p))return this.each(function (n) {
        var r = c.eq(n);
        g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
      });
      if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
        for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++)s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
        if (o)for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++)s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Re, "")))
      }
      return this
    }
  }), Z.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    Z.fn[e] = function (e) {
      for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var We, $e = {}, Ie = /^margin/, Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), _e = function (t) {
    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
  };
  !function () {
    function t() {
      s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
      var t = e.getComputedStyle(s, null);
      n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
    }

    var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
      pixelPosition: function () {
        return t(), n
      }, boxSizingReliable: function () {
        return null == r && t(), r
      }, reliableMarginRight: function () {
        var t, n = s.appendChild(J.createElement("div"));
        return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
      }
    }))
  }(), Z.swap = function (e, t, n, r) {
    var i, o, s = {};
    for (o in t)s[o] = e.style[o], e.style[o] = t[o];
    i = n.apply(e, r || []);
    for (o in t)e.style[o] = s[o];
    return i
  };
  var ze = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + we + ")(.*)$", "i"), Ue = new RegExp("^([+-])=(" + we + ")", "i"), Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Ye = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "O", "Moz", "ms"];
  Z.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = w(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": "cssFloat"},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = Z.camelCase(t), u = e.style;
        return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
      }
    },
    css: function (e, t, n, r) {
      var i, o, s, a = Z.camelCase(t);
      return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
    }
  }), Z.each(["height", "width"], function (e, t) {
    Z.cssHooks[t] = {
      get: function (e, n, r) {
        return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
          return E(e, t, r)
        }) : E(e, t, r) : void 0
      }, set: function (e, n, r) {
        var i = r && _e(e);
        return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function (e, t) {
    return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
  }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    Z.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, Ie.test(e) || (Z.cssHooks[e + t].set = N)
  }), Z.fn.extend({
    css: function (e, t) {
      return me(this, function (e, t, n) {
        var r, i, o = {}, s = 0;
        if (Z.isArray(t)) {
          for (r = _e(e), i = t.length; i > s; s++)o[t[s]] = Z.css(e, t[s], !1, r);
          return o
        }
        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
      }, e, t, arguments.length > 1)
    }, show: function () {
      return S(this, !0)
    }, hide: function () {
      return S(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Ce(this) ? Z(this).show() : Z(this).hide()
      })
    }
  }), Z.Tween = D, D.prototype = {
    constructor: D, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = D.propHooks[this.prop];
      return e && e.get ? e.get(this) : D.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = D.propHooks[this.prop];
      return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
    }
  }, D.prototype.init.prototype = D.prototype, D.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      }, set: function (e) {
        Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, Z.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, Z.fx = D.prototype.init, Z.fx.step = {};
  var Qe, Je, Ke = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [q], nt = {
    "*": [function (e, t) {
      var n = this.createTween(e, t), r = n.cur(), i = Ze.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"), s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)), a = 1, u = 20;
      if (s && s[3] !== o) {
        o = o || s[3], i = i || [], s = +r || 1;
        do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
      }
      return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
    }]
  };
  Z.Animation = Z.extend(O, {
    tweener: function (e, t) {
      Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, r = 0, i = e.length; i > r; r++)n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
    }, prefilter: function (e, t) {
      t ? tt.unshift(e) : tt.push(e)
    }
  }), Z.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? Z.extend({}, e) : {
      complete: n || !n && t || Z.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !Z.isFunction(t) && t
    };
    return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
    }, r
  }, Z.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
      var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), s = function () {
        var t = O(this, Z.extend({}, e), o);
        (i || ve.get(this, "finish")) && t.stop(!0)
      };
      return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
    }, stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0, i = null != e && e + "queueHooks", o = Z.timers, s = ve.get(this);
        if (i)s[i] && s[i].stop && r(s[i]); else for (i in s)s[i] && s[i].stop && et.test(i) && r(s[i]);
        for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        (t || !n) && Z.dequeue(this, e)
      })
    }, finish: function (e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
        for (n.finish = !0, Z.queue(this, e, []),
             i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; s > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), Z.each(["toggle", "show", "hide"], function (e, t) {
    var n = Z.fn[t];
    Z.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
    }
  }), Z.each({
    slideDown: A("show"),
    slideUp: A("hide"),
    slideToggle: A("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, t) {
    Z.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), Z.timers = [], Z.fx.tick = function () {
    var e, t = 0, n = Z.timers;
    for (Qe = Z.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
    n.length || Z.fx.stop(), Qe = void 0
  }, Z.fx.timer = function (e) {
    Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
  }, Z.fx.interval = 13, Z.fx.start = function () {
    Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
  }, Z.fx.stop = function () {
    clearInterval(Je), Je = null
  }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
    return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
      var r = setTimeout(t, e);
      n.stop = function () {
        clearTimeout(r)
      }
    })
  }, function () {
    var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
    e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
  }();
  var rt, it, ot = Z.expr.attrHandle;
  Z.fn.extend({
    attr: function (e, t) {
      return me(this, Z.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        Z.removeAttr(this, e)
      })
    }
  }), Z.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
    }, removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(de);
      if (o && 1 === e.nodeType)for (; n = o[i++];)r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), it = {
    set: function (e, t, n) {
      return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ot[t] || Z.find.attr;
    ot[t] = function (e, t, r) {
      var i, o;
      return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
    }
  });
  var st = /^(?:input|select|textarea|button)$/i;
  Z.fn.extend({
    prop: function (e, t) {
      return me(this, Z.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[Z.propFix[e] || e]
      })
    }
  }), Z.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
      var r, i, o, s = e.nodeType;
      return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
        }
      }
    }
  }), Q.optSelected || (Z.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }
  }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    Z.propFix[this.toLowerCase()] = this
  });
  var at = /[\t\r\n\f]/g;
  Z.fn.extend({
    addClass: function (e) {
      var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
      if (Z.isFunction(e))return this.each(function (t) {
        Z(this).addClass(e.call(this, t, this.className))
      });
      if (a)for (t = (e || "").match(de) || []; l > u; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
        for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
        s = Z.trim(r), n.className !== s && (n.className = s)
      }
      return this
    }, removeClass: function (e) {
      var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
      if (Z.isFunction(e))return this.each(function (t) {
        Z(this).removeClass(e.call(this, t, this.className))
      });
      if (a)for (t = (e || "").match(de) || []; l > u; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
        for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
        Z(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function () {
        if ("string" === n)for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
      })
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)return !0;
      return !1
    }
  });
  var ut = /\r/g;
  Z.fn.extend({
    val: function (e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = Z.isFunction(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
          return null == e ? "" : e + ""
        })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
      })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
    }
  }), Z.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = Z.find.attr(e, "value");
          return null != t ? t : Z.trim(Z.text(e))
        }
      }, select: {
        get: function (e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
            if (t = Z(n).val(), o)return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;)r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), Z.each(["radio", "checkbox"], function () {
    Z.valHooks[this] = {
      set: function (e, t) {
        return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
      }
    }, Q.checkOn || (Z.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    Z.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), Z.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var lt = Z.now(), ct = /\?/;
  Z.parseJSON = function (e) {
    return JSON.parse(e + "")
  }, Z.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e)return null;
    try {
      n = new DOMParser, t = n.parseFromString(e, "text/xml")
    } catch (r) {
      t = void 0
    }
    return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
  };
  var ft = /#.*$/, pt = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, xt = {}, bt = "*/".concat("*"), wt = e.location.href, Tt = vt.exec(wt.toLowerCase()) || [];
  Z.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: wt,
      type: "GET",
      isLocal: ht.test(Tt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": bt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
    },
    ajaxPrefilter: F(yt),
    ajaxTransport: F(xt),
    ajax: function (e, t) {
      function n(e, t, n, s) {
        var u, c, v, y, b, T = t;
        2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
      }

      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (2 === x) {
            if (!s)for (s = {}; t = dt.exec(o);)s[t[1].toLowerCase()] = t[2];
            t = s[e.toLowerCase()]
          }
          return null == t ? null : t
        },
        getAllResponseHeaders: function () {
          return 2 === x ? o : null
        },
        setRequestHeader: function (e, t) {
          var n = e.toLowerCase();
          return x || (e = y[n] = y[n] || e, v[e] = t), this
        },
        overrideMimeType: function (e) {
          return x || (f.mimeType = e), this
        },
        statusCode: function (e) {
          var t;
          if (e)if (2 > x)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
          return this
        },
        abort: function (e) {
          var t = e || b;
          return r && r.abort(t), n(0, t), this
        }
      };
      if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(yt, f, t, w), 2 === x)return w;
      l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
      for (c in f.headers)w.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))return w.abort();
      b = "abort";
      for (c in{success: 1, error: 1, complete: 1})w[c](f[c]);
      if (r = P(xt, f, t, w)) {
        w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
          w.abort("timeout")
        }, f.timeout));
        try {
          x = 1, r.send(v, n)
        } catch (T) {
          if (!(2 > x))throw T;
          n(-1, T)
        }
      } else n(-1, "No Transport");
      return w
    },
    getJSON: function (e, t, n) {
      return Z.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return Z.get(e, void 0, t, "script")
    }
  }), Z.each(["get", "post"], function (e, t) {
    Z[t] = function (e, n, r, i) {
      return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  }), Z._evalUrl = function (e) {
    return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  }, Z.fn.extend({
    wrapAll: function (e) {
      var t;
      return Z.isFunction(e) ? this.each(function (t) {
        Z(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;)e = e.firstElementChild;
        return e
      }).append(this)), this)
    }, wrapInner: function (e) {
      return this.each(Z.isFunction(e) ? function (t) {
        Z(this).wrapInner(e.call(this, t))
      } : function () {
        var t = Z(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = Z.isFunction(e);
      return this.each(function (n) {
        Z(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
      }).end()
    }
  }), Z.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, Z.expr.filters.visible = function (e) {
    return !Z.expr.filters.hidden(e)
  };
  var Ct = /%20/g, Nt = /\[\]$/, kt = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i, St = /^(?:input|select|textarea|keygen)/i;
  Z.param = function (e, t) {
    var n, r = [], i = function (e, t) {
      t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))Z.each(e, function () {
      i(this.name, this.value)
    }); else for (n in e)$(n, e[n], t, i);
    return r.join("&").replace(Ct, "+")
  }, Z.fn.extend({
    serialize: function () {
      return Z.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = Z.prop(this, "elements");
        return e ? Z.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
      }).map(function (e, t) {
        var n = Z(this).val();
        return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
          return {name: t.name, value: e.replace(kt, "\r\n")}
        }) : {name: t.name, value: n.replace(kt, "\r\n")}
      }).get()
    }
  }), Z.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (e) {
    }
  };
  var Dt = 0, jt = {}, At = {0: 200, 1223: 204}, Lt = Z.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function () {
    for (var e in jt)jt[e]()
  }), Q.cors = !!Lt && "withCredentials" in Lt, Q.ajax = Lt = !!Lt, Z.ajaxTransport(function (e) {
    var t;
    return Q.cors || Lt && !e.crossDomain ? {
      send: function (n, r) {
        var i, o = e.xhr(), s = ++Dt;
        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
        for (i in n)o.setRequestHeader(i, n[i]);
        t = function (e) {
          return function () {
            t && (delete jt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
          }
        }, o.onload = t(), o.onerror = t("error"), t = jt[s] = t("abort");
        try {
          o.send(e.hasContent && e.data || null)
        } catch (a) {
          if (t)throw a
        }
      }, abort: function () {
        t && t()
      }
    } : void 0
  }), Z.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (e) {
        return Z.globalEval(e), e
      }
    }
  }), Z.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), Z.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = Z("<script>").prop({async: !0, charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), J.head.appendChild(t[0])
        }, abort: function () {
          n && n()
        }
      }
    }
  });
  var qt = [], Ht = /(=)\?(?=&|$)|\?\?/;
  Z.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = qt.pop() || Z.expando + "_" + lt++;
      return this[e] = !0, e
    }
  }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return s || Z.error(i + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      s = arguments
    }, r.always(function () {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
    }), "script") : void 0
  }), Z.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e)return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || J;
    var r = se.exec(e), i = !n && [];
    return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
  };
  var Ot = Z.fn.load;
  Z.fn.load = function (e, t, n) {
    if ("string" != typeof e && Ot)return Ot.apply(this, arguments);
    var r, i, o, s = this, a = e.indexOf(" ");
    return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
      url: e,
      type: i,
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
    }).complete(n && function (e, t) {
        s.each(n, o || [e.responseText, t, e])
      }), this
  }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    Z.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), Z.expr.filters.animated = function (e) {
    return Z.grep(Z.timers, function (t) {
      return e === t.elem
    }).length
  };
  var Ft = e.document.documentElement;
  Z.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
      "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
    }
  }, Z.fn.extend({
    offset: function (e) {
      if (arguments.length)return void 0 === e ? this : this.each(function (t) {
        Z.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
      return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = I(o), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i) : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {top: 0, left: 0};
        return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - Z.css(n, "marginTop", !0),
          left: t.left - r.left - Z.css(n, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");)e = e.offsetParent;
        return e || Ft
      })
    }
  }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
    var r = "pageYOffset" === n;
    Z.fn[t] = function (i) {
      return me(this, function (t, i, o) {
        var s = I(t);
        return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
      }, t, i, arguments.length, null)
    }
  }), Z.each(["top", "left"], function (e, t) {
    Z.cssHooks[t] = T(Q.pixelPosition, function (e, n) {
      return n ? (n = w(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
    })
  }), Z.each({Height: "height", Width: "width"}, function (e, t) {
    Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
      Z.fn[r] = function (r, i) {
        var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
        return me(this, function (t, n, r) {
          var i;
          return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
        }, t, o ? r : void 0, o, null)
      }
    })
  }), Z.fn.size = function () {
    return this.length
  }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return Z
  });
  var Pt = e.jQuery, Rt = e.$;
  return Z.noConflict = function (t) {
    return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Pt), Z
  }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  "use strict";
  function e() {
    var t = document.createElement("bootstrap"), e = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var i in e)if (void 0 !== t.style[i])return {end: e[i]};
    return !1
  }

  t.fn.emulateTransitionEnd = function (e) {
    var i = !1, o = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0
    });
    var s = function () {
      i || t(o).trigger(t.support.transition.end)
    };
    return setTimeout(s, e), this
  }, t(function () {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function (e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var i = t(this), s = i.data("bs.alert");
      s || i.data("bs.alert", s = new o(this)), "string" == typeof e && s[e].call(i)
    })
  }

  var i = '[data-dismiss="alert"]', o = function (e) {
    t(e).on("click", i, this.close)
  };
  o.VERSION = "3.2.0", o.prototype.close = function (e) {
    function i() {
      n.detach().trigger("closed.bs.alert").remove()
    }

    var o = t(this), s = o.attr("data-target");
    s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
    var n = t(s);
    e && e.preventDefault(), n.length || (n = o.hasClass("alert") ? o : o.parent()), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
  };
  var s = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
    return t.fn.alert = s, this
  }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.button"), n = "object" == typeof e && e;
      s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
    })
  }

  var i = function (e, o) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
  };
  i.VERSION = "3.2.0", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
    var i = "disabled", o = this.$element, s = o.is("input") ? "val" : "html", n = o.data();
    e += "Text", null == n.resetText && o.data("resetText", o[s]()), o[s](null == n[e] ? this.options[e] : n[e]), setTimeout(t.proxy(function () {
      "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
    }, this), 0)
  }, i.prototype.toggle = function () {
    var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
    }
    t && this.$element.toggleClass("active")
  };
  var o = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
    return t.fn.button = o, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
    var o = t(i.target);
    o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.carousel"), n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e), r = "string" == typeof e ? e : n.slide;
      s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : r ? s[r]() : n.interval && s.pause().cycle()
    })
  }

  var i = function (e, i) {
    this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.2.0", i.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, i.prototype.keydown = function (t) {
    switch (t.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return
    }
    t.preventDefault()
  }, i.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.to = function (e) {
    var i = this, o = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      i.to(e)
    }) : o == e ? this.pause().cycle() : this.slide(e > o ? "next" : "prev", t(this.$items[e]))
  }, i.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
  }, i.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
  }, i.prototype.slide = function (e, i) {
    var o = this.$element.find(".item.active"), s = i || o[e](), n = this.interval, r = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
    if (!s.length) {
      if (!this.options.wrap)return;
      s = this.$element.find(".item")[a]()
    }
    if (s.hasClass("active"))return this.sliding = !1;
    var h = s[0], p = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
    if (this.$element.trigger(p), !p.isDefaultPrevented()) {
      if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = t(this.$indicators.children()[this.getItemIndex(s)]);
        c && c.addClass("active")
      }
      var d = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
      return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(r), s.addClass(r), o.one("bsTransitionEnd", function () {
        s.removeClass([e, r].join(" ")).addClass("active"), o.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
          l.$element.trigger(d)
        }, 0)
      }).emulateTransitionEnd(1e3 * o.css("transition-duration").slice(0, -1))) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this
    }
  };
  var o = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = o, this
  }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (i) {
    var o, s = t(this), n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
    if (n.hasClass("carousel")) {
      var r = t.extend({}, n.data(), s.data()), a = s.attr("data-slide-to");
      a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault()
    }
  }), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.collapse"), n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
      !s && n.toggle && "show" == e && (e = !e), s || o.data("bs.collapse", s = new i(this, n)), "string" == typeof e && s[e]()
    })
  }

  var i = function (e, o) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
  };
  i.VERSION = "3.2.0", i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, i.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var i = t.Event("show.bs.collapse");
      if (this.$element.trigger(i), !i.isDefaultPrevented()) {
        var o = this.$parent && this.$parent.find("> .panel > .in");
        if (o && o.length) {
          var s = o.data("bs.collapse");
          if (s && s.transitioning)return;
          e.call(o, "hide"), s || o.data("bs.collapse", null)
        }
        var n = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[n](0), this.transitioning = 1;
        var r = function () {
          this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        };
        if (!t.support.transition)return r.call(this);
        var a = t.camelCase(["scroll", n].join("-"));
        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[n](this.$element[0][a])
      }
    }
  }, i.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
        var o = function () {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350) : o.call(this)
      }
    }
  }, i.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  };
  var o = t.fn.collapse;
  t.fn.collapse = e, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = o, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
    var o, s = t(this), n = s.attr("data-target") || i.preventDefault() || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""), r = t(n), a = r.data("bs.collapse"), l = a ? "toggle" : s.data(), h = s.attr("data-parent"), p = h && t(h);
    a && a.transitioning || (p && p.find('[data-toggle="collapse"][data-parent="' + h + '"]').not(s).addClass("collapsed"), s[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(r, l)
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    e && 3 === e.which || (t(s).remove(), t(n).each(function () {
      var o = i(t(this)), s = {relatedTarget: this};
      o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden.bs.dropdown", s))
    }))
  }

  function i(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = i && t(i);
    return o && o.length ? o : e.parent()
  }

  function o(e) {
    return this.each(function () {
      var i = t(this), o = i.data("bs.dropdown");
      o || i.data("bs.dropdown", o = new r(this)), "string" == typeof e && o[e].call(i)
    })
  }

  var s = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', r = function (e) {
    t(e).on("click.bs.dropdown", this.toggle)
  };
  r.VERSION = "3.2.0", r.prototype.toggle = function (o) {
    var s = t(this);
    if (!s.is(".disabled, :disabled")) {
      var n = i(s), r = n.hasClass("open");
      if (e(), !r) {
        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
        var a = {relatedTarget: this};
        if (n.trigger(o = t.Event("show.bs.dropdown", a)), o.isDefaultPrevented())return;
        s.trigger("focus"), n.toggleClass("open").trigger("shown.bs.dropdown", a)
      }
      return !1
    }
  }, r.prototype.keydown = function (e) {
    if (/(38|40|27)/.test(e.keyCode)) {
      var o = t(this);
      if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
        var s = i(o), r = s.hasClass("open");
        if (!r || r && 27 == e.keyCode)return 27 == e.which && s.find(n).trigger("focus"), o.trigger("click");
        var a = " li:not(.divider):visible a", l = s.find('[role="menu"]' + a + ', [role="listbox"]' + a);
        if (l.length) {
          var h = l.index(l.filter(":focus"));
          38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
        }
      }
    }
  };
  var a = t.fn.dropdown;
  t.fn.dropdown = o, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
    return t.fn.dropdown = a, this
  }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), +function (t) {
  "use strict";
  function e(e, o) {
    return this.each(function () {
      var s = t(this), n = s.data("bs.modal"), r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
      n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o)
    })
  }

  var i = function (e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.2.0", i.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, i.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t)
  }, i.prototype.show = function (e) {
    var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
      var o = t.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
      var s = t.Event("shown.bs.modal", {relatedTarget: e});
      o ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        i.$element.trigger("focus").trigger(s)
      }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(s)
    }))
  }, i.prototype.hide = function (e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, i.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }, i.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function (e) {
    var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var s = t.support.transition && o;
      if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
          t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
        }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
      s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var n = function () {
        i.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n()
    } else e && e()
  }, i.prototype.checkScrollbar = function () {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
  }, i.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "")
  }, i.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var o = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
    return t.fn.modal = o, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var o = t(this), s = o.attr("href"), n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")), r = n.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(s) && s}, n.data(), o.data());
    o.is("a") && i.preventDefault(), n.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
        o.is(":visible") && o.trigger("focus")
      })
    }), e.call(n, r, this)
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.tooltip"), n = "object" == typeof e && e;
      (s || "destroy" != e) && (s || o.data("bs.tooltip", s = new i(this, n)), "string" == typeof e && s[e]())
    })
  }

  var i = function (t, e) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
  };
  i.VERSION = "3.2.0", i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {selector: "body", padding: 0}
  }, i.prototype.init = function (e, i, o) {
    this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
    for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
      var r = s[n];
      if ("click" == r)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
        var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, i.prototype.getDefaults = function () {
    return i.DEFAULTS
  }, i.prototype.getOptions = function (e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e
  }, i.prototype.getDelegateOptions = function () {
    var e = {}, i = this.getDefaults();
    return this._options && t.each(this._options, function (t, o) {
      i[t] != o && (e[t] = o)
    }), e
  }, i.prototype.enter = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show()
  }, i.prototype.leave = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  }, i.prototype.show = function () {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var i = t.contains(document.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !i)return;
      var o = this, s = this.tip(), n = this.getUID(this.type);
      this.setContent(), s.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && s.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, a = /\s?auto?\s?/i, l = a.test(r);
      l && (r = r.replace(a, "") || "top"), s.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
      var h = this.getPosition(), p = s[0].offsetWidth, c = s[0].offsetHeight;
      if (l) {
        var d = r, f = this.$element.parent(), u = this.getPosition(f);
        r = "bottom" == r && h.top + h.height + c - u.scroll > u.height ? "top" : "top" == r && h.top - u.scroll - c < 0 ? "bottom" : "right" == r && h.right + p > u.width ? "left" : "left" == r && h.left - p < u.left ? "right" : r, s.removeClass(d).addClass(r)
      }
      var g = this.getCalculatedOffset(r, h, p, c);
      this.applyPlacement(g, r);
      var v = function () {
        o.$element.trigger("shown.bs." + o.type), o.hoverState = null
      };
      t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(150) : v()
    }
  }, i.prototype.applyPlacement = function (e, i) {
    var o = this.tip(), s = o[0].offsetWidth, n = o[0].offsetHeight, r = parseInt(o.css("margin-top"), 10), a = parseInt(o.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(o[0], t.extend({
      using: function (t) {
        o.css({top: Math.round(t.top), left: Math.round(t.left)})
      }
    }, e), 0), o.addClass("in");
    var l = o[0].offsetWidth, h = o[0].offsetHeight;
    "top" == i && h != n && (e.top = e.top + n - h);
    var p = this.getViewportAdjustedDelta(i, e, l, h);
    p.left ? e.left += p.left : e.top += p.top;
    var c = p.left ? 2 * p.left - s + l : 2 * p.top - n + h, d = p.left ? "left" : "top", f = p.left ? "offsetWidth" : "offsetHeight";
    o.offset(e), this.replaceArrow(c, o[0][f], d)
  }, i.prototype.replaceArrow = function (t, e, i) {
    this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
  }, i.prototype.setContent = function () {
    var t = this.tip(), e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function () {
    function e() {
      "in" != i.hoverState && o.detach(), i.$element.trigger("hidden.bs." + i.type)
    }

    var i = this, o = this.tip(), s = t.Event("hide.bs." + this.type);
    return this.$element.removeAttr("aria-describedby"), this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
  }, i.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function () {
    return this.getTitle()
  }, i.prototype.getPosition = function (e) {
    e = e || this.$element;
    var i = e[0], o = "BODY" == i.tagName;
    return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
      scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
      width: o ? t(window).width() : e.outerWidth(),
      height: o ? t(window).height() : e.outerHeight()
    }, o ? {top: 0, left: 0} : e.offset())
  }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
    return "bottom" == t ? {top: e.top + e.height, left: e.left + e.width / 2 - i / 2} : "top" == t ? {
      top: e.top - o,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
      top: e.top + e.height / 2 - o / 2,
      left: e.left + e.width
    }
  }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
    var s = {top: 0, left: 0};
    if (!this.$viewport)return s;
    var n = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var a = e.top - n - r.scroll, l = e.top + n - r.scroll + o;
      a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
    } else {
      var h = e.left - n, p = e.left + n + i;
      h < r.left ? s.left = r.left - h : p > r.width && (s.left = r.left + r.width - p)
    }
    return s
  }, i.prototype.getTitle = function () {
    var t, e = this.$element, i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
  }, i.prototype.getUID = function (t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
  }, i.prototype.tip = function () {
    return this.$tip = this.$tip || t(this.options.template)
  }, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  }, i.prototype.enable = function () {
    this.enabled = !0
  }, i.prototype.disable = function () {
    this.enabled = !1
  }, i.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, i.prototype.toggle = function (e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  };
  var o = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = o, this
  }
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.popover"), n = "object" == typeof e && e;
      (s || "destroy" != e) && (s || o.data("bs.popover", s = new i(this, n)), "string" == typeof e && s[e]())
    })
  }

  var i = function (t, e) {
    this.init("popover", t, e)
  };
  if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.2.0", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
    return i.DEFAULTS
  }, i.prototype.setContent = function () {
    var t = this.tip(), e = this.getTitle(), i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, i.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, i.prototype.getContent = function () {
    var t = this.$element, e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }, i.prototype.tip = function () {
    return this.$tip || (this.$tip = t(this.options.template)), this.$tip
  };
  var o = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
    return t.fn.popover = o, this
  }
}(jQuery), +function (t) {
  "use strict";
  function e(i, o) {
    var s = t.proxy(this.process, this);
    this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.scrollspy"), n = "object" == typeof i && i;
      s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
    })
  }

  e.VERSION = "3.2.0", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function () {
    var e = "offset", i = 0;
    t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var o = this;
    this.$body.find(this.selector).map(function () {
      var o = t(this), s = o.data("target") || o.attr("href"), n = /^#./.test(s) && t(s);
      return n && n.length && n.is(":visible") && [[n[e]().top + i, s]] || null
    }).sort(function (t, e) {
      return t[0] - e[0]
    }).each(function () {
      o.offsets.push(this[0]), o.targets.push(this[1])
    })
  }, e.prototype.process = function () {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, n = this.targets, r = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= o)return r != (t = n[n.length - 1]) && this.activate(t);
    if (r && e <= s[0])return r != (t = n[0]) && this.activate(t);
    for (t = s.length; t--;)r != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
  }, e.prototype.activate = function (e) {
    this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', o = t(i).parents("li").addClass("active");
    o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
  };
  var o = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
    return t.fn.scrollspy = o, this
  }, t(window).on("load.bs.scrollspy.data-api", function () {
    t('[data-spy="scroll"]').each(function () {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.tab");
      s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
    })
  }

  var i = function (e) {
    this.element = t(e)
  };
  i.VERSION = "3.2.0", i.prototype.show = function () {
    var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
    if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var s = i.find(".active:last a")[0], n = t.Event("show.bs.tab", {relatedTarget: s});
      if (e.trigger(n), !n.isDefaultPrevented()) {
        var r = t(o);
        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
          e.trigger({type: "shown.bs.tab", relatedTarget: s})
        })
      }
    }
  }, i.prototype.activate = function (e, i, o) {
    function s() {
      n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), o && o()
    }

    var n = i.find("> .active"), r = o && t.support.transition && n.hasClass("fade");
    r ? n.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s(), n.removeClass("in")
  };
  var o = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
    return t.fn.tab = o, this
  }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (i) {
    i.preventDefault(), e.call(t(this), "show")
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this), s = o.data("bs.affix"), n = "object" == typeof e && e;
      s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
    })
  }

  var i = function (e, o) {
    this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.2.0", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.destroy = function () {
    this.$target = $(this.options.target).off("scroll.bs.affix.data-api").off("click.bs.affix.data-api"), this.$element.removeClass(i.RESET).removeAttr("style"), $(this.$element).removeData()
  }, i.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset)return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(), e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function () {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var e = t(document).height(), o = this.$target.scrollTop(), s = this.$element.offset(), n = this.options.offset, r = n.top, a = n.bottom;
      "object" != typeof n && (a = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof a && (a = n.bottom(this.$element));
      var l = null != this.unpin && o + this.unpin <= s.top ? !1 : null != a && s.top + this.$element.height() >= e - a ? "bottom" : null != r && r >= o ? "top" : !1;
      if (this.affixed !== l) {
        null != this.unpin && this.$element.css("top", "");
        var h = "affix" + (l ? "-" + l : ""), p = t.Event(h + ".bs.affix");
        this.$element.trigger(p), p.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(h).trigger(t.Event(h.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({top: e - this.$element.height() - a}))
      }
    }
  };
  var o = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
    return t.fn.affix = o, this
  }, t(window).on("load", function () {
    t('[data-spy="affix"]').each(function () {
      var i = t(this), o = i.data();
      o.offset = o.offset || {}, o.offsetBottom && (o.offset.bottom = o.offsetBottom), o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
    })
  })
}(jQuery);
!function (e) {
  function r() {
    n = !1;
    for (var r = 0, a = i.length; a > r; r++) {
      var o = e(i[r]).filter(function () {
        return e(this).is(":appeared")
      });
      if (o.trigger("appear", [o]), t) {
        var f = t.not(o);
        f.trigger("disappear", [f])
      }
      t = o
    }
  }

  var t, i = [], a = !1, n = !1, o = {interval: 250, force_process: !1}, f = e(window);
  e.expr[":"].appeared = function (r) {
    var t = e(r);
    if (!t.is(":visible"))return !1;
    var i = f.scrollLeft(), a = f.scrollTop(), n = t.offset(), o = n.left, p = n.top;
    return p + t.height() >= a && p - (t.data("appear-top-offset") || 0) <= a + f.height() && o + t.width() >= i && o - (t.data("appear-left-offset") || 0) <= i + f.width() ? !0 : !1
  }, e.fn.extend({
    appear: function (t) {
      var f = e.extend({}, o, t || {}), p = this.selector || this;
      if (!a) {
        var s = function () {
          n || (n = !0, setTimeout(r, f.interval))
        };
        e(window).scroll(s).resize(s), a = !0
      }
      return f.force_process && setTimeout(r, f.interval), i.push(p), e(p)
    }
  }), e.extend({
    force_appear: function () {
      return a ? (r(), !0) : !1
    }
  })
}(jQuery);
!function (e) {
  e.fn.hoverIntent = function (t, n, o) {
    var r = {interval: 100, sensitivity: 6, timeout: 0};
    r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
      over: t,
      out: n,
      selector: o
    }) : e.extend(r, {over: t, out: t, selector: n});
    var v, i, u, s, h = function (e) {
      v = e.pageX, i = e.pageY
    }, I = function (t, n) {
      return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((u - v) * (u - v) + (s - i) * (s - i)) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = !0, r.over.apply(n, [t])) : (u = v, s = i, n.hoverIntent_t = setTimeout(function () {
        I(t, n)
      }, r.interval), void 0)
    }, a = function (e, t) {
      return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, r.out.apply(t, [e])
    }, c = function (t) {
      var n = e.extend({}, t), o = this;
      o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" === t.type ? (u = n.pageX, s = n.pageY, e(o).on("mousemove.hoverIntent", h), o.hoverIntent_s || (o.hoverIntent_t = setTimeout(function () {
        I(n, o)
      }, r.interval))) : (e(o).off("mousemove.hoverIntent", h), o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
        a(n, o)
      }, r.timeout)))
    };
    return this.on({"mouseenter.hoverIntent": c, "mouseleave.hoverIntent": c}, r.selector)
  }
}(jQuery);
!function (e, s) {
  "use strict";
  var n = function () {
    var n = {
      bcClass: "sf-breadcrumb",
      menuClass: "sf-js-enabled",
      anchorClass: "sf-with-ul",
      menuArrowClass: "sf-arrows"
    }, o = function () {
      var n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      return n && e(s).load(function () {
        e("body").children().on("click", e.noop)
      }), n
    }(), t = function () {
      var e = document.documentElement.style;
      return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
    }(), i = function () {
      return !!s.PointerEvent
    }(), r = function (e, s) {
      var o = n.menuClass;
      s.cssArrows && (o += " " + n.menuArrowClass), e.toggleClass(o)
    }, a = function (s, o) {
      return s.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + n.bcClass).filter(function () {
        return e(this).children(o.popUpSelector).hide().show().length
      }).removeClass(o.pathClass)
    }, l = function (e) {
      e.children("a").toggleClass(n.anchorClass)
    }, h = function (e) {
      var s = e.css("ms-touch-action"), n = e.css("touch-action");
      n = n || s, n = "pan-y" === n ? "auto" : "pan-y", e.css({"ms-touch-action": n, "touch-action": n})
    }, u = function (s, n) {
      var r = "li:has(" + n.popUpSelector + ")";
      e.fn.hoverIntent && !n.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);
      var a = "MSPointerDown.superfish";
      i && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), t && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", n, p)
    }, p = function (s) {
      var n = e(this), o = n.siblings(s.data.popUpSelector);
      o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? n.trigger("focus") : e.proxy(c, n.parent("li"))())
    }, c = function () {
      var s = e(this), n = m(s);
      clearTimeout(n.sfTimer), s.siblings().superfish("hide").end().superfish("show")
    }, f = function () {
      var s = e(this), n = m(s);
      o ? e.proxy(d, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(d, s, n), n.delay))
    }, d = function (s) {
      s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)())
    }, v = function (e) {
      return e.closest("." + n.menuClass)
    }, m = function (e) {
      return v(e).data("sf-options")
    };
    return {
      hide: function (s) {
        if (this.length) {
          var n = this, o = m(n);
          if (!o)return this;
          var t = o.retainPath === !0 ? o.$path : "", i = n.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector), r = o.speedOut;
          s && (i.show(), r = 0), o.retainPath = !1, o.onBeforeHide.call(i), i.stop(!0, !0).animate(o.animationOut, r, function () {
            var s = e(this);
            o.onHide.call(s)
          })
        }
        return this
      }, show: function () {
        var e = m(this);
        if (!e)return this;
        var s = this.addClass(e.hoverClass), n = s.children(e.popUpSelector);
        return e.onBeforeShow.call(n), n.stop(!0, !0).animate(e.animation, e.speed, function () {
          e.onShow.call(n)
        }), this
      }, destroy: function () {
        return this.each(function () {
          var s, o = e(this), t = o.data("sf-options");
          return t ? (s = o.find(t.popUpSelector).parent("li"), clearTimeout(t.sfTimer), r(o, t), l(s), h(o), o.off(".superfish").off(".hoverIntent"), s.children(t.popUpSelector).attr("style", function (e, s) {
            return s.replace(/display[^;]+;?/g, "")
          }), t.$path.removeClass(t.hoverClass + " " + n.bcClass).addClass(t.pathClass), o.find("." + t.hoverClass).removeClass(t.hoverClass), t.onDestroy.call(o), void o.removeData("sf-options")) : !1
        })
      }, init: function (s) {
        return this.each(function () {
          var o = e(this);
          if (o.data("sf-options"))return !1;
          var t = e.extend({}, e.fn.superfish.defaults, s), i = o.find(t.popUpSelector).parent("li");
          t.$path = a(o, t), o.data("sf-options", t), r(o, t), l(i), h(o), u(o, t), i.not("." + n.bcClass).superfish("hide", !0), t.onInit.call(this)
        })
      }
    }
  }();
  e.fn.superfish = function (s, o) {
    return n[s] ? n[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments)
  }, e.fn.superfish.defaults = {
    popUpSelector: "ul,.sf-mega",
    hoverClass: "sfHover",
    pathClass: "overrideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: {opacity: "show"},
    animationOut: {opacity: "hide"},
    speed: "normal",
    speedOut: "fast",
    cssArrows: !0,
    disableHI: !1,
    onInit: e.noop,
    onBeforeShow: e.noop,
    onShow: e.noop,
    onBeforeHide: e.noop,
    onHide: e.noop,
    onIdle: e.noop,
    onDestroy: e.noop
  }
}(jQuery, window);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (n, e, t, u, a) {
    return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
  },
  easeInQuad: function (n, e, t, u, a) {
    return u * (e /= a) * e + t
  },
  easeOutQuad: function (n, e, t, u, a) {
    return -u * (e /= a) * (e - 2) + t
  },
  easeInOutQuad: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
  },
  easeInCubic: function (n, e, t, u, a) {
    return u * (e /= a) * e * e + t
  },
  easeOutCubic: function (n, e, t, u, a) {
    return u * ((e = e / a - 1) * e * e + 1) + t
  },
  easeInOutCubic: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
  },
  easeInQuart: function (n, e, t, u, a) {
    return u * (e /= a) * e * e * e + t
  },
  easeOutQuart: function (n, e, t, u, a) {
    return -u * ((e = e / a - 1) * e * e * e - 1) + t
  },
  easeInOutQuart: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
  },
  easeInQuint: function (n, e, t, u, a) {
    return u * (e /= a) * e * e * e * e + t
  },
  easeOutQuint: function (n, e, t, u, a) {
    return u * ((e = e / a - 1) * e * e * e * e + 1) + t
  },
  easeInOutQuint: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
  },
  easeInSine: function (n, e, t, u, a) {
    return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
  },
  easeOutSine: function (n, e, t, u, a) {
    return u * Math.sin(e / a * (Math.PI / 2)) + t
  },
  easeInOutSine: function (n, e, t, u, a) {
    return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
  },
  easeInExpo: function (n, e, t, u, a) {
    return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
  },
  easeOutExpo: function (n, e, t, u, a) {
    return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
  },
  easeInOutExpo: function (n, e, t, u, a) {
    return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
  },
  easeInCirc: function (n, e, t, u, a) {
    return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
  },
  easeOutCirc: function (n, e, t, u, a) {
    return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
  },
  easeInOutCirc: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
  },
  easeInElastic: function (n, e, t, u, a) {
    var r = 1.70158, i = 0, s = u;
    if (0 == e)return t;
    if (1 == (e /= a))return t + u;
    if (i || (i = .3 * a), s < Math.abs(u)) {
      s = u;
      var r = i / 4
    } else var r = i / (2 * Math.PI) * Math.asin(u / s);
    return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
  },
  easeOutElastic: function (n, e, t, u, a) {
    var r = 1.70158, i = 0, s = u;
    if (0 == e)return t;
    if (1 == (e /= a))return t + u;
    if (i || (i = .3 * a), s < Math.abs(u)) {
      s = u;
      var r = i / 4
    } else var r = i / (2 * Math.PI) * Math.asin(u / s);
    return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
  },
  easeInOutElastic: function (n, e, t, u, a) {
    var r = 1.70158, i = 0, s = u;
    if (0 == e)return t;
    if (2 == (e /= a / 2))return t + u;
    if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
      s = u;
      var r = i / 4
    } else var r = i / (2 * Math.PI) * Math.asin(u / s);
    return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
  },
  easeInBack: function (n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
  },
  easeOutBack: function (n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
  },
  easeInOutBack: function (n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
  },
  easeInBounce: function (n, e, t, u, a) {
    return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
  },
  easeOutBounce: function (n, e, t, u, a) {
    return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
  },
  easeInOutBounce: function (n, e, t, u, a) {
    return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
  }
});
!function (n) {
  n.fn.UItoTop = function (e) {
    var o = {
      text: "To Top",
      min: 200,
      inDelay: 600,
      outDelay: 400,
      containerID: "toTop",
      containerHoverID: "toTopHover",
      scrollSpeed: 1200,
      easingType: "linear"
    }, t = n.extend(o, e), i = "#" + t.containerID, a = "#" + t.containerHoverID;
    n("body").append('<a href="#" id="' + t.containerID + '">' + t.text + "</a>"), n(i).hide().on("click.UItoTop", function () {
      return n("html, body").animate({scrollTop: 0}, t.scrollSpeed, t.easingType), n("#" + t.containerHoverID, this).stop().animate({opacity: 0}, t.inDelay, t.easingType), !1
    }).prepend('<span id="' + t.containerHoverID + '"></span>').hover(function () {
      n(a, this).stop().animate({opacity: 1}, 600, "linear")
    }, function () {
      n(a, this).stop().animate({opacity: 0}, 700, "linear")
    }), n(window).scroll(function () {
      var e = n(window).scrollTop();
      "undefined" == typeof document.body.style.maxHeight && n(i).css({
        position: "absolute",
        top: e + n(window).height() - 50
      }), e > t.min ? n(i).fadeIn(t.inDelay) : n(i).fadeOut(t.Outdelay)
    })
  }
}(jQuery);
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
  function t(t, o, n) {
    var i = o.hash.slice(1), a = document.getElementById(i) || document.getElementsByName(i)[0];
    if (a) {
      t && t.preventDefault();
      var l = e(n.target);
      if (!(n.lock && l.is(":animated") || n.onBefore && n.onBefore(t, a, l) === !1)) {
        if (n.stop && l._scrollable().stop(!0), n.hash) {
          var r = a.id === i ? "id" : "name", s = e("<a> </a>").attr(r, i).css({
            position: "absolute",
            top: e(window).scrollTop(),
            left: e(window).scrollLeft()
          });
          a[r] = "", e("body").prepend(s), location.hash = o.hash, s.remove(), a[r] = i
        }
        l.scrollTo(a, n).trigger("notify.serialScroll", [a])
      }
    }
  }

  var o = location.href.replace(/#.*/, ""), n = e.localScroll = function (t) {
    e("body").localScroll(t)
  };
  return n.defaults = {
    duration: 1e3,
    axis: "y",
    event: "click",
    stop: !0,
    target: window
  }, e.fn.localScroll = function (i) {
    function a() {
      return !!this.href && !!this.hash && this.href.replace(this.hash, "") == o && (!i.filter || e(this).is(i.filter))
    }

    return i = e.extend({}, n.defaults, i), i.hash && location.hash && (i.target && window.scrollTo(0, 0), t(0, location, i)), i.lazy ? this.on(i.event, "a,area", function (e) {
      a.call(this) && t(e, this, i)
    }) : this.find("a,area").filter(a).bind(i.event, function (e) {
      t(e, this, i)
    }).end().end()
  }, n.hash = function () {
  }, n
});
!function (e) {
  function t(e) {
    return "object" == typeof e ? e : {top: e, left: e}
  }

  var n = e.scrollTo = function (t, n, o) {
    e(window).scrollTo(t, n, o)
  };
  n.defaults = {axis: "xy", duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1, limit: !0}, n.window = function (t) {
    return e(window)._scrollable()
  }, e.fn._scrollable = function () {
    return this.map(function () {
      var t = this, n = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
      if (!n)return t;
      var o = (t.contentWindow || t).document || t.ownerDocument || t;
      return /webkit/i.test(navigator.userAgent) || "BackCompat" == o.compatMode ? o.body : o.documentElement
    })
  }, e.fn.scrollTo = function (o, r, i) {
    return "object" == typeof r && (i = r, r = 0), "function" == typeof i && (i = {onAfter: i}), "max" == o && (o = 9e9), i = e.extend({}, n.defaults, i), r = r || i.duration, i.queue = i.queue && i.axis.length > 1, i.queue && (r /= 2), i.offset = t(i.offset), i.over = t(i.over), this._scrollable().each(function () {
      function a(e) {
        u.animate(l, r, i.easing, e && function () {
            e.call(this, f, i)
          })
      }

      if (null != o) {
        var s, c = this, u = e(c), f = o, l = {}, d = u.is("html,body");
        switch (typeof f) {
          case"number":
          case"string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
              f = t(f);
              break
            }
            if (f = e(f, this), !f.length)return;
          case"object":
            (f.is || f.style) && (s = (f = e(f)).offset())
        }
        e.each(i.axis.split(""), function (e, t) {
          var o = "x" == t ? "Left" : "Top", r = o.toLowerCase(), m = "scroll" + o, h = c[m], w = n.max(c, t);
          if (s)l[m] = s[r] + (d ? 0 : h - u.offset()[r]), i.margin && (l[m] -= parseInt(f.css("margin" + o)) || 0, l[m] -= parseInt(f.css("border" + o + "Width")) || 0), l[m] += i.offset[r] || 0, i.over[r] && (l[m] += f["x" == t ? "width" : "height"]() * i.over[r]); else {
            var b = f[r];
            l[m] = b.slice && "%" == b.slice(-1) ? parseFloat(b) / 100 * w : b
          }
          i.limit && /^\d+$/.test(l[m]) && (l[m] = l[m] <= 0 ? 0 : Math.min(l[m], w)), !e && i.queue && (h != l[m] && a(i.onAfterFirst), delete l[m])
        }), a(i.onAfter)
      }
    }).end()
  }, n.max = function (t, n) {
    var o = "x" == n ? "Width" : "Height", r = "scroll" + o;
    if (!e(t).is("html,body"))return t[r] - e(t)[o.toLowerCase()]();
    var i = "client" + o, a = t.ownerDocument.documentElement, s = t.ownerDocument.body;
    return Math.max(a[r], s[r]) - Math.min(a[i], s[i])
  }
}(jQuery);
!function (n) {
  var t = n(window), e = t.height();
  t.resize(function () {
    e = t.height()
  }), n.fn.parallax = function (o, i, r) {
    function u() {
      var r = t.scrollTop();
      a.each(function () {
        var t = n(this), u = t.offset().top, c = h(t);
        r > u + c || u > r + e || a.css("backgroundPosition", o + " " + Math.round((l - r) * i) + "px")
      })
    }

    var h, l, a = n(this);
    a.each(function () {
      l = a.offset().top
    }), h = r ? function (n) {
      return n.outerHeight(!0)
    } : function (n) {
      return n.height()
    }, (arguments.length < 1 || null === o) && (o = "50%"), (arguments.length < 2 || null === i) && (i = .1), (arguments.length < 3 || null === r) && (r = !0), t.bind("scroll", u).resize(u), u()
  }
}(jQuery);
!function (e, t) {
  "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function (e) {
  var t = function (e, t) {
    var n, a = document.createElement("canvas");
    e.appendChild(a), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
    var i = a.getContext("2d");
    a.width = a.height = t.size;
    var r = 1;
    window.devicePixelRatio > 1 && (r = window.devicePixelRatio, a.style.width = a.style.height = [t.size, "px"].join(""), a.width = a.height = t.size * r, i.scale(r, r)), i.translate(t.size / 2, t.size / 2), i.rotate((-.5 + t.rotate / 180) * Math.PI);
    var o = (t.size - t.lineWidth) / 2;
    t.scaleColor && t.scaleLength && (o -= t.scaleLength + 2), Date.now = Date.now || function () {
        return +new Date
      };
    var s = function (e, t, n) {
      n = Math.min(Math.max(-1, n || 0), 1);
      var a = 0 >= n ? !0 : !1;
      i.beginPath(), i.arc(0, 0, o, 0, 2 * Math.PI * n, a), i.strokeStyle = e, i.lineWidth = t, i.stroke()
    }, d = function () {
      var e, n;
      i.lineWidth = 1, i.fillStyle = t.scaleColor, i.save();
      for (var a = 24; a > 0; --a)a % 6 === 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), i.fillRect(-t.size / 2 + e, 0, n, 1), i.rotate(Math.PI / 12);
      i.restore()
    }, u = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
          window.setTimeout(e, 1e3 / 60)
        }
    }(), h = function () {
      t.scaleColor && d(), t.trackColor && s(t.trackColor, t.lineWidth, 1)
    };
    this.getCanvas = function () {
      return a
    }, this.getCtx = function () {
      return i
    }, this.clear = function () {
      i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
    }, this.draw = function (e) {
      t.scaleColor || t.trackColor ? i.getImageData && i.putImageData ? n ? i.putImageData(n, 0, 0) : (h(), n = i.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), h()) : this.clear(), i.lineCap = t.lineCap;
      var a;
      a = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(a, t.lineWidth, e / 100)
    }.bind(this), this.animate = function (e, n) {
      var a = Date.now();
      t.onStart(e, n);
      var i = function () {
        var r = Math.min(Date.now() - a, t.animate.duration), o = t.easing(this, r, e, n - e, t.animate.duration);
        this.draw(o), t.onStep(e, n, o), r >= t.animate.duration ? t.onStop(e, n) : u(i)
      }.bind(this);
      u(i)
    }.bind(this)
  }, n = function (e, n) {
    var a = {
      barColor: "#ef1e25",
      trackColor: "#f9f9f9",
      scaleColor: "#dfe0e0",
      scaleLength: 5,
      lineCap: "round",
      lineWidth: 3,
      size: 110,
      rotate: 0,
      animate: {duration: 1e3, enabled: !0},
      easing: function (e, t, n, a, i) {
        return t /= i / 2, 1 > t ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
      },
      onStart: function () {
      },
      onStep: function () {
      },
      onStop: function () {
      }
    };
    if ("undefined" != typeof t)a.renderer = t; else {
      if ("undefined" == typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");
      a.renderer = SVGRenderer
    }
    var i = {}, r = 0, o = function () {
      this.el = e, this.options = i;
      for (var t in a)a.hasOwnProperty(t) && (i[t] = n && "undefined" != typeof n[t] ? n[t] : a[t], "function" == typeof i[t] && (i[t] = i[t].bind(this)));
      i.easing = "string" == typeof i.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[i.easing]) ? jQuery.easing[i.easing] : a.easing, "number" == typeof i.animate && (i.animate = {
        duration: i.animate,
        enabled: !0
      }), "boolean" != typeof i.animate || i.animate || (i.animate = {
        duration: 1e3,
        enabled: i.animate
      }), this.renderer = new i.renderer(e, i), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
    }.bind(this);
    this.update = function (e) {
      return e = parseFloat(e), i.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
    }.bind(this), this.disableAnimation = function () {
      return i.animate.enabled = !1, this
    }, this.enableAnimation = function () {
      return i.animate.enabled = !0, this
    }, o()
  };
  e.fn.easyPieChart = function (t) {
    return this.each(function () {
      var a;
      e.data(this, "easyPieChart") || (a = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, a)))
    })
  }
});
!function (t) {
  "use strict";
  var e = function (n, s) {
    this.$element = t(n), this.options = t.extend({}, e.defaults, s)
  };
  e.defaults = {
    transition_delay: 300,
    refresh_speed: 50,
    display_text: "none",
    use_percentage: !0,
    percent_format: function (t) {
      return t + "%"
    },
    amount_format: function (t, e) {
      return t + " / " + e
    },
    update: t.noop,
    done: t.noop,
    fail: t.noop
  }, e.prototype.transition = function () {
    var n = this.$element, s = n.parent(), a = this.$back_text, r = this.$front_text, i = this.options, o = parseInt(n.attr("data-transitiongoal")), h = parseInt(n.attr("aria-valuemin")) || 0, d = parseInt(n.attr("aria-valuemax")) || 100, f = s.hasClass("vertical"), p = i.update && "function" == typeof i.update ? i.update : e.defaults.update, u = i.done && "function" == typeof i.done ? i.done : e.defaults.done, c = i.fail && "function" == typeof i.fail ? i.fail : e.defaults.fail;
    if (isNaN(o))return void c("data-transitiongoal not set");
    var l = Math.round(100 * (o - h) / (d - h));
    if ("center" === i.display_text && !a && !r) {
      this.$back_text = a = t("<span>").addClass("progressbar-back-text").prependTo(s), this.$front_text = r = t("<span>").addClass("progressbar-front-text").prependTo(n);
      var g;
      f ? (g = s.css("height"), a.css({height: g, "line-height": g}), r.css({
        height: g,
        "line-height": g
      }), t(window).resize(function () {
        g = s.css("height"), a.css({height: g, "line-height": g}), r.css({height: g, "line-height": g})
      })) : (g = s.css("width"), r.css({width: g}), t(window).resize(function () {
        g = s.css("width"), r.css({width: g})
      }))
    }
    setTimeout(function () {
      var t, e, c, g, _;
      f ? n.css("height", l + "%") : n.css("width", l + "%");
      var x = setInterval(function () {
        f ? (c = n.height(), g = s.height()) : (c = n.width(), g = s.width()), t = Math.round(100 * c / g), e = Math.round(h + c / g * (d - h)), t >= l && (t = l, e = o, u(n), clearInterval(x)), "none" !== i.display_text && (_ = i.use_percentage ? i.percent_format(t) : i.amount_format(e, d, h), "fill" === i.display_text ? n.text(_) : "center" === i.display_text && (a.text(_), r.text(_))), n.attr("aria-valuenow", e), p(t, n)
      }, i.refresh_speed)
    }, i.transition_delay)
  };
  var n = t.fn.progressbar;
  t.fn.progressbar = function (n) {
    return this.each(function () {
      var s = t(this), a = s.data("bs.progressbar"), r = "object" == typeof n && n;
      a && r && t.extend(a.options, r), a || s.data("bs.progressbar", a = new e(this, r)), a.transition()
    })
  }, t.fn.progressbar.Constructor = e, t.fn.progressbar.noConflict = function () {
    return t.fn.progressbar = n, this
  }
}(window.jQuery);
!function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals)
  }

  t.fn.countTo = function (e) {
    return e = e || {}, t(this).each(function () {
      function a() {
        s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(f, s), c >= r && (i.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(f, s))
      }

      function n(t) {
        var e = o.formatter.call(f, t, o);
        i.text(e)
      }

      var o = t.extend({}, t.fn.countTo.defaults, {
        from: t(this).data("from"),
        to: t(this).data("to"),
        speed: t(this).data("speed"),
        refreshInterval: t(this).data("refresh-interval"),
        decimals: t(this).data("decimals")
      }, e), r = Math.ceil(o.speed / o.refreshInterval), l = (o.to - o.from) / r, f = this, i = t(this), c = 0, s = o.from, d = i.data("countTo") || {};
      i.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
    })
  }, t.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: e,
    onUpdate: null,
    onComplete: null
  }
}(jQuery);
!function (e) {
  function t() {
    var e = location.href;
    return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
  }

  function i() {
    "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
  }

  function o() {
    -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
  }

  function p(e, t) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = "[\\?&]" + e + "=([^&#]*)", o = new RegExp(i), p = o.exec(t);
    return null == p ? "" : p[1]
  }

  e.prettyPhoto = {version: "3.1.6"}, e.fn.prettyPhoto = function (a) {
    function s() {
      e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
        height: f.contentHeight,
        width: f.contentWidth
      }, settings.animation_speed), $pp_pic_holder.animate({
        top: projectedTop,
        left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
        width: f.containerWidth
      }, settings.animation_speed, function () {
        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
      }), m(), a.ajaxcallback()
    }

    function n(t) {
      $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
        e(".pp_loaderIcon").show(), t()
      })
    }

    function r(t) {
      t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
    }

    function l(e, t) {
      if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
        for (resized = !0, fitting = !1; !fitting;)k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
        (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
      }
      return {
        width: Math.floor(imageWidth),
        height: Math.floor(imageHeight),
        containerHeight: Math.floor(b),
        containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
        contentHeight: Math.floor(y),
        contentWidth: Math.floor(w),
        resized: resized
      }
    }

    function d(t, i) {
      t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
        position: "absolute",
        top: -1e4
      }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
        position: "absolute",
        top: -1e4
      }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
    }

    function h(e) {
      return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
    }

    function c() {
      if (doresize && "undefined" != typeof $pp_pic_holder) {
        if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I)return;
        $pp_pic_holder.css({top: projectedTop, left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2})
      }
    }

    function _() {
      return self.pageYOffset ? {
        scrollTop: self.pageYOffset,
        scrollLeft: self.pageXOffset
      } : document.documentElement && document.documentElement.scrollTop ? {
        scrollTop: document.documentElement.scrollTop,
        scrollLeft: document.documentElement.scrollLeft
      } : document.body ? {scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft} : void 0
    }

    function g() {
      I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
    }

    function m() {
      isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
    }

    function u() {
      if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
        currentGalleryPage = 0, toInject = "";
        for (var t = 0; t < pp_images.length; t++)pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
          return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
        }), $pp_gallery.find(".pp_arrow_previous").click(function () {
          return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
        }), $pp_pic_holder.find(".pp_content").hover(function () {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
        }, function () {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
        }), itemWidth = 57, $pp_gallery_li.each(function (t) {
          e(this).find("a").click(function () {
            return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
          })
        })
      }
      settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
        return e.prettyPhoto.startSlideshow(), !1
      })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
        opacity: 0,
        height: e(document).height(),
        width: e(window).width()
      }).bind("click", function () {
        settings.modal || e.prettyPhoto.close()
      }), e("a.pp_close").bind("click", function () {
        return e.prettyPhoto.close(), !1
      }), settings.allow_expand && e("a.pp_expand").bind("click", function () {
        return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function () {
          e.prettyPhoto.open()
        }), !1
      }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
        return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
      }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
        return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
      }), c()
    }

    a = jQuery.extend({
      hook: "rel",
      animation_speed: "fast",
      ajaxcallback: function () {
      },
      slideshow: 5e3,
      autoplay_slideshow: !1,
      opacity: .8,
      show_title: !0,
      allow_resize: !0,
      allow_expand: !0,
      default_width: 500,
      default_height: 344,
      counter_separator_label: "/",
      theme: "pp_default",
      horizontal_padding: 20,
      hideflash: !1,
      wmode: "opaque",
      autoplay: !0,
      modal: !1,
      deeplinking: !0,
      overlay_gallery: !0,
      overlay_gallery_max: 30,
      keyboard_shortcuts: !0,
      changepicturecallback: function () {
      },
      callback: function () {
      },
      ie6_fallback: !0,
      markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
      gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
      image_markup: '<img id="fullResImage" src="{path}" />',
      flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
      quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
      iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
      inline_markup: '<div class="pp_inline">{content}</div>',
      custom_markup: "",
      social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
    }, a);
    var f, v, y, w, b, k, P, x = this, $ = !1, I = e(window).height(), j = e(window).width();
    return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
      c(), g()
    }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) {
      if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible"))switch (t.keyCode) {
        case 37:
          e.prettyPhoto.changePage("previous"), t.preventDefault();
          break;
        case 39:
          e.prettyPhoto.changePage("next"), t.preventDefault();
          break;
        case 27:
          settings.modal || e.prettyPhoto.close(), t.preventDefault()
      }
    }), e.prettyPhoto.initialize = function () {
      return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
      }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
      }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
      }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function () {
        c()
      }), e.prettyPhoto.open(), !1
    }, e.prettyPhoto.open = function (t) {
      return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(p("width", pp_images[set_position])) ? p("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(p("height", pp_images[set_position])) ? p("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function () {
        switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
          case"image":
            imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
              f = l(imgPreloader.width, imgPreloader.height), s()
            }, imgPreloader.onerror = function () {
              alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
            }, imgPreloader.src = pp_images[set_position];
            break;
          case"youtube":
            f = l(movie_width, movie_height), movie_id = p("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += p("rel", pp_images[set_position]) ? "?rel=" + p("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
            break;
          case"vimeo":
            f = l(movie_width, movie_height), movie_id = pp_images[set_position];
            var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/, i = movie_id.match(t);
            movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
            break;
          case"quicktime":
            f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
            break;
          case"flash":
            f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
            break;
          case"iframe":
            f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
            break;
          case"ajax":
            doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function (e) {
              toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
            });
            break;
          case"custom":
            f = l(movie_width, movie_height), toInject = settings.custom_markup;
            break;
          case"inline":
            myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({width: settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
        }
        imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
      }), !1
    }, e.prettyPhoto.changePage = function (t) {
      currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function () {
        e.prettyPhoto.open()
      })
    }, e.prettyPhoto.changeGalleryPage = function (e) {
      "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({left: -slide_to}, slide_speed)
    }, e.prettyPhoto.startSlideshow = function () {
      "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
        return e.prettyPhoto.stopSlideshow(), !1
      }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
    }, e.prettyPhoto.stopSlideshow = function () {
      $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
        return e.prettyPhoto.startSlideshow(), !1
      }), clearInterval(P), P = void 0
    }, e.prettyPhoto.close = function () {
      $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
        e(this).remove()
      }), $pp_overlay.fadeOut(settings.animation_speed, function () {
        settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), o(), settings.callback(), doresize = !0, v = !1, delete settings
      }))
    }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
      e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
    }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
  }
}(jQuery);
var pp_alreadyInitialized = !1;
!function () {
  var t = !1;
  window.JQClass = function () {
  }, JQClass.classes = {}, JQClass.extend = function e(i) {
    function n() {
      !t && this._init && this._init.apply(this, arguments)
    }

    var s = this.prototype;
    t = !0;
    var o = new this;
    t = !1;
    for (var a in i)o[a] = "function" == typeof i[a] && "function" == typeof s[a] ? function (t, e) {
      return function () {
        var i = this._super;
        this._super = function (e) {
          return s[t].apply(this, e || [])
        };
        var n = e.apply(this, arguments);
        return this._super = i, n
      }
    }(a, i[a]) : i[a];
    return n.prototype = o, n.prototype.constructor = n, n.extend = e, n
  }
}(), function ($) {
  function camelCase(t) {
    return t.replace(/-([a-z])/g, function (t, e) {
      return e.toUpperCase()
    })
  }

  JQClass.classes.JQPlugin = JQClass.extend({
    name: "plugin",
    defaultOptions: {},
    regionalOptions: {},
    _getters: [],
    _getMarker: function () {
      return "is-" + this.name
    },
    _init: function () {
      $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
      var t = camelCase(this.name);
      $[t] = this, $.fn[t] = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return $[t]._isNotChained(e, i) ? $[t][e].apply($[t], [this[0]].concat(i)) : this.each(function () {
          if ("string" == typeof e) {
            if ("_" === e[0] || !$[t][e])throw"Unknown method: " + e;
            $[t][e].apply($[t], [this].concat(i))
          } else $[t]._attach(this, e)
        })
      }
    },
    setDefaults: function (t) {
      $.extend(this.defaultOptions, t || {})
    },
    _isNotChained: function (t, e) {
      return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) ? !0 : $.inArray(t, this._getters) > -1
    },
    _attach: function (t, e) {
      if (t = $(t), !t.hasClass(this._getMarker())) {
        t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
        var i = $.extend({name: this.name, elem: t, options: e}, this._instSettings(t, e));
        t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
      }
    },
    _instSettings: function (t, e) {
      return {}
    },
    _postAttach: function (t, e) {
    },
    _getMetadata: function (d) {
      try {
        var f = d.data(this.name.toLowerCase()) || "";
        f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
          var n = f.substring(0, i).match(/"/g);
          return n && n.length % 2 !== 0 ? e + ":" : '"' + e + '":'
        }), f = $.parseJSON("{" + f + "}");
        for (var g in f) {
          var h = f[g];
          "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
        }
        return f
      } catch (e) {
        return {}
      }
    },
    _getInst: function (t) {
      return $(t).data(this.name) || {}
    },
    option: function (t, e, i) {
      t = $(t);
      var n = t.data(this.name);
      if (!e || "string" == typeof e && null == i) {
        var s = (n || {}).options;
        return s && e ? s[e] : s
      }
      if (t.hasClass(this._getMarker())) {
        var s = e || {};
        "string" == typeof e && (s = {}, s[e] = i), this._optionsChanged(t, n, s), $.extend(n.options, s)
      }
    },
    _optionsChanged: function (t, e, i) {
    },
    destroy: function (t) {
      t = $(t), t.hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
    },
    _preDestroy: function (t, e) {
    }
  }), $.JQPlugin = {
    createPlugin: function (t, e) {
      "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
      var i = camelCase(e.name);
      JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
    }
  }
}(jQuery), function (t) {
  var e = "countdown", i = 0, n = 1, s = 2, o = 3, a = 4, r = 5, l = 6;
  t.JQPlugin.createPlugin({
    name: e,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: "dHMS",
      layout: "",
      compact: !1,
      padZeroes: !1,
      significant: 0,
      description: "",
      expiryUrl: "",
      expiryText: "",
      alwaysExpire: !1,
      onExpiry: null,
      onTick: null,
      tickInterval: 1
    },
    regionalOptions: {
      "": {
        labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
        labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels: ["y", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
      }
    },
    _getters: ["getTimes"],
    _rtlClass: e + "-rtl",
    _sectionClass: e + "-section",
    _amountClass: e + "-amount",
    _periodClass: e + "-period",
    _rowClass: e + "-row",
    _holdingClass: e + "-holding",
    _showClass: e + "-show",
    _descrClass: e + "-descr",
    _timerElems: [],
    _init: function () {
      function e(t) {
        var r = 1e12 > t ? s ? performance.now() + performance.timing.navigationStart : n() : t || n();
        r - a >= 1e3 && (i._updateElems(), a = r), o(e)
      }

      var i = this;
      this._super(), this._serverSyncs = [];
      var n = "function" == typeof Date.now ? Date.now : function () {
        return (new Date).getTime()
      }, s = window.performance && "function" == typeof window.performance.now, o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null, a = 0;
      !o || t.noRequestAnimationFrame ? (t.noRequestAnimationFrame = null, setInterval(function () {
        i._updateElems()
      }, 980)) : (a = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), o(e))
    },
    UTCDate: function (t, e, i, n, s, o, a, r) {
      "object" == typeof e && e.constructor == Date && (r = e.getMilliseconds(), a = e.getSeconds(), o = e.getMinutes(), s = e.getHours(), n = e.getDate(), i = e.getMonth(), e = e.getFullYear());
      var l = new Date;
      return l.setUTCFullYear(e), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(n || 1), l.setUTCHours(s || 0), l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(r || 0), l
    },
    periodsToSeconds: function (t) {
      return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
    },
    resync: function () {
      var e = this;
      t("." + this._getMarker()).each(function () {
        var i = t.data(this, e.name);
        if (i.options.serverSync) {
          for (var n = null, s = 0; s < e._serverSyncs.length; s++)if (e._serverSyncs[s][0] == i.options.serverSync) {
            n = e._serverSyncs[s];
            break
          }
          if (null == n[2]) {
            var o = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(this, []) : null;
            n[2] = (o ? (new Date).getTime() - o.getTime() : 0) - n[1]
          }
          i._since && i._since.setMilliseconds(i._since.getMilliseconds() + n[2]), i._until.setMilliseconds(i._until.getMilliseconds() + n[2])
        }
      });
      for (var i = 0; i < e._serverSyncs.length; i++)null != e._serverSyncs[i][2] && (e._serverSyncs[i][1] += e._serverSyncs[i][2], delete e._serverSyncs[i][2])
    },
    _instSettings: function (t, e) {
      return {_periods: [0, 0, 0, 0, 0, 0, 0]}
    },
    _addElem: function (t) {
      this._hasElem(t) || this._timerElems.push(t)
    },
    _hasElem: function (e) {
      return t.inArray(e, this._timerElems) > -1
    },
    _removeElem: function (e) {
      this._timerElems = t.map(this._timerElems, function (t) {
        return t == e ? null : t
      })
    },
    _updateElems: function () {
      for (var t = this._timerElems.length - 1; t >= 0; t--)this._updateCountdown(this._timerElems[t])
    },
    _optionsChanged: function (e, i, n) {
      n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, n);
      var s = i.options.timezone != n.timezone;
      t.extend(i.options, n), this._adjustSettings(e, i, null != n.until || null != n.since || s);
      var o = new Date;
      (i._since && i._since < o || i._until && i._until > o) && this._addElem(e[0]), this._updateCountdown(e, i)
    },
    _updateCountdown: function (e, i) {
      if (e = e.jquery ? e : t(e), i = i || this._getInst(e)) {
        if (e.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), t.isFunction(i.options.onTick)) {
          var n = "lap" != i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
          (1 == i.options.tickInterval || this.periodsToSeconds(n) % i.options.tickInterval == 0) && i.options.onTick.apply(e[0], [n])
        }
        var s = "pause" != i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime());
        if (s && !i._expiring) {
          if (i._expiring = !0, this._hasElem(e[0]) || i.options.alwaysExpire) {
            if (this._removeElem(e[0]), t.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(e[0], []), i.options.expiryText) {
              var o = i.options.layout;
              i.options.layout = i.options.expiryText, this._updateCountdown(e[0], i), i.options.layout = o
            }
            i.options.expiryUrl && (window.location = i.options.expiryUrl)
          }
          i._expiring = !1
        } else"pause" == i._hold && this._removeElem(e[0])
      }
    },
    _resetExtraLabels: function (t, e) {
      for (var i in e)i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
      for (var i in t)i.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof e[i] && (t[i] = null)
    },
    _adjustSettings: function (e, i, n) {
      for (var s = null, o = 0; o < this._serverSyncs.length; o++)if (this._serverSyncs[o][0] == i.options.serverSync) {
        s = this._serverSyncs[o][1];
        break
      }
      if (null != s)var a = i.options.serverSync ? s : 0, r = new Date; else {
        var l = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(e[0], []) : null, r = new Date, a = l ? r.getTime() - l.getTime() : 0;
        this._serverSyncs.push([i.options.serverSync, a])
      }
      var p = i.options.timezone;
      p = null == p ? -r.getTimezoneOffset() : p, (n || !n && null == i._until && null == i._since) && (i._since = i.options.since, null != i._since && (i._since = this.UTCDate(p, this._determineTime(i._since, null)), i._since && a && i._since.setMilliseconds(i._since.getMilliseconds() + a)), i._until = this.UTCDate(p, this._determineTime(i.options.until, r)), a && i._until.setMilliseconds(i._until.getMilliseconds() + a)), i._show = this._determineShow(i)
    },
    _preDestroy: function (t, e) {
      this._removeElem(t[0]), t.empty()
    },
    pause: function (t) {
      this._hold(t, "pause")
    },
    lap: function (t) {
      this._hold(t, "lap")
    },
    resume: function (t) {
      this._hold(t, null)
    },
    toggle: function (e) {
      var i = t.data(e, this.name) || {};
      this[i._hold ? "resume" : "pause"](e)
    },
    toggleLap: function (e) {
      var i = t.data(e, this.name) || {};
      this[i._hold ? "resume" : "lap"](e)
    },
    _hold: function (e, i) {
      var n = t.data(e, this.name);
      if (n) {
        if ("pause" == n._hold && !i) {
          n._periods = n._savePeriods;
          var s = n._since ? "-" : "+";
          n[n._since ? "_since" : "_until"] = this._determineTime(s + n._periods[0] + "y" + s + n._periods[1] + "o" + s + n._periods[2] + "w" + s + n._periods[3] + "d" + s + n._periods[4] + "h" + s + n._periods[5] + "m" + s + n._periods[6] + "s"), this._addElem(e)
        }
        n._hold = i, n._savePeriods = "pause" == i ? n._periods : null, t.data(e, this.name, n), this._updateCountdown(e, n)
      }
    },
    getTimes: function (e) {
      var i = t.data(e, this.name);
      return i ? "pause" == i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
    },
    _determineTime: function (t, e) {
      var i = this, n = function (t) {
        var e = new Date;
        return e.setTime(e.getTime() + 1e3 * t), e
      }, s = function (t) {
        t = t.toLowerCase();
        for (var e = new Date, n = e.getFullYear(), s = e.getMonth(), o = e.getDate(), a = e.getHours(), r = e.getMinutes(), l = e.getSeconds(), p = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, _ = p.exec(t); _;) {
          switch (_[2] || "s") {
            case"s":
              l += parseInt(_[1], 10);
              break;
            case"m":
              r += parseInt(_[1], 10);
              break;
            case"h":
              a += parseInt(_[1], 10);
              break;
            case"d":
              o += parseInt(_[1], 10);
              break;
            case"w":
              o += 7 * parseInt(_[1], 10);
              break;
            case"o":
              s += parseInt(_[1], 10), o = Math.min(o, i._getDaysInMonth(n, s));
              break;
            case"y":
              n += parseInt(_[1], 10), o = Math.min(o, i._getDaysInMonth(n, s))
          }
          _ = p.exec(t)
        }
        return new Date(n, s, o, a, r, l, 0)
      }, o = null == t ? e : "string" == typeof t ? s(t) : "number" == typeof t ? n(t) : t;
      return o && o.setMilliseconds(0), o
    },
    _getDaysInMonth: function (t, e) {
      return 32 - new Date(t, e, 32).getDate()
    },
    _normalLabels: function (t) {
      return t
    },
    _generateHTML: function (e) {
      var p = this;
      e._periods = e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
      for (var _ = !1, c = 0, u = e.options.significant, h = t.extend({}, e._show), d = i; l >= d; d++)_ |= "?" == e._show[d] && e._periods[d] > 0, h[d] = "?" != e._show[d] || _ ? e._show[d] : null, c += h[d] ? 1 : 0, u -= e._periods[d] > 0 ? 1 : 0;
      for (var m = [!1, !1, !1, !1, !1, !1, !1], d = l; d >= i; d--)e._show[d] && (e._periods[d] ? m[d] = !0 : (m[d] = u > 0, u--));
      var g = e.options.compact ? e.options.compactLabels : e.options.labels, f = e.options.whichLabels || this._normalLabels, w = function (t) {
        var i = e.options["compactLabels" + f(e._periods[t])];
        return h[t] ? p._translateDigits(e, e._periods[t]) + (i ? i[t] : g[t]) + " " : ""
      }, y = e.options.padZeroes ? 2 : 1, v = function (t) {
        var i = e.options["labels" + f(e._periods[t])];
        return !e.options.significant && h[t] || e.options.significant && m[t] ? '<span class="' + p._sectionClass + '"><span class="' + p._amountClass + '">' + p._minDigits(e, e._periods[t], y) + '</span><span class="' + p._periodClass + '">' + (i ? i[t] : g[t]) + "</span></span>" : ""
      };
      return e.options.layout ? this._buildLayout(e, h, e.options.layout, e.options.compact, e.options.significant, m) : (e.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (e._hold ? " " + this._holdingClass : "") + '">' + w(i) + w(n) + w(s) + w(o) + (h[a] ? this._minDigits(e, e._periods[a], 2) : "") + (h[r] ? (h[a] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[r], 2) : "") + (h[l] ? (h[a] || h[r] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[l], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (e.options.significant || c) + (e._hold ? " " + this._holdingClass : "") + '">' + v(i) + v(n) + v(s) + v(o) + v(a) + v(r) + v(l)) + "</span>" + (e.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + e.options.description + "</span>" : "")
    },
    _buildLayout: function (e, p, _, c, u, h) {
      for (var d = e.options[c ? "compactLabels" : "labels"], m = e.options.whichLabels || this._normalLabels, g = function (t) {
        return (e.options[(c ? "compactLabels" : "labels") + m(e._periods[t])] || d)[t]
      }, f = function (t, i) {
        return e.options.digits[Math.floor(t / i) % 10]
      }, w = {
        desc: e.options.description,
        sep: e.options.timeSeparator,
        yl: g(i),
        yn: this._minDigits(e, e._periods[i], 1),
        ynn: this._minDigits(e, e._periods[i], 2),
        ynnn: this._minDigits(e, e._periods[i], 3),
        y1: f(e._periods[i], 1),
        y10: f(e._periods[i], 10),
        y100: f(e._periods[i], 100),
        y1000: f(e._periods[i], 1e3),
        ol: g(n),
        on: this._minDigits(e, e._periods[n], 1),
        onn: this._minDigits(e, e._periods[n], 2),
        onnn: this._minDigits(e, e._periods[n], 3),
        o1: f(e._periods[n], 1),
        o10: f(e._periods[n], 10),
        o100: f(e._periods[n], 100),
        o1000: f(e._periods[n], 1e3),
        wl: g(s),
        wn: this._minDigits(e, e._periods[s], 1),
        wnn: this._minDigits(e, e._periods[s], 2),
        wnnn: this._minDigits(e, e._periods[s], 3),
        w1: f(e._periods[s], 1),
        w10: f(e._periods[s], 10),
        w100: f(e._periods[s], 100),
        w1000: f(e._periods[s], 1e3),
        dl: g(o),
        dn: this._minDigits(e, e._periods[o], 1),
        dnn: this._minDigits(e, e._periods[o], 2),
        dnnn: this._minDigits(e, e._periods[o], 3),
        d1: f(e._periods[o], 1),
        d10: f(e._periods[o], 10),
        d100: f(e._periods[o], 100),
        d1000: f(e._periods[o], 1e3),
        hl: g(a),
        hn: this._minDigits(e, e._periods[a], 1),
        hnn: this._minDigits(e, e._periods[a], 2),
        hnnn: this._minDigits(e, e._periods[a], 3),
        h1: f(e._periods[a], 1),
        h10: f(e._periods[a], 10),
        h100: f(e._periods[a], 100),
        h1000: f(e._periods[a], 1e3),
        ml: g(r),
        mn: this._minDigits(e, e._periods[r], 1),
        mnn: this._minDigits(e, e._periods[r], 2),
        mnnn: this._minDigits(e, e._periods[r], 3),
        m1: f(e._periods[r], 1),
        m10: f(e._periods[r], 10),
        m100: f(e._periods[r], 100),
        m1000: f(e._periods[r], 1e3),
        sl: g(l),
        sn: this._minDigits(e, e._periods[l], 1),
        snn: this._minDigits(e, e._periods[l], 2),
        snnn: this._minDigits(e, e._periods[l], 3),
        s1: f(e._periods[l], 1),
        s10: f(e._periods[l], 10),
        s100: f(e._periods[l], 100),
        s1000: f(e._periods[l], 1e3)
      }, y = _, v = i; l >= v; v++) {
        var D = "yowdhms".charAt(v), C = new RegExp("\\{" + D + "<\\}([\\s\\S]*)\\{" + D + ">\\}", "g");
        y = y.replace(C, !u && p[v] || u && h[v] ? "$1" : "")
      }
      return t.each(w, function (t, e) {
        var i = new RegExp("\\{" + t + "\\}", "g");
        y = y.replace(i, e)
      }), y
    },
    _minDigits: function (t, e, i) {
      return e = "" + e, e.length >= i ? this._translateDigits(t, e) : (e = "0000000000" + e, this._translateDigits(t, e.substr(e.length - i)))
    },
    _translateDigits: function (t, e) {
      return ("" + e).replace(/[0-9]/g, function (e) {
        return t.options.digits[e]
      })
    },
    _determineShow: function (t) {
      var e = t.options.format, p = [];
      return p[i] = e.match("y") ? "?" : e.match("Y") ? "!" : null, p[n] = e.match("o") ? "?" : e.match("O") ? "!" : null, p[s] = e.match("w") ? "?" : e.match("W") ? "!" : null, p[o] = e.match("d") ? "?" : e.match("D") ? "!" : null, p[a] = e.match("h") ? "?" : e.match("H") ? "!" : null, p[r] = e.match("m") ? "?" : e.match("M") ? "!" : null, p[l] = e.match("s") ? "?" : e.match("S") ? "!" : null, p
    },
    _calculatePeriods: function (t, e, p, _) {
      t._now = _, t._now.setMilliseconds(0);
      var c = new Date(t._now.getTime());
      t._since ? _.getTime() < t._since.getTime() ? t._now = _ = c : _ = t._since : (c.setTime(t._until.getTime()), _.getTime() > t._until.getTime() && (t._now = _ = c));
      var u = [0, 0, 0, 0, 0, 0, 0];
      if (e[i] || e[n]) {
        var h = this._getDaysInMonth(_.getFullYear(), _.getMonth()), d = this._getDaysInMonth(c.getFullYear(), c.getMonth()), m = c.getDate() == _.getDate() || c.getDate() >= Math.min(h, d) && _.getDate() >= Math.min(h, d), g = function (t) {
          return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
        }, f = Math.max(0, 12 * (c.getFullYear() - _.getFullYear()) + c.getMonth() - _.getMonth() + (c.getDate() < _.getDate() && !m || m && g(c) < g(_) ? -1 : 0));
        u[i] = e[i] ? Math.floor(f / 12) : 0, u[n] = e[n] ? f - 12 * u[i] : 0, _ = new Date(_.getTime());
        var w = _.getDate() == h, y = this._getDaysInMonth(_.getFullYear() + u[i], _.getMonth() + u[n]);
        _.getDate() > y && _.setDate(y), _.setFullYear(_.getFullYear() + u[i]), _.setMonth(_.getMonth() + u[n]), w && _.setDate(y)
      }
      var v = Math.floor((c.getTime() - _.getTime()) / 1e3), D = function (t, i) {
        u[t] = e[t] ? Math.floor(v / i) : 0, v -= u[t] * i
      };
      if (D(s, 604800), D(o, 86400), D(a, 3600), D(r, 60), D(l, 1), v > 0 && !t._since)for (var C = [1, 12, 4.3482, 7, 24, 60, 60], M = l, T = 1, S = l; S >= i; S--)e[S] && (u[M] >= T && (u[M] = 0, v = 1), v > 0 && (u[S]++, v = 0, M = S, T = 1)), T *= C[S];
      if (p)for (var S = i; l >= S; S++)p && u[S] ? p-- : p || (u[S] = 0);
      return u
    }
  })
}(jQuery);
!function (e) {
  e.fn.jflickrfeed = function (i, a) {
    i = e.extend(!0, {
      flickrbase: "http://api.flickr.com/services/feeds/",
      feedapi: "photos_public.gne",
      limit: 20,
      qstrings: {lang: "en-us", format: "json", jsoncallback: "?"},
      cleanDescription: !0,
      useTemplate: !0,
      itemTemplate: "",
      itemCallback: function () {
      }
    }, i);
    var t = i.flickrbase + i.feedapi + "?", c = !0;
    for (var n in i.qstrings)c || (t += "&"), t += n + "=" + i.qstrings[n], c = !1;
    return e(this).each(function () {
      var c = e(this), n = this;
      e.getJSON(t, function (t) {
        e.each(t.items, function (e, a) {
          if (e < i.limit) {
            if (i.cleanDescription) {
              var t = /<p>(.*?)<\/p>/g, m = a.description;
              t.test(m) && (a.description = m.match(t)[2], void 0 != a.description && (a.description = a.description.replace("<p>", "").replace("</p>", "")))
            }
            if (a.image_s = a.media.m.replace("_m", "_s"), a.image_t = a.media.m.replace("_m", "_t"), a.image_m = a.media.m.replace("_m", "_m"), a.image = a.media.m.replace("_m", ""), a.image_b = a.media.m.replace("_m", "_b"), delete a.media, i.useTemplate) {
              var r = i.itemTemplate;
              for (var l in a) {
                var p = new RegExp("{{" + l + "}}", "g");
                r = r.replace(p, a[l])
              }
              c.append(r)
            }
            i.itemCallback.call(n, a)
          }
        }), e.isFunction(a) && a.call(n, t)
      })
    })
  }
}(jQuery);
(function () {
  function e() {
  }

  function t(e, t) {
    for (var n = e.length; n--;)if (e[n].listener === t)return n;
    return -1
  }

  function n(e) {
    return function () {
      return this[e].apply(this, arguments)
    }
  }

  var i = e.prototype, r = this, o = r.EventEmitter;
  i.getListeners = function (e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i)i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function (e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function (e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function (e, n) {
    var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
    for (i in r)r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {listener: n, once: !1});
    return this
  }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
    return this.addListener(e, {listener: t, once: !0})
  }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
    return this.getListeners(e), this
  }, i.defineEvents = function (e) {
    for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
    return this
  }, i.removeListener = function (e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o)o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function (e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function (e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function (e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)for (i = n.length; i--;)o.call(this, t, n[i]); else for (i in t)t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, i.removeEvent = function (e) {
    var t, n = typeof e, i = this._getEvents();
    if ("string" === n)delete i[e]; else if ("object" === n)for (t in i)i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)if (s.hasOwnProperty(r))for (i = s[r].length; i--;)n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function (e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function () {
    return this._events || (this._events = {})
  }, e.noConflict = function () {
    return r.EventEmitter = o, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
  function t(t) {
    var n = e.event;
    return n.target = n.target || n.srcElement || t, n
  }

  var n = document.documentElement, i = function () {
  };
  n.addEventListener ? i = function (e, t, n) {
    e.addEventListener(t, n, !1)
  } : n.attachEvent && (i = function (e, n, i) {
    e[n + i] = i.handleEvent ? function () {
      var n = t(e);
      i.handleEvent.call(i, n)
    } : function () {
      var n = t(e);
      i.call(e, n)
    }, e.attachEvent("on" + n, e[n + i])
  });
  var r = function () {
  };
  n.removeEventListener ? r = function (e, t, n) {
    e.removeEventListener(t, n, !1)
  } : n.detachEvent && (r = function (e, t, n) {
    e.detachEvent("on" + t, e[t + n]);
    try {
      delete e[t + n]
    } catch (i) {
      e[t + n] = void 0
    }
  });
  var o = {bind: i, unbind: r};
  "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function (e, t) {
  "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
    return t(e, n, i)
  }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
  function i(e, t) {
    for (var n in t)e[n] = t[n];
    return e
  }

  function r(e) {
    return "[object Array]" === d.call(e)
  }

  function o(e) {
    var t = [];
    if (r(e))t = e; else if ("number" == typeof e.length)for (var n = 0, i = e.length; i > n; n++)t.push(e[n]); else t.push(e);
    return t
  }

  function s(e, t, n) {
    if (!(this instanceof s))return new s(e, t);
    "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
    var r = this;
    setTimeout(function () {
      r.check()
    })
  }

  function f(e) {
    this.img = e
  }

  function c(e) {
    this.src = e, v[e] = this
  }

  var a = e.jQuery, u = e.console, h = void 0 !== u, d = Object.prototype.toString;
  s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [];
    for (var e = 0, t = this.elements.length; t > e; e++) {
      var n = this.elements[e];
      "IMG" === n.nodeName && this.addImage(n);
      var i = n.nodeType;
      if (i && (1 === i || 9 === i || 11 === i))for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
        var f = r[o];
        this.addImage(f)
      }
    }
  }, s.prototype.addImage = function (e) {
    var t = new f(e);
    this.images.push(t)
  }, s.prototype.check = function () {
    function e(e, r) {
      return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
    }

    var t = this, n = 0, i = this.images.length;
    if (this.hasAnyBroken = !1, !i)return void this.complete();
    for (var r = 0; i > r; r++) {
      var o = this.images[r];
      o.on("confirm", e), o.check()
    }
  }, s.prototype.progress = function (e) {
    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
    var t = this;
    setTimeout(function () {
      t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
    })
  }, s.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = !0;
    var t = this;
    setTimeout(function () {
      if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
        var n = t.hasAnyBroken ? "reject" : "resolve";
        t.jqDeferred[n](t)
      }
    })
  }, a && (a.fn.imagesLoaded = function (e, t) {
    var n = new s(this, e, t);
    return n.jqDeferred.promise(a(this))
  }), f.prototype = new t, f.prototype.check = function () {
    var e = v[this.img.src] || new c(this.img.src);
    if (e.isConfirmed)return void this.confirm(e.isLoaded, "cached was confirmed");
    if (this.img.complete && void 0 !== this.img.naturalWidth)return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
    var t = this;
    e.on("confirm", function (e, n) {
      return t.confirm(e.isLoaded, n), !0
    }), e.check()
  }, f.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("confirm", this, t)
  };
  var v = {};
  return c.prototype = new t, c.prototype.check = function () {
    if (!this.isChecked) {
      var e = new Image;
      n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
    }
  }, c.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, c.prototype.onload = function (e) {
    this.confirm(!0, "onload"), this.unbindProxyEvents(e)
  }, c.prototype.onerror = function (e) {
    this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
  }, c.prototype.confirm = function (e, t) {
    this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
  }, c.prototype.unbindProxyEvents = function (e) {
    n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
  }, s
});
!function (t) {
  function e() {
  }

  function i(t) {
    function i(e) {
      e.prototype.option || (e.prototype.option = function (e) {
        t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
      })
    }

    function n(e, i) {
      t.fn[e] = function (n) {
        if ("string" == typeof n) {
          for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
            var p = this[a], h = t.data(p, e);
            if (h)if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
              var f = h[n].apply(h, s);
              if (void 0 !== f)return f
            } else r("no such method '" + n + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + n + "'")
          }
          return this
        }
        return this.each(function () {
          var o = t.data(this, e);
          o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
        })
      }
    }

    if (t) {
      var r = "undefined" == typeof console ? e : function (t) {
        console.error(t)
      };
      return t.bridget = function (t, e) {
        i(e), n(t, e)
      }, t.bridget
    }
  }

  var o = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function (t) {
  function e(e) {
    var i = t.event;
    return i.target = i.target || i.srcElement || e, i
  }

  var i = document.documentElement, o = function () {
  };
  i.addEventListener ? o = function (t, e, i) {
    t.addEventListener(e, i, !1)
  } : i.attachEvent && (o = function (t, i, o) {
    t[i + o] = o.handleEvent ? function () {
      var i = e(t);
      o.handleEvent.call(o, i)
    } : function () {
      var i = e(t);
      o.call(t, i)
    }, t.attachEvent("on" + i, t[i + o])
  });
  var n = function () {
  };
  i.removeEventListener ? n = function (t, e, i) {
    t.removeEventListener(e, i, !1)
  } : i.detachEvent && (n = function (t, e, i) {
    t.detachEvent("on" + e, t[e + i]);
    try {
      delete t[e + i]
    } catch (o) {
      t[e + i] = void 0
    }
  });
  var r = {bind: o, unbind: n};
  "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function () {
  function t() {
  }

  function e(t, e) {
    for (var i = t.length; i--;)if (t[i].listener === e)return i;
    return -1
  }

  function i(t) {
    return function () {
      return this[t].apply(this, arguments)
    }
  }

  var o = t.prototype, n = this, r = n.EventEmitter;
  o.getListeners = function (t) {
    var e, i, o = this._getEvents();
    if (t instanceof RegExp) {
      e = {};
      for (i in o)o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
    } else e = o[t] || (o[t] = []);
    return e
  }, o.flattenListeners = function (t) {
    var e, i = [];
    for (e = 0; t.length > e; e += 1)i.push(t[e].listener);
    return i
  }, o.getListenersAsObject = function (t) {
    var e, i = this.getListeners(t);
    return i instanceof Array && (e = {}, e[t] = i), e || i
  }, o.addListener = function (t, i) {
    var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
    for (o in n)n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
    return this
  }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
    return this.addListener(t, {listener: e, once: !0})
  }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
    return this.getListeners(t), this
  }, o.defineEvents = function (t) {
    for (var e = 0; t.length > e; e += 1)this.defineEvent(t[e]);
    return this
  }, o.removeListener = function (t, i) {
    var o, n, r = this.getListenersAsObject(t);
    for (n in r)r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
    return this
  }, o.off = i("removeListener"), o.addListeners = function (t, e) {
    return this.manipulateListeners(!1, t, e)
  }, o.removeListeners = function (t, e) {
    return this.manipulateListeners(!0, t, e)
  }, o.manipulateListeners = function (t, e, i) {
    var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
    if ("object" != typeof e || e instanceof RegExp)for (o = i.length; o--;)r.call(this, e, i[o]); else for (o in e)e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
    return this
  }, o.removeEvent = function (t) {
    var e, i = typeof t, o = this._getEvents();
    if ("string" === i)delete o[t]; else if (t instanceof RegExp)for (e in o)o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events;
    return this
  }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
    var i, o, n, r, s = this.getListenersAsObject(t);
    for (n in s)if (s.hasOwnProperty(n))for (o = s[n].length; o--;)i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
    return this
  }, o.trigger = i("emitEvent"), o.emit = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e)
  }, o.setOnceReturnValue = function (t) {
    return this._onceReturnValue = t, this
  }, o._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, o._getEvents = function () {
    return this._events || (this._events = {})
  }, t.noConflict = function () {
    return n.EventEmitter = r, t
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return t
  }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this), function (t) {
  function e(t) {
    if (t) {
      if ("string" == typeof o[t])return t;
      t = t.charAt(0).toUpperCase() + t.slice(1);
      for (var e, n = 0, r = i.length; r > n; n++)if (e = i[n] + t, "string" == typeof o[e])return e
    }
  }

  var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
  "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
    return e
  }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
  function e(t) {
    var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function i() {
  }

  function o() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0, i = s.length; i > e; e++) {
      var o = s[e];
      t[o] = 0
    }
    return t
  }

  function n(i) {
    function n() {
      if (!d) {
        d = !0;
        var o = t.getComputedStyle;
        if (p = function () {
            var t = o ? function (t) {
              return o(t, null)
            } : function (t) {
              return t.currentStyle
            };
            return function (e) {
              var i = t(e);
              return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
            }
          }(), h = i("boxSizing")) {
          var n = document.createElement("div");
          n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box";
          var s = document.body || document.documentElement;
          s.appendChild(n);
          var a = p(n);
          f = 200 === e(a.width), s.removeChild(n)
        }
      }
    }

    function a(t) {
      if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
        var i = p(t);
        if ("none" === i.display)return o();
        var r = {};
        r.width = t.offsetWidth, r.height = t.offsetHeight;
        for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) {
          var c = s[d], m = i[c];
          m = u(t, m);
          var y = parseFloat(m);
          r[c] = isNaN(y) ? 0 : y
        }
        var g = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom, _ = r.marginLeft + r.marginRight, I = r.marginTop + r.marginBottom, z = r.borderLeftWidth + r.borderRightWidth, L = r.borderTopWidth + r.borderBottomWidth, x = a && f, E = e(i.width);
        E !== !1 && (r.width = E + (x ? 0 : g + z));
        var b = e(i.height);
        return b !== !1 && (r.height = b + (x ? 0 : v + L)), r.innerWidth = r.width - (g + z), r.innerHeight = r.height - (v + L), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r
      }
    }

    function u(e, i) {
      if (t.getComputedStyle || -1 === i.indexOf("%"))return i;
      var o = e.style, n = o.left, r = e.runtimeStyle, s = r && r.left;
      return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
    }

    var p, h, f, d = !1;
    return a
  }

  var r = "undefined" == typeof console ? i : function (t) {
    console.error(t)
  }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function (t) {
  function e(t) {
    "function" == typeof t && (e.isReady ? t() : s.push(t))
  }

  function i(t) {
    var i = "readystatechange" === t.type && "complete" !== r.readyState;
    e.isReady || i || o()
  }

  function o() {
    e.isReady = !0;
    for (var t = 0, i = s.length; i > t; t++) {
      var o = s[t];
      o()
    }
  }

  function n(n) {
    return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
  }

  var r = t.document, s = [];
  e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
}(window), function (t) {
  function e(t, e) {
    return t[s](e)
  }

  function i(t) {
    if (!t.parentNode) {
      var e = document.createDocumentFragment();
      e.appendChild(t)
    }
  }

  function o(t, e) {
    i(t);
    for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)if (o[n] === t)return !0;
    return !1
  }

  function n(t, o) {
    return i(t), e(t, o)
  }

  var r, s = function () {
    if (t.matches)return "matches";
    if (t.matchesSelector)return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
      var n = e[i], r = n + "MatchesSelector";
      if (t[r])return r
    }
  }();
  if (s) {
    var a = document.createElement("div"), u = e(a, "div");
    r = u ? e : n
  } else r = o;
  "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
    return r
  }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, o) {
    return e(t, i, o)
  }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
  var o = {};
  o.extend = function (t, e) {
    for (var i in e)t[i] = e[i];
    return t
  }, o.modulo = function (t, e) {
    return (t % e + e) % e
  };
  var n = Object.prototype.toString;
  o.isArray = function (t) {
    return "[object Array]" == n.call(t)
  }, o.makeArray = function (t) {
    var e = [];
    if (o.isArray(t))e = t; else if (t && "number" == typeof t.length)for (var i = 0, n = t.length; n > i; i++)e.push(t[i]); else e.push(t);
    return e
  }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
    return t.indexOf(e)
  } : function (t, e) {
    for (var i = 0, o = t.length; o > i; i++)if (t[i] === e)return i;
    return -1
  }, o.removeFrom = function (t, e) {
    var i = o.indexOf(t, e);
    -1 != i && t.splice(i, 1)
  }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
    return t instanceof HTMLElement
  } : function (t) {
    return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
  }, o.setText = function () {
    function t(t, i) {
      e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
    }

    var e;
    return t
  }(), o.getParent = function (t, e) {
    for (; t != document.body;)if (t = t.parentNode, i(t, e))return t
  }, o.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, o.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, o.filterFindElements = function (t, e) {
    t = o.makeArray(t);
    for (var n = [], r = 0, s = t.length; s > r; r++) {
      var a = t[r];
      if (o.isElement(a))if (e) {
        i(a, e) && n.push(a);
        for (var u = a.querySelectorAll(e), p = 0, h = u.length; h > p; p++)n.push(u[p])
      } else n.push(a)
    }
    return n
  }, o.debounceMethod = function (t, e, i) {
    var o = t.prototype[e], n = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[n];
      t && clearTimeout(t);
      var e = arguments, r = this;
      this[n] = setTimeout(function () {
        o.apply(r, e), delete r[n]
      }, i || 100)
    }
  }, o.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var r = t.console;
  return o.htmlInit = function (i, n) {
    e(function () {
      for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; p > u; u++) {
        var h, f = s[u], d = f.getAttribute(a);
        try {
          h = d && JSON.parse(d)
        } catch (l) {
          r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + l);
          continue
        }
        var c = new i(f, h), m = t.jQuery;
        m && m.data(f, n, c)
      }
    })
  }, o
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, o, n, r) {
    return e(t, i, o, n, r)
  }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i, o, n) {
  function r(t) {
    for (var e in t)return !1;
    return e = null, !0
  }

  function s(t, e) {
    t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
  }

  var a = t.getComputedStyle, u = a ? function (t) {
    return a(t, null)
  } : function (t) {
    return t.currentStyle
  }, p = o("transition"), h = o("transform"), f = p && h, d = !!o("perspective"), l = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "otransitionend",
    transition: "transitionend"
  }[p], c = ["transform", "transition", "transitionDuration", "transitionProperty"], m = function () {
    for (var t = {}, e = 0, i = c.length; i > e; e++) {
      var n = c[e], r = o(n);
      r && r !== n && (t[n] = r)
    }
    return t
  }();
  n.extend(s.prototype, e.prototype), s.prototype._create = function () {
    this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
  }, s.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, s.prototype.getSize = function () {
    this.size = i(this.element)
  }, s.prototype.css = function (t) {
    var e = this.element.style;
    for (var i in t) {
      var o = m[i] || i;
      e[o] = t[i]
    }
  }, s.prototype.getPosition = function () {
    var t = u(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
    n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
    var s = this.layout.size;
    n -= i ? s.paddingLeft : s.paddingRight, r -= o ? s.paddingTop : s.paddingBottom, this.position.x = n, this.position.y = r
  }, s.prototype.layoutPosition = function () {
    var t = this.layout.size, e = this.layout.options, i = {}, o = e.isOriginLeft ? "paddingLeft" : "paddingRight", n = e.isOriginLeft ? "left" : "right", r = e.isOriginLeft ? "right" : "left", s = this.position.x + t[o];
    s = e.percentPosition && !e.isHorizontal ? 100 * (s / t.width) + "%" : s + "px", i[n] = s, i[r] = "";
    var a = e.isOriginTop ? "paddingTop" : "paddingBottom", u = e.isOriginTop ? "top" : "bottom", p = e.isOriginTop ? "bottom" : "top", h = this.position.y + t[a];
    h = e.percentPosition && e.isHorizontal ? 100 * (h / t.height) + "%" : h + "px", i[u] = h, i[p] = "", this.css(i), this.emitEvent("layout", [this])
  };
  var y = d ? function (t, e) {
    return "translate3d(" + t + "px, " + e + "px, 0)"
  } : function (t, e) {
    return "translate(" + t + "px, " + e + "px)"
  };
  s.prototype._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y;
    if (this.setPosition(t, e), s && !this.isTransitioning)return void this.layoutPosition();
    var a = t - i, u = e - o, p = {}, h = this.layout.options;
    a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
      to: p,
      onTransitionEnd: {transform: this.layoutPosition},
      isCleaning: !0
    })
  }, s.prototype.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, s.prototype.moveTo = f ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
  }, s.prototype._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)
  }, s.prototype._transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd)e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to)e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var g = h && n.toDashed(h) + ",opacity";
  s.prototype.enableTransition = function () {
    this.isTransitioning || (this.css({
      transitionProperty: g,
      transitionDuration: this.layout.options.transitionDuration
    }), this.element.addEventListener(l, this, !1))
  }, s.prototype.transition = s.prototype[p ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t)
  }, s.prototype.onotransitionend = function (t) {
    this.ontransitionend(t)
  };
  var v = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
  s.prototype.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn, i = v[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
        var o = e.onEnd[i];
        o.call(this), delete e.onEnd[i]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, s.prototype.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
  }, s.prototype._removeStyles = function (t) {
    var e = {};
    for (var i in t)e[i] = "";
    this.css(e)
  };
  var _ = {transitionProperty: "", transitionDuration: ""};
  return s.prototype.removeTransitionStyles = function () {
    this.css(_)
  }, s.prototype.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
  }, s.prototype.remove = function () {
    if (!p || !parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
    var t = this;
    this.once("transitionEnd", function () {
      t.removeElem()
    }), this.hide()
  }, s.prototype.reveal = function () {
    delete this.isHidden, this.css({display: ""});
    var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, s.prototype.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, s.prototype.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity)return "opacity";
    for (var i in e)return i
  }, s.prototype.hide = function () {
    this.isHidden = !0, this.css({display: ""});
    var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, s.prototype.onHideTransitionEnd = function () {
    this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
  }, s.prototype.destroy = function () {
    this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
  }, s
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, r, s) {
    return e(t, i, o, n, r, s)
  }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n, r) {
  function s(t, e) {
    var i = n.getQueryElement(t);
    if (!i)return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++h;
    this.element.outlayerGUID = o, f[o] = this, this._create(), this.options.isInitLayout && this.layout()
  }

  var a = t.console, u = t.jQuery, p = function () {
  }, h = 0, f = {};
  return s.namespace = "outlayer", s.Item = r, s.defaults = {
    containerStyle: {position: "relative"},
    isInitLayout: !0,
    isOriginLeft: !0,
    isOriginTop: !0,
    isResizeBound: !0,
    isResizingContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
    visibleStyle: {opacity: 1, transform: "scale(1)"}
  }, n.extend(s.prototype, i.prototype), s.prototype.option = function (t) {
    n.extend(this.options, t)
  }, s.prototype._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
  }, s.prototype.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, s.prototype._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
      var s = e[n], a = new i(s, this);
      o.push(a)
    }
    return o
  }, s.prototype._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, s.prototype.getItemElements = function () {
    for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e].element);
    return t
  }, s.prototype.layout = function () {
    this._resetLayout(), this._manageStamps();
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, t), this._isLayoutInited = !0
  }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function () {
    this.getSize()
  }, s.prototype.getSize = function () {
    this.size = o(this.element)
  }, s.prototype._getMeasurement = function (t, e) {
    var i, r = this.options[t];
    r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0
  }, s.prototype.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, s.prototype._getItemsForLayout = function (t) {
    for (var e = [], i = 0, o = t.length; o > i; i++) {
      var n = t[i];
      n.isIgnored || e.push(n)
    }
    return e
  }, s.prototype._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      for (var i = [], o = 0, n = t.length; n > o; o++) {
        var r = t[o], s = this._getItemLayoutPosition(r);
        s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
      }
      this._processLayoutQueue(i)
    }
  }, s.prototype._getItemLayoutPosition = function () {
    return {x: 0, y: 0}
  }, s.prototype._processLayoutQueue = function (t) {
    for (var e = 0, i = t.length; i > e; e++) {
      var o = t[e];
      this._positionItem(o.item, o.x, o.y, o.isInstant)
    }
  }, s.prototype._positionItem = function (t, e, i, o) {
    o ? t.goTo(e, i) : t.moveTo(e, i)
  }, s.prototype._postLayout = function () {
    this.resizeContainer()
  }, s.prototype.resizeContainer = function () {
    if (this.options.isResizingContainer) {
      var t = this._getContainerSize();
      t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
    }
  }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, s.prototype._emitCompleteOnItems = function (t, e) {
    function i() {
      n.emitEvent(t + "Complete", [e])
    }

    function o() {
      s++, s === r && i()
    }

    var n = this, r = e.length;
    if (!e || !r)return void i();
    for (var s = 0, a = 0, u = e.length; u > a; a++) {
      var p = e[a];
      p.once(t, o)
    }
  }, s.prototype.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, s.prototype.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, s.prototype.stamp = function (t) {
    if (t = this._find(t)) {
      this.stamps = this.stamps.concat(t);
      for (var e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        this.ignore(o)
      }
    }
  }, s.prototype.unstamp = function (t) {
    if (t = this._find(t))for (var e = 0, i = t.length; i > e; e++) {
      var o = t[e];
      n.removeFrom(this.stamps, o), this.unignore(o)
    }
  }, s.prototype._find = function (t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
  }, s.prototype._manageStamps = function () {
    if (this.stamps && this.stamps.length) {
      this._getBoundingRect();
      for (var t = 0, e = this.stamps.length; e > t; t++) {
        var i = this.stamps[t];
        this._manageStamp(i)
      }
    }
  }, s.prototype._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(), e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(), i = this._boundingRect, n = o(t), r = {
      left: e.left - i.left - n.marginLeft,
      top: e.top - i.top - n.marginTop,
      right: i.right - e.right - n.marginRight,
      bottom: i.bottom - e.bottom - n.marginBottom
    };
    return r
  }, s.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, s.prototype.bindResize = function () {
    this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
  }, s.prototype.unbindResize = function () {
    this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
  }, s.prototype.onresize = function () {
    function t() {
      e.resize(), delete e.resizeTimeout
    }

    this.resizeTimeout && clearTimeout(this.resizeTimeout);
    var e = this;
    this.resizeTimeout = setTimeout(t, 100)
  }, s.prototype.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, s.prototype.needsResizeLayout = function () {
    var t = o(this.element), e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, s.prototype.addItems = function (t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, s.prototype.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, s.prototype.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, s.prototype.reveal = function (t) {
    this._emitCompleteOnItems("reveal", t);
    for (var e = t && t.length, i = 0; e && e > i; i++) {
      var o = t[i];
      o.reveal()
    }
  }, s.prototype.hide = function (t) {
    this._emitCompleteOnItems("hide", t);
    for (var e = t && t.length, i = 0; e && e > i; i++) {
      var o = t[i];
      o.hide()
    }
  }, s.prototype.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, s.prototype.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e)
  }, s.prototype.getItem = function (t) {
    for (var e = 0, i = this.items.length; i > e; e++) {
      var o = this.items[e];
      if (o.element === t)return o
    }
  }, s.prototype.getItems = function (t) {
    t = n.makeArray(t);
    for (var e = [], i = 0, o = t.length; o > i; i++) {
      var r = t[i], s = this.getItem(r);
      s && e.push(s)
    }
    return e
  }, s.prototype.remove = function (t) {
    var e = this.getItems(t);
    if (this._emitCompleteOnItems("remove", e), e && e.length)for (var i = 0, o = e.length; o > i; i++) {
      var r = e[i];
      r.remove(), n.removeFrom(this.items, r)
    }
  }, s.prototype.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "";
    for (var e = 0, i = this.items.length; i > e; e++) {
      var o = this.items[e];
      o.destroy()
    }
    this.unbindResize();
    var n = this.element.outlayerGUID;
    delete f[n], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
  }, s.data = function (t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e]
  }, s.create = function (t, e) {
    function i() {
      s.apply(this, arguments)
    }

    return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function () {
      r.apply(this, arguments)
    }, i.Item.prototype = new r, n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
  }, s.Item = r, s
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
  function e() {
    t.Item.apply(this, arguments)
  }

  e.prototype = new t.Item, e.prototype._create = function () {
    this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
  }, e.prototype.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData, e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this)
      }
    }
  };
  var i = e.prototype.destroy;
  return e.prototype.destroy = function () {
    i.apply(this, arguments), this.css({display: ""})
  }, e
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }

  return function () {
    function t(t) {
      return function () {
        return e.prototype[t].apply(this.isotope, arguments)
      }
    }

    for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
      var s = o[n];
      i.prototype[s] = t(s)
    }
  }(), i.prototype.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element), i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight
  }, i.prototype._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments)
  }, i.prototype.getColumnWidth = function () {
    this.getSegmentSize("column", "Width")
  }, i.prototype.getRowHeight = function () {
    this.getSegmentSize("row", "Height")
  }, i.prototype.getSegmentSize = function (t, e) {
    var i = t + e, o = "outer" + e;
    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e]
    }
  }, i.prototype.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, i.prototype.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments)
  }, i.prototype.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function (t, e) {
    function o() {
      i.apply(this, arguments)
    }

    return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
  }, i
}), function (t, e) {
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, i) {
  var o = t.create("masonry");
  return o.prototype._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
    var t = this.cols;
    for (this.colYs = []; t--;)this.colYs.push(0);
    this.maxY = 0
  }, o.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0], i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, r = n / o, s = o - n % o, a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1)
  }, o.prototype.getContainerWidth = function () {
    var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
    this.containerWidth = i && i.innerWidth
  }, o.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i.indexOf(r, s), u = {
      x: this.columnWidth * a,
      y: s
    }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)this.colYs[a + f] = p;
    return u
  }, o.prototype._getColGroup = function (t) {
    if (2 > t)return this.colYs;
    for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
      var n = this.colYs.slice(o, o + t);
      e[o] = Math.max.apply(Math, n)
    }
    return e
  }, o.prototype._manageStamp = function (t) {
    var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
    s = Math.max(0, s);
    var a = Math.floor(r / this.columnWidth);
    a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
    for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)this.colYs[p] = Math.max(u, this.colYs[p])
  }, o.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {height: this.maxY};
    return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
  }, o.prototype._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, o.prototype.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t !== this.containerWidth
  }, o
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
  function i(t, e) {
    for (var i in e)t[i] = e[i];
    return t
  }

  var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
  i(o.prototype, e.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
  var a = o.prototype.measureColumns;
  o.prototype.measureColumns = function () {
    this.items = this.isotope.filteredItems, a.call(this)
  };
  var u = o.prototype._manageStamp;
  return o.prototype._manageStamp = function () {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
  }, o
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
  var e = t.create("fitRows");
  return e.prototype._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, e.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {x: this.x, y: this.y};
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
  }, e.prototype._getContainerSize = function () {
    return {height: this.maxY}
  }, e
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
  var e = t.create("vertical", {horizontalAlignment: 0});
  return e.prototype._resetLayout = function () {
    this.y = 0
  }, e.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
    return this.y += t.size.outerHeight, {x: e, y: i}
  }, e.prototype._getContainerSize = function () {
    return {height: this.y}
  }, e
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, o, n, r, s, a) {
    return e(t, i, o, n, r, s, a)
  }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, r, s) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0, r = t.length; r > n; n++) {
        var s = t[n], a = i.sortData[s], u = o.sortData[s];
        if (a > u || u > a) {
          var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
          return (a > u ? 1 : -1) * h
        }
      }
      return 0
    }
  }

  var u = t.jQuery, p = String.prototype.trim ? function (t) {
    return t.trim()
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "")
  }, h = document.documentElement, f = h.textContent ? function (t) {
    return t.textContent
  } : function (t) {
    return t.innerText
  }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
  d.Item = r, d.LayoutMode = s, d.prototype._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t in s.modes)this._initLayoutMode(t)
  }, d.prototype.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, d.prototype._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) {
      var n = t[i];
      n.id = this.itemGUID++
    }
    return this._updateItemsSortData(t), t
  }, d.prototype._initLayoutMode = function (t) {
    var e = s.modes[t], i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, d.prototype.layout = function () {
    return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
  }, d.prototype._layout = function () {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, d.prototype.arrange = function (t) {
    function e() {
      o.reveal(i.needReveal), o.hide(i.needHide)
    }

    this.option(t), this._getIsInstant();
    var i = this._filter(this.items);
    this.filteredItems = i.matches;
    var o = this;
    this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
  }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function () {
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    return this._isInstant = t, t
  }, d.prototype._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.emitEvent("arrangeComplete", [n.filteredItems])
    }

    var e, i, o, n = this;
    this.once("layoutComplete", function () {
      e = !0, t()
    }), this.once("hideComplete", function () {
      i = !0, t()
    }), this.once("revealComplete", function () {
      o = !0, t()
    })
  }, d.prototype._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
      var u = t[s];
      if (!u.isIgnored) {
        var p = r(u);
        p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
      }
    }
    return {matches: i, needReveal: o, needHide: n}
  }, d.prototype._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t)
    } : "function" == typeof t ? function (e) {
      return t(e.element)
    } : function (e) {
      return o(e.element, t)
    }
  }, d.prototype.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, d.prototype._getSorters = function () {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = l(i)
    }
  }, d.prototype._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && e > i; i++) {
      var o = t[i];
      o.updateSortData()
    }
  };
  var l = function () {
    function t(t) {
      if ("string" != typeof t)return t;
      var i = p(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), a = d.sortDataParsers[i[1]];
      return t = a ? function (t) {
        return t && a(s(t))
      } : function (t) {
        return t && s(t)
      }
    }

    function e(t, e) {
      var i;
      return i = t ? function (e) {
        return e.getAttribute(t)
      } : function (t) {
        var i = t.querySelector(e);
        return i && f(i)
      }
    }

    return t
  }();
  d.sortDataParsers = {
    parseInt: function (t) {
      return parseInt(t, 10)
    }, parseFloat: function (t) {
      return parseFloat(t)
    }
  }, d.prototype._sort = function () {
    var t = this.options.sortBy;
    if (t) {
      var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending);
      this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
    }
  }, d.prototype._mode = function () {
    var t = this.options.layoutMode, e = this.modes[t];
    if (!e)throw Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, d.prototype._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, d.prototype._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t)
  }, d.prototype._manageStamp = function (t) {
    this._mode()._manageStamp(t)
  }, d.prototype._getContainerSize = function () {
    return this._mode()._getContainerSize()
  }, d.prototype.needsResizeLayout = function () {
    return this._mode().needsResizeLayout()
  }, d.prototype.appended = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, d.prototype.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, d.prototype._filterRevealAdded = function (t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, d.prototype.insert = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, o, n = e.length;
      for (i = 0; n > i; i++)o = e[i], this.element.appendChild(o.element);
      var r = this._filter(e).matches;
      for (i = 0; n > i; i++)e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; n > i; i++)delete e[i].isLayoutInstant;
      this.reveal(r)
    }
  };
  var c = d.prototype.remove;
  return d.prototype.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    var i = e && e.length;
    if (i)for (var o = 0; i > o; o++) {
      var r = e[o];
      n.removeFrom(this.filteredItems, r)
    }
  }, d.prototype.shuffle = function () {
    for (var t = 0, e = this.items.length; e > t; t++) {
      var i = this.items[t];
      i.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, d.prototype._noTransition = function (t) {
    var e = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var i = t.call(this);
    return this.options.transitionDuration = e, i
  }, d.prototype.getFilteredItemElements = function () {
    for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)t.push(this.filteredItems[e].element);
    return t
  }, d
});
!function (t, e, i, s) {
  function n(e, i) {
    this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function (t, e) {
      this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
    }, this)), t.each(n.Pipe, t.proxy(function (e, i) {
      this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
    }, this)), this.setup(), this.initialize()
  }

  function o(t) {
    if (t.touches !== s)return {x: t.touches[0].pageX, y: t.touches[0].pageY};
    if (t.touches === s) {
      if (t.pageX !== s)return {x: t.pageX, y: t.pageY};
      if (t.pageX === s)return {x: t.clientX, y: t.clientY}
    }
  }

  function r(t) {
    var e, s, n = i.createElement("div"), o = t;
    for (e in o)if (s = o[e], "undefined" != typeof n.style[s])return n = null, [s, e];
    return [!1]
  }

  function a() {
    return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
  }

  function h() {
    return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
  }

  function l() {
    return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
  }

  function c() {
    return "ontouchstart" in e || !!navigator.msMaxTouchPoints
  }

  function d() {
    return e.navigator.msPointerEnabled
  }

  var p, u, g;
  p = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null
  }, u = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, g = {
    _onDragStart: null,
    _onDragMove: null,
    _onDragEnd: null,
    _transitionEnd: null,
    _resizer: null,
    _responsiveCall: null,
    _goToLoop: null,
    _checkVisibile: null
  }, n.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    responsiveClass: !1,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    themeClass: "owl-theme",
    baseClass: "owl-carousel",
    itemClass: "owl-item",
    centerClass: "center",
    activeClass: "active"
  }, n.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, n.Plugins = {}, n.Pipe = [{
    filter: ["width", "items", "settings"], run: function (t) {
      t.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"], run: function () {
      var t = this._clones, e = this.$stage.children(".cloned");
      (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
    }
  }, {
    filter: ["items", "settings"], run: function () {
      var t, e, i = this._clones, s = this._items, n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
      for (t = 0, e = Math.abs(n / 2); e > t; t++)n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
    }
  }, {
    filter: ["width", "items", "settings"], run: function () {
      var t, e, i, s = this.settings.rtl ? 1 : -1, n = (this.width() / this.settings.items).toFixed(3), o = 0;
      for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++)t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
    }
  }, {
    filter: ["width", "items", "settings"], run: function () {
      var e, i, s = (this.width() / this.settings.items).toFixed(3), n = {
        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
        "padding-left": this.settings.stagePadding || "",
        "padding-right": this.settings.stagePadding || ""
      };
      if (this.$stage.css(n), n = {width: this.settings.autoWidth ? "auto" : s - this.settings.margin}, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
          return t > 1
        }).length > 0)for (e = 0, i = this._coordinates.length; i > e; e++)n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n); else this.$stage.children().css(n)
    }
  }, {
    filter: ["width", "items", "settings"], run: function (t) {
      t.current && this.reset(this.$stage.children().index(t.current))
    }
  }, {
    filter: ["position"], run: function () {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"], run: function () {
      var t, e, i, s, n = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + o, a = r + this.width() * n, h = [];
      for (i = 0, s = this._coordinates.length; s > i; i++)t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
    }
  }], n.prototype.initialize = function () {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
      var e, i, n;
      if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n)return this.preloadAutoWidthImages(e), !1
    }
    this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
  }, n.prototype.setup = function () {
    var e = this.viewport(), i = this.options.responsive, s = -1, n = null;
    i ? (t.each(i, function (t) {
      e >= t && t > s && (s = Number(t))
    }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
      return e.replace(/\b owl-responsive-\S+/g, "")
    }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
      property: {
        name: "settings",
        value: n
      }
    }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    }))
  }, n.prototype.optionsLogic = function () {
    this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, n.prototype.prepare = function (e) {
    var i = this.trigger("prepare", {content: e});
    return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
  }, n.prototype.update = function () {
    for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
      return this[t]
    }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
    this._invalidated = {}
  }, n.prototype.width = function (t) {
    switch (t = t || n.Width.Default) {
      case n.Width.Inner:
      case n.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, n.prototype.refresh = function () {
    return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
  }, n.prototype.eventsCall = function () {
    this.e._onDragStart = t.proxy(function (t) {
      this.onDragStart(t)
    }, this), this.e._onDragMove = t.proxy(function (t) {
      this.onDragMove(t)
    }, this), this.e._onDragEnd = t.proxy(function (t) {
      this.onDragEnd(t)
    }, this), this.e._onResize = t.proxy(function (t) {
      this.onResize(t)
    }, this), this.e._transitionEnd = t.proxy(function (t) {
      this.transitionEnd(t)
    }, this), this.e._preventClick = t.proxy(function (t) {
      this.preventClick(t)
    }, this)
  }, n.prototype.onThrottledResize = function () {
    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
  }, n.prototype.onResize = function () {
    return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
  }, n.prototype.eventsRouter = function (t) {
    var e = t.type;
    "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
  }, n.prototype.internalEvents = function () {
    var i = (c(), d());
    this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
      this.eventsRouter(t)
    }, this)), this.$stage.on("dragstart", function () {
      return !1
    }), this.$stage.get(0).onselectstart = function () {
      return !1
    }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
      this.eventsRouter(t)
    }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
  }, n.prototype.onDragStart = function (s) {
    var n, r, a, h;
    if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch)return !1;
    if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d)return this.state.inMotion = !1, !1;
    this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
      this.eventsRouter(t)
    }, this))
  }, n.prototype.onDragMove = function (t) {
    var i, n, r, a, h, l;
    this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), h = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
  }, n.prototype.onDragEnd = function (e) {
    var s, n, o;
    if (this.state.isTouch) {
      if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)return this.state.inMotion = !1, !1;
      this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
    }
  }, n.prototype.removeClick = function (i) {
    this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
      t(i).off("click.preventClick")
    }, 300)
  }, n.prototype.preventClick = function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
  }, n.prototype.getTransformProperty = function () {
    var t, i;
    return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
  }, n.prototype.closest = function (e) {
    var i = -1, s = 30, n = this.width(), o = this.coordinates();
    return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
      return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
    }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
  }, n.prototype.animate = function (e) {
    this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
      transform: "translate3d(" + e + "px,0px, 0px)",
      transition: this.speed() / 1e3 + "s"
    }) : this.state.isTouch ? this.$stage.css({left: e + "px"}) : this.$stage.animate({left: e}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
      this.state.inMotion && this.transitionEnd()
    }, this))
  }, n.prototype.current = function (t) {
    if (t === s)return this._current;
    if (0 === this._items.length)return s;
    if (t = this.normalize(t), this._current !== t) {
      var e = this.trigger("change", {property: {name: "position", value: t}});
      e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, n.prototype.invalidate = function (t) {
    this._invalidated[t] = !0
  }, n.prototype.reset = function (t) {
    t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
  }, n.prototype.normalize = function (e, i) {
    var n = i ? this._items.length : this._items.length + this._clones.length;
    return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
  }, n.prototype.relative = function (t) {
    return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
  }, n.prototype.maximum = function (t) {
    var e, i, s, n = 0, o = this.settings;
    if (t)return this._items.length - 1;
    if (!o.loop && o.center)e = this._items.length - 1; else if (o.loop || o.center)if (o.loop || o.center)e = this._items.length + o.items; else {
      if (!o.autoWidth && !o.merge)throw"Can not detect maximum absolute position.";
      for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width(); (s = this.coordinates(n)) && !(s * revert >= i);)e = ++n
    } else e = this._items.length - o.items;
    return e
  }, n.prototype.minimum = function (t) {
    return t ? 0 : this._clones.length / 2
  }, n.prototype.items = function (t) {
    return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
  }, n.prototype.mergers = function (t) {
    return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
  }, n.prototype.clones = function (e) {
    var i = this._clones.length / 2, n = i + this._items.length, o = function (t) {
      return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
    };
    return e === s ? t.map(this._clones, function (t, e) {
      return o(e)
    }) : t.map(this._clones, function (t, i) {
      return t === e ? o(i) : null
    })
  }, n.prototype.speed = function (t) {
    return t !== s && (this._speed = t), this._speed
  }, n.prototype.coordinates = function (e) {
    var i = null;
    return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
      return this.coordinates(e)
    }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
  }, n.prototype.duration = function (t, e, i) {
    return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
  }, n.prototype.to = function (i, s) {
    if (this.settings.loop) {
      var n = i - this.relative(this.current()), o = this.current(), r = this.current(), a = this.current() + n, h = 0 > r - a ? !0 : !1, l = this._clones.length + this._items.length;
      a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
        this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
      }, this), 30)
    } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
  }, n.prototype.next = function (t) {
    t = t || !1, this.to(this.relative(this.current()) + 1, t)
  }, n.prototype.prev = function (t) {
    t = t || !1, this.to(this.relative(this.current()) - 1, t)
  }, n.prototype.transitionEnd = function (t) {
    return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
  }, n.prototype.viewport = function () {
    var s;
    if (this.options.responsiveBaseElement !== e)s = t(this.options.responsiveBaseElement).width(); else if (e.innerWidth)s = e.innerWidth; else {
      if (!i.documentElement || !i.documentElement.clientWidth)throw"Can not detect viewport width.";
      s = i.documentElement.clientWidth
    }
    return s
  }, n.prototype.replace = function (e) {
    this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
      return 1 === this.nodeType
    }).each(t.proxy(function (t, e) {
      e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, n.prototype.add = function (t, e) {
    e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
      content: t,
      position: e
    }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
      content: t,
      position: e
    })
  }, n.prototype.remove = function (t) {
    t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
      content: this._items[t],
      position: t
    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: t
    }))
  }, n.prototype.addTriggerableEvents = function () {
    var e = t.proxy(function (e, i) {
      return t.proxy(function (t) {
        t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
      }, this)
    }, this);
    t.each({
      next: this.next,
      prev: this.prev,
      to: this.to,
      destroy: this.destroy,
      refresh: this.refresh,
      replace: this.replace,
      add: this.add,
      remove: this.remove
    }, t.proxy(function (t, i) {
      this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
    }, this))
  }, n.prototype.watchVisibility = function () {
    function i(t) {
      return t.offsetWidth > 0 && t.offsetHeight > 0
    }

    function s() {
      i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
    }

    i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
  }, n.prototype.preloadAutoWidthImages = function (e) {
    var i, s, n, o;
    i = 0, s = this, e.each(function (r, a) {
      n = t(a), o = new Image, o.onload = function () {
        i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
      }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
    })
  }, n.prototype.destroy = function () {
    this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
    for (var s in this._plugins)this._plugins[s].destroy();
    (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
    }, this.$stage.off("dragstart", function () {
      return !1
    })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
  }, n.prototype.op = function (t, e, i) {
    var s = this.settings.rtl;
    switch (e) {
      case"<":
        return s ? t > i : i > t;
      case">":
        return s ? i > t : t > i;
      case">=":
        return s ? i >= t : t >= i;
      case"<=":
        return s ? t >= i : i >= t
    }
  }, n.prototype.on = function (t, e, i, s) {
    t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
  }, n.prototype.off = function (t, e, i, s) {
    t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
  }, n.prototype.trigger = function (e, i, s) {
    var n = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    }, o = t.camelCase(t.grep(["on", e, s], function (t) {
      return t
    }).join("-").toLowerCase()), r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, n, i));
    return this._supress[e] || (t.each(this._plugins, function (t, e) {
      e.onTrigger && e.onTrigger(r)
    }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
  }, n.prototype.suppress = function (e) {
    t.each(e, t.proxy(function (t, e) {
      this._supress[e] = !0
    }, this))
  }, n.prototype.release = function (e) {
    t.each(e, t.proxy(function (t, e) {
      delete this._supress[e]
    }, this))
  }, n.prototype.browserSupport = function () {
    if (this.support3d = l(), this.support3d) {
      this.transformVendor = h();
      var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
      this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
    }
    this.state.orientation = e.orientation
  }, t.fn.owlCarousel = function (e) {
    return this.each(function () {
      t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
    })
  }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document), function (t, e) {
  var i = function (e) {
    this._core = e, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function (t, e) {
          this.load(e)
        }, this); n++ < s;)this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
      }, this)
    }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  i.Defaults = {lazyLoad: !1}, i.prototype.load = function (i) {
    var s = this._core.$stage.children().eq(i), n = s && s.find(".owl-lazy");
    !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
      var n, o = t(s), r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
      this._core.trigger("load", {
        element: o,
        url: r
      }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
        o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: r}, "lazy")
      }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function () {
        o.css({"background-image": "url(" + r + ")", opacity: "1"}), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy")
      }, this), n.src = r)
    }, this)), this._loaded.push(s.get(0)))
  }, i.prototype.destroy = function () {
    var t, e;
    for (t in this.handlers)this._core.$element.off(t, this.handlers[t]);
    for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document), function (t) {
  var e = function (i) {
    this._core = i, this._handlers = {
      "initialized.owl.carousel": t.proxy(function () {
        this._core.settings.autoHeight && this.update()
      }, this), "changed.owl.carousel": t.proxy(function (t) {
        this._core.settings.autoHeight && "position" == t.property.name && this.update()
      }, this), "loaded.owl.lazy": t.proxy(function (t) {
        this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
      }, this)
    }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function () {
    var t, e;
    for (t in this._handlers)this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
  var s = function (e) {
    this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
      "resize.owl.carousel": t.proxy(function (t) {
        this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
      }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
        this._playing && this.stop()
      }, this), "prepared.owl.carousel": t.proxy(function (e) {
        var i = t(e.content).find(".owl-video");
        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
      }, this)
    }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
      this.play(t)
    }, this))
  };
  s.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, s.prototype.fetch = function (t, e) {
    var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube", s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"), n = t.attr("data-width") || this._core.settings.videoWidth, o = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
    if (!r)throw new Error("Missing video URL.");
    if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1)i = "youtube"; else {
      if (!(s[3].indexOf("vimeo") > -1))throw new Error("Video URL not supported.");
      i = "vimeo"
    }
    s = s[6], this._videos[r] = {
      type: i,
      id: s,
      width: n,
      height: o
    }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
  }, s.prototype.thumbnail = function (e, i) {
    var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "", a = e.find("img"), h = "src", l = "", c = this._core.settings, d = function (t) {
      n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
    };
    return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
      type: "GET",
      url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (t) {
        o = t[0].thumbnail_large, d(o)
      }
    }))
  }, s.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
  }, s.prototype.play = function (e) {
    this._core.trigger("play", null, "video"), this._playing && this.stop();
    var i, s, n = t(e.target || e.srcElement), o = n.closest("." + this._core.settings.itemClass), r = this._videos[o.attr("data-video")], a = r.width || "100%", h = r.height || this._core.$stage.height();
    "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
  }, s.prototype.isInFullScreen = function () {
    var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
    return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
  }, s.prototype.destroy = function () {
    var t, e;
    this._core.$element.off("click.owl.video");
    for (t in this._handlers)this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function (e) {
    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
      "change.owl.carousel": t.proxy(function (t) {
        "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
      }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
        this.swapping = "translated" == t.type
      }, this), "translate.owl.carousel": t.proxy(function () {
        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  n.Defaults = {animateOut: !1, animateIn: !1}, n.prototype.swap = function () {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);
      var e, i = t.proxy(this.clear, this), s = this.core.$stage.children().eq(this.previous), n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut;
      this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
    }
  }, n.prototype.clear = function (e) {
    t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
  }, n.prototype.destroy = function () {
    var t, e;
    for (t in this.handlers)this.core.$element.off(t, this.handlers[t]);
    for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
  var s = function (e) {
    this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
      "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
        this.autoplay()
      }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
        this.play(e, i)
      }, this), "stop.owl.autoplay": t.proxy(function () {
        this.stop()
      }, this), "mouseover.owl.autoplay": t.proxy(function () {
        this.core.settings.autoplayHoverPause && this.pause()
      }, this), "mouseleave.owl.autoplay": t.proxy(function () {
        this.core.settings.autoplayHoverPause && this.autoplay()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  s.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, s.prototype.autoplay = function () {
    this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
      this.play()
    }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
  }, s.prototype.play = function () {
    return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
  }, s.prototype.stop = function () {
    e.clearInterval(this.interval)
  }, s.prototype.pause = function () {
    e.clearInterval(this.interval)
  }, s.prototype.destroy = function () {
    var t, i;
    e.clearInterval(this.interval);
    for (t in this.handlers)this.core.$element.off(t, this.handlers[t]);
    for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document), function (t) {
  "use strict";
  var e = function (i) {
    this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": t.proxy(function (e) {
        this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this), "add.owl.carousel": t.proxy(function (e) {
        this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
        this._core.settings.dotsData && this._templates.splice(t.position, 1)
      }, this), "change.owl.carousel": t.proxy(function (t) {
        if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var e = this._core.current(), i = this._core.maximum(), s = this._core.minimum();
          t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
        }
      }, this), "changed.owl.carousel": t.proxy(function (t) {
        "position" == t.property.name && this.draw()
      }, this), "refreshed.owl.carousel": t.proxy(function () {
        this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
      }, this)
    }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navRewind: !0,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotData: !1,
    dotsSpeed: !1,
    dotsContainer: !1,
    controlsClass: "owl-controls"
  }, e.prototype.initialize = function () {
    var e, i, s = this._core.settings;
    s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
      var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
      e.preventDefault(), this.to(i, s.dotsSpeed)
    }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
      this.prev(s.navSpeed)
    }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
      this.next(s.navSpeed)
    }, this));
    for (i in this._overrides)this._core[i] = t.proxy(this[i], this)
  }, e.prototype.destroy = function () {
    var t, e, i, s;
    for (t in this._handlers)this.$element.off(t, this._handlers[t]);
    for (e in this._controls)this._controls[e].remove();
    for (s in this.overides)this._core[s] = this._overrides[s];
    for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
  }, e.prototype.update = function () {
    var t, e, i, s = this._core.settings, n = this._core.clones().length / 2, o = n + this._core.items().length, r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
    if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
      start: t - n,
      end: t - n + r - 1
    }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
  }, e.prototype.draw = function () {
    var e, i, s = "", n = this._core.settings, o = (this._core.$stage.children(), this._core.relative(this._core.current()));
    if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
      if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
        for (i = 0; i < this._controls.$indicators.children().length; i++)s += this._templates[this._core.relative(i)];
        this._controls.$indicators.html(s)
      } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
      this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
    }
    this._controls.$indicators.toggle(n.dots)
  }, e.prototype.onTrigger = function (e) {
    var i = this._core.settings;
    e.page = {
      index: t.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
    }
  }, e.prototype.current = function () {
    var e = this._core.relative(this._core.current());
    return t.grep(this._pages, function (t) {
      return t.start <= e && t.end >= e
    }).pop()
  }, e.prototype.getPosition = function (e) {
    var i, s, n = this._core.settings;
    return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
  }, e.prototype.next = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
  }, e.prototype.prev = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
  }, e.prototype.to = function (e, i, s) {
    var n;
    s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
  }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (t, e) {
  "use strict";
  var i = function (s) {
    this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": t.proxy(function () {
        "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
      }, this), "prepared.owl.carousel": t.proxy(function (e) {
        var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[i] = e.content
      }, this)
    }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
      var t = e.location.hash.substring(1), i = this._core.$stage.children(), s = this._hashes[t] && i.index(this._hashes[t]) || 0;
      return t ? void this._core.to(s, !1, !0) : !1
    }, this))
  };
  i.Defaults = {URLhashListener: !1}, i.prototype.destroy = function () {
    var i, s;
    t(e).off("hashchange.owl.navigation");
    for (i in this._handlers)this._core.$element.off(i, this._handlers[i]);
    for (s in Object.getOwnPropertyNames(this))"function" != typeof this[s] && (this[s] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document);
!function (e) {
  e.flexslider = function (t, a) {
    var n = e(t);
    n.vars = e.extend({}, e.flexslider.defaults, a);
    var i, s = n.vars.namespace, r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, o = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, l = "click touchend MSPointerUp keyup", c = "", d = "vertical" === n.vars.direction, u = n.vars.reverse, v = n.vars.itemWidth > 0, p = "fade" === n.vars.animation, m = "" !== n.vars.asNavFor, f = {}, g = !0;
    e.data(t, "flexslider", n), f = {
      init: function () {
        n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
            var e = document.createElement("div"), t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
            for (var a in t)if (void 0 !== e.style[t[a]])return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
            return !1
          }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === e(n.vars.customDirectionNav).length && e(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
          return Math.round(Math.random()) - .5
        }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
          var t = e.keyCode;
          if (!n.animating && (39 === t || 37 === t)) {
            var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
            n.flexAnimate(a, n.vars.pauseOnAction)
          }
        }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
          e.preventDefault();
          var s = n.getTarget(0 > t ? "next" : "prev");
          n.flexAnimate(s, n.vars.pauseOnAction)
        }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
          n.manualPlay || n.manualPause || n.pause()
        }, function () {
          n.manualPause || n.manualPlay || n.stopped || n.play()
        }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), o && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
          n.vars.start(n)
        }, 200)
      }, asNav: {
        setup: function () {
          n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (t._slider = n, n.slides.each(function () {
            var t = this;
            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function (e) {
              e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
            }, !1), t.addEventListener("MSGestureTap", function (t) {
              t.preventDefault();
              var a = e(this), i = a.index();
              e(n.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
            })
          })) : n.slides.on(l, function (t) {
            t.preventDefault();
            var a = e(this), i = a.index(), r = a.offset().left - e(n).scrollLeft();
            0 >= r && a.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || a.hasClass(s + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
          })
        }
      }, controlNav: {
        setup: function () {
          n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
        }, setupPaging: function () {
          var t, a, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", r = 1;
          if (n.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), n.pagingCount > 1)for (var o = 0; o < n.pagingCount; o++) {
            if (a = n.slides.eq(o), t = "thumbnails" === n.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
              var d = a.attr("data-thumbcaption");
              "" !== d && void 0 !== d && (t += '<span class="' + s + 'caption">' + d + "</span>")
            }
            n.controlNavScaffold.append("<li>" + t + "</li>"), r++
          }
          n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function (t) {
            if (t.preventDefault(), "" === c || c === t.type) {
              var a = e(this), i = n.controlNav.index(a);
              a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
            }
            "" === c && (c = t.type), f.setToClearWatchedEvent()
          })
        }, setupManual: function () {
          n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(l, function (t) {
            if (t.preventDefault(), "" === c || c === t.type) {
              var a = e(this), i = n.controlNav.index(a);
              a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
            }
            "" === c && (c = t.type), f.setToClearWatchedEvent()
          })
        }, set: function () {
          var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
          n.controlNav = e("." + s + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
        }, active: function () {
          n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
        }, update: function (t, a) {
          n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(a).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(a, t) : f.controlNav.active()
        }
      }, directionNav: {
        setup: function () {
          var t = e('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
          n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + s + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(l, function (t) {
            t.preventDefault();
            var a;
            ("" === c || c === t.type) && (a = n.getTarget(e(this).hasClass(s + "next") ? "next" : "prev"), n.flexAnimate(a, n.vars.pauseOnAction)), "" === c && (c = t.type), f.setToClearWatchedEvent()
          })
        }, update: function () {
          var e = s + "disabled";
          1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
        }
      }, pausePlay: {
        setup: function () {
          var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
          n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + s + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + s + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function (t) {
            t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), f.setToClearWatchedEvent()
          })
        }, update: function (e) {
          "play" === e ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
        }
      }, touch: function () {
        function e(e) {
          e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
        }

        function a(e) {
          e.stopPropagation();
          var a = e.target._slider;
          if (a) {
            var n = -e.translationX, i = -e.translationY;
            return w += d ? i : n, m = w, y = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
              t._gesture.stop()
            }) : void((!y || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / c + 2 : 1)), a.setProps(l + m, "setTouch"))))
          }
        }

        function i(e) {
          e.stopPropagation();
          var t = e.target._slider;
          if (t) {
            if (t.animatingTo === t.currentSlide && !y && null !== m) {
              var a = u ? -m : m, n = t.getTarget(a > 0 ? "next" : "prev");
              t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
            }
            s = null, o = null, m = null, l = null, w = 0
          }
        }

        var s, o, l, c, m, f, g, h, S, y = !1, x = 0, b = 0, w = 0;
        r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function (e) {
          n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), x = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, s = d ? b : x, o = d ? x : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
        }, h = function (e) {
          x = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? s - b : s - x, y = d ? Math.abs(m) < Math.abs(x - o) : Math.abs(m) < Math.abs(b - o);
          var t = 500;
          (!y || Number(new Date) - f > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && 0 > m || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
        }, S = function (e) {
          if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !y && null !== m) {
            var a = u ? -m : m, i = n.getTarget(a > 0 ? "next" : "prev");
            n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
          }
          t.removeEventListener("touchend", S, !1), s = null, o = null, m = null, l = null
        }, t.addEventListener("touchstart", g, !1))
      }, resize: function () {
        !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
      }, smoothHeight: function (e) {
        if (!d || p) {
          var t = p ? n : n.viewport;
          e ? t.animate({height: n.slides.eq(n.animatingTo).height()}, e) : t.height(n.slides.eq(n.animatingTo).height())
        }
      }, sync: function (t) {
        var a = e(n.vars.sync).data("flexslider"), i = n.animatingTo;
        switch (t) {
          case"animate":
            a.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
            break;
          case"play":
            a.playing || a.asNav || a.play();
            break;
          case"pause":
            a.pause()
        }
      }, uniqueID: function (t) {
        return t.filter("[id]").add(t.find("[id]")).each(function () {
          var t = e(this);
          t.attr("id", t.attr("id") + "_clone")
        }), t
      }, pauseInvisible: {
        visProp: null, init: function () {
          var e = f.pauseInvisible.getHiddenProp();
          if (e) {
            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(t, function () {
              f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
            })
          }
        }, isHidden: function () {
          var e = f.pauseInvisible.getHiddenProp();
          return e ? document[e] : !1
        }, getHiddenProp: function () {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document)return "hidden";
          for (var t = 0; t < e.length; t++)if (e[t] + "Hidden" in document)return e[t] + "Hidden";
          return null
        }
      }, setToClearWatchedEvent: function () {
        clearTimeout(i), i = setTimeout(function () {
          c = ""
        }, 3e3)
      }
    }, n.flexAnimate = function (t, a, i, r, l) {
      if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, l) || i) && n.is(":visible")) {
        if (m && r) {
          var c = e(n.vars.asNavFor).data("flexslider");
          if (n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, l), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t)return n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
          n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / n.visible)
        }
        if (n.animating = !0, n.animatingTo = t, a && n.pause(), n.vars.before(n), n.syncExists && !l && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && f.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p)o ? (n.slides.eq(n.currentSlide).css({
          opacity: 0,
          zIndex: 1
        }), n.slides.eq(t).css({
          opacity: 1,
          zIndex: 2
        }), n.wrapup(y)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup)); else {
          var g, h, S, y = d ? n.slides.filter(":first").height() : n.computedW;
          v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * y : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * y : u ? (n.count - 1 - t + n.cloneOffset) * y : (t + n.cloneOffset) * y, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
            clearTimeout(n.ensureAnimationEnd), n.wrapup(y)
          }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
            n.wrapup(y)
          }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
            n.wrapup(y)
          })
        }
        n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
      }
    }, n.wrapup = function (e) {
      p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
    }, n.animateSlides = function () {
      !n.animating && g && n.flexAnimate(n.getTarget("next"))
    }, n.pause = function () {
      clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
    }, n.play = function () {
      n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
    }, n.stop = function () {
      n.pause(), n.stopped = !0
    }, n.canAdvance = function (e, t) {
      var a = m ? n.pagingCount - 1 : n.last;
      return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
    }, n.getTarget = function (e) {
      return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
    }, n.setProps = function (e, t, a) {
      var i = function () {
        var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, i = function () {
          if (v)return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
          switch (t) {
            case"setTotal":
              return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
            case"setTouch":
              return u ? e : e;
            case"jumpEnd":
              return u ? e : n.count * e;
            case"jumpStart":
              return u ? n.count * e : e;
            default:
              return e
          }
        }();
        return -1 * i + "px"
      }();
      n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
    }, n.setup = function (t) {
      if (p)n.slides.css({
        width: "100%",
        "float": "left",
        marginRight: "-100%",
        position: "relative"
      }), "init" === t && (o ? n.slides.css({
        opacity: 0,
        display: "block",
        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
        zIndex: 1
      }).eq(n.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight(); else {
        var a, i;
        "init" === t && (n.viewport = e('<div class="' + s + 'viewport"></div>').css({
          overflow: "hidden",
          position: "relative"
        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = e(n.vars.selector, n), a = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
          n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(a * n.h, "init")
        }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(a * n.computedW, "init"), setTimeout(function () {
          n.doMath(), n.newSlides.css({
            width: n.computedW,
            "float": "left",
            display: "block"
          }), n.vars.smoothHeight && f.smoothHeight()
        }, "init" === t ? 100 : 0))
      }
      v || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
    }, n.doMath = function () {
      var e = n.slides.first(), t = n.vars.itemMargin, a = n.vars.minItems, i = n.vars.maxItems;
      n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
    }, n.update = function (e, t) {
      n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
    }, n.addSlide = function (t, a) {
      var i = e(t);
      n.count += 1, n.last = n.count - 1, d && u ? void 0 !== a ? n.slides.eq(n.count - a).after(i) : n.container.prepend(i) : void 0 !== a ? n.slides.eq(a).before(i) : n.container.append(i), n.update(a, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
    }, n.removeSlide = function (t) {
      var a = isNaN(t) ? n.slides.index(e(t)) : t;
      n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(a, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
    }, f.init()
  }, e(window).blur(function (e) {
    focused = !1
  }).focus(function (e) {
    focused = !0
  }), e.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7e3,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    fadeFirstSlide: !0,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    customDirectionNav: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    start: function () {
    },
    before: function () {
    },
    after: function () {
    },
    end: function () {
    },
    added: function () {
    },
    removed: function () {
    },
    init: function () {
    }
  }, e.fn.flexslider = function (t) {
    if (void 0 === t && (t = {}), "object" == typeof t)return this.each(function () {
      var a = e(this), n = t.selector ? t.selector : ".slides > li", i = a.find(n);
      1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
    });
    var a = e(this).data("flexslider");
    switch (t) {
      case"play":
        a.play();
        break;
      case"pause":
        a.pause();
        break;
      case"stop":
        a.stop();
        break;
      case"next":
        a.flexAnimate(a.getTarget("next"), !0);
        break;
      case"prev":
      case"previous":
        a.flexAnimate(a.getTarget("prev"), !0);
        break;
      default:
        "number" == typeof t && a.flexAnimate(t, !0)
    }
  }
}(jQuery);
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
  function t(t, s) {
    var n, a, o, u = t.nodeName.toLowerCase();
    return "area" === u ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || s : s) && i(t)
  }

  function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
        return "hidden" === e.css(this, "visibility")
      }).length
  }

  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.11.1",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    scrollParent: function (t) {
      var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, a = this.parents().filter(function () {
        var t = e(this);
        return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
      }).eq(0);
      return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
    }, uniqueId: function () {
      var e = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e)
        })
      }
    }(), removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t)
      }
    }) : function (t, i, s) {
      return !!e.data(t, s[3])
    }, focusable: function (i) {
      return t(i, !isNaN(e.attr(i, "tabindex")))
    }, tabbable: function (i) {
      var s = e.attr(i, "tabindex"), n = isNaN(s);
      return (n || s >= 0) && t(i, !n)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
    function s(t, i, s, a) {
      return e.each(n, function () {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), i
    }

    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn["inner" + i] = function (t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
        e(this).css(a, s(this, t) + "px")
      })
    }, e.fn["outer" + i] = function (t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
        e(this).css(a, s(this, t, !0, n) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
    focus: function (t) {
      return function (i, s) {
        return "number" == typeof i ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(), s && s.call(t)
          }, i)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus), disableSelection: function () {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.bind(e + ".ui-disableSelection", function (e) {
          e.preventDefault()
        })
      }
    }(), enableSelection: function () {
      return this.unbind(".ui-disableSelection")
    }, zIndex: function (t) {
      if (void 0 !== t)return this.css("zIndex", t);
      if (this.length)for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
        n = n.parent()
      }
      return 0
    }
  }), e.ui.plugin = {
    add: function (t, i, s) {
      var n, a = e.ui[t].prototype;
      for (n in s)a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
    }, call: function (e, t, i, s) {
      var n, a = e.plugins[t];
      if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))for (n = 0; a.length > n; n++)e.options[a[n][0]] && a[n][1].apply(e.element, i)
    }
  };
  var s = 0, n = Array.prototype.slice;
  e.cleanData = function (t) {
    return function (i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++)try {
        s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
      } catch (o) {
      }
      t(i)
    }
  }(e.cleanData), e.widget = function (t, i, s) {
    var n, a, o, u, r = {}, h = t.split(".")[0];
    return t = t.split(".")[1], n = h + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
      return !!e.data(t, n)
    }, e[h] = e[h] || {}, a = e[h][t], o = e[h][t] = function (e, t) {
      return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
    }, e.extend(o, a, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), u = new i, u.options = e.widget.extend({}, u.options), e.each(s, function (t, s) {
      return e.isFunction(s) ? void(r[t] = function () {
        var e = function () {
          return i.prototype[t].apply(this, arguments)
        }, n = function (e) {
          return i.prototype[t].apply(this, e)
        };
        return function () {
          var t, i = this._super, a = this._superApply;
          return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
        }
      }()) : void(r[t] = s)
    }), o.prototype = e.widget.extend(u, {widgetEventPrefix: a ? u.widgetEventPrefix || t : t}, r, {
      constructor: o,
      namespace: h,
      widgetName: t,
      widgetFullName: n
    }), a ? (e.each(a._childConstructors, function (t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, o, i._proto)
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
  }, e.widget.extend = function (t) {
    for (var i, s, a = n.call(arguments, 1), o = 0, u = a.length; u > o; o++)for (i in a[o])s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
    return t
  }, e.widget.bridge = function (t, i) {
    var s = i.prototype.widgetFullName || t;
    e.fn[t] = function (a) {
      var o = "string" == typeof a, u = n.call(arguments, 1), r = this;
      return a = !o && u.length ? e.widget.extend.apply(null, [a].concat(u)) : a, o ? this.each(function () {
        var i, n = e.data(this, s);
        return "instance" === a ? (r = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, u), i !== n && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
      }) : this.each(function () {
        var t = e.data(this, s);
        t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
      }), r
    }
  }, e.Widget = function () {
  }, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {disabled: !1, create: null},
    _createWidget: function (t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (e) {
          e.target === i && this.destroy()
        }
      }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function () {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function () {
      return this.element
    },
    option: function (t, i) {
      var s, n, a, o = t;
      if (0 === arguments.length)return e.widget.extend({}, this.options);
      if ("string" == typeof t)if (o = {}, s = t.split("."), t = s.shift(), s.length) {
        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]];
        if (t = s.pop(), 1 === arguments.length)return void 0 === n[t] ? null : n[t];
        n[t] = i
      } else {
        if (1 === arguments.length)return void 0 === this.options[t] ? null : this.options[t];
        o[t] = i
      }
      return this._setOptions(o), this
    },
    _setOptions: function (e) {
      var t;
      for (t in e)this._setOption(t, e[t]);
      return this
    },
    _setOption: function (e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function () {
      return this._setOptions({disabled: !1})
    },
    disable: function () {
      return this._setOptions({disabled: !0})
    },
    _on: function (t, i, s) {
      var n, a = this;
      "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
        function u() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
        }

        "string" != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
        var r = s.match(/^([\w:-]*)\s*(.*)$/), h = r[1] + a.eventNamespace, l = r[2];
        l ? n.delegate(l, h, u) : i.bind(h, u)
      })
    },
    _off: function (e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    },
    _delay: function (e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments)
      }

      var s = this;
      return setTimeout(i, t || 0)
    },
    _hoverable: function (t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function (t) {
          e(t.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function (t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function (t) {
          e(t.currentTarget).addClass("ui-state-focus")
        }, focusout: function (t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function (t, i, s) {
      var n, a, o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (n in a)n in i || (i[n] = a[n]);
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }
  }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
    e.Widget.prototype["_" + t] = function (s, n, a) {
      "string" == typeof n && (n = {effect: n});
      var o, u = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {duration: n}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[u] ? s[t](n) : u !== t && s[u] ? s[u](n.duration, n.easing, a) : s.queue(function (i) {
        e(this)[t](), a && a.call(s[0]), i()
      })
    }
  }), e.widget;
  var a = !1;
  e(document).mouseup(function () {
    a = !1
  }), e.widget("ui.mouse", {
    version: "1.11.1",
    options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
    _mouseInit: function () {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (t) {
      if (!a) {
        this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var i = this, s = 1 === t.which, n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return i._mouseMove(e)
        }, this._mouseUpDelegate = function (e) {
          return i._mouseUp(e)
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
      }
    },
    _mouseMove: function (t) {
      return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
    },
    _mouseUp: function (t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
    },
    _mouseDistanceMet: function (e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {
    },
    _mouseDrag: function () {
    },
    _mouseStop: function () {
    },
    _mouseCapture: function () {
      return !0
    }
  }), e.widget("ui.slider", e.ui.mouse, {
    version: "1.11.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function () {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
    },
    _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function () {
      var t, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", o = [];
      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++)o.push(a);
      this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
        e(this).data("ui-slider-handle-index", t)
      })
    },
    _createRange: function () {
      var t = this.options, i = "";
      t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
        left: "",
        bottom: ""
      }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function () {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function () {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    },
    _mouseCapture: function (t) {
      var i, s, n, a, o, u, r, h, l = this, d = this.options;
      return d.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: t.pageX,
        y: t.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
        var i = Math.abs(s - l.values(t));
        (n > i || n === i && (t === l._lastChangedValue || l.values(t) === d.min)) && (n = i, a = e(this), o = t)
      }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), r = a.offset(), h = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - r.left - a.width() / 2,
        top: t.pageY - r.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
    },
    _mouseStart: function () {
      return !0
    },
    _mouseDrag: function (e) {
      var t = {x: e.pageX, y: e.pageY}, i = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, i), !1
    },
    _mouseStop: function (e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function () {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function (e) {
      var t, i, s, n, a;
      return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
    },
    _start: function (e, t) {
      var i = {handle: this.handles[t], value: this.value()};
      return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
    },
    _slide: function (e, t, i) {
      var s, n, a;
      this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i,
        values: n
      }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i
      }), a !== !1 && this.value(i))
    },
    _stop: function (e, t) {
      var i = {handle: this.handles[t], value: this.value()};
      this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
    },
    _change: function (e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = {handle: this.handles[t], value: this.value()};
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
      }
    },
    value: function (e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
    },
    values: function (t, i) {
      var s, n, a;
      if (arguments.length > 1)return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
      if (!arguments.length)return this._values();
      if (!e.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(t) : this.value();
      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      this._refreshValue()
    },
    _setOption: function (t, i) {
      var s, n = 0;
      switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
        case"orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case"value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case"values":
          for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s);
          this._animateOff = !1;
          break;
        case"min":
        case"max":
          this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
          break;
        case"range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _value: function () {
      var e = this.options.value;
      return e = this._trimAlignValue(e)
    },
    _values: function (e) {
      var t, i, s;
      if (arguments.length)return t = this.options.values[e], t = this._trimAlignValue(t);
      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]);
        return i
      }
      return []
    },
    _trimAlignValue: function (e) {
      if (this._valueMin() >= e)return this._valueMin();
      if (e >= this._valueMax())return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
    },
    _valueMin: function () {
      return this.options.min
    },
    _valueMax: function () {
      return this.options.max
    },
    _refreshValue: function () {
      var t, i, s, n, a, o = this.options.range, u = this.options, r = this, h = this._animateOff ? !1 : u.animate, l = {};
      this.options.values && this.options.values.length ? this.handles.each(function (s) {
        i = 100 * ((r.values(s) - r._valueMin()) / (r._valueMax() - r._valueMin())), l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[h ? "animate" : "css"](l, u.animate), r.options.range === !0 && ("horizontal" === r.orientation ? (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, u.animate), 1 === s && r.range[h ? "animate" : "css"]({width: i - t + "%"}, {
          queue: !1,
          duration: u.animate
        })) : (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, u.animate), 1 === s && r.range[h ? "animate" : "css"]({height: i - t + "%"}, {
          queue: !1,
          duration: u.animate
        }))), t = i
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](l, u.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, u.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({width: 100 - i + "%"}, {
        queue: !1,
        duration: u.animate
      }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, u.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({height: 100 - i + "%"}, {
        queue: !1,
        duration: u.animate
      }))
    },
    _handleEvents: {
      keydown: function (t) {
        var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1))return
        }
        switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
          case e.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case e.ui.keyCode.END:
            n = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (s === this._valueMax())return;
            n = this._trimAlignValue(s + a);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (s === this._valueMin())return;
            n = this._trimAlignValue(s - a)
        }
        this._slide(t, o, n)
      }, keyup: function (t) {
        var i = e(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
      }
    }
  })
});
jQuery(function (r) {
  if ("undefined" == typeof woocommerce_price_slider_params)return !1;
  r("input#min_price, input#max_price").hide(), r(".price_slider, .price_label").show();
  var e = r(".price_slider_amount #min_price").data("min"), c = r(".price_slider_amount #max_price").data("max");
  current_min_price = parseInt(e, 10), current_max_price = parseInt(c, 10), woocommerce_price_slider_params.min_price && (current_min_price = parseInt(woocommerce_price_slider_params.min_price, 10)), woocommerce_price_slider_params.max_price && (current_max_price = parseInt(woocommerce_price_slider_params.max_price, 10)), r("body").bind("price_slider_create price_slider_slide", function (e, c, _) {
    "left" === woocommerce_price_slider_params.currency_pos ? (r(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + c), r(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + _)) : "left_space" === woocommerce_price_slider_params.currency_pos ? (r(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + " " + c), r(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + " " + _)) : "right" === woocommerce_price_slider_params.currency_pos ? (r(".price_slider_amount span.from").html(c + woocommerce_price_slider_params.currency_symbol), r(".price_slider_amount span.to").html(_ + woocommerce_price_slider_params.currency_symbol)) : "right_space" === woocommerce_price_slider_params.currency_pos && (r(".price_slider_amount span.from").html(c + " " + woocommerce_price_slider_params.currency_symbol), r(".price_slider_amount span.to").html(_ + " " + woocommerce_price_slider_params.currency_symbol)), r("body").trigger("price_slider_updated", c, _)
  }), r(".price_slider").slider({
    range: !0,
    animate: !0,
    min: e,
    max: c,
    values: [current_min_price, current_max_price],
    create: function () {
      r(".price_slider_amount #min_price").val(current_min_price), r(".price_slider_amount #max_price").val(current_max_price), r("body").trigger("price_slider_create", [current_min_price, current_max_price])
    },
    slide: function (e, c) {
      r("input#min_price").val(c.values[0]), r("input#max_price").val(c.values[1]), r("body").trigger("price_slider_slide", [c.values[0], c.values[1]])
    },
    change: function (e, c) {
      r("body").trigger("price_slider_change", [c.values[0], c.values[1]])
    }
  })
});
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
  function n(e) {
    return u.raw ? e : encodeURIComponent(e)
  }

  function o(e) {
    return u.raw ? e : decodeURIComponent(e)
  }

  function i(e) {
    return n(u.json ? JSON.stringify(e) : String(e))
  }

  function r(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
    } catch (n) {
    }
  }

  function t(n, o) {
    var i = u.raw ? n : r(n);
    return e.isFunction(o) ? o(i) : i
  }

  var c = /\+/g, u = e.cookie = function (r, c, a) {
    if (arguments.length > 1 && !e.isFunction(c)) {
      if (a = e.extend({}, u.defaults, a), "number" == typeof a.expires) {
        var f = a.expires, s = a.expires = new Date;
        s.setTime(+s + 864e5 * f)
      }
      return document.cookie = [n(r), "=", i(c), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
    }
    for (var d = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], m = 0, x = p.length; x > m; m++) {
      var l = p[m].split("="), g = o(l.shift()), k = l.join("=");
      if (r && r === g) {
        d = t(k, c);
        break
      }
      r || void 0 === (k = t(k)) || (d[g] = k)
    }
    return d
  };
  u.defaults = {}, e.removeCookie = function (n, o) {
    return void 0 === e.cookie(n) ? !1 : (e.cookie(n, "", e.extend({}, o, {expires: -1})), !e.cookie(n))
  }
});
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
  e.fn.tweet = function (t) {
    function r(e, t) {
      if ("string" == typeof e) {
        var r = e;
        for (var a in t) {
          var n = t[a];
          r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n)
        }
        return r
      }
      return e(t)
    }

    function a(t, r) {
      return function () {
        var a = [];
        return this.each(function () {
          a.push(this.replace(t, r))
        }), e(a)
      }
    }

    function n(e) {
      return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
    }

    function i(e, t) {
      return e.replace(p, function (e) {
        for (var r = /^[a-z]+:/i.test(e) ? e : "http://" + e, a = e, i = 0; i < t.length; ++i) {
          var s = t[i];
          if (s.url == r && s.expanded_url) {
            r = s.expanded_url, a = s.display_url;
            break
          }
        }
        return '<a href="' + n(r) + '">' + n(a) + "</a>"
      })
    }

    function s(e) {
      return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
    }

    function u(e) {
      var t = arguments.length > 1 ? arguments[1] : new Date, r = parseInt((t.getTime() - e) / 1e3, 10), a = "";
      return a = 1 > r ? "just now" : 60 > r ? r + " seconds ago" : 120 > r ? "about a minute ago" : 2700 > r ? "about " + parseInt(r / 60, 10).toString() + " minutes ago" : 7200 > r ? "about an hour ago" : 86400 > r ? "about " + parseInt(r / 3600, 10).toString() + " hours ago" : 172800 > r ? "about a day ago" : "about " + parseInt(r / 86400, 10).toString() + " days ago"
    }

    function o(e) {
      return e.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? w.auto_join_text_reply : e.match(p) ? w.auto_join_text_url : e.match(/^((\w+ed)|just) .*/im) ? w.auto_join_text_ed : e.match(/^(\w*ing) .*/i) ? w.auto_join_text_ing : w.auto_join_text_default
    }

    function _() {
      var t = (w.modpath, null === w.fetch ? w.count : w.fetch), r = {include_entities: 1};
      if (w.list)return {
        host: w.twitter_api_url,
        url: "/1.1/lists/statuses.json",
        parameters: e.extend({}, r, {
          list_id: w.list_id,
          slug: w.list,
          owner_screen_name: w.username,
          page: w.page,
          count: t,
          include_rts: w.retweets ? 1 : 0
        })
      };
      if (w.favorites)return {
        host: w.twitter_api_url,
        url: "/1.1/favorites/list.json",
        parameters: e.extend({}, r, {list_id: w.list_id, screen_name: w.username, page: w.page, count: t})
      };
      if (null === w.query && 1 === w.username.length)return {
        host: w.twitter_api_url,
        url: "/1.1/statuses/user_timeline.json",
        parameters: e.extend({}, r, {screen_name: w.username, page: w.page, count: t, include_rts: w.retweets ? 1 : 0})
      };
      var a = w.query || "from:" + w.username.join(" OR from:");
      return {host: w.twitter_search_url, url: "/1.1/search/tweets.json", parameters: e.extend({}, r, {q: a, rpp: t})}
    }

    function l(e, t) {
      return t ? "user" in e ? e.user.profile_image_url_https : l(e, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : e.profile_image_url || e.user.profile_image_url
    }

    function c(t) {
      var a = {};
      return a.item = t, a.source = t.source, a.name = t.from_user_name || t.user.name, a.screen_name = t.from_user || t.user.screen_name, a.avatar_size = w.avatar_size, a.avatar_url = l(t, "https:" === document.location.protocol), a.retweet = "undefined" != typeof t.retweeted_status, a.tweet_time = s(t.created_at), a.join_text = "auto" == w.join_text ? o(t.text) : w.join_text, a.tweet_id = t.id_str, a.twitter_base = "http://" + w.twitter_url + "/", a.user_url = a.twitter_base + a.screen_name, a.tweet_url = a.user_url + "/status/" + a.tweet_id, a.reply_url = a.twitter_base + "intent/tweet?in_reply_to=" + a.tweet_id, a.retweet_url = a.twitter_base + "intent/retweet?tweet_id=" + a.tweet_id, a.favorite_url = a.twitter_base + "intent/favorite?tweet_id=" + a.tweet_id, a.retweeted_screen_name = a.retweet && t.retweeted_status.user.screen_name, a.tweet_relative_time = u(a.tweet_time), a.entities = t.entities ? (t.entities.urls || []).concat(t.entities.media || []) : [], a.tweet_raw_text = a.retweet ? "RT @" + a.retweeted_screen_name + " " + t.retweeted_status.text : t.text, a.tweet_text = e([i(a.tweet_raw_text, a.entities)]).linkUser().linkHash()[0], a.tweet_text_fancy = e([a.tweet_text]).makeHeart()[0], a.user = r('<a class="tweet_user" href="{user_url}">{screen_name}</a>', a), a.join = w.join_text ? r(' <span class="tweet_join">{join_text}</span> ', a) : " ", a.avatar = a.avatar_size ? r('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', a) : "", a.time = r('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', a), a.text = r('<span class="tweet_text">{tweet_text_fancy}</span>', a), a.reply_action = r('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', a), a.retweet_action = r('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', a), a.favorite_action = r('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', a), a
    }

    var w = e.extend({
      modpath: "/twitter/",
      username: null,
      list_id: null,
      list: null,
      favorites: !1,
      query: null,
      avatar_size: null,
      count: 3,
      fetch: null,
      page: 1,
      retweets: !0,
      intro_text: null,
      outro_text: null,
      join_text: null,
      auto_join_text_default: "i said,",
      auto_join_text_ed: "i",
      auto_join_text_ing: "i am",
      auto_join_text_reply: "i replied to",
      auto_join_text_url: "i was looking at",
      loading_text: null,
      refresh_interval: null,
      twitter_url: "twitter.com",
      twitter_api_url: "api.twitter.com",
      twitter_search_url: "api.twitter.com",
      template: "{avatar}{time}{join}{text}",
      comparator: function (e, t) {
        return t.tweet_time - e.tweet_time
      },
      filter: function (e) {
        return !0
      }
    }, t), p = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
    return e.extend({tweet: {t: r}}), e.fn.extend({
      linkUser: a(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + w.twitter_url + '/$2">$2</a>'),
      linkHash: a(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + w.twitter_search_url + "/search?q=&tag=$1&lang=all" + (w.username && 1 == w.username.length && !w.list ? "&from=" + w.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
      makeHeart: a(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    }), this.each(function (t, a) {
      var n = e('<ul class="tweet_list">'), i = '<p class="tweet_intro">' + w.intro_text + "</p>", s = '<p class="tweet_outro">' + w.outro_text + "</p>", u = e('<p class="loading">' + w.loading_text + "</p>");
      w.username && "string" == typeof w.username && (w.username = [w.username]), e(a).unbind("tweet:load").bind("tweet:load", function () {
        w.loading_text && e(a).empty().append(u), e.ajax({
          dataType: "json",
          type: "post",
          async: !1,
          url: w.modpath || "/twitter/",
          data: {request: _()},
          success: function (t, u) {
            t.message && console.log(t.message);
            var o = t.response;
            e(a).empty().append(n), w.intro_text && n.before(i), n.empty(), void 0 !== o.statuses ? resp = o.statuses : void 0 !== o.results ? resp = o.results : resp = o;
            var _ = e.map(resp, c);
            _ = e.grep(_, w.filter).sort(w.comparator).slice(0, w.count), n.append(e.map(_, function (e) {
              return "<li>" + r(w.template, e) + "</li>"
            }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), w.outro_text && n.after(s), e(a).trigger("loaded").trigger(_ ? "empty" : "full"), w.refresh_interval && window.setTimeout(function () {
              e(a).trigger("tweet:load")
            }, 1e3 * w.refresh_interval)
          }
        })
      }).trigger("tweet:load")
    })
  }
});
"use strict";
jQuery(document).ready(function () {
  var t = jQuery(window).width();
  jQuery(window).resize(function () {
    t = jQuery(window).width()
  }), jQuery(".mainmenu ul li").mouseover(function () {
    if (t > 767) {
      var e = jQuery(this).find("ul").length;
      if (e > 0) {
        var i = jQuery(this).find("ul").width(), s = jQuery(this).find("ul").parent().offset().left + i;
        if (s + i > t) {
          var n = i + 0;
          $(this).find("ul").first().css({left: -n})
        } else $(this).find("ul").first().css({left: "100%"})
      }
    }
  })
}), $(function () {
  $(".isotope_container").each(function (t) {
    var e = $(this);
    e.imagesLoaded(function () {
      var t = e.hasClass("masonry-layout") ? "masonry" : "fitRows";
      e.isotope({itemSelector: ".isotope-item", percentPosition: !0, layoutMode: t}), $(window).resize(function () {
        e.isotope({itemSelector: ".isotope-item", percentPosition: !0, layoutMode: t})
      })
    });
    var i = $(this).attr("data-filters") ? $($(this).attr("data-filters")) : e.prev().find(".filters");
    i.length && i.on("click", "a", function (t) {
      t.preventDefault();
      var i = $(this).attr("data-filter");
      e.isotope({filter: i}), $(this).siblings().removeClass("selected active"), $(this).addClass("selected active")
    })
  }), $(".isotope_container").length && setTimeout(function () {
    jQuery(window).trigger("resize")
  }, 100)
}), $(function () {
  var t = $("#timetable");
  t.length && $("#timetable_filter").on("click", "a", function (e) {
    if (e.preventDefault(), e.stopPropagation(), !jQuery(this).hasClass("selected")) {
      var i = jQuery(this).attr("data-filter");
      t.find("tbody td").removeClass("current").end().find(i).closest("td").addClass("current"), jQuery(this).closest("ul").find("a").removeClass("selected"), jQuery(this).addClass("selected")
    }
  })
}), function (t) {
  t.fn.addWidthClass = function (e) {
    for (var i = t.extend({breakpoints: [200, 400, 600, 1e3, 1200]}, e), s = "", n = i.breakpoints.length - 1; n >= 0; n--)s += " width-lt-" + i.breakpoints[n] + " width-gt-" + i.breakpoints[n];
    return this.each(function () {
      for (var t = jQuery(this), e = "", n = i.breakpoints.length - 1; n >= 0; n--)e += t.width() <= i.breakpoints[n] ? " width-lt-" + i.breakpoints[n] : " width-gt-" + i.breakpoints[n];
      t.addClass(e), jQuery(window).resize(function () {
        e = "", t.removeClass(s);
        for (var n = i.breakpoints.length - 1; n >= 0; n--)e += t.width() <= i.breakpoints[n] ? " width-lt-" + i.breakpoints[n] : " width-gt-" + i.breakpoints[n];
        t.addClass(e)
      })
    })
  }
}(jQuery);