'use strict';
(self.webpackChunkangularexampleapp = self.webpackChunkangularexampleapp || []).push([
  [111],
  {
    1111: (E, d, i) => {
      i.r(d), i.d(d, { AuthModule: () => J });
      var P = i(1056),
        u = i(9808),
        r = i(3075),
        p = i(6696),
        f = i(2398),
        l = i(1777),
        h = i(361),
        t = i(5e3),
        _ = i(312),
        C = i(1094),
        v = i(9224),
        m = i(7322),
        Z = i(7531),
        M = i(5245),
        x = i(7423);
      function b(n, a) {
        if ((1 & n && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw();
          t.xp6(1), t.Oqu(o.getErrorMessage('firstName'));
        }
      }
      function A(n, a) {
        if ((1 & n && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw();
          t.xp6(1), t.Oqu(o.getErrorMessage('lastName'));
        }
      }
      function w(n, a) {
        if ((1 & n && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw();
          t.xp6(1), t.Oqu(o.getErrorMessage('email'));
        }
      }
      function U(n, a) {
        if ((1 & n && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw();
          t.xp6(1), t.Oqu(o.getErrorMessage('password'));
        }
      }
      let T = (() => {
        class n {
          constructor(o, e, s, g) {
            (this.formBuilder = o),
              (this.authService = e),
              (this.router = s),
              (this.utilsService = g),
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
          getErrorMessage(o) {
            const e = this[o];
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
              const o = this.signUpForm.value;
              this.authService.signUp(o.firstName, o.lastName, o.email, o.password).subscribe(e => {
                e.errors
                  ? 1e4 === e.errors[0].code &&
                    this.utilsService.showSnackBar(
                      'This email is not available. Try again, with a different one.',
                      'warning-snack-bar'
                    )
                  : this.router.navigate([f.ff.routes.auth.logIn]).then(() => {
                      this.utilsService.showSnackBar('Cool! Now try to log in!', 'info-snack-bar');
                    });
              });
            }
          }
        }
        return (
          (n.ɵfac = function (o) {
            return new (o || n)(t.Y36(r.qu), t.Y36(_.e), t.Y36(p.F0), t.Y36(C.F));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['app-sign-up-page']],
            decls: 43,
            vars: 16,
            consts: [
              [1, 'container'],
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
            template: function (o, e) {
              1 & o &&
                (t.TgZ(0, 'div', 0)(1, 'mat-card', 1)(2, 'div', 2)(3, 'p', 3),
                t._uU(4, 'Give it a try!'),
                t.qZA(),
                t.TgZ(5, 'form', 4)(6, 'p')(7, 'mat-form-field', 5)(8, 'mat-label'),
                t._uU(9, 'First name'),
                t.qZA(),
                t._UZ(10, 'input', 6),
                t.TgZ(11, 'mat-icon', 7),
                t._uU(12, 'sentiment_very_satisfied'),
                t.qZA(),
                t.YNc(13, b, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(14, 'p')(15, 'mat-form-field', 5)(16, 'mat-label'),
                t._uU(17, 'Last name'),
                t.qZA(),
                t._UZ(18, 'input', 9),
                t.TgZ(19, 'mat-icon', 7),
                t._uU(20, 'favorite'),
                t.qZA(),
                t.YNc(21, A, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(22, 'p')(23, 'mat-form-field', 5)(24, 'mat-label'),
                t._uU(25, 'Enter your email'),
                t.qZA(),
                t._UZ(26, 'input', 10),
                t.YNc(27, w, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(28, 'p')(29, 'mat-form-field', 5)(30, 'mat-label'),
                t._uU(31, 'Enter a password'),
                t.qZA(),
                t._UZ(32, 'input', 11),
                t.TgZ(33, 'button', 12),
                t.NdJ('click', function () {
                  return (e.hide = !e.hide);
                }),
                t.TgZ(34, 'mat-icon'),
                t._uU(35),
                t.qZA()(),
                t.TgZ(36, 'mat-hint'),
                t._uU(
                  37,
                  'Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
                ),
                t.qZA(),
                t.YNc(38, U, 2, 1, 'mat-error', 8),
                t.qZA()(),
                t.TgZ(39, 'p')(40, 'button', 13),
                t.NdJ('click', function () {
                  return e.sendForm();
                }),
                t._uU(41),
                t.ALo(42, 'uppercase'),
                t.qZA()()()()()()),
                2 & o &&
                  (t.xp6(5),
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
                  t.hij(' ', t.lcZ(42, 14, 'Sign Up'), ' '));
            },
            directives: [
              v.a8,
              r._Y,
              r.JL,
              r.sg,
              m.KE,
              m.hX,
              Z.Nt,
              r.Fj,
              r.JJ,
              r.oH,
              M.Hw,
              m.R9,
              u.O5,
              m.TO,
              r.Q7,
              x.lW,
              m.bx,
            ],
            pipes: [u.gd],
            styles: [
              '.container[_ngcontent-%COMP%]{width:45%;margin-left:auto;margin-right:auto;margin-top:2rem}.signup--form-container[_ngcontent-%COMP%]{text-align:center}.signup--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.signup--form-container[_ngcontent-%COMP%]   .signup--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.signup--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.signup--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.signup--form__header-title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#000000de}.signup--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}@media (max-width: 680px){.container[_ngcontent-%COMP%]{width:90%;margin-left:auto;margin-right:auto;margin-top:1rem}.signup--form__box--blue[_ngcontent-%COMP%]{padding:1rem}}',
            ],
            data: {
              animation: [
                (0, l.X$)('fadeIn', [
                  (0, l.eR)('* => *', (0, l._7)(h.K1, { params: { timing: 1, delay: 0 } })),
                ]),
              ],
            },
          })),
          n
        );
      })();
      const O = ['loginForm'];
      function N(n, a) {
        if ((1 & n && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw();
          t.xp6(1), t.Oqu(o.getErrorMessage('email'));
        }
      }
      function y(n, a) {
        if ((1 & n && (t.TgZ(0, 'mat-error'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw();
          t.xp6(1), t.Oqu(o.getErrorMessage('password'));
        }
      }
      var c = (() => {
        return ((n = c || (c = {}))[(n.BAD_CREDENTIALS = 11e3)] = 'BAD_CREDENTIALS'), c;
        var n;
      })();
      const I = f.ff.routesNames.auth,
        S = [
          { path: I.signUp, component: T },
          {
            path: I.logIn,
            component: (() => {
              class n {
                constructor(o, e, s, g) {
                  (this.formBuilder = o),
                    (this.authService = e),
                    (this.router = s),
                    (this.utilsService = g),
                    (this.email = new r.NI('', [r.kI.required, r.kI.email])),
                    (this.password = new r.NI('', [r.kI.required])),
                    (this.hide = !0),
                    (this.logInForm = this.formBuilder.group({
                      email: this.email,
                      password: this.password,
                    }));
                }
                getErrorMessage(o) {
                  const e = this[o];
                  return (null == e ? void 0 : e.hasError('required'))
                    ? 'You must enter a value'
                    : (null == e ? void 0 : e.hasError('email'))
                    ? 'Not a valid email'
                    : void 0;
                }
                sendForm() {
                  if (this.logInForm.valid) {
                    const o = this.logInForm.value;
                    this.authService.logIn(o.email, o.password).subscribe(e => {
                      e.errors
                        ? e.errors[0].code === c.BAD_CREDENTIALS &&
                          this.utilsService.showSnackBar('Bad credentials!', 'info-snack-bar')
                        : this.router.navigate([f.ff.routes.hero.myHeroes]);
                    });
                  }
                }
              }
              return (
                (n.ɵfac = function (o) {
                  return new (o || n)(t.Y36(r.qu), t.Y36(_.e), t.Y36(p.F0), t.Y36(C.F));
                }),
                (n.ɵcmp = t.Xpm({
                  type: n,
                  selectors: [['app-log-in-page']],
                  viewQuery: function (o, e) {
                    if ((1 & o && t.Gf(O, 5), 2 & o)) {
                      let s;
                      t.iGM((s = t.CRH())) && (e.loginForm = s.first);
                    }
                  },
                  decls: 26,
                  vars: 11,
                  consts: [
                    [1, 'container'],
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
                    ['matInput', '', 3, 'formControl', 'type', 'keyup.enter'],
                    ['mat-icon-button', '', 'matSuffix', ''],
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
                  template: function (o, e) {
                    1 & o &&
                      (t.TgZ(0, 'div', 0)(1, 'mat-card', 1)(2, 'div', 2)(3, 'p', 3),
                      t._uU(4, 'Try to log in!'),
                      t.qZA(),
                      t.TgZ(5, 'form', 4, 5)(7, 'p')(8, 'mat-form-field', 6)(9, 'mat-label'),
                      t._uU(10, 'Enter your email'),
                      t.qZA(),
                      t._UZ(11, 'input', 7),
                      t.YNc(12, N, 2, 1, 'mat-error', 8),
                      t.qZA()(),
                      t.TgZ(13, 'p')(14, 'mat-form-field', 6)(15, 'mat-label'),
                      t._uU(16, 'Enter a password'),
                      t.qZA(),
                      t.TgZ(17, 'input', 9),
                      t.NdJ('keyup.enter', function (g) {
                        return e.sendForm(), g.preventDefault();
                      }),
                      t.qZA(),
                      t._UZ(18, 'button', 10),
                      t.TgZ(19, 'mat-hint'),
                      t._uU(
                        20,
                        'Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
                      ),
                      t.qZA(),
                      t.YNc(21, y, 2, 1, 'mat-error', 8),
                      t.qZA()(),
                      t.TgZ(22, 'p')(23, 'button', 11),
                      t.NdJ('click', function () {
                        return e.sendForm();
                      }),
                      t._uU(24),
                      t.ALo(25, 'uppercase'),
                      t.qZA()()()()()()),
                      2 & o &&
                        (t.xp6(5),
                        t.Q6J('formGroup', e.logInForm),
                        t.xp6(6),
                        t.Q6J('formControl', e.email),
                        t.xp6(1),
                        t.Q6J('ngIf', e.email.invalid),
                        t.xp6(5),
                        t.Q6J('formControl', e.password)('type', e.hide ? 'password' : 'text'),
                        t.xp6(1),
                        t.uIk('aria-label', 'Hide password')('aria-pressed', e.hide),
                        t.xp6(3),
                        t.Q6J('ngIf', e.password.invalid),
                        t.xp6(3),
                        t.hij(' ', t.lcZ(25, 9, 'Log In'), ' '));
                  },
                  directives: [
                    v.a8,
                    r._Y,
                    r.JL,
                    r.sg,
                    m.KE,
                    m.hX,
                    Z.Nt,
                    r.Fj,
                    r.Q7,
                    r.JJ,
                    r.oH,
                    u.O5,
                    m.TO,
                    x.lW,
                    m.R9,
                    m.bx,
                  ],
                  pipes: [u.gd],
                  styles: [
                    '.container[_ngcontent-%COMP%]{width:45%;margin-left:auto;margin-right:auto;margin-top:2rem}.login--form-container[_ngcontent-%COMP%]{text-align:center}.login--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.login--form-container[_ngcontent-%COMP%]   .login--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.login--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.login--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.login--form__header-title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#000000de}.login--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}@media (max-width: 680px){.container[_ngcontent-%COMP%]{width:90%;margin-left:auto;margin-right:auto;margin-top:1rem}.login--form__box--blue[_ngcontent-%COMP%]{padding:1rem}}',
                  ],
                  data: {
                    animation: [
                      (0, l.X$)('fadeIn', [
                        (0, l.eR)('* => *', (0, l._7)(h.K1, { params: { timing: 1, delay: 0 } })),
                      ]),
                    ],
                  },
                })),
                n
              );
            })(),
          },
          { path: '**', redirectTo: f.ff.routes.error404 },
        ];
      let F = (() => {
          class n {}
          return (
            (n.ɵfac = function (o) {
              return new (o || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [[p.Bz.forChild(S)], p.Bz] })),
            n
          );
        })(),
        J = (() => {
          class n {}
          return (
            (n.ɵfac = function (o) {
              return new (o || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [[u.ez, r.UX, P.m, F]] })),
            n
          );
        })();
    },
  },
]);
