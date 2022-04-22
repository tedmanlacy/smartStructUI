'use strict';
(self.webpackChunkangularexampleapp = self.webpackChunkangularexampleapp || []).push([
  [303],
  {
    6303: (h_, u, E) => {
      E.r(u), E.d(u, { HeroModule: () => f_ });
      var i = E(3075),
        $ = E(5108),
        M = E(6696);
      function d(e, n, t, o, r, a, s) {
        try {
          var P = e[a](s),
            S = P.value;
        } catch (O) {
          return void t(O);
        }
        P.done ? n(S) : Promise.resolve(S).then(o, r);
      }
      var _ = E(5e3),
        f = E(4697);
      let h = (() => {
        class e {
          constructor(t) {
            this.heroService = t;
          }
          resolve(t) {
            var o = this;
            return (function y(e) {
              return function () {
                var n = this,
                  t = arguments;
                return new Promise(function (o, r) {
                  var a = e.apply(n, t);
                  function s(S) {
                    d(a, o, r, s, P, 'next', S);
                  }
                  function P(S) {
                    d(a, o, r, s, P, 'throw', S);
                  }
                  s(void 0);
                });
              };
            })(function* () {
              const r = t.paramMap.get('id') || '';
              return o.heroService.getHeroById(r);
            })();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_.LFG(f.e));
          }),
          (e.ɵprov = _.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      var R = E(1777),
        p = E(361),
        c = E(2398),
        A = E(9808),
        D = E(4604),
        Y = E(1487),
        m = E(7423);
      function x(e, n) {
        1 & e && (_.TgZ(0, 'div', 6), _._UZ(1, 'app-hero-loading'), _.qZA());
      }
      function Z(e, n) {
        if (
          (1 & e &&
            (_.TgZ(0, 'div', 6),
            _.ynx(1),
            _._UZ(2, 'app-hero-card', 7),
            _.TgZ(3, 'div', 8)(4, 'pre'),
            _._uU(5),
            _.ALo(6, 'json'),
            _.qZA()(),
            _.BQk(),
            _.qZA()),
          2 & e)
        ) {
          const t = _.oxw();
          _.Q6J('@fadeIn', 'fadeIn'),
            _.xp6(2),
            _.Q6J('hero', t.hero),
            _.xp6(3),
            _.Oqu(_.lcZ(6, 3, t.hero));
        }
      }
      function X(e, n) {
        if (1 & e) {
          const t = _.EpF();
          _.TgZ(0, 'button', 9),
            _.NdJ('click', function () {
              return _.CHM(t), _.oxw().goToTheAnchor();
            }),
            _.SDv(1, 10),
            _.qZA();
        }
      }
      let J = (() => {
        class e {
          constructor(t, o, r) {
            (this.location = t), (this.router = o), (this.activatedRoute = r);
          }
          ngOnInit() {
            this.activatedRoute.snapshot.data.hero.subscribe(t => {
              this.hero = t;
            });
          }
          goBack() {
            this.location.back();
          }
          goToTheAnchor() {
            this.hero &&
              this.router.navigate([c.ff.routes.hero.detail(this.hero.id)], {
                fragment: 'heroe-detail',
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_.Y36(A.Ye), _.Y36(M.F0), _.Y36(M.gz));
          }),
          (e.ɵcmp = _.Xpm({
            type: e,
            selectors: [['app-hero-detail-page']],
            decls: 7,
            vars: 3,
            consts: function () {
              let n, t, o;
              return (
                (n = 'Detalle del heroe'),
                (t = 'Volver'),
                (o = 'Ancla al heroe'),
                [
                  [1, 'header__title'],
                  n,
                  ['class', 'container', 4, 'ngIf'],
                  [
                    'aria-label',
                    'Anchor the hero button',
                    'mat-raised-button',
                    '',
                    'type',
                    'button',
                    3,
                    'click',
                    4,
                    'ngIf',
                  ],
                  [
                    'aria-label',
                    'Go back button',
                    'mat-raised-button',
                    '',
                    'type',
                    'button',
                    3,
                    'click',
                  ],
                  t,
                  [1, 'container'],
                  [3, 'hero'],
                  ['id', 'hero-json'],
                  [
                    'aria-label',
                    'Anchor the hero button',
                    'mat-raised-button',
                    '',
                    'type',
                    'button',
                    3,
                    'click',
                  ],
                  o,
                ]
              );
            },
            template: function (t, o) {
              1 & t &&
                (_.TgZ(0, 'h1', 0),
                _.SDv(1, 1),
                _.qZA(),
                _.YNc(2, x, 2, 0, 'div', 2),
                _.YNc(3, Z, 7, 5, 'div', 2),
                _.YNc(4, X, 2, 0, 'button', 3),
                _.TgZ(5, 'button', 4),
                _.NdJ('click', function () {
                  return o.goBack();
                }),
                _.SDv(6, 5),
                _.qZA()),
                2 & t &&
                  (_.xp6(2),
                  _.Q6J('ngIf', !o.hero),
                  _.xp6(1),
                  _.Q6J('ngIf', o.hero),
                  _.xp6(1),
                  _.Q6J('ngIf', o.hero));
            },
            directives: [A.O5, D.l, Y.O, m.lW],
            pipes: [A.Ts],
            styles: [
              '.container[_ngcontent-%COMP%]{width:65%;margin-left:auto;margin-right:auto;margin-top:2rem}button[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem;margin-left:auto;margin-right:auto;display:block}@media (max-width: 600px){.container[_ngcontent-%COMP%]{width:90%}}',
            ],
            data: {
              animation: [
                (0, R.X$)('fadeIn', [
                  (0, R.eR)('* => *', (0, R._7)(p.K1, { params: { timing: 1, delay: 0 } })),
                ]),
              ],
            },
          })),
          e
        );
      })();
      var F = E(4391),
        g = E(8966);
      let B = (() => {
        class e {
          constructor() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = _.Xpm({
            type: e,
            selectors: [['app-hero-remove']],
            decls: 9,
            vars: 1,
            consts: function () {
              let n, t, o, r;
              return (
                (n = 'Eliminar heroe'),
                (t = 'Estas seguro?'),
                (o = 'No'),
                (r = 'Si'),
                [
                  ['mat-dialog-title', ''],
                  n,
                  t,
                  ['aria-label', 'no button', 'mat-button', '', 'mat-dialog-close', ''],
                  o,
                  ['aria-label', 'yes button', 'mat-button', '', 3, 'mat-dialog-close'],
                  r,
                ]
              );
            },
            template: function (t, o) {
              1 & t &&
                (_.TgZ(0, 'h2', 0),
                _.SDv(1, 1),
                _.qZA(),
                _.TgZ(2, 'mat-dialog-content'),
                _.SDv(3, 2),
                _.qZA(),
                _.TgZ(4, 'mat-dialog-actions')(5, 'button', 3),
                _.SDv(6, 4),
                _.qZA(),
                _.TgZ(7, 'button', 5),
                _.SDv(8, 6),
                _.qZA()()),
                2 & t && (_.xp6(7), _.Q6J('mat-dialog-close', !0));
            },
            directives: [g.uh, g.xY, g.H8, m.lW, g.ZT],
            encapsulation: 2,
          })),
          e
        );
      })();
      var b = E(8023),
        C = E(8889),
        W = E(4004);
      class Q {
        constructor(n = {}) {
          (this.id = n.id),
            (this.email = n.email),
            (this.firstname = n.firstname),
            (this.lastname = n.lastname),
            (this.role = n.role),
            (this.heroes = n.heroes);
        }
        deserialize(n) {
          return Object.assign(this, n), this;
        }
      }
      let w = (() => {
        class e {
          constructor(t) {
            this.apollo = t;
          }
          getMe({ fetchPolicy: t }) {
            return this.apollo
              .watchQuery({
                query: C.Ps`
          query Me {
            me {
              id
              email
              firstname
              lastname
              heroes {
                id
                realName
                alterEgo
              }
            }
          }
        `,
                fetchPolicy: t,
              })
              .valueChanges.pipe((0, W.U)(o => new Q(o.data.me)));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_.LFG(C._M));
          }),
          (e.ɵprov = _.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      var z = E(1271),
        q = E(1094),
        T = E(3652),
        k = E(508),
        V = E(2934),
        j = E(5245),
        K = E(2223),
        N = E(7322),
        __ = E(7531);
      const e_ = ['form'];
      function t_(e, n) {
        1 & e && (_.TgZ(0, 'p', 13), _.SDv(1, 14), _.qZA());
      }
      function o_(e, n) {
        1 & e &&
          (_.TgZ(0, 'mat-list-item'),
          _._UZ(1, 'img', 17),
          _.TgZ(2, 'h3', 18),
          _._UZ(3, 'app-loading-placeholder', 19),
          _.qZA(),
          _.TgZ(4, 'p', 18),
          _._UZ(5, 'app-loading-placeholder', 19),
          _.qZA(),
          _.TgZ(6, 'div', 20),
          _._UZ(7, 'app-loading-placeholder', 19),
          _.TgZ(8, 'mat-icon', 21),
          _._uU(9, 'favorite'),
          _.qZA()()()),
          2 & e &&
            (_.xp6(3),
            _.Q6J('width', '150px')('height', '0.9rem'),
            _.xp6(2),
            _.Q6J('width', '100px')('height', '0.9rem'),
            _.xp6(2),
            _.Q6J('width', '30px')('height', '0.9rem'));
      }
      const n_ = function () {
        return [1, 2, 3, 4, 5, 6, 7, 8];
      };
      function r_(e, n) {
        1 & e && (_.TgZ(0, 'mat-list', 15), _.YNc(1, o_, 10, 6, 'mat-list-item', 16), _.qZA()),
          2 & e && (_.xp6(1), _.Q6J('ngForOf', _.DdM(1, n_)));
      }
      function E_(e, n) {
        if (1 & e) {
          const t = _.EpF();
          _.TgZ(0, 'mat-icon', 23),
            _.NdJ('click', function () {
              _.CHM(t);
              const r = _.oxw().$implicit;
              return _.oxw().deleteHero(r);
            }),
            _._uU(1, ' delete '),
            _.qZA();
        }
      }
      function i_(e, n) {
        if (
          (1 & e &&
            (_.TgZ(0, 'mat-list-item')(1, 'h3', 18),
            _._uU(2),
            _.qZA(),
            _.TgZ(3, 'p', 18)(4, 'span'),
            _._uU(5),
            _.qZA()(),
            _.TgZ(6, 'div', 20),
            _.YNc(7, E_, 2, 0, 'mat-icon', 22),
            _.qZA()()),
          2 & e)
        ) {
          const t = n.$implicit;
          _.xp6(1),
            _.ekj('cp', t.published),
            _.xp6(1),
            _.hij(' ', t.alterEgo, ' '),
            _.xp6(1),
            _.ekj('cp', t.published),
            _.xp6(2),
            _.Oqu(t.realName),
            _.xp6(2),
            _.Q6J('ngIf', !t.published);
        }
      }
      function a_(e, n) {
        1 & e &&
          (_.TgZ(0, 'div', 24)(1, 'form')(2, 'div', 25),
          _._UZ(3, 'app-loading-placeholder', 26),
          _.qZA(),
          _.TgZ(4, 'div', 25),
          _._UZ(5, 'app-loading-placeholder', 26),
          _.qZA(),
          _.TgZ(6, 'button', 27),
          _.SDv(7, 28),
          _.qZA()()()),
          2 & e &&
            (_.xp6(3),
            _.Q6J('height', '2rem'),
            _.xp6(2),
            _.Q6J('height', '2rem'),
            _.xp6(1),
            _.Q6J('disabled', !0));
      }
      function l_(e, n) {
        1 & e && _.SDv(0, 36);
      }
      function S_(e, n) {
        1 & e && _.SDv(0, 37);
      }
      function s_(e, n) {
        if (
          (1 & e &&
            (_.TgZ(0, 'mat-error'),
            _.YNc(1, l_, 1, 0, 'ng-template', 35),
            _.YNc(2, S_, 1, 0, 'ng-template', 35),
            _.qZA()),
          2 & e)
        ) {
          const t = _.oxw(2);
          _.xp6(1),
            _.Q6J('ngIf', t.realName.errors.required),
            _.xp6(1),
            _.Q6J('ngIf', t.realName.errors.maxlength);
        }
      }
      function P_(e, n) {
        1 & e && _.SDv(0, 38);
      }
      function A_(e, n) {
        if ((1 & e && _.SDv(0, 39), 2 & e)) {
          const t = _.oxw(3);
          _.pQV(t.alterEgo.errors.maxlength.requiredLength)(
            t.alterEgo.errors.maxlength.actualLength
          ),
            _.QtT(0);
        }
      }
      function M_(e, n) {
        if (
          (1 & e &&
            (_.TgZ(0, 'mat-error'),
            _.YNc(1, P_, 1, 0, 'ng-template', 35),
            _.YNc(2, A_, 1, 2, 'ng-template', 35),
            _.qZA()),
          2 & e)
        ) {
          const t = _.oxw(2);
          _.xp6(1),
            _.Q6J('ngIf', t.alterEgo.errors.required),
            _.xp6(1),
            _.Q6J('ngIf', t.alterEgo.errors.maxlength);
        }
      }
      function R_(e, n) {
        1 & e && (_.TgZ(0, 'div'), _.SDv(1, 40), _.qZA());
      }
      function O_(e, n) {
        if (1 & e) {
          const t = _.EpF();
          _.TgZ(0, 'div')(1, 'form', 29, 30),
            _.NdJ('ngSubmit', function () {
              return _.CHM(t), _.oxw().createNewHero();
            }),
            _.TgZ(3, 'mat-form-field', 25),
            _._UZ(4, 'input', 31),
            _.YNc(5, s_, 3, 2, 'mat-error', 9),
            _.qZA(),
            _.TgZ(6, 'mat-form-field', 25),
            _._UZ(7, 'input', 32),
            _.YNc(8, M_, 3, 2, 'mat-error', 9),
            _.qZA(),
            _.TgZ(9, 'button', 33),
            _.SDv(10, 34),
            _.qZA(),
            _.YNc(11, R_, 2, 0, 'div', 9),
            _.qZA()();
        }
        if (2 & e) {
          const t = _.MAs(2),
            o = _.oxw();
          _.xp6(1),
            _.Q6J('formGroup', o.newHeroForm),
            _.xp6(4),
            _.Q6J('ngIf', o.realName.errors && t.submitted),
            _.xp6(3),
            _.Q6J('ngIf', o.alterEgo.errors && t.submitted),
            _.xp6(1),
            _.Q6J('disabled', t.submitted && !o.newHeroForm.valid),
            _.xp6(2),
            _.Q6J('ngIf', o.error);
        }
      }
      function g_(e, n) {
        1 & e &&
          (_.TgZ(0, 'pre'),
          _._uU(1, '      '),
          _._UZ(2, 'app-loading-placeholder', 26),
          _._uU(3, '\n    '),
          _.qZA()),
          2 & e && (_.xp6(2), _.Q6J('height', '300px'));
      }
      function c_(e, n) {
        if (
          (1 & e && (_.TgZ(0, 'pre'), _._uU(1), _.ALo(2, 'json'), _.ALo(3, 'slice'), _.qZA()),
          2 & e)
        ) {
          const t = _.oxw();
          _.xp6(1), _.Oqu(_.lcZ(2, 1, _.Dn7(3, 3, null == t.user ? null : t.user.heroes, 0, 2)));
        }
      }
      let m_ = (() => {
        class e {
          constructor(t, o, r, a, s, P, S, O) {
            (this.heroService = t),
              (this.userService = o),
              (this.dialog = r),
              (this.snackBar = a),
              (this.utilsService = s),
              (this.router = P),
              (this.formBuilder = S),
              (this.routesConfig = O),
              (this.myNgForm = ''),
              (this.error = !1),
              (this.realName = new i.NI('', [i.kI.required, i.kI.maxLength(30)])),
              (this.alterEgo = new i.NI('', [i.kI.required, i.kI.maxLength(30)])),
              (this.newHeroForm = this.formBuilder.group({
                realName: this.realName,
                alterEgo: this.alterEgo,
              })),
              this.onChanges();
          }
          ngOnInit() {
            this.loadUser();
          }
          loadUser() {
            this.userService.getMe({ fetchPolicy: 'no-cache' }).subscribe(t => {
              this.user = t;
            });
          }
          createNewHero() {
            this.newHeroForm.valid &&
              this.heroService.createHero(new F.V(this.newHeroForm.value)).subscribe(t => {
                t.errors ||
                  (this.myNgForm.resetForm(),
                  this.utilsService.showSnackBar('Hero created', 'info-snack-bar'),
                  this.loadUser());
              });
          }
          deleteHero(t) {
            this.dialog
              .open(B)
              .afterClosed()
              .subscribe(r => {
                r &&
                  this.heroService.removeHero(t.id).subscribe(a => {
                    a.errors
                      ? (this.error = !0)
                      : (this.utilsService.showSnackBar('Hero removed', 'info-snack-bar'),
                        this.loadUser());
                  });
              });
          }
          trackByFn(t) {
            return t;
          }
          onChanges() {
            var t;
            null === (t = this.newHeroForm.get('realName')) ||
              void 0 === t ||
              t.valueChanges.subscribe(o => {
                o && o.length >= 3 && b.V.isPalindrome(o)
                  ? this.snackBar.open("Yeah that's a Palindrome!", '', { duration: 2e3 })
                  : this.snackBar.dismiss();
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              _.Y36(f.e),
              _.Y36(w),
              _.Y36(g.uw),
              _.Y36(z.ux),
              _.Y36(q.F),
              _.Y36(M.F0),
              _.Y36(i.qu),
              _.Y36(c.hm)
            );
          }),
          (e.ɵcmp = _.Xpm({
            type: e,
            selectors: [['app-my-heroes-page']],
            viewQuery: function (t, o) {
              if ((1 & t && _.Gf(e_, 5), 2 & t)) {
                let r;
                _.iGM((r = _.CRH())) && (o.myNgForm = r.first);
              }
            },
            decls: 19,
            vars: 8,
            consts: function () {
              let n, t, o, r, a, s, P, S, O, L, U, v, I;
              return (
                (n = 'Mis heroes'),
                (t = 'Crear un heroe'),
                (o = 'Heroes 1 y 2'),
                (r = 'No hay heroes todavia, intenta crear uno en la parte derecha!'),
                (a = 'Crear'),
                (s = 'Nombre (Palindrome?)'),
                (P = 'Alter ego'),
                (S = ' Crear '),
                (O = 'Nombre requerido'),
                (L = 'El campo es muy largo'),
                (U = 'Nombre requerido'),
                (v =
                  'El campo es muy largo. Longitud requerida: ' +
                  '\ufffd0\ufffd' +
                  '. Actual: ' +
                  '\ufffd1\ufffd' +
                  ''),
                (I = 'Ha ocurrido un error.'),
                [
                  ['id', 'left'],
                  [1, 'header__title'],
                  n,
                  ['class', 'my-heroes__no-heroes--message', 4, 'ngIf'],
                  ['id', 'loading-list', 4, 'ngIf'],
                  [4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
                  ['id', 'right'],
                  t,
                  ['id', 'form-loading', 4, 'ngIf'],
                  [4, 'ngIf'],
                  ['id', 'heroes-json'],
                  o,
                  [1, 'clear'],
                  [1, 'my-heroes__no-heroes--message'],
                  r,
                  ['id', 'loading-list'],
                  [4, 'ngFor', 'ngForOf'],
                  [
                    'alt',
                    'default hero avatar',
                    'mat-list-avatar',
                    '',
                    'src',
                    './assets/images/default-hero.png',
                  ],
                  ['mat-line', ''],
                  [3, 'width', 'height'],
                  [1, 'hero-actions'],
                  [1, 'icon__like--grey'],
                  ['class', 'icon__remove', 3, 'click', 4, 'ngIf'],
                  [1, 'icon__remove', 3, 'click'],
                  ['id', 'form-loading'],
                  [1, 'input-container'],
                  [3, 'height'],
                  ['aria-label', 'create button', 'mat-raised-button', '', 3, 'disabled'],
                  a,
                  ['ngxScrollToFirstInvalid', '', 'autocomplete', 'on', 3, 'formGroup', 'ngSubmit'],
                  ['form', 'ngForm'],
                  [
                    'matInput',
                    '',
                    'name',
                    'hname',
                    'type',
                    'text',
                    'placeholder',
                    s,
                    'formControlName',
                    'realName',
                  ],
                  [
                    'matInput',
                    '',
                    'type',
                    'text',
                    'name',
                    'rname',
                    'placeholder',
                    P,
                    'formControlName',
                    'alterEgo',
                  ],
                  [
                    'aria-label',
                    'create button',
                    'mat-raised-button',
                    '',
                    'type',
                    'submit',
                    3,
                    'disabled',
                  ],
                  S,
                  [3, 'ngIf'],
                  O,
                  L,
                  U,
                  v,
                  I,
                ]
              );
            },
            template: function (t, o) {
              1 & t &&
                (_.TgZ(0, 'div', 0)(1, 'h2', 1),
                _.SDv(2, 2),
                _.qZA(),
                _.YNc(3, t_, 2, 0, 'p', 3),
                _.TgZ(4, 'div'),
                _.YNc(5, r_, 2, 2, 'mat-list', 4),
                _.TgZ(6, 'mat-list'),
                _.YNc(7, i_, 8, 7, 'mat-list-item', 5),
                _.qZA()()(),
                _.TgZ(8, 'div', 6)(9, 'h2', 1),
                _.SDv(10, 7),
                _.qZA(),
                _.YNc(11, a_, 8, 3, 'div', 8),
                _.YNc(12, O_, 12, 5, 'div', 9),
                _.TgZ(13, 'div', 10)(14, 'h2', 1),
                _.SDv(15, 11),
                _.qZA(),
                _.YNc(16, g_, 4, 1, 'pre', 9),
                _.YNc(17, c_, 4, 7, 'pre', 9),
                _.qZA()(),
                _._UZ(18, 'div', 12)),
                2 & t &&
                  (_.xp6(3),
                  _.Q6J('ngIf', !(null != o.user && null != o.user.heroes && o.user.heroes.length)),
                  _.xp6(2),
                  _.Q6J('ngIf', !(null != o.user && o.user.heroes)),
                  _.xp6(2),
                  _.Q6J('ngForOf', null == o.user ? null : o.user.heroes)(
                    'ngForTrackBy',
                    o.trackByFn
                  ),
                  _.xp6(4),
                  _.Q6J('ngIf', !(null != o.user && o.user.heroes)),
                  _.xp6(1),
                  _.Q6J('ngIf', null == o.user ? null : o.user.heroes),
                  _.xp6(4),
                  _.Q6J('ngIf', !(null != o.user && o.user.heroes)),
                  _.xp6(1),
                  _.Q6J('ngIf', null == o.user ? null : o.user.heroes));
            },
            directives: [
              A.O5,
              T.i$,
              A.sg,
              T.Tg,
              T.eA,
              k.X2,
              V.k,
              j.Hw,
              i._Y,
              i.JL,
              i.F,
              m.lW,
              K.w,
              i.sg,
              N.KE,
              __.Nt,
              i.Fj,
              i.JJ,
              i.u,
              N.TO,
            ],
            pipes: [A.Ts, A.OU],
            styles: [
              'a[_ngcontent-%COMP%]{color:#0000008a;font-size:14px;text-transform:none;text-decoration:none}#loading-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.2rem}#form-loading[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{margin:.5rem 0}#left[_ngcontent-%COMP%]{width:50%;float:left;margin-left:6%}#right[_ngcontent-%COMP%]{margin-left:50%;text-align:center;padding-right:17%}.clear[_ngcontent-%COMP%]{clear:both}.mat-list[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:table}.mat-list[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%]{text-align:left!important}.hero-actions[_ngcontent-%COMP%]{margin-left:1rem;padding-bottom:0}.hero-actions[_ngcontent-%COMP%]   .icon__remove[_ngcontent-%COMP%]{padding-left:.5rem;color:#2f4f4f;cursor:pointer}form[_ngcontent-%COMP%]{display:grid;width:80%;margin-left:auto;margin-right:auto}form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{color:#fff;background:#3f51b5;width:50%;margin-left:auto;margin-right:auto}form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}#heroes-json[_ngcontent-%COMP%]{margin-top:2rem}#heroes-json[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin-top:1rem}.my-heroes__no-heroes--message[_ngcontent-%COMP%]{text-align:center;width:20%;margin:0 auto;line-height:1.7rem}@media (max-width: 680px){#left[_ngcontent-%COMP%]{width:100%;float:none;margin-left:auto;margin-right:auto}#right[_ngcontent-%COMP%]{margin:1em auto 0;width:90%;float:none;padding:0}}',
            ],
            data: {
              animation: [
                (0, R.X$)('fadeIn', [
                  (0, R.eR)('* => *', (0, R._7)(p.K1, { params: { timing: 1, delay: 0 } })),
                ]),
              ],
            },
          })),
          e
        );
      })();
      var T_ = E(312);
      let G = (() => {
        class e {
          constructor(t, o) {
            (this.authService = t), (this.router = o);
          }
          canActivate(t, o) {
            return new Promise(r => {
              this.authService.isLoggedIn()
                ? r(!0)
                : (this.router.navigate([c.ff.routes.home]), r(!1));
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_.LFG(T_.e), _.LFG(M.F0));
          }),
          (e.ɵprov = _.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const H = c.ff.routesNames.hero,
        u_ = [
          { path: H.myHeroes, component: m_, canActivate: [G] },
          { path: H.detail, component: J, resolve: { hero: h } },
        ];
      let d_ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = _.oAB({ type: e })),
            (e.ɵinj = _.cJS({ providers: [h, G], imports: [[M.Bz.forChild(u_)], M.Bz] })),
            e
          );
        })(),
        f_ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = _.oAB({ type: e })),
            (e.ɵinj = _.cJS({ imports: [[i.u5, i.UX, $.m, d_]] })),
            e
          );
        })();
    },
  },
]);
