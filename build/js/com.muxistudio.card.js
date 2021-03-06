// {"framework" : "Rax"}
/*! com.muxistudio.card, version 2.0.0-rc1, built time: Fri Oct 05 2018 23:16:39 GMT+0800 (China Standard Time) */
define("com.muxistudio.card", function(e) {
  !(function(e) {
    function t(a) {
      if (n[a]) return n[a].exports;
      var r = (n[a] = { i: a, l: !1, exports: {} });
      return e[a].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var n = {};
    (t.m = e),
      (t.c = n),
      (t.i = function(e) {
        return e;
      }),
      (t.d = function(e, n, a) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
          });
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "/"),
      t((t.s = 192));
  })([
    function(e, t, n) {
      (function(e) {
        !(function(t, n) {
          e.exports = n();
        })(0, function() {
          "use strict";
          function t() {
            return ba.apply(null, arguments);
          }
          function a(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function r(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function s(e) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          }
          function i(e) {
            return void 0 === e;
          }
          function o(e) {
            return (
              "number" == typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function d(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function u(e, t) {
            var n,
              a = [];
            for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
            return a;
          }
          function _(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function l(e, t) {
            for (var n in t) _(t, n) && (e[n] = t[n]);
            return (
              _(t, "toString") && (e.toString = t.toString),
              _(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function m(e, t, n, a) {
            return Dt(e, t, n, a, !0).utc();
          }
          function c() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1
            };
          }
          function f(e) {
            return null == e._pf && (e._pf = c()), e._pf;
          }
          function h(e) {
            if (null == e._isValid) {
              var t = f(e),
                n = Sa.call(t.parsedDateParts, function(e) {
                  return null != e;
                }),
                a =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && n));
              if (
                (e._strict &&
                  (a =
                    a &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return a;
              e._isValid = a;
            }
            return e._isValid;
          }
          function M(e) {
            var t = m(NaN);
            return null != e ? l(f(t), e) : (f(t).userInvalidated = !0), t;
          }
          function y(e, t) {
            var n, a, r;
            if (
              (i(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              i(t._i) || (e._i = t._i),
              i(t._f) || (e._f = t._f),
              i(t._l) || (e._l = t._l),
              i(t._strict) || (e._strict = t._strict),
              i(t._tzm) || (e._tzm = t._tzm),
              i(t._isUTC) || (e._isUTC = t._isUTC),
              i(t._offset) || (e._offset = t._offset),
              i(t._pf) || (e._pf = f(t)),
              i(t._locale) || (e._locale = t._locale),
              ja.length > 0)
            )
              for (n = 0; n < ja.length; n++)
                (a = ja[n]), (r = t[a]), i(r) || (e[a] = r);
            return e;
          }
          function p(e) {
            y(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === Ha && ((Ha = !0), t.updateOffset(this), (Ha = !1));
          }
          function L(e) {
            return e instanceof p || (null != e && null != e._isAMomentObject);
          }
          function Y(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function g(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = Y(t)), n;
          }
          function k(e, t, n) {
            var a,
              r = Math.min(e.length, t.length),
              s = Math.abs(e.length - t.length),
              i = 0;
            for (a = 0; a < r; a++)
              ((n && e[a] !== t[a]) || (!n && g(e[a]) !== g(t[a]))) && i++;
            return i + s;
          }
          function v(e) {
            !1 === t.suppressDeprecationWarnings &&
              "undefined" != typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function A(e, n) {
            var a = !0;
            return l(function() {
              if (
                (null != t.deprecationHandler && t.deprecationHandler(null, e),
                a)
              ) {
                for (var r, s = [], i = 0; i < arguments.length; i++) {
                  if (((r = ""), "object" == typeof arguments[i])) {
                    r += "\n[" + i + "] ";
                    for (var o in arguments[0])
                      r += o + ": " + arguments[0][o] + ", ";
                    r = r.slice(0, -2);
                  } else r = arguments[i];
                  s.push(r);
                }
                v(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(s).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (a = !1);
              }
              return n.apply(this, arguments);
            }, n);
          }
          function D(e, n) {
            null != t.deprecationHandler && t.deprecationHandler(e, n),
              xa[e] || (v(n), (xa[e] = !0));
          }
          function w(e) {
            return (
              e instanceof Function ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function T(e) {
            var t, n;
            for (n in e) (t = e[n]), w(t) ? (this[n] = t) : (this["_" + n] = t);
            (this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }
          function b(e, t) {
            var n,
              a = l({}, e);
            for (n in t)
              _(t, n) &&
                (r(e[n]) && r(t[n])
                  ? ((a[n] = {}), l(a[n], e[n]), l(a[n], t[n]))
                  : null != t[n] ? (a[n] = t[n]) : delete a[n]);
            for (n in e) _(e, n) && !_(t, n) && r(e[n]) && (a[n] = l({}, a[n]));
            return a;
          }
          function S(e) {
            null != e && this.set(e);
          }
          function j(e, t, n) {
            var a = this._calendar[e] || this._calendar.sameElse;
            return w(a) ? a.call(t, n) : a;
          }
          function H(e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n.replace(
                  /MMMM|MM|DD|dddd/g,
                  function(e) {
                    return e.slice(1);
                  }
                )),
                this._longDateFormat[e]);
          }
          function x() {
            return this._invalidDate;
          }
          function E(e) {
            return this._ordinal.replace("%d", e);
          }
          function O(e, t, n, a) {
            var r = this._relativeTime[n];
            return w(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
          }
          function C(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return w(n) ? n(t) : n.replace(/%s/i, t);
          }
          function P(e, t) {
            var n = e.toLowerCase();
            Ia[n] = Ia[n + "s"] = Ia[t] = e;
          }
          function W(e) {
            return "string" == typeof e ? Ia[e] || Ia[e.toLowerCase()] : void 0;
          }
          function I(e) {
            var t,
              n,
              a = {};
            for (n in e) _(e, n) && (t = W(n)) && (a[t] = e[n]);
            return a;
          }
          function F(e, t) {
            Fa[e] = t;
          }
          function B(e) {
            var t = [];
            for (var n in e) t.push({ unit: n, priority: Fa[n] });
            return (
              t.sort(function(e, t) {
                return e.priority - t.priority;
              }),
              t
            );
          }
          function N(e, t, n) {
            var a = "" + Math.abs(e),
              r = t - a.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, r))
                .toString()
                .substr(1) +
              a
            );
          }
          function J(e, t, n, a) {
            var r = a;
            "string" == typeof a &&
              (r = function() {
                return this[a]();
              }),
              e && (za[e] = r),
              t &&
                (za[t[0]] = function() {
                  return N(r.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (za[n] = function() {
                  return this.localeData().ordinal(r.apply(this, arguments), e);
                });
          }
          function z(e) {
            return e.match(/\[[\s\S]/)
              ? e.replace(/^\[|\]$/g, "")
              : e.replace(/\\/g, "");
          }
          function Q(e) {
            var t,
              n,
              a = e.match(Ba);
            for (t = 0, n = a.length; t < n; t++)
              za[a[t]] ? (a[t] = za[a[t]]) : (a[t] = z(a[t]));
            return function(t) {
              var r,
                s = "";
              for (r = 0; r < n; r++) s += w(a[r]) ? a[r].call(t, e) : a[r];
              return s;
            };
          }
          function R(e, t) {
            return e.isValid()
              ? ((t = U(t, e.localeData())), (Ja[t] = Ja[t] || Q(t)), Ja[t](e))
              : e.localeData().invalidDate();
          }
          function U(e, t) {
            function n(e) {
              return t.longDateFormat(e) || e;
            }
            var a = 5;
            for (Na.lastIndex = 0; a >= 0 && Na.test(e); )
              (e = e.replace(Na, n)), (Na.lastIndex = 0), (a -= 1);
            return e;
          }
          function G(e, t, n) {
            or[e] = w(t)
              ? t
              : function(e, a) {
                  return e && n ? n : t;
                };
          }
          function V(e, t) {
            return _(or, e) ? or[e](t._strict, t._locale) : new RegExp(Z(e));
          }
          function Z(e) {
            return q(
              e
                .replace("\\", "")
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
                  e,
                  t,
                  n,
                  a,
                  r
                ) {
                  return t || n || a || r;
                })
            );
          }
          function q(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          function K(e, t) {
            var n,
              a = t;
            for (
              "string" == typeof e && (e = [e]),
                o(t) &&
                  (a = function(e, n) {
                    n[t] = g(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              dr[e[n]] = a;
          }
          function X(e, t) {
            K(e, function(e, n, a, r) {
              (a._w = a._w || {}), t(e, a._w, a, r);
            });
          }
          function $(e, t, n) {
            null != t && _(dr, e) && dr[e](t, n._a, n, e);
          }
          function ee(e) {
            return te(e) ? 366 : 365;
          }
          function te(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          function ne() {
            return te(this.year());
          }
          function ae(e, n) {
            return function(a) {
              return null != a
                ? (se(this, e, a), t.updateOffset(this, n), this)
                : re(this, e);
            };
          }
          function re(e, t) {
            return e.isValid()
              ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
              : NaN;
          }
          function se(e, t, n) {
            e.isValid() &&
              !isNaN(n) &&
              ("FullYear" === t &&
              te(e.year()) &&
              1 === e.month() &&
              29 === e.date()
                ? e._d["set" + (e._isUTC ? "UTC" : "") + t](
                    n,
                    e.month(),
                    ue(n, e.month())
                  )
                : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
          }
          function ie(e) {
            return (e = W(e)), w(this[e]) ? this[e]() : this;
          }
          function oe(e, t) {
            if ("object" == typeof e) {
              e = I(e);
              for (var n = B(e), a = 0; a < n.length; a++)
                this[n[a].unit](e[n[a].unit]);
            } else if (((e = W(e)), w(this[e]))) return this[e](t);
            return this;
          }
          function de(e, t) {
            return (e % t + t) % t;
          }
          function ue(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n = de(t, 12);
            return (
              (e += (t - n) / 12),
              1 === n ? (te(e) ? 29 : 28) : 31 - (n % 7) % 2
            );
          }
          function _e(e, t) {
            return e
              ? a(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || Yr).test(t)
                      ? "format"
                      : "standalone"
                  ][e.month()]
              : a(this._months) ? this._months : this._months.standalone;
          }
          function le(e, t) {
            return e
              ? a(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[Yr.test(t) ? "format" : "standalone"][
                    e.month()
                  ]
              : a(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
          }
          function me(e, t, n) {
            var a,
              r,
              s,
              i = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  a = 0;
                a < 12;
                ++a
              )
                (s = m([2e3, a])),
                  (this._shortMonthsParse[a] = this.monthsShort(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[a] = this.months(
                    s,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? ((r = pr.call(this._shortMonthsParse, i)),
                  -1 !== r ? r : null)
                : ((r = pr.call(this._longMonthsParse, i)), -1 !== r ? r : null)
              : "MMM" === t
                ? -1 !== (r = pr.call(this._shortMonthsParse, i))
                  ? r
                  : ((r = pr.call(this._longMonthsParse, i)),
                    -1 !== r ? r : null)
                : -1 !== (r = pr.call(this._longMonthsParse, i))
                  ? r
                  : ((r = pr.call(this._shortMonthsParse, i)),
                    -1 !== r ? r : null);
          }
          function ce(e, t, n) {
            var a, r, s;
            if (this._monthsParseExact) return me.call(this, e, t, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                a = 0;
              a < 12;
              a++
            ) {
              if (
                ((r = m([2e3, a])),
                n &&
                  !this._longMonthsParse[a] &&
                  ((this._longMonthsParse[a] = new RegExp(
                    "^" + this.months(r, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[a] = new RegExp(
                    "^" + this.monthsShort(r, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[a] ||
                  ((s =
                    "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
                  (this._monthsParse[a] = new RegExp(s.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[a].test(e))
              )
                return a;
              if (n && "MMM" === t && this._shortMonthsParse[a].test(e))
                return a;
              if (!n && this._monthsParse[a].test(e)) return a;
            }
          }
          function fe(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
              if (/^\d+$/.test(t)) t = g(t);
              else if (((t = e.localeData().monthsParse(t)), !o(t))) return e;
            return (
              (n = Math.min(e.date(), ue(e.year(), t))),
              e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
              e
            );
          }
          function he(e) {
            return null != e
              ? (fe(this, e), t.updateOffset(this, !0), this)
              : re(this, "Month");
          }
          function Me() {
            return ue(this.year(), this.month());
          }
          function ye(e) {
            return this._monthsParseExact
              ? (_(this, "_monthsRegex") || Le.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = vr),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }
          function pe(e) {
            return this._monthsParseExact
              ? (_(this, "_monthsRegex") || Le.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (_(this, "_monthsRegex") || (this._monthsRegex = Ar),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }
          function Le() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a = [],
              r = [],
              s = [];
            for (t = 0; t < 12; t++)
              (n = m([2e3, t])),
                a.push(this.monthsShort(n, "")),
                r.push(this.months(n, "")),
                s.push(this.months(n, "")),
                s.push(this.monthsShort(n, ""));
            for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++)
              (a[t] = q(a[t])), (r[t] = q(r[t]));
            for (t = 0; t < 24; t++) s[t] = q(s[t]);
            (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
              ));
          }
          function Ye(e, t, n, a, r, s, i) {
            var o = new Date(e, t, n, a, r, s, i);
            return (
              e < 100 &&
                e >= 0 &&
                isFinite(o.getFullYear()) &&
                o.setFullYear(e),
              o
            );
          }
          function ge(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return (
              e < 100 &&
                e >= 0 &&
                isFinite(t.getUTCFullYear()) &&
                t.setUTCFullYear(e),
              t
            );
          }
          function ke(e, t, n) {
            var a = 7 + t - n;
            return -(7 + ge(e, 0, a).getUTCDay() - t) % 7 + a - 1;
          }
          function ve(e, t, n, a, r) {
            var s,
              i,
              o = (7 + n - a) % 7,
              d = ke(e, a, r),
              u = 1 + 7 * (t - 1) + o + d;
            return (
              u <= 0
                ? ((s = e - 1), (i = ee(s) + u))
                : u > ee(e)
                  ? ((s = e + 1), (i = u - ee(e)))
                  : ((s = e), (i = u)),
              { year: s, dayOfYear: i }
            );
          }
          function Ae(e, t, n) {
            var a,
              r,
              s = ke(e.year(), t, n),
              i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return (
              i < 1
                ? ((r = e.year() - 1), (a = i + De(r, t, n)))
                : i > De(e.year(), t, n)
                  ? ((a = i - De(e.year(), t, n)), (r = e.year() + 1))
                  : ((r = e.year()), (a = i)),
              { week: a, year: r }
            );
          }
          function De(e, t, n) {
            var a = ke(e, t, n),
              r = ke(e + 1, t, n);
            return (ee(e) - a + r) / 7;
          }
          function we(e) {
            return Ae(e, this._week.dow, this._week.doy).week;
          }
          function Te() {
            return this._week.dow;
          }
          function be() {
            return this._week.doy;
          }
          function Se(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function je(e) {
            var t = Ae(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function He(e, t) {
            return "string" != typeof e
              ? e
              : isNaN(e)
                ? ((e = t.weekdaysParse(e)), "number" == typeof e ? e : null)
                : parseInt(e, 10);
          }
          function xe(e, t) {
            return "string" == typeof e
              ? t.weekdaysParse(e) % 7 || 7
              : isNaN(e) ? null : e;
          }
          function Ee(e, t) {
            return e
              ? a(this._weekdays)
                ? this._weekdays[e.day()]
                : this._weekdays[
                    this._weekdays.isFormat.test(t) ? "format" : "standalone"
                  ][e.day()]
              : a(this._weekdays) ? this._weekdays : this._weekdays.standalone;
          }
          function Oe(e) {
            return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
          }
          function Ce(e) {
            return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
          }
          function Pe(e, t, n) {
            var a,
              r,
              s,
              i = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  a = 0;
                a < 7;
                ++a
              )
                (s = m([2e3, 1]).day(a)),
                  (this._minWeekdaysParse[a] = this.weekdaysMin(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[a] = this.weekdaysShort(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[a] = this.weekdays(
                    s,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? ((r = pr.call(this._weekdaysParse, i)), -1 !== r ? r : null)
                : "ddd" === t
                  ? ((r = pr.call(this._shortWeekdaysParse, i)),
                    -1 !== r ? r : null)
                  : ((r = pr.call(this._minWeekdaysParse, i)),
                    -1 !== r ? r : null)
              : "dddd" === t
                ? -1 !== (r = pr.call(this._weekdaysParse, i))
                  ? r
                  : -1 !== (r = pr.call(this._shortWeekdaysParse, i))
                    ? r
                    : ((r = pr.call(this._minWeekdaysParse, i)),
                      -1 !== r ? r : null)
                : "ddd" === t
                  ? -1 !== (r = pr.call(this._shortWeekdaysParse, i))
                    ? r
                    : -1 !== (r = pr.call(this._weekdaysParse, i))
                      ? r
                      : ((r = pr.call(this._minWeekdaysParse, i)),
                        -1 !== r ? r : null)
                  : -1 !== (r = pr.call(this._minWeekdaysParse, i))
                    ? r
                    : -1 !== (r = pr.call(this._weekdaysParse, i))
                      ? r
                      : ((r = pr.call(this._shortWeekdaysParse, i)),
                        -1 !== r ? r : null);
          }
          function We(e, t, n) {
            var a, r, s;
            if (this._weekdaysParseExact) return Pe.call(this, e, t, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                a = 0;
              a < 7;
              a++
            ) {
              if (
                ((r = m([2e3, 1]).day(a)),
                n &&
                  !this._fullWeekdaysParse[a] &&
                  ((this._fullWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdays(r, "").replace(".", ".?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdaysShort(r, "").replace(".", ".?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdaysMin(r, "").replace(".", ".?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[a] ||
                  ((s =
                    "^" +
                    this.weekdays(r, "") +
                    "|^" +
                    this.weekdaysShort(r, "") +
                    "|^" +
                    this.weekdaysMin(r, "")),
                  (this._weekdaysParse[a] = new RegExp(
                    s.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
              )
                return a;
              if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e))
                return a;
              if (n && "dd" === t && this._minWeekdaysParse[a].test(e))
                return a;
              if (!n && this._weekdaysParse[a].test(e)) return a;
            }
          }
          function Ie(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e
              ? ((e = He(e, this.localeData())), this.add(e - t, "d"))
              : t;
          }
          function Fe(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }
          function Be(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = xe(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
          }
          function Ne(e) {
            return this._weekdaysParseExact
              ? (_(this, "_weekdaysRegex") || Qe.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = Sr),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }
          function Je(e) {
            return this._weekdaysParseExact
              ? (_(this, "_weekdaysRegex") || Qe.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (_(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = jr),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }
          function ze(e) {
            return this._weekdaysParseExact
              ? (_(this, "_weekdaysRegex") || Qe.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Hr),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }
          function Qe() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a,
              r,
              s,
              i = [],
              o = [],
              d = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = m([2e3, 1]).day(t)),
                (a = this.weekdaysMin(n, "")),
                (r = this.weekdaysShort(n, "")),
                (s = this.weekdays(n, "")),
                i.push(a),
                o.push(r),
                d.push(s),
                u.push(a),
                u.push(r),
                u.push(s);
            for (i.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++)
              (o[t] = q(o[t])), (d[t] = q(d[t])), (u[t] = q(u[t]));
            (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + d.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              ));
          }
          function Re() {
            return this.hours() % 12 || 12;
          }
          function Ue() {
            return this.hours() || 24;
          }
          function Ge(e, t) {
            J(e, 0, 0, function() {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function Ve(e, t) {
            return t._meridiemParse;
          }
          function Ze(e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }
          function qe(e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }
          function Ke(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function Xe(e) {
            for (var t, n, a, r, s = 0; s < e.length; ) {
              for (
                r = Ke(e[s]).split("-"),
                  t = r.length,
                  n = Ke(e[s + 1]),
                  n = n ? n.split("-") : null;
                t > 0;

              ) {
                if ((a = $e(r.slice(0, t).join("-")))) return a;
                if (n && n.length >= t && k(r, n, !0) >= t - 1) break;
                t--;
              }
              s++;
            }
            return xr;
          }
          function $e(t) {
            var a = null;
            if (!Pr[t] && void 0 !== e && e && e.exports)
              try {
                a = xr._abbr;
                n(167)("./" + t), et(a);
              } catch (e) {}
            return Pr[t];
          }
          function et(e, t) {
            var n;
            return (
              e &&
                ((n = i(t) ? at(e) : tt(e, t)),
                n
                  ? (xr = n)
                  : "undefined" != typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              xr._abbr
            );
          }
          function tt(e, t) {
            if (null !== t) {
              var n,
                a = Cr;
              if (((t.abbr = e), null != Pr[e]))
                D(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (a = Pr[e]._config);
              else if (null != t.parentLocale)
                if (null != Pr[t.parentLocale]) a = Pr[t.parentLocale]._config;
                else {
                  if (null == (n = $e(t.parentLocale)))
                    return (
                      Wr[t.parentLocale] || (Wr[t.parentLocale] = []),
                      Wr[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  a = n._config;
                }
              return (
                (Pr[e] = new S(b(a, t))),
                Wr[e] &&
                  Wr[e].forEach(function(e) {
                    tt(e.name, e.config);
                  }),
                et(e),
                Pr[e]
              );
            }
            return delete Pr[e], null;
          }
          function nt(e, t) {
            if (null != t) {
              var n,
                a,
                r = Cr;
              (a = $e(e)),
                null != a && (r = a._config),
                (t = b(r, t)),
                (n = new S(t)),
                (n.parentLocale = Pr[e]),
                (Pr[e] = n),
                et(e);
            } else null != Pr[e] && (null != Pr[e].parentLocale ? (Pr[e] = Pr[e].parentLocale) : null != Pr[e] && delete Pr[e]);
            return Pr[e];
          }
          function at(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return xr;
            if (!a(e)) {
              if ((t = $e(e))) return t;
              e = [e];
            }
            return Xe(e);
          }
          function rt() {
            return Ea(Pr);
          }
          function st(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === f(e).overflow &&
                ((t =
                  n[_r] < 0 || n[_r] > 11
                    ? _r
                    : n[lr] < 1 || n[lr] > ue(n[ur], n[_r])
                      ? lr
                      : n[mr] < 0 ||
                        n[mr] > 24 ||
                        (24 === n[mr] &&
                          (0 !== n[cr] || 0 !== n[fr] || 0 !== n[hr]))
                        ? mr
                        : n[cr] < 0 || n[cr] > 59
                          ? cr
                          : n[fr] < 0 || n[fr] > 59
                            ? fr
                            : n[hr] < 0 || n[hr] > 999 ? hr : -1),
                f(e)._overflowDayOfYear && (t < ur || t > lr) && (t = lr),
                f(e)._overflowWeeks && -1 === t && (t = Mr),
                f(e)._overflowWeekday && -1 === t && (t = yr),
                (f(e).overflow = t)),
              e
            );
          }
          function it(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function ot(e) {
            var n = new Date(t.now());
            return e._useUTC
              ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
              : [n.getFullYear(), n.getMonth(), n.getDate()];
          }
          function dt(e) {
            var t,
              n,
              a,
              r,
              s,
              i = [];
            if (!e._d) {
              for (
                a = ot(e),
                  e._w && null == e._a[lr] && null == e._a[_r] && ut(e),
                  null != e._dayOfYear &&
                    ((s = it(e._a[ur], a[ur])),
                    (e._dayOfYear > ee(s) || 0 === e._dayOfYear) &&
                      (f(e)._overflowDayOfYear = !0),
                    (n = ge(s, 0, e._dayOfYear)),
                    (e._a[_r] = n.getUTCMonth()),
                    (e._a[lr] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = i[t] = a[t];
              for (; t < 7; t++)
                e._a[t] = i[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[mr] &&
                0 === e._a[cr] &&
                0 === e._a[fr] &&
                0 === e._a[hr] &&
                ((e._nextDay = !0), (e._a[mr] = 0)),
                (e._d = (e._useUTC ? ge : Ye).apply(null, i)),
                (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[mr] = 24),
                e._w &&
                  void 0 !== e._w.d &&
                  e._w.d !== r &&
                  (f(e).weekdayMismatch = !0);
            }
          }
          function ut(e) {
            var t, n, a, r, s, i, o, d;
            if (((t = e._w), null != t.GG || null != t.W || null != t.E))
              (s = 1),
                (i = 4),
                (n = it(t.GG, e._a[ur], Ae(wt(), 1, 4).year)),
                (a = it(t.W, 1)),
                ((r = it(t.E, 1)) < 1 || r > 7) && (d = !0);
            else {
              (s = e._locale._week.dow), (i = e._locale._week.doy);
              var u = Ae(wt(), s, i);
              (n = it(t.gg, e._a[ur], u.year)),
                (a = it(t.w, u.week)),
                null != t.d
                  ? ((r = t.d) < 0 || r > 6) && (d = !0)
                  : null != t.e
                    ? ((r = t.e + s), (t.e < 0 || t.e > 6) && (d = !0))
                    : (r = s);
            }
            a < 1 || a > De(n, s, i)
              ? (f(e)._overflowWeeks = !0)
              : null != d
                ? (f(e)._overflowWeekday = !0)
                : ((o = ve(n, a, r, s, i)),
                  (e._a[ur] = o.year),
                  (e._dayOfYear = o.dayOfYear));
          }
          function _t(e) {
            var t,
              n,
              a,
              r,
              s,
              i,
              o = e._i,
              d = Ir.exec(o) || Fr.exec(o);
            if (d) {
              for (f(e).iso = !0, t = 0, n = Nr.length; t < n; t++)
                if (Nr[t][1].exec(d[1])) {
                  (r = Nr[t][0]), (a = !1 !== Nr[t][2]);
                  break;
                }
              if (null == r) return void (e._isValid = !1);
              if (d[3]) {
                for (t = 0, n = Jr.length; t < n; t++)
                  if (Jr[t][1].exec(d[3])) {
                    s = (d[2] || " ") + Jr[t][0];
                    break;
                  }
                if (null == s) return void (e._isValid = !1);
              }
              if (!a && null != s) return void (e._isValid = !1);
              if (d[4]) {
                if (!Br.exec(d[4])) return void (e._isValid = !1);
                i = "Z";
              }
              (e._f = r + (s || "") + (i || "")), pt(e);
            } else e._isValid = !1;
          }
          function lt(e, t, n, a, r, s) {
            var i = [
              mt(e),
              kr.indexOf(t),
              parseInt(n, 10),
              parseInt(a, 10),
              parseInt(r, 10)
            ];
            return s && i.push(parseInt(s, 10)), i;
          }
          function mt(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          function ct(e) {
            return e
              .replace(/\([^)]*\)|[\n\t]/g, " ")
              .replace(/(\s\s+)/g, " ")
              .trim();
          }
          function ft(e, t, n) {
            if (e) {
              if (Tr.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay())
                return (f(n).weekdayMismatch = !0), (n._isValid = !1), !1;
            }
            return !0;
          }
          function ht(e, t, n) {
            if (e) return Rr[e];
            if (t) return 0;
            var a = parseInt(n, 10),
              r = a % 100;
            return (a - r) / 100 * 60 + r;
          }
          function Mt(e) {
            var t = Qr.exec(ct(e._i));
            if (t) {
              var n = lt(t[4], t[3], t[2], t[5], t[6], t[7]);
              if (!ft(t[1], n, e)) return;
              (e._a = n),
                (e._tzm = ht(t[8], t[9], t[10])),
                (e._d = ge.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (f(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function yt(e) {
            var n = zr.exec(e._i);
            if (null !== n) return void (e._d = new Date(+n[1]));
            _t(e),
              !1 === e._isValid &&
                (delete e._isValid,
                Mt(e),
                !1 === e._isValid &&
                  (delete e._isValid, t.createFromInputFallback(e)));
          }
          function pt(e) {
            if (e._f === t.ISO_8601) return void _t(e);
            if (e._f === t.RFC_2822) return void Mt(e);
            (e._a = []), (f(e).empty = !0);
            var n,
              a,
              r,
              s,
              i,
              o = "" + e._i,
              d = o.length,
              u = 0;
            for (
              r = U(e._f, e._locale).match(Ba) || [], n = 0;
              n < r.length;
              n++
            )
              (s = r[n]),
                (a = (o.match(V(s, e)) || [])[0]),
                a &&
                  ((i = o.substr(0, o.indexOf(a))),
                  i.length > 0 && f(e).unusedInput.push(i),
                  (o = o.slice(o.indexOf(a) + a.length)),
                  (u += a.length)),
                za[s]
                  ? (a ? (f(e).empty = !1) : f(e).unusedTokens.push(s),
                    $(s, a, e))
                  : e._strict && !a && f(e).unusedTokens.push(s);
            (f(e).charsLeftOver = d - u),
              o.length > 0 && f(e).unusedInput.push(o),
              e._a[mr] <= 12 &&
                !0 === f(e).bigHour &&
                e._a[mr] > 0 &&
                (f(e).bigHour = void 0),
              (f(e).parsedDateParts = e._a.slice(0)),
              (f(e).meridiem = e._meridiem),
              (e._a[mr] = Lt(e._locale, e._a[mr], e._meridiem)),
              dt(e),
              st(e);
          }
          function Lt(e, t, n) {
            var a;
            return null == n
              ? t
              : null != e.meridiemHour
                ? e.meridiemHour(t, n)
                : null != e.isPM
                  ? ((a = e.isPM(n)),
                    a && t < 12 && (t += 12),
                    a || 12 !== t || (t = 0),
                    t)
                  : t;
          }
          function Yt(e) {
            var t, n, a, r, s;
            if (0 === e._f.length)
              return (f(e).invalidFormat = !0), void (e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++)
              (s = 0),
                (t = y({}, e)),
                null != e._useUTC && (t._useUTC = e._useUTC),
                (t._f = e._f[r]),
                pt(t),
                h(t) &&
                  ((s += f(t).charsLeftOver),
                  (s += 10 * f(t).unusedTokens.length),
                  (f(t).score = s),
                  (null == a || s < a) && ((a = s), (n = t)));
            l(e, n || t);
          }
          function gt(e) {
            if (!e._d) {
              var t = I(e._i);
              (e._a = u(
                [
                  t.year,
                  t.month,
                  t.day || t.date,
                  t.hour,
                  t.minute,
                  t.second,
                  t.millisecond
                ],
                function(e) {
                  return e && parseInt(e, 10);
                }
              )),
                dt(e);
            }
          }
          function kt(e) {
            var t = new p(st(vt(e)));
            return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
          }
          function vt(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || at(e._l)),
              null === t || (void 0 === n && "" === t)
                ? M({ nullInput: !0 })
                : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                  L(t)
                    ? new p(st(t))
                    : (d(t) ? (e._d = t) : a(n) ? Yt(e) : n ? pt(e) : At(e),
                      h(e) || (e._d = null),
                      e))
            );
          }
          function At(e) {
            var n = e._i;
            i(n)
              ? (e._d = new Date(t.now()))
              : d(n)
                ? (e._d = new Date(n.valueOf()))
                : "string" == typeof n
                  ? yt(e)
                  : a(n)
                    ? ((e._a = u(n.slice(0), function(e) {
                        return parseInt(e, 10);
                      })),
                      dt(e))
                    : r(n)
                      ? gt(e)
                      : o(n)
                        ? (e._d = new Date(n))
                        : t.createFromInputFallback(e);
          }
          function Dt(e, t, n, i, o) {
            var d = {};
            return (
              (!0 !== n && !1 !== n) || ((i = n), (n = void 0)),
              ((r(e) && s(e)) || (a(e) && 0 === e.length)) && (e = void 0),
              (d._isAMomentObject = !0),
              (d._useUTC = d._isUTC = o),
              (d._l = n),
              (d._i = e),
              (d._f = t),
              (d._strict = i),
              kt(d)
            );
          }
          function wt(e, t, n, a) {
            return Dt(e, t, n, a, !1);
          }
          function Tt(e, t) {
            var n, r;
            if ((1 === t.length && a(t[0]) && (t = t[0]), !t.length))
              return wt();
            for (n = t[0], r = 1; r < t.length; ++r)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          }
          function bt() {
            return Tt("isBefore", [].slice.call(arguments, 0));
          }
          function St() {
            return Tt("isAfter", [].slice.call(arguments, 0));
          }
          function jt(e) {
            for (var t in e)
              if (-1 === pr.call(Zr, t) || (null != e[t] && isNaN(e[t])))
                return !1;
            for (var n = !1, a = 0; a < Zr.length; ++a)
              if (e[Zr[a]]) {
                if (n) return !1;
                parseFloat(e[Zr[a]]) !== g(e[Zr[a]]) && (n = !0);
              }
            return !0;
          }
          function Ht() {
            return this._isValid;
          }
          function xt() {
            return Kt(NaN);
          }
          function Et(e) {
            var t = I(e),
              n = t.year || 0,
              a = t.quarter || 0,
              r = t.month || 0,
              s = t.week || 0,
              i = t.day || 0,
              o = t.hour || 0,
              d = t.minute || 0,
              u = t.second || 0,
              _ = t.millisecond || 0;
            (this._isValid = jt(t)),
              (this._milliseconds = +_ + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60),
              (this._days = +i + 7 * s),
              (this._months = +r + 3 * a + 12 * n),
              (this._data = {}),
              (this._locale = at()),
              this._bubble();
          }
          function Ot(e) {
            return e instanceof Et;
          }
          function Ct(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function Pt(e, t) {
            J(e, 0, 0, function() {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
              );
            });
          }
          function Wt(e, t) {
            var n = (t || "").match(e);
            if (null === n) return null;
            var a = n[n.length - 1] || [],
              r = (a + "").match(qr) || ["-", 0, 0],
              s = 60 * r[1] + g(r[2]);
            return 0 === s ? 0 : "+" === r[0] ? s : -s;
          }
          function It(e, n) {
            var a, r;
            return n._isUTC
              ? ((a = n.clone()),
                (r =
                  (L(e) || d(e) ? e.valueOf() : wt(e).valueOf()) - a.valueOf()),
                a._d.setTime(a._d.valueOf() + r),
                t.updateOffset(a, !1),
                a)
              : wt(e).local();
          }
          function Ft(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
          }
          function Bt(e, n, a) {
            var r,
              s = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" == typeof e) {
                if (null === (e = Wt(rr, e))) return this;
              } else Math.abs(e) < 16 && !a && (e *= 60);
              return (
                !this._isUTC && n && (r = Ft(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != r && this.add(r, "m"),
                s !== e &&
                  (!n || this._changeInProgress
                    ? nn(this, Kt(e - s, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      t.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? s : Ft(this);
          }
          function Nt(e, t) {
            return null != e
              ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
              : -this.utcOffset();
          }
          function Jt(e) {
            return this.utcOffset(0, e);
          }
          function zt(e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(Ft(this), "m")),
              this
            );
          }
          function Qt() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var e = Wt(ar, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
          }
          function Rt(e) {
            return (
              !!this.isValid() &&
              ((e = e ? wt(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 == 0)
            );
          }
          function Ut() {
            return (
              this.utcOffset() >
                this.clone()
                  .month(0)
                  .utcOffset() ||
              this.utcOffset() >
                this.clone()
                  .month(5)
                  .utcOffset()
            );
          }
          function Gt() {
            if (!i(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if ((y(e, this), (e = vt(e)), e._a)) {
              var t = e._isUTC ? m(e._a) : wt(e._a);
              this._isDSTShifted = this.isValid() && k(e._a, t.toArray()) > 0;
            } else this._isDSTShifted = !1;
            return this._isDSTShifted;
          }
          function Vt() {
            return !!this.isValid() && !this._isUTC;
          }
          function Zt() {
            return !!this.isValid() && this._isUTC;
          }
          function qt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset);
          }
          function Kt(e, t) {
            var n,
              a,
              r,
              s = e,
              i = null;
            return (
              Ot(e)
                ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
                : o(e)
                  ? ((s = {}), t ? (s[t] = e) : (s.milliseconds = e))
                  : (i = Kr.exec(e))
                    ? ((n = "-" === i[1] ? -1 : 1),
                      (s = {
                        y: 0,
                        d: g(i[lr]) * n,
                        h: g(i[mr]) * n,
                        m: g(i[cr]) * n,
                        s: g(i[fr]) * n,
                        ms: g(Ct(1e3 * i[hr])) * n
                      }))
                    : (i = Xr.exec(e))
                      ? ((n = "-" === i[1] ? -1 : (i[1], 1)),
                        (s = {
                          y: Xt(i[2], n),
                          M: Xt(i[3], n),
                          w: Xt(i[4], n),
                          d: Xt(i[5], n),
                          h: Xt(i[6], n),
                          m: Xt(i[7], n),
                          s: Xt(i[8], n)
                        }))
                      : null == s
                        ? (s = {})
                        : "object" == typeof s &&
                          ("from" in s || "to" in s) &&
                          ((r = en(wt(s.from), wt(s.to))),
                          (s = {}),
                          (s.ms = r.milliseconds),
                          (s.M = r.months)),
              (a = new Et(s)),
              Ot(e) && _(e, "_locale") && (a._locale = e._locale),
              a
            );
          }
          function Xt(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function $t(e, t) {
            var n = { milliseconds: 0, months: 0 };
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e
                .clone()
                .add(n.months, "M")
                .isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function en(e, t) {
            var n;
            return e.isValid() && t.isValid()
              ? ((t = It(t, e)),
                e.isBefore(t)
                  ? (n = $t(e, t))
                  : ((n = $t(t, e)),
                    (n.milliseconds = -n.milliseconds),
                    (n.months = -n.months)),
                n)
              : { milliseconds: 0, months: 0 };
          }
          function tn(e, t) {
            return function(n, a) {
              var r, s;
              return (
                null === a ||
                  isNaN(+a) ||
                  (D(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (s = n),
                  (n = a),
                  (a = s)),
                (n = "string" == typeof n ? +n : n),
                (r = Kt(n, a)),
                nn(this, r, e),
                this
              );
            };
          }
          function nn(e, n, a, r) {
            var s = n._milliseconds,
              i = Ct(n._days),
              o = Ct(n._months);
            e.isValid() &&
              ((r = null == r || r),
              o && fe(e, re(e, "Month") + o * a),
              i && se(e, "Date", re(e, "Date") + i * a),
              s && e._d.setTime(e._d.valueOf() + s * a),
              r && t.updateOffset(e, i || o));
          }
          function an(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
                ? "lastWeek"
                : n < 0
                  ? "lastDay"
                  : n < 1
                    ? "sameDay"
                    : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
          }
          function rn(e, n) {
            var a = e || wt(),
              r = It(a, this).startOf("day"),
              s = t.calendarFormat(this, r) || "sameElse",
              i = n && (w(n[s]) ? n[s].call(this, a) : n[s]);
            return this.format(i || this.localeData().calendar(s, this, wt(a)));
          }
          function sn() {
            return new p(this);
          }
          function on(e, t) {
            var n = L(e) ? e : wt(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ((t = W(i(t) ? "millisecond" : t)),
              "millisecond" === t
                ? this.valueOf() > n.valueOf()
                : n.valueOf() <
                  this.clone()
                    .startOf(t)
                    .valueOf())
            );
          }
          function dn(e, t) {
            var n = L(e) ? e : wt(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ((t = W(i(t) ? "millisecond" : t)),
              "millisecond" === t
                ? this.valueOf() < n.valueOf()
                : this.clone()
                    .endOf(t)
                    .valueOf() < n.valueOf())
            );
          }
          function un(e, t, n, a) {
            return (
              (a = a || "()"),
              ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) &&
                (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            );
          }
          function _n(e, t) {
            var n,
              a = L(e) ? e : wt(e);
            return (
              !(!this.isValid() || !a.isValid()) &&
              ((t = W(t || "millisecond")),
              "millisecond" === t
                ? this.valueOf() === a.valueOf()
                : ((n = a.valueOf()),
                  this.clone()
                    .startOf(t)
                    .valueOf() <= n &&
                    n <=
                      this.clone()
                        .endOf(t)
                        .valueOf()))
            );
          }
          function ln(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }
          function mn(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }
          function cn(e, t, n) {
            var a, r, s;
            if (!this.isValid()) return NaN;
            if (((a = It(e, this)), !a.isValid())) return NaN;
            switch (((r = 6e4 * (a.utcOffset() - this.utcOffset())),
            (t = W(t)))) {
              case "year":
                s = fn(this, a) / 12;
                break;
              case "month":
                s = fn(this, a);
                break;
              case "quarter":
                s = fn(this, a) / 3;
                break;
              case "second":
                s = (this - a) / 1e3;
                break;
              case "minute":
                s = (this - a) / 6e4;
                break;
              case "hour":
                s = (this - a) / 36e5;
                break;
              case "day":
                s = (this - a - r) / 864e5;
                break;
              case "week":
                s = (this - a - r) / 6048e5;
                break;
              default:
                s = this - a;
            }
            return n ? s : Y(s);
          }
          function fn(e, t) {
            var n,
              a,
              r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              s = e.clone().add(r, "months");
            return (
              t - s < 0
                ? ((n = e.clone().add(r - 1, "months")),
                  (a = (t - s) / (s - n)))
                : ((n = e.clone().add(r + 1, "months")),
                  (a = (t - s) / (n - s))),
              -(r + a) || 0
            );
          }
          function hn() {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }
          function Mn(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? R(
                  n,
                  t
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : w(Date.prototype.toISOString)
                ? t
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace("Z", R(n, "Z"))
                : R(
                    n,
                    t
                      ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  );
          }
          function yn() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
              t = "";
            this.isLocal() ||
              ((e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
              (t = "Z"));
            var n = "[" + e + '("]',
              a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
              r = t + '[")]';
            return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r);
          }
          function pn(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var n = R(this, e);
            return this.localeData().postformat(n);
          }
          function Ln(e, t) {
            return this.isValid() && ((L(e) && e.isValid()) || wt(e).isValid())
              ? Kt({ to: this, from: e })
                  .locale(this.locale())
                  .humanize(!t)
              : this.localeData().invalidDate();
          }
          function Yn(e) {
            return this.from(wt(), e);
          }
          function gn(e, t) {
            return this.isValid() && ((L(e) && e.isValid()) || wt(e).isValid())
              ? Kt({ from: this, to: e })
                  .locale(this.locale())
                  .humanize(!t)
              : this.localeData().invalidDate();
          }
          function kn(e) {
            return this.to(wt(), e);
          }
          function vn(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : ((t = at(e)), null != t && (this._locale = t), this);
          }
          function An() {
            return this._locale;
          }
          function Dn(e) {
            switch ((e = W(e))) {
              case "year":
                this.month(0);
              case "quarter":
              case "month":
                this.date(1);
              case "week":
              case "isoWeek":
              case "day":
              case "date":
                this.hours(0);
              case "hour":
                this.minutes(0);
              case "minute":
                this.seconds(0);
              case "second":
                this.milliseconds(0);
            }
            return (
              "week" === e && this.weekday(0),
              "isoWeek" === e && this.isoWeekday(1),
              "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
              this
            );
          }
          function wn(e) {
            return void 0 === (e = W(e)) || "millisecond" === e
              ? this
              : ("date" === e && (e = "day"),
                this.startOf(e)
                  .add(1, "isoWeek" === e ? "week" : e)
                  .subtract(1, "ms"));
          }
          function Tn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }
          function bn() {
            return Math.floor(this.valueOf() / 1e3);
          }
          function Sn() {
            return new Date(this.valueOf());
          }
          function jn() {
            var e = this;
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond()
            ];
          }
          function Hn() {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds()
            };
          }
          function xn() {
            return this.isValid() ? this.toISOString() : null;
          }
          function En() {
            return h(this);
          }
          function On() {
            return l({}, f(this));
          }
          function Cn() {
            return f(this).overflow;
          }
          function Pn() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict
            };
          }
          function Wn(e, t) {
            J(0, [e, e.length], 0, t);
          }
          function In(e) {
            return Jn.call(
              this,
              e,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }
          function Fn(e) {
            return Jn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function Bn() {
            return De(this.year(), 1, 4);
          }
          function Nn() {
            var e = this.localeData()._week;
            return De(this.year(), e.dow, e.doy);
          }
          function Jn(e, t, n, a, r) {
            var s;
            return null == e
              ? Ae(this, a, r).year
              : ((s = De(e, a, r)),
                t > s && (t = s),
                zn.call(this, e, t, n, a, r));
          }
          function zn(e, t, n, a, r) {
            var s = ve(e, t, n, a, r),
              i = ge(s.year, 0, s.dayOfYear);
            return (
              this.year(i.getUTCFullYear()),
              this.month(i.getUTCMonth()),
              this.date(i.getUTCDate()),
              this
            );
          }
          function Qn(e) {
            return null == e
              ? Math.ceil((this.month() + 1) / 3)
              : this.month(3 * (e - 1) + this.month() % 3);
          }
          function Rn(e) {
            var t =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == e ? t : this.add(e - t, "d");
          }
          function Un(e, t) {
            t[hr] = g(1e3 * ("0." + e));
          }
          function Gn() {
            return this._isUTC ? "UTC" : "";
          }
          function Vn() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          function Zn(e) {
            return wt(1e3 * e);
          }
          function qn() {
            return wt.apply(null, arguments).parseZone();
          }
          function Kn(e) {
            return e;
          }
          function Xn(e, t, n, a) {
            var r = at(),
              s = m().set(a, t);
            return r[n](s, e);
          }
          function $n(e, t, n) {
            if ((o(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return Xn(e, t, n, "month");
            var a,
              r = [];
            for (a = 0; a < 12; a++) r[a] = Xn(e, a, n, "month");
            return r;
          }
          function ea(e, t, n, a) {
            "boolean" == typeof e
              ? (o(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((t = e),
                (n = t),
                (e = !1),
                o(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var r = at(),
              s = e ? r._week.dow : 0;
            if (null != n) return Xn(t, (n + s) % 7, a, "day");
            var i,
              d = [];
            for (i = 0; i < 7; i++) d[i] = Xn(t, (i + s) % 7, a, "day");
            return d;
          }
          function ta(e, t) {
            return $n(e, t, "months");
          }
          function na(e, t) {
            return $n(e, t, "monthsShort");
          }
          function aa(e, t, n) {
            return ea(e, t, n, "weekdays");
          }
          function ra(e, t, n) {
            return ea(e, t, n, "weekdaysShort");
          }
          function sa(e, t, n) {
            return ea(e, t, n, "weekdaysMin");
          }
          function ia() {
            var e = this._data;
            return (
              (this._milliseconds = us(this._milliseconds)),
              (this._days = us(this._days)),
              (this._months = us(this._months)),
              (e.milliseconds = us(e.milliseconds)),
              (e.seconds = us(e.seconds)),
              (e.minutes = us(e.minutes)),
              (e.hours = us(e.hours)),
              (e.months = us(e.months)),
              (e.years = us(e.years)),
              this
            );
          }
          function oa(e, t, n, a) {
            var r = Kt(t, n);
            return (
              (e._milliseconds += a * r._milliseconds),
              (e._days += a * r._days),
              (e._months += a * r._months),
              e._bubble()
            );
          }
          function da(e, t) {
            return oa(this, e, t, 1);
          }
          function ua(e, t) {
            return oa(this, e, t, -1);
          }
          function _a(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function la() {
            var e,
              t,
              n,
              a,
              r,
              s = this._milliseconds,
              i = this._days,
              o = this._months,
              d = this._data;
            return (
              (s >= 0 && i >= 0 && o >= 0) ||
                (s <= 0 && i <= 0 && o <= 0) ||
                ((s += 864e5 * _a(ca(o) + i)), (i = 0), (o = 0)),
              (d.milliseconds = s % 1e3),
              (e = Y(s / 1e3)),
              (d.seconds = e % 60),
              (t = Y(e / 60)),
              (d.minutes = t % 60),
              (n = Y(t / 60)),
              (d.hours = n % 24),
              (i += Y(n / 24)),
              (r = Y(ma(i))),
              (o += r),
              (i -= _a(ca(r))),
              (a = Y(o / 12)),
              (o %= 12),
              (d.days = i),
              (d.months = o),
              (d.years = a),
              this
            );
          }
          function ma(e) {
            return 4800 * e / 146097;
          }
          function ca(e) {
            return 146097 * e / 4800;
          }
          function fa(e) {
            if (!this.isValid()) return NaN;
            var t,
              n,
              a = this._milliseconds;
            if ("month" === (e = W(e)) || "year" === e)
              return (
                (t = this._days + a / 864e5),
                (n = this._months + ma(t)),
                "month" === e ? n : n / 12
              );
            switch (((t = this._days + Math.round(ca(this._months))), e)) {
              case "week":
                return t / 7 + a / 6048e5;
              case "day":
                return t + a / 864e5;
              case "hour":
                return 24 * t + a / 36e5;
              case "minute":
                return 1440 * t + a / 6e4;
              case "second":
                return 86400 * t + a / 1e3;
              case "millisecond":
                return Math.floor(864e5 * t) + a;
              default:
                throw new Error("Unknown unit " + e);
            }
          }
          function ha() {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * g(this._months / 12)
              : NaN;
          }
          function Ma(e) {
            return function() {
              return this.as(e);
            };
          }
          function ya() {
            return Kt(this);
          }
          function pa(e) {
            return (e = W(e)), this.isValid() ? this[e + "s"]() : NaN;
          }
          function La(e) {
            return function() {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          function Ya() {
            return Y(this.days() / 7);
          }
          function ga(e, t, n, a, r) {
            return r.relativeTime(t || 1, !!n, e, a);
          }
          function ka(e, t, n) {
            var a = Kt(e).abs(),
              r = Ds(a.as("s")),
              s = Ds(a.as("m")),
              i = Ds(a.as("h")),
              o = Ds(a.as("d")),
              d = Ds(a.as("M")),
              u = Ds(a.as("y")),
              _ = (r <= ws.ss && ["s", r]) ||
                (r < ws.s && ["ss", r]) ||
                (s <= 1 && ["m"]) ||
                (s < ws.m && ["mm", s]) ||
                (i <= 1 && ["h"]) ||
                (i < ws.h && ["hh", i]) ||
                (o <= 1 && ["d"]) ||
                (o < ws.d && ["dd", o]) ||
                (d <= 1 && ["M"]) ||
                (d < ws.M && ["MM", d]) ||
                (u <= 1 && ["y"]) || ["yy", u];
            return (_[2] = t), (_[3] = +e > 0), (_[4] = n), ga.apply(null, _);
          }
          function va(e) {
            return void 0 === e ? Ds : "function" == typeof e && ((Ds = e), !0);
          }
          function Aa(e, t) {
            return (
              void 0 !== ws[e] &&
              (void 0 === t
                ? ws[e]
                : ((ws[e] = t), "s" === e && (ws.ss = t - 1), !0))
            );
          }
          function Da(e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t = this.localeData(),
              n = ka(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n);
          }
          function wa(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function Ta() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              a = Ts(this._milliseconds) / 1e3,
              r = Ts(this._days),
              s = Ts(this._months);
            (e = Y(a / 60)),
              (t = Y(e / 60)),
              (a %= 60),
              (e %= 60),
              (n = Y(s / 12)),
              (s %= 12);
            var i = n,
              o = s,
              d = r,
              u = t,
              _ = e,
              l = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
              m = this.asSeconds();
            if (!m) return "P0D";
            var c = m < 0 ? "-" : "",
              f = wa(this._months) !== wa(m) ? "-" : "",
              h = wa(this._days) !== wa(m) ? "-" : "",
              M = wa(this._milliseconds) !== wa(m) ? "-" : "";
            return (
              c +
              "P" +
              (i ? f + i + "Y" : "") +
              (o ? f + o + "M" : "") +
              (d ? h + d + "D" : "") +
              (u || _ || l ? "T" : "") +
              (u ? M + u + "H" : "") +
              (_ ? M + _ + "M" : "") +
              (l ? M + l + "S" : "")
            );
          }
          var ba, Sa;
          Sa = Array.prototype.some
            ? Array.prototype.some
            : function(e) {
                for (
                  var t = Object(this), n = t.length >>> 0, a = 0;
                  a < n;
                  a++
                )
                  if (a in t && e.call(this, t[a], a, t)) return !0;
                return !1;
              };
          var ja = (t.momentProperties = []),
            Ha = !1,
            xa = {};
          (t.suppressDeprecationWarnings = !1), (t.deprecationHandler = null);
          var Ea;
          Ea = Object.keys
            ? Object.keys
            : function(e) {
                var t,
                  n = [];
                for (t in e) _(e, t) && n.push(t);
                return n;
              };
          var Oa = {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            Ca = {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Pa = /\d{1,2}/,
            Wa = {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            Ia = {},
            Fa = {},
            Ba = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Na = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Ja = {},
            za = {},
            Qa = /\d/,
            Ra = /\d\d/,
            Ua = /\d{3}/,
            Ga = /\d{4}/,
            Va = /[+-]?\d{6}/,
            Za = /\d\d?/,
            qa = /\d\d\d\d?/,
            Ka = /\d\d\d\d\d\d?/,
            Xa = /\d{1,3}/,
            $a = /\d{1,4}/,
            er = /[+-]?\d{1,6}/,
            tr = /\d+/,
            nr = /[+-]?\d+/,
            ar = /Z|[+-]\d\d:?\d\d/gi,
            rr = /Z|[+-]\d\d(?::?\d\d)?/gi,
            sr = /[+-]?\d+(\.\d{1,3})?/,
            ir = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            or = {},
            dr = {},
            ur = 0,
            _r = 1,
            lr = 2,
            mr = 3,
            cr = 4,
            fr = 5,
            hr = 6,
            Mr = 7,
            yr = 8;
          J("Y", 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e;
          }),
            J(0, ["YY", 2], 0, function() {
              return this.year() % 100;
            }),
            J(0, ["YYYY", 4], 0, "year"),
            J(0, ["YYYYY", 5], 0, "year"),
            J(0, ["YYYYYY", 6, !0], 0, "year"),
            P("year", "y"),
            F("year", 1),
            G("Y", nr),
            G("YY", Za, Ra),
            G("YYYY", $a, Ga),
            G("YYYYY", er, Va),
            G("YYYYYY", er, Va),
            K(["YYYYY", "YYYYYY"], ur),
            K("YYYY", function(e, n) {
              n[ur] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e);
            }),
            K("YY", function(e, n) {
              n[ur] = t.parseTwoDigitYear(e);
            }),
            K("Y", function(e, t) {
              t[ur] = parseInt(e, 10);
            }),
            (t.parseTwoDigitYear = function(e) {
              return g(e) + (g(e) > 68 ? 1900 : 2e3);
            });
          var pr,
            Lr = ae("FullYear", !0);
          (pr = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function(e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            J("M", ["MM", 2], "Mo", function() {
              return this.month() + 1;
            }),
            J("MMM", 0, 0, function(e) {
              return this.localeData().monthsShort(this, e);
            }),
            J("MMMM", 0, 0, function(e) {
              return this.localeData().months(this, e);
            }),
            P("month", "M"),
            F("month", 8),
            G("M", Za),
            G("MM", Za, Ra),
            G("MMM", function(e, t) {
              return t.monthsShortRegex(e);
            }),
            G("MMMM", function(e, t) {
              return t.monthsRegex(e);
            }),
            K(["M", "MM"], function(e, t) {
              t[_r] = g(e) - 1;
            }),
            K(["MMM", "MMMM"], function(e, t, n, a) {
              var r = n._locale.monthsParse(e, a, n._strict);
              null != r ? (t[_r] = r) : (f(n).invalidMonth = e);
            });
          var Yr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            gr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
            kr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            vr = ir,
            Ar = ir;
          J("w", ["ww", 2], "wo", "week"),
            J("W", ["WW", 2], "Wo", "isoWeek"),
            P("week", "w"),
            P("isoWeek", "W"),
            F("week", 5),
            F("isoWeek", 5),
            G("w", Za),
            G("ww", Za, Ra),
            G("W", Za),
            G("WW", Za, Ra),
            X(["w", "ww", "W", "WW"], function(e, t, n, a) {
              t[a.substr(0, 1)] = g(e);
            });
          var Dr = { dow: 0, doy: 6 };
          J("d", 0, "do", "day"),
            J("dd", 0, 0, function(e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            J("ddd", 0, 0, function(e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            J("dddd", 0, 0, function(e) {
              return this.localeData().weekdays(this, e);
            }),
            J("e", 0, 0, "weekday"),
            J("E", 0, 0, "isoWeekday"),
            P("day", "d"),
            P("weekday", "e"),
            P("isoWeekday", "E"),
            F("day", 11),
            F("weekday", 11),
            F("isoWeekday", 11),
            G("d", Za),
            G("e", Za),
            G("E", Za),
            G("dd", function(e, t) {
              return t.weekdaysMinRegex(e);
            }),
            G("ddd", function(e, t) {
              return t.weekdaysShortRegex(e);
            }),
            G("dddd", function(e, t) {
              return t.weekdaysRegex(e);
            }),
            X(["dd", "ddd", "dddd"], function(e, t, n, a) {
              var r = n._locale.weekdaysParse(e, a, n._strict);
              null != r ? (t.d = r) : (f(n).invalidWeekday = e);
            }),
            X(["d", "e", "E"], function(e, t, n, a) {
              t[a] = g(e);
            });
          var wr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
            Tr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            br = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Sr = ir,
            jr = ir,
            Hr = ir;
          J("H", ["HH", 2], 0, "hour"),
            J("h", ["hh", 2], 0, Re),
            J("k", ["kk", 2], 0, Ue),
            J("hmm", 0, 0, function() {
              return "" + Re.apply(this) + N(this.minutes(), 2);
            }),
            J("hmmss", 0, 0, function() {
              return (
                "" +
                Re.apply(this) +
                N(this.minutes(), 2) +
                N(this.seconds(), 2)
              );
            }),
            J("Hmm", 0, 0, function() {
              return "" + this.hours() + N(this.minutes(), 2);
            }),
            J("Hmmss", 0, 0, function() {
              return (
                "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
              );
            }),
            Ge("a", !0),
            Ge("A", !1),
            P("hour", "h"),
            F("hour", 13),
            G("a", Ve),
            G("A", Ve),
            G("H", Za),
            G("h", Za),
            G("k", Za),
            G("HH", Za, Ra),
            G("hh", Za, Ra),
            G("kk", Za, Ra),
            G("hmm", qa),
            G("hmmss", Ka),
            G("Hmm", qa),
            G("Hmmss", Ka),
            K(["H", "HH"], mr),
            K(["k", "kk"], function(e, t, n) {
              var a = g(e);
              t[mr] = 24 === a ? 0 : a;
            }),
            K(["a", "A"], function(e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            K(["h", "hh"], function(e, t, n) {
              (t[mr] = g(e)), (f(n).bigHour = !0);
            }),
            K("hmm", function(e, t, n) {
              var a = e.length - 2;
              (t[mr] = g(e.substr(0, a))),
                (t[cr] = g(e.substr(a))),
                (f(n).bigHour = !0);
            }),
            K("hmmss", function(e, t, n) {
              var a = e.length - 4,
                r = e.length - 2;
              (t[mr] = g(e.substr(0, a))),
                (t[cr] = g(e.substr(a, 2))),
                (t[fr] = g(e.substr(r))),
                (f(n).bigHour = !0);
            }),
            K("Hmm", function(e, t, n) {
              var a = e.length - 2;
              (t[mr] = g(e.substr(0, a))), (t[cr] = g(e.substr(a)));
            }),
            K("Hmmss", function(e, t, n) {
              var a = e.length - 4,
                r = e.length - 2;
              (t[mr] = g(e.substr(0, a))),
                (t[cr] = g(e.substr(a, 2))),
                (t[fr] = g(e.substr(r)));
            });
          var xr,
            Er = /[ap]\.?m?\.?/i,
            Or = ae("Hours", !0),
            Cr = {
              calendar: Oa,
              longDateFormat: Ca,
              invalidDate: "Invalid date",
              ordinal: "%d",
              dayOfMonthOrdinalParse: Pa,
              relativeTime: Wa,
              months: gr,
              monthsShort: kr,
              week: Dr,
              weekdays: wr,
              weekdaysMin: br,
              weekdaysShort: Tr,
              meridiemParse: Er
            },
            Pr = {},
            Wr = {},
            Ir = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Fr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Br = /Z|[+-]\d\d(?::?\d\d)?/,
            Nr = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/]
            ],
            Jr = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/]
            ],
            zr = /^\/?Date\((\-?\d+)/i,
            Qr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            Rr = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480
            };
          (t.createFromInputFallback = A(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function(e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (t.ISO_8601 = function() {}),
            (t.RFC_2822 = function() {});
          var Ur = A(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function() {
                var e = wt.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this ? this : e
                  : M();
              }
            ),
            Gr = A(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function() {
                var e = wt.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this ? this : e
                  : M();
              }
            ),
            Vr = function() {
              return Date.now ? Date.now() : +new Date();
            },
            Zr = [
              "year",
              "quarter",
              "month",
              "week",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond"
            ];
          Pt("Z", ":"),
            Pt("ZZ", ""),
            G("Z", rr),
            G("ZZ", rr),
            K(["Z", "ZZ"], function(e, t, n) {
              (n._useUTC = !0), (n._tzm = Wt(rr, e));
            });
          var qr = /([\+\-]|\d\d)/gi;
          t.updateOffset = function() {};
          var Kr = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Xr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          (Kt.fn = Et.prototype), (Kt.invalid = xt);
          var $r = tn(1, "add"),
            es = tn(-1, "subtract");
          (t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var ts = A(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function(e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          J(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100;
          }),
            J(0, ["GG", 2], 0, function() {
              return this.isoWeekYear() % 100;
            }),
            Wn("gggg", "weekYear"),
            Wn("ggggg", "weekYear"),
            Wn("GGGG", "isoWeekYear"),
            Wn("GGGGG", "isoWeekYear"),
            P("weekYear", "gg"),
            P("isoWeekYear", "GG"),
            F("weekYear", 1),
            F("isoWeekYear", 1),
            G("G", nr),
            G("g", nr),
            G("GG", Za, Ra),
            G("gg", Za, Ra),
            G("GGGG", $a, Ga),
            G("gggg", $a, Ga),
            G("GGGGG", er, Va),
            G("ggggg", er, Va),
            X(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
              t[a.substr(0, 2)] = g(e);
            }),
            X(["gg", "GG"], function(e, n, a, r) {
              n[r] = t.parseTwoDigitYear(e);
            }),
            J("Q", 0, "Qo", "quarter"),
            P("quarter", "Q"),
            F("quarter", 7),
            G("Q", Qa),
            K("Q", function(e, t) {
              t[_r] = 3 * (g(e) - 1);
            }),
            J("D", ["DD", 2], "Do", "date"),
            P("date", "D"),
            F("date", 9),
            G("D", Za),
            G("DD", Za, Ra),
            G("Do", function(e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            K(["D", "DD"], lr),
            K("Do", function(e, t) {
              t[lr] = g(e.match(Za)[0]);
            });
          var ns = ae("Date", !0);
          J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            P("dayOfYear", "DDD"),
            F("dayOfYear", 4),
            G("DDD", Xa),
            G("DDDD", Ua),
            K(["DDD", "DDDD"], function(e, t, n) {
              n._dayOfYear = g(e);
            }),
            J("m", ["mm", 2], 0, "minute"),
            P("minute", "m"),
            F("minute", 14),
            G("m", Za),
            G("mm", Za, Ra),
            K(["m", "mm"], cr);
          var as = ae("Minutes", !1);
          J("s", ["ss", 2], 0, "second"),
            P("second", "s"),
            F("second", 15),
            G("s", Za),
            G("ss", Za, Ra),
            K(["s", "ss"], fr);
          var rs = ae("Seconds", !1);
          J("S", 0, 0, function() {
            return ~~(this.millisecond() / 100);
          }),
            J(0, ["SS", 2], 0, function() {
              return ~~(this.millisecond() / 10);
            }),
            J(0, ["SSS", 3], 0, "millisecond"),
            J(0, ["SSSS", 4], 0, function() {
              return 10 * this.millisecond();
            }),
            J(0, ["SSSSS", 5], 0, function() {
              return 100 * this.millisecond();
            }),
            J(0, ["SSSSSS", 6], 0, function() {
              return 1e3 * this.millisecond();
            }),
            J(0, ["SSSSSSS", 7], 0, function() {
              return 1e4 * this.millisecond();
            }),
            J(0, ["SSSSSSSS", 8], 0, function() {
              return 1e5 * this.millisecond();
            }),
            J(0, ["SSSSSSSSS", 9], 0, function() {
              return 1e6 * this.millisecond();
            }),
            P("millisecond", "ms"),
            F("millisecond", 16),
            G("S", Xa, Qa),
            G("SS", Xa, Ra),
            G("SSS", Xa, Ua);
          var ss;
          for (ss = "SSSS"; ss.length <= 9; ss += "S") G(ss, tr);
          for (ss = "S"; ss.length <= 9; ss += "S") K(ss, Un);
          var is = ae("Milliseconds", !1);
          J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
          var os = p.prototype;
          (os.add = $r),
            (os.calendar = rn),
            (os.clone = sn),
            (os.diff = cn),
            (os.endOf = wn),
            (os.format = pn),
            (os.from = Ln),
            (os.fromNow = Yn),
            (os.to = gn),
            (os.toNow = kn),
            (os.get = ie),
            (os.invalidAt = Cn),
            (os.isAfter = on),
            (os.isBefore = dn),
            (os.isBetween = un),
            (os.isSame = _n),
            (os.isSameOrAfter = ln),
            (os.isSameOrBefore = mn),
            (os.isValid = En),
            (os.lang = ts),
            (os.locale = vn),
            (os.localeData = An),
            (os.max = Gr),
            (os.min = Ur),
            (os.parsingFlags = On),
            (os.set = oe),
            (os.startOf = Dn),
            (os.subtract = es),
            (os.toArray = jn),
            (os.toObject = Hn),
            (os.toDate = Sn),
            (os.toISOString = Mn),
            (os.inspect = yn),
            (os.toJSON = xn),
            (os.toString = hn),
            (os.unix = bn),
            (os.valueOf = Tn),
            (os.creationData = Pn),
            (os.year = Lr),
            (os.isLeapYear = ne),
            (os.weekYear = In),
            (os.isoWeekYear = Fn),
            (os.quarter = os.quarters = Qn),
            (os.month = he),
            (os.daysInMonth = Me),
            (os.week = os.weeks = Se),
            (os.isoWeek = os.isoWeeks = je),
            (os.weeksInYear = Nn),
            (os.isoWeeksInYear = Bn),
            (os.date = ns),
            (os.day = os.days = Ie),
            (os.weekday = Fe),
            (os.isoWeekday = Be),
            (os.dayOfYear = Rn),
            (os.hour = os.hours = Or),
            (os.minute = os.minutes = as),
            (os.second = os.seconds = rs),
            (os.millisecond = os.milliseconds = is),
            (os.utcOffset = Bt),
            (os.utc = Jt),
            (os.local = zt),
            (os.parseZone = Qt),
            (os.hasAlignedHourOffset = Rt),
            (os.isDST = Ut),
            (os.isLocal = Vt),
            (os.isUtcOffset = Zt),
            (os.isUtc = qt),
            (os.isUTC = qt),
            (os.zoneAbbr = Gn),
            (os.zoneName = Vn),
            (os.dates = A(
              "dates accessor is deprecated. Use date instead.",
              ns
            )),
            (os.months = A(
              "months accessor is deprecated. Use month instead",
              he
            )),
            (os.years = A(
              "years accessor is deprecated. Use year instead",
              Lr
            )),
            (os.zone = A(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              Nt
            )),
            (os.isDSTShifted = A(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              Gt
            ));
          var ds = S.prototype;
          (ds.calendar = j),
            (ds.longDateFormat = H),
            (ds.invalidDate = x),
            (ds.ordinal = E),
            (ds.preparse = Kn),
            (ds.postformat = Kn),
            (ds.relativeTime = O),
            (ds.pastFuture = C),
            (ds.set = T),
            (ds.months = _e),
            (ds.monthsShort = le),
            (ds.monthsParse = ce),
            (ds.monthsRegex = pe),
            (ds.monthsShortRegex = ye),
            (ds.week = we),
            (ds.firstDayOfYear = be),
            (ds.firstDayOfWeek = Te),
            (ds.weekdays = Ee),
            (ds.weekdaysMin = Ce),
            (ds.weekdaysShort = Oe),
            (ds.weekdaysParse = We),
            (ds.weekdaysRegex = Ne),
            (ds.weekdaysShortRegex = Je),
            (ds.weekdaysMinRegex = ze),
            (ds.isPM = Ze),
            (ds.meridiem = qe),
            et("en", {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function(e) {
                var t = e % 10;
                return (
                  e +
                  (1 === g((e % 100) / 10)
                    ? "th"
                    : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                );
              }
            }),
            (t.lang = A(
              "moment.lang is deprecated. Use moment.locale instead.",
              et
            )),
            (t.langData = A(
              "moment.langData is deprecated. Use moment.localeData instead.",
              at
            ));
          var us = Math.abs,
            _s = Ma("ms"),
            ls = Ma("s"),
            ms = Ma("m"),
            cs = Ma("h"),
            fs = Ma("d"),
            hs = Ma("w"),
            Ms = Ma("M"),
            ys = Ma("y"),
            ps = La("milliseconds"),
            Ls = La("seconds"),
            Ys = La("minutes"),
            gs = La("hours"),
            ks = La("days"),
            vs = La("months"),
            As = La("years"),
            Ds = Math.round,
            ws = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
            Ts = Math.abs,
            bs = Et.prototype;
          return (
            (bs.isValid = Ht),
            (bs.abs = ia),
            (bs.add = da),
            (bs.subtract = ua),
            (bs.as = fa),
            (bs.asMilliseconds = _s),
            (bs.asSeconds = ls),
            (bs.asMinutes = ms),
            (bs.asHours = cs),
            (bs.asDays = fs),
            (bs.asWeeks = hs),
            (bs.asMonths = Ms),
            (bs.asYears = ys),
            (bs.valueOf = ha),
            (bs._bubble = la),
            (bs.clone = ya),
            (bs.get = pa),
            (bs.milliseconds = ps),
            (bs.seconds = Ls),
            (bs.minutes = Ys),
            (bs.hours = gs),
            (bs.days = ks),
            (bs.weeks = Ya),
            (bs.months = vs),
            (bs.years = As),
            (bs.humanize = Da),
            (bs.toISOString = Ta),
            (bs.toString = Ta),
            (bs.toJSON = Ta),
            (bs.locale = vn),
            (bs.localeData = An),
            (bs.toIsoString = A(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              Ta
            )),
            (bs.lang = ts),
            J("X", 0, 0, "unix"),
            J("x", 0, 0, "valueOf"),
            G("x", nr),
            G("X", sr),
            K("X", function(e, t, n) {
              n._d = new Date(1e3 * parseFloat(e, 10));
            }),
            K("x", function(e, t, n) {
              n._d = new Date(g(e));
            }),
            (t.version = "2.21.0"),
            (function(e) {
              ba = e;
            })(wt),
            (t.fn = os),
            (t.min = bt),
            (t.max = St),
            (t.now = Vr),
            (t.utc = m),
            (t.unix = Zn),
            (t.months = ta),
            (t.isDate = d),
            (t.locale = et),
            (t.invalid = M),
            (t.duration = Kt),
            (t.isMoment = L),
            (t.weekdays = aa),
            (t.parseZone = qn),
            (t.localeData = at),
            (t.isDuration = Ot),
            (t.monthsShort = na),
            (t.weekdaysMin = sa),
            (t.defineLocale = tt),
            (t.updateLocale = nt),
            (t.locales = rt),
            (t.weekdaysShort = ra),
            (t.normalizeUnits = W),
            (t.relativeTimeRounding = va),
            (t.relativeTimeThreshold = Aa),
            (t.calendarFormat = an),
            (t.prototype = os),
            (t.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "YYYY-[W]WW",
              MONTH: "YYYY-MM"
            }),
            t
          );
        });
      }.call(t, n(189)(e)));
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          component: null,
          mountID: 1,
          sandbox: !0,
          rootComponents: {},
          rootInstances: {},
          hook: null,
          driver: null,
          monitor: null
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createContext = t.Children = t.version = t.setNativeProps = t.findComponentInstance = t.unmountComponentAtNode = t.findDOMNode = t.createPortal = t.hydrate = t.render = t.PropTypes = t.PureComponent = t.Component = t.createFactory = t.isValidElement = t.cloneElement = t.createElement = void 0),
        n(173);
      var r = n(9),
        s = n(4),
        i = a(s),
        o = n(177),
        d = a(o),
        u = n(142),
        _ = a(u),
        l = n(10),
        m = a(l),
        c = n(175),
        f = a(c),
        h = n(172),
        M = a(h),
        y = n(140),
        p = a(y),
        L = n(11),
        Y = a(L),
        g = n(174),
        k = a(g),
        v = n(178),
        A = a(v),
        D = n(187),
        w = a(D),
        T = n(170),
        b = a(T),
        S = n(171),
        j = a(S);
      (t.createElement = r.createElement),
        (t.cloneElement = r.cloneElement),
        (t.isValidElement = r.isValidElement),
        (t.createFactory = r.createFactory),
        (t.Component = i.default),
        (t.PureComponent = d.default),
        (t.PropTypes = _.default),
        (t.render = m.default),
        (t.hydrate = f.default),
        (t.createPortal = M.default),
        (t.findDOMNode = p.default),
        (t.unmountComponentAtNode = Y.default),
        (t.findComponentInstance = k.default),
        (t.setNativeProps = A.default),
        (t.version = w.default),
        (t.Children = b.default),
        (t.createContext = j.default),
        (t.default = e.exports),
        (t.default = e.exports);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        s = a(r),
        i = n(9),
        o = n(11),
        d = a(o),
        u = n(6),
        _ = a(u),
        l = n(12),
        m = a(l),
        c = n(182),
        f = a(c),
        h = "$$instance";
      (t.default = {
        set: function(e, t) {
          e[h] ||
            ((e[h] = t),
            t.rootID &&
              ((s.default.rootInstances[t.rootID] = t),
              (s.default.rootComponents[t.rootID] = t._internal)));
        },
        get: function(e) {
          return e[h];
        },
        remove: function(e) {
          var t = this.get(e);
          t &&
            ((e[h] = null),
            t.rootID &&
              (delete s.default.rootComponents[t.rootID],
              delete s.default.rootInstances[t.rootID]));
        },
        mount: function(e, t, n) {
          s.default.driver.beforeRender && s.default.driver.beforeRender(),
            null == t && (t = s.default.driver.createBody());
          var a = void 0;
          if (n) {
            var r = n._internal;
            a = r._processChildContext(r._context);
          }
          var o = this.get(t);
          if (o && o.isRootComponent) {
            var u = o.getRenderedComponent(),
              l = u._currentElement;
            if ((0, m.default)(l, e)) {
              var c = u._context;
              return u.updateComponent(l, e, c, a || c), o;
            }
            s.default.hook.Reconciler.unmountComponent(o), (0, d.default)(t);
          }
          var h = (0, i.createElement)(f.default, null, e),
            M = (0, _.default)(h),
            y = a || {},
            p = M.mountComponent(t, null, y);
          return (
            this.set(t, p),
            s.default.driver.afterRender && s.default.driver.afterRender(p),
            s.default.hook.Mount._renderNewRootComponent(p._internal),
            p
          );
        }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        s = (function() {
          function e(t, n, r) {
            a(this, e),
              (this.props = t),
              (this.context = n),
              (this.refs = {}),
              (this.updater = r);
          }
          return (
            r(e, [
              { key: "isComponentClass", value: function() {} },
              {
                key: "setState",
                value: function(e, t) {
                  this.updater.setState(this, e, t);
                }
              },
              {
                key: "forceUpdate",
                value: function(e) {
                  this.updater.forceUpdate(this, e);
                }
              }
            ]),
            e
          );
        })();
      (t.default = s), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      (t.isWeb =
        "object" ===
          ("undefined" == typeof navigator ? "undefined" : a(navigator)) &&
        ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product)),
        (t.isNode =
          "undefined" != typeof process &&
          !(!process.versions || !process.versions.node)),
        (t.isWeex = "function" == typeof callNative),
        (t.isReactNative = "undefined" != typeof __fbBatchedBridgeConfig);
      (t.default = e.exports), (t.default = e.exports);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        var t = void 0;
        if (void 0 === e || null === e || !1 === e || !0 === e)
          t = new i.default.EmptyComponent();
        else if (Array.isArray(e)) t = new i.default.FragmentComponent(e);
        else if ("object" === (void 0 === e ? "undefined" : r(e)) && e.type)
          t =
            "string" == typeof e.type
              ? new i.default.NativeComponent(e)
              : new i.default.CompositeComponent(e);
        else {
          if ("string" != typeof e && "number" != typeof e)
            throw new Error(
              "Invalid element type: " + e + ". (keys: " + Object.keys(e) + ")"
            );
          t = new i.default.TextComponent(e);
        }
        return (t._mountIndex = 0), t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        s = n(1),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s);
      (t.default = a), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        var t = { method: e.method, url: e.url };
        return (
          "POST" === e.method &&
            ((t.headers = { "Content-Type": "application/json" }),
            (t.body = e.body)),
          e.headers && (t.headers = e.headers),
          Promise.race([
            new Promise(function(e, n) {
              r.fetch(t, function(t) {
                t.ok ? e(JSON.parse(t.data)) : n(t);
              });
            }),
            new Promise(function(e, t) {
              setTimeout(function() {
                t("请求超时");
              }, 5e3);
            })
          ])
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(191);
      (t.default = a), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        d = n(2),
        u = n(5),
        _ = (function(e) {
          function t() {
            return (
              a(this, t),
              r(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            s(t, e),
            o(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props;
                  if (u.isWeex) return (0, d.createElement)("div", e);
                  var t = i({}, l.initial, e.style);
                  return (0, d.createElement)("div", i({}, e, { style: t }));
                }
              }
            ]),
            t
          );
        })(d.Component);
      _.propTypes = {};
      var l = {
        initial: {
          border: "0 solid black",
          position: "relative",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-start",
          flexShrink: 0
        }
      };
      (t.default = _), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r() {
        if (f.default.component) {
          var e = f.default.component.getName();
          if (e) return " Check the render method of `" + e + "`.";
        }
        return "";
      }
      function s(e, t, n, a, r) {
        return (
          y.isWeex && (a = o(e, a)),
          { type: e, key: t, ref: n, props: a, _owner: r }
        );
      }
      function i(e) {
        if (e) {
          if (Array.isArray(e)) {
            for (var t = {}, n = 0; n < e.length; ++n) {
              var a = i(e[n]);
              if (a) for (var r in a) t[r] = a[r];
            }
            return t;
          }
          return e;
        }
      }
      function o(e, t) {
        if ("text" === e) {
          var n = t.children;
          null == t.value &&
            null != n &&
            (Array.isArray(n)
              ? (n = n
                  .map(function(e) {
                    return "number" == typeof e || "string" == typeof e
                      ? e
                      : "";
                  })
                  .join(""))
              : "number" != typeof n && "string" != typeof n && (n = ""),
            (t.value = String(n))),
            (t.children = null);
        }
        return t;
      }
      function d(e, t, n) {
        if (null == e)
          throw Error(
            "createElement: type should not be null or undefined." + r()
          );
        var a = {},
          o = void 0,
          d = null,
          u = null;
        if (null != t) {
          (u = void 0 === t.ref ? null : t.ref),
            (d = void 0 === t.key ? null : String(t.key));
          for (o in t) p[o] || (a[o] = t[o]);
        }
        var _ = arguments.length - 2;
        if (_ > 0)
          if (1 !== _ || Array.isArray(n)) {
            var l = n;
            if (_ > 1) {
              l = new Array(_);
              for (var c = 0; c < _; c++) l[c] = arguments[c + 2];
            }
            a.children = (0, M.default)(l);
          } else a.children = n;
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (o in h) void 0 === a[o] && (a[o] = h[o]);
        }
        return (
          a.style &&
            (Array.isArray(a.style) || "object" === m(a.style)) &&
            (a.style = i(a.style)),
          new s(e, d, u, a, f.default.component)
        );
      }
      function u(e) {
        var t = d.bind(null, e);
        return (t.type = e), t;
      }
      function _(e, t) {
        if (!l(e)) throw Error("cloneElement: not a valid element." + r());
        var n = Object.assign({}, e.props),
          a = e.key,
          i = e.ref,
          o = e._owner;
        if (t) {
          void 0 !== t.ref && ((i = t.ref), (o = f.default.component)),
            void 0 !== t.key && (a = String(t.key));
          var d = void 0;
          e.type && e.type.defaultProps && (d = e.type.defaultProps);
          var u = void 0;
          for (u in t)
            t.hasOwnProperty(u) &&
              !p.hasOwnProperty(u) &&
              (void 0 === t[u] && void 0 !== d ? (n[u] = d[u]) : (n[u] = t[u]));
        }
        for (
          var _ = arguments.length, m = Array(_ > 2 ? _ - 2 : 0), c = 2;
          c < _;
          c++
        )
          m[c - 2] = arguments[c];
        return (
          m.length && (n.children = (0, M.default)(m)),
          new s(e.type, a, i, n, o)
        );
      }
      function l(e) {
        return (
          "object" === (void 0 === e ? "undefined" : m(e)) &&
          null !== e &&
          e.type &&
          e.props
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      (t.createElement = d),
        (t.createFactory = u),
        (t.cloneElement = _),
        (t.isValidElement = l);
      var c = n(1),
        f = a(c),
        h = n(141),
        M = a(h),
        y = n(5),
        p = { key: !0, ref: !0 };
      t.default = s;
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t, n, a) {
        "function" == typeof n && ((a = n), (n = null)),
          (n = n || {}),
          (0, i.default)(n);
        var r = d.default.mount(e, t, n.parent),
          s = r.getPublicInstance();
        return a && a.call(s), s;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(176),
        i = a(s),
        o = n(3),
        d = a(o),
        u = n(1);
      a(u);
      (t.default = r), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        var t = s.default.get(e);
        return !!t && (s.default.remove(e), t._internal.unmountComponent(), !0);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      var r = n(3),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      e.exports = t.default;
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        var n = null === e,
          a = null === t;
        if (n || a) return n === a;
        var s = void 0 === e ? "undefined" : r(e),
          i = void 0 === t ? "undefined" : r(t);
        return "string" === s || "number" === s
          ? "string" === i || "number" === i
          : "object" === s &&
              "object" === i &&
              e.type === t.type &&
              e.key === t.key;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      (t.default = a), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        return (
          (e.style = e.style || {}),
          t.forEach(function(t) {
            e[t] && !e.style[t] && ((e.style[t] = e[t]), delete e[t]);
          }),
          e
        );
      }
      function r(e, t, n) {
        return e[t] && !e[n] && ((e[n] = e[t]), delete e[t]), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.transformPropsAttrsToStyle = a),
        (t.renamePropsAttr = r),
        (t.default = e.exports),
        (t.default = e.exports);
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("af", {
          months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
            "_"
          ),
          weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
            "_"
          ),
          weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
          weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
          meridiemParse: /vm|nm/i,
          isPM: function(e) {
            return /^nm$/i.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ar-dz", {
          months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
          monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: { dow: 0, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ar-kw", {
          months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
          monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: { dow: 0, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
          },
          n = function(e) {
            return 0 === e
              ? 0
              : 1 === e
                ? 1
                : 2 === e
                  ? 2
                  : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
          },
          a = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية"
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة"
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة"
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم"
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر"
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام"
            ]
          },
          r = function(e) {
            return function(t, r, s, i) {
              var o = n(t),
                d = a[e][n(t)];
              return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t);
            };
          },
          s = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر"
          ];
        return e.defineLocale("ar-ly", {
          months: s,
          monthsShort: s,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return "م" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: r("s"),
            ss: r("s"),
            m: r("m"),
            mm: r("m"),
            h: r("h"),
            hh: r("h"),
            d: r("d"),
            dd: r("d"),
            M: r("M"),
            MM: r("M"),
            y: r("y"),
            yy: r("y")
          },
          preparse: function(e) {
            return e.replace(/،/g, ",");
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ar-ma", {
          months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
          monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: { dow: 6, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
          },
          n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
          };
        return e.defineLocale("ar-sa", {
          months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
          monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return "م" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ar-tn", {
          months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
          monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
          },
          n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
          },
          a = function(e) {
            return 0 === e
              ? 0
              : 1 === e
                ? 1
                : 2 === e
                  ? 2
                  : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
          },
          r = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية"
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة"
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة"
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم"
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر"
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام"
            ]
          },
          s = function(e) {
            return function(t, n, s, i) {
              var o = a(t),
                d = r[e][a(t)];
              return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
            };
          },
          i = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر"
          ];
        return e.defineLocale("ar", {
          months: i,
          monthsShort: i,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return "م" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: s("s"),
            ss: s("s"),
            m: s("m"),
            mm: s("m"),
            h: s("h"),
            hh: s("h"),
            d: s("d"),
            dd: s("d"),
            M: s("M"),
            MM: s("M"),
            y: s("y"),
            yy: s("y")
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          1: "-inci",
          5: "-inci",
          8: "-inci",
          70: "-inci",
          80: "-inci",
          2: "-nci",
          7: "-nci",
          20: "-nci",
          50: "-nci",
          3: "-üncü",
          4: "-üncü",
          100: "-üncü",
          6: "-ncı",
          9: "-uncu",
          10: "-uncu",
          30: "-uncu",
          60: "-ıncı",
          90: "-ıncı"
        };
        return e.defineLocale("az", {
          months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
            "_"
          ),
          monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
            "_"
          ),
          weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
            "_"
          ),
          weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
          weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyyə",
            ss: "%d saniyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function(e) {
            return /^(gündüz|axşam)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "gecə"
              : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function(e) {
            if (0 === e) return e + "-ıncı";
            var n = e % 10,
              a = e % 100 - n,
              r = e >= 100 ? 100 : null;
            return e + (t[n] || t[a] || t[r]);
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t) {
          var n = e.split("_");
          return t % 10 == 1 && t % 100 != 11
            ? n[0]
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? n[1]
              : n[2];
        }
        function n(e, n, a) {
          var r = {
            ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
          };
          return "m" === a
            ? n ? "хвіліна" : "хвіліну"
            : "h" === a ? (n ? "гадзіна" : "гадзіну") : e + " " + t(r[a], +e);
        }
        return e.defineLocale("be", {
          months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
              "_"
            ),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
              "_"
            )
          },
          monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
            "_"
          ),
          weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
              "_"
            ),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
              "_"
            ),
            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
          },
          weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
          },
          calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function() {
              return "[У] dddd [ў] LT";
            },
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return "[У мінулую] dddd [ў] LT";
                case 1:
                case 2:
                case 4:
                  return "[У мінулы] dddd [ў] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: "дзень",
            dd: n,
            M: "месяц",
            MM: n,
            y: "год",
            yy: n
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function(e) {
            return /^(дня|вечара)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "ночы"
              : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function(e, t) {
            switch (t) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return (e % 10 != 2 && e % 10 != 3) ||
                  e % 100 == 12 ||
                  e % 100 == 13
                  ? e + "-ы"
                  : e + "-і";
              case "D":
                return e + "-га";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("bg", {
          months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
            "_"
          ),
          monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
            "_"
          ),
          weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split(
            "_"
          ),
          weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[В изминалата] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[В изминалия] dddd [в] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
            var t = e % 10,
              n = e % 100;
            return 0 === e
              ? e + "-ев"
              : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                  ? e + "-ти"
                  : 1 === t
                    ? e + "-ви"
                    : 2 === t
                      ? e + "-ри"
                      : 7 === t || 8 === t ? e + "-ми" : e + "-ти";
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("bm", {
          months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
            "_"
          ),
          monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
            "_"
          ),
          weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
          weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
          weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
          },
          calendar: {
            sameDay: "[Bi lɛrɛ] LT",
            nextDay: "[Sini lɛrɛ] LT",
            nextWeek: "dddd [don lɛrɛ] LT",
            lastDay: "[Kunu lɛrɛ] LT",
            lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s kɔnɔ",
            past: "a bɛ %s bɔ",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "lɛrɛ kelen",
            hh: "lɛrɛ %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d"
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
          },
          n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
          };
        return e.defineLocale("bn", {
          months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
            "_"
          ),
          monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split(
            "_"
          ),
          weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
            "_"
          ),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
          weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
          longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
          },
          calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            ss: "%d সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর"
          },
          preparse: function(e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ("রাত" === t && e >= 4) ||
              ("দুপুর" === t && e < 5) ||
              "বিকাল" === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "রাত"
              : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
          },
          n = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
          };
        return e.defineLocale("bo", {
          months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
            "_"
          ),
          monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
            "_"
          ),
          weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
            "_"
          ),
          weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split(
            "_"
          ),
          weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split(
            "_"
          ),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
          },
          calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            ss: "%d སྐར་ཆ།",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ"
          },
          preparse: function(e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ("མཚན་མོ" === t && e >= 4) ||
              ("ཉིན་གུང" === t && e < 5) ||
              "དགོང་དག" === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "མཚན་མོ"
              : e < 10
                ? "ཞོགས་ཀས"
                : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n) {
          return e + " " + r({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e);
        }
        function n(e) {
          switch (a(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz";
          }
        }
        function a(e) {
          return e > 9 ? a(e % 10) : e;
        }
        function r(e, t) {
          return 2 === t ? s(e) : e;
        }
        function s(e) {
          var t = { m: "v", b: "v", d: "z" };
          return void 0 === t[e.charAt(0)]
            ? e
            : t[e.charAt(0)] + e.substring(1);
        }
        return e.defineLocale("br", {
          months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            "_"
          ),
          monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
            "_"
          ),
          weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
          },
          calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: t,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: t,
            M: "ur miz",
            MM: t,
            y: "ur bloaz",
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function(e) {
            return e + (1 === e ? "añ" : "vet");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n) {
          var a = e + " ";
          switch (n) {
            case "ss":
              return (a +=
                1 === e
                  ? "sekunda"
                  : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
            case "m":
              return t ? "jedna minuta" : "jedne minute";
            case "mm":
              return (a +=
                1 === e
                  ? "minuta"
                  : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
            case "h":
              return t ? "jedan sat" : "jednog sata";
            case "hh":
              return (a +=
                1 === e
                  ? "sat"
                  : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
            case "dd":
              return (a += 1 === e ? "dan" : "dana");
            case "MM":
              return (a +=
                1 === e
                  ? "mjesec"
                  : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
            case "yy":
              return (a +=
                1 === e
                  ? "godina"
                  : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
          }
        }
        return e.defineLocale("bs", {
          months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: "dan",
            dd: t,
            M: "mjesec",
            MM: t,
            y: "godinu",
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ca", {
          months: {
            standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
              "_"
            ),
            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
              "_"
            ),
            isFormat: /D[oD]?(\s)+MMMM/
          },
          monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
            "_"
          ),
          weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
          },
          calendar: {
            sameDay: function() {
              return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function() {
              return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextWeek: function() {
              return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function() {
              return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function() {
              return (
                "[el] dddd [passat a " +
                (1 !== this.hours() ? "les" : "la") +
                "] LT"
              );
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function(e, t) {
            var n =
              1 === e
                ? "r"
                : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
            return ("w" !== t && "W" !== t) || (n = "a"), e + n;
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e) {
          return e > 1 && e < 5 && 1 != ~~(e / 10);
        }
        function n(e, n, a, r) {
          var s = e + " ";
          switch (a) {
            case "s":
              return n || r ? "pár sekund" : "pár sekundami";
            case "ss":
              return n || r
                ? s + (t(e) ? "sekundy" : "sekund")
                : s + "sekundami";
            case "m":
              return n ? "minuta" : r ? "minutu" : "minutou";
            case "mm":
              return n || r ? s + (t(e) ? "minuty" : "minut") : s + "minutami";
            case "h":
              return n ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
              return n || r ? s + (t(e) ? "hodiny" : "hodin") : s + "hodinami";
            case "d":
              return n || r ? "den" : "dnem";
            case "dd":
              return n || r ? s + (t(e) ? "dny" : "dní") : s + "dny";
            case "M":
              return n || r ? "měsíc" : "měsícem";
            case "MM":
              return n || r ? s + (t(e) ? "měsíce" : "měsíců") : s + "měsíci";
            case "y":
              return n || r ? "rok" : "rokem";
            case "yy":
              return n || r ? s + (t(e) ? "roky" : "let") : s + "lety";
          }
        }
        var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
            "_"
          ),
          r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return e.defineLocale("cs", {
          months: a,
          monthsShort: r,
          monthsParse: (function(e, t) {
            var n,
              a = [];
            for (n = 0; n < 12; n++)
              a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
            return a;
          })(a, r),
          shortMonthsParse: (function(e) {
            var t,
              n = [];
            for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
            return n;
          })(r),
          longMonthsParse: (function(e) {
            var t,
              n = [];
            for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
            return n;
          })(a),
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
            "_"
          ),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[v neděli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve středu v] LT";
                case 4:
                  return "[ve čtvrtek v] LT";
                case 5:
                  return "[v pátek v] LT";
                case 6:
                  return "[v sobotu v] LT";
              }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[minulou neděli v] LT";
                case 1:
                case 2:
                  return "[minulé] dddd [v] LT";
                case 3:
                  return "[minulou středu v] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("cv", {
          months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
            "_"
          ),
          monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
            "_"
          ),
          weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
            "_"
          ),
          weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
          weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
          },
          calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
          },
          relativeTime: {
            future: function(e) {
              return (
                e +
                (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
              );
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            ss: "%d ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: "%d-мӗш",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("cy", {
          months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
            "_"
          ),
          monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split(
            "_"
          ),
          weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
            "_"
          ),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function(e) {
            var t = e,
              n = "",
              a = [
                "",
                "af",
                "il",
                "ydd",
                "ydd",
                "ed",
                "ed",
                "ed",
                "fed",
                "fed",
                "fed",
                "eg",
                "fed",
                "eg",
                "eg",
                "fed",
                "eg",
                "eg",
                "fed",
                "eg",
                "fed"
              ];
            return (
              t > 20
                ? (n =
                    40 === t || 50 === t || 60 === t || 80 === t || 100 === t
                      ? "fed"
                      : "ain")
                : t > 0 && (n = a[t]),
              e + n
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("da", {
          months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
            "_"
          ),
          weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "på dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
          };
          return t ? r[n][0] : r[n][1];
        }
        return e.defineLocale("de-at", {
          months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
          monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
          };
          return t ? r[n][0] : r[n][1];
        }
        return e.defineLocale("de-ch", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
          monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
          weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
          };
          return t ? r[n][0] : r[n][1];
        }
        return e.defineLocale("de", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
          monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = [
            "ޖެނުއަރީ",
            "ފެބްރުއަރީ",
            "މާރިޗު",
            "އޭޕްރީލު",
            "މޭ",
            "ޖޫން",
            "ޖުލައި",
            "އޯގަސްޓު",
            "ސެޕްޓެމްބަރު",
            "އޮކްޓޯބަރު",
            "ނޮވެމްބަރު",
            "ޑިސެމްބަރު"
          ],
          n = [
            "އާދިއްތަ",
            "ހޯމަ",
            "އަންގާރަ",
            "ބުދަ",
            "ބުރާސްފަތި",
            "ހުކުރު",
            "ހޮނިހިރު"
          ];
        return e.defineLocale("dv", {
          months: t,
          monthsShort: t,
          weekdays: n,
          weekdaysShort: n,
          weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          meridiemParse: /މކ|މފ/,
          isPM: function(e) {
            return "މފ" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "މކ" : "މފ";
          },
          calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            ss: "d% ސިކުންތު",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d"
          },
          preparse: function(e) {
            return e.replace(/،/g, ",");
          },
          postformat: function(e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 7, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e) {
          return (
            e instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }
        return e.defineLocale("el", {
          monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
            "_"
          ),
          monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
            "_"
          ),
          months: function(e, t) {
            return e
              ? "string" == typeof t &&
                /D/.test(t.substring(0, t.indexOf("MMMM")))
                ? this._monthsGenitiveEl[e.month()]
                : this._monthsNominativeEl[e.month()]
              : this._monthsNominativeEl;
          },
          monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split(
            "_"
          ),
          weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split(
            "_"
          ),
          weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
          weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ";
          },
          isPM: function(e) {
            return "μ" === (e + "").toLowerCase()[0];
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 6:
                  return "[το προηγούμενο] dddd [{}] LT";
                default:
                  return "[την προηγούμενη] dddd [{}] LT";
              }
            },
            sameElse: "L"
          },
          calendar: function(e, n) {
            var a = this._calendarEl[e],
              r = n && n.hours();
            return (
              t(a) && (a = a.apply(n)),
              a.replace("{}", r % 12 == 1 ? "στη" : "στις")
            );
          },
          relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            ss: "%d δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: "%dη",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("en-au", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
          ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("en-ca", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
          ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("en-gb", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
          ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("en-ie", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
          ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("en-il", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
          ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("en-nz", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
          ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("eo", {
          months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split(
            "_"
          ),
          weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
          weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-a de] MMMM, YYYY",
            LLL: "D[-a de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function(e) {
            return "p" === e.charAt(0).toLowerCase();
          },
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? "p.t.m." : "P.T.M.") : n ? "a.t.m." : "A.T.M.";
          },
          calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "sekundoj",
            ss: "%d sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: "%da",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          a = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i
          ],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es-do", {
          months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
            "_"
          ),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
          },
          calendar: {
            sameDay: function() {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return e.defineLocale("es-us", {
          months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsParseExact: !0,
          weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
            "_"
          ),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "MMMM [de] D [de] YYYY",
            LLL: "MMMM [de] D [de] YYYY h:mm A",
            LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
          },
          calendar: {
            sameDay: function() {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          a = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i
          ],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es", {
          months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
            "_"
          ),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
          },
          calendar: {
            sameDay: function() {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            ss: [e + "sekundi", e + "sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [e + " aasta", e + " aastat"]
          };
          return t ? (r[n][2] ? r[n][2] : r[n][1]) : a ? r[n][0] : r[n][1];
        }
        return e.defineLocale("et", {
          months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
            "_"
          ),
          monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
            "_"
          ),
          weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
            "_"
          ),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: "%d päeva",
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("eu", {
          months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
            "_"
          ),
          monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
            "_"
          ),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
          },
          calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
          },
          n = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
          };
        return e.defineLocale("fa", {
          months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_"
          ),
          monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_"
          ),
          weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
            "_"
          ),
          weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
            "_"
          ),
          weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function(e) {
            return /بعد از ظهر/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
          },
          calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چند ثانیه",
            ss: "ثانیه d%",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
          },
          preparse: function(e) {
            return e
              .replace(/[۰-۹]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          dayOfMonthOrdinalParse: /\d{1,2}م/,
          ordinal: "%dم",
          week: { dow: 6, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, a, r) {
          var s = "";
          switch (a) {
            case "s":
              return r ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              return r ? "sekunnin" : "sekuntia";
            case "m":
              return r ? "minuutin" : "minuutti";
            case "mm":
              s = r ? "minuutin" : "minuuttia";
              break;
            case "h":
              return r ? "tunnin" : "tunti";
            case "hh":
              s = r ? "tunnin" : "tuntia";
              break;
            case "d":
              return r ? "päivän" : "päivä";
            case "dd":
              s = r ? "päivän" : "päivää";
              break;
            case "M":
              return r ? "kuukauden" : "kuukausi";
            case "MM":
              s = r ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return r ? "vuoden" : "vuosi";
            case "yy":
              s = r ? "vuoden" : "vuotta";
          }
          return (s = n(e, r) + " " + s);
        }
        function n(e, t) {
          return e < 10 ? (t ? r[e] : a[e]) : e;
        }
        var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
            " "
          ),
          r = [
            "nolla",
            "yhden",
            "kahden",
            "kolmen",
            "neljän",
            "viiden",
            "kuuden",
            a[7],
            a[8],
            a[9]
          ];
        return e.defineLocale("fi", {
          months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
            "_"
          ),
          monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
            "_"
          ),
          weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
            "_"
          ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
          },
          calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("fo", {
          months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
            "_"
          ),
          weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
            "_"
          ),
          weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
          weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            ss: "%d sekundir",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaði",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("fr-ca", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function(e, t) {
            switch (t) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("fr-ch", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function(e, t) {
            switch (t) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("fr", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function(e, t) {
            switch (t) {
              case "D":
                return e + (1 === e ? "er" : "");
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
            "_"
          ),
          n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        return e.defineLocale("fy", {
          months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
            "_"
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsParseExact: !0,
          weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
            "_"
          ),
          weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
          weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = [
            "Am Faoilleach",
            "An Gearran",
            "Am Màrt",
            "An Giblean",
            "An Cèitean",
            "An t-Ògmhios",
            "An t-Iuchar",
            "An Lùnastal",
            "An t-Sultain",
            "An Dàmhair",
            "An t-Samhain",
            "An Dùbhlachd"
          ],
          n = [
            "Faoi",
            "Gear",
            "Màrt",
            "Gibl",
            "Cèit",
            "Ògmh",
            "Iuch",
            "Lùn",
            "Sult",
            "Dàmh",
            "Samh",
            "Dùbh"
          ],
          a = [
            "Didòmhnaich",
            "Diluain",
            "Dimàirt",
            "Diciadain",
            "Diardaoin",
            "Dihaoine",
            "Disathairne"
          ],
          r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
          s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        return e.defineLocale("gd", {
          months: t,
          monthsShort: n,
          monthsParseExact: !0,
          weekdays: a,
          weekdaysShort: r,
          weekdaysMin: s,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function(e) {
            return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("gl", {
          months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
            "_"
          ),
          monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split(
            "_"
          ),
          weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
          },
          calendar: {
            sameDay: function() {
              return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextDay: function() {
              return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextWeek: function() {
              return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            lastDay: function() {
              return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
            },
            lastWeek: function() {
              return (
                "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
              );
            },
            sameElse: "L"
          },
          relativeTime: {
            future: function(e) {
              return 0 === e.indexOf("un") ? "n" + e : "en " + e;
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            s: ["thodde secondanim", "thodde second"],
            ss: [e + " secondanim", e + " second"],
            m: ["eka mintan", "ek minute"],
            mm: [e + " mintanim", e + " mintam"],
            h: ["eka horan", "ek hor"],
            hh: [e + " horanim", e + " hor"],
            d: ["eka disan", "ek dis"],
            dd: [e + " disanim", e + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [e + " mhoineanim", e + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [e + " vorsanim", e + " vorsam"]
          };
          return t ? r[n][0] : r[n][1];
        }
        return e.defineLocale("gom-latn", {
          months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
            "_"
          ),
          monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split(
            "_"
          ),
          weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
          weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]"
          },
          calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Ieta to] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fatlo] dddd[,] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s",
            past: "%s adim",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function(e, t) {
            switch (t) {
              case "D":
                return e + "er";
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
              case "w":
              case "W":
                return e;
            }
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /rati|sokalli|donparam|sanje/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "rati" === t
                ? e < 4 ? e : e + 12
                : "sokalli" === t
                  ? e
                  : "donparam" === t
                    ? e > 12 ? e : e + 12
                    : "sanje" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "rati"
              : e < 12
                ? "sokalli"
                : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦"
          },
          n = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0"
          };
        return e.defineLocale("gu", {
          months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
            "_"
          ),
          monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
            "_"
          ),
          weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
          weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
          longDateFormat: {
            LT: "A h:mm વાગ્યે",
            LTS: "A h:mm:ss વાગ્યે",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm વાગ્યે",
            LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
          },
          calendar: {
            sameDay: "[આજ] LT",
            nextDay: "[કાલે] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ગઇકાલે] LT",
            lastWeek: "[પાછલા] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s મા",
            past: "%s પેહલા",
            s: "અમુક પળો",
            ss: "%d સેકંડ",
            m: "એક મિનિટ",
            mm: "%d મિનિટ",
            h: "એક કલાક",
            hh: "%d કલાક",
            d: "એક દિવસ",
            dd: "%d દિવસ",
            M: "એક મહિનો",
            MM: "%d મહિનો",
            y: "એક વર્ષ",
            yy: "%d વર્ષ"
          },
          preparse: function(e) {
            return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "રાત" === t
                ? e < 4 ? e : e + 12
                : "સવાર" === t
                  ? e
                  : "બપોર" === t
                    ? e >= 10 ? e : e + 12
                    : "સાંજ" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "રાત"
              : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("he", {
          months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
            "_"
          ),
          monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
            "_"
          ),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function(e) {
              return 2 === e ? "שעתיים" : e + " שעות";
            },
            d: "יום",
            dd: function(e) {
              return 2 === e ? "יומיים" : e + " ימים";
            },
            M: "חודש",
            MM: function(e) {
              return 2 === e ? "חודשיים" : e + " חודשים";
            },
            y: "שנה",
            yy: function(e) {
              return 2 === e
                ? "שנתיים"
                : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים";
            }
          },
          meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function(e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 5
              ? "לפנות בוקר"
              : e < 10
                ? "בבוקר"
                : e < 12
                  ? n ? 'לפנה"צ' : "לפני הצהריים"
                  : e < 18 ? (n ? 'אחה"צ' : "אחרי הצהריים") : "בערב";
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };
        return e.defineLocale("hi", {
          months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
            "_"
          ),
          monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
            "_"
          ),
          weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            ss: "%d सेकंड",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "रात" === t
                ? e < 4 ? e : e + 12
                : "सुबह" === t
                  ? e
                  : "दोपहर" === t
                    ? e >= 10 ? e : e + 12
                    : "शाम" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "रात"
              : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n) {
          var a = e + " ";
          switch (n) {
            case "ss":
              return (a +=
                1 === e
                  ? "sekunda"
                  : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
            case "m":
              return t ? "jedna minuta" : "jedne minute";
            case "mm":
              return (a +=
                1 === e
                  ? "minuta"
                  : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
            case "h":
              return t ? "jedan sat" : "jednog sata";
            case "hh":
              return (a +=
                1 === e
                  ? "sat"
                  : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
            case "dd":
              return (a += 1 === e ? "dan" : "dana");
            case "MM":
              return (a +=
                1 === e
                  ? "mjesec"
                  : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
            case "yy":
              return (a +=
                1 === e
                  ? "godina"
                  : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
          }
        }
        return e.defineLocale("hr", {
          months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
              "_"
            ),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
              "_"
            )
          },
          monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: "dan",
            dd: t,
            M: "mjesec",
            MM: t,
            y: "godinu",
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = e;
          switch (n) {
            case "s":
              return a || t ? "néhány másodperc" : "néhány másodperce";
            case "ss":
              return r + (a || t) ? " másodperc" : " másodperce";
            case "m":
              return "egy" + (a || t ? " perc" : " perce");
            case "mm":
              return r + (a || t ? " perc" : " perce");
            case "h":
              return "egy" + (a || t ? " óra" : " órája");
            case "hh":
              return r + (a || t ? " óra" : " órája");
            case "d":
              return "egy" + (a || t ? " nap" : " napja");
            case "dd":
              return r + (a || t ? " nap" : " napja");
            case "M":
              return "egy" + (a || t ? " hónap" : " hónapja");
            case "MM":
              return r + (a || t ? " hónap" : " hónapja");
            case "y":
              return "egy" + (a || t ? " év" : " éve");
            case "yy":
              return r + (a || t ? " év" : " éve");
          }
          return "";
        }
        function n(e) {
          return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]";
        }
        var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
          " "
        );
        return e.defineLocale("hu", {
          months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
            "_"
          ),
          monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split(
            "_"
          ),
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
            "_"
          ),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
          },
          meridiemParse: /de|du/i,
          isPM: function(e) {
            return "u" === e.charAt(1).toLowerCase();
          },
          meridiem: function(e, t, n) {
            return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
              return n.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
              return n.call(this, !1);
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("hy-am", {
          months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
              "_"
            ),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
              "_"
            )
          },
          monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
            "_"
          ),
          weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
            "_"
          ),
          weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
          },
          calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function() {
              return "dddd [օրը ժամը] LT";
            },
            lastWeek: function() {
              return "[անցած] dddd [օրը ժամը] LT";
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            ss: "%d վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function(e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e);
          },
          meridiem: function(e) {
            return e < 4
              ? "գիշերվա"
              : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան";
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function(e, t) {
            switch (t) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === e ? e + "-ին" : e + "-րդ";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("id", {
          months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
            "_"
          ),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "pagi" === t
                ? e
                : "siang" === t
                  ? e >= 11 ? e : e + 12
                  : "sore" === t || "malam" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? "pagi"
              : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e) {
          return e % 100 == 11 || e % 10 != 1;
        }
        function n(e, n, a, r) {
          var s = e + " ";
          switch (a) {
            case "s":
              return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
              return t(e)
                ? s + (n || r ? "sekúndur" : "sekúndum")
                : s + "sekúnda";
            case "m":
              return n ? "mínúta" : "mínútu";
            case "mm":
              return t(e)
                ? s + (n || r ? "mínútur" : "mínútum")
                : n ? s + "mínúta" : s + "mínútu";
            case "hh":
              return t(e)
                ? s + (n || r ? "klukkustundir" : "klukkustundum")
                : s + "klukkustund";
            case "d":
              return n ? "dagur" : r ? "dag" : "degi";
            case "dd":
              return t(e)
                ? n ? s + "dagar" : s + (r ? "daga" : "dögum")
                : n ? s + "dagur" : s + (r ? "dag" : "degi");
            case "M":
              return n ? "mánuður" : r ? "mánuð" : "mánuði";
            case "MM":
              return t(e)
                ? n ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum")
                : n ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
            case "y":
              return n || r ? "ár" : "ári";
            case "yy":
              return t(e)
                ? s + (n || r ? "ár" : "árum")
                : s + (n || r ? "ár" : "ári");
          }
        }
        return e.defineLocale("is", {
          months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
            "_"
          ),
          weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
            "_"
          ),
          weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
          weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
          },
          calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: "klukkustund",
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("it", {
          months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_"
          ),
          weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
            "_"
          ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[la scorsa] dddd [alle] LT";
                default:
                  return "[lo scorso] dddd [alle] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: function(e) {
              return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ja", {
          months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_"
          ),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_"
          ),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split(
            "_"
          ),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 HH:mm dddd",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日 HH:mm dddd"
          },
          meridiemParse: /午前|午後/i,
          isPM: function(e) {
            return "午後" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "午前" : "午後";
          },
          calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: "[来週]dddd LT",
            lastDay: "[昨日] LT",
            lastWeek: "[前週]dddd LT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function(e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            ss: "%d秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("jv", {
          months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
            "_"
          ),
          weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "enjing" === t
                ? e
                : "siyang" === t
                  ? e >= 11 ? e : e + 12
                  : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? "enjing"
              : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
          },
          calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ka", {
          months: {
            standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
              "_"
            ),
            format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split(
              "_"
            )
          },
          monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
            "_"
          ),
          weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
              "_"
            ),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
              "_"
            ),
            isFormat: /(წინა|შემდეგ)/
          },
          weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
          weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
          },
          relativeTime: {
            future: function(e) {
              return /(წამი|წუთი|საათი|წელი)/.test(e)
                ? e.replace(/ი$/, "ში")
                : e + "ში";
            },
            past: function(e) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                ? e.replace(/(ი|ე)$/, "ის უკან")
                : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0;
            },
            s: "რამდენიმე წამი",
            ss: "%d წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function(e) {
            return 0 === e
              ? e
              : 1 === e
                ? e + "-ლი"
                : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
                  ? "მე-" + e
                  : e + "-ე";
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          0: "-ші",
          1: "-ші",
          2: "-ші",
          3: "-ші",
          4: "-ші",
          5: "-ші",
          6: "-шы",
          7: "-ші",
          8: "-ші",
          9: "-шы",
          10: "-шы",
          20: "-шы",
          30: "-шы",
          40: "-шы",
          50: "-ші",
          60: "-шы",
          70: "-ші",
          80: "-ші",
          90: "-шы",
          100: "-ші"
        };
        return e.defineLocale("kk", {
          months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
            "_"
          ),
          monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
            "_"
          ),
          weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
            "_"
          ),
          weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
          weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            ss: "%d секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function(e) {
            var n = e % 10,
              a = e >= 100 ? 100 : null;
            return e + (t[e] || t[n] || t[a]);
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("km", {
          months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
          monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
          weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
          weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
            "_"
          ),
          weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            ss: "%d វិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ"
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦"
          },
          n = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0"
          };
        return e.defineLocale("kn", {
          months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
            "_"
          ),
          monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
            "_"
          ),
          weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
          weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
          },
          calendar: {
            sameDay: "[ಇಂದು] LT",
            nextDay: "[ನಾಳೆ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ನಿನ್ನೆ] LT",
            lastWeek: "[ಕೊನೆಯ] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s ನಂತರ",
            past: "%s ಹಿಂದೆ",
            s: "ಕೆಲವು ಕ್ಷಣಗಳು",
            ss: "%d ಸೆಕೆಂಡುಗಳು",
            m: "ಒಂದು ನಿಮಿಷ",
            mm: "%d ನಿಮಿಷ",
            h: "ಒಂದು ಗಂಟೆ",
            hh: "%d ಗಂಟೆ",
            d: "ಒಂದು ದಿನ",
            dd: "%d ದಿನ",
            M: "ಒಂದು ತಿಂಗಳು",
            MM: "%d ತಿಂಗಳು",
            y: "ಒಂದು ವರ್ಷ",
            yy: "%d ವರ್ಷ"
          },
          preparse: function(e) {
            return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "ರಾತ್ರಿ" === t
                ? e < 4 ? e : e + 12
                : "ಬೆಳಿಗ್ಗೆ" === t
                  ? e
                  : "ಮಧ್ಯಾಹ್ನ" === t
                    ? e >= 10 ? e : e + 12
                    : "ಸಂಜೆ" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "ರಾತ್ರಿ"
              : e < 10
                ? "ಬೆಳಿಗ್ಗೆ"
                : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
          ordinal: function(e) {
            return e + "ನೇ";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ko", {
          months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
            "_"
          ),
          monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
            "_"
          ),
          weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split(
            "_"
          ),
          weekdaysShort: "일_월_화_수_목_금_토".split("_"),
          weekdaysMin: "일_월_화_수_목_금_토".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm"
          },
          calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function(e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "일";
              case "M":
                return e + "월";
              case "w":
              case "W":
                return e + "주";
              default:
                return e;
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function(e) {
            return "오후" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "오전" : "오후";
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          0: "-чү",
          1: "-чи",
          2: "-чи",
          3: "-чү",
          4: "-чү",
          5: "-чи",
          6: "-чы",
          7: "-чи",
          8: "-чи",
          9: "-чу",
          10: "-чу",
          20: "-чы",
          30: "-чу",
          40: "-чы",
          50: "-чү",
          60: "-чы",
          70: "-чи",
          80: "-чи",
          90: "-чу",
          100: "-чү"
        };
        return e.defineLocale("ky", {
          months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
            "_"
          ),
          monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split(
            "_"
          ),
          weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
            "_"
          ),
          weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
          weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кече саат] LT",
            lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            ss: "%d секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
          ordinal: function(e) {
            var n = e % 10,
              a = e >= 100 ? 100 : null;
            return e + (t[e] || t[n] || t[a]);
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
          };
          return t ? r[n][0] : r[n][1];
        }
        function n(e) {
          return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
        }
        function a(e) {
          return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
        }
        function r(e) {
          if (((e = parseInt(e, 10)), isNaN(e))) return !1;
          if (e < 0) return !0;
          if (e < 10) return 4 <= e && e <= 7;
          if (e < 100) {
            var t = e % 10,
              n = e / 10;
            return r(0 === t ? n : t);
          }
          if (e < 1e4) {
            for (; e >= 10; ) e /= 10;
            return r(e);
          }
          return (e /= 1e3), r(e);
        }
        return e.defineLocale("lb", {
          months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
          monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
            "_"
          ),
          weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
          },
          calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 2:
                case 4:
                  return "[Leschten] dddd [um] LT";
                default:
                  return "[Leschte] dddd [um] LT";
              }
            }
          },
          relativeTime: {
            future: n,
            past: a,
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: t,
            mm: "%d Minutten",
            h: t,
            hh: "%d Stonnen",
            d: t,
            dd: "%d Deeg",
            M: t,
            MM: "%d Méint",
            y: t,
            yy: "%d Joer"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("lo", {
          months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
          monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
          weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function(e) {
            return "ຕອນແລງ" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
          },
          calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            ss: "%d ວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function(e) {
            return "ທີ່" + e;
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          return t
            ? "kelios sekundės"
            : a ? "kelių sekundžių" : "kelias sekundes";
        }
        function n(e, t, n, a) {
          return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
        }
        function a(e) {
          return e % 10 == 0 || (e > 10 && e < 20);
        }
        function r(e) {
          return i[e].split("_");
        }
        function s(e, t, s, i) {
          var o = e + " ";
          return 1 === e
            ? o + n(e, t, s[0], i)
            : t
              ? o + (a(e) ? r(s)[1] : r(s)[0])
              : i ? o + r(s)[1] : o + (a(e) ? r(s)[1] : r(s)[2]);
        }
        var i = {
          ss: "sekundė_sekundžių_sekundes",
          m: "minutė_minutės_minutę",
          mm: "minutės_minučių_minutes",
          h: "valanda_valandos_valandą",
          hh: "valandos_valandų_valandas",
          d: "diena_dienos_dieną",
          dd: "dienos_dienų_dienas",
          M: "mėnuo_mėnesio_mėnesį",
          MM: "mėnesiai_mėnesių_mėnesius",
          y: "metai_metų_metus",
          yy: "metai_metų_metus"
        };
        return e.defineLocale("lt", {
          months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
              "_"
            ),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
              "_"
            ),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
          },
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
            "_"
          ),
          weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
              "_"
            ),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
              "_"
            ),
            isFormat: /dddd HH:mm/
          },
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
          },
          calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: t,
            ss: s,
            m: n,
            mm: s,
            h: n,
            hh: s,
            d: n,
            dd: s,
            M: n,
            MM: s,
            y: n,
            yy: s
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function(e) {
            return e + "-oji";
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n) {
          return n
            ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3]
            : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
        }
        function n(e, n, a) {
          return e + " " + t(s[a], e, n);
        }
        function a(e, n, a) {
          return t(s[a], e, n);
        }
        function r(e, t) {
          return t ? "dažas sekundes" : "dažām sekundēm";
        }
        var s = {
          ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
          m: "minūtes_minūtēm_minūte_minūtes".split("_"),
          mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
          h: "stundas_stundām_stunda_stundas".split("_"),
          hh: "stundas_stundām_stunda_stundas".split("_"),
          d: "dienas_dienām_diena_dienas".split("_"),
          dd: "dienas_dienām_diena_dienas".split("_"),
          M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          y: "gada_gadiem_gads_gadi".split("_"),
          yy: "gada_gadiem_gads_gadi".split("_")
        };
        return e.defineLocale("lv", {
          months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
            "_"
          ),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
          },
          calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: r,
            ss: n,
            m: a,
            mm: n,
            h: a,
            hh: n,
            d: a,
            dd: n,
            M: a,
            MM: n,
            y: a,
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, n, a) {
            var r = t.words[a];
            return 1 === a.length
              ? n ? r[0] : r[1]
              : e + " " + t.correctGrammaticalCase(e, r);
          }
        };
        return e.defineLocale("me", {
          months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
          monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
              return [
                "[prošle] [nedjelje] [u] LT",
                "[prošlog] [ponedjeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srijede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT"
              ][this.day()];
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: t.translate,
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: "dan",
            dd: t.translate,
            M: "mjesec",
            MM: t.translate,
            y: "godinu",
            yy: t.translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("mi", {
          months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
            "_"
          ),
          monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
            "_"
          ),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split(
            "_"
          ),
          weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
          },
          calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            ss: "%d hēkona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("mk", {
          months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
            "_"
          ),
          monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
            "_"
          ),
          weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
            "_"
          ),
          weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
          weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Изминатата] dddd [во] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Изминатиот] dddd [во] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "после %s",
            past: "пред %s",
            s: "неколку секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеци",
            y: "година",
            yy: "%d години"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
            var t = e % 10,
              n = e % 100;
            return 0 === e
              ? e + "-ев"
              : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                  ? e + "-ти"
                  : 1 === t
                    ? e + "-ви"
                    : 2 === t
                      ? e + "-ри"
                      : 7 === t || 8 === t ? e + "-ми" : e + "-ти";
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ml", {
          months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
            "_"
          ),
          monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
            "_"
          ),
          weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
          weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
          longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
          },
          calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            ss: "%d സെക്കൻഡ്",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ("രാത്രി" === t && e >= 4) ||
              "ഉച്ച കഴിഞ്ഞ്" === t ||
              "വൈകുന്നേരം" === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "രാത്രി"
              : e < 12
                ? "രാവിലെ"
                : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി";
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = "";
          if (t)
            switch (n) {
              case "s":
                r = "काही सेकंद";
                break;
              case "ss":
                r = "%d सेकंद";
                break;
              case "m":
                r = "एक मिनिट";
                break;
              case "mm":
                r = "%d मिनिटे";
                break;
              case "h":
                r = "एक तास";
                break;
              case "hh":
                r = "%d तास";
                break;
              case "d":
                r = "एक दिवस";
                break;
              case "dd":
                r = "%d दिवस";
                break;
              case "M":
                r = "एक महिना";
                break;
              case "MM":
                r = "%d महिने";
                break;
              case "y":
                r = "एक वर्ष";
                break;
              case "yy":
                r = "%d वर्षे";
            }
          else
            switch (n) {
              case "s":
                r = "काही सेकंदां";
                break;
              case "ss":
                r = "%d सेकंदां";
                break;
              case "m":
                r = "एका मिनिटा";
                break;
              case "mm":
                r = "%d मिनिटां";
                break;
              case "h":
                r = "एका तासा";
                break;
              case "hh":
                r = "%d तासां";
                break;
              case "d":
                r = "एका दिवसा";
                break;
              case "dd":
                r = "%d दिवसां";
                break;
              case "M":
                r = "एका महिन्या";
                break;
              case "MM":
                r = "%d महिन्यां";
                break;
              case "y":
                r = "एका वर्षा";
                break;
              case "yy":
                r = "%d वर्षां";
            }
          return r.replace(/%d/i, e);
        }
        var n = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };
        return e.defineLocale("mr", {
          months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
            "_"
          ),
          monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
            "_"
          ),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return n[e];
            });
          },
          meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "रात्री" === t
                ? e < 4 ? e : e + 12
                : "सकाळी" === t
                  ? e
                  : "दुपारी" === t
                    ? e >= 10 ? e : e + 12
                    : "सायंकाळी" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "रात्री"
              : e < 10
                ? "सकाळी"
                : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ms-my", {
          months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_"
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "pagi" === t
                ? e
                : "tengahari" === t
                  ? e >= 11 ? e : e + 12
                  : "petang" === t || "malam" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? "pagi"
              : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ms", {
          months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_"
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "pagi" === t
                ? e
                : "tengahari" === t
                  ? e >= 11 ? e : e + 12
                  : "petang" === t || "malam" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? "pagi"
              : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("mt", {
          months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
            "_"
          ),
          monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
            "_"
          ),
          weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
            "_"
          ),
          weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
          weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[Għada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-bieraħ fil-]LT",
            lastWeek: "dddd [li għadda] [fil-]LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "f’ %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "siegħa",
            hh: "%d siegħat",
            d: "ġurnata",
            dd: "%d ġranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
          },
          n = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
          };
        return e.defineLocale("my", {
          months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
            "_"
          ),
          monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
            "_"
          ),
          weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
            "_"
          ),
          weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L"
          },
          relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            ss: "%d စက္ကန့်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်"
          },
          preparse: function(e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("nb", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
          monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
            "_"
          ),
          weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };
        return e.defineLocale("ne", {
          months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
            "_"
          ),
          monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
            "_"
          ),
          weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
          weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "राति" === t
                ? e < 4 ? e : e + 12
                : "बिहान" === t
                  ? e
                  : "दिउँसो" === t
                    ? e >= 10 ? e : e + 12
                    : "साँझ" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 3
              ? "राति"
              : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति";
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            ss: "%d सेकेण्ड",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
          n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          a = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i
          ],
          r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl-be", {
          months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
          n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          a = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i
          ],
          r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl", {
          months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("nn", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
            "_"
          ),
          weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
            "_"
          ),
          weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
          weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
          },
          calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦"
          },
          n = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
          };
        return e.defineLocale("pa-in", {
          months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
            "_"
          ),
          monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
            "_"
          ),
          weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split(
            "_"
          ),
          weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
          weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
          longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
          },
          calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            ss: "%d ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ"
          },
          preparse: function(e) {
            return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "ਰਾਤ" === t
                ? e < 4 ? e : e + 12
                : "ਸਵੇਰ" === t
                  ? e
                  : "ਦੁਪਹਿਰ" === t
                    ? e >= 10 ? e : e + 12
                    : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "ਰਾਤ"
              : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e) {
          return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
        }
        function n(e, n, a) {
          var r = e + " ";
          switch (a) {
            case "ss":
              return r + (t(e) ? "sekundy" : "sekund");
            case "m":
              return n ? "minuta" : "minutę";
            case "mm":
              return r + (t(e) ? "minuty" : "minut");
            case "h":
              return n ? "godzina" : "godzinę";
            case "hh":
              return r + (t(e) ? "godziny" : "godzin");
            case "MM":
              return r + (t(e) ? "miesiące" : "miesięcy");
            case "yy":
              return r + (t(e) ? "lata" : "lat");
          }
        }
        var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
            "_"
          ),
          r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
            "_"
          );
        return e.defineLocale("pl", {
          months: function(e, t) {
            return e
              ? "" === t
                ? "(" + r[e.month()] + "|" + a[e.month()] + ")"
                : /D MMMM/.test(t) ? r[e.month()] : a[e.month()]
              : a;
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
            "_"
          ),
          weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
            "_"
          ),
          weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[W niedzielę o] LT";
                case 2:
                  return "[We wtorek o] LT";
                case 3:
                  return "[W środę o] LT";
                case 6:
                  return "[W sobotę o] LT";
                default:
                  return "[W] dddd [o] LT";
              }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: n,
            y: "rok",
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("pt-br", {
          months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_"
          ),
          weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
            "_"
          ),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day()
                ? "[Último] dddd [às] LT"
                : "[Última] dddd [às] LT";
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº"
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("pt", {
          months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_"
          ),
          weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
            "_"
          ),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day()
                ? "[Último] dddd [às] LT"
                : "[Última] dddd [às] LT";
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n) {
          var a = {
              ss: "secunde",
              mm: "minute",
              hh: "ore",
              dd: "zile",
              MM: "luni",
              yy: "ani"
            },
            r = " ";
          return (
            (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (r = " de "),
            e + r + a[n]
          );
        }
        return e.defineLocale("ro", {
          months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
            "_"
          ),
          monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split(
            "_"
          ),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            ss: t,
            m: "un minut",
            mm: t,
            h: "o oră",
            hh: t,
            d: "o zi",
            dd: t,
            M: "o lună",
            MM: t,
            y: "un an",
            yy: t
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t) {
          var n = e.split("_");
          return t % 10 == 1 && t % 100 != 11
            ? n[0]
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? n[1]
              : n[2];
        }
        function n(e, n, a) {
          var r = {
            ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
          };
          return "m" === a ? (n ? "минута" : "минуту") : e + " " + t(r[a], +e);
        }
        var a = [
          /^янв/i,
          /^фев/i,
          /^мар/i,
          /^апр/i,
          /^ма[йя]/i,
          /^июн/i,
          /^июл/i,
          /^авг/i,
          /^сен/i,
          /^окт/i,
          /^ноя/i,
          /^дек/i
        ];
        return e.defineLocale("ru", {
          months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
              "_"
            ),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
              "_"
            )
          },
          monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
              "_"
            )
          },
          weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
              "_"
            ),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
              "_"
            ),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
          },
          weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm"
          },
          calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function(e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd [в] LT"
                  : "[В] dddd [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В следующее] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В следующий] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В следующую] dddd [в] LT";
              }
            },
            lastWeek: function(e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd [в] LT"
                  : "[В] dddd [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В прошлое] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В прошлый] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В прошлую] dddd [в] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: n,
            m: n,
            mm: n,
            h: "час",
            hh: n,
            d: "день",
            dd: n,
            M: "месяц",
            MM: n,
            y: "год",
            yy: n
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function(e) {
            return /^(дня|вечера)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function(e, t) {
            switch (t) {
              case "M":
              case "d":
              case "DDD":
                return e + "-й";
              case "D":
                return e + "-го";
              case "w":
              case "W":
                return e + "-я";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = [
            "جنوري",
            "فيبروري",
            "مارچ",
            "اپريل",
            "مئي",
            "جون",
            "جولاءِ",
            "آگسٽ",
            "سيپٽمبر",
            "آڪٽوبر",
            "نومبر",
            "ڊسمبر"
          ],
          n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        return e.defineLocale("sd", {
          months: t,
          monthsShort: t,
          weekdays: n,
          weekdaysShort: n,
          weekdaysMin: n,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm"
          },
          meridiemParse: /صبح|شام/,
          isPM: function(e) {
            return "شام" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "صبح" : "شام";
          },
          calendar: {
            sameDay: "[اڄ] LT",
            nextDay: "[سڀاڻي] LT",
            nextWeek: "dddd [اڳين هفتي تي] LT",
            lastDay: "[ڪالهه] LT",
            lastWeek: "[گزريل هفتي] dddd [تي] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s پوء",
            past: "%s اڳ",
            s: "چند سيڪنڊ",
            ss: "%d سيڪنڊ",
            m: "هڪ منٽ",
            mm: "%d منٽ",
            h: "هڪ ڪلاڪ",
            hh: "%d ڪلاڪ",
            d: "هڪ ڏينهن",
            dd: "%d ڏينهن",
            M: "هڪ مهينو",
            MM: "%d مهينا",
            y: "هڪ سال",
            yy: "%d سال"
          },
          preparse: function(e) {
            return e.replace(/،/g, ",");
          },
          postformat: function(e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("se", {
          months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
            "_"
          ),
          monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
            "_"
          ),
          weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
            "_"
          ),
          weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
          weekdaysMin: "s_v_m_g_d_b_L".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
          },
          calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("si", {
          months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
            "_"
          ),
          monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split(
            "_"
          ),
          weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
            "_"
          ),
          weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
          weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
          },
          calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            ss: "තත්පර %d",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function(e) {
            return e + " වැනි";
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function(e) {
            return "ප.ව." === e || "පස් වරු" === e;
          },
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? "ප.ව." : "පස් වරු") : n ? "පෙ.ව." : "පෙර වරු";
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e) {
          return e > 1 && e < 5;
        }
        function n(e, n, a, r) {
          var s = e + " ";
          switch (a) {
            case "s":
              return n || r ? "pár sekúnd" : "pár sekundami";
            case "ss":
              return n || r
                ? s + (t(e) ? "sekundy" : "sekúnd")
                : s + "sekundami";
            case "m":
              return n ? "minúta" : r ? "minútu" : "minútou";
            case "mm":
              return n || r ? s + (t(e) ? "minúty" : "minút") : s + "minútami";
            case "h":
              return n ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
              return n || r ? s + (t(e) ? "hodiny" : "hodín") : s + "hodinami";
            case "d":
              return n || r ? "deň" : "dňom";
            case "dd":
              return n || r ? s + (t(e) ? "dni" : "dní") : s + "dňami";
            case "M":
              return n || r ? "mesiac" : "mesiacom";
            case "MM":
              return n || r
                ? s + (t(e) ? "mesiace" : "mesiacov")
                : s + "mesiacmi";
            case "y":
              return n || r ? "rok" : "rokom";
            case "yy":
              return n || r ? s + (t(e) ? "roky" : "rokov") : s + "rokmi";
          }
        }
        var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
            "_"
          ),
          r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return e.defineLocale("sk", {
          months: a,
          monthsShort: r,
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
            "_"
          ),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[v nedeľu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo štvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT";
              }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                  return "[minulý] dddd [o] LT";
                case 3:
                  return "[minulú stredu o] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [o] LT";
                case 6:
                  return "[minulú sobotu o] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = e + " ";
          switch (n) {
            case "s":
              return t || a ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
              return (r +=
                1 === e
                  ? t ? "sekundo" : "sekundi"
                  : 2 === e
                    ? t || a ? "sekundi" : "sekundah"
                    : e < 5 ? (t || a ? "sekunde" : "sekundah") : "sekund");
            case "m":
              return t ? "ena minuta" : "eno minuto";
            case "mm":
              return (r +=
                1 === e
                  ? t ? "minuta" : "minuto"
                  : 2 === e
                    ? t || a ? "minuti" : "minutama"
                    : e < 5
                      ? t || a ? "minute" : "minutami"
                      : t || a ? "minut" : "minutami");
            case "h":
              return t ? "ena ura" : "eno uro";
            case "hh":
              return (r +=
                1 === e
                  ? t ? "ura" : "uro"
                  : 2 === e
                    ? t || a ? "uri" : "urama"
                    : e < 5
                      ? t || a ? "ure" : "urami"
                      : t || a ? "ur" : "urami");
            case "d":
              return t || a ? "en dan" : "enim dnem";
            case "dd":
              return (r +=
                1 === e
                  ? t || a ? "dan" : "dnem"
                  : 2 === e
                    ? t || a ? "dni" : "dnevoma"
                    : t || a ? "dni" : "dnevi");
            case "M":
              return t || a ? "en mesec" : "enim mesecem";
            case "MM":
              return (r +=
                1 === e
                  ? t || a ? "mesec" : "mesecem"
                  : 2 === e
                    ? t || a ? "meseca" : "mesecema"
                    : e < 5
                      ? t || a ? "mesece" : "meseci"
                      : t || a ? "mesecev" : "meseci");
            case "y":
              return t || a ? "eno leto" : "enim letom";
            case "yy":
              return (r +=
                1 === e
                  ? t || a ? "leto" : "letom"
                  : 2 === e
                    ? t || a ? "leti" : "letoma"
                    : e < 5
                      ? t || a ? "leta" : "leti"
                      : t || a ? "let" : "leti");
          }
        }
        return e.defineLocale("sl", {
          months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
            "_"
          ),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
            "_"
          ),
          weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[v] [nedeljo] [ob] LT";
                case 3:
                  return "[v] [sredo] [ob] LT";
                case 6:
                  return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[v] dddd [ob] LT";
              }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[prejšnjo] [nedeljo] [ob] LT";
                case 3:
                  return "[prejšnjo] [sredo] [ob] LT";
                case 6:
                  return "[prejšnjo] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prejšnji] dddd [ob] LT";
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("sq", {
          months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
            "_"
          ),
          monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
            "_"
          ),
          weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
            "_"
          ),
          weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function(e) {
            return "M" === e.charAt(0);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "PD" : "MD";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          words: {
            ss: ["секунда", "секунде", "секунди"],
            m: ["један минут", "једне минуте"],
            mm: ["минут", "минуте", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            dd: ["дан", "дана", "дана"],
            MM: ["месец", "месеца", "месеци"],
            yy: ["година", "године", "година"]
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, n, a) {
            var r = t.words[a];
            return 1 === a.length
              ? n ? r[0] : r[1]
              : e + " " + t.correctGrammaticalCase(e, r);
          }
        };
        return e.defineLocale("sr-cyrl", {
          months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
            "_"
          ),
          monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
            "_"
          ),
          weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
          weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[у] [недељу] [у] LT";
                case 3:
                  return "[у] [среду] [у] LT";
                case 6:
                  return "[у] [суботу] [у] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[у] dddd [у] LT";
              }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function() {
              return [
                "[прошле] [недеље] [у] LT",
                "[прошлог] [понедељка] [у] LT",
                "[прошлог] [уторка] [у] LT",
                "[прошле] [среде] [у] LT",
                "[прошлог] [четвртка] [у] LT",
                "[прошлог] [петка] [у] LT",
                "[прошле] [суботе] [у] LT"
              ][this.day()];
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            ss: t.translate,
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: "дан",
            dd: t.translate,
            M: "месец",
            MM: t.translate,
            y: "годину",
            yy: t.translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          words: {
            ss: ["sekunda", "sekunde", "sekundi"],
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, n, a) {
            var r = t.words[a];
            return 1 === a.length
              ? n ? r[0] : r[1]
              : e + " " + t.correctGrammaticalCase(e, r);
          }
        };
        return e.defineLocale("sr", {
          months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
          monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
            "_"
          ),
          weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[u] [nedelju] [u] LT";
                case 3:
                  return "[u] [sredu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
              return [
                "[prošle] [nedelje] [u] LT",
                "[prošlog] [ponedeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT"
              ][this.day()];
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: t.translate,
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: "dan",
            dd: t.translate,
            M: "mesec",
            MM: t.translate,
            y: "godinu",
            yy: t.translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ss", {
          months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
            "_"
          ),
          monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
            "_"
          ),
          weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
            "_"
          ),
          weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
          weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function(e, t, n) {
            return e < 11
              ? "ekuseni"
              : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
          },
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "ekuseni" === t
                ? e
                : "emini" === t
                  ? e >= 11 ? e : e + 12
                  : "entsambama" === t || "ebusuku" === t
                    ? 0 === e ? 0 : e + 12
                    : void 0
            );
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: "%d",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("sv", {
          months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
            "_"
          ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
            "_"
          ),
          weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
          weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "e"
                : 1 === t ? "a" : 2 === t ? "a" : "e")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("sw", {
          months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
            "_"
          ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
            "_"
          ),
          weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
            "_"
          ),
          weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
          weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦"
          },
          n = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
          };
        return e.defineLocale("ta", {
          months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
            "_"
          ),
          monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
            "_"
          ),
          weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
            "_"
          ),
          weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split(
            "_"
          ),
          weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
          },
          calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            ss: "%d விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்"
          },
          dayOfMonthOrdinalParse: /\d{1,2}வது/,
          ordinal: function(e) {
            return e + "வது";
          },
          preparse: function(e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function(e, t, n) {
            return e < 2
              ? " யாமம்"
              : e < 6
                ? " வைகறை"
                : e < 10
                  ? " காலை"
                  : e < 14
                    ? " நண்பகல்"
                    : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்";
          },
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "யாமம்" === t
                ? e < 2 ? e : e + 12
                : "வைகறை" === t || "காலை" === t
                  ? e
                  : "நண்பகல்" === t && e >= 10 ? e : e + 12
            );
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("te", {
          months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
            "_"
          ),
          monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
            "_"
          ),
          weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
          weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
          },
          calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            ss: "%d సెకన్లు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: "%dవ",
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "రాత్రి" === t
                ? e < 4 ? e : e + 12
                : "ఉదయం" === t
                  ? e
                  : "మధ్యాహ్నం" === t
                    ? e >= 10 ? e : e + 12
                    : "సాయంత్రం" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "రాత్రి"
              : e < 10
                ? "ఉదయం"
                : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి";
          },
          week: { dow: 0, doy: 6 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("tet", {
          months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
            "_"
          ),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
            "_"
          ),
          weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
            "_"
          ),
          weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
          weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "minutu balun",
            ss: "minutu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          0: "-ум",
          1: "-ум",
          2: "-юм",
          3: "-юм",
          4: "-ум",
          5: "-ум",
          6: "-ум",
          7: "-ум",
          8: "-ум",
          9: "-ум",
          10: "-ум",
          12: "-ум",
          13: "-ум",
          20: "-ум",
          30: "-юм",
          40: "-ум",
          50: "-ум",
          60: "-ум",
          70: "-ум",
          80: "-ум",
          90: "-ум",
          100: "-ум"
        };
        return e.defineLocale("tg", {
          months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
            "_"
          ),
          weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split(
            "_"
          ),
          weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
          weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Имрӯз соати] LT",
            nextDay: "[Пагоҳ соати] LT",
            lastDay: "[Дирӯз соати] LT",
            nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
            lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "баъди %s",
            past: "%s пеш",
            s: "якчанд сония",
            m: "як дақиқа",
            mm: "%d дақиқа",
            h: "як соат",
            hh: "%d соат",
            d: "як рӯз",
            dd: "%d рӯз",
            M: "як моҳ",
            MM: "%d моҳ",
            y: "як сол",
            yy: "%d сол"
          },
          meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "шаб" === t
                ? e < 4 ? e : e + 12
                : "субҳ" === t
                  ? e
                  : "рӯз" === t
                    ? e >= 11 ? e : e + 12
                    : "бегоҳ" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "шаб"
              : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
          ordinal: function(e) {
            var n = e % 10,
              a = e >= 100 ? 100 : null;
            return e + (t[e] || t[n] || t[a]);
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("th", {
          months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
            "_"
          ),
          monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
          weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split(
            "_"
          ),
          weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function(e) {
            return "หลังเที่ยง" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
          },
          calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            ss: "%d วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("tl-ph", {
          months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
            "_"
          ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_"
          ),
          weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
            "_"
          ),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function(e) {
            return e;
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e) {
          var t = e;
          return (t =
            -1 !== e.indexOf("jaj")
              ? t.slice(0, -3) + "leS"
              : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "waQ"
                : -1 !== e.indexOf("DIS")
                  ? t.slice(0, -3) + "nem"
                  : t + " pIq");
        }
        function n(e) {
          var t = e;
          return (t =
            -1 !== e.indexOf("jaj")
              ? t.slice(0, -3) + "Hu’"
              : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "wen"
                : -1 !== e.indexOf("DIS")
                  ? t.slice(0, -3) + "ben"
                  : t + " ret");
        }
        function a(e, t, n, a) {
          var s = r(e);
          switch (n) {
            case "ss":
              return s + " lup";
            case "mm":
              return s + " tup";
            case "hh":
              return s + " rep";
            case "dd":
              return s + " jaj";
            case "MM":
              return s + " jar";
            case "yy":
              return s + " DIS";
          }
        }
        function r(e) {
          var t = Math.floor((e % 1e3) / 100),
            n = Math.floor((e % 100) / 10),
            a = e % 10,
            r = "";
          return (
            t > 0 && (r += s[t] + "vatlh"),
            n > 0 && (r += ("" !== r ? " " : "") + s[n] + "maH"),
            a > 0 && (r += ("" !== r ? " " : "") + s[a]),
            "" === r ? "pagh" : r
          );
        }
        var s = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        return e.defineLocale("tlh", {
          months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
            "_"
          ),
          monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
            "_"
          ),
          weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
            "_"
          ),
          weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
          },
          relativeTime: {
            future: t,
            past: n,
            s: "puS lup",
            ss: a,
            m: "wa’ tup",
            mm: a,
            h: "wa’ rep",
            hh: a,
            d: "wa’ jaj",
            dd: a,
            M: "wa’ jar",
            MM: a,
            y: "wa’ DIS",
            yy: a
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı"
        };
        return e.defineLocale("tr", {
          months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
            "_"
          ),
          monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
            "_"
          ),
          weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
            "_"
          ),
          weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
          weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen] dddd [saat] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
          },
          ordinal: function(e, n) {
            switch (n) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return e;
              default:
                if (0 === e) return e + "'ıncı";
                var a = e % 10,
                  r = e % 100 - a,
                  s = e >= 100 ? 100 : null;
                return e + (t[a] || t[r] || t[s]);
            }
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
          var r = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [e + " secunds", e + " secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [e + " míuts", e + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [e + " þoras", e + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", e + " ars"]
          };
          return a ? r[n][0] : t ? r[n][0] : r[n][1];
        }
        return e.defineLocale("tzl", {
          months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
            "_"
          ),
          monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
            "_"
          ),
          weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
            "_"
          ),
          weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
          weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function(e) {
            return "d'o" === e.toLowerCase();
          },
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
          },
          calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("tzm-latn", {
          months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
          monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
          weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_"
          ),
          weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_"
          ),
          weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
          },
          week: { dow: 6, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("tzm", {
          months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
          monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
          weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_"
          ),
          weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_"
          ),
          weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            ss: "%d ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
          },
          week: { dow: 6, doy: 12 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("ug-cn", {
          months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
            "_"
          ),
          monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
            "_"
          ),
          weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split(
            "_"
          ),
          weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
            LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
                ? e
                : "چۈشتىن كېيىن" === t || "كەچ" === t
                  ? e + 12
                  : e >= 11 ? e : e + 12
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? "يېرىم كېچە"
              : a < 900
                ? "سەھەر"
                : a < 1130
                  ? "چۈشتىن بۇرۇن"
                  : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ";
          },
          calendar: {
            sameDay: "[بۈگۈن سائەت] LT",
            nextDay: "[ئەتە سائەت] LT",
            nextWeek: "[كېلەركى] dddd [سائەت] LT",
            lastDay: "[تۆنۈگۈن] LT",
            lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s كېيىن",
            past: "%s بۇرۇن",
            s: "نەچچە سېكونت",
            ss: "%d سېكونت",
            m: "بىر مىنۇت",
            mm: "%d مىنۇت",
            h: "بىر سائەت",
            hh: "%d سائەت",
            d: "بىر كۈن",
            dd: "%d كۈن",
            M: "بىر ئاي",
            MM: "%d ئاي",
            y: "بىر يىل",
            yy: "%d يىل"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function(e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "-كۈنى";
              case "w":
              case "W":
                return e + "-ھەپتە";
              default:
                return e;
            }
          },
          preparse: function(e) {
            return e.replace(/،/g, ",");
          },
          postformat: function(e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        function t(e, t) {
          var n = e.split("_");
          return t % 10 == 1 && t % 100 != 11
            ? n[0]
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? n[1]
              : n[2];
        }
        function n(e, n, a) {
          var r = {
            ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
            mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: n ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
          };
          return "m" === a
            ? n ? "хвилина" : "хвилину"
            : "h" === a ? (n ? "година" : "годину") : e + " " + t(r[a], +e);
        }
        function a(e, t) {
          var n = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
              "_"
            ),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
              "_"
            ),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
              "_"
            )
          };
          return e
            ? n[
                /(\[[ВвУу]\]) ?dddd/.test(t)
                  ? "accusative"
                  : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                    ? "genitive"
                    : "nominative"
              ][e.day()]
            : n.nominative;
        }
        function r(e) {
          return function() {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
          };
        }
        return e.defineLocale("uk", {
          months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
              "_"
            ),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
              "_"
            )
          },
          monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split(
            "_"
          ),
          weekdays: a,
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
          },
          calendar: {
            sameDay: r("[Сьогодні "),
            nextDay: r("[Завтра "),
            lastDay: r("[Вчора "),
            nextWeek: r("[У] dddd ["),
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return r("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                  return r("[Минулого] dddd [").call(this);
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: n,
            m: n,
            mm: n,
            h: "годину",
            hh: n,
            d: "день",
            dd: n,
            M: "місяць",
            MM: n,
            y: "рік",
            yy: n
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function(e) {
            return /^(дня|вечора)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? "ночі"
              : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function(e, t) {
            switch (t) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return e + "-й";
              case "D":
                return e + "-го";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        var t = [
            "جنوری",
            "فروری",
            "مارچ",
            "اپریل",
            "مئی",
            "جون",
            "جولائی",
            "اگست",
            "ستمبر",
            "اکتوبر",
            "نومبر",
            "دسمبر"
          ],
          n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        return e.defineLocale("ur", {
          months: t,
          monthsShort: t,
          weekdays: n,
          weekdaysShort: n,
          weekdaysMin: n,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm"
          },
          meridiemParse: /صبح|شام/,
          isPM: function(e) {
            return "شام" === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? "صبح" : "شام";
          },
          calendar: {
            sameDay: "[آج بوقت] LT",
            nextDay: "[کل بوقت] LT",
            nextWeek: "dddd [بوقت] LT",
            lastDay: "[گذشتہ روز بوقت] LT",
            lastWeek: "[گذشتہ] dddd [بوقت] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s بعد",
            past: "%s قبل",
            s: "چند سیکنڈ",
            ss: "%d سیکنڈ",
            m: "ایک منٹ",
            mm: "%d منٹ",
            h: "ایک گھنٹہ",
            hh: "%d گھنٹے",
            d: "ایک دن",
            dd: "%d دن",
            M: "ایک ماہ",
            MM: "%d ماہ",
            y: "ایک سال",
            yy: "%d سال"
          },
          preparse: function(e) {
            return e.replace(/،/g, ",");
          },
          postformat: function(e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("uz-latn", {
          months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
            "_"
          ),
          monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split(
            "_"
          ),
          weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
            "_"
          ),
          weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
          weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
          },
          calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
          },
          relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("uz", {
          months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
            "_"
          ),
          weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split(
            "_"
          ),
          weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
          weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
          },
          calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
          },
          relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            ss: "%d фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
          },
          week: { dow: 1, doy: 7 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("vi", {
          months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
            "_"
          ),
          monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split(
            "_"
          ),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function(e) {
            return /^ch$/i.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            ss: "%d giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function(e) {
            return e;
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("x-pseudo", {
          months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
            "_"
          ),
          monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
            "_"
          ),
          monthsParseExact: !0,
          weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
            "_"
          ),
          weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
          weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            ss: "%d s~écóñ~ds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(e) {
            var t = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            );
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("yo", {
          months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
            "_"
          ),
          monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
            "_"
          ),
          weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
          weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
          weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            ss: "aayá %d",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d"
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: "ọjọ́ %d",
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("zh-cn", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_"
          ),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_"
          ),
          weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah点mm分",
            LLLL: "YYYY年M月D日ddddAh点mm分",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "凌晨" === t || "早上" === t || "上午" === t
                ? e
                : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? "凌晨"
              : a < 900
                ? "早上"
                : a < 1130
                  ? "上午"
                  : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function(e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "周";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            ss: "%d 秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
          },
          week: { dow: 1, doy: 4 }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("zh-hk", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_"
          ),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_"
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "凌晨" === t || "早上" === t || "上午" === t
                ? e
                : "中午" === t
                  ? e >= 11 ? e : e + 12
                  : "下午" === t || "晚上" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? "凌晨"
              : a < 900
                ? "早上"
                : a < 1130
                  ? "上午"
                  : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
          }
        });
      });
    },
    function(e, t, n) {
      !(function(e, t) {
        t(n(0));
      })(0, function(e) {
        "use strict";
        return e.defineLocale("zh-tw", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_"
          ),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_"
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              "凌晨" === t || "早上" === t || "上午" === t
                ? e
                : "中午" === t
                  ? e >= 11 ? e : e + 12
                  : "下午" === t || "晚上" === t ? e + 12 : void 0
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? "凌晨"
              : a < 900
                ? "早上"
                : a < 1130
                  ? "上午"
                  : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
          }
        });
      });
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        d = n(2),
        u = n(5),
        _ = n(8),
        l = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(_),
        m = (function(e) {
          function t() {
            return (
              a(this, t),
              r(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            s(t, e),
            o(t, [
              {
                key: "render",
                value: function() {
                  var e = i({}, this.props),
                    t = e.source;
                  if (t && t.uri) {
                    var n = e.style,
                      a = t.width,
                      r = t.height,
                      s = t.uri;
                    null == a &&
                      null == r &&
                      null == n.height &&
                      null == n.width &&
                      ((a = 0), (r = 0)),
                      (e.style = i(
                        i(
                          {},
                          !this.context.isInAParentText && { display: "flex" },
                          { width: a, height: r }
                        ),
                        n
                      )),
                      (e.src = s),
                      delete e.source;
                    var o = void 0;
                    o = u.isWeex ? "image" : "img";
                    var _ = e.resizeMode || e.style.resizeMode;
                    return (
                      _ &&
                        (u.isWeex
                          ? ((e.resize = _), (e.style.resizeMode = _))
                          : (e.style.objectFit = _)),
                      this.props.children
                        ? ((e.children = null),
                          (0, d.createElement)(
                            l.default,
                            { style: e.style },
                            (0, d.createElement)(o, e),
                            (0, d.createElement)(
                              l.default,
                              { style: c.absoluteImage },
                              this.props.children
                            )
                          ))
                        : (0, d.createElement)(o, e)
                    );
                  }
                  return null;
                }
              }
            ]),
            t
          );
        })(d.Component);
      (m.propTypes = {}),
        (m.resizeMode = {
          contain: "contain",
          cover: "cover",
          stretch: "stretch",
          center: "center",
          repeat: "repeat"
        }),
        (m.contextTypes = { isInAParentText: d.PropTypes.bool });
      var c = { absoluteImage: { left: 0, top: 0, position: "absolute" } };
      (t.default = m), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function i(e, t) {
        var n = e.type,
          a = e.props,
          r = a.children;
        if ("function" == typeof n) {
          var s = new n();
          return (
            (s.props = a),
            r && (s.props.children = o(r, t)),
            (s.context = t.getChildContext()),
            s.render()
          );
        }
        return e;
      }
      function o(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]);
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          "string" == typeof r
            ? n.push(r)
            : "object" === (void 0 === r ? "undefined" : d(r)) &&
              n.push(i(r, t));
        }
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        _ = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        l = n(2),
        m = n(5),
        c = (function(e) {
          function t() {
            var e, n, s, i;
            a(this, t);
            for (var d = arguments.length, _ = Array(d), c = 0; c < d; c++)
              _[c] = arguments[c];
            return (
              (n = s = r(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(_)
                )
              )),
              (s.renderText = function() {
                var e = s.props,
                  t = u({}, e, { style: e.style || {} }),
                  n = "";
                if (
                  (null != e.children &&
                    (n = Array.isArray(e.children)
                      ? e.children.join("")
                      : e.children.toString()),
                  s.context.isInAParentText)
                )
                  return (0, l.createElement)("span", t, n);
                if ((e.onPress && (t.onClick = e.onPress), m.isWeex))
                  return (
                    e.numberOfLines && (t.style.lines = e.numberOfLines),
                    (t.value = n),
                    (0, l.createElement)("text", t)
                  );
                var a = u({}, f.text, t.style),
                  r = e.numberOfLines;
                return (
                  r &&
                    (1 === parseInt(r)
                      ? (a.whiteSpace = "nowrap")
                      : ((a.display = "-webkit-box"),
                        (a.webkitBoxOrient = "vertical"),
                        (a.webkitLineClamp = String(r))),
                    (a.overflow = "hidden")),
                  (0, l.createElement)("span", u({}, t, { style: a }), n)
                );
              }),
              (s.renderRichText = function() {
                var e = s.props,
                  t = e.children,
                  n = u({}, e, { style: e.style || {} }),
                  a = u({}, f.richtext, n.style);
                return (
                  m.isWeex && (t = o(t, s)),
                  (0, l.createElement)("p", u({}, n, { style: a }), t)
                );
              }),
              (i = n),
              r(s, i)
            );
          }
          return (
            s(t, e),
            _(t, [
              {
                key: "getChildContext",
                value: function() {
                  return { isInAParentText: !0 };
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children;
                  Array.isArray(t) || (t = [t]);
                  for (var n = !1, a = 0; a < t.length; a++) {
                    var r = t[a];
                    if (r && "object" === (void 0 === r ? "undefined" : d(r))) {
                      n = !0;
                      break;
                    }
                  }
                  return n ? this.renderRichText() : this.renderText();
                }
              }
            ]),
            t
          );
        })(l.Component);
      (c.propTypes = {}),
        (c.contextTypes = { isInAParentText: l.PropTypes.bool }),
        (c.childContextTypes = { isInAParentText: l.PropTypes.bool });
      var f = {
        text: {
          border: "0 solid black",
          position: "relative",
          boxSizing: "border-box",
          display: "block",
          flexDirection: "column",
          alignContent: "flex-start",
          flexShrink: 0,
          fontSize: 32
        },
        richtext: { marginTop: 0, marginBottom: 0 }
      };
      (t.default = c), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.isReactNative = t.isWeex = t.isNode = t.isWeb = void 0);
      var r =
        "object" ===
          ("undefined" == typeof navigator ? "undefined" : a(navigator)) &&
        ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product);
      t.isWeb = r;
      var s =
        "undefined" != typeof process &&
        !(!process.versions || !process.versions.node);
      t.isNode = s;
      var i =
        "function" == typeof callNative ||
        ("object" ===
          ("undefined" == typeof WXEnvironment
            ? "undefined"
            : a(WXEnvironment)) &&
          "Web" !== WXEnvironment.platform);
      t.isWeex = i;
      var o = "undefined" != typeof __fbBatchedBridgeConfig;
      (t.isReactNative = o), (t.default = e.exports);
      var d = e.exports;
      t.default = d;
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3),
        s = a(r),
        i = n(1),
        o = a(i);
      (t.default = {
        ComponentTree: {
          getClosestInstanceFromNode: function(e) {
            return s.default.get(e);
          },
          getNodeFromInstance: function(e) {
            for (; e._renderedComponent; ) e = e._renderedComponent;
            return e ? e._nativeNode : null;
          }
        },
        Mount: {
          _instancesByReactRootID: o.default.rootComponents,
          _renderNewRootComponent: function() {}
        },
        Reconciler: {
          mountComponent: function() {},
          receiveComponent: function() {},
          unmountComponent: function() {}
        },
        monitor: null
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        if (null == e) return null;
        if (e.ownerDocument || e.nodeType) return e;
        if (e._nativeNode) return e._nativeNode;
        if ("string" == typeof e) return s.default.driver.getElementById(e);
        if ("function" != typeof e.render)
          throw new Error(
            "findDOMNode: find by neither component nor DOM node."
          );
        var t = e._internal;
        if (t) {
          for (; !t._nativeNode; )
            if (null == (t = t._renderedComponent)) return null;
          return t._nativeNode;
        }
        throw new Error("findDOMNode: find on an unmounted component.");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      (t.default = a), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (Array.isArray(e))
          for (var n = 0, r = e.length; n < r; n++) a(e[n], t);
        else t.push(e);
      }
      function r(e) {
        if (null == e) return e;
        var t = [];
        return a(e, t), 1 === t.length && (t = t[0]), t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        function t(e, t, n, a, s, i) {
          return r;
        }
        var n = t.bind(null, !1);
        return (n.isRequired = t.bind(null, !0)), n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function(e) {
        function t(e, t, n, a, r) {}
        return a(t);
      })();
      (t.default = {
        array: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        element: r,
        node: r,
        any: r,
        arrayOf: r,
        instanceOf: r,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function(e, t, n) {
          var a = t && t.key,
            r = "string" == typeof a,
            s = "." + n.toString(36);
          if (r) {
            var i = "$" + a,
              o = void 0 === e[i];
            return (
              o ||
                console.warn(
                  'Encountered two children with the same key "' + a + '".'
                ),
              o ? i : s
            );
          }
          return s;
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        i = n(1),
        o = a(i),
        d = n(145),
        u = a(d),
        _ = n(6),
        l = a(_),
        m = n(12),
        c = a(m),
        f = n(143),
        h = a(f),
        M = n(3),
        y = a(M),
        p = /on[A-Z]/,
        L = (function() {
          function e(t) {
            r(this, e), (this._currentElement = t);
          }
          return (
            s(e, [
              {
                key: "mountComponent",
                value: function(e, t, n, a) {
                  (this._parent = e),
                    (this._parentInstance = t),
                    (this._context = n),
                    (this._mountID = o.default.mountID++);
                  var r = this._currentElement.props,
                    s = this._currentElement.type,
                    i = { _internal: this, type: s, props: r },
                    d = r.append;
                  (this._instance = i),
                    (this._prevStyleCopy = Object.assign({}, r.style));
                  var _ = this.getNativeNode();
                  "tree" !== d &&
                    (a ? a(_, e) : o.default.driver.appendChild(_, e)),
                    this._currentElement &&
                      this._currentElement.ref &&
                      u.default.attach(
                        this._currentElement._owner,
                        this._currentElement.ref,
                        this
                      );
                  var l = r.children;
                  return (
                    null != l && this.mountChildren(l, n),
                    "tree" === d &&
                      (a ? a(_, e) : o.default.driver.appendChild(_, e)),
                    o.default.hook.Reconciler.mountComponent(this),
                    i
                  );
                }
              },
              {
                key: "mountChildren",
                value: function(e, t) {
                  var n = this;
                  Array.isArray(e) || (e = [e]);
                  var a = (this._renderedChildren = {});
                  return e.map(function(e, r) {
                    var s = (0, l.default)(e),
                      i = (0, h.default)(a, e, r);
                    return (
                      (a[i] = s),
                      (s._mountIndex = r),
                      s.mountComponent(n.getNativeNode(), n._instance, t, null)
                    );
                  });
                }
              },
              {
                key: "unmountChildren",
                value: function(e) {
                  var t = this._renderedChildren;
                  if (t) {
                    for (var n in t) {
                      t[n].unmountComponent(e);
                    }
                    this._renderedChildren = null;
                  }
                }
              },
              {
                key: "unmountComponent",
                value: function(e) {
                  if (this._nativeNode) {
                    var t = this._currentElement.ref;
                    t && u.default.detach(this._currentElement._owner, t, this),
                      y.default.remove(this._nativeNode),
                      e ||
                        o.default.driver.removeChild(
                          this._nativeNode,
                          this._parent
                        ),
                      o.default.driver.removeAllEventListeners(
                        this._nativeNode
                      );
                  }
                  this.unmountChildren(e),
                    o.default.hook.Reconciler.unmountComponent(this),
                    (this._currentElement = null),
                    (this._nativeNode = null),
                    (this._parent = null),
                    (this._parentInstance = null),
                    (this._context = null),
                    (this._instance = null),
                    (this._prevStyleCopy = null);
                }
              },
              {
                key: "updateComponent",
                value: function(e, t, n, a) {
                  (this._currentElement = t), u.default.update(e, t, this);
                  var r = e.props,
                    s = t.props;
                  this.updateProperties(r, s),
                    this.updateChildren(s.children, a),
                    o.default.hook.Reconciler.receiveComponent(this);
                }
              },
              {
                key: "updateProperties",
                value: function(e, t) {
                  var n = void 0,
                    a = void 0,
                    r = void 0;
                  for (n in e)
                    if (
                      "children" !== n &&
                      !t.hasOwnProperty(n) &&
                      e.hasOwnProperty(n) &&
                      null != e[n]
                    )
                      if ("style" === n) {
                        var s = this._prevStyleCopy;
                        for (a in s)
                          s.hasOwnProperty(a) && ((r = r || {}), (r[a] = ""));
                        this._prevStyleCopy = null;
                      } else
                        p.test(n)
                          ? "function" == typeof e[n] &&
                            o.default.driver.removeEventListener(
                              this.getNativeNode(),
                              n.slice(2).toLowerCase(),
                              e[n]
                            )
                          : o.default.driver.removeAttribute(
                              this.getNativeNode(),
                              n,
                              e[n]
                            );
                  for (n in t) {
                    var i = t[n],
                      d =
                        "style" === n
                          ? this._prevStyleCopy
                          : null != e ? e[n] : void 0;
                    if (
                      "children" !== n &&
                      t.hasOwnProperty(n) &&
                      i !== d &&
                      (null != i || null != d)
                    )
                      if ("style" === n)
                        if (
                          (i
                            ? (i = this._prevStyleCopy = Object.assign({}, i))
                            : (this._prevStyleCopy = null),
                          null != d)
                        ) {
                          for (a in d)
                            !d.hasOwnProperty(a) ||
                              (i && i.hasOwnProperty(a)) ||
                              ((r = r || {}), (r[a] = ""));
                          for (a in i)
                            i.hasOwnProperty(a) &&
                              d[a] !== i[a] &&
                              ((r = r || {}), (r[a] = i[a]));
                        } else r = i;
                      else if (p.test(n)) {
                        var u = n.slice(2).toLowerCase();
                        "function" == typeof d &&
                          o.default.driver.removeEventListener(
                            this.getNativeNode(),
                            u,
                            d,
                            t
                          ),
                          "function" == typeof i &&
                            o.default.driver.addEventListener(
                              this.getNativeNode(),
                              u,
                              i,
                              t
                            );
                      } else {
                        var _ = {};
                        (_[n] = i),
                          null != i
                            ? o.default.driver.setAttribute(
                                this.getNativeNode(),
                                n,
                                i
                              )
                            : o.default.driver.removeAttribute(
                                this.getNativeNode(),
                                n,
                                e[n]
                              );
                      }
                  }
                  r && o.default.driver.setStyles(this.getNativeNode(), r);
                }
              },
              {
                key: "updateChildren",
                value: function(e, t) {
                  var n = this,
                    a = this._renderedChildren;
                  if (null != e || null != a) {
                    var r = {},
                      s = {};
                    if (null != e) {
                      Array.isArray(e) || (e = [e]);
                      for (var i = 0, d = e.length; i < d; i++) {
                        var u = e[i],
                          _ = (0, h.default)(r, u, i),
                          m = a && a[_],
                          f = m && m._currentElement;
                        if (null != m && (0, c.default)(f, u))
                          m.updateComponent(f, u, t, t), (r[_] = m);
                        else {
                          if (m) {
                            var M = m.getNativeNode();
                            m.unmountComponent(!0), (s[_] = M);
                          }
                          r[_] = (0, l.default)(u);
                        }
                      }
                    }
                    var y = void 0,
                      p = void 0;
                    if (null != a)
                      for (var L in a)
                        if (a.hasOwnProperty(L)) {
                          var Y = a[L],
                            g = !r[L];
                          y ? g && Y.unmountComponent() : ((y = Y), (p = g));
                        }
                    null != r &&
                      (function() {
                        var e = 0,
                          i = 0,
                          d = null,
                          u = [];
                        for (var _ in r) {
                          (function(_) {
                            if (!r.hasOwnProperty(_)) return "continue";
                            var l = r[_],
                              m = a && a[_];
                            if (m === l) {
                              var c = m.getNativeNode();
                              if (
                                (Array.isArray(c) || (c = [c]),
                                m._mountIndex < e)
                              ) {
                                Array.isArray(d) && (d = d[d.length - 1]);
                                for (var f = c.length - 1; f >= 0; f--)
                                  o.default.driver.insertAfter(c[f], d);
                              }
                              (u = u.concat(c)),
                                (e = Math.max(m._mountIndex, e)),
                                (m._mountIndex = i);
                            } else {
                              null != m && (e = Math.max(m._mountIndex, e));
                              var h = n.getNativeNode();
                              Array.isArray(h) && (h = n._parent),
                                l.mountComponent(h, n._instance, t, function(
                                  e,
                                  t
                                ) {
                                  var n = s[_];
                                  if ((Array.isArray(e) || (e = [e]), n)) {
                                    Array.isArray(n) || (n = [n]);
                                    for (
                                      var a = void 0, r = 0;
                                      r < e.length;
                                      r++
                                    ) {
                                      var i = e[r];
                                      n[r]
                                        ? o.default.driver.replaceChild(i, n[r])
                                        : o.default.driver.insertAfter(i, a),
                                        (a = i);
                                    }
                                    if (e.length < n.length)
                                      for (var l = e.length; l < n.length; l++)
                                        o.default.driver.removeChild(n[l]);
                                  } else {
                                    Array.isArray(d) && (d = d[d.length - 1]);
                                    var m = void 0;
                                    y &&
                                      !d &&
                                      ((m = y.getNativeNode()),
                                      Array.isArray(m) && (m = m[0]));
                                    for (var c = e.length - 1; c >= 0; c--) {
                                      var f = e[c];
                                      d
                                        ? o.default.driver.insertAfter(f, d)
                                        : m
                                          ? o.default.driver.insertBefore(f, m)
                                          : o.default.driver.appendChild(f, t);
                                    }
                                  }
                                  u = u.concat(e);
                                }),
                                (l._mountIndex = i);
                            }
                            i++, (d = l.getNativeNode());
                          })(_);
                        }
                        if (Array.isArray(n._nativeNode)) {
                          n._nativeNode.splice(0, n._nativeNode.length);
                          for (var l = 0; l < u.length; l++)
                            n._nativeNode.push(u[l]);
                        }
                      })(),
                      p && y.unmountComponent(),
                      (this._renderedChildren = r);
                  }
                }
              },
              {
                key: "getNativeNode",
                value: function() {
                  return (
                    null == this._nativeNode &&
                      ((this._nativeNode = o.default.driver.createElement(
                        this._instance
                      )),
                      y.default.set(this._nativeNode, this._instance)),
                    this._nativeNode
                  );
                }
              },
              {
                key: "getPublicInstance",
                value: function() {
                  return this.getNativeNode();
                }
              },
              {
                key: "getName",
                value: function() {
                  return this._currentElement.type;
                }
              }
            ]),
            e
          );
        })();
      (t.default = L), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          update: function(e, t, n) {
            var a = null != e && e.ref,
              r = null != t && t.ref;
            a !== r &&
              (null != a && this.detach(e._owner, a, n),
              null != r && this.attach(t._owner, r, n));
          },
          attach: function(e, t, n) {
            if (!e)
              throw new Error(
                "You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of Rax loaded."
              );
            var a = n.getPublicInstance();
            "function" == typeof t ? t(a) : (e._instance.refs[t] = a);
          },
          detach: function(e, t, n) {
            if ("function" == typeof t) t(null);
            else {
              var a = n.getPublicInstance();
              e._instance.refs[t] === a && delete e._instance.refs[t];
            }
          }
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return "string" == typeof e && -1 !== e.indexOf(l);
      }
      function r(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f[c];
        return e.replace(m, function(e) {
          return parseFloat(e) * t + "px";
        });
      }
      function s() {
        return f[c];
      }
      function i(e) {
        f[c] = e;
      }
      function o(e, t) {
        return "number" == typeof e && !_[t];
      }
      function d(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f[c];
        return t && o(e, t) ? e * n + "px" : a(e) ? r(e, n) : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      (t.isRem = a),
        (t.calcRem = r),
        (t.getRem = s),
        (t.setRem = i),
        (t.isUnitNumber = o),
        (t.convertUnit = d);
      var _ = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridColumn: !0,
          fontWeight: !0,
          lineClamp: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          lines: !0
        },
        l = "rem",
        m = /[-+]?\d*\.?\d+rem/g,
        c = "__global_rem_unit__",
        f =
          "object" === ("undefined" == typeof window ? "undefined" : u(window))
            ? window
            : "object" === (void 0 === f ? "undefined" : u(f)) ? f : {};
      null == f[c] && (f[c] = 1),
        (t.default = e.exports),
        (t.default = e.exports);
    },
    function(t, n) {
      t.exports = e("@weex-module/test");
    },
    function(e, t, n) {
      "use strict";
      var a = n(2),
        r = n(150),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      (0, a.render)((0, a.createElement)(s.default, null));
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(7),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        s = {
          getMoney: function(e) {
            return (0, r.default)({
              method: "GET",
              url:
                "https://ccnubox.muxixyz.com/api/card/balance/?sid=" + e.userId
            });
          }
        };
      (t.default = s), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        d = n(2),
        u = n(8),
        _ = a(u),
        l = n(137),
        m = a(l),
        c = n(0),
        f = a(c),
        h = n(149),
        M = a(h),
        y = n(136),
        p = a(y),
        L = n(166),
        Y = a(L),
        g = n(153),
        k = n(151),
        v = n(152),
        A = a(v),
        D = n(147),
        w = (0, f.default)(new Date()).format("YYYY年MM月DD日"),
        T = (function(e) {
          function t(e) {
            r(this, t);
            var n = s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (n.state = { money: null, time: w }), n;
          }
          return (
            i(t, e),
            o(t, [
              {
                key: "componentWillMount",
                value: function() {
                  var e = {},
                    t = {};
                  window.location.search
                    ? (t = (0, g.parseSearchString)(window.location.search))
                    : alert("参数缺失错误"),
                    (e.userId = t.sid[0]),
                    this.getBalance(e);
                }
              },
              {
                key: "getBalance",
                value: function(e) {
                  var t = this,
                    n = void 0;
                  return M.default
                    .getMoney(e)
                    .then(function(e) {
                      D.reportInsightApiEvent("getCardInfo", "success", "null"),
                        (n = e.model.balance),
                        t.setState({ money: n }),
                        D.changeLoadingStatus(!0);
                    })
                    .catch(function(n) {
                      D.changeLoadingStatus(!0),
                        (0, k.confirm)(
                          "服务端错误: " + (n.status || n),
                          "重试",
                          "取消"
                        ).then(function(a) {
                          D.reportInsightApiEvent(
                            "getCardInfo",
                            "error",
                            JSON.stringify(n)
                          ),
                            a > 0 &&
                              (D.changeLoadingStatus(!1), t.getBalance(e));
                        });
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return (0, d.createElement)(
                    _.default,
                    { style: b.App },
                    (0, d.createElement)(A.default, {
                      pageId: "com.muxistudio.card",
                      style: { width: 750 }
                    }),
                    (0, d.createElement)(
                      _.default,
                      { style: b.container },
                      (0, d.createElement)(p.default, {
                        style: b.centerPicture,
                        source: Y.default,
                        resizeMode: "contain"
                      }),
                      (0, d.createElement)(
                        _.default,
                        { style: b.center },
                        (0, d.createElement)(
                          _.default,
                          { style: b.warnWordContainer },
                          (0, d.createElement)(
                            m.default,
                            { style: b.warnWord },
                            "您的校园卡余额为"
                          )
                        ),
                        (0, d.createElement)(
                          _.default,
                          { style: b.MoneyContainer },
                          (0, d.createElement)(
                            m.default,
                            { style: b.Money },
                            this.state.money,
                            "元"
                          )
                        ),
                        (0, d.createElement)(
                          _.default,
                          { style: b.DateContainer },
                          (0, d.createElement)(
                            m.default,
                            { style: b.Date },
                            "截止至",
                            this.state.time
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(d.Component),
        b = {
          App: {
            backgroundColor: "rgb(239,239,244)",
            flex: 1,
            alignItems: "center"
          },
          container: { width: 555, height: 703, position: "relative" },
          centerPicture: { width: 555, height: 703, marginTop: 140 },
          center: {
            position: "absolute",
            top: 140,
            left: 77,
            width: 400,
            height: 703,
            display: "flex",
            alignItems: "center"
          },
          warnWordContainer: {
            color: "rgb(67,67,67)",
            marginTop: 190,
            width: 400,
            display: "flex"
          },
          MoneyContainer: {
            color: "rgb(254,183,90)",
            marginTop: 80,
            width: 400,
            alignItems: "center"
          },
          DateContainer: {
            color: "rgb(142,142,147)",
            marginTop: 150,
            width: 400,
            display: "flex",
            alignItems: "flex-end"
          },
          warnWord: { fontSize: 34, color: "rgb(67,67,67)" },
          Money: { fontSize: 74, fontWeight: 500, color: "rgb(254,183,90)" },
          Date: { fontSize: 24, color: "rgb(142,142,147)" }
        };
      (t.default = T), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(190);
      (t.confirm = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "确定",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "取消";
        return new Promise(function(r, s) {
          a.confirm(
            { message: e, duration: 0.3, okTitle: t, cancelTitle: n },
            function(e) {
              e === t ? r(1) : s(-1);
            }
          );
        });
      }),
        (t.weexAlert = function(e) {
          return new Promise(function(t, n) {
            a.alert({ message: e, duration: 0.3 }, function(e) {
              t(e);
            });
          });
        });
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        d = n(8),
        u = a(d),
        _ = n(137),
        l = a(_),
        m = n(136),
        c = (a(m), n(168)),
        f = a(c),
        h = n(188),
        M = a(h),
        y = n(7),
        p = a(y),
        L = n(2),
        Y = n(147),
        g = (function(e) {
          function t() {
            var e, n, a, i;
            r(this, t);
            for (var o = arguments.length, d = Array(o), u = 0; u < o; u++)
              d[u] = arguments[u];
            return (
              (n = a = s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(d)
                )
              )),
              (a.state = {
                text: "",
                show: !1,
                type: "alert",
                btnText: "关闭",
                link: ""
              }),
              (a.onBtnPressed = function() {
                "alert" === a.state.type
                  ? a.setState({ show: !1 })
                  : "link" === a.state.type && Y.push(a.state.link);
              }),
              (i = n),
              s(a, i)
            );
          }
          return (
            i(t, e),
            o(t, [
              {
                key: "componentWillMount",
                value: function() {
                  var e = this;
                  (0, p.default)({
                    method: "GET",
                    url:
                      "https://ccnubox.muxixyz.com/api/msg/?os=ios&page=" +
                      this.props.pageId
                  })
                    .then(function(t) {
                      e.setState({
                        type: t.version || "alert",
                        btnText: t.time || "关闭",
                        link: t.detail || "",
                        text: t.msg,
                        show: !0
                      });
                    })
                    .catch(function(e) {});
                }
              },
              {
                key: "render",
                value: function() {
                  return "" !== this.state.text && this.state.show
                    ? (0, L.createElement)(
                        u.default,
                        { style: [M.default.container, this.props.style] },
                        (0, L.createElement)(
                          l.default,
                          { style: [M.default.text, M.default.main_text] },
                          this.state.text
                        ),
                        (0, L.createElement)(
                          f.default,
                          { onPress: this.onBtnPressed },
                          (0, L.createElement)(
                            l.default,
                            { style: M.default.text },
                            this.state.btnText
                          )
                        )
                      )
                    : null;
                }
              }
            ]),
            t
          );
        })(L.Component);
      (t.default = g), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = (function() {
          function e(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                !a && o.return && o.return();
              } finally {
                if (r) throw s;
              }
            }
            return n;
          }
          return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        i = r(["&"], ["&"]),
        o = r(["="], ["="]),
        d = n(7);
      Object.defineProperty(t, "request", {
        enumerable: !0,
        get: function() {
          return a(d).default;
        }
      });
      t.parseSearchString = function(e) {
        var t = {};
        return (
          e.split(i).forEach(function(e) {
            var n = e.split(o),
              a = s(n, 2),
              r = a[0],
              i = a[1];
            (i = i && decodeURIComponent(i)), (t[r] = t[r] || []).push(i);
          }),
          t
        );
      };
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
          stretch: "stretch",
          "flex-start": "start",
          "flex-end": "end",
          center: "center"
        },
        r = { row: "horizontal", column: "vertical" },
        s = {
          "flex-start": "start",
          "flex-end": "end",
          center: "center",
          "space-between": "justify",
          "space-around": "justify"
        },
        i = {
          display: !0,
          flex: !0,
          alignItems: !0,
          alignSelf: !0,
          flexDirection: !0,
          justifyContent: !0,
          flexWrap: !0
        },
        o = {
          isFlexProp: function(e) {
            return i[e];
          },
          display: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              (t.display =
                "flex" === e ? ["-webkit-box", "-webkit-flex", "flex"] : e),
              t
            );
          },
          flex: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (t.webkitBoxFlex = e), (t.webkitFlex = e), (t.flex = e), t;
          },
          flexWrap: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (t.webkitFlexWrap = e), (t.flexWrap = e), t;
          },
          alignItems: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              (t.webkitBoxAlign = a[e]),
              (t.webkitAlignItems = e),
              (t.alignItems = e),
              t
            );
          },
          alignSelf: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (t.webkitAlignSelf = e), (t.alignSelf = e), t;
          },
          flexDirection: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              (t.webkitBoxOrient = r[e]),
              (t.webkitFlexDirection = e),
              (t.flexDirection = e),
              t
            );
          },
          justifyContent: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              (t.webkitBoxPack = s[e]),
              (t.webkitJustifyContent = e),
              (t.justifyContent = e),
              t
            );
          }
        };
      (t.default = o), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(146),
        r = n(154),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = /^on[A-Z]/,
        o = {
          deviceWidth:
            ("undefined" != typeof DEVICE_WIDTH && DEVICE_WIDTH) || null,
          viewportWidth:
            ("undefined" != typeof VIEWPORT_WIDTH && VIEWPORT_WIDTH) || 750,
          eventRegistry: {},
          getDeviceWidth: function() {
            return this.deviceWidth || document.documentElement.clientWidth;
          },
          setDeviceWidth: function(e) {
            this.deviceWidth = e;
          },
          getViewportWidth: function() {
            return this.viewportWidth;
          },
          setViewportWidth: function(e) {
            this.viewportWidth = e;
          },
          getElementById: function(e) {
            return document.getElementById(e);
          },
          createBody: function() {
            return document.body;
          },
          createComment: function(e) {
            return document.createComment(e);
          },
          createEmpty: function() {
            return this.createComment(" empty ");
          },
          createText: function(e) {
            return document.createTextNode(e);
          },
          updateText: function(e, t) {
            e["textContent" in document ? "textContent" : "nodeValue"] = t;
          },
          createElement: function(e) {
            var t = document.createElement(e.type),
              n = e.props;
            return this.setNativeProps(t, n), t;
          },
          appendChild: function(e, t) {
            return t.appendChild(e);
          },
          removeChild: function(e, t) {
            (t = t || e.parentNode) && t.removeChild(e);
          },
          replaceChild: function(e, t, n) {
            (n = n || t.parentNode), n.replaceChild(e, t);
          },
          insertAfter: function(e, t, n) {
            n = n || t.parentNode;
            var a = t.nextSibling;
            a ? n.insertBefore(e, a) : n.appendChild(e);
          },
          insertBefore: function(e, t, n) {
            (n = n || t.parentNode), n.insertBefore(e, t);
          },
          addEventListener: function(e, t, n, a) {
            return this.eventRegistry[t]
              ? this.eventRegistry[t]("addEvent", e, t, n, a)
              : e.addEventListener(t, n);
          },
          removeEventListener: function(e, t, n, a) {
            return this.eventRegistry[t]
              ? this.eventRegistry[t]("removeEvent", e, t, n, a)
              : e.removeEventListener(t, n);
          },
          removeAllEventListeners: function(e) {},
          removeAttribute: function(e, t) {
            if ("dangerouslySetInnerHTML" === t) return (e.innerHTML = null);
            if (("className" === t && (t = "class"), t in e))
              try {
                e[t] = null;
              } catch (e) {}
            e.removeAttribute(t);
          },
          setAttribute: function(e, t, n) {
            if ("dangerouslySetInnerHTML" === t)
              return (e.innerHTML = n.__html);
            if (("className" === t && (t = "class"), t in e))
              try {
                e[t] = n;
              } catch (a) {
                e.setAttribute(t, n);
              }
            else e.setAttribute(t, n);
          },
          setStyles: function(e, t) {
            var n = {};
            for (var r in t) {
              var i = t[r];
              s.default.isFlexProp(r)
                ? s.default[r](i, n)
                : (n[r] = (0, a.convertUnit)(i, r));
            }
            for (var o in n) {
              var d = n[o];
              if (Array.isArray(d))
                for (var u = 0; u < d.length; u++) e.style[o] = d[u];
              else e.style[o] = d;
            }
          },
          beforeRender: function() {
            (0, a.setRem)(this.getDeviceWidth() / this.getViewportWidth());
          },
          setNativeProps: function(e, t) {
            for (var n in t) {
              var a = t[n];
              if ("children" !== n && null != a)
                if ("style" === n) this.setStyles(e, a);
                else if (i.test(n)) {
                  var r = n.slice(2).toLowerCase();
                  this.addEventListener(e, r, a);
                } else this.setAttribute(e, n, a);
            }
          }
        };
      (t.default = o), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          parse: function(e) {
            return (e.type = "div"), e;
          }
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        };
      (t.default = {
        parse: function(e) {
          var t = e.props;
          e.type = "text";
          var n = t.style,
            r = t.disabled,
            s = t.children,
            i = a(
              {
                textAlign: "center",
                fontSize: 22,
                paddingTop: 4,
                paddingRight: 12,
                paddingBottom: 6,
                paddingLeft: 12,
                borderWidth: 4,
                borderStyle: "solid",
                borderColor: "#000000",
                backgroudColor: "#c0c0c0"
              },
              n
            );
          return (
            r &&
              ((t.onClick = null),
              (i = a({}, i, { color: "#7f7f7f", borderColor: "#7f7f7f" }))),
            "string" == typeof s && ((t.value = s), (t.children = null)),
            e
          );
        }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t, n) {
        return {
          fontSize: e * t,
          marginTop: e * t * n,
          marginBottom: e * t * n,
          fontWeight: "bold"
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        s = {
          h1: a(28, 2, 0.67),
          h2: a(28, 1.5, 0.83),
          h3: a(28, 1.17, 1),
          h4: a(28, 1, 1.33),
          h5: a(28, 0.83, 1.67),
          h6: a(28, 0.67, 2.33)
        };
      (t.default = {
        parse: function(e) {
          var t = e.type,
            n = e.props;
          return (
            (e.type = "text"),
            (n.style = r({}, s[t] || s.h6, n.style)),
            "string" != typeof n.children ||
              n.value ||
              ((n.value = n.children), (n.children = null)),
            e
          );
        }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(13);
      (t.default = {
        parse: function(e) {
          var t = e.props;
          return (
            (e.type = "image"),
            (e.props = (0, a.transformPropsAttrsToStyle)(t, [
              "width",
              "height"
            ])),
            e
          );
        }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(159),
        s = a(r),
        i = n(164),
        o = a(i),
        d = n(163),
        u = a(d),
        _ = n(162),
        l = a(_),
        m = n(161),
        c = a(m),
        f = n(157),
        h = a(f),
        M = n(158),
        y = a(M),
        p = n(156),
        L = a(p);
      (t.default = {
        span: l.default,
        p: c.default,
        img: s.default,
        button: h.default,
        video: o.default,
        textarea: u.default,
        h1: y.default,
        h2: y.default,
        h3: y.default,
        h4: y.default,
        h5: y.default,
        h6: y.default,
        nav: L.default,
        article: L.default,
        section: L.default,
        footer: L.default,
        aside: L.default,
        main: L.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return { type: "span", attr: { value: e } };
      }
      function r(e) {
        var t = e.type,
          n = e.props,
          a = n.style,
          r = n.children;
        "img" === t && (t = "image"),
          u[t] && ((a = o({}, u[t], a)), (t = "span")),
          (n.style = null),
          (n.children = null);
        var i = { type: t, style: a, attr: n || {} };
        return (
          r &&
            ("span" === t && "string" == typeof r
              ? (i.attr.value = r)
              : (i.children = s(r))),
          i
        );
      }
      function s(e) {
        var t = [];
        Array.isArray(e) || (e = [e]);
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          "string" == typeof s
            ? t.push(a(s))
            : "object" === (void 0 === s ? "undefined" : i(s)) && t.push(r(s));
        }
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        d = { fontSize: 28, marginTop: 28, marginBottom: 28 },
        u = {
          u: { textDecoration: "underline" },
          s: { textDecoration: "line-through" },
          i: { fontStyle: "italic" },
          b: { fontWeight: "bold" },
          del: { textDecoration: "line-through" },
          em: { fontStyle: "italic" },
          strong: { fontWeight: "bold" },
          big: { fontSize: 33.6 },
          small: { fontSize: 28 * 0.8 }
        };
      (t.default = {
        parse: function(e) {
          var t = e.props,
            n = t.children;
          return (
            (e.type = "richtext"),
            (t.style = o({}, d, t.style)),
            (t.value = s(n)),
            (t.children = null),
            e
          );
        }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          parse: function(e) {
            var t = e.props;
            return (
              (e.type = "text"),
              "string" != typeof t.children ||
                t.value ||
                ((t.value = t.children), (t.children = null)),
              e
            );
          }
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          parse: function(e) {
            var t = e.props;
            return (
              "string" != typeof t.children ||
                t.value ||
                ((t.value = t.children), (t.children = null)),
              e
            );
          }
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(13);
      (t.default = {
        parse: function(e) {
          var t = e.props;
          return (
            (e.props = (0, a.transformPropsAttrsToStyle)(t, [
              "width",
              "height"
            ])),
            e
          );
        }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        r = n(146),
        s = n(160),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s),
        o = /^on[A-Z]/,
        d = /^aria-/,
        u = {},
        _ =
          "object" ===
          ("undefined" == typeof __weex_document__
            ? "undefined"
            : a(__weex_document__))
            ? __weex_document__
            : "object" === (void 0 === _ ? "undefined" : a(_)) ? _ : null,
        l = {
          deviceWidth: 750,
          viewportWidth: 750,
          getDeviceWidth: function() {
            return this.deviceWidth;
          },
          setDeviceWidth: function(e) {
            this.deviceWidth = e;
          },
          getViewportWidth: function() {
            return this.viewportWidth;
          },
          setViewportWidth: function(e) {
            this.viewportWidth = e;
          },
          getElementById: function(e) {
            return u[e];
          },
          createBody: function() {
            if (_.body) return _.body;
            var e = _.documentElement,
              t = _.createBody(l.bodyType, l.bodyProps);
            return e.appendChild(t), t;
          },
          createComment: function(e) {
            return _.createComment(e);
          },
          createEmpty: function() {
            return this.createComment(" empty ");
          },
          createText: function(e) {
            return l.createElement({ type: "text", props: { value: e } });
          },
          updateText: function(e, t) {
            this.setAttribute(e, "value", t);
          },
          createElement: function(e) {
            var t = i.default[e.type];
            t && (e = t.parse(e));
            var n = e.props,
              a = {},
              s = n.style;
            for (var o in s) a[o] = (0, r.convertUnit)(s[o], o);
            var d = _.createElement(e.type, { style: a });
            return this.setNativeProps(d, n, !0), d;
          },
          appendChild: function(e, t) {
            return t.appendChild(e);
          },
          removeChild: function(e, t) {
            t = t || e.parentNode;
            var n = e.attr && e.attr.id;
            return null != n && (u[n] = null), t.removeChild(e);
          },
          replaceChild: function(e, t, n) {
            n = n || t.parentNode;
            var a = t.previousSibling,
              r = t.nextSibling;
            this.removeChild(t, n),
              a
                ? this.insertAfter(e, a, n)
                : r ? this.insertBefore(e, r, n) : this.appendChild(e, n);
          },
          insertAfter: function(e, t, n) {
            return (n = n || t.parentNode), n.insertAfter(e, t);
          },
          insertBefore: function(e, t, n) {
            return (n = n || t.parentNode), n.insertBefore(e, t);
          },
          addEventListener: function(e, t, n, a) {
            var r = a[t + "EventParams"];
            return e.addEvent(t, n, r);
          },
          removeEventListener: function(e, t, n) {
            return e.removeEvent(t, n);
          },
          removeAllEventListeners: function(e) {},
          removeAttribute: function(e, t, n) {
            return "id" == t && (u[n] = null), e.setAttr(t, void 0, !1);
          },
          setAttribute: function(e, t, n) {
            return (
              "id" == t && (u[n] = e),
              d.test(t) &&
                (t = t.replace(/\-(\w)/, function(e, t) {
                  return t.toUpperCase();
                })),
              e.setAttr(t, n, !1)
            );
          },
          setStyles: function(e, t) {
            for (var n in t) {
              var a = t[n];
              (a = (0, r.convertUnit)(a, n)), e.setStyle(n, a);
            }
          },
          beforeRender: function() {
            _.open(),
              (0, r.setRem)(this.getDeviceWidth() / this.getViewportWidth());
          },
          afterRender: function() {
            _.listener && _.listener.createFinish && _.listener.createFinish(),
              _.close();
          },
          setNativeProps: function(e, t, n) {
            for (var a in t) {
              var r = t[a];
              if ("children" !== a && null != r)
                if ("style" === a) {
                  if (n) continue;
                  this.setStyles(e, r);
                } else if (o.test(a)) {
                  var s = a.slice(2).toLowerCase();
                  this.addEventListener(e, s, r, t);
                } else this.setAttribute(e, a, r);
            }
          }
        };
      (t.default = l), (e.exports = t.default);
    },
    function(e, t) {
      e.exports = {
        uri:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAAK/CAYAAABdpwbNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAuOSURBVHja7N2xbltlGIDh14cCS9koY7pDGOw7yA0gsZS2ogsSM+qA4A6AoULsFUsFIl2QuADKFbgD7UpLxARsZAGkhCEnVYmS0qqJfZCeZ0kUH9u/Pi+vfh3/mc3n855go7pabVWvVxeqlwMAeDq71S/Vz9UP1Xb14KSLZyeEyUb1aXWpesFMAYBTsjfGycfVztEHh2Oe8FZ1r7oiSgCAUzaMjXF//PnEMPmg+rZ6xdwAgDN0vvqqun5SmLxTfd7xuygAAKdtVt0YG+RfYbJR3RwvAABYZZzcHFvkUZh80sGWCgDAqp2vPjsMk4vVZTMBANboUnVxGKPEfSUAwDoN1eWhg8PTAADWbWuoNs0BAJiAzaF61RwAgAm4MOR/3wAA0/CSm14BgMkQJgDAZJxbxZtcu/aeSQPA/9ytW1+e+XvYMQEAJkOYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBADgec3m8/n+VBazXC59IgCwYovFYjJrsWMCAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAgFWEyZ/GAABMwF9D9bs5AAAT8NtQ3TcHAGAC7g3V9+YAAEzAnaHarvbMAgBYo71qe6geVrfNAwBYo9vVw8OvC39U7ZoJALAGu2OLPDrHZKd6v9o3GwBghfbHBtl5PEyqvqmu534TAGB1UfLh2CAdDZOqL6q3qz/MCgA4Q7vVu9WNx/943JH031WbY73YPQEATtPe2BhvVF8fffDcCU/aqa50cCPK1WprfIHXqhfNFAB4Sn9Xv3ZwoOudDr5989NJF8/m8/naV7xcLg9/dfMtAKzebLFYTGMh+/uTagFhAgBr6IGpLGTwWQAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQA4DmdM4Jnd/fuj4YAwH+az980hGdkxwQAmAxH0gMAjqQHABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwMQIAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCxAgAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIACBMAAGECAAgTAABhAgAIEwAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAYQIAIEwAAGECACBMAABhAgAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJACBMAACECQAgTAAAhAkAIEwAAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABAIQJAIAwAQCECQCAMAEAhAkAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgCAMAEAECYAgDABABAmAIAwAQAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBAAQJgAAwgQAECYAAMIEABAmAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAMIEAECYAADCBABAmAAAwgQAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAAgTAECYAAAIEwBAmAAACBMAQJgAAJy5fwYAjnFdW7CQ2C8AAAAASUVORK5CYII=",
        width: 550,
        height: 703
      };
    },
    function(e, t, n) {
      function a(e) {
        return n(r(e));
      }
      function r(e) {
        var t = s[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t;
      }
      var s = {
        "./af": 14,
        "./af.js": 14,
        "./ar": 21,
        "./ar-dz": 15,
        "./ar-dz.js": 15,
        "./ar-kw": 16,
        "./ar-kw.js": 16,
        "./ar-ly": 17,
        "./ar-ly.js": 17,
        "./ar-ma": 18,
        "./ar-ma.js": 18,
        "./ar-sa": 19,
        "./ar-sa.js": 19,
        "./ar-tn": 20,
        "./ar-tn.js": 20,
        "./ar.js": 21,
        "./az": 22,
        "./az.js": 22,
        "./be": 23,
        "./be.js": 23,
        "./bg": 24,
        "./bg.js": 24,
        "./bm": 25,
        "./bm.js": 25,
        "./bn": 26,
        "./bn.js": 26,
        "./bo": 27,
        "./bo.js": 27,
        "./br": 28,
        "./br.js": 28,
        "./bs": 29,
        "./bs.js": 29,
        "./ca": 30,
        "./ca.js": 30,
        "./cs": 31,
        "./cs.js": 31,
        "./cv": 32,
        "./cv.js": 32,
        "./cy": 33,
        "./cy.js": 33,
        "./da": 34,
        "./da.js": 34,
        "./de": 37,
        "./de-at": 35,
        "./de-at.js": 35,
        "./de-ch": 36,
        "./de-ch.js": 36,
        "./de.js": 37,
        "./dv": 38,
        "./dv.js": 38,
        "./el": 39,
        "./el.js": 39,
        "./en-au": 40,
        "./en-au.js": 40,
        "./en-ca": 41,
        "./en-ca.js": 41,
        "./en-gb": 42,
        "./en-gb.js": 42,
        "./en-ie": 43,
        "./en-ie.js": 43,
        "./en-il": 44,
        "./en-il.js": 44,
        "./en-nz": 45,
        "./en-nz.js": 45,
        "./eo": 46,
        "./eo.js": 46,
        "./es": 49,
        "./es-do": 47,
        "./es-do.js": 47,
        "./es-us": 48,
        "./es-us.js": 48,
        "./es.js": 49,
        "./et": 50,
        "./et.js": 50,
        "./eu": 51,
        "./eu.js": 51,
        "./fa": 52,
        "./fa.js": 52,
        "./fi": 53,
        "./fi.js": 53,
        "./fo": 54,
        "./fo.js": 54,
        "./fr": 57,
        "./fr-ca": 55,
        "./fr-ca.js": 55,
        "./fr-ch": 56,
        "./fr-ch.js": 56,
        "./fr.js": 57,
        "./fy": 58,
        "./fy.js": 58,
        "./gd": 59,
        "./gd.js": 59,
        "./gl": 60,
        "./gl.js": 60,
        "./gom-latn": 61,
        "./gom-latn.js": 61,
        "./gu": 62,
        "./gu.js": 62,
        "./he": 63,
        "./he.js": 63,
        "./hi": 64,
        "./hi.js": 64,
        "./hr": 65,
        "./hr.js": 65,
        "./hu": 66,
        "./hu.js": 66,
        "./hy-am": 67,
        "./hy-am.js": 67,
        "./id": 68,
        "./id.js": 68,
        "./is": 69,
        "./is.js": 69,
        "./it": 70,
        "./it.js": 70,
        "./ja": 71,
        "./ja.js": 71,
        "./jv": 72,
        "./jv.js": 72,
        "./ka": 73,
        "./ka.js": 73,
        "./kk": 74,
        "./kk.js": 74,
        "./km": 75,
        "./km.js": 75,
        "./kn": 76,
        "./kn.js": 76,
        "./ko": 77,
        "./ko.js": 77,
        "./ky": 78,
        "./ky.js": 78,
        "./lb": 79,
        "./lb.js": 79,
        "./lo": 80,
        "./lo.js": 80,
        "./lt": 81,
        "./lt.js": 81,
        "./lv": 82,
        "./lv.js": 82,
        "./me": 83,
        "./me.js": 83,
        "./mi": 84,
        "./mi.js": 84,
        "./mk": 85,
        "./mk.js": 85,
        "./ml": 86,
        "./ml.js": 86,
        "./mr": 87,
        "./mr.js": 87,
        "./ms": 89,
        "./ms-my": 88,
        "./ms-my.js": 88,
        "./ms.js": 89,
        "./mt": 90,
        "./mt.js": 90,
        "./my": 91,
        "./my.js": 91,
        "./nb": 92,
        "./nb.js": 92,
        "./ne": 93,
        "./ne.js": 93,
        "./nl": 95,
        "./nl-be": 94,
        "./nl-be.js": 94,
        "./nl.js": 95,
        "./nn": 96,
        "./nn.js": 96,
        "./pa-in": 97,
        "./pa-in.js": 97,
        "./pl": 98,
        "./pl.js": 98,
        "./pt": 100,
        "./pt-br": 99,
        "./pt-br.js": 99,
        "./pt.js": 100,
        "./ro": 101,
        "./ro.js": 101,
        "./ru": 102,
        "./ru.js": 102,
        "./sd": 103,
        "./sd.js": 103,
        "./se": 104,
        "./se.js": 104,
        "./si": 105,
        "./si.js": 105,
        "./sk": 106,
        "./sk.js": 106,
        "./sl": 107,
        "./sl.js": 107,
        "./sq": 108,
        "./sq.js": 108,
        "./sr": 110,
        "./sr-cyrl": 109,
        "./sr-cyrl.js": 109,
        "./sr.js": 110,
        "./ss": 111,
        "./ss.js": 111,
        "./sv": 112,
        "./sv.js": 112,
        "./sw": 113,
        "./sw.js": 113,
        "./ta": 114,
        "./ta.js": 114,
        "./te": 115,
        "./te.js": 115,
        "./tet": 116,
        "./tet.js": 116,
        "./tg": 117,
        "./tg.js": 117,
        "./th": 118,
        "./th.js": 118,
        "./tl-ph": 119,
        "./tl-ph.js": 119,
        "./tlh": 120,
        "./tlh.js": 120,
        "./tr": 121,
        "./tr.js": 121,
        "./tzl": 122,
        "./tzl.js": 122,
        "./tzm": 124,
        "./tzm-latn": 123,
        "./tzm-latn.js": 123,
        "./tzm.js": 124,
        "./ug-cn": 125,
        "./ug-cn.js": 125,
        "./uk": 126,
        "./uk.js": 126,
        "./ur": 127,
        "./ur.js": 127,
        "./uz": 129,
        "./uz-latn": 128,
        "./uz-latn.js": 128,
        "./uz.js": 129,
        "./vi": 130,
        "./vi.js": 130,
        "./x-pseudo": 131,
        "./x-pseudo.js": 131,
        "./yo": 132,
        "./yo.js": 132,
        "./zh-cn": 133,
        "./zh-cn.js": 133,
        "./zh-hk": 134,
        "./zh-hk.js": 134,
        "./zh-tw": 135,
        "./zh-tw.js": 135
      };
      (a.keys = function() {
        return Object.keys(s);
      }),
        (a.resolve = r),
        (e.exports = a),
        (a.id = 167);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function d(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t) ? u(e) : t;
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && m(e, t);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var f = n(2),
        h = (n(138),
        (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(169))),
        M = (function(e) {
          function t() {
            return s(this, t), d(this, _(t).apply(this, arguments));
          }
          return (
            l(t, e),
            o(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = r({}, e, {
                      style: r({}, y.initial, e.style),
                      onClick: e.onPress
                    });
                  return delete t.onPress, (0, f.createElement)(h.default, t);
                }
              }
            ]),
            t
          );
        })(f.Component);
      c(M, "propTypes", {});
      var y = { initial: { cursor: "pointer" } },
        p = M;
      (t.default = p), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function r() {
        return (
          (r =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              f(e, t, n[t]);
            });
        }
        return e;
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t) ? _(e) : t;
      }
      function _(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && c(e, t);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var h = n(2),
        M = n(138),
        y = (function(e) {
          function t() {
            return i(this, t), u(this, l(t).apply(this, arguments));
          }
          return (
            m(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props;
                  if (M.isWeex) return (0, h.createElement)("div", e);
                  var t = s({}, p.initial, e.style);
                  return (0, h.createElement)("div", r({}, e, { style: t }));
                }
              }
            ]),
            t
          );
        })(h.Component);
      f(y, "propTypes", {});
      var p = {
          initial: {
            border: "0 solid black",
            position: "relative",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            flexShrink: 0
          }
        },
        L = y;
      (t.default = L), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return (e = (0, s.default)(e, [])), Array.isArray(e) ? e : [].concat(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(141),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = {
          map: function(e, t, n) {
            return null == e
              ? null
              : ((e = a(e)),
                e.map(function(e, a) {
                  return t.call(n, e, a);
                }));
          },
          forEach: function(e, t, n) {
            if (null == e) return null;
            (e = a(e)),
              e.forEach(function(e, a) {
                return t.call(n, e, a);
              });
          },
          count: function(e) {
            return null == e ? 0 : a(e).length;
          },
          only: function(e) {
            if (((e = i.toArray(e)), 1 !== e.length))
              throw new Error(
                "Children.only: expected to receive a single element child."
              );
            return e[0];
          },
          toArray: function(e) {
            return null == e
              ? []
              : a(e).filter(function(e) {
                  return null !== e;
                });
          }
        };
      (t.default = i), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e) {
        var t = "__context_" + h++ + "__",
          n = (function(n) {
            function a() {
              var t, n, r, i;
              o(this, a);
              for (var d = arguments.length, u = Array(d), _ = 0; _ < d; _++)
                u[_] = arguments[_];
              return (
                (n = r = s(
                  this,
                  (t = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                    t,
                    [this].concat(u)
                  )
                )),
                (r.emitter = new f(e)),
                (i = n),
                s(r, i)
              );
            }
            return (
              i(a, n),
              u(a, [
                {
                  key: "getChildContext",
                  value: function() {
                    return r({}, t, this.emitter);
                  }
                },
                {
                  key: "componentWillMount",
                  value: function() {
                    void 0 !== this.props.value &&
                      (this.emitter.value = this.props.value);
                  }
                },
                {
                  key: "componentWillReceiveProps",
                  value: function(e) {
                    this.props.value !== e.value && this.emitter.emit(e.value);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return this.props.children;
                  }
                }
              ]),
              a
            );
          })(l.default);
        n.childContextTypes = r({}, t, c.default.object);
        var a = (function(n) {
          function a() {
            var n, r, i, d;
            o(this, a);
            for (var u = arguments.length, _ = Array(u), l = 0; l < u; l++)
              _[l] = arguments[l];
            return (
              (r = i = s(
                this,
                (n = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                  n,
                  [this].concat(_)
                )
              )),
              (i.state = { value: i.context[t] ? i.context[t].value : e }),
              (i.onUpdate = function(e) {
                return i.setState({ value: e });
              }),
              (d = r),
              s(i, d)
            );
          }
          return (
            i(a, n),
            u(a, [
              {
                key: "componentDidMount",
                value: function() {
                  this.context[t] && this.context[t].on(this.onUpdate);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.context[t] && this.context[t].off(this.onUpdate);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.children,
                    t = Array.isArray(e) ? e[0] : e;
                  if ("function" == typeof t) return t(this.state.value);
                }
              }
            ]),
            a
          );
        })(l.default);
        return (
          (a.contextTypes = r({}, t, c.default.object)),
          { Provider: n, Consumer: a }
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })();
      t.default = d;
      var _ = n(4),
        l = a(_),
        m = n(142),
        c = a(m),
        f = (function() {
          function e(t) {
            o(this, e), (this.handlers = []), (this.value = t);
          }
          return (
            u(e, [
              {
                key: "on",
                value: function(e) {
                  this.handlers.push(e);
                }
              },
              {
                key: "off",
                value: function(e) {
                  this.handlers = this.handlers.filter(function(t) {
                    return t !== e;
                  });
                }
              },
              {
                key: "emit",
                value: function(e) {
                  (this.value = e),
                    this.handlers.forEach(function(t) {
                      return t(e);
                    });
                }
              }
            ]),
            e
          );
        })(),
        h = 0;
      e.exports = t.default;
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function o(e, t) {
        return (0, h.createElement)(M, { element: e, container: t });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })();
      t.default = o;
      var u = n(4),
        _ = a(u),
        l = n(10),
        m = a(l),
        c = n(11),
        f = a(c),
        h = n(9),
        M = (function(e) {
          function t(e, n) {
            return (
              r(this, t),
              s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)
              )
            );
          }
          return (
            i(t, e),
            d(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.renderPortal();
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  e.container !== this.props.container &&
                    (0, f.default)(e.container),
                    this.renderPortal();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  (0, f.default)(this.props.container);
                }
              },
              {
                key: "renderPortal",
                value: function() {
                  (0, m.default)(this.props.element, this.props.container, {
                    parent: this
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  return null;
                }
              }
            ]),
            t
          );
        })(_.default);
      e.exports = t.default;
    },
    function(e, t, n) {
      "use strict";
      var a = n(139),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(r.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return null == e ? null : s.default.get(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      (t.default = a), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function r(e, t, n, r) {
        if (t.childNodes)
          for (var s = [].concat(a(t.childNodes)), o = 0; o < s.length; o++) {
            var d = s[o];
            t.removeChild(d);
          }
        return (0, i.default)(e, t, n, r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(10),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s);
      (t.default = r), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
        var t = e.driver,
          n = e.hook,
          a = e.measurer,
          r = e.deviceWidth,
          i = e.viewportWidth,
          d = e.eventRegistry,
          _ = e.bodyType,
          m = e.bodyProps;
        if (
          ((o.default.EmptyComponent = u.default),
          (o.default.NativeComponent = l.default),
          (o.default.TextComponent = c.default),
          (o.default.FragmentComponent = y.default),
          (o.default.CompositeComponent = h.default),
          (o.default.hook = n || v.default),
          (o.default.measurer = a),
          !o.default.driver)
        ) {
          if (!t)
            if (s.isWeex) t = L.default;
            else {
              if (!s.isWeb) throw Error("No builtin driver matched");
              t = g.default;
            }
          o.default.driver = t;
        }
        r &&
          o.default.driver.setDeviceWidth &&
          o.default.driver.setDeviceWidth(r),
          i &&
            o.default.driver.setViewportWidth &&
            o.default.driver.setViewportWidth(i),
          d && (o.default.driver.eventRegistry = d),
          _ && (o.default.driver.bodyType = _),
          m && (o.default.driver.bodyProps = m);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
      var s = n(5),
        i = n(1),
        o = a(i),
        d = n(180),
        u = a(d),
        _ = n(144),
        l = a(_),
        m = n(185),
        c = a(m),
        f = n(179),
        h = a(f),
        M = n(181),
        y = a(M),
        p = n(165),
        L = a(p),
        Y = n(155),
        g = a(Y),
        k = n(139),
        v = a(k);
      e.exports = t.default;
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = n(4),
        d = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = (function(e) {
          function t(e, n) {
            return (
              a(this, t),
              r(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)
              )
            );
          }
          return (
            s(t, e),
            i(t, [{ key: "isPureComponentClass", value: function() {} }]),
            t
          );
        })(d.default);
      (t.default = u), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        (e = (0, d.default)(e)), i.default.driver.setNativeProps(e, t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
      var s = n(1),
        i = a(s),
        o = n(140),
        d = a(o);
      e.exports = t.default;
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t, n) {
        try {
          return e();
        } catch (e) {
          n ? n(e) : i(t, e);
        }
      }
      function i(e, t) {
        for (var n = void 0; e; ) {
          if ("function" == typeof e.componentDidCatch) {
            n = e;
            break;
          }
          if (!e._internal || !e._internal._parentInstance) break;
          e = e._internal._parentInstance;
        }
        if (n) n.componentDidCatch(t);
        else {
          if (!c.default.sandbox) throw t;
          setTimeout(function() {
            throw t;
          }, 0);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        d = n(184),
        u = a(d),
        _ = n(186),
        l = a(_),
        m = n(1),
        c = a(m),
        f = n(145),
        h = a(f),
        M = n(6),
        y = a(M),
        p = n(12),
        L = a(p),
        Y = n(183),
        g = a(Y),
        k = (function() {
          function e(t) {
            r(this, e), (this._currentElement = t);
          }
          return (
            o(e, [
              {
                key: "getName",
                value: function() {
                  var e = this._currentElement.type,
                    t = this._instance && this._instance.constructor;
                  return (
                    e.displayName ||
                    (t && t.displayName) ||
                    e.name ||
                    (t && t.name) ||
                    null
                  );
                }
              },
              {
                key: "mountComponent",
                value: function(e, t, n, a) {
                  (this._parent = e),
                    (this._parentInstance = t),
                    (this._context = n),
                    (this._mountID = c.default.mountID++),
                    (this._updateCount = 0);
                  var r = this._currentElement.type,
                    o = this._currentElement.props,
                    d = r.prototype,
                    _ = d && r.prototype.isComponentClass,
                    m = d && r.prototype.render,
                    f = this._processContext(n),
                    M = void 0,
                    p = void 0;
                  if (_ || m) M = new r(o, f, l.default);
                  else {
                    if ("function" != typeof r)
                      throw new Error(
                        "Invalid component type: " +
                          r +
                          ". (keys: " +
                          Object.keys(r) +
                          ")"
                      );
                    M = new u.default(r);
                  }
                  (M.props = o),
                    (M.context = f),
                    (M.refs = {}),
                    (M.updater = l.default),
                    (M._internal = this),
                    (this._instance = M);
                  var L = M.state;
                  void 0 === L && (M.state = L = null);
                  var Y = null,
                    g = function(e) {
                      Y = e;
                    };
                  return (
                    M.componentWillMount &&
                      s(
                        function() {
                          M.componentWillMount();
                        },
                        M,
                        g
                      ),
                    null == p &&
                      ((c.default.component = this),
                      (M.state = this._processPendingState(o, f)),
                      s(
                        function() {
                          p = M.render();
                        },
                        M,
                        g
                      ),
                      (c.default.component = null)),
                    (this._renderedComponent = (0, y.default)(p)),
                    this._renderedComponent.mountComponent(
                      this._parent,
                      M,
                      this._processChildContext(n),
                      a
                    ),
                    Y && i(M, Y),
                    this._currentElement &&
                      this._currentElement.ref &&
                      h.default.attach(
                        this._currentElement._owner,
                        this._currentElement.ref,
                        this
                      ),
                    M.componentDidMount &&
                      s(function() {
                        M.componentDidMount();
                      }, M),
                    c.default.hook.Reconciler.mountComponent(this),
                    M
                  );
                }
              },
              {
                key: "unmountComponent",
                value: function(e) {
                  var t = this._instance;
                  if (
                    (t.componentWillUnmount &&
                      s(function() {
                        t.componentWillUnmount();
                      }, t),
                    c.default.hook.Reconciler.unmountComponent(this),
                    (t._internal = null),
                    null != this._renderedComponent)
                  ) {
                    var n = this._currentElement.ref;
                    n && h.default.detach(this._currentElement._owner, n, this),
                      this._renderedComponent.unmountComponent(e),
                      (this._renderedComponent = null),
                      (this._instance = null);
                  }
                  (this._currentElement = null),
                    (this._parentInstance = null),
                    (this._pendingStateQueue = null),
                    (this._pendingForceUpdate = !1),
                    (this._context = null);
                }
              },
              {
                key: "_processContext",
                value: function(e) {
                  var t = this._currentElement.type,
                    n = t.contextTypes;
                  if (!n) return {};
                  var a = {};
                  for (var r in n) a[r] = e[r];
                  return a;
                }
              },
              {
                key: "_processChildContext",
                value: function(e) {
                  var t = this._instance,
                    n = t.getChildContext && t.getChildContext();
                  return n ? Object.assign({}, e, n) : e;
                }
              },
              {
                key: "_processPendingState",
                value: function(e, t) {
                  var n = this._instance,
                    a = this._pendingStateQueue;
                  if (!a) return n.state;
                  this._pendingStateQueue = null;
                  for (
                    var r = Object.assign({}, n.state), s = 0;
                    s < a.length;
                    s++
                  ) {
                    var i = a[s];
                    Object.assign(
                      r,
                      "function" == typeof i ? i.call(n, r, e, t) : i
                    );
                  }
                  return r;
                }
              },
              {
                key: "updateComponent",
                value: function(e, t, n, a) {
                  var r = this._instance;
                  r ||
                    console.error(
                      "Update component '" +
                        this.getName() +
                        "' that has already been unmounted (or failed to mount)."
                    );
                  var i = !1,
                    o = void 0,
                    d = void 0;
                  this._context === a
                    ? (o = r.context)
                    : ((o = this._processContext(a)), (i = !0)),
                    e === t ? (d = t.props) : ((d = t.props), (i = !0));
                  var u = i && r.componentWillReceiveProps;
                  u &&
                    ((this._pendingState = !0),
                    s(function() {
                      r.componentWillReceiveProps(d, o);
                    }, r),
                    (this._pendingState = !1)),
                    h.default.update(e, t, this);
                  var _ = !0,
                    m = r.props,
                    f = r.state,
                    M = this._processPendingState(d, o);
                  if (
                    (this._pendingForceUpdate ||
                      (r.shouldComponentUpdate
                        ? (_ = s(function() {
                            return r.shouldComponentUpdate(d, M, o);
                          }, r))
                        : r.isPureComponentClass &&
                          (_ = !(0, g.default)(m, d) || !(0, g.default)(f, M))),
                    _)
                  ) {
                    this._pendingForceUpdate = !1;
                    var y = r.context;
                    s(function() {
                      r.componentWillUpdate && r.componentWillUpdate(d, M, o);
                    }, r),
                      (this._currentElement = t),
                      (this._context = a),
                      (r.props = d),
                      (r.state = M),
                      (r.context = o),
                      this._updateRenderedComponent(a),
                      s(function() {
                        r.componentDidUpdate && r.componentDidUpdate(m, f, y);
                      }, r),
                      this._updateCount++;
                  } else
                    (this._currentElement = t),
                      (this._context = a),
                      (r.props = d),
                      (r.state = M),
                      (r.context = o);
                  if (u) {
                    var p = this._pendingCallbacks;
                    (this._pendingCallbacks = null),
                      l.default.runCallbacks(p, r);
                  }
                  c.default.hook.Reconciler.receiveComponent(this);
                }
              },
              {
                key: "_updateRenderedComponent",
                value: function(e) {
                  var t = this._renderedComponent,
                    n = t._currentElement,
                    a = this._instance,
                    r = void 0;
                  if (
                    ((c.default.component = this),
                    s(function() {
                      r = a.render();
                    }, a),
                    (c.default.component = null),
                    (0, L.default)(n, r))
                  )
                    t.updateComponent(
                      n,
                      r,
                      t._context,
                      this._processChildContext(e)
                    );
                  else {
                    var i = t.getNativeNode();
                    t.unmountComponent(!0),
                      (this._renderedComponent = (0, y.default)(r)),
                      this._renderedComponent.mountComponent(
                        this._parent,
                        a,
                        this._processChildContext(e),
                        function(e, t) {
                          Array.isArray(e) || (e = [e]),
                            Array.isArray(i) || (i = [i]);
                          for (var n = void 0, a = 0; a < e.length; a++) {
                            var r = e[a];
                            i[a]
                              ? c.default.driver.replaceChild(r, i[a])
                              : c.default.driver.insertAfter(r, n),
                              (n = r);
                          }
                          if (e.length < i.length)
                            for (var s = e.length; s < i.length; s++)
                              c.default.driver.removeChild(i[s]);
                        }
                      );
                  }
                }
              },
              {
                key: "getNativeNode",
                value: function() {
                  var e = this._renderedComponent;
                  if (e) return e.getNativeNode();
                }
              },
              {
                key: "getPublicInstance",
                value: function() {
                  var e = this._instance;
                  return e instanceof u.default ? null : e;
                }
              }
            ]),
            e
          );
        })();
      (t.default = k), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        s = n(1),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s),
        o = (function() {
          function e() {
            a(this, e), (this._currentElement = null);
          }
          return (
            r(e, [
              {
                key: "mountComponent",
                value: function(e, t, n, a) {
                  (this._parent = e),
                    (this._parentInstance = t),
                    (this._context = n);
                  var r = { _internal: this },
                    s = this.getNativeNode();
                  return a ? a(s, e) : i.default.driver.appendChild(s, e), r;
                }
              },
              {
                key: "unmountComponent",
                value: function(e) {
                  this._nativeNode &&
                    !e &&
                    i.default.driver.removeChild(
                      this._nativeNode,
                      this._parent
                    ),
                    (this._nativeNode = null),
                    (this._parent = null),
                    (this._parentInstance = null),
                    (this._context = null);
                }
              },
              { key: "updateComponent", value: function() {} },
              {
                key: "getNativeNode",
                value: function() {
                  return (
                    null == this._nativeNode &&
                      (this._nativeNode = i.default.driver.createEmpty()),
                    this._nativeNode
                  );
                }
              }
            ]),
            e
          );
        })();
      (t.default = o), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        d = n(1),
        u = a(d),
        _ = n(144),
        l = a(_),
        m = n(3),
        c = a(m),
        f = n(6),
        h = a(f),
        M = n(143),
        y = a(M),
        p = (function(e) {
          function t(e) {
            return (
              r(this, t),
              s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            );
          }
          return (
            i(t, e),
            o(t, [
              {
                key: "mountComponent",
                value: function(e, t, n, a) {
                  (this._parent = e),
                    (this._parentInstance = t),
                    (this._context = n),
                    (this._mountID = u.default.mountID++);
                  var r = { _internal: this };
                  this._instance = r;
                  var s = this.getNativeNode(),
                    i = this._currentElement;
                  if ((this.mountChildren(i, n), a)) a(s, e);
                  else
                    for (var o = Array.isArray(e), d = 0; d < s.length; d++) {
                      var _ = s[d];
                      o ? e.push(_) : u.default.driver.appendChild(_, e);
                    }
                  return r;
                }
              },
              {
                key: "mountChildren",
                value: function(e, t) {
                  var n = this,
                    a = (this._renderedChildren = {}),
                    r = this.getNativeNode();
                  return e.map(function(e, s) {
                    var i = (0, h.default)(e),
                      o = (0, y.default)(a, e, s);
                    return (
                      (a[o] = i),
                      (i._mountIndex = s),
                      i.mountComponent(n._parent, n._instance, t, function(e) {
                        if (Array.isArray(e))
                          for (var t = 0; t < e.length; t++) r.push(e[t]);
                        else r.push(e);
                      })
                    );
                  });
                }
              },
              {
                key: "unmountComponent",
                value: function(e) {
                  if (
                    this._nativeNode &&
                    (c.default.remove(this._nativeNode), !e)
                  )
                    for (var t = 0; t < this._nativeNode.length; t++)
                      u.default.driver.removeChild(this._nativeNode[t]);
                  this.unmountChildren(!0),
                    (this._currentElement = null),
                    (this._nativeNode = null),
                    (this._parent = null),
                    (this._parentInstance = null),
                    (this._context = null),
                    (this._instance = null);
                }
              },
              {
                key: "updateComponent",
                value: function(e, t, n, a) {
                  (this._currentElement = t),
                    this.updateChildren(this._currentElement, a);
                }
              },
              {
                key: "getNativeNode",
                value: function() {
                  return (
                    null == this._nativeNode && (this._nativeNode = []),
                    this._nativeNode
                  );
                }
              },
              {
                key: "getPublicInstance",
                value: function() {
                  return this.getNativeNode();
                }
              },
              {
                key: "getName",
                value: function() {
                  return "fragment";
                }
              }
            ]),
            t
          );
        })(l.default);
      (t.default = p), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = n(4),
        d = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = 1,
        _ = (function(e) {
          function t() {
            var e, n, s, i;
            a(this, t);
            for (var o = arguments.length, d = Array(o), _ = 0; _ < o; _++)
              d[_] = arguments[_];
            return (
              (n = s = r(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(d)
                )
              )),
              (s.rootID = u++),
              (i = n),
              r(s, i)
            );
          }
          return (
            s(t, e),
            i(t, [
              { key: "isRootComponent", value: function() {} },
              {
                key: "render",
                value: function() {
                  return this.props.children;
                }
              },
              {
                key: "getPublicInstance",
                value: function() {
                  return this.getRenderedComponent().getPublicInstance();
                }
              },
              {
                key: "getRenderedComponent",
                value: function() {
                  return this._internal._renderedComponent;
                }
              }
            ]),
            t
          );
        })(d.default);
      (t.default = _), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
      }
      function r(e, t) {
        if (a(e, t)) return !0;
        if (
          "object" !== (void 0 === e ? "undefined" : s(e)) ||
          null === e ||
          "object" !== (void 0 === t ? "undefined" : s(t)) ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
          if (!i.call(t, n[o]) || !a(e[n[o]], t[n[o]])) return !1;
        return !0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = Object.prototype.hasOwnProperty;
      (t.default = r), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        s = n(1),
        i = ((function(e) {
          e && e.__esModule;
        })(s),
        (function() {
          function e(t) {
            a(this, e), (this.pureRender = t);
          }
          return (
            r(e, [
              {
                key: "render",
                value: function() {
                  return this.pureRender(this.props, this.context);
                }
              }
            ]),
            e
          );
        })());
      (t.default = i), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        s = n(1),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s),
        o = (function() {
          function e(t) {
            a(this, e),
              (this._currentElement = t),
              (this._stringText = String(t));
          }
          return (
            r(e, [
              {
                key: "mountComponent",
                value: function(e, t, n, a) {
                  (this._parent = e),
                    (this._parentInstance = t),
                    (this._context = n),
                    (this._mountID = i.default.mountID++);
                  var r = this.getNativeNode();
                  a ? a(r, e) : i.default.driver.appendChild(r, e);
                  var s = { _internal: this };
                  return i.default.hook.Reconciler.mountComponent(this), s;
                }
              },
              {
                key: "unmountComponent",
                value: function(e) {
                  this._nativeNode &&
                    !e &&
                    i.default.driver.removeChild(
                      this._nativeNode,
                      this._parent
                    ),
                    i.default.hook.Reconciler.unmountComponent(this),
                    (this._currentElement = null),
                    (this._nativeNode = null),
                    (this._parent = null),
                    (this._parentInstance = null),
                    (this._context = null),
                    (this._stringText = null);
                }
              },
              {
                key: "updateComponent",
                value: function(e, t, n) {
                  e !== t &&
                    ((this._currentElement = t),
                    (this._stringText = String(t)),
                    i.default.driver.updateText(
                      this.getNativeNode(),
                      this._stringText
                    ),
                    i.default.hook.Reconciler.receiveComponent(this));
                }
              },
              {
                key: "getNativeNode",
                value: function() {
                  return (
                    null == this._nativeNode &&
                      (this._nativeNode = i.default.driver.createText(
                        this._stringText
                      )),
                    this._nativeNode
                  );
                }
              }
            ]),
            e
          );
        })();
      (t.default = o), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      function a(e, t) {
        if (t) {
          (e._pendingCallbacks || (e._pendingCallbacks = [])).push(t);
        }
      }
      function r(e, t) {
        if (t) {
          (e._pendingStateQueue || (e._pendingStateQueue = [])).push(t);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = {
        setState: function(e, t, n) {
          var s = e._internal;
          s &&
            (r(s, t),
            a(s, n),
            !s._pendingState && s._renderedComponent && this.runUpdate(e));
        },
        forceUpdate: function(e, t) {
          var n = e._internal;
          n &&
            ((n._pendingForceUpdate = !0),
            a(n, t),
            n._renderedComponent && this.runUpdate(e));
        },
        runUpdate: function(e) {
          var t = e._internal,
            n = t._pendingCallbacks;
          t._pendingCallbacks = null;
          var a = t._currentElement,
            r = t._context;
          (t._pendingStateQueue || t._pendingForceUpdate) &&
            t.updateComponent(a, a, r, r),
            this.runCallbacks(n, e);
        },
        runCallbacks: function(e, t) {
          if (e) for (var n = 0; n < e.length; n++) e[n].call(t);
        }
      };
      (t.default = s), (e.exports = t.default);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = "0.5.4"),
        (e.exports = t.default);
    },
    function(e, t) {
      var n = {
        container: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgb(254,252,236)",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 20
        },
        text: { color: "rgb(247,106,36)", fontSize: 32 },
        main_text: { width: 600 }
      };
      e.exports = n;
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(t, n) {
      t.exports = e("@weex-module/modal");
    },
    function(t, n) {
      t.exports = e("@weex-module/stream");
    },
    function(e, t, n) {
      e.exports = n(148);
    }
  ]);
}),
  require("com.muxistudio.card");
