var lm6cf = {
  defaultShowCN: true, // 默认显示中文
  defaultFold: false, // 默认折叠例句
  defaultTopicClass: 1, //topic界面的默认词汇等级
  rememberConfig: true, // 记忆以上3个配置值
  showChnBtn: false, // 顶部展示切换中文的按钮
  enableEnCnSwitch: false, // 开启单个中文释义点击切换
  enableLLMtranslate: true, //对于缺少中文的地方，开启大模型翻译
  autoShowOrigin: false, //自动展开词源
  eudicRemaster: true, // 手机欧路界面优化
  onlyChn: false,
};
if (lm6cf.onlyChn) lm6cf.defaultShowCN = true;
//
const appid = "73c393c6";
const apiKey = "cf9bf7b39b967beb8a33b122e8de7ae0";
const apiSecret = "YzUxMjY3YWFkNTJkYmUwNDhhMzE0MTYz";
const gptUrl = "wss://maas-api.cn-huabei-1.xf-yun.com/v1.1/chat";

/* prettier-ignore */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (ie, e) { "use strict"; var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function (e) { return oe.flat.call(e) } : function (e) { return oe.concat.apply([], e) }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, y = function (e) { return null != e && e === e.window }, C = ie.document, u = { type: !0, src: !0, nonce: !0, noModule: !0 }; function m(e, t, n) { var r, i, o = (n = n || C).createElement("script"); if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e } var t = "3.7.1", l = /HTML$/i, ce = function (e, t) { return new ce.fn.init(e, t) }; function c(e) { var t = !!e && "length" in e && e.length, n = x(e); return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } function fe(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function () { return ae.call(this) }, get: function (e) { return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = ce.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return ce.each(this, e) }, map: function (n) { return this.pushStack(ce.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(ae.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(ce.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(ce.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { m(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (c(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, text: function (e) { var t, n = "", r = 0, i = e.nodeType; if (!i) while (t = e[r++]) n += ce.text(t); return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n }, makeArray: function (e, t) { var n = t || []; return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : se.call(t, e, n) }, isXMLDoc: function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !l.test(t || n && n.nodeName || "HTML") }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (c(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g"); ce.contains = function (e, t) { var n = t && t.parentNode; return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))) }; var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g; function p(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e } ce.escapeSelector = function (e) { return (e + "").replace(f, p) }; var ye = C, me = s; !function () { var e, b, w, o, a, T, r, C, d, i, k = me, S = ce.expando, E = 0, n = 0, s = W(), c = W(), u = W(), h = W(), l = function (e, t) { return e === t && (a = !0), 0 }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)", v = new RegExp(ge + "+", "g"), y = new RegExp("^" + ge + "*," + ge + "*"), m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x = new RegExp(ge + "|>"), j = new RegExp(g), A = new RegExp("^" + t + "$"), D = { ID: new RegExp("^#(" + t + ")"), CLASS: new RegExp("^\\.(" + t + ")"), TAG: new RegExp("^(" + t + "|[*])"), ATTR: new RegExp("^" + p), PSEUDO: new RegExp("^" + g), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/, O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, M = function () { V() }, R = J(function (e) { return !0 === e.disabled && fe(e, "fieldset") }, { dir: "parentNode", next: "legend" }); try { k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType } catch (e) { k = { apply: function (e, t) { me.apply(e, ae.call(t)) }, call: function (e) { me.apply(e, ae.call(arguments, 1)) } } } function I(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (V(e), e = e || T, C)) { if (11 !== p && (u = L.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return k.call(n, a), n } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n } else { if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n } if (!(h[t + " "] || d && d.test(t))) { if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) { (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]); c = l.join(",") } try { return k.apply(n, f.querySelectorAll(c)), n } catch (e) { h(t, !0) } finally { s === S && e.removeAttribute("id") } } } return re(t.replace(ve, "$1"), e, n, r) } function W() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function F(e) { return e[S] = !0, e } function $(e) { var t = T.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function B(t) { return function (e) { return fe(e, "input") && e.type === t } } function _(t) { return function (e) { return (fe(e, "input") || fe(e, "button")) && e.type === t } } function z(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function X(a) { return F(function (o) { return o = +o, F(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function U(e) { return e && "undefined" != typeof e.getElementsByTagName && e } function V(e) { var t, n = e ? e.ownerDocument || e : ye; return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) { return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length }), le.disconnectedMatch = $(function (e) { return i.call(e, "*") }), le.scope = $(function () { return T.querySelectorAll(":scope") }), le.cssHas = $(function () { try { return T.querySelector(":has(*,:jqfake)"), !1 } catch (e) { return !0 } }), le.getById ? (b.filter.ID = function (e) { var t = e.replace(O, P); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && C) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(O, P); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && C) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e) }, b.find.CLASS = function (e, t) { if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e) }, d = [], $(function (e) { var t; r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")") }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) { if (e === t) return a = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1) }), T } for (e in I.matches = function (e, t) { return I(e, null, null, t) }, I.matchesSelector = function (e, t) { if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try { var n = i.call(e, t); if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { h(t, !0) } return 0 < I(t, T, null, [e]).length }, I.contains = function (e, t) { return (e.ownerDocument || e) != T && V(e), ce.contains(e, t) }, I.attr = function (e, t) { (e.ownerDocument || e) != T && V(e); var n = b.attrHandle[t.toLowerCase()], r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0; return void 0 !== r ? r : e.getAttribute(t) }, I.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ce.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) he.call(e, n[r], 1) } return o = null, e }, ce.fn.uniqueSort = function () { return this.pushStack(ce.uniqueSort(ae.apply(this))) }, (b = ce.expr = { cacheLength: 50, createPseudo: F, match: D, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(O, P).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return fe(e, t) } }, CLASS: function (e) { var t = s[e + " "]; return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = I.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (d, e, t, h, g) { var v = "nth" !== d.slice(0, 3), y = "last" !== d.slice(-4), m = "of-type" === e; return 1 === h && 0 === g ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1; if (l) { if (v) { while (u) { o = e; while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1; s = u = "only" === d && !s && "nextSibling" } return !0 } if (s = [y ? l.firstChild : l.lastChild], y && f) { p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a]; while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) { i[d] = [E, a, p]; break } } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break; return (p -= g) === h || p % h == 0 && 0 <= p / h } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: F(function (e) { var r = [], i = [], s = ne(e.replace(ve, "$1")); return s[S] ? F(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: F(function (t) { return function (e) { return 0 < I(t, e).length } }), contains: F(function (t) { return t = t.replace(O, P), function (e) { return -1 < (e.textContent || ce.text(e)).indexOf(t) } }), lang: F(function (n) { return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) { var t; do { if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = ie.location && ie.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === r }, focus: function (e) { return e === function () { try { return T.activeElement } catch (e) { } }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex) }, enabled: z(!1), disabled: z(!0), checked: function (e) { return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return q.test(e.nodeName) }, input: function (e) { return N.test(e.nodeName) }, button: function (e) { return fe(e, "input") && "button" === e.type || fe(e, "button") }, text: function (e) { var t; return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: X(function () { return [0] }), last: X(function (e, t) { return [t - 1] }), eq: X(function (e, t, n) { return [n < 0 ? n + t : n] }), even: X(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: X(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: X(function (e, t, n) { var r; for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: X(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = B(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e); function G() { } function Y(e, t) { var n, r, i, o, a, s, u, l = c[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(ve, " ") }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? I.error(e) : c(e, s).slice(0) } function Q(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function J(a, e, t) { var s = e.dir, u = e.next, l = u || s, c = t && "parentNode" === l, f = n++; return e.first ? function (e, t, n) { while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n); return !1 } : function (e, t, n) { var r, i, o = [E, f]; if (n) { while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0 } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e; else { if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2]; if ((i[l] = o)[2] = a(e, t, n)) return !0 } return !1 } } function K(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Z(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function ee(d, h, g, v, y, e) { return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) { var i, o, a, s, u = [], l = [], c = t.length, f = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)I(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : Z(f, u, d, n, r); if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) { i = Z(s, l), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = s.length; while (o--) (a = s[o]) && i.push(p[o] = a); y(null, s = [], i, r) } o = s.length; while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a)) } } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s) }) } function te(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) { return e === i }, a, !0), l = J(function (e) { return -1 < se.call(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [J(K(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e)) } c.push(t) } return K(c) } function ne(e, t) { var n, v, y, m, x, r, i = [], o = [], a = u[e + " "]; if (!a) { t || (t = Y(e)), n = t.length; while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a); (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == T || (V(o), n = !C); while (s = v[a++]) if (s(o, t || T, n)) { k.call(r, o); break } i && (E = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r)); f = Z(f) } k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r) } return i && (E = h, w = p), c }, m ? F(r) : r))).selector = e } return a } function re(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && Y(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = D.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n; break } } } return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n } G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) { return 1 & e.compareDocumentPosition(T.createElement("fieldset")) }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort }(); var d = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && ce(e).is(n)) break; r.push(e) } return r }, h = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function T(e, n, r) { return v(n) ? ce.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? ce.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? ce.grep(e, function (e) { return -1 < se.call(n, e) !== r }) : ce.filter(n, e, r) } ce.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) { return 1 === e.nodeType })) }, ce.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(ce(e).filter(function () { for (t = 0; t < r; t++)if (ce.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)ce.find(e, i[t], n); return 1 < r ? ce.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(T(this, e || [], !1)) }, not: function (e) { return this.pushStack(T(this, e || [], !0)) }, is: function (e) { return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length } }); var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (ce.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || k, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this) }).prototype = ce.fn, k = ce(C); var E = /^(?:parents|prev(?:Until|All))/, j = { children: !0, contents: !0, next: !0, prev: !0 }; function A(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } ce.fn.extend({ has: function (e) { var t = ce(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (ce.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ce(e); if (!b.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ce.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return d(e, "parentNode") }, parentsUntil: function (e, t, n) { return d(e, "parentNode", n) }, next: function (e) { return A(e, "nextSibling") }, prev: function (e) { return A(e, "previousSibling") }, nextAll: function (e) { return d(e, "nextSibling") }, prevAll: function (e) { return d(e, "previousSibling") }, nextUntil: function (e, t, n) { return d(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return d(e, "previousSibling", n) }, siblings: function (e) { return h((e.parentNode || {}).firstChild, e) }, children: function (e) { return h(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes)) } }, function (r, i) { ce.fn[r] = function (e, t) { var n = ce.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n) } }); var D = /[^\x20\t\r\n\f]+/g; function N(e) { return e } function q(e) { throw e } function L(e, t, n, r) { var i; try { e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } ce.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) { n[t] = !0 }), n) : ce.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { ce.each(e, function (e, t) { v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return ce.each(arguments, function (e, t) { var n; while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < ce.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, ce.extend({ Deferred: function (e) { var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return ce.Deferred(function (r) { ce.each(o, function (e, t) { var n = v(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t)) } } return ce.Deferred(function (e) { o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q)) }).promise() }, promise: function (e) { return null != e ? ce.extend(e, a) : a } }, s = {}; return ce.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = ae.call(arguments), o = ce.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then(); while (t--) L(i[t], a(t), o.reject); return o.promise() } }); var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; ce.Deferred.exceptionHook = function (e, t) { ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, ce.readyException = function (e) { ie.setTimeout(function () { throw e }) }; var O = ce.Deferred(); function P() { C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready() } ce.fn.ready = function (e) { return O.then(e)["catch"](function (e) { ce.readyException(e) }), this }, ce.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]) } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P)); var M = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(ce(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, R = /^-ms-/, I = /-([a-z])/g; function W(e, t) { return t.toUpperCase() } function F(e) { return e.replace(R, "ms-").replace(I, W) } var $ = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function B() { this.expando = ce.expando + B.uid++ } B.uid = 1, B.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[F(t)] = n; else for (r in t) i[F(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length; while (n--) delete r[t[n]] } (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !ce.isEmptyObject(t) } }; var _ = new B, z = new B, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g; function V(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i) } catch (e) { } z.set(e, t, n) } else n = void 0; return n } ce.extend({ hasData: function (e) { return z.hasData(e) || _.hasData(e) }, data: function (e, t, n) { return z.access(e, t, n) }, removeData: function (e, t) { z.remove(e, t) }, _data: function (e, t, n) { return _.access(e, t, n) }, _removeData: function (e, t) { _.remove(e, t) } }), ce.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r])); _.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { z.set(this, n) }) : M(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0; this.each(function () { z.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { z.remove(this, e) }) } }), ce.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = ce.queue(e, t), r = n.length, i = n.shift(), o = ce._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { ce.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return _.get(e, n) || _.access(e, n, { empty: ce.Callbacks("once memory").add(function () { _.remove(e, [t + "queue", n]) }) }) } }), ce.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = ce.queue(this, t, n); ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { ce.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = ce.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function (e) { return ce.contains(e.ownerDocument, e) }, Z = { composed: !0 }; J.getRootNode && (K = function (e) { return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument }); var ee = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display") }; function te(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return ce.css(e, t, "") }, u = s(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"), c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, ce.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ne = {}; function re(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } ce.fn.extend({ show: function () { return re(this, !0) }, hide: function () { return re(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ee(this) ? ce(this).show() : ce(this).hide() }) } }); var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i; xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild; var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function Se(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n } function Ee(e, t) { for (var n = 0, r = e.length; n < r; n++)_.set(e[n], "globalEval", !t || _.get(t[n], "globalEval")) } ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]); var je = /<|&#?\w+;/; function Ae(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o); else if (je.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o); else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) { c = 0; while (o = a[c++]) Ce.test(o.type || "") && n.push(o) } return f } var De = /^([^.]*)(?:\.(.+)|)/; function Ne() { return !0 } function qe() { return !1 } function Le(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return ce().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () { ce.event.add(this, t, i, r, n) }) } function He(e, r, t) { t ? (_.set(e, r, !1), ce.event.add(e, r, { namespace: !1, handler: function (e) { var t, n = _.get(this, r); if (1 & e.isTrigger && this[r]) { if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation(); else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne) } })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne) } ce.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t); if ($(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(D) || [""]).length; while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ce.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(D) || [""]).length; while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0); ce.isEmptyObject(u) && _.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = ce.event.fix(e), l = (_.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = ce.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(ce.Event.prototype, t, { enumerable: !0, configurable: !0, get: v(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[ce.expando] ? e : new ce.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1 }, trigger: function (e) { var t = this || e; return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0 }, _default: function (e) { var t = e.target; return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, ce.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, ce.Event = function (e, t) { if (!(this instanceof ce.Event)) return new ce.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0 }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, ce.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) { function o(e) { if (C.documentMode) { var t = _.get(this, "handle"), n = ce.event.fix(e); n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n) } else ce.event.simulate(i, e.target, ce.event.fix(e)) } ce.event.special[r] = { setup: function () { var e; if (He(this, r, !0), !C.documentMode) return !1; (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1) }, trigger: function () { return He(this, r), !0 }, teardown: function () { var e; if (!C.documentMode) return !1; (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i)) }, _default: function (e) { return _.get(e.target, r) }, delegateType: i }, ce.event.special[i] = { setup: function () { var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i); n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i) - 1; n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i)) } } }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { ce.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), ce.fn.extend({ on: function (e, t, n, r) { return Le(this, e, t, n, r) }, one: function (e, t, n, r) { return Le(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () { ce.event.remove(this, e, n, t) }) } }); var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g; function Re(e, t) { return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e } function Ie(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function We(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Fe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)ce.event.add(t, i, s[i][n]); z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a)) } } function $e(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d); if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o) }); if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++)u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : m(u.textContent.replace(Me, ""), u, l)) } return n } function Be(e, t, n) { for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r)); return e } ce.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e); if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)Fe(o[r], a[r]); else Fe(e, c); return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)if ($(n)) { if (t = n[_.expando]) { if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle); n[_.expando] = void 0 } n[z.expando] && (n[z.expando] = void 0) } } }), ce.fn.extend({ detach: function (e) { return Be(this, e, !0) }, remove: function (e) { return Be(this, e) }, text: function (e) { return M(this, function (e) { return void 0 === e ? ce.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return $e(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e) }) }, prepend: function () { return $e(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Re(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return $e(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return $e(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return ce.clone(this, e, t) }) }, html: function (e) { return M(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) { e = ce.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return $e(this, arguments, function (e) { var t = this.parentNode; ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this)) }, n) } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { ce.fn[e] = function (e) { for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get()); return this.pushStack(n) } }); var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = ie), t.getComputedStyle(e) }, Ue = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ve = new RegExp(Q.join("|"), "i"); function Ge(e, t, n) { var r, i, o, a, s = ze.test(t), u = e.style; return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a } function Ye(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l); var e = ie.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = C.createElement("div"), l = C.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a } })) }(); var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {}; function Ze(e) { var t = ce.cssProps[e] || Ke[e]; return t || (e in Je ? e : Ke[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; while (n--) if ((e = Qe[n] + t) in Je) return e }(e) || e) } var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" }; function rt(e, t, n) { var r = Y.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function it(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0, l = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l } function ot(e, t, n) { var r = Xe(e), i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r), o = i, a = Ge(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (_e.test(a)) { if (!n) return a; a = "auto" } return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function at(e, t, n, r, i) { return new at.prototype.init(e, t, n, r, i) } ce.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Ge(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, aspectRatio: !0, borderImageSlice: !0, columnCount: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, scale: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeMiterlimit: !0, strokeOpacity: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = F(t), u = ze.test(t), l = e.style; if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = F(t); return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), ce.each(["height", "width"], function (e, u) { ce.cssHooks[u] = { get: function (e, t, n) { if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () { return ot(e, u, n) }) }, set: function (e, t, n) { var r, i = Xe(e), o = !le.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), s = n ? it(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s) } } }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) { ce.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + Q[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (ce.cssHooks[i + o].set = rt) }), ce.fn.extend({ css: function (e, t) { return M(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Xe(e), i = t.length; a < i; a++)o[t[a]] = ce.css(e, t[a], !1, r); return o } return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t) }, e, t, 1 < arguments.length) } }), ((ce.Tween = at).prototype = { constructor: at, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px") }, cur: function () { var e = at.propHooks[this.prop]; return e && e.get ? e.get(this) : at.propHooks._default.get(this) }, run: function (e) { var t, n = at.propHooks[this.prop]; return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = at.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ce.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {}; var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/; function dt() { ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick()) } function ht() { return ie.setTimeout(function () { st = void 0 }), st = Date.now() } function gt(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = Q[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function vt(e, t, n) { for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function yt(o, e, t) { var n, a, r = 0, i = yt.prefilters.length, s = ce.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: ce.extend({}, e), opts: ce.extend(!0, { specialEasing: {}, easing: ce.easing._default }, t), originalProperties: e, originalOptions: t, startTime: st || ht(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } ce.Animation = ce.extend(yt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return te(n.elem, e, Y.exec(t), n), n }] }, tweener: function (e, t) { v(e) ? (t = e, e = ["*"]) : e = e.match(D); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), v = _.get(e, "fxshow"); for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, ce.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], ft.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || ce.style(e, r) } if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && re([e], !0), p.done(function () { for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]) })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? yt.prefilters.unshift(e) : yt.prefilters.push(e) } }), ce.speed = function (e, t, n) { var r = e && "object" == typeof e ? ce.extend({}, e) : { complete: n || !n && t || v(e) && e, duration: e, easing: n && t || t && !v(t) && t }; return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue) }, r }, ce.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = ce.isEmptyObject(t), o = ce.speed(e, n, r), a = function () { var e = yt(this, ce.extend({}, t), o); (i || _.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = ce.timers, r = _.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || ce.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ce.timers, o = n ? n.length : 0; for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), ce.each(["toggle", "show", "hide"], function (e, r) { var i = ce.fn[r]; ce.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n) } }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { ce.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), ce.timers = [], ce.fx.tick = function () { var e, t = 0, n = ce.timers; for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || ce.fx.stop(), st = void 0 }, ce.fx.timer = function (e) { ce.timers.push(e), ce.fx.start() }, ce.fx.interval = 13, ce.fx.start = function () { ut || (ut = !0, dt()) }, ce.fx.stop = function () { ut = null }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function (r, e) { return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = ie.setTimeout(e, r); t.stop = function () { ie.clearTimeout(n) } }) }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value; var mt, xt = ce.expr.attrHandle; ce.fn.extend({ attr: function (e, t) { return M(this, ce.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { ce.removeAttr(this, e) }) } }), ce.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!le.radioValue && "radio" === t && fe(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(D); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), mt = { set: function (e, t, n) { return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = xt[t] || ce.find.attr; xt[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r } }); var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i; function Tt(e) { return (e.match(D) || []).join(" ") } function Ct(e) { return e.getAttribute && e.getAttribute("class") || "" } function kt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [] } ce.fn.extend({ prop: function (e, t) { return M(this, ce.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[ce.propFix[e] || e] }) } }), ce.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = ce.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { ce.propFix[this.toLowerCase()] = this }), ce.fn.extend({ addClass: function (t) { var e, n, r, i, o, a; return v(t) ? this.each(function (e) { ce(this).addClass(t.call(this, e, Ct(this))) }) : (e = kt(t)).length ? this.each(function () { if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") { for (o = 0; o < e.length; o++)i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " "); a = Tt(n), r !== a && this.setAttribute("class", a) } }) : this }, removeClass: function (t) { var e, n, r, i, o, a; return v(t) ? this.each(function (e) { ce(this).removeClass(t.call(this, e, Ct(this))) }) : arguments.length ? (e = kt(t)).length ? this.each(function () { if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") { for (o = 0; o < e.length; o++) { i = e[o]; while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ") } a = Tt(n), r !== a && this.setAttribute("class", a) } }) : this : this.attr("class", "") }, toggleClass: function (t, n) { var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t); return v(t) ? this.each(function (e) { ce(this).toggleClass(t.call(this, e, Ct(this), n), n) }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () { if (s) for (o = ce(this), i = 0; i < e.length; i++)r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r); else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || "")) })) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0; return !1 } }); var St = /\r/g; ce.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = v(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) { return null == e ? "" : e + "" })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0 } }), ce.extend({ valHooks: { option: { get: function (e) { var t = ce.find.attr(e, "value"); return null != t ? t : Tt(ce.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) { if (t = ce(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = ce.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), ce.each(["radio", "checkbox"], function () { ce.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t) } }, le.checkOn || (ce.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Et = ie.location, jt = { guid: Date.now() }, At = /\?/; ce.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new ie.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function (e) { e.stopPropagation() }; ce.extend(ce.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || C], d = ue.call(e, "type") ? e.type : e, h = ue.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !y(n)) { for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = ce.extend(new ce.Event, n, { type: e, isSimulated: !0 }); ce.event.trigger(r, null, t) } }), ce.fn.extend({ trigger: function (e, t) { return this.each(function () { ce.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return ce.event.trigger(e, t, n, !0) } }); var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i; function Pt(n, e, r, i) { var t; if (Array.isArray(e)) ce.each(e, function (e, t) { r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== x(e)) i(n, e); else for (t in e) Pt(n + "[" + t + "]", e[t], r, i) } ce.param = function (e, t) { var n, r = [], i = function (e, t) { var n = v(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () { i(this.name, this.value) }); else for (n in e) Pt(n, e[n], t, i); return r.join("&") }, ce.fn.extend({ serialize: function () { return ce.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = ce.prop(this, "elements"); return e ? ce.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e)) }).map(function (e, t) { var n = ce(this).val(); return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) { return { name: t.name, value: e.replace(Lt, "\r\n") } }) : { name: t.name, value: n.replace(Lt, "\r\n") } }).get() } }); var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a"); function Ut(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(D) || []; if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Vt(t, i, o, a) { var s = {}, u = t === _t; function l(e) { var r; return s[e] = !0, ce.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Gt(e, t) { var n, r, i = ce.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && ce.extend(!0, e, r), e } Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e) }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, x = ce.Deferred(), b = ce.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) { r = C.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T; for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = ie.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return ce.get(e, t, n, "json") }, getScript: function (e, t) { return ce.get(e, void 0, t, "script") } }), ce.each(["get", "post"], function (e, i) { ce[i] = function (e, t, n, r) { return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({ url: e, type: i, dataType: r, data: t, success: n }, ce.isPlainObject(e) && e)) } }), ce.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), ce._evalUrl = function (e, t, n) { return ce.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { ce.globalEval(e, t, n) } }) }, ce.fn.extend({ wrapAll: function (e) { var t; return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return v(n) ? this.each(function (e) { ce(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = ce(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = v(t); return this.each(function (e) { ce(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { ce(this).replaceWith(this.childNodes) }), this } }), ce.expr.pseudos.hidden = function (e) { return !ce.expr.pseudos.visible(e) }, ce.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, ce.ajaxSettings.xhr = function () { try { return new ie.XMLHttpRequest } catch (e) { } }; var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr(); le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) { var o, a; if (le.cors || Qt && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && ie.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), ce.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return ce.globalEval(e), e } } }), ce.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), ce.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = ce("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), C.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/; ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Kt.pop() || ce.expando + "_" + jt.guid++; return this[e] = !0, e } }), ce.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || ce.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () { o = arguments }, n.always(function () { void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0 }), "script" }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes))); var r, i, o }, ce.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, ce.expr.pseudos.animated = function (t) { return ce.grep(ce.timers, function (e) { return t === e.elem }).length }, ce.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = ce.css(e, "position"), c = ce(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, ce.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { ce.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - ce.css(r, "marginTop", !0), left: t.left - i.left - ce.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === ce.css(e, "position")) e = e.offsetParent; return e || J }) } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; ce.fn[t] = function (e) { return M(this, function (e, t, n) { var r; if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), ce.each(["top", "left"], function (e, n) { ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) { if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t }) }), ce.each({ Height: "height", Width: "width" }, function (a, s) { ce.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { ce.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return M(this, function (e, t, n) { var r; return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { ce.fn[t] = function (e) { return this.on(t, e) } }), ce.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.on("mouseenter", e).on("mouseleave", t || e) } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { ce.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g; ce.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(ae.call(arguments))) }).guid = e.guid = e.guid || ce.guid++, i }, ce.holdReady = function (e) { e ? ce.readyWait++ : ce.ready(!0) }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) { var t = ce.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, ce.trim = function (e) { return null == e ? "" : (e + "").replace(en, "$1") }, "function" == typeof define && define.amd && define("jquery", [], function () { return ce }); var tn = ie.jQuery, nn = ie.$; return ce.noConflict = function (e) { return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce });

/* prettier-ignore */
!function(t,e){"object"==typeof exports?module.exports=exports=e():"function"==typeof define&&define.amd?define([],e):t.CryptoJS=e()}(this,function(){var h,t,e,r,i,n,f,o,s,c,a,l,d,m,x,b,H,z,A,u,p,_,v,y,g,B,w,k,S,C,D,E,R,M,F,P,W,O,I,U,K,X,L,j,N,T,q,Z,V,G,J,$,Q,Y,tt,et,rt,it,nt,ot,st,ct,at,ht,lt,ft,dt,ut,pt,_t,vt,yt,gt,Bt,wt,kt,St,bt=bt||function(l){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&"undefined"!=typeof global&&global.crypto&&(t=global.crypto),!t&&"function"==typeof require)try{t=require("crypto")}catch(t){}function i(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")}var r=Object.create||function(t){var e;return n.prototype=t,e=new n,n.prototype=null,e};function n(){}var e={},o=e.lib={},s=o.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),(e.init.prototype=e).$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},f=o.WordArray=s.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=s<<24-(i+o)%4*8}else for(o=0;o<n;o+=4)e[i+o>>>2]=r[o>>>2];return this.sigBytes+=n,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=l.ceil(e/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(i());return new f.init(e,t)}}),c=e.enc={},a=c.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new f.init(r,e/2)}},h=c.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new f.init(r,e)}},d=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},u=o.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var e,r=this._data,i=r.words,n=r.sigBytes,o=this.blockSize,s=n/(4*o),c=(s=t?l.ceil(s):l.max((0|s)-this._minBufferSize,0))*o,a=l.min(4*c,n);if(c){for(var h=0;h<c;h+=o)this._doProcessBlock(i,h);e=i.splice(0,c),r.sigBytes-=a}return new f.init(e,a)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(o.Hasher=u.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(r){return function(t,e){return new r.init(e).finalize(t)}},_createHmacHelper:function(r){return function(t,e){return new p.HMAC.init(r,e).finalize(t)}}}),e.algo={});return e}(Math);function mt(t,e,r){return t^e^r}function xt(t,e,r){return t&e|~t&r}function Ht(t,e,r){return(t|~e)^r}function zt(t,e,r){return t&r|e&~r}function At(t,e,r){return t^(e|~r)}function Ct(t,e){return t<<e|t>>>32-e}function Dt(t,e,r,i){var n,o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,i.encryptBlock(n,0);for(var s=0;s<r;s++)t[e+s]^=n[s]}function Et(t){if(255==(t>>24&255)){var e=t>>16&255,r=t>>8&255,i=255&t;255===e?(e=0,255===r?(r=0,255===i?i=0:++i):++r):++e,t=0,t+=e<<16,t+=r<<8,t+=i}else t+=1<<24;return t}function Rt(){for(var t=this._X,e=this._C,r=0;r<8;r++)ft[r]=e[r];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<ft[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<ft[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<ft[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<ft[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<ft[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<ft[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<ft[6]>>>0?1:0)|0,this._b=e[7]>>>0<ft[7]>>>0?1:0;for(r=0;r<8;r++){var i=t[r]+e[r],n=65535&i,o=i>>>16,s=((n*n>>>17)+n*o>>>15)+o*o,c=((4294901760&i)*i|0)+((65535&i)*i|0);dt[r]=s^c}t[0]=dt[0]+(dt[7]<<16|dt[7]>>>16)+(dt[6]<<16|dt[6]>>>16)|0,t[1]=dt[1]+(dt[0]<<8|dt[0]>>>24)+dt[7]|0,t[2]=dt[2]+(dt[1]<<16|dt[1]>>>16)+(dt[0]<<16|dt[0]>>>16)|0,t[3]=dt[3]+(dt[2]<<8|dt[2]>>>24)+dt[1]|0,t[4]=dt[4]+(dt[3]<<16|dt[3]>>>16)+(dt[2]<<16|dt[2]>>>16)|0,t[5]=dt[5]+(dt[4]<<8|dt[4]>>>24)+dt[3]|0,t[6]=dt[6]+(dt[5]<<16|dt[5]>>>16)+(dt[4]<<16|dt[4]>>>16)|0,t[7]=dt[7]+(dt[6]<<8|dt[6]>>>24)+dt[5]|0}function Mt(){for(var t=this._X,e=this._C,r=0;r<8;r++)wt[r]=e[r];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<wt[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<wt[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<wt[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<wt[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<wt[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<wt[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<wt[6]>>>0?1:0)|0,this._b=e[7]>>>0<wt[7]>>>0?1:0;for(r=0;r<8;r++){var i=t[r]+e[r],n=65535&i,o=i>>>16,s=((n*n>>>17)+n*o>>>15)+o*o,c=((4294901760&i)*i|0)+((65535&i)*i|0);kt[r]=s^c}t[0]=kt[0]+(kt[7]<<16|kt[7]>>>16)+(kt[6]<<16|kt[6]>>>16)|0,t[1]=kt[1]+(kt[0]<<8|kt[0]>>>24)+kt[7]|0,t[2]=kt[2]+(kt[1]<<16|kt[1]>>>16)+(kt[0]<<16|kt[0]>>>16)|0,t[3]=kt[3]+(kt[2]<<8|kt[2]>>>24)+kt[1]|0,t[4]=kt[4]+(kt[3]<<16|kt[3]>>>16)+(kt[2]<<16|kt[2]>>>16)|0,t[5]=kt[5]+(kt[4]<<8|kt[4]>>>24)+kt[3]|0,t[6]=kt[6]+(kt[5]<<16|kt[5]>>>16)+(kt[4]<<16|kt[4]>>>16)|0,t[7]=kt[7]+(kt[6]<<8|kt[6]>>>24)+kt[5]|0}return h=bt.lib.WordArray,bt.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;c<4&&o+.75*c<r;c++)n.push(i.charAt(s>>>6*(3-c)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(t){var e=t.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var n=0;n<r.length;n++)i[r.charCodeAt(n)]=n}var o=r.charAt(64);if(o){var s=t.indexOf(o);-1!==s&&(e=s)}return function(t,e,r){for(var i=[],n=0,o=0;o<e;o++)if(o%4){var s=r[t.charCodeAt(o-1)]<<o%4*2,c=r[t.charCodeAt(o)]>>>6-o%4*2,a=s|c;i[n>>>2]|=a<<24-n%4*8,n++}return h.create(i,n)}(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},function(l){var t=bt,e=t.lib,r=e.WordArray,i=e.Hasher,n=t.algo,H=[];!function(){for(var t=0;t<64;t++)H[t]=4294967296*l.abs(l.sin(t+1))|0}();var o=n.MD5=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,s=t[e+0],c=t[e+1],a=t[e+2],h=t[e+3],l=t[e+4],f=t[e+5],d=t[e+6],u=t[e+7],p=t[e+8],_=t[e+9],v=t[e+10],y=t[e+11],g=t[e+12],B=t[e+13],w=t[e+14],k=t[e+15],S=o[0],m=o[1],x=o[2],b=o[3];S=z(S,m,x,b,s,7,H[0]),b=z(b,S,m,x,c,12,H[1]),x=z(x,b,S,m,a,17,H[2]),m=z(m,x,b,S,h,22,H[3]),S=z(S,m,x,b,l,7,H[4]),b=z(b,S,m,x,f,12,H[5]),x=z(x,b,S,m,d,17,H[6]),m=z(m,x,b,S,u,22,H[7]),S=z(S,m,x,b,p,7,H[8]),b=z(b,S,m,x,_,12,H[9]),x=z(x,b,S,m,v,17,H[10]),m=z(m,x,b,S,y,22,H[11]),S=z(S,m,x,b,g,7,H[12]),b=z(b,S,m,x,B,12,H[13]),x=z(x,b,S,m,w,17,H[14]),S=A(S,m=z(m,x,b,S,k,22,H[15]),x,b,c,5,H[16]),b=A(b,S,m,x,d,9,H[17]),x=A(x,b,S,m,y,14,H[18]),m=A(m,x,b,S,s,20,H[19]),S=A(S,m,x,b,f,5,H[20]),b=A(b,S,m,x,v,9,H[21]),x=A(x,b,S,m,k,14,H[22]),m=A(m,x,b,S,l,20,H[23]),S=A(S,m,x,b,_,5,H[24]),b=A(b,S,m,x,w,9,H[25]),x=A(x,b,S,m,h,14,H[26]),m=A(m,x,b,S,p,20,H[27]),S=A(S,m,x,b,B,5,H[28]),b=A(b,S,m,x,a,9,H[29]),x=A(x,b,S,m,u,14,H[30]),S=C(S,m=A(m,x,b,S,g,20,H[31]),x,b,f,4,H[32]),b=C(b,S,m,x,p,11,H[33]),x=C(x,b,S,m,y,16,H[34]),m=C(m,x,b,S,w,23,H[35]),S=C(S,m,x,b,c,4,H[36]),b=C(b,S,m,x,l,11,H[37]),x=C(x,b,S,m,u,16,H[38]),m=C(m,x,b,S,v,23,H[39]),S=C(S,m,x,b,B,4,H[40]),b=C(b,S,m,x,s,11,H[41]),x=C(x,b,S,m,h,16,H[42]),m=C(m,x,b,S,d,23,H[43]),S=C(S,m,x,b,_,4,H[44]),b=C(b,S,m,x,g,11,H[45]),x=C(x,b,S,m,k,16,H[46]),S=D(S,m=C(m,x,b,S,a,23,H[47]),x,b,s,6,H[48]),b=D(b,S,m,x,u,10,H[49]),x=D(x,b,S,m,w,15,H[50]),m=D(m,x,b,S,f,21,H[51]),S=D(S,m,x,b,g,6,H[52]),b=D(b,S,m,x,h,10,H[53]),x=D(x,b,S,m,v,15,H[54]),m=D(m,x,b,S,c,21,H[55]),S=D(S,m,x,b,p,6,H[56]),b=D(b,S,m,x,k,10,H[57]),x=D(x,b,S,m,d,15,H[58]),m=D(m,x,b,S,B,21,H[59]),S=D(S,m,x,b,l,6,H[60]),b=D(b,S,m,x,y,10,H[61]),x=D(x,b,S,m,a,15,H[62]),m=D(m,x,b,S,_,21,H[63]),o[0]=o[0]+S|0,o[1]=o[1]+m|0,o[2]=o[2]+x|0,o[3]=o[3]+b|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32;var n=l.floor(r/4294967296),o=r;e[15+(64+i>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e[14+(64+i>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t.sigBytes=4*(e.length+1),this._process();for(var s=this._hash,c=s.words,a=0;a<4;a++){var h=c[a];c[a]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}return s},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function z(t,e,r,i,n,o,s){var c=t+(e&r|~e&i)+n+s;return(c<<o|c>>>32-o)+e}function A(t,e,r,i,n,o,s){var c=t+(e&i|r&~i)+n+s;return(c<<o|c>>>32-o)+e}function C(t,e,r,i,n,o,s){var c=t+(e^r^i)+n+s;return(c<<o|c>>>32-o)+e}function D(t,e,r,i,n,o,s){var c=t+(r^(e|~i))+n+s;return(c<<o|c>>>32-o)+e}t.MD5=i._createHelper(o),t.HmacMD5=i._createHmacHelper(o)}(Math),e=(t=bt).lib,r=e.WordArray,i=e.Hasher,n=t.algo,f=[],o=n.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=0;a<80;a++){if(a<16)f[a]=0|t[e+a];else{var h=f[a-3]^f[a-8]^f[a-14]^f[a-16];f[a]=h<<1|h>>>31}var l=(i<<5|i>>>27)+c+f[a];l+=a<20?1518500249+(n&o|~n&s):a<40?1859775393+(n^o^s):a<60?(n&o|n&s|o&s)-1894007588:(n^o^s)-899497514,c=s,s=o,o=n<<30|n>>>2,n=i,i=l}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=Math.floor(r/4294967296),e[15+(64+i>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}}),t.SHA1=i._createHelper(o),t.HmacSHA1=i._createHmacHelper(o),function(n){var t=bt,e=t.lib,r=e.WordArray,i=e.Hasher,o=t.algo,s=[],B=[];!function(){function t(t){for(var e=n.sqrt(t),r=2;r<=e;r++)if(!(t%r))return;return 1}function e(t){return 4294967296*(t-(0|t))|0}for(var r=2,i=0;i<64;)t(r)&&(i<8&&(s[i]=e(n.pow(r,.5))),B[i]=e(n.pow(r,1/3)),i++),r++}();var w=[],c=o.SHA256=i.extend({_doReset:function(){this._hash=new r.init(s.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=r[5],h=r[6],l=r[7],f=0;f<64;f++){if(f<16)w[f]=0|t[e+f];else{var d=w[f-15],u=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,p=w[f-2],_=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;w[f]=u+w[f-7]+_+w[f-16]}var v=i&n^i&o^n&o,y=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),g=l+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&a^~c&h)+B[f]+w[f];l=h,h=a,a=c,c=s+g|0,s=o,o=n,n=i,i=g+(y+v)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0,r[5]=r[5]+a|0,r[6]=r[6]+h|0,r[7]=r[7]+l|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=n.floor(r/4294967296),e[15+(64+i>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA256=i._createHelper(c),t.HmacSHA256=i._createHmacHelper(c)}(Math),function(){var n=bt.lib.WordArray,t=bt.enc;t.Utf16=t.Utf16BE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=e[n>>>2]>>>16-n%4*8&65535;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>1]|=t.charCodeAt(i)<<16-i%2*16;return n.create(r,2*e)}};function s(t){return t<<8&4278255360|t>>>8&16711935}t.Utf16LE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=s(e[n>>>2]>>>16-n%4*8&65535);i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>1]|=s(t.charCodeAt(i)<<16-i%2*16);return n.create(r,2*e)}}}(),function(){if("function"==typeof ArrayBuffer){var t=bt.lib.WordArray,n=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var e=t.byteLength,r=[],i=0;i<e;i++)r[i>>>2]|=t[i]<<24-i%4*8;n.call(this,r,e)}else n.apply(this,arguments)}).prototype=t}}(),Math,c=(s=bt).lib,a=c.WordArray,l=c.Hasher,d=s.algo,m=a.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),x=a.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),b=a.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),H=a.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),z=a.create([0,1518500249,1859775393,2400959708,2840853838]),A=a.create([1352829926,1548603684,1836072691,2053994217,0]),u=d.RIPEMD160=l.extend({_doReset:function(){this._hash=a.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o,s,c,a,h,l,f,d,u,p,_,v=this._hash.words,y=z.words,g=A.words,B=m.words,w=x.words,k=b.words,S=H.words;l=o=v[0],f=s=v[1],d=c=v[2],u=a=v[3],p=h=v[4];for(r=0;r<80;r+=1)_=o+t[e+B[r]]|0,_+=r<16?mt(s,c,a)+y[0]:r<32?xt(s,c,a)+y[1]:r<48?Ht(s,c,a)+y[2]:r<64?zt(s,c,a)+y[3]:At(s,c,a)+y[4],_=(_=Ct(_|=0,k[r]))+h|0,o=h,h=a,a=Ct(c,10),c=s,s=_,_=l+t[e+w[r]]|0,_+=r<16?At(f,d,u)+g[0]:r<32?zt(f,d,u)+g[1]:r<48?Ht(f,d,u)+g[2]:r<64?xt(f,d,u)+g[3]:mt(f,d,u)+g[4],_=(_=Ct(_|=0,S[r]))+p|0,l=p,p=u,u=Ct(d,10),d=f,f=_;_=v[1]+c+u|0,v[1]=v[2]+a+p|0,v[2]=v[3]+h+l|0,v[3]=v[4]+o+f|0,v[4]=v[0]+s+d|0,v[0]=_},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process();for(var n=this._hash,o=n.words,s=0;s<5;s++){var c=o[s];o[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return n},clone:function(){var t=l.clone.call(this);return t._hash=this._hash.clone(),t}}),s.RIPEMD160=l._createHelper(u),s.HmacRIPEMD160=l._createHmacHelper(u),p=bt.lib.Base,_=bt.enc.Utf8,bt.algo.HMAC=p.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=_.parse(e));var r=t.blockSize,i=4*r;e.sigBytes>i&&(e=t.finalize(e)),e.clamp();for(var n=this._oKey=e.clone(),o=this._iKey=e.clone(),s=n.words,c=o.words,a=0;a<r;a++)s[a]^=1549556828,c[a]^=909522486;n.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,r=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(r))}}),y=(v=bt).lib,g=y.Base,B=y.WordArray,w=v.algo,k=w.SHA1,S=w.HMAC,C=w.PBKDF2=g.extend({cfg:g.extend({keySize:4,hasher:k,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=S.create(r.hasher,t),n=B.create(),o=B.create([1]),s=n.words,c=o.words,a=r.keySize,h=r.iterations;s.length<a;){var l=i.update(e).finalize(o);i.reset();for(var f=l.words,d=f.length,u=l,p=1;p<h;p++){u=i.finalize(u),i.reset();for(var _=u.words,v=0;v<d;v++)f[v]^=_[v]}n.concat(l),c[0]++}return n.sigBytes=4*a,n}}),v.PBKDF2=function(t,e,r){return C.create(r).compute(t,e)},E=(D=bt).lib,R=E.Base,M=E.WordArray,F=D.algo,P=F.MD5,W=F.EvpKDF=R.extend({cfg:R.extend({keySize:4,hasher:P,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r,i=this.cfg,n=i.hasher.create(),o=M.create(),s=o.words,c=i.keySize,a=i.iterations;s.length<c;){r&&n.update(r),r=n.update(t).finalize(e),n.reset();for(var h=1;h<a;h++)r=n.finalize(r),n.reset();o.concat(r)}return o.sigBytes=4*c,o}}),D.EvpKDF=function(t,e,r){return W.create(r).compute(t,e)},I=(O=bt).lib.WordArray,U=O.algo,K=U.SHA256,X=U.SHA224=K.extend({_doReset:function(){this._hash=new I.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=K._doFinalize.call(this);return t.sigBytes-=4,t}}),O.SHA224=K._createHelper(X),O.HmacSHA224=K._createHmacHelper(X),L=bt.lib,j=L.Base,N=L.WordArray,(T=bt.x64={}).Word=j.extend({init:function(t,e){this.high=t,this.low=e}}),T.WordArray=j.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:8*t.length},toX32:function(){for(var t=this.words,e=t.length,r=[],i=0;i<e;i++){var n=t[i];r.push(n.high),r.push(n.low)}return N.create(r,this.sigBytes)},clone:function(){for(var t=j.clone.call(this),e=t.words=this.words.slice(0),r=e.length,i=0;i<r;i++)e[i]=e[i].clone();return t}}),function(d){var t=bt,e=t.lib,u=e.WordArray,i=e.Hasher,l=t.x64.Word,r=t.algo,C=[],D=[],E=[];!function(){for(var t=1,e=0,r=0;r<24;r++){C[t+5*e]=(r+1)*(r+2)/2%64;var i=(2*t+3*e)%5;t=e%5,e=i}for(t=0;t<5;t++)for(e=0;e<5;e++)D[t+5*e]=e+(2*t+3*e)%5*5;for(var n=1,o=0;o<24;o++){for(var s=0,c=0,a=0;a<7;a++){if(1&n){var h=(1<<a)-1;h<32?c^=1<<h:s^=1<<h-32}128&n?n=n<<1^113:n<<=1}E[o]=l.create(s,c)}}();var R=[];!function(){for(var t=0;t<25;t++)R[t]=l.create()}();var n=r.SHA3=i.extend({cfg:i.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new l.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var r=this._state,i=this.blockSize/2,n=0;n<i;n++){var o=t[e+2*n],s=t[e+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),(x=r[n]).high^=s,x.low^=o}for(var c=0;c<24;c++){for(var a=0;a<5;a++){for(var h=0,l=0,f=0;f<5;f++){h^=(x=r[a+5*f]).high,l^=x.low}var d=R[a];d.high=h,d.low=l}for(a=0;a<5;a++){var u=R[(a+4)%5],p=R[(a+1)%5],_=p.high,v=p.low;for(h=u.high^(_<<1|v>>>31),l=u.low^(v<<1|_>>>31),f=0;f<5;f++){(x=r[a+5*f]).high^=h,x.low^=l}}for(var y=1;y<25;y++){var g=(x=r[y]).high,B=x.low,w=C[y];l=w<32?(h=g<<w|B>>>32-w,B<<w|g>>>32-w):(h=B<<w-32|g>>>64-w,g<<w-32|B>>>64-w);var k=R[D[y]];k.high=h,k.low=l}var S=R[0],m=r[0];S.high=m.high,S.low=m.low;for(a=0;a<5;a++)for(f=0;f<5;f++){var x=r[y=a+5*f],b=R[y],H=R[(a+1)%5+5*f],z=R[(a+2)%5+5*f];x.high=b.high^~H.high&z.high,x.low=b.low^~H.low&z.low}x=r[0];var A=E[c];x.high^=A.high,x.low^=A.low}},_doFinalize:function(){var t=this._data,e=t.words,r=(this._nDataBytes,8*t.sigBytes),i=32*this.blockSize;e[r>>>5]|=1<<24-r%32,e[(d.ceil((1+r)/i)*i>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();for(var n=this._state,o=this.cfg.outputLength/8,s=o/8,c=[],a=0;a<s;a++){var h=n[a],l=h.high,f=h.low;l=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8),f=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),c.push(f),c.push(l)}return new u.init(c,o)},clone:function(){for(var t=i.clone.call(this),e=t._state=this._state.slice(0),r=0;r<25;r++)e[r]=e[r].clone();return t}});t.SHA3=i._createHelper(n),t.HmacSHA3=i._createHmacHelper(n)}(Math),function(){var t=bt,e=t.lib.Hasher,r=t.x64,i=r.Word,n=r.WordArray,o=t.algo;function s(){return i.create.apply(i,arguments)}var mt=[s(1116352408,3609767458),s(1899447441,602891725),s(3049323471,3964484399),s(3921009573,2173295548),s(961987163,4081628472),s(1508970993,3053834265),s(2453635748,2937671579),s(2870763221,3664609560),s(3624381080,2734883394),s(310598401,1164996542),s(607225278,1323610764),s(1426881987,3590304994),s(1925078388,4068182383),s(2162078206,991336113),s(2614888103,633803317),s(3248222580,3479774868),s(3835390401,2666613458),s(4022224774,944711139),s(264347078,2341262773),s(604807628,2007800933),s(770255983,1495990901),s(1249150122,1856431235),s(1555081692,3175218132),s(1996064986,2198950837),s(2554220882,3999719339),s(2821834349,766784016),s(2952996808,2566594879),s(3210313671,3203337956),s(3336571891,1034457026),s(3584528711,2466948901),s(113926993,3758326383),s(338241895,168717936),s(666307205,1188179964),s(773529912,1546045734),s(1294757372,1522805485),s(1396182291,2643833823),s(1695183700,2343527390),s(1986661051,1014477480),s(2177026350,1206759142),s(2456956037,344077627),s(2730485921,1290863460),s(2820302411,3158454273),s(3259730800,3505952657),s(3345764771,106217008),s(3516065817,3606008344),s(3600352804,1432725776),s(4094571909,1467031594),s(275423344,851169720),s(430227734,3100823752),s(506948616,1363258195),s(659060556,3750685593),s(883997877,3785050280),s(958139571,3318307427),s(1322822218,3812723403),s(1537002063,2003034995),s(1747873779,3602036899),s(1955562222,1575990012),s(2024104815,1125592928),s(2227730452,2716904306),s(2361852424,442776044),s(2428436474,593698344),s(2756734187,3733110249),s(3204031479,2999351573),s(3329325298,3815920427),s(3391569614,3928383900),s(3515267271,566280711),s(3940187606,3454069534),s(4118630271,4000239992),s(116418474,1914138554),s(174292421,2731055270),s(289380356,3203993006),s(460393269,320620315),s(685471733,587496836),s(852142971,1086792851),s(1017036298,365543100),s(1126000580,2618297676),s(1288033470,3409855158),s(1501505948,4234509866),s(1607167915,987167468),s(1816402316,1246189591)],xt=[];!function(){for(var t=0;t<80;t++)xt[t]=s()}();var c=o.SHA512=e.extend({_doReset:function(){this._hash=new n.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=r[5],h=r[6],l=r[7],f=i.high,d=i.low,u=n.high,p=n.low,_=o.high,v=o.low,y=s.high,g=s.low,B=c.high,w=c.low,k=a.high,S=a.low,m=h.high,x=h.low,b=l.high,H=l.low,z=f,A=d,C=u,D=p,E=_,R=v,M=y,F=g,P=B,W=w,O=k,I=S,U=m,K=x,X=b,L=H,j=0;j<80;j++){var N,T,q=xt[j];if(j<16)T=q.high=0|t[e+2*j],N=q.low=0|t[e+2*j+1];else{var Z=xt[j-15],V=Z.high,G=Z.low,J=(V>>>1|G<<31)^(V>>>8|G<<24)^V>>>7,$=(G>>>1|V<<31)^(G>>>8|V<<24)^(G>>>7|V<<25),Q=xt[j-2],Y=Q.high,tt=Q.low,et=(Y>>>19|tt<<13)^(Y<<3|tt>>>29)^Y>>>6,rt=(tt>>>19|Y<<13)^(tt<<3|Y>>>29)^(tt>>>6|Y<<26),it=xt[j-7],nt=it.high,ot=it.low,st=xt[j-16],ct=st.high,at=st.low;T=(T=(T=J+nt+((N=$+ot)>>>0<$>>>0?1:0))+et+((N+=rt)>>>0<rt>>>0?1:0))+ct+((N+=at)>>>0<at>>>0?1:0),q.high=T,q.low=N}var ht,lt=P&O^~P&U,ft=W&I^~W&K,dt=z&C^z&E^C&E,ut=A&D^A&R^D&R,pt=(z>>>28|A<<4)^(z<<30|A>>>2)^(z<<25|A>>>7),_t=(A>>>28|z<<4)^(A<<30|z>>>2)^(A<<25|z>>>7),vt=(P>>>14|W<<18)^(P>>>18|W<<14)^(P<<23|W>>>9),yt=(W>>>14|P<<18)^(W>>>18|P<<14)^(W<<23|P>>>9),gt=mt[j],Bt=gt.high,wt=gt.low,kt=X+vt+((ht=L+yt)>>>0<L>>>0?1:0),St=_t+ut;X=U,L=K,U=O,K=I,O=P,I=W,P=M+(kt=(kt=(kt=kt+lt+((ht=ht+ft)>>>0<ft>>>0?1:0))+Bt+((ht=ht+wt)>>>0<wt>>>0?1:0))+T+((ht=ht+N)>>>0<N>>>0?1:0))+((W=F+ht|0)>>>0<F>>>0?1:0)|0,M=E,F=R,E=C,R=D,C=z,D=A,z=kt+(pt+dt+(St>>>0<_t>>>0?1:0))+((A=ht+St|0)>>>0<ht>>>0?1:0)|0}d=i.low=d+A,i.high=f+z+(d>>>0<A>>>0?1:0),p=n.low=p+D,n.high=u+C+(p>>>0<D>>>0?1:0),v=o.low=v+R,o.high=_+E+(v>>>0<R>>>0?1:0),g=s.low=g+F,s.high=y+M+(g>>>0<F>>>0?1:0),w=c.low=w+W,c.high=B+P+(w>>>0<W>>>0?1:0),S=a.low=S+I,a.high=k+O+(S>>>0<I>>>0?1:0),x=h.low=x+K,h.high=m+U+(x>>>0<K>>>0?1:0),H=l.low=H+L,l.high=b+X+(H>>>0<L>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[30+(128+i>>>10<<5)]=Math.floor(r/4294967296),e[31+(128+i>>>10<<5)]=r,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});t.SHA512=e._createHelper(c),t.HmacSHA512=e._createHmacHelper(c)}(),Z=(q=bt).x64,V=Z.Word,G=Z.WordArray,J=q.algo,$=J.SHA512,Q=J.SHA384=$.extend({_doReset:function(){this._hash=new G.init([new V.init(3418070365,3238371032),new V.init(1654270250,914150663),new V.init(2438529370,812702999),new V.init(355462360,4144912697),new V.init(1731405415,4290775857),new V.init(2394180231,1750603025),new V.init(3675008525,1694076839),new V.init(1203062813,3204075428)])},_doFinalize:function(){var t=$._doFinalize.call(this);return t.sigBytes-=16,t}}),q.SHA384=$._createHelper(Q),q.HmacSHA384=$._createHmacHelper(Q),bt.lib.Cipher||function(){var t=bt,e=t.lib,r=e.Base,a=e.WordArray,i=e.BufferedBlockAlgorithm,n=t.enc,o=(n.Utf8,n.Base64),s=t.algo.EvpKDF,c=e.Cipher=i.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){i.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(i){return{encrypt:function(t,e,r){return h(e).encrypt(i,t,e,r)},decrypt:function(t,e,r){return h(e).decrypt(i,t,e,r)}}}});function h(t){return"string"==typeof t?w:g}e.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l,f=t.mode={},d=e.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),u=f.CBC=((l=d.extend()).Encryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;p.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),l.Decryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),p.call(this,t,e,i),this._prevBlock=n}}),l);function p(t,e,r){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var o=0;o<r;o++)t[e+o]^=i[o]}var _=(t.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes%r,n=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(n);var c=a.create(o,i);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},v=(e.BlockCipher=c.extend({cfg:c.cfg.extend({mode:u,padding:_}),reset:function(){var t;c.reset.call(this);var e=this.cfg,r=e.iv,i=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=i.createEncryptor:(t=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(i,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),e.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=(t.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;return(r?a.create([1398893684,1701076831]).concat(r).concat(e):e).toString(o)},parse:function(t){var e,r=o.parse(t),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(e=a.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),v.create({ciphertext:r,salt:e})}},g=e.SerializableCipher=r.extend({cfg:r.extend({format:y}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),o=n.finalize(e),s=n.cfg;return v.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),B=(t.kdf={}).OpenSSL={execute:function(t,e,r,i){i=i||a.random(8);var n=s.create({keySize:e+r}).compute(t,i),o=a.create(n.words.slice(e),4*r);return n.sigBytes=4*e,v.create({key:n,iv:o,salt:i})}},w=e.PasswordBasedCipher=g.extend({cfg:g.cfg.extend({kdf:B}),encrypt:function(t,e,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize);i.iv=n.iv;var o=g.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);return i.iv=n.iv,g.decrypt.call(this,t,e,n.key,i)}})}(),bt.mode.CFB=((Y=bt.lib.BlockCipherMode.extend()).Encryptor=Y.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;Dt.call(this,t,e,i,r),this._prevBlock=t.slice(e,e+i)}}),Y.Decryptor=Y.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);Dt.call(this,t,e,i,r),this._prevBlock=n}}),Y),bt.mode.ECB=((tt=bt.lib.BlockCipherMode.extend()).Encryptor=tt.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),tt.Decryptor=tt.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),tt),bt.pad.AnsiX923={pad:function(t,e){var r=t.sigBytes,i=4*e,n=i-r%i,o=r+n-1;t.clamp(),t.words[o>>>2]|=n<<24-o%4*8,t.sigBytes+=n},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},bt.pad.Iso10126={pad:function(t,e){var r=4*e,i=r-t.sigBytes%r;t.concat(bt.lib.WordArray.random(i-1)).concat(bt.lib.WordArray.create([i<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},bt.pad.Iso97971={pad:function(t,e){t.concat(bt.lib.WordArray.create([2147483648],1)),bt.pad.ZeroPadding.pad(t,e)},unpad:function(t){bt.pad.ZeroPadding.unpad(t),t.sigBytes--}},bt.mode.OFB=(et=bt.lib.BlockCipherMode.extend(),rt=et.Encryptor=et.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var s=0;s<i;s++)t[e+s]^=o[s]}}),et.Decryptor=rt,et),bt.pad.NoPadding={pad:function(){},unpad:function(){}},it=bt.lib.CipherParams,nt=bt.enc.Hex,bt.format.Hex={stringify:function(t){return t.ciphertext.toString(nt)},parse:function(t){var e=nt.parse(t);return it.create({ciphertext:e})}},function(){var t=bt,e=t.lib.BlockCipher,r=t.algo,h=[],l=[],f=[],d=[],u=[],p=[],_=[],v=[],y=[],g=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var r=0,i=0;for(e=0;e<256;e++){var n=i^i<<1^i<<2^i<<3^i<<4;n=n>>>8^255&n^99,h[r]=n;var o=t[l[n]=r],s=t[o],c=t[s],a=257*t[n]^16843008*n;f[r]=a<<24|a>>>8,d[r]=a<<16|a>>>16,u[r]=a<<8|a>>>24,p[r]=a;a=16843009*c^65537*s^257*o^16843008*r;_[n]=a<<24|a>>>8,v[n]=a<<16|a>>>16,y[n]=a<<8|a>>>24,g[n]=a,r?(r=o^t[t[t[c^o]]],i^=t[t[i]]):r=i=1}}();var B=[0,1,2,4,8,16,32,64,128,27,54],i=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,i=4*(1+(this._nRounds=6+r)),n=this._keySchedule=[],o=0;o<i;o++)o<r?n[o]=e[o]:(a=n[o-1],o%r?6<r&&o%r==4&&(a=h[a>>>24]<<24|h[a>>>16&255]<<16|h[a>>>8&255]<<8|h[255&a]):(a=h[(a=a<<8|a>>>24)>>>24]<<24|h[a>>>16&255]<<16|h[a>>>8&255]<<8|h[255&a],a^=B[o/r|0]<<24),n[o]=n[o-r]^a);for(var s=this._invKeySchedule=[],c=0;c<i;c++){o=i-c;if(c%4)var a=n[o];else a=n[o-4];s[c]=c<4||o<=4?a:_[h[a>>>24]]^v[h[a>>>16&255]]^y[h[a>>>8&255]]^g[h[255&a]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,f,d,u,p,h)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,_,v,y,g,l);r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,s,c){for(var a=this._nRounds,h=t[e]^r[0],l=t[e+1]^r[1],f=t[e+2]^r[2],d=t[e+3]^r[3],u=4,p=1;p<a;p++){var _=i[h>>>24]^n[l>>>16&255]^o[f>>>8&255]^s[255&d]^r[u++],v=i[l>>>24]^n[f>>>16&255]^o[d>>>8&255]^s[255&h]^r[u++],y=i[f>>>24]^n[d>>>16&255]^o[h>>>8&255]^s[255&l]^r[u++],g=i[d>>>24]^n[h>>>16&255]^o[l>>>8&255]^s[255&f]^r[u++];h=_,l=v,f=y,d=g}_=(c[h>>>24]<<24|c[l>>>16&255]<<16|c[f>>>8&255]<<8|c[255&d])^r[u++],v=(c[l>>>24]<<24|c[f>>>16&255]<<16|c[d>>>8&255]<<8|c[255&h])^r[u++],y=(c[f>>>24]<<24|c[d>>>16&255]<<16|c[h>>>8&255]<<8|c[255&l])^r[u++],g=(c[d>>>24]<<24|c[h>>>16&255]<<16|c[l>>>8&255]<<8|c[255&f])^r[u++];t[e]=_,t[e+1]=v,t[e+2]=y,t[e+3]=g},keySize:8});t.AES=e._createHelper(i)}(),function(){var t=bt,e=t.lib,n=e.WordArray,r=e.BlockCipher,i=t.algo,h=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],f=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],d=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],u=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],o=i.DES=r.extend({_doReset:function(){for(var t=this._key.words,e=[],r=0;r<56;r++){var i=h[r]-1;e[r]=t[i>>>5]>>>31-i%32&1}for(var n=this._subKeys=[],o=0;o<16;o++){var s=n[o]=[],c=f[o];for(r=0;r<24;r++)s[r/6|0]|=e[(l[r]-1+c)%28]<<31-r%6,s[4+(r/6|0)]|=e[28+(l[r+24]-1+c)%28]<<31-r%6;s[0]=s[0]<<1|s[0]>>>31;for(r=1;r<7;r++)s[r]=s[r]>>>4*(r-1)+3;s[7]=s[7]<<5|s[7]>>>27}var a=this._invSubKeys=[];for(r=0;r<16;r++)a[r]=n[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,e,r){this._lBlock=t[e],this._rBlock=t[e+1],p.call(this,4,252645135),p.call(this,16,65535),_.call(this,2,858993459),_.call(this,8,16711935),p.call(this,1,1431655765);for(var i=0;i<16;i++){for(var n=r[i],o=this._lBlock,s=this._rBlock,c=0,a=0;a<8;a++)c|=d[a][((s^n[a])&u[a])>>>0];this._lBlock=s,this._rBlock=o^c}var h=this._lBlock;this._lBlock=this._rBlock,this._rBlock=h,p.call(this,1,1431655765),_.call(this,8,16711935),_.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),t[e]=this._lBlock,t[e+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function p(t,e){var r=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=r,this._lBlock^=r<<t}function _(t,e){var r=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=r,this._rBlock^=r<<t}t.DES=r._createHelper(o);var s=i.TripleDES=r.extend({_doReset:function(){var t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var e=t.slice(0,2),r=t.length<4?t.slice(0,2):t.slice(2,4),i=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=o.createEncryptor(n.create(e)),this._des2=o.createEncryptor(n.create(r)),this._des3=o.createEncryptor(n.create(i))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});t.TripleDES=r._createHelper(s)}(),function(){var t=bt,e=t.lib.StreamCipher,r=t.algo,i=r.RC4=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes,i=this._S=[],n=0;n<256;n++)i[n]=n;n=0;for(var o=0;n<256;n++){var s=n%r,c=e[s>>>2]>>>24-s%4*8&255;o=(o+i[n]+c)%256;var a=i[n];i[n]=i[o],i[o]=a}this._i=this._j=0},_doProcessBlock:function(t,e){t[e]^=n.call(this)},keySize:8,ivSize:0});function n(){for(var t=this._S,e=this._i,r=this._j,i=0,n=0;n<4;n++){r=(r+t[e=(e+1)%256])%256;var o=t[e];t[e]=t[r],t[r]=o,i|=t[(t[e]+t[r])%256]<<24-8*n}return this._i=e,this._j=r,i}t.RC4=e._createHelper(i);var o=r.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var t=this.cfg.drop;0<t;t--)n.call(this)}});t.RC4Drop=e._createHelper(o)}(),bt.mode.CTRGladman=(ot=bt.lib.BlockCipherMode.extend(),st=ot.Encryptor=ot.extend({processBlock:function(t,e){var r,i=this._cipher,n=i.blockSize,o=this._iv,s=this._counter;o&&(s=this._counter=o.slice(0),this._iv=void 0),0===((r=s)[0]=Et(r[0]))&&(r[1]=Et(r[1]));var c=s.slice(0);i.encryptBlock(c,0);for(var a=0;a<n;a++)t[e+a]^=c[a]}}),ot.Decryptor=st,ot),at=(ct=bt).lib.StreamCipher,ht=ct.algo,lt=[],ft=[],dt=[],ut=ht.Rabbit=at.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=0;r<4;r++)t[r]=16711935&(t[r]<<8|t[r]>>>24)|4278255360&(t[r]<<24|t[r]>>>8);var i=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],n=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];for(r=this._b=0;r<4;r++)Rt.call(this);for(r=0;r<8;r++)n[r]^=i[r+4&7];if(e){var o=e.words,s=o[0],c=o[1],a=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),h=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),l=a>>>16|4294901760&h,f=h<<16|65535&a;n[0]^=a,n[1]^=l,n[2]^=h,n[3]^=f,n[4]^=a,n[5]^=l,n[6]^=h,n[7]^=f;for(r=0;r<4;r++)Rt.call(this)}},_doProcessBlock:function(t,e){var r=this._X;Rt.call(this),lt[0]=r[0]^r[5]>>>16^r[3]<<16,lt[1]=r[2]^r[7]>>>16^r[5]<<16,lt[2]=r[4]^r[1]>>>16^r[7]<<16,lt[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)lt[i]=16711935&(lt[i]<<8|lt[i]>>>24)|4278255360&(lt[i]<<24|lt[i]>>>8),t[e+i]^=lt[i]},blockSize:4,ivSize:2}),ct.Rabbit=at._createHelper(ut),bt.mode.CTR=(pt=bt.lib.BlockCipherMode.extend(),_t=pt.Encryptor=pt.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var s=o.slice(0);r.encryptBlock(s,0),o[i-1]=o[i-1]+1|0;for(var c=0;c<i;c++)t[e+c]^=s[c]}}),pt.Decryptor=_t,pt),yt=(vt=bt).lib.StreamCipher,gt=vt.algo,Bt=[],wt=[],kt=[],St=gt.RabbitLegacy=yt.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],i=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]],n=this._b=0;n<4;n++)Mt.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(e){var o=e.words,s=o[0],c=o[1],a=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),h=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),l=a>>>16|4294901760&h,f=h<<16|65535&a;i[0]^=a,i[1]^=l,i[2]^=h,i[3]^=f,i[4]^=a,i[5]^=l,i[6]^=h,i[7]^=f;for(n=0;n<4;n++)Mt.call(this)}},_doProcessBlock:function(t,e){var r=this._X;Mt.call(this),Bt[0]=r[0]^r[5]>>>16^r[3]<<16,Bt[1]=r[2]^r[7]>>>16^r[5]<<16,Bt[2]=r[4]^r[1]>>>16^r[7]<<16,Bt[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)Bt[i]=16711935&(Bt[i]<<8|Bt[i]>>>24)|4278255360&(Bt[i]<<24|Bt[i]>>>8),t[e+i]^=Bt[i]},blockSize:4,ivSize:2}),vt.RabbitLegacy=yt._createHelper(St),bt.pad.ZeroPadding={pad:function(t,e){var r=4*e;t.clamp(),t.sigBytes+=r-(t.sigBytes%r||r)},unpad:function(t){var e=t.words,r=t.sigBytes-1;for(r=t.sigBytes-1;0<=r;r--)if(e[r>>>2]>>>24-r%4*8&255){t.sigBytes=r+1;break}}},bt});

var d8018d6852bc49e3b3e655364cf1439c = {
  toggleImg: function (ele) {
    if (ele.style.maxWidth == "20em") {
      ele.style.maxWidth = "6em";
    } else {
      ele.style.maxWidth = "20em";
    }
  },
  showAtLink: function (ele) {
    console.log('DEBUG showAtLink called with element:', ele);
    
    // Toggle display of hidden content
    var target = ele.nextElementSibling;
    console.log('DEBUG target element:', target);
    
    // Find expandable elements within the clicked element or its parent
    var expandable = ele.querySelector('.expandable') || ele.closest('.expandable');
    console.log('DEBUG expandable element:', expandable);
    
    if (target) {
      if (target.style.display === "none" || target.style.display === "") {
        target.style.display = "block";
        ele.classList.add('expanded');
        if (expandable) {
          expandable.classList.add('opened');
          console.log('DEBUG: Added opened class to expandable');
        }
      } else {
        target.style.display = "none";
        ele.classList.remove('expanded');
        if (expandable) {
          expandable.classList.remove('opened');
          console.log('DEBUG: Removed opened class from expandable');
        }
      }
    } else {
      // If no next sibling, try to find related content in parent container
      var parent = ele.parentElement;
      if (parent) {
        var hiddenContent = parent.querySelector('.hidden, [style*="display:none"], [style*="display: none"]');
        console.log('DEBUG hidden content found:', hiddenContent);
        if (hiddenContent) {
          if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
            ele.classList.add('expanded');
            if (expandable) {
              expandable.classList.add('opened');
              console.log('DEBUG: Added opened class to expandable (parent case)');
            }
          } else {
            hiddenContent.style.display = "none";
            ele.classList.remove('expanded');
            if (expandable) {
              expandable.classList.remove('opened');
              console.log('DEBUG: Removed opened class from expandable (parent case)');
            }
          }
        }
      }
    }
  }
};

const repl1 = {
  "[": "⟨",
  "]": "⟩",
  countable: "C",
  uncountable: "U",
  singular: "sing",
  plural: "pl",
  intransitive: "I",
  transitive: "T",
  passive: "psv",
  after: "aft",
  before: "bf",
  often: "oft",
  usually: "usu",
  adjective: "adj",
  adverb: "adv",
  abbreviation: "abbr",
  "phrasal verb": "phrv",
  exclamation: "interj",
  conjunction: "conj",
  preposition: "prep",
  number: "num",
  pronoun: "pron",
  determiner: "det",
  "British English": "BrE",
  "American English": "AmE",
};
const repl2 = {
  something: "sth.",
  somebody: "sb.",
  someone: "sb.",
};
const escapedKeys1 = Object.keys(repl1).map((key) =>
  key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);
const escapedKeys2 = Object.keys(repl2).map((key) =>
  key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);
const regex1 = new RegExp(`(${escapedKeys1.join("|")})`, "g");
const regex2 = new RegExp(`(${escapedKeys2.join("|")})`, "g");
const encn = {
  ".lexunit": ".defcn",
  ".def": ".defcn",
  ".collo": ".collocn",
  ".gloss": ".collocn",
  ".sign_en": ".sign_cn",
  expen: "expcn",
  explen: "explcn",
};
const cnslt = ".defcn, .collocn, expcn, explcn, .sign_cn";
const boxheadslt =
  ".usagebox > .heading:not(.newline), .grambox > .heading:not(.newline), .f2nbox > .heading:not(.newline)";
const foldslt = ".example,  .gramexa, .colloexa";

async function getWebsocketUrl(apiKey, apiSecret, gptUrl) {
  const host = new URL(gptUrl).host;
  const path = new URL(gptUrl).pathname;
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${path} HTTP/1.1`;
  const signatureWordArray = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
  const signatureBase64 = CryptoJS.enc.Base64.stringify(signatureWordArray);
  const authorizationOrigin = `api_key="${apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signatureBase64}"`;
  const authorizationBase64 = btoa(authorizationOrigin);
  return `${gptUrl}?authorization=${authorizationBase64}&date=${date}&host=${host}`;
}
async function callLLM(text, tAera) {
  let wsUrl = await getWebsocketUrl(apiKey, apiSecret, gptUrl);
  let llmSocket = new WebSocket(wsUrl);
  llmSocket.onclose = () => (llmSocket = null);
  llmSocket.onopen = function () {
    const requestData = {
      header: { app_id: appid, uid: "1234" },
      parameter: {
        chat: {
          domain: "xdeepseekv3",
          temperature: 0.5,
          max_tokens: 4096,
        },
      },
      payload: {
        message: { text: [{ role: "user", content: text }] },
      },
    };
    llmSocket.send(JSON.stringify(requestData));
  };
  llmSocket.onmessage = function (event) {
    const response = JSON.parse(event.data);
    console.log("Received message:", response);
    if (response.payload?.choices?.text) {
      const content = response.payload.choices.text[0].content;
      tAera.append(content);
    }
  };

  llmSocket.onerror = function (error) {
    console.error("WebSocket Error:", error);
  };
}

function randomStr(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function main() {
  // return;
  let lm6base = $(".lm6");
  if (lm6base.attr("script-loaded") === "true") return;
  lm6base.attr("script-loaded", "true");
  console.log("lm6 started");
  let lm6adam = lm6base.parent();
  var db = localStorage;
  var isDark;
  var lastClickTime = 0;
  var openTime = 200;
  let isDragging = false;
  const ua = navigator.userAgent.toLowerCase();
  const isEudic = ua.indexOf("eudic") >= 0;
  const isAndroid = ua.indexOf("android") >= 0 || ua.indexOf("harmony") >= 0;
  const isGoldenDict = ua.indexOf("goldendict") >= 0;
  const isEudicMobile =
    isEudic &&
    (ua.indexOf("android") > -1 ||
      ua.indexOf("iphone") > -1 ||
      ua.indexOf("ipad") > -1);
  const targetID = lm6base.find(".hide > .target").attr("id");
  const innerjump = lm6base.find(".hide > .innerjump").attr("href");
  const outerjump = lm6base.find(".hide > .outerjump").attr("href");
  var canScroll = isEudic || !isAndroid;
  function setjump(o, d) {
    if (canScroll) {
      o.on("click", function () {
        atlink = d.closest(".at-link");
        if (atlink.length) {
          if (!atlink.is(":visible")) return;
        }
        let aa = d.closest(".spokensect");
        if (aa.length) {
          let head = aa.find(".spokensecthead");
          if (!head.hasClass("opened")) head.trigger("click");
        }
        let prevOffset = o.offset().top - $(window).scrollTop();
        $("html, body").animate(
          { scrollTop: d.offset().top - prevOffset },
          300
        );
      });
    } else {
      let id = randomStr();
      oNew = $("<a>", {
        href: innerjump.replace("kreplace", id),
      });
      d.attr("id", targetID.replace("kreplace", id));
      o.after(oNew);
      oNew.append(o);
      oNew.on("click", function () {
        atlink = d.closest(".at-link");
        if (atlink.length) {
          if (!atlink.is(":visible")) return false;
        }
        let aa = d.closest(".spokensect");
        if (aa.length) {
          head = aa.find(".spokensecthead");
          if (!head.hasClass("opened")) head.trigger("click");
        }
      });
    }
  }

  // content display treat
  lm6base.find(".phrase > span").each(function () {
    if ($(this).text() == "► ") $(this).remove();
  });
  lm6base.find("td.header").attr("colspan", 100);

  lm6base.find(".gram, .geo").each(function () {
    text = $(this).text();
    $(this).text(text.replace(regex1, (match) => repl1[match]));
  });
  lm6base
    .find(
      ".sign_en, .lexunit:not(.lm6 > .sense .lexunit), .propform, .phrv, .collo, .object:not(.lm6 > .phrvbentry .object), .exp, .phrasetext"
    )
    .each(function () {
      text = $(this).text();
      $(this).text(text.replace(regex2, (match) => repl2[match]));
    });
  lm6base.find(".arrow").each(function () {
    arrow1 = $("<span>").addClass("arrow1");
    arrow2 = $("<span>").addClass("arrow2");
    $(this).text("").append(arrow1, arrow2);
  });
  if (lm6cf.onlyChn) {
    lm6base.find(".def, .sign_en").hide();
    lm6base.find(".sign_cn, .defcn").addClass("only");
  }
  lm6base.find(".buttons").each(function () {
    var contents = $("<div>", {
      class: "tab-content",
    });
    $(this).after(contents);
    $(this)
      .find(".at-link")
      .each(function () {
        contents.append($(this));
      });
  });
  lm6base.find(".popup-button").on("click", function (e) {
    var contents = $(this).parent().siblings(".tab-content"); //所有tab内容（而非按钮）组成的集合
    var target = contents
      .find(".at-link")
      .eq($(this).prevAll(".popup-button").length); //target为需要展开/折叠的内容
    $(this).siblings(".popup-button.clicked").trigger("click"); //对于已展开的按钮，点击一下让它关闭
    target.slideToggle(openTime); //让需要展开/折叠的内容展开/折叠
    $(this).toggleClass("clicked"); //让当前按钮切换展开/折叠状态（影响按钮的颜色）
    e.stopPropagation();
  });
  lm6base.find(".popup-button").each(function () {
    btn = $(this);
    btn.removeAttr("onclick");
    if (btn.text() == "word sets") {
      btn.remove();
      return;
    }
    if (lm6cf.autoShowOrigin && btn.text() == "Word Origin") {
      openTime = 0;
      btn.trigger("click");
      openTime = 200;
    }
  });

  const heads = lm6base.find(".entry > .entryhead");
  if (heads.length > 1) {
    heads.each(function () {
      hw = $(this).find(".hwd").first();
      homnum = hw.siblings(".homnum");
      if (homnum.length) hw.siblings(".homnum").append(`/${heads.length}`);
    });
  }

  setTimeout(function () {
    const screenHeight = window.screen.height; // 设备屏幕高度
    const layoutViewportHeight = document.documentElement.clientHeight; // 布局视口高度
    if (layoutViewportHeight < screenHeight) {
      canScroll = true;
    }
    lm6base.find(" .signpost,  .phrv, .phrvbhwd, .lexunit").each(function () {
      btn = $(this);
      var currentClass = btn.attr("class").split(" ")[0]; // 获取当前元素的 class
      if (currentClass == "phrv") {
        currentClass = "phrvbhwd";
      } else if (currentClass == "phrvbhwd") {
        currentClass = "phrv";
      }
      var currentText = btn.text().replace("↔", "").replace("  ", " ").trim(); // 获取当前元素的 text（并去除首尾空格）
      var entry0 = btn.parents(".lm6");
      var matchingElements = entry0
        .find("." + currentClass)
        .filter(function () {
          return (
            $(this).text().replace("↔", "").replace("  ", " ").trim() ===
              currentText &&
            this !== btn[0] &&
            !(
              $(this).closest(".at-link").length &&
              !$(this).closest(".entrymenu").length
            )
          );
        });

      if (!matchingElements.length) return;
      let target = matchingElements.first();
      setjump(btn, target);
    });
    if (heads.length > 1) {
      heads.each(function (index) {
        hw = $(this).find(".hwd").first();
        target = heads.eq((index + 1) % heads.length);
        setjump(hw, target);
      });
    }
  }, 500);

  detectDarkModeEnabled();
  function detectDarkModeEnabled() {
    var isPreview;
    try {
      isPreview =
        window.self !== window.top &&
        parent.document.querySelector("#k_iframe");
    } catch {
      isPreview = false;
    }
    if (!isGoldenDict && !isEudic) {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const handleThemeChange = (event) => {
        const isDarkMode = event.matches;
        isDark = isDarkMode;
        lm6base.attr("data-theme", isDarkMode ? "dark" : "light");
        if (isPreview)
          $("body").css(
            "background-color",
            isDarkMode ? "rgb(26, 26, 26)" : ""
          );
      };
      handleThemeChange(darkModeMediaQuery); // Initial check
      darkModeMediaQuery.addEventListener("change", handleThemeChange); // Listen for changes
      return;
    }

    if (isGoldenDict) {
      isDark = $("html").attr("data-darkreader-scheme") === "dark";
      lm6base.attr("data-theme", isDark ? "dark" : "light");
      lm6base.siblings(".darkreader--sync").attr("media", "screen1");
      return;
    }

    // Delete the Eudic fixed style to prevent conflicts

    lm6adam.find(".eudic_custom_night").remove(); // Initial check
    if (!lm6adam.attr("observer-attached")) {
      new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.classList?.contains("eudic_custom_night")) node.remove();
          });
        });
      }).observe(lm6adam[0], { childList: true });
      lm6adam.attr("observer-attached", "true");
    }

    // Set the theme based on the body's class
    isDark = lm6base.closest("body").is(".black, .night");
    const setEudicTheme = () =>
      lm6base.attr("data-theme", isDark ? "dark" : "light");
    setEudicTheme(); // Initial check
    new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setEudicTheme();
        }
      });
    }).observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  // init config
  if (db && db.getItem && lm6cf.rememberConfig) {
    ["defaultFold", "defaultShowCN"].forEach(function (key) {
      lm6cf[key] =
        db.getItem(key) === null ? lm6cf[key] : db.getItem(key) === "true";
    });
    lm6cf["defaultTopicClass"] =
      db.getItem("defaultTopicClass") === null
        ? lm6cf["defaultTopicClass"]
        : db.getItem("defaultTopicClass");
  }
  function setConfig(key, value) {
    lm6cf[key] = value;
    if (!db || !db.getItem || !lm6cf.rememberConfig) return;
    db.setItem(key, "" + value);
  }

  var boxhead = lm6base.find(boxheadslt);
  lm6base.find(boxheadslt).on("click", function (e) {
    $(this).siblings().slideToggle(150);
    $(this).toggleClass("closed");
    e.stopPropagation();
  });

  lm6base.each(function () {
    let entry = $(this);
    const base = {};
    const refer = {};
    entry.find(".at-link .section").each(function () {
      let topic = $(this).children(".secheading").text().trim();
      let each0 = {};
      $(this)
        .find(".exponent, .collocate")
        .each(function () {
          let tag = $(this).find(".exp, .colloc").text().trim();

          each0[tag] = $(this);
        });
      base[topic] = each0;
    });

    entry.find(".thesbox .section, .collobox .section").each(function () {
      let topic = $(this).children(".secheading").text().trim();
      let each0 = {};
      $(this)
        .find(".exponent, .collocate")
        .each(function () {
          let tag = $(this).find(".exp, .colloc").text().trim();
          if (tag in each0) return;

          each0[tag] = $(this);
        });
      console.log(each0);
      refer[topic] = each0;
    });
    for (let topic in base) {
      if (topic in refer) {
        for (let tag in base[topic]) {
          if (tag in refer[topic]) {
            insert = refer[topic][tag].clone();
            insert.find(".exp, .colloc").remove();
            insert.attr("class", "content");
            base[topic][tag].find(".content").replaceWith(insert);
          }
        }
      }
    }
  });
  lm6base
    .find(
      " .at-link .hwd, .at-link .homnum , .at-link .etymology, .thesbox, .collobox"
    )
    .remove();
  const allChn = lm6base.find(cnslt);
  allChn.each(function () {
    if (!$(this).text().trim().length) $(this).remove();
  });
  if (lm6cf.enableLLMtranslate) {
    lm6base
      .find(".exas > li, .example, .def, .etymsense")
      .on("click", function (e) {
        // if (isDicttango) return;
        if ($(e.target).is(".voice")) return;
        if ($(this).find(".llm").length) {
          if (lm6cf.enableEnCnSwitch) $(this).find(".llm").toggle();
          return;
        }
        cn = $(this).next(cnslt).add($(this).find(cnslt));
        if (cn.length) {
          if (cn.text().trim().length) {
            return;
          }
        }
        const llmout = $("<span>", {
          class: "llm",
        });
        $(this).append(llmout);
        text = $(this).text();
        prompt = `你是一名英语专家，请将以下内容翻译为中文。要求：只输出结果就行，不用任何解释\n${text}`;
        (async function () {
          await callLLM(prompt, llmout);
        })();
      });
  }
  if (lm6cf.enableEnCnSwitch) {
    Object.entries(encn).forEach(([key, val]) => {
      lm6base.find(key).on("click", function (e) {
        if ($(e.target).is(".voice, .kbtn")) {
          return;
        }
        $(this).siblings(val).fadeToggle(200);
      });
      if (lm6cf.onlyChn) {
        lm6base.find(val).on("click", function () {
          $(this).siblings(key).fadeToggle(200);
          $(this).toggleClass("only");
        });
      } else {
        lm6base.find(val).on("click", function (e) {
          $(this).fadeOut(200);
        });
      }
    });
  }

  let spokenhead = lm6base.find(".spokensecthead");
  lm6base.find(".spokensecthead").on("click", function (e) {
    $(this).toggleClass("opened");
    $(this).siblings("*").slideToggle(200);
    e.stopPropagation();
  });
  spokenhead.addClass("opened");
  spokenhead.trigger("click");

  lm6base.find(".expandable").on("click", function (e) {
    target = $(this).next(".content");
    $(this).toggleClass("opened");
    $(this).hasClass("opened") ? target.slideDown(200) : target.slideUp(200);
    e.stopPropagation();
  });
  lm6base.find(".category").closest(".entry").remove();
  lm6base.find(".at-link").each(function () {
    aa = $(this);
    if (aa.children("*").length == 0) aa.remove();
  });

  const allToFold = lm6base
    .find(foldslt)
    .not(function () {
      return (
        $(this).closest(".at-link, .usagebox, .grambox, .f2nbox").length > 0
      );
    })
    .add(boxhead.siblings());
  const mainsensenum = lm6base.find(".sense > .sensenum");
  function setFold() {
    if (lm6cf.defaultFold) {
      mainsensenum.removeClass("opened");
      boxhead.addClass("closed");
      lm6base.find(".fold.kbtn").addClass("clicked");
      allToFold.slideUp(0);
    } else {
      mainsensenum.addClass("opened");
      boxhead.removeClass("closed");
      lm6base.find(".fold.kbtn").removeClass("clicked");
      allToFold.slideDown(0);
    }
  }
  mainsensenum.each(function () {
    $(this).addClass("treated");
    oNew = $("<span>", {
      class: "afternum",
    });
    if ($(this).closest(".sense").find(foldslt).length) {
      arrow1 = $("<span>").addClass("arrow1");
      arrow2 = $("<span>").addClass("arrow2");
      oNew.append(arrow1, arrow2);
    } else {
      arrow0 = $("<span>").addClass("arrow0");
      oNew.append(arrow0);
      oNew.addClass("short");
    }
    $(this).append(oNew);
  });
  mainsensenum.on("dblclick", function (e) {
    let prevOffset = $(this).offset().top - $(window).scrollTop();
    setConfig("defaultFold", !lm6cf.defaultFold);
    setFold();
    setTimeout(() => {
      $(window).scrollTop($(this).offset().top - prevOffset);
    }, 0);
    e.stopPropagation();
  });
  mainsensenum.on("click", function (e) {
    let now = Date.now();
    if (now - lastClickTime < 650) {
      return;
    }
    lastClickTime = now;
    self = $(this).closest(".sense");
    self.children(".sensenum").toggleClass("opened");
    self.children(".sensenum").hasClass("opened")
      ? self.find(foldslt).slideDown(200)
      : self.find(foldslt).slideUp(200);
    e.stopPropagation();
  });

  lm6base.find(".entry").each(function () {
    if (!$(this).find(".buttons").length) {
      $(this)
        .find(".entryhead")
        .first()
        .append($('<div class="buttons soft"></div>'));
    }
  });
  lm6base.find(".thesaurus").each(function () {
    if ($(this).text() == "►") {
      $(this).addClass("up");
    }
  });

  lm6base.find(".phrvbentry").each(function () {
    if (!$(this).find(".buttons").length) {
      $(this)
        .find(".entryhead")
        .first()
        .append($('<div class="buttons soft nochn"></div>'));
    }
  });

  lm6base.each(function () {
    if (!$(this).find(".buttons").length) {
      $(this)
        .find(".sense > .lexunit")
        .first()
        .append($('<div class="buttons soft"></div>'));
    }
  });
  lm6base.find(".phrvbentry, .entry, .lexunit").each(function () {
    let kk = $(this).find(".sense > .sensenum");
    if (!allToFold.length) return;
    if (kk.length && kk.is(":visible")) return;
    let bb = $(this).find(".buttons");
    if (bb.find(".fold.kbtn").length) return;
    bb.prepend(
      $("<span>", {
        class: "fold kbtn",
        text: "☰",
      })
    );
  });
  $(".lm6");
  lm6base.find(".fold.kbtn").on("click", function (e) {
    let prevOffset = $(this).offset().top - $(window).scrollTop();
    setConfig("defaultFold", !lm6cf.defaultFold);
    setFold();
    setTimeout(() => {
      $(window).scrollTop($(this).offset().top - prevOffset);
    }, 0);
    e.stopPropagation();
  });
  setFold();

  lm6base.find(".buttons:not(.nochn)").prepend(
    $("<span>", {
      class: "encn kbtn",
      text: "中",
    })
  );
  const cnbtn = lm6base.find(".encn.kbtn");
  if (!lm6cf.showChnBtn) cnbtn.hide(0);
  lm6base.find(".encn.kbtn").on("click", function (e) {
    let prevOffset = $(this).offset().top - $(window).scrollTop();
    setConfig("defaultShowCN", !lm6cf.defaultShowCN);
    lm6cf.defaultShowCN
      ? cnbtn.addClass("clicked")
      : cnbtn.removeClass("clicked");
    lm6cf.defaultShowCN ? allChn.show(0) : allChn.hide(0);
    setTimeout(() => {
      $(window).scrollTop($(this).offset().top - prevOffset);
    }, 0);
    e.stopPropagation();
  });
  lm6cf.defaultShowCN
    ? cnbtn.addClass("clicked")
    : cnbtn.removeClass("clicked");
  lm6cf.defaultShowCN ? allChn.show(0) : allChn.hide(0);

  lm6base.find(".popheader, .popverbs").on("click", function (e) {
    content = $(this).closest(".at-link");
    btns = $(this)
      .closest(".tab-content")
      .siblings(".buttons")
      .find(".popup-button");
    var target = btns.eq(content.prevAll().length);
    target.trigger("click");
    e.stopPropagation();
  });
  lm6base.find(".proncodes").on("click", function (e) {
    let hwd = $(this).siblings(".hwd");
    let hyp = $(this).siblings(".hyphenation");
    let aa = hwd.html().trim();
    let bb = hyp.html().trim();
    if (aa.length && bb.length) {
      hwd.html(bb);
      hyp.html(aa);
    }
    e.stopPropagation();
  });
  lm6base.find(".wfwd").each(function () {
    let jump = $(this).text().trim();
    oNew = $("<a>", {
      href: outerjump.replace("kreplace", jump),
    });
    $(this).after(oNew);
    oNew.append($(this));
  });
  lm6base.find(".wswd").each(function (index) {
    const topicClass = "topic_" + ((index % 10) + 1); // 1-10循环
    $(this).addClass(topicClass);
  });

  //
  EudicTreat();
  function EudicTreat() {
    if (!lm6cf.eudicRemaster) return;
    if (!isEudicMobile) return;
    let z = lm6base.closest(".expBody").parent();
    z.find("#phondiv, #revBanner").eq(0).css("display", "none");
    remaster();
    function remaster() {
      z.find("#wordInfoHead").css("margin", "0 14px");
      z.find(".expBody > div").not("#NoteTop, #bubbleBox").css({
        "border-bottom": "1px solid hsla(0, 0%, 50%, 0.25)",
        margin: "0 6px",
      });
      z.find(".expBody > div > .expDiv").css({
        padding: "5px 8px",
        "margin-bottom": "15px",
      });
      let $expHead = $(".expBody > div > .expHead");
      $expHead.css({
        "border-bottom": "none",
        padding: "0",
        "background-color": "transparent",
      });
      $expHead.children(".eudicButton, .eudic_note_head").css({
        margin: "10px 10px",
      });
      $expHead.children(".eudicArrow").css({
        right: "10px",
      });
    }
    Promise.resolve().then(() =>
      observeCustomNoteAdded(() => {
        const $expHead = $("#expCustomNote .expHead");
        remaster();
        $expHead.find(".eudic_note_head > button").eq(0).css({
          margin: "0 20px 0 4px",
        });
      })
    );
    function observeCustomNoteAdded(callback) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          $(mutation.addedNodes).each(function () {
            var $node = $(this);
            if ($node.attr("id") === "customeNoteText") {
              callback();
              observer.disconnect();
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
  if (lm6base.hasClass("category")) {
    slidefull = $(
      '<div class="slider-container"><div class="slider"><div class="slider-track"></div><div class="slider-thumb"></div></div><div class="slider-value">0</div></div>'
    );
    lm6base.find(".topic_head").after(slidefull);
    const $slider = slidefull.find(".slider");
    const $thumb = slidefull.find(".slider-thumb");
    const $value = slidefull.find(".slider-value");
    const $track = slidefull.find(".slider-track");

    // 更新滑块位置和显示值
    function updateSlider(clientX) {
      const sliderRect = $slider[0].getBoundingClientRect();
      let position = (clientX - sliderRect.left) / sliderRect.width;

      // 限制在 0-1 范围内
      position = Math.max(0, Math.min(1, position));

      // 计算整数值 (0-3)
      const value = Math.round(position * 3);

      // 更新 UI
      const percent = (value / 3) * 100;
      $thumb.css("left", `${percent}%`);
      $track.css("width", `${percent}%`);
      $value.text(value);
      setConfig("defaultTopicClass", value);
      for (let i = 0; i <= 3; i++) {
        let thislevel = lm6base.find(`.level${i}`);
        i < value ? thislevel.hide() : thislevel.show();
      }
      return value;
    }

    // 鼠标事件
    $thumb.on("mousedown, touchstart", function (e) {
      isDragging = true;
      e.preventDefault();
    });
    $(document).on("mousemove", function (e) {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });
    $(document).on("touchmove", function (e) {
      if (!isDragging) return;
      updateSlider(e.originalEvent.touches[0].clientX);
    });
    slidefull.on("click", function (e) {
      updateSlider(e.clientX);
    });
    $(document).on("mouseup, touchend", function () {
      isDragging = false;
    });

    // 初始化
    left = $slider[0].getBoundingClientRect().left;
    right = $slider[0].getBoundingClientRect().right;
    updateSlider(((right - left) / 3) * lm6cf.defaultTopicClass + left);
  }
}

// Add click handlers for expandable elements
function setupExpandableHandlers() {
  console.log('DEBUG: Setting up expandable handlers');
  
  // Find all expandable elements and add click handlers
  document.addEventListener('click', function(event) {
    var expandable = event.target.closest('.expandable');
    if (expandable) {
      console.log('DEBUG: Expandable clicked:', expandable);
      
      var content = expandable.querySelector('.content');
      if (content) {
        console.log('DEBUG: Found content to toggle:', content);
        
        if (content.style.display === 'none' || content.style.display === '') {
          content.style.display = 'block';
          expandable.classList.add('opened');
          console.log('DEBUG: Expanded content');
        } else {
          content.style.display = 'none';
          expandable.classList.remove('opened');
          console.log('DEBUG: Collapsed content');
        }
        
        // Prevent event bubbling
        event.stopPropagation();
      }
    }
  });
}

$(main);
window.onload = function() {
  main();
  setupExpandableHandlers();
};
