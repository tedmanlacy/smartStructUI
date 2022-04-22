!(function (a, t, c, i, p) {
  (a[i] = a[i] || []), a[i].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var s = t.getElementsByTagName(c)[0],
    f = t.createElement(c);
  (f.async = !0),
    (f.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TF7QP5M'),
    s.parentNode.insertBefore(f, s);
})(window, document, 'script', 'dataLayer'),
  (function (a, t, c) {
    function i(r, n) {
      return typeof r === n;
    }
    var f = [],
      o = [],
      l = {
        _version: '3.5.0',
        _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
        _q: [],
        on: function (r, n) {
          var u = this;
          setTimeout(function () {
            n(u[r]);
          }, 0);
        },
        addTest: function (r, n, u) {
          o.push({ name: r, fn: n, options: u });
        },
        addAsyncTest: function (r) {
          o.push({ name: null, fn: r });
        },
      },
      e = function () {};
    (e.prototype = l),
      (e = new e()).addTest('eventlistener', 'addEventListener' in a),
      e.addTest('localstorage', function () {
        var r = 'modernizr';
        try {
          return localStorage.setItem(r, r), localStorage.removeItem(r), !0;
        } catch (n) {
          return !1;
        }
      }),
      e.addTest('sessionstorage', function () {
        var r = 'modernizr';
        try {
          return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0;
        } catch (n) {
          return !1;
        }
      });
    var m = t.documentElement,
      g = 'svg' === m.nodeName.toLowerCase();
    e.addTest('queryselector', 'querySelector' in t && 'querySelectorAll' in t),
      (function p() {
        var r, n, u, v, C, d;
        for (var w in o)
          if (o.hasOwnProperty(w)) {
            if (
              ((r = []),
              (n = o[w]).name &&
                (r.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
            )
              for (u = 0; u < n.options.aliases.length; u++)
                r.push(n.options.aliases[u].toLowerCase());
            for (v = i(n.fn, 'function') ? n.fn() : n.fn, C = 0; C < r.length; C++)
              1 === (d = r[C].split('.')).length
                ? (e[d[0]] = v)
                : (!e[d[0]] || e[d[0]] instanceof Boolean || (e[d[0]] = new Boolean(e[d[0]])),
                  (e[d[0]][d[1]] = v)),
                f.push((v ? '' : 'no-') + d.join('-'));
          }
      })(),
      (function s(r) {
        var n = m.className,
          u = e._config.classPrefix || '';
        if ((g && (n = n.baseVal), e._config.enableJSClass)) {
          var v = new RegExp('(^|\\s)' + u + 'no-js(\\s|$)');
          n = n.replace(v, '$1' + u + 'js$2');
        }
        e._config.enableClasses &&
          ((n += ' ' + u + r.join(' ' + u)), g ? (m.className.baseVal = n) : (m.className = n));
      })(f),
      delete l.addTest,
      delete l.addAsyncTest;
    for (var h = 0; h < e._q.length; h++) e._q[h]();
    a.Modernizr = e;
  })(window, document),
  (function (a, t) {
    var c, i;
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define(t)
      : ((a = a || self),
        (c = a.Cookies),
        ((i = a.Cookies = t()).noConflict = function () {
          return (a.Cookies = c), i;
        }));
  })(this, function () {
    'use strict';
    function a(t) {
      for (var c = 1; c < arguments.length; c++) {
        var i = arguments[c];
        for (var p in i) t[p] = i[p];
      }
      return t;
    }
    return (function t(c, i) {
      function p(s, f, o) {
        if ('undefined' != typeof document) {
          'number' == typeof (o = a({}, i, o)).expires &&
            (o.expires = new Date(Date.now() + 864e5 * o.expires)),
            o.expires && (o.expires = o.expires.toUTCString()),
            (s = encodeURIComponent(s)
              .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
              .replace(/[()]/g, escape));
          var l = '';
          for (var e in o)
            o[e] && ((l += '; ' + e), !0 !== o[e] && (l += '=' + o[e].split(';')[0]));
          return (document.cookie = s + '=' + c.write(f, s) + l);
        }
      }
      return Object.create(
        {
          set: p,
          get: function (s) {
            if ('undefined' != typeof document && (!arguments.length || s)) {
              for (
                var f = document.cookie ? document.cookie.split('; ') : [], o = {}, l = 0;
                l < f.length;
                l++
              ) {
                var e = f[l].split('='),
                  m = e.slice(1).join('=');
                try {
                  var g = decodeURIComponent(e[0]);
                  if (((o[g] = c.read(m, g)), s === g)) break;
                } catch (h) {}
              }
              return s ? o[s] : o;
            }
          },
          remove: function (s, f) {
            p(s, '', a({}, f, { expires: -1 }));
          },
          withAttributes: function (s) {
            return t(this.converter, a({}, this.attributes, s));
          },
          withConverter: function (s) {
            return t(a({}, this.converter, s), this.attributes);
          },
        },
        { attributes: { value: Object.freeze(i) }, converter: { value: Object.freeze(c) } }
      );
    })(
      {
        read: function (t) {
          return (
            '"' === t[0] && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
          );
        },
        write: function (t) {
          return encodeURIComponent(t).replace(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          );
        },
      },
      { path: '/' }
    );
  });
