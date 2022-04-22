'use strict';
(self.webpackChunkangularexampleapp = self.webpackChunkangularexampleapp || []).push([
  [111],
  {
    1111: (k, h, i) => {
      i.r(h), i.d(h, { AuthModule: () => E });
      var b = i(5108),
        u = i(9808),
        r = i(3075),
        g = i(6696),
        p = i(2398),
        l = i(1777),
        _ = i(361),
        t = i(5e3),
        v = i(312),
        C = i(1094),
        f = i(3954),
        Z = i(9224),
        m = i(7322),
        I = i(7531),
        U = i(5245),
        x = i(7423);
      function T(o, a) {
        if ((1 & o && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw();
          t.xp6(1), t.Oqu(n.getErrorMessage('firstName'));
        }
      }
      function A(o, a) {
        if ((1 & o && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw();
          t.xp6(1), t.Oqu(n.getErrorMessage('lastName'));
        }
      }
      function M(o, a) {
        if ((1 & o && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw();
          t.xp6(1), t.Oqu(n.getErrorMessage('email'));
        }
      }
      function w(o, a) {
        if ((1 & o && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw();
          t.xp6(1), t.Oqu(n.getErrorMessage('password'));
        }
      }
      let N = (() => {
        class o {
          constructor(n, e, s, d) {
            (this.formBuilder = n),
              (this.authService = e),
              (this.router = s),
              (this.utilsService = d),
              (this.firstName = new r.NI('', [r.kI.required, r.kI.maxLength(100)])),
              (this.lastName = new r.NI('', [r.kI.required, r.kI.maxLength(100)])),
              (this.email = new r.NI('', [r.kI.required, r.kI.email])),
              (this.password = new r.NI('', [
                r.kI.required,
                r.kI.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'),
              ])),
              (this.hide = !0),
              (this.signUpForm = this.formBuilder.group({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
              }));
          }
          getErrorMessage(n) {
            const e = this[n];
            return (null == e ? void 0 : e.hasError('required'))
              ? 'You must enter a value'
              : (null == e ? void 0 : e.hasError('email'))
              ? 'Not a valid email'
              : (null == e ? void 0 : e.hasError('pattern'))
              ? 'Not a valid password'
              : void 0;
          }
          sendForm() {
            if (this.signUpForm.valid) {
              const n = this.signUpForm.value;
              this.authService.signUp(n.firstName, n.lastName, n.email, n.password).subscribe(e => {
                e.errors
                  ? 1e4 === e.errors[0].code &&
                    this.utilsService.showSnackBar(
                      'This email is not available. Try again, with a different one.',
                      'warning-snack-bar'
                    )
                  : this.router.navigate([p.ff.routes.auth.logIn]).then(() => {
                      this.utilsService.showSnackBar('Cool! Now try to log in!', 'info-snack-bar');
                    });
              });
            }
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)(t.Y36(r.qu), t.Y36(v.e), t.Y36(g.F0), t.Y36(C.F));
          }),
          (o.ɵcmp = t.Xpm({
            type: o,
            selectors: [['app-sign-up-page']],
            decls: 44,
            vars: 16,
            consts: [
              ['cols', '1', 'rows', '1', 'rowHeight', '2:1'],
              [1, 'signup--form__box--blue'],
              [1, 'signup--form-container'],
              [1, 'signup--form__header-title'],
              [1, 'example-container', 3, 'formGroup'],
              ['appearance', 'outline'],
              ['matInput', '', 'placeholder', 'Jason', 3, 'formControl'],
              ['matSuffix', ''],
              [4, 'ngIf'],
              ['matInput', '', 'placeholder', 'Bourne', 3, 'formControl'],
              ['matInput', '', 'placeholder', 'pat@example.com', 'required', '', 3, 'formControl'],
              ['matInput', '', 3, 'formControl', 'type'],
              ['mat-icon-button', '', 'matSuffix', '', 3, 'click'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                1,
                'signup--form__submit-button',
                3,
                'click',
              ],
            ],
            template: function (n, e) {
              1 & n &&
                (t.TgZ(0, 'mat-grid-list', 0)(1, 'mat-grid-tile')(2, 'mat-card', 1)(3, 'div', 2)(
                  4,
                  'p',
                  3
                ),
                t._uU(5, 'Give it a try!'),
                t.qZA(),
                t.TgZ(6, 'form', 4)(7, 'p')(8, 'mat-form-field', 5)(9, 'mat-label'),
                t._uU(10, 'First name'),
                t.qZA(),
                t._UZ(11, 'input', 6),
                t.TgZ(12, 'mat-icon', 7),
                t._uU(13, 'sentiment_very_satisfied'),
                t.qZA(),
                t.YNc(14, T, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(15, 'p')(16, 'mat-form-field', 5)(17, 'mat-label'),
                t._uU(18, 'Last name'),
                t.qZA(),
                t._UZ(19, 'input', 9),
                t.TgZ(20, 'mat-icon', 7),
                t._uU(21, 'favorite'),
                t.qZA(),
                t.YNc(22, A, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(23, 'p')(24, 'mat-form-field', 5)(25, 'mat-label'),
                t._uU(26, 'Enter your email'),
                t.qZA(),
                t._UZ(27, 'input', 10),
                t.YNc(28, M, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(29, 'p')(30, 'mat-form-field', 5)(31, 'mat-label'),
                t._uU(32, 'Enter a password'),
                t.qZA(),
                t._UZ(33, 'input', 11),
                t.TgZ(34, 'button', 12),
                t.NdJ('click', function () {
                  return (e.hide = !e.hide);
                }),
                t.TgZ(35, 'mat-icon'),
                t._uU(36),
                t.qZA()(),
                t.TgZ(37, 'mat-hint'),
                t._uU(
                  38,
                  'Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
                ),
                t.qZA(),
                t.YNc(39, w, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(40, 'p')(41, 'button', 13),
                t.NdJ('click', function () {
                  return e.sendForm();
                }),
                t._uU(42),
                t.ALo(43, 'uppercase'),
                t.qZA()()()()()()()),
                2 & n &&
                  (t.xp6(6),
                  t.Q6J('formGroup', e.signUpForm),
                  t.xp6(5),
                  t.Q6J('formControl', e.firstName),
                  t.xp6(3),
                  t.Q6J('ngIf', e.email.invalid),
                  t.xp6(5),
                  t.Q6J('formControl', e.lastName),
                  t.xp6(3),
                  t.Q6J('ngIf', e.email.invalid),
                  t.xp6(5),
                  t.Q6J('formControl', e.email),
                  t.xp6(1),
                  t.Q6J('ngIf', e.email.invalid),
                  t.xp6(5),
                  t.Q6J('formControl', e.password)('type', e.hide ? 'password' : 'text'),
                  t.xp6(1),
                  t.uIk('aria-label', 'Hide password')('aria-pressed', e.hide),
                  t.xp6(2),
                  t.Oqu(e.hide ? 'visibility_off' : 'visibility'),
                  t.xp6(3),
                  t.Q6J('ngIf', e.password.invalid),
                  t.xp6(3),
                  t.hij(' ', t.lcZ(43, 14, 'Sign Up'), ' '));
            },
            directives: [
              f.Il,
              f.DX,
              Z.a8,
              r._Y,
              r.JL,
              r.sg,
              m.KE,
              m.hX,
              I.Nt,
              r.Fj,
              r.JJ,
              r.oH,
              U.Hw,
              m.R9,
              u.O5,
              m.TO,
              r.Q7,
              x.lW,
              m.bx,
            ],
            pipes: [u.gd],
            styles: [
              '.signup--form-container[_ngcontent-%COMP%]{text-align:center}.signup--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.signup--form-container[_ngcontent-%COMP%]   .signup--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.signup--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.signup--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.signup--form__header-title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#000000de}.signup--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}',
            ],
            data: {
              animation: [
                (0, l.X$)('fadeIn', [
                  (0, l.eR)('* => *', (0, l._7)(_.K1, { params: { timing: 1, delay: 0 } })),
                ]),
              ],
            },
          })),
          o
        );
      })();
      const O = ['loginForm'];
      function y(o, a) {
        if ((1 & o && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw();
          t.xp6(1), t.Oqu(n.getErrorMessage('email'));
        }
      }
      function q(o, a) {
        if ((1 & o && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw();
          t.xp6(1), t.Oqu(n.getErrorMessage('password'));
        }
      }
      var c = (() => (((c || (c = {})).BAD_USER_INPUT = 'BAD_USER_INPUT'), c))();
      const P = p.ff.routesNames.auth,
        F = [
          { path: P.signUp, component: N },
          {
            path: P.logIn,
            component: (() => {
              class o {
                constructor(n, e, s, d) {
                  (this.formBuilder = n),
                    (this.authService = e),
                    (this.router = s),
                    (this.utilsService = d),
                    (this.email = new r.NI('', [r.kI.required, r.kI.email])),
                    (this.password = new r.NI('', [r.kI.required])),
                    (this.hide = !0),
                    (this.logInForm = this.formBuilder.group({
                      email: this.email,
                      password: this.password,
                    }));
                }
                getErrorMessage(n) {
                  const e = this[n];
                  return (null == e ? void 0 : e.hasError('required'))
                    ? 'You must enter a value'
                    : (null == e ? void 0 : e.hasError('email'))
                    ? 'Not a valid email'
                    : void 0;
                }
                sendForm() {
                  if (this.logInForm.valid) {
                    const n = this.logInForm.value;
                    this.authService.logIn(n.email, n.password).subscribe(e => {
                      var s;
                      e.errors
                        ? (null === (s = e.errors[0].extensions) || void 0 === s
                            ? void 0
                            : s.code) === c.BAD_USER_INPUT &&
                          this.utilsService.showSnackBar('Bad credentials!', 'info-snack-bar')
                        : this.router.navigate([p.ff.routes.hero.myHeroes]);
                    });
                  }
                }
              }
              return (
                (o.ɵfac = function (n) {
                  return new (n || o)(t.Y36(r.qu), t.Y36(v.e), t.Y36(g.F0), t.Y36(C.F));
                }),
                (o.ɵcmp = t.Xpm({
                  type: o,
                  selectors: [['app-log-in-page']],
                  viewQuery: function (n, e) {
                    if ((1 & n && t.Gf(O, 5), 2 & n)) {
                      let s;
                      t.iGM((s = t.CRH())) && (e.loginForm = s.first);
                    }
                  },
                  decls: 29,
                  vars: 12,
                  consts: [
                    ['cols', '1', 'rows', '1', 'rowHeight', '2:1'],
                    [1, 'login--form__box--blue'],
                    [1, 'login--form-container'],
                    [1, 'login--form__header-title'],
                    [1, 'example-container', 3, 'formGroup'],
                    ['loginForm', 'ngForm'],
                    ['appearance', 'outline'],
                    [
                      'matInput',
                      '',
                      'placeholder',
                      'pat@example.com',
                      'required',
                      '',
                      3,
                      'formControl',
                    ],
                    [4, 'ngIf'],
                    ['matInput', '', 3, 'formControl', 'type'],
                    ['mat-icon-button', '', 'matSuffix', '', 3, 'click'],
                    [
                      'mat-raised-button',
                      '',
                      'color',
                      'primary',
                      1,
                      'login--form__submit-button',
                      3,
                      'click',
                    ],
                  ],
                  template: function (n, e) {
                    1 & n &&
                      (t.TgZ(0, 'mat-grid-list', 0)(1, 'mat-grid-tile')(2, 'mat-card', 1)(
                        3,
                        'div',
                        2
                      )(4, 'p', 3),
                      t._uU(5, 'Try to log in!'),
                      t.qZA(),
                      t.TgZ(6, 'form', 4, 5)(8, 'p')(9, 'mat-form-field', 6)(10, 'mat-label'),
                      t._uU(11, 'Enter your email'),
                      t.qZA(),
                      t._UZ(12, 'input', 7),
                      t.YNc(13, y, 2, 1, 'mat-error', 8),
                      t.qZA()(),
                      t.TgZ(14, 'p')(15, 'mat-form-field', 6)(16, 'mat-label'),
                      t._uU(17, 'Enter a password'),
                      t.qZA(),
                      t._UZ(18, 'input', 9),
                      t.TgZ(19, 'button', 10),
                      t.NdJ('click', function () {
                        return (e.hide = !e.hide);
                      }),
                      t.TgZ(20, 'mat-icon'),
                      t._uU(21),
                      t.qZA()(),
                      t.TgZ(22, 'mat-hint'),
                      t._uU(
                        23,
                        'Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
                      ),
                      t.qZA(),
                      t.YNc(24, q, 2, 1, 'mat-error', 8),
                      t.qZA()(),
                      t.TgZ(25, 'p')(26, 'button', 11),
                      t.NdJ('click', function () {
                        return e.sendForm();
                      }),
                      t._uU(27),
                      t.ALo(28, 'uppercase'),
                      t.qZA()()()()()()()),
                      2 & n &&
                        (t.xp6(6),
                        t.Q6J('formGroup', e.logInForm),
                        t.xp6(6),
                        t.Q6J('formControl', e.email),
                        t.xp6(1),
                        t.Q6J('ngIf', e.email.invalid),
                        t.xp6(5),
                        t.Q6J('formControl', e.password)('type', e.hide ? 'password' : 'text'),
                        t.xp6(1),
                        t.uIk('aria-label', 'Hide password')('aria-pressed', e.hide),
                        t.xp6(2),
                        t.Oqu(e.hide ? 'visibility_off' : 'visibility'),
                        t.xp6(3),
                        t.Q6J('ngIf', e.password.invalid),
                        t.xp6(3),
                        t.hij(' ', t.lcZ(28, 10, 'Log In'), ' '));
                  },
                  directives: [
                    f.Il,
                    f.DX,
                    Z.a8,
                    r._Y,
                    r.JL,
                    r.sg,
                    m.KE,
                    m.hX,
                    I.Nt,
                    r.Fj,
                    r.Q7,
                    r.JJ,
                    r.oH,
                    u.O5,
                    m.TO,
                    x.lW,
                    m.R9,
                    U.Hw,
                    m.bx,
                  ],
                  pipes: [u.gd],
                  styles: [
                    '.login--form-container[_ngcontent-%COMP%]{text-align:center}.login--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.login--form-container[_ngcontent-%COMP%]   .login--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.login--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.login--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.login--form__header-title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#000000de}.login--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}',
                  ],
                  data: {
                    animation: [
                      (0, l.X$)('fadeIn', [
                        (0, l.eR)('* => *', (0, l._7)(_.K1, { params: { timing: 1, delay: 0 } })),
                      ]),
                    ],
                  },
                })),
                o
              );
            })(),
          },
          { path: '**', redirectTo: p.ff.routes.error404 },
        ];
      let J = (() => {
          class o {}
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = t.oAB({ type: o })),
            (o.ɵinj = t.cJS({ imports: [[g.Bz.forChild(F)], g.Bz] })),
            o
          );
        })(),
        E = (() => {
          class o {}
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = t.oAB({ type: o })),
            (o.ɵinj = t.cJS({ imports: [[u.ez, r.UX, b.m, J]] })),
            o
          );
        })();
    },
  },
]);
