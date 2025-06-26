!function () {
  "use strict";
  var e, t = {
    8432: function (e, t, n) {
      var o = {};
      n.r(o),
        n.d(o, {
          argsToParams: function () {
            return g
          },
          bindClickHandler: function () {
            return Ye
          },
          clickCancel: function () {
            return Oe
          },
          clickConfirm: function () {
            return qe
          },
          clickDeny: function () {
            return Pe
          },
          enableLoading: function () {
            return Be
          },
          fire: function () {
            return Me
          },
          getActions: function () {
            return D
          },
          getCancelButton: function () {
            return M
          },
          getCloseButton: function () {
            return I
          },
          getConfirmButton: function () {
            return j
          },
          getContainer: function () {
            return w
          },
          getDenyButton: function () {
            return q
          },
          getFocusableElements: function () {
            return V
          },
          getFooter: function () {
            return B
          },
          getHtmlContainer: function () {
            return A
          },
          getIcon: function () {
            return E
          },
          getImage: function () {
            return C
          },
          getInputLabel: function () {
            return P
          },
          getLoader: function () {
            return O
          },
          getPopup: function () {
            return L
          },
          getTimerLeft: function () {
            return Ve
          },
          getTimerProgressBar: function () {
            return N
          },
          getTitle: function () {
            return k
          },
          getValidationMessage: function () {
            return T
          },
          increaseTimer: function () {
            return Re
          },
          isDeprecatedParameter: function () {
            return nt
          },
          isLoading: function () {
            return U
          },
          isTimerRunning: function () {
            return We
          },
          isUpdatableParameter: function () {
            return tt
          },
          isValidParameter: function () {
            return et
          },
          isVisible: function () {
            return je
          },
          mixin: function () {
            return De
          },
          resumeTimer: function () {
            return Fe
          },
          showLoading: function () {
            return Be
          },
          stopTimer: function () {
            return He
          },
          toggleTimer: function () {
            return Ue
          }
        });
      var a = {};
      n.r(a),
        n.d(a, {
          _destroy: function () {
            return vn
          },
          _main: function () {
            return cn
          },
          close: function () {
            return vt
          },
          closeModal: function () {
            return vt
          },
          closePopup: function () {
            return vt
          },
          closeToast: function () {
            return vt
          },
          disableButtons: function () {
            return Tt
          },
          disableInput: function () {
            return qt
          },
          disableLoading: function () {
            return ct
          },
          enableButtons: function () {
            return xt
          },
          enableInput: function () {
            return jt
          },
          getInput: function () {
            return ut
          },
          getProgressSteps: function () {
            return Mt
          },
          hideLoading: function () {
            return ct
          },
          isAwaitingPromise: function () {
            return yt
          },
          rejectPromise: function () {
            return wt
          },
          resetValidationMessage: function () {
            return Ot
          },
          showValidationMessage: function () {
            return Pt
          },
          update: function () {
            return gn
          }
        });
      const r = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
      })
        , s = e => e.charAt(0).toUpperCase() + e.slice(1)
        , i = e => Array.prototype.slice.call(e)
        , c = e => {
          console.warn(`SweetAlert2: ${"object" == typeof e ? e.join(" ") : e}`)
        }
        , l = e => {
          console.error(`SweetAlert2: ${e}`)
        }
        , u = []
        , d = e => "function" == typeof e ? e() : e
        , m = e => e && "function" == typeof e.toPromise
        , p = e => m(e) ? e.toPromise() : Promise.resolve(e)
        , h = e => e && Promise.resolve(e) === e
        , f = e => e instanceof Element || (e => "object" == typeof e && e.jquery)(e)
        , g = e => {
          const t = {};
          return "object" != typeof e[0] || f(e[0]) ? ["title", "html", "icon"].forEach(((n, o) => {
            const a = e[o];
            "string" == typeof a || f(a) ? t[n] = a : void 0 !== a && l(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof a}`)
          }
          )) : Object.assign(t, e[0]),
            t
        }
        , v = e => {
          const t = {};
          for (const n in e)
            t[e[n]] = "swal2-" + e[n];
          return t
        }
        , y = v(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
        , b = v(["success", "warning", "info", "question", "error"])
        , w = () => document.body.querySelector(`.${y.container}`)
        , _ = e => {
          const t = w();
          return t ? t.querySelector(e) : null
        }
        , S = e => _(`.${e}`)
        , L = () => S(y.popup)
        , E = () => S(y.icon)
        , k = () => S(y.title)
        , A = () => S(y["html-container"])
        , C = () => S(y.image)
        , x = () => S(y["progress-steps"])
        , T = () => S(y["validation-message"])
        , j = () => _(`.${y.actions} .${y.confirm}`)
        , q = () => _(`.${y.actions} .${y.deny}`)
        , P = () => S(y["input-label"])
        , O = () => _(`.${y.loader}`)
        , M = () => _(`.${y.actions} .${y.cancel}`)
        , D = () => S(y.actions)
        , B = () => S(y.footer)
        , N = () => S(y["timer-progress-bar"])
        , I = () => S(y.close)
        , V = () => {
          const e = i(L().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e, t) => (e = parseInt(e.getAttribute("tabindex"))) > (t = parseInt(t.getAttribute("tabindex"))) ? 1 : e < t ? -1 : 0))
            , t = i(L().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((e => "-1" !== e.getAttribute("tabindex")));
          return (e => {
            const t = [];
            for (let n = 0; n < e.length; n++)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
          }
          )(e.concat(t)).filter((e => re(e)))
        }
        , H = () => !F() && !document.body.classList.contains(y["no-backdrop"])
        , F = () => document.body.classList.contains(y["toast-shown"])
        , U = () => L().hasAttribute("data-loading")
        , R = {
          previousBodyPadding: null
        }
        , W = (e, t) => {
          if (e.textContent = "",
            t) {
            const n = (new DOMParser).parseFromString(t, "text/html");
            i(n.querySelector("head").childNodes).forEach((t => {
              e.appendChild(t)
            }
            )),
              i(n.querySelector("body").childNodes).forEach((t => {
                e.appendChild(t)
              }
              ))
          }
        }
        , z = (e, t) => {
          if (!t)
            return !1;
          const n = t.split(/\s+/);
          for (let t = 0; t < n.length; t++)
            if (!e.classList.contains(n[t]))
              return !1;
          return !0
        }
        , X = (e, t, n) => {
          if (((e, t) => {
            i(e.classList).forEach((n => {
              Object.values(y).includes(n) || Object.values(b).includes(n) || Object.values(t.showClass).includes(n) || e.classList.remove(n)
            }
            ))
          }
          )(e, t),
            t.customClass && t.customClass[n]) {
            if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach)
              return c(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof t.customClass[n]}"`);
            Q(e, t.customClass[n])
          }
        }
        , Y = (e, t) => {
          if (!t)
            return null;
          switch (t) {
            case "select":
            case "textarea":
            case "file":
              return G(e, y[t]);
            case "checkbox":
              return e.querySelector(`.${y.checkbox} input`);
            case "radio":
              return e.querySelector(`.${y.radio} input:checked`) || e.querySelector(`.${y.radio} input:first-child`);
            case "range":
              return e.querySelector(`.${y.range} input`);
            default:
              return G(e, y.input)
          }
        }
        , Z = e => {
          if (e.focus(),
            "file" !== e.type) {
            const t = e.value;
            e.value = "",
              e.value = t
          }
        }
        , K = (e, t, n) => {
          e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
            t.forEach((t => {
              e.forEach ? e.forEach((e => {
                n ? e.classList.add(t) : e.classList.remove(t)
              }
              )) : n ? e.classList.add(t) : e.classList.remove(t)
            }
            )))
        }
        , Q = (e, t) => {
          K(e, t, !0)
        }
        , J = (e, t) => {
          K(e, t, !1)
        }
        , G = (e, t) => {
          for (let n = 0; n < e.childNodes.length; n++)
            if (z(e.childNodes[n], t))
              return e.childNodes[n]
        }
        , ee = (e, t, n) => {
          n === `${parseInt(n)}` && (n = parseInt(n)),
            n || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? `${n}px` : n : e.style.removeProperty(t)
        }
        , te = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
          e.style.display = t
        }
        , ne = e => {
          e.style.display = "none"
        }
        , oe = (e, t, n, o) => {
          const a = e.querySelector(t);
          a && (a.style[n] = o)
        }
        , ae = (e, t, n) => {
          t ? te(e, n) : ne(e)
        }
        , re = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
        , se = e => !!(e.scrollHeight > e.clientHeight)
        , ie = e => {
          const t = window.getComputedStyle(e)
            , n = parseFloat(t.getPropertyValue("animation-duration") || "0")
            , o = parseFloat(t.getPropertyValue("transition-duration") || "0");
          return n > 0 || o > 0
        }
        , ce = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = N();
          re(n) && (t && (n.style.transition = "none",
            n.style.width = "100%"),
            setTimeout((() => {
              n.style.transition = `width ${e / 1e3}s linear`,
                n.style.width = "0%"
            }
            ), 10))
        }
        , le = () => "undefined" == typeof window || "undefined" == typeof document
        , ue = `\n <div aria-labelledby="${y.title}" aria-describedby="${y["html-container"]}" class="${y.popup}" tabindex="-1">\n   <button type="button" class="${y.close}"></button>\n   <ul class="${y["progress-steps"]}"></ul>\n   <div class="${y.icon}"></div>\n   <img class="${y.image}" />\n   <h2 class="${y.title}" id="${y.title}"></h2>\n   <div class="${y["html-container"]}" id="${y["html-container"]}"></div>\n   <input class="${y.input}" />\n   <input type="file" class="${y.file}" />\n   <div class="${y.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${y.select}"></select>\n   <div class="${y.radio}"></div>\n   <label for="${y.checkbox}" class="${y.checkbox}">\n     <input type="checkbox" />\n     <span class="${y.label}"></span>\n   </label>\n   <textarea class="${y.textarea}"></textarea>\n   <div class="${y["validation-message"]}" id="${y["validation-message"]}"></div>\n   <div class="${y.actions}">\n     <div class="${y.loader}"></div>\n     <button type="button" class="${y.confirm}"></button>\n     <button type="button" class="${y.deny}"></button>\n     <button type="button" class="${y.cancel}"></button>\n   </div>\n   <div class="${y.footer}"></div>\n   <div class="${y["timer-progress-bar-container"]}">\n     <div class="${y["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g, "")
        , de = () => {
          En.isVisible() && En.resetValidationMessage()
        }
        , me = (e, t) => {
          e instanceof HTMLElement ? t.appendChild(e) : "object" == typeof e ? pe(e, t) : e && W(t, e)
        }
        , pe = (e, t) => {
          e.jquery ? he(t, e) : W(t, e.toString())
        }
        , he = (e, t) => {
          if (e.textContent = "",
            0 in t)
            for (let n = 0; n in t; n++)
              e.appendChild(t[n].cloneNode(!0));
          else
            e.appendChild(t.cloneNode(!0))
        }
        , fe = (() => {
          if (le())
            return !1;
          const e = document.createElement("div")
            , t = {
              WebkitAnimation: "webkitAnimationEnd",
              OAnimation: "oAnimationEnd oanimationend",
              animation: "animationend"
            };
          for (const n in t)
            if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n])
              return t[n];
          return !1
        }
        )();
      function ge(e, t, n) {
        ae(e, n[`show${s(t)}Button`], "inline-block"),
          W(e, n[`${t}ButtonText`]),
          e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`]),
          e.className = y[t],
          X(e, n, `${t}Button`),
          Q(e, n[`${t}ButtonClass`])
      }
      var ve = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
      };
      const ye = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
        , be = (e, t) => {
          e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
        }
        , we = (e, t, n) => {
          if (n.inputLabel) {
            e.id = y.input;
            const o = document.createElement("label")
              , a = y["input-label"];
            o.setAttribute("for", e.id),
              o.className = a,
              Q(o, n.customClass.inputLabel),
              o.innerText = n.inputLabel,
              t.insertAdjacentElement("beforebegin", o)
          }
        }
        , _e = e => {
          const t = y[e] ? y[e] : y.input;
          return G(L(), t)
        }
        , Se = {};
      Se.text = Se.email = Se.password = Se.number = Se.tel = Se.url = (e, t) => ("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : h(t.inputValue) || c(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t.inputValue}"`),
        we(e, e, t),
        be(e, t),
        e.type = t.input,
        e),
        Se.file = (e, t) => (we(e, e, t),
          be(e, t),
          e),
        Se.range = (e, t) => {
          const n = e.querySelector("input")
            , o = e.querySelector("output");
          return n.value = t.inputValue,
            n.type = t.input,
            o.value = t.inputValue,
            we(n, e, t),
            e
        }
        ,
        Se.select = (e, t) => {
          if (e.textContent = "",
            t.inputPlaceholder) {
            const n = document.createElement("option");
            W(n, t.inputPlaceholder),
              n.value = "",
              n.disabled = !0,
              n.selected = !0,
              e.appendChild(n)
          }
          return we(e, e, t),
            e
        }
        ,
        Se.radio = e => (e.textContent = "",
          e),
        Se.checkbox = (e, t) => {
          const n = Y(L(), "checkbox");
          n.value = 1,
            n.id = y.checkbox,
            n.checked = Boolean(t.inputValue);
          const o = e.querySelector("span");
          return W(o, t.inputPlaceholder),
            e
        }
        ,
        Se.textarea = (e, t) => (e.value = t.inputValue,
          be(e, t),
          we(e, e, t),
          setTimeout((() => {
            if ("MutationObserver" in window) {
              const t = parseInt(window.getComputedStyle(L()).width);
              new MutationObserver((() => {
                const n = e.offsetWidth + (o = e,
                  parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight));
                var o;
                L().style.width = n > t ? `${n}px` : null
              }
              )).observe(e, {
                attributes: !0,
                attributeFilter: ["style"]
              })
            }
          }
          )),
          e);
      const Le = (e, t) => {
        const n = A();
        X(n, t, "htmlContainer"),
          t.html ? (me(t.html, n),
            te(n, "block")) : t.text ? (n.textContent = t.text,
              te(n, "block")) : ne(n),
          ((e, t) => {
            const n = L()
              , o = ve.innerParams.get(e)
              , a = !o || t.input !== o.input;
            ye.forEach((e => {
              const o = y[e]
                , r = G(n, o);
              ((e, t) => {
                const n = Y(L(), e);
                if (n) {
                  (e => {
                    for (let t = 0; t < e.attributes.length; t++) {
                      const n = e.attributes[t].name;
                      ["type", "value", "style"].includes(n) || e.removeAttribute(n)
                    }
                  }
                  )(n);
                  for (const e in t)
                    n.setAttribute(e, t[e])
                }
              }
              )(e, t.inputAttributes),
                r.className = o,
                a && ne(r)
            }
            )),
              t.input && (a && (e => {
                if (!Se[e.input])
                  return l(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);
                const t = _e(e.input)
                  , n = Se[e.input](t, e);
                te(n),
                  setTimeout((() => {
                    Z(n)
                  }
                  ))
              }
              )(t),
                (e => {
                  const t = _e(e.input);
                  e.customClass && Q(t, e.customClass.input)
                }
                )(t))
          }
          )(e, t)
      }
        , Ee = (e, t) => {
          for (const n in b)
            t.icon !== n && J(e, b[n]);
          Q(e, b[t.icon]),
            Ce(e, t),
            ke(),
            X(e, t, "icon")
        }
        , ke = () => {
          const e = L()
            , t = window.getComputedStyle(e).getPropertyValue("background-color")
            , n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
          for (let e = 0; e < n.length; e++)
            n[e].style.backgroundColor = t
        }
        , Ae = (e, t) => {
          e.textContent = "",
            t.iconHtml ? W(e, xe(t.iconHtml)) : "success" === t.icon ? W(e, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === t.icon ? W(e, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : W(e, xe({
              question: "?",
              warning: "!",
              info: "i"
            }[t.icon]))
        }
        , Ce = (e, t) => {
          if (t.iconColor) {
            e.style.color = t.iconColor,
              e.style.borderColor = t.iconColor;
            for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
              oe(e, n, "backgroundColor", t.iconColor);
            oe(e, ".swal2-success-ring", "borderColor", t.iconColor)
          }
        }
        , xe = e => `<div class="${y["icon-content"]}">${e}</div>`
        , Te = (e, t) => {
          ((e, t) => {
            const n = w()
              , o = L();
            t.toast ? (ee(n, "width", t.width),
              o.style.width = "100%",
              o.insertBefore(O(), E())) : ee(o, "width", t.width),
              ee(o, "padding", t.padding),
              t.background && (o.style.background = t.background),
              ne(T()),
              ((e, t) => {
                e.className = `${y.popup} ${re(e) ? t.showClass.popup : ""}`,
                  t.toast ? (Q([document.documentElement, document.body], y["toast-shown"]),
                    Q(e, y.toast)) : Q(e, y.modal),
                  X(e, t, "popup"),
                  "string" == typeof t.customClass && Q(e, t.customClass),
                  t.icon && Q(e, y[`icon-${t.icon}`])
              }
              )(o, t)
          }
          )(0, t),
            ((e, t) => {
              const n = w();
              n && (function (e, t) {
                "string" == typeof t ? e.style.background = t : t || Q([document.documentElement, document.body], y["no-backdrop"])
              }(n, t.backdrop),
                function (e, t) {
                  t in y ? Q(e, y[t]) : (c('The "position" parameter is not valid, defaulting to "center"'),
                    Q(e, y.center))
                }(n, t.position),
                function (e, t) {
                  if (t && "string" == typeof t) {
                    const n = `grow-${t}`;
                    n in y && Q(e, y[n])
                  }
                }(n, t.grow),
                X(n, t, "container"))
            }
            )(0, t),
            ((e, t) => {
              const n = x();
              if (!t.progressSteps || 0 === t.progressSteps.length)
                return ne(n);
              te(n),
                n.textContent = "",
                t.currentProgressStep >= t.progressSteps.length && c("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
                t.progressSteps.forEach(((e, o) => {
                  const a = (e => {
                    const t = document.createElement("li");
                    return Q(t, y["progress-step"]),
                      W(t, e),
                      t
                  }
                  )(e);
                  if (n.appendChild(a),
                    o === t.currentProgressStep && Q(a, y["active-progress-step"]),
                    o !== t.progressSteps.length - 1) {
                    const e = (e => {
                      const t = document.createElement("li");
                      return Q(t, y["progress-step-line"]),
                        e.progressStepsDistance && (t.style.width = e.progressStepsDistance),
                        t
                    }
                    )(t);
                    n.appendChild(e)
                  }
                }
                ))
            }
            )(0, t),
            ((e, t) => {
              const n = ve.innerParams.get(e)
                , o = E();
              n && t.icon === n.icon ? (Ae(o, t),
                Ee(o, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(b).indexOf(t.icon) ? (l(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),
                  ne(o)) : (te(o),
                    Ae(o, t),
                    Ee(o, t),
                    Q(o, t.showClass.icon)) : ne(o)
            }
            )(e, t),
            ((e, t) => {
              const n = C();
              if (!t.imageUrl)
                return ne(n);
              te(n, ""),
                n.setAttribute("src", t.imageUrl),
                n.setAttribute("alt", t.imageAlt),
                ee(n, "width", t.imageWidth),
                ee(n, "height", t.imageHeight),
                n.className = y.image,
                X(n, t, "image")
            }
            )(0, t),
            ((e, t) => {
              const n = k();
              ae(n, t.title || t.titleText, "block"),
                t.title && me(t.title, n),
                t.titleText && (n.innerText = t.titleText),
                X(n, t, "title")
            }
            )(0, t),
            ((e, t) => {
              const n = I();
              W(n, t.closeButtonHtml),
                X(n, t, "closeButton"),
                ae(n, t.showCloseButton),
                n.setAttribute("aria-label", t.closeButtonAriaLabel)
            }
            )(0, t),
            Le(e, t),
            ((e, t) => {
              const n = D()
                , o = O()
                , a = j()
                , r = q()
                , s = M();
              t.showConfirmButton || t.showDenyButton || t.showCancelButton ? te(n) : ne(n),
                X(n, t, "actions"),
                ge(a, "confirm", t),
                ge(r, "deny", t),
                ge(s, "cancel", t),
                function (e, t, n, o) {
                  if (!o.buttonsStyling)
                    return J([e, t, n], y.styled);
                  Q([e, t, n], y.styled),
                    o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor,
                      Q(e, y["default-outline"])),
                    o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor,
                      Q(t, y["default-outline"])),
                    o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor,
                      Q(n, y["default-outline"]))
                }(a, r, s, t),
                t.reverseButtons && (n.insertBefore(s, o),
                  n.insertBefore(r, o),
                  n.insertBefore(a, o)),
                W(o, t.loaderHtml),
                X(o, t, "loader")
            }
            )(0, t),
            ((e, t) => {
              const n = B();
              ae(n, t.footer),
                t.footer && me(t.footer, n),
                X(n, t, "footer")
            }
            )(0, t),
            "function" == typeof t.didRender && t.didRender(L())
        }
        , je = () => re(L())
        , qe = () => j() && j().click()
        , Pe = () => q() && q().click()
        , Oe = () => M() && M().click();
      function Me() {
        const e = this;
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        return new e(...n)
      }
      function De(e) {
        return class extends (this) {
          _main(t, n) {
            return super._main(t, Object.assign({}, e, n))
          }
        }
      }
      const Be = e => {
        let t = L();
        t || En.fire(),
          t = L();
        const n = O();
        F() ? ne(E()) : Ne(t, e),
          te(n),
          t.setAttribute("data-loading", !0),
          t.setAttribute("aria-busy", !0),
          t.focus()
      }
        , Ne = (e, t) => {
          const n = D()
            , o = O();
          !t && re(j()) && (t = j()),
            te(n),
            t && (ne(t),
              o.setAttribute("data-button-to-replace", t.className)),
            o.parentNode.insertBefore(o, t),
            Q([e, n], y.loading)
        }
        , Ie = {};
      var $e = Ie;
      const Ve = () => $e.timeout && $e.timeout.getTimerLeft()
        , He = () => {
          if ($e.timeout)
            return (() => {
              const e = N()
                , t = parseInt(window.getComputedStyle(e).width);
              e.style.removeProperty("transition"),
                e.style.width = "100%";
              const n = parseInt(window.getComputedStyle(e).width)
                , o = parseInt(t / n * 100);
              e.style.removeProperty("transition"),
                e.style.width = `${o}%`
            }
            )(),
              $e.timeout.stop()
        }
        , Fe = () => {
          if ($e.timeout) {
            const e = $e.timeout.start();
            return ce(e),
              e
          }
        }
        , Ue = () => {
          const e = $e.timeout;
          return e && (e.running ? He() : Fe())
        }
        , Re = e => {
          if ($e.timeout) {
            const t = $e.timeout.increase(e);
            return ce(t, !0),
              t
          }
        }
        , We = () => $e.timeout && $e.timeout.isRunning();
      let ze = !1;
      const Xe = {};
      function Ye() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
        Xe[e] = this,
          ze || (document.body.addEventListener("click", Ze),
            ze = !0)
      }
      const Ze = e => {
        for (let t = e.target; t && t !== document; t = t.parentNode)
          for (const e in Xe) {
            const n = t.getAttribute(e);
            if (n)
              return void Xe[e].fire({
                template: n
              })
          }
      }
        , Ke = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconColor: void 0,
          iconHtml: void 0,
          template: void 0,
          toast: !1,
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
          },
          customClass: {},
          target: "body",
          backdrop: !0,
          heightAuto: !0,
          allowOutsideClick: !0,
          allowEscapeKey: !0,
          allowEnterKey: !0,
          stopKeydownPropagation: !0,
          keydownListenerCapture: !1,
          showConfirmButton: !0,
          showDenyButton: !1,
          showCancelButton: !1,
          preConfirm: void 0,
          preDeny: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          denyButtonText: "No",
          denyButtonAriaLabel: "",
          denyButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: !0,
          reverseButtons: !1,
          focusConfirm: !0,
          focusDeny: !1,
          focusCancel: !1,
          returnFocus: !0,
          showCloseButton: !1,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          loaderHtml: "",
          showLoaderOnConfirm: !1,
          showLoaderOnDeny: !1,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: !1,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputLabel: "",
          inputValue: "",
          inputOptions: {},
          inputAutoTrim: !0,
          inputAttributes: {},
          inputValidator: void 0,
          returnInputValueOnDeny: !1,
          validationMessage: void 0,
          grow: !1,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          willOpen: void 0,
          didOpen: void 0,
          didRender: void 0,
          willClose: void 0,
          didClose: void 0,
          didDestroy: void 0,
          scrollbarPadding: !0
        }
        , Qe = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
        , Je = {}
        , Ge = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
        , et = e => Object.prototype.hasOwnProperty.call(Ke, e)
        , tt = e => -1 !== Qe.indexOf(e)
        , nt = e => Je[e]
        , ot = e => {
          et(e) || c(`Unknown parameter "${e}"`)
        }
        , at = e => {
          Ge.includes(e) && c(`The parameter "${e}" is incompatible with toasts`)
        }
        , rt = e => {
          var t, n, o;
          nt(e) && (t = e,
            n = nt(e),
            o = `"${t}" is deprecated and will be removed in the next major release. Please use "${n}" instead.`,
            u.includes(o) || (u.push(o),
              c(o)))
        }
        , st = e => {
          !e.backdrop && e.allowOutsideClick && c('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          for (const t in e)
            ot(t),
              e.toast && at(t),
              rt(t)
        }
        ;
      var it = Ke;
      function ct() {
        const e = ve.innerParams.get(this);
        if (!e)
          return;
        const t = ve.domCache.get(this);
        ne(t.loader),
          F() ? e.icon && te(E()) : lt(t),
          J([t.popup, t.actions], y.loading),
          t.popup.removeAttribute("aria-busy"),
          t.popup.removeAttribute("data-loading"),
          t.confirmButton.disabled = !1,
          t.denyButton.disabled = !1,
          t.cancelButton.disabled = !1
      }
      const lt = e => {
        const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
        t.length ? te(t[0], "inline-block") : re(j()) || re(q()) || re(M()) || ne(e.actions)
      }
        ;
      function ut(e) {
        const t = ve.innerParams.get(e || this)
          , n = ve.domCache.get(e || this);
        return n ? Y(n.popup, t.input) : null
      }
      const dt = e => {
        const t = e.target
          , n = w();
        return !(mt(e) || pt(e) || t !== n && (se(n) || "INPUT" === t.tagName || "TEXTAREA" === t.tagName || se(A()) && A().contains(t)))
      }
        , mt = e => e.touches && e.touches.length && "stylus" === e.touches[0].touchType
        , pt = e => e.touches && e.touches.length > 1
        , ht = () => {
          i(document.body.children).forEach((e => {
            e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")),
              e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
          }
          ))
        }
        ;
      var ft = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
      };
      function gt(e, t, n, o) {
        F() ? kt(e, o) : ((e => new Promise((t => {
          if (!e)
            return t();
          const n = window.scrollX
            , o = window.scrollY;
          Ie.restoreFocusTimeout = setTimeout((() => {
            Ie.previousActiveElement && Ie.previousActiveElement.focus ? (Ie.previousActiveElement.focus(),
              Ie.previousActiveElement = null) : document.body && document.body.focus(),
              t()
          }
          ), 100),
            window.scrollTo(n, o)
        }
        )))(n).then((() => kt(e, o))),
          $e.keydownTarget.removeEventListener("keydown", $e.keydownHandler, {
            capture: $e.keydownListenerCapture
          }),
          $e.keydownHandlerAdded = !1),
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"),
            t.removeAttribute("class"),
            t.innerHTML = "") : t.remove(),
          H() && (null !== R.previousBodyPadding && (document.body.style.paddingRight = `${R.previousBodyPadding}px`,
            R.previousBodyPadding = null),
            (() => {
              if (z(document.body, y.iosfix)) {
                const e = parseInt(document.body.style.top, 10);
                J(document.body, y.iosfix),
                  document.body.style.top = "",
                  document.body.scrollTop = -1 * e
              }
            }
            )(),
            ht()),
          J([document.documentElement, document.body], [y.shown, y["height-auto"], y["no-backdrop"], y["toast-shown"]])
      }
      function vt(e) {
        e = St(e);
        const t = ft.swalPromiseResolve.get(this)
          , n = bt(this);
        this.isAwaitingPromise() ? e.isDismissed || (_t(this),
          t(e)) : n && t(e)
      }
      function yt() {
        return !!ve.awaitingPromise.get(this)
      }
      const bt = e => {
        const t = L();
        if (!t)
          return !1;
        const n = ve.innerParams.get(e);
        if (!n || z(t, n.hideClass.popup))
          return !1;
        J(t, n.showClass.popup),
          Q(t, n.hideClass.popup);
        const o = w();
        return J(o, n.showClass.backdrop),
          Q(o, n.hideClass.backdrop),
          Lt(e, t, n),
          !0
      }
        ;
      function wt(e) {
        const t = ft.swalPromiseReject.get(this);
        _t(this),
          t && t(e)
      }
      const _t = e => {
        e.isAwaitingPromise() && (ve.awaitingPromise.delete(e),
          ve.innerParams.get(e) || e._destroy())
      }
        , St = e => void 0 === e ? {
          isConfirmed: !1,
          isDenied: !1,
          isDismissed: !0
        } : Object.assign({
          isConfirmed: !1,
          isDenied: !1,
          isDismissed: !1
        }, e)
        , Lt = (e, t, n) => {
          const o = w()
            , a = fe && ie(t);
          "function" == typeof n.willClose && n.willClose(t),
            a ? Et(e, t, o, n.returnFocus, n.didClose) : gt(e, o, n.returnFocus, n.didClose)
        }
        , Et = (e, t, n, o, a) => {
          $e.swalCloseEventFinishedCallback = gt.bind(null, e, n, o, a),
            t.addEventListener(fe, (function (e) {
              e.target === t && ($e.swalCloseEventFinishedCallback(),
                delete $e.swalCloseEventFinishedCallback)
            }
            ))
        }
        , kt = (e, t) => {
          setTimeout((() => {
            "function" == typeof t && t.bind(e.params)(),
              e._destroy()
          }
          ))
        }
        ;
      function At(e, t, n) {
        const o = ve.domCache.get(e);
        t.forEach((e => {
          o[e].disabled = n
        }
        ))
      }
      function Ct(e, t) {
        if (!e)
          return !1;
        if ("radio" === e.type) {
          const n = e.parentNode.parentNode.querySelectorAll("input");
          for (let e = 0; e < n.length; e++)
            n[e].disabled = t
        } else
          e.disabled = t
      }
      function xt() {
        At(this, ["confirmButton", "denyButton", "cancelButton"], !1)
      }
      function Tt() {
        At(this, ["confirmButton", "denyButton", "cancelButton"], !0)
      }
      function jt() {
        return Ct(this.getInput(), !1)
      }
      function qt() {
        return Ct(this.getInput(), !0)
      }
      function Pt(e) {
        const t = ve.domCache.get(this)
          , n = ve.innerParams.get(this);
        W(t.validationMessage, e),
          t.validationMessage.className = y["validation-message"],
          n.customClass && n.customClass.validationMessage && Q(t.validationMessage, n.customClass.validationMessage),
          te(t.validationMessage);
        const o = this.getInput();
        o && (o.setAttribute("aria-invalid", !0),
          o.setAttribute("aria-describedby", y["validation-message"]),
          Z(o),
          Q(o, y.inputerror))
      }
      function Ot() {
        const e = ve.domCache.get(this);
        e.validationMessage && ne(e.validationMessage);
        const t = this.getInput();
        t && (t.removeAttribute("aria-invalid"),
          t.removeAttribute("aria-describedby"),
          J(t, y.inputerror))
      }
      function Mt() {
        return ve.domCache.get(this).progressSteps
      }
      class Dt {
        constructor(e, t) {
          this.callback = e,
            this.remaining = t,
            this.running = !1,
            this.start()
        }
        start() {
          return this.running || (this.running = !0,
            this.started = new Date,
            this.id = setTimeout(this.callback, this.remaining)),
            this.remaining
        }
        stop() {
          return this.running && (this.running = !1,
            clearTimeout(this.id),
            this.remaining -= new Date - this.started),
            this.remaining
        }
        increase(e) {
          const t = this.running;
          return t && this.stop(),
            this.remaining += e,
            t && this.start(),
            this.remaining
        }
        getTimerLeft() {
          return this.running && (this.stop(),
            this.start()),
            this.remaining
        }
        isRunning() {
          return this.running
        }
      }
      var Bt = {
        email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
        url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
      };
      function Nt(e) {
        !function (e) {
          e.inputValidator || Object.keys(Bt).forEach((t => {
            e.input === t && (e.inputValidator = Bt[t])
          }
          ))
        }(e),
          e.showLoaderOnConfirm && !e.preConfirm && c("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
          function (e) {
            (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (c('Target parameter is not valid, defaulting to "body"'),
              e.target = "body")
          }(e),
          "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")),
          (e => {
            const t = (() => {
              const e = w();
              return !!e && (e.remove(),
                J([document.documentElement, document.body], [y["no-backdrop"], y["toast-shown"], y["has-column"]]),
                !0)
            }
            )();
            if (le())
              return void l("SweetAlert2 requires document to initialize");
            const n = document.createElement("div");
            n.className = y.container,
              t && Q(n, y["no-transition"]),
              W(n, ue);
            const o = "string" == typeof (a = e.target) ? document.querySelector(a) : a;
            var a;
            o.appendChild(n),
              (e => {
                const t = L();
                t.setAttribute("role", e.toast ? "alert" : "dialog"),
                  t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
                  e.toast || t.setAttribute("aria-modal", "true")
              }
              )(e),
              (e => {
                "rtl" === window.getComputedStyle(e).direction && Q(w(), y.rtl)
              }
              )(o),
              (() => {
                const e = L()
                  , t = G(e, y.input)
                  , n = G(e, y.file)
                  , o = e.querySelector(`.${y.range} input`)
                  , a = e.querySelector(`.${y.range} output`)
                  , r = G(e, y.select)
                  , s = e.querySelector(`.${y.checkbox} input`)
                  , i = G(e, y.textarea);
                t.oninput = de,
                  n.onchange = de,
                  r.onchange = de,
                  s.onchange = de,
                  i.oninput = de,
                  o.oninput = () => {
                    de(),
                      a.value = o.value
                  }
                  ,
                  o.onchange = () => {
                    de(),
                      o.nextSibling.value = o.value
                  }
              }
              )()
          }
          )(e)
      }
      const It = ["swal-title", "swal-html", "swal-footer"]
        , $t = (e, t) => {
          i(e.attributes).forEach((n => {
            -1 === t.indexOf(n.name) && c([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`, t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element."])
          }
          ))
        }
        , Vt = e => {
          const t = L();
          if (e.target !== t)
            return;
          const n = w();
          t.removeEventListener(fe, Vt),
            n.style.overflowY = "auto"
        }
        , Ht = (e, t) => {
          fe && ie(t) ? (e.style.overflowY = "hidden",
            t.addEventListener(fe, Vt)) : e.style.overflowY = "auto"
        }
        , Ft = (e, t, n) => {
          (() => {
            if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !z(document.body, y.iosfix)) {
              const e = document.body.scrollTop;
              document.body.style.top = -1 * e + "px",
                Q(document.body, y.iosfix),
                (() => {
                  const e = w();
                  let t;
                  e.ontouchstart = e => {
                    t = dt(e)
                  }
                    ,
                    e.ontouchmove = e => {
                      t && (e.preventDefault(),
                        e.stopPropagation())
                    }
                }
                )(),
                (() => {
                  if (!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)) {
                    const e = 44;
                    L().scrollHeight > window.innerHeight - e && (w().style.paddingBottom = `${e}px`)
                  }
                }
                )()
            }
          }
          )(),
            t && (null === R.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (R.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
              document.body.style.paddingRight = `${R.previousBodyPadding + (() => {
                const e = document.createElement("div");
                e.className = y["scrollbar-measure"],
                  document.body.appendChild(e);
                const t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e),
                  t
              }
              )()}px`)),
            setTimeout((() => {
              e.scrollTop = 0
            }
            ))
        }
        , Ut = (e, t, n) => {
          Q(e, n.showClass.backdrop),
            t.style.setProperty("opacity", "0", "important"),
            te(t, "grid"),
            setTimeout((() => {
              Q(t, n.showClass.popup),
                t.style.removeProperty("opacity")
            }
            ), 10),
            Q([document.documentElement, document.body], y.shown),
            n.heightAuto && n.backdrop && !n.toast && Q([document.documentElement, document.body], y["height-auto"])
        }
        , Rt = {
          select: (e, t, n) => {
            const o = G(e, y.select)
              , a = (e, t, o) => {
                const a = document.createElement("option");
                a.value = o,
                  W(a, t),
                  a.selected = zt(o, n.inputValue),
                  e.appendChild(a)
              }
              ;
            t.forEach((e => {
              const t = e[0]
                , n = e[1];
              if (Array.isArray(n)) {
                const e = document.createElement("optgroup");
                e.label = t,
                  e.disabled = !1,
                  o.appendChild(e),
                  n.forEach((t => a(e, t[1], t[0])))
              } else
                a(o, n, t)
            }
            )),
              o.focus()
          }
          ,
          radio: (e, t, n) => {
            const o = G(e, y.radio);
            t.forEach((e => {
              const t = e[0]
                , a = e[1]
                , r = document.createElement("input")
                , s = document.createElement("label");
              r.type = "radio",
                r.name = y.radio,
                r.value = t,
                zt(t, n.inputValue) && (r.checked = !0);
              const i = document.createElement("span");
              W(i, a),
                i.className = y.label,
                s.appendChild(r),
                s.appendChild(i),
                o.appendChild(s)
            }
            ));
            const a = o.querySelectorAll("input");
            a.length && a[0].focus()
          }
        }
        , Wt = e => {
          const t = [];
          return "undefined" != typeof Map && e instanceof Map ? e.forEach(((e, n) => {
            let o = e;
            "object" == typeof o && (o = Wt(o)),
              t.push([n, o])
          }
          )) : Object.keys(e).forEach((n => {
            let o = e[n];
            "object" == typeof o && (o = Wt(o)),
              t.push([n, o])
          }
          )),
            t
        }
        , zt = (e, t) => t && t.toString() === e.toString()
        , Xt = (e, t) => {
          const n = ve.innerParams.get(e)
            , o = ((e, t) => {
              const n = e.getInput();
              if (!n)
                return null;
              switch (t.input) {
                case "checkbox":
                  return (e => e.checked ? 1 : 0)(n);
                case "radio":
                  return (e => e.checked ? e.value : null)(n);
                case "file":
                  return (e => e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null)(n);
                default:
                  return t.inputAutoTrim ? n.value.trim() : n.value
              }
            }
            )(e, n);
          n.inputValidator ? Yt(e, o, t) : e.getInput().checkValidity() ? "deny" === t ? Zt(e, o) : Jt(e, o) : (e.enableButtons(),
            e.showValidationMessage(n.validationMessage))
        }
        , Yt = (e, t, n) => {
          const o = ve.innerParams.get(e);
          e.disableInput(),
            Promise.resolve().then((() => p(o.inputValidator(t, o.validationMessage)))).then((o => {
              e.enableButtons(),
                e.enableInput(),
                o ? e.showValidationMessage(o) : "deny" === n ? Zt(e, t) : Jt(e, t)
            }
            ))
        }
        , Zt = (e, t) => {
          const n = ve.innerParams.get(e || void 0);
          n.showLoaderOnDeny && Be(q()),
            n.preDeny ? (ve.awaitingPromise.set(e || void 0, !0),
              Promise.resolve().then((() => p(n.preDeny(t, n.validationMessage)))).then((n => {
                !1 === n ? e.hideLoading() : e.closePopup({
                  isDenied: !0,
                  value: void 0 === n ? t : n
                })
              }
              )).catch((t => Qt(e || void 0, t)))) : e.closePopup({
                isDenied: !0,
                value: t
              })
        }
        , Kt = (e, t) => {
          e.closePopup({
            isConfirmed: !0,
            value: t
          })
        }
        , Qt = (e, t) => {
          e.rejectPromise(t)
        }
        , Jt = (e, t) => {
          const n = ve.innerParams.get(e || void 0);
          n.showLoaderOnConfirm && Be(),
            n.preConfirm ? (e.resetValidationMessage(),
              ve.awaitingPromise.set(e || void 0, !0),
              Promise.resolve().then((() => p(n.preConfirm(t, n.validationMessage)))).then((n => {
                re(T()) || !1 === n ? e.hideLoading() : Kt(e, void 0 === n ? t : n)
              }
              )).catch((t => Qt(e || void 0, t)))) : Kt(e, t)
        }
        , Gt = (e, t, n) => {
          const o = V();
          if (o.length)
            return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1),
              o[t].focus();
          L().focus()
        }
        , en = ["ArrowRight", "ArrowDown"]
        , tn = ["ArrowLeft", "ArrowUp"]
        , nn = (e, t, n) => {
          if (!t.isComposing && t.target && e.getInput() && t.target.outerHTML === e.getInput().outerHTML) {
            if (["textarea", "file"].includes(n.input))
              return;
            qe(),
              t.preventDefault()
          }
        }
        , on = (e, t) => {
          const n = e.target
            , o = V();
          let a = -1;
          for (let e = 0; e < o.length; e++)
            if (n === o[e]) {
              a = e;
              break
            }
          e.shiftKey ? Gt(0, a, -1) : Gt(0, a, 1),
            e.stopPropagation(),
            e.preventDefault()
        }
        , an = e => {
          if (![j(), q(), M()].includes(document.activeElement))
            return;
          const t = en.includes(e) ? "nextElementSibling" : "previousElementSibling"
            , n = document.activeElement[t];
          n && n.focus()
        }
        , rn = (e, t, n) => {
          d(t.allowEscapeKey) && (e.preventDefault(),
            n(r.esc))
        }
        ;
      let sn = !1;
      function cn(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        st(Object.assign({}, t, e)),
          $e.currentInstance && ($e.currentInstance._destroy(),
            H() && ht()),
          $e.currentInstance = this;
        const n = ln(e, t);
        Nt(n),
          Object.freeze(n),
          $e.timeout && ($e.timeout.stop(),
            delete $e.timeout),
          clearTimeout($e.restoreFocusTimeout);
        const o = dn(this);
        return Te(this, n),
          ve.innerParams.set(this, n),
          un(this, o, n)
      }
      const ln = (e, t) => {
        const n = (e => {
          const t = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
          if (!t)
            return {};
          const n = t.content;
          return (e => {
            const t = It.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            i(e.children).forEach((e => {
              const n = e.tagName.toLowerCase();
              -1 === t.indexOf(n) && c(`Unrecognized element <${n}>`)
            }
            ))
          }
          )(n),
            Object.assign((e => {
              const t = {};
              return i(e.querySelectorAll("swal-param")).forEach((e => {
                $t(e, ["name", "value"]);
                const n = e.getAttribute("name");
                let o = e.getAttribute("value");
                "boolean" == typeof it[n] && "false" === o && (o = !1),
                  "object" == typeof it[n] && (o = JSON.parse(o)),
                  t[n] = o
              }
              )),
                t
            }
            )(n), (e => {
              const t = {};
              return i(e.querySelectorAll("swal-button")).forEach((e => {
                $t(e, ["type", "color", "aria-label"]);
                const n = e.getAttribute("type");
                t[`${n}ButtonText`] = e.innerHTML,
                  t[`show${s(n)}Button`] = !0,
                  e.hasAttribute("color") && (t[`${n}ButtonColor`] = e.getAttribute("color")),
                  e.hasAttribute("aria-label") && (t[`${n}ButtonAriaLabel`] = e.getAttribute("aria-label"))
              }
              )),
                t
            }
            )(n), (e => {
              const t = {}
                , n = e.querySelector("swal-image");
              return n && ($t(n, ["src", "width", "height", "alt"]),
                n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")),
                n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")),
                n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")),
                n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))),
                t
            }
            )(n), (e => {
              const t = {}
                , n = e.querySelector("swal-icon");
              return n && ($t(n, ["type", "color"]),
                n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
                n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
                t.iconHtml = n.innerHTML),
                t
            }
            )(n), (e => {
              const t = {}
                , n = e.querySelector("swal-input");
              n && ($t(n, ["type", "label", "placeholder", "value"]),
                t.input = n.getAttribute("type") || "text",
                n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
                n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")),
                n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
              const o = e.querySelectorAll("swal-input-option");
              return o.length && (t.inputOptions = {},
                i(o).forEach((e => {
                  $t(e, ["value"]);
                  const n = e.getAttribute("value")
                    , o = e.innerHTML;
                  t.inputOptions[n] = o
                }
                ))),
                t
            }
            )(n), ((e, t) => {
              const n = {};
              for (const o in t) {
                const a = t[o]
                  , r = e.querySelector(a);
                r && ($t(r, []),
                  n[a.replace(/^swal-/, "")] = r.innerHTML.trim())
              }
              return n
            }
            )(n, It))
        }
        )(e)
          , o = Object.assign({}, it, t, n, e);
        return o.showClass = Object.assign({}, it.showClass, o.showClass),
          o.hideClass = Object.assign({}, it.hideClass, o.hideClass),
          o
      }
        , un = (e, t, n) => new Promise(((o, a) => {
          const s = t => {
            e.closePopup({
              isDismissed: !0,
              dismiss: t
            })
          }
            ;
          ft.swalPromiseResolve.set(e, o),
            ft.swalPromiseReject.set(e, a),
            t.confirmButton.onclick = () => (e => {
              const t = ve.innerParams.get(e);
              e.disableButtons(),
                t.input ? Xt(e, "confirm") : Jt(e, !0)
            }
            )(e),
            t.denyButton.onclick = () => (e => {
              const t = ve.innerParams.get(e);
              e.disableButtons(),
                t.returnInputValueOnDeny ? Xt(e, "deny") : Zt(e, !1)
            }
            )(e),
            t.cancelButton.onclick = () => ((e, t) => {
              e.disableButtons(),
                t(r.cancel)
            }
            )(e, s),
            t.closeButton.onclick = () => s(r.close),
            ((e, t, n) => {
              ve.innerParams.get(e).toast ? ((e, t, n) => {
                t.popup.onclick = () => {
                  const t = ve.innerParams.get(e);
                  t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || t.timer || t.input || n(r.close)
                }
              }
              )(e, t, n) : ((e => {
                e.popup.onmousedown = () => {
                  e.container.onmouseup = function (t) {
                    e.container.onmouseup = void 0,
                      t.target === e.container && (sn = !0)
                  }
                }
              }
              )(t),
                (e => {
                  e.container.onmousedown = () => {
                    e.popup.onmouseup = function (t) {
                      e.popup.onmouseup = void 0,
                        (t.target === e.popup || e.popup.contains(t.target)) && (sn = !0)
                    }
                  }
                }
                )(t),
                ((e, t, n) => {
                  t.container.onclick = o => {
                    const a = ve.innerParams.get(e);
                    sn ? sn = !1 : o.target === t.container && d(a.allowOutsideClick) && n(r.backdrop)
                  }
                }
                )(e, t, n))
            }
            )(e, t, s),
            ((e, t, n, o) => {
              t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
                capture: t.keydownListenerCapture
              }),
                t.keydownHandlerAdded = !1),
                n.toast || (t.keydownHandler = t => ((e, t, n) => {
                  const o = ve.innerParams.get(e);
                  o && (o.stopKeydownPropagation && t.stopPropagation(),
                    "Enter" === t.key ? nn(e, t, o) : "Tab" === t.key ? on(t, o) : [...en, ...tn].includes(t.key) ? an(t.key) : "Escape" === t.key && rn(t, o, n))
                }
                )(e, t, o),
                  t.keydownTarget = n.keydownListenerCapture ? window : L(),
                  t.keydownListenerCapture = n.keydownListenerCapture,
                  t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                    capture: t.keydownListenerCapture
                  }),
                  t.keydownHandlerAdded = !0)
            }
            )(e, $e, n, s),
            ((e, t) => {
              "select" === t.input || "radio" === t.input ? ((e, t) => {
                const n = L()
                  , o = e => Rt[t.input](n, Wt(e), t);
                m(t.inputOptions) || h(t.inputOptions) ? (Be(j()),
                  p(t.inputOptions).then((t => {
                    e.hideLoading(),
                      o(t)
                  }
                  ))) : "object" == typeof t.inputOptions ? o(t.inputOptions) : l("Unexpected type of inputOptions! Expected object, Map or Promise, got " + typeof t.inputOptions)
              }
              )(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (m(t.inputValue) || h(t.inputValue)) && (Be(j()),
                ((e, t) => {
                  const n = e.getInput();
                  ne(n),
                    p(t.inputValue).then((o => {
                      n.value = "number" === t.input ? parseFloat(o) || 0 : `${o}`,
                        te(n),
                        n.focus(),
                        e.hideLoading()
                    }
                    )).catch((t => {
                      l(`Error in inputValue promise: ${t}`),
                        n.value = "",
                        te(n),
                        n.focus(),
                        e.hideLoading()
                    }
                    ))
                }
                )(e, t))
            }
            )(e, n),
            (e => {
              const t = w()
                , n = L();
              "function" == typeof e.willOpen && e.willOpen(n);
              const o = window.getComputedStyle(document.body).overflowY;
              Ut(t, n, e),
                setTimeout((() => {
                  Ht(t, n)
                }
                ), 10),
                H() && (Ft(t, e.scrollbarPadding, o),
                  i(document.body.children).forEach((e => {
                    e === w() || e.contains(w()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")),
                      e.setAttribute("aria-hidden", "true"))
                  }
                  ))),
                F() || $e.previousActiveElement || ($e.previousActiveElement = document.activeElement),
                "function" == typeof e.didOpen && setTimeout((() => e.didOpen(n))),
                J(t, y["no-transition"])
            }
            )(n),
            mn($e, n, s),
            pn(t, n),
            setTimeout((() => {
              t.container.scrollTop = 0
            }
            ))
        }
        ))
        , dn = e => {
          const t = {
            popup: L(),
            container: w(),
            actions: D(),
            confirmButton: j(),
            denyButton: q(),
            cancelButton: M(),
            loader: O(),
            closeButton: I(),
            validationMessage: T(),
            progressSteps: x()
          };
          return ve.domCache.set(e, t),
            t
        }
        , mn = (e, t, n) => {
          const o = N();
          ne(o),
            t.timer && (e.timeout = new Dt((() => {
              n("timer"),
                delete e.timeout
            }
            ), t.timer),
              t.timerProgressBar && (te(o),
                setTimeout((() => {
                  e.timeout && e.timeout.running && ce(t.timer)
                }
                ))))
        }
        , pn = (e, t) => {
          if (!t.toast)
            return d(t.allowEnterKey) ? void (hn(e, t) || Gt(0, -1, 1)) : fn()
        }
        , hn = (e, t) => t.focusDeny && re(e.denyButton) ? (e.denyButton.focus(),
          !0) : t.focusCancel && re(e.cancelButton) ? (e.cancelButton.focus(),
            !0) : !(!t.focusConfirm || !re(e.confirmButton) || (e.confirmButton.focus(),
              0))
        , fn = () => {
          document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        }
        ;
      function gn(e) {
        const t = L()
          , n = ve.innerParams.get(this);
        if (!t || z(t, n.hideClass.popup))
          return c("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        const o = {};
        Object.keys(e).forEach((t => {
          En.isUpdatableParameter(t) ? o[t] = e[t] : c(`Invalid parameter to update: "${t}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)
        }
        ));
        const a = Object.assign({}, n, o);
        Te(this, a),
          ve.innerParams.set(this, a),
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, e),
              writable: !1,
              enumerable: !0
            }
          })
      }
      function vn() {
        const e = ve.domCache.get(this)
          , t = ve.innerParams.get(this);
        t ? (e.popup && $e.swalCloseEventFinishedCallback && ($e.swalCloseEventFinishedCallback(),
          delete $e.swalCloseEventFinishedCallback),
          $e.deferDisposalTimer && (clearTimeout($e.deferDisposalTimer),
            delete $e.deferDisposalTimer),
          "function" == typeof t.didDestroy && t.didDestroy(),
          yn(this)) : bn(this)
      }
      const yn = e => {
        bn(e),
          delete e.params,
          delete $e.keydownHandler,
          delete $e.keydownTarget,
          delete $e.currentInstance
      }
        , bn = e => {
          e.isAwaitingPromise() ? (wn(ve, e),
            ve.awaitingPromise.set(e, !0)) : (wn(ft, e),
              wn(ve, e))
        }
        , wn = (e, t) => {
          for (const n in e)
            e[n].delete(t)
        }
        ;
      let _n;
      class Sn {
        constructor() {
          if ("undefined" == typeof window)
            return;
          _n = this;
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          const o = Object.freeze(this.constructor.argsToParams(t));
          Object.defineProperties(this, {
            params: {
              value: o,
              writable: !1,
              enumerable: !0,
              configurable: !0
            }
          });
          const a = this._main(this.params);
          ve.promise.set(this, a)
        }
        then(e) {
          return ve.promise.get(this).then(e)
        }
        finally(e) {
          return ve.promise.get(this).finally(e)
        }
      }
      Object.assign(Sn.prototype, a),
        Object.assign(Sn, o),
        Object.keys(a).forEach((e => {
          Sn[e] = function () {
            if (_n)
              return _n[e](...arguments)
          }
        }
        )),
        Sn.DismissReason = r,
        Sn.version = "11.1.9";
      const Ln = Sn;
      Ln.default = Ln;
      var En = Ln;
      const kn = {
        allowEscapeKey: !0,
        showConfirmButton: !1,
        showCloseButton: !0,
        closeButtonAriaLabel: "Закрыть диалог"
      }
        , An = function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            popup: "swal2-popup_error",
            title: "swal2-title_error",
            image: "swal2-image_error"
          };
          En.fire({
            ...kn,
            html: t,
            title: e,
            customClass: n
          })
        }
        , Cn = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            popup: "swal2-popup_success",
            title: "swal2-title_success",
            image: "swal2-image_success"
          }
            , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
          En.fire({
            ...kn,
            imageUrl: "/local/templates/beurer/assets/images/common/success.png",
            customClass: t,
            title: e,
            allowOutsideClick: n,
            timer: o
          })
        }
        , xn = function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!e)
            return console.error("url is null"),
              !1;
          En.fire({
            title: "Загрузка",
            showConfirmButton: !1,
            didOpen: () => {
              En.showLoading(),
                fetch(e).then((e => e.text())).then((e => t(e, n))).catch((e => {
                  console.error(e),
                    An("Произошла ошибка", e)
                }
                ))
            }
          })
        }
        , Tn = e => {
          e.target.classList.contains("js-close-popup") && document.querySelector(".swal2-close").dispatchEvent(new Event("click"))
        }
        , jn = e => e.style.display = ""
        , qn = e => e.style.display = "none"
        , Pn = () => window.matchMedia("only screen and (max-width: 1180px)").matches
        , On = () => window.matchMedia("only screen and (max-width: 767px)").matches
        , Mn = (e, t, n) => {
          t.forEach((t => e.addEventListener(t, n)))
        }
        , Dn = e => void 0 !== e && null != e
        , Bn = (e, t) => e !== window && (e.classList.contains(t) || null !== e.closest(`.${t}`))
        , Nn = (e, t) => {
          e && (e.disabled = !t)
        }
        ;
      n(3450),
        n(6731);
      var In = n(5382)
        , $n = n.n(In);
      const Vn = e => {
        $n()({
          mask: "+7 999 999 99 99",
          showMaskOnHover: !1,
          placeholder: " ",
          onBeforeMask: function (e) {
            return e.replace(/\D/g, "").replace(/^[^9]/g, "")
          }
        }).mask(e)
      }
        , Hn = new WeakMap;
      function Fn(e, t) {
        var n = Hn.get(e);
        if (n)
          return n.settings = t,
            n;
        this.form = e,
          this.settings = t,
          this.observer = null,
          Hn.set(e, this)
      }
      function Un(e) {
        var t;
        for (e.form && (t = Hn.get(e.form)); !t && e;)
          t = Hn.get(e),
            e = e.parentNode;
        return t || (t = Hn.get(window)),
          t
      }
      function Rn(e) {
        const t = Un(e);
        return Array.prototype.filter.call(e.elements, (e => !!(e.getAttribute("name") || t && t.settings.validateNameless)))
      }
      Fn.prototype = {
        destroy() {
          Hn.delete(this.form),
            this._destruct && this._destruct()
        }
      };
      const Wn = Object.create(null);
      function zn(e) {
        var t;
        const n = Array.prototype.slice.call(arguments, 1);
        var o;
        return e in Wn && (t = Wn[e].reduce((o = n,
          function (t, n) {
            const a = n.apply({
              state: t,
              hook: e
            }, o);
            return void 0 !== a ? a : t
          }
        ), t)),
          t
      }
      function Xn(e, t) {
        var n = t
          , o = Array.prototype.slice.call(arguments, 1);
        return e in Wn && (n = Wn[e].reduce((function (t, n) {
          o[0] = t;
          const a = n.apply({
            state: t,
            hook: e
          }, o);
          return void 0 !== a ? a : t
        }
        ), n)),
          n
      }
      if (!function () {
        const e = document.createEvent("Event");
        return e.initEvent("foo", !0, !0),
          e.preventDefault(),
          e.defaultPrevented
      }()) {
        const e = window.Event.prototype.preventDefault;
        window.Event.prototype.preventDefault = function () {
          this.cancelable && (e.call(this),
            Object.defineProperty(this, "defaultPrevented", {
              get: function () {
                return !0
              },
              configurable: !0
            }))
        }
      }
      function Yn(e) {
        let { bubbles: t = !0, cancelable: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const o = document.createEvent("Event");
        return o.initEvent(e, t, n),
          o
      }
      function Zn(e, t) {
        let { bubbles: n = !0, cancelable: o = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        t instanceof window.Event || (t = Yn(t, {
          bubbles: n,
          cancelable: o
        }));
        for (let e in a)
          a.hasOwnProperty(e) && (t[e] = a[e]);
        return e.dispatchEvent(t),
          t
      }
      const Kn = ["datetime", "date", "month", "week", "time"]
        , Qn = Kn.concat(["number", "range"], "datetime-local")
        , Jn = ["email", "url"]
        , Gn = ["email", "date", "month", "week", "time", "datetime", "datetime-local", "number", "range", "color"]
        , eo = ["text", "search", "tel", "password"].concat(Jn)
        , to = ["checkbox", "color", "file", "image", "radio", "submit"].concat(Qn, eo)
        , no = ["button", "hidden", "reset"].concat(to)
        , oo = ["select-one", "select-multiple", "textarea"];
      function ao(e) {
        if (e instanceof window.HTMLTextAreaElement)
          return "textarea";
        if (e instanceof window.HTMLSelectElement)
          return e.hasAttribute("multiple") ? "select-multiple" : "select-one";
        if (e instanceof window.HTMLButtonElement)
          return (e.getAttribute("type") || "submit").toLowerCase();
        if (e instanceof window.HTMLInputElement) {
          const t = (e.getAttribute("type") || "").toLowerCase();
          return t && no.indexOf(t) > -1 ? t : e.type || "text"
        }
        return ""
      }
      function ro(e) {
        const t = Xn("is_validation_candidate", null, e);
        if (null !== t)
          return !!t;
        if (e instanceof window.HTMLSelectElement || e instanceof window.HTMLTextAreaElement || e instanceof window.HTMLButtonElement || e instanceof window.HTMLInputElement) {
          const t = ao(e);
          if ((oo.indexOf(t) > -1 || to.indexOf(t) > -1) && !e.hasAttribute("disabled") && !e.hasAttribute("readonly")) {
            const t = Un(e);
            if ((t && !t.settings.novalidateOnElements || !e.hasAttribute("novalidate") && !e.noValidate) && !function (e) {
              let t = e.parentNode;
              for (; t && 1 === t.nodeType;) {
                if (t instanceof window.HTMLFieldSetElement && t.hasAttribute("disabled"))
                  return !0;
                if ("DATALIST" === t.nodeName.toUpperCase())
                  return !0;
                if (t === e.form)
                  break;
                t = t.parentNode
              }
              return !1
            }(e))
              return !0
          }
        }
        return !1
      }
      function so(e) {
        return ["object", "function"].indexOf(typeof e) > -1 && (delete e.__hyperform,
          Object.defineProperty(e, "__hyperform", {
            configurable: !0,
            enumerable: !1,
            value: !0
          })),
          e
      }
      function io(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        switch (t) {
          case "date":
            return (e.toLocaleDateString || e.toDateString).call(e);
          case "time":
            return (e.toLocaleTimeString || e.toTimeString).call(e);
          case "month":
            return "toLocaleDateString" in e ? e.toLocaleDateString(void 0, {
              year: "numeric",
              month: "2-digit"
            }) : e.toDateString();
          default:
            return (e.toLocaleString || e.toString).call(e)
        }
      }
      function co(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        const a = n.length;
        var r = 0;
        return e.replace(/%([0-9]+\$)?([sl])/g, ((e, t, o) => {
          var s = r;
          t && (s = Number(t.replace(/\$$/, "")) - 1),
            r += 1;
          var i = "";
          return a > s && (i = n[s]),
            (i instanceof Date || "number" == typeof i || i instanceof Number) && (i = "l" === o ? (i.toLocaleString || i.toString).call(i) : i.toString()),
            i
        }
        ))
      }
      function lo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        for (var n = e + ""; n.length < t;)
          n = "0" + n;
        return n
      }
      function uo(e, t) {
        if (!(e instanceof Date))
          return null;
        switch (t) {
          case "datetime":
            return uo(e, "date") + "T" + uo(e, "time");
          case "datetime-local":
            return co("%s-%s-%sT%s:%s:%s.%s", e.getFullYear(), lo(e.getMonth() + 1), lo(e.getDate()), lo(e.getHours()), lo(e.getMinutes()), lo(e.getSeconds()), lo(e.getMilliseconds(), 3)).replace(/(:00)?\.000$/, "");
          case "date":
            return co("%s-%s-%s", e.getUTCFullYear(), lo(e.getUTCMonth() + 1), lo(e.getUTCDate()));
          case "month":
            return co("%s-%s", e.getUTCFullYear(), lo(e.getUTCMonth() + 1));
          case "week":
            {
              const t = function (e) {
                (e = new Date(+e)).setUTCHours(0, 0, 0),
                  e.setUTCDate(e.getUTCDate() + 4 - (e.getUTCDay() || 7));
                const t = new Date(e.getUTCFullYear(), 0, 1)
                  , n = Math.ceil(((e - t) / 864e5 + 1) / 7);
                return [e.getUTCFullYear(), n]
              }(e);
              return co.call(null, "%s-W%s", t[0], lo(t[1]))
            }
          case "time":
            return co("%s:%s:%s.%s", lo(e.getUTCHours()), lo(e.getUTCMinutes()), lo(e.getUTCSeconds()), lo(e.getUTCMilliseconds(), 3)).replace(/(:00)?\.000$/, "")
        }
        return null
      }
      function mo(e, t) {
        let n;
        switch (t) {
          case "datetime":
            return /^([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(e) ? (n = new Date(e + "z"),
              isNaN(n.valueOf()) ? null : n) : null;
          case "date":
            return /^([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(e) ? (n = new Date(e),
              isNaN(n.valueOf()) ? null : n) : null;
          case "month":
            return /^([0-9]{4})-(0[1-9]|1[012])$/.test(e) ? (n = new Date(e),
              isNaN(n.valueOf()) ? null : n) : null;
          case "week":
            return /^([0-9]{4})-W(0[1-9]|[1234][0-9]|5[0-3])$/.test(e) ? function (e, t) {
              const n = new Date(Date.UTC(t, 0, 1 + 7 * (e - 1)));
              return n.getUTCDay() <= 4 ? n.setUTCDate(n.getUTCDate() - n.getUTCDay() + 1) : n.setUTCDate(n.getUTCDate() + 8 - n.getUTCDay()),
                n
            }(Number(RegExp.$2), Number(RegExp.$1)) : null;
          case "time":
            return /^([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(e) ? (n = new Date("1970-01-01T" + e + "z"),
              n) : null
        }
        return null
      }
      function po(e, t) {
        const n = mo(e, t);
        return null !== n ? +n : Number(e)
      }
      const ho = {
        en: {
          TextTooLong: "Please shorten this text to %l characters or less (you are currently using %l characters).",
          ValueMissing: "Please fill out this field.",
          CheckboxMissing: "Please check this box if you want to proceed.",
          RadioMissing: "Please select one of these options.",
          FileMissing: "Please select a file.",
          SelectMissing: "Please select an item in the list.",
          InvalidEmail: "Please enter an email address.",
          InvalidURL: "Please enter a URL.",
          PatternMismatch: "Please match the requested format.",
          PatternMismatchWithTitle: "Please match the requested format: %l.",
          NumberRangeOverflow: "Please select a value that is no more than %l.",
          DateRangeOverflow: "Please select a value that is no later than %l.",
          TimeRangeOverflow: "Please select a value that is no later than %l.",
          NumberRangeUnderflow: "Please select a value that is no less than %l.",
          DateRangeUnderflow: "Please select a value that is no earlier than %l.",
          TimeRangeUnderflow: "Please select a value that is no earlier than %l.",
          StepMismatch: "Please select a valid value. The two nearest valid values are %l and %l.",
          StepMismatchOneValue: "Please select a valid value. The nearest valid value is %l.",
          BadInputNumber: "Please enter a number."
        }
      };
      var fo = "en"
        , go = "en";
      function vo(e, t) {
        e in ho || (ho[e] = {});
        for (let n in t)
          t.hasOwnProperty(n) && (ho[e][n] = t[n])
      }
      function yo(e) {
        return fo in ho && e in ho[fo] ? ho[fo][e] : go in ho && e in ho[go] ? ho[go][e] : e in ho.en ? ho.en[e] : e
      }
      const bo = {
        "datetime-local": 60,
        datetime: 60,
        time: 60
      }
        , wo = {
          "datetime-local": 1e3,
          datetime: 1e3,
          date: 864e5,
          week: 6048e5,
          time: 1e3
        }
        , _o = {
          week: -2592e5
        }
        , So = {
          range: 0
        }
        , Lo = {
          range: 100
        };
      function Eo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const n = ao(e)
          , o = e.getAttribute("min");
        let a = So[n] || NaN;
        if (o) {
          const e = po(o, n);
          isNaN(e) || (a = e)
        }
        const r = e.getAttribute("max");
        let s = Lo[n] || NaN;
        if (r) {
          const e = po(r, n);
          isNaN(e) || (s = e)
        }
        const i = e.getAttribute("step");
        let c = bo[n] || 1;
        if (i && "any" === i.toLowerCase())
          return [yo("any value"), yo("any value")];
        if (i) {
          const e = po(i, n);
          isNaN(e) || (c = e)
        }
        const l = po(e.getAttribute("value"), n)
          , u = po(e.value || e.getAttribute("value"), n);
        if (isNaN(u))
          return [yo("any valid value"), yo("any valid value")];
        const d = isNaN(a) ? isNaN(l) ? _o[n] || 0 : l : a
          , m = wo[n] || 1;
        var p = d + Math.floor((u - d) / (c * m)) * (c * m) * t
          , h = d + (Math.floor((u - d) / (c * m)) + 1) * (c * m) * t;
        return p < a ? p = null : p > s && (p = s),
          h > s ? h = null : h < a && (h = a),
          Kn.indexOf(n) > -1 && (p = uo(new Date(p), n),
            h = uo(new Date(h), n)),
          [p, h]
      }
      function ko(e) {
        return e.match(/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g).length
      }
      const Ao = new WeakMap
        , Co = {
          set(e, t, n) {
            const o = Ao.get(e) || {};
            return o[t] = n,
              Ao.set(e, o),
              Co
          },
          get(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            const o = Ao.get(e);
            if (void 0 === o || !(t in o)) {
              const o = "data-" + t.replace(/[A-Z]/g, "-$&").toLowerCase();
              return e.hasAttribute(o) ? e.getAttribute(o) : n
            }
            return o[t]
          },
          delete(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!t)
              return Ao.delete(e);
            const n = Ao.get(e) || {};
            return t in n && (delete n[t],
              Ao.set(e, n),
              !0)
          }
        };
      var xo = Co;
      const To = new WeakMap
        , jo = {
          set(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (e instanceof window.HTMLFieldSetElement) {
              const t = Un(e);
              if (t && !t.settings.extendFieldset)
                return jo
            }
            return "string" == typeof t && (t = new String(t)),
              n && (t.is_custom = !0),
              so(t),
              To.set(e, t),
              "_original_setCustomValidity" in e && e._original_setCustomValidity(t.toString()),
              jo
          },
          get(e) {
            var t = To.get(e);
            return void 0 === t && "_original_validationMessage" in e && (t = new String(e._original_validationMessage)),
              t || new String("")
          },
          delete(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            "_original_setCustomValidity" in e && e._original_setCustomValidity("");
            var n = To.get(e);
            return !(n && t && !n.is_custom) && To.delete(e)
          }
        }
        , qo = new WeakMap
        , Po = {
          set(e, t) {
            const n = qo.get(e) || [];
            return n.push(t),
              qo.set(e, n),
              Po
          },
          get: e => qo.get(e) || [],
          delete: e => qo.delete(e)
        };
      var Oo = Po;
      function Mo(e) {
        return e.form ? Array.prototype.filter.call(e.form.elements, (t => "radio" === t.type && t.name === e.name)) : [e]
      }
      const Do = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function Bo(e) {
        return e.replace(Do, "")
      }
      function No(e) {
        return e.split(",").map((e => Bo(e))).filter((e => e))
      }
      var Io;
      const $o = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      function Vo(e, t) {
        return n => {
          const o = !e(n);
          return o && t(n),
            o
        }
      }
      function Ho(e, t, n) {
        jo.set(e, xo.get(e, t, n))
      }
      const Fo = Vo((function (e) {
        const t = ao(e);
        if (-1 === Gn.indexOf(t))
          return !0;
        if (!e.value)
          return !("_original_validity" in e && !e._original_validity.__hyperform && e._original_validity.badInput);
        var n = !0;
        switch (t) {
          case "color":
            n = /^#[a-f0-9]{6}$/.test(e.value);
            break;
          case "number":
          case "range":
            n = !isNaN(Number(e.value));
            break;
          case "datetime":
          case "date":
          case "month":
          case "week":
          case "time":
            n = null !== mo(e.value, t);
            break;
          case "datetime-local":
            n = /^([0-9]{4,})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(e.value)
        }
        return n
      }
      ), (e => Ho(e, "badInput", yo("Please match the requested type."))));
      function Uo(e) {
        if (e.__hf_custom_validation_running) {
          const t = jo.get(e);
          return t && t.is_custom
        }
        const t = Oo.get(e)
          , n = t.length;
        var o = !0;
        if (n) {
          e.__hf_custom_validation_running = !0;
          for (let a = 0; a < n; a++) {
            const n = t[a](e);
            if (void 0 !== n && !n) {
              o = !1;
              break
            }
          }
          delete e.__hf_custom_validation_running
        }
        if (o) {
          const t = jo.get(e);
          o = !(t.toString() && "is_custom" in t)
        }
        return !o
      }
      const Ro = Vo((function (e) {
        return !e.value || !e.hasAttribute("pattern") || new RegExp("^(?:" + e.getAttribute("pattern") + ")$").test(e.value)
      }
      ), (e => {
        Ho(e, "patternMismatch", e.title ? co(yo("PatternMismatchWithTitle"), e.title) : yo("PatternMismatch"))
      }
      ))
        , Wo = Vo((function (e) {
          const t = ao(e);
          if (!e.value || !e.hasAttribute("max"))
            return !0;
          let n, o;
          return Kn.indexOf(t) > -1 ? (n = mo(e.value, t),
            n = null === n ? NaN : +n,
            o = mo(e.getAttribute("max"), t),
            o = null === o ? NaN : +o) : (n = Number(e.value),
              o = Number(e.getAttribute("max"))),
            isNaN(o) || isNaN(n) || n <= o
        }
        ), (e => {
          const t = ao(e)
            , n = Un(e)
            , o = n && n.settings.classes.outOfRange || "hf-out-of-range"
            , a = n && n.settings.classes.inRange || "hf-in-range";
          let r;
          switch (t) {
            case "date":
            case "datetime":
            case "datetime-local":
              r = co(yo("DateRangeOverflow"), io(mo(e.getAttribute("max"), t), t));
              break;
            case "time":
              r = co(yo("TimeRangeOverflow"), io(mo(e.getAttribute("max"), t), t));
              break;
            default:
              r = co(yo("NumberRangeOverflow"), po(e.getAttribute("max"), t))
          }
          Ho(e, "rangeOverflow", r),
            e.classList.add(o),
            e.classList.remove(a)
        }
        ))
        , zo = Vo((function (e) {
          const t = ao(e);
          if (!e.value || !e.hasAttribute("min"))
            return !0;
          let n, o;
          return Kn.indexOf(t) > -1 ? (n = mo(e.value, t),
            n = null === n ? NaN : +n,
            o = mo(e.getAttribute("min"), t),
            o = null === o ? NaN : +o) : (n = Number(e.value),
              o = Number(e.getAttribute("min"))),
            isNaN(o) || isNaN(n) || n >= o
        }
        ), (e => {
          const t = ao(e)
            , n = Un(e)
            , o = n && n.settings.classes.outOfRange || "hf-out-of-range"
            , a = n && n.settings.classes.inRange || "hf-in-range";
          let r;
          switch (t) {
            case "date":
            case "datetime":
            case "datetime-local":
              r = co(yo("DateRangeUnderflow"), io(mo(e.getAttribute("min"), t), t));
              break;
            case "time":
              r = co(yo("TimeRangeUnderflow"), io(mo(e.getAttribute("min"), t), t));
              break;
            default:
              r = co(yo("NumberRangeUnderflow"), po(e.getAttribute("min"), t))
          }
          Ho(e, "rangeUnderflow", r),
            e.classList.add(o),
            e.classList.remove(a)
        }
        ))
        , Xo = Vo((function (e) {
          const t = ao(e);
          if (!e.value || -1 === Qn.indexOf(t) || "any" === (e.getAttribute("step") || "").toLowerCase())
            return !0;
          let n = e.getAttribute("step");
          if (n = n ? po(n, t) : bo[t] || 1,
            n <= 0 || isNaN(n))
            return !0;
          const o = wo[t] || 1;
          let a = po(e.value, t)
            , r = po(e.getAttribute("min") || e.getAttribute("value") || "", t);
          if (isNaN(a))
            return !0;
          isNaN(r) && (r = _o[t] || 0),
            "month" === t && (r = 12 * new Date(r).getUTCFullYear() + new Date(r).getUTCMonth(),
              a = 12 * new Date(a).getUTCFullYear() + new Date(a).getUTCMonth());
          const s = Math.abs(r - a) % (n * o);
          return s < 1e-8 || s > n * o - 1e-8
        }
        ), (e => {
          const t = Eo(e)
            , n = t[0]
            , o = t[1];
          let a, r = !1;
          null === n ? r = o : null === o && (r = n),
            a = !1 !== r ? co(yo("StepMismatchOneValue"), r) : co(yo("StepMismatch"), n, o),
            Ho(e, "stepMismatch", a)
        }
        ))
        , Yo = Vo((function (e) {
          if (!e.value || -1 === eo.indexOf(ao(e)) || !e.hasAttribute("maxlength") || !e.getAttribute("maxlength"))
            return !0;
          const t = parseInt(e.getAttribute("maxlength"), 10);
          return !!(isNaN(t) || t < 0) || ko(e.value) <= t
        }
        ), (e => {
          Ho(e, "tooLong", co(yo("TextTooLong"), e.getAttribute("maxlength"), ko(e.value)))
        }
        ))
        , Zo = Vo((function (e) {
          if (!e.value || -1 === eo.indexOf(ao(e)) || !e.hasAttribute("minlength") || !e.getAttribute("minlength"))
            return !0;
          const t = parseInt(e.getAttribute("minlength"), 10);
          return !!(isNaN(t) || t < 0) || ko(e.value) >= t
        }
        ), (e => {
          var t;
          Ho(e, "tooShort", co(`Пожалуйста, увеличьте этот текст на ${t = e.getAttribute("minlength") - ko(e.value)} ${((e, t) => {
            letn = (e = Math.abs(e) % 100) % 10;
            return e > 10 && e < 20 ? t[2] : n > 1 && n < 5 ? t[1] : 1 == n ? t[0] : t[2]
          }
          )(t, ["символ", "символа", "символов"])} или более`, e.getAttribute("minlength"), ko(e.value)))
        }
        ))
        , Ko = Vo((function (e) {
          const t = ao(e);
          if ("file" !== t && !e.value || "file" !== t && -1 === Jn.indexOf(t))
            return !0;
          var n = !0;
          switch (t) {
            case "url":
              {
                Io || (Io = document.createElement("a"));
                const t = Bo(e.value);
                Io.href = t,
                  n = Io.href === t || Io.href === t + "/";
                break
              }
            case "email":
              n = e.hasAttribute("multiple") ? No(e.value).every((e => $o.test(e))) : $o.test(Bo(e.value));
              break;
            case "file":
              if ("files" in e && e.files.length && e.hasAttribute("accept")) {
                const t = No(e.getAttribute("accept")).map((e => (/^(audio|video|image)\/\*$/.test(e) && (e = new RegExp("^" + RegExp.$1 + "/.+$")),
                  e)));
                if (!t.length)
                  break;
                e: for (let o = 0; o < e.files.length; o++) {
                  let a = !1;
                  t: for (let n = 0; n < t.length; n++) {
                    const r = e.files[o]
                      , s = t[n];
                    let i = r.type;
                    if ("string" == typeof s && "." === s.substr(0, 1)) {
                      if (-1 === r.name.search("."))
                        continue t;
                      i = r.name.substr(r.name.lastIndexOf("."))
                    }
                    if (0 === i.search(s)) {
                      a = !0;
                      break t
                    }
                  }
                  if (!a) {
                    n = !1;
                    break e
                  }
                }
              }
          }
          return n
        }
        ), (e => {
          let t = yo("Please use the appropriate format.");
          const n = ao(e);
          "email" === n ? t = e.hasAttribute("multiple") ? yo("Please enter a comma separated list of email addresses.") : yo("InvalidEmail") : "url" === n ? t = yo("InvalidURL") : "file" === n && (t = yo("Please select a file of the correct type.")),
            Ho(e, "typeMismatch", t)
        }
        ))
        , Qo = Vo((function (e) {
          if ("radio" === e.type) {
            if (e.hasAttribute("required") && e.checked)
              return !0;
            const t = Mo(e);
            return !t.some((e => e.hasAttribute("required"))) || t.some((e => e.checked))
          }
          return !e.hasAttribute("required") || (e instanceof window.HTMLSelectElement ? function (e) {
            const t = !e.multiple && e.size <= 1 && e.options.length > 0 && e.options[0].parentNode == e && "" === e.options[0].value;
            return e.selectedIndex > -1 && Array.prototype.some.call(e.options, (e => (!t || 0 !== e.index) && !e.disabled && e.selected))
          }(e) : "checkbox" === e.type ? e.checked : !!e.value)
        }
        ), (e => {
          let t = yo("ValueMissing");
          const n = ao(e);
          "checkbox" === n ? t = yo("CheckboxMissing") : "radio" === n ? t = yo("RadioMissing") : "file" === n ? t = e.hasAttribute("multiple") ? yo("Please select one or more files.") : yo("FileMissing") : e instanceof window.HTMLSelectElement && (t = yo("SelectMissing")),
            Ho(e, "valueMissing", t)
        }
        ));
      var Jo = {
        badInput: Fo,
        customError: Uo,
        patternMismatch: Ro,
        rangeOverflow: Wo,
        rangeUnderflow: zo,
        stepMismatch: Xo,
        tooLong: Yo,
        tooShort: Zo,
        typeMismatch: Ko,
        valueMissing: Qo,
        valid: e => {
          const t = Un(e)
            , n = t && t.settings.classes.valid || "hf-valid"
            , o = t && t.settings.classes.invalid || "hf-invalid"
            , a = t && t.settings.classes.userInvalid || "hf-user-invalid"
            , r = t && t.settings.classes.userValid || "hf-user-valid"
            , s = t && t.settings.classes.inRange || "hf-in-range"
            , i = t && t.settings.classes.outOfRange || "hf-out-of-range"
            , c = t && t.settings.classes.validated || "hf-validated";
          e.classList.add(c);
          for (let t of [Fo, Uo, Ro, Wo, zo, Xo, Yo, Zo, Ko, Qo])
            if (t(e))
              return e.classList.add(o),
                e.classList.remove(n),
                e.classList.remove(r),
                ("checkbox" === e.type || "radio" === e.type) && e.checked !== e.defaultChecked || e.value !== e.defaultValue ? e.classList.add(a) : e.classList.remove(a),
                e.setAttribute("aria-invalid", "true"),
                !1;
          return jo.delete(e),
            e.classList.remove(o),
            e.classList.remove(a),
            e.classList.remove(i),
            e.classList.add(n),
            e.classList.add(s),
            e.value !== e.defaultValue ? e.classList.add(r) : e.classList.remove(r),
            e.setAttribute("aria-invalid", "false"),
            !0
        }
      };
      const Go = function (e) {
        if (!(e instanceof window.HTMLElement))
          throw new Error("cannot create a ValidityState for a non-element");
        return Go.cache.get(e) || (this instanceof Go ? (this.element = e,
          void Go.cache.set(e, this)) : new Go(e))
      }
        , ea = {};
      Go.prototype = ea,
        Go.cache = new WeakMap;
      const ta = (e, t) => function () {
        return ro(this.element) ? t(this.element) : "valid" === e
      }
        ;
      for (let e in Jo)
        Object.defineProperty(ea, e, {
          configurable: !0,
          enumerable: !0,
          get: ta(e, Jo[e]),
          set: void 0
        });
      so(ea);
      var na = Go;
      const oa = (aa = "checkValidity",
        ra = function (e) {
          if (e instanceof window.HTMLFormElement)
            return Rn(e).map(oa).every((e => e));
          const t = na(e).valid;
          if (t) {
            const t = Un(e);
            t && t.settings.validEvent && Zn(e, "valid")
          } else
            Zn(e, "invalid", {
              cancelable: !0
            });
          return t
        }
        ,
        function () {
          const e = zn(aa, Array.prototype.slice.call(arguments));
          return void 0 !== e ? e : ra.apply(this, arguments)
        }
      );
      var aa, ra, sa = oa, ia = 0;
      function ca() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "hf_";
        return e + ia++ + Math.random().toString(36).substr(2)
      }
      const la = new WeakMap
        , ua = {
          attachWarning: function (e, t) {
            t.parentNode.insertBefore(e, t.nextSibling)
          },
          detachWarning: function (e, t) {
            e.parentNode && e.parentNode.removeChild(e)
          },
          showWarning: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t && "radio" === e.type && Mo(e)[0] !== e)
              return;
            const n = jo.get(e).toString();
            var o = la.get(e);
            if (n) {
              if (!o) {
                const t = Un(e);
                (o = document.createElement("div")).className = t && t.settings.classes.warning || "hf-warning",
                  o.id = ca(),
                  o.setAttribute("aria-live", "polite"),
                  la.set(e, o)
              }
              e.setAttribute("aria-errormessage", o.id),
                e.hasAttribute("aria-describedby") || e.setAttribute("aria-describedby", o.id),
                da.setMessage(o, n, e),
                da.attachWarning(o, e)
            } else
              o && o.parentNode && (e.getAttribute("aria-describedby") === o.id && e.removeAttribute("aria-describedby"),
                e.removeAttribute("aria-errormessage"),
                da.detachWarning(o, e))
          },
          setMessage: function (e, t, n) {
            e.textContent = t
          }
        }
        , da = {
          attachWarning: ua.attachWarning,
          detachWarning: ua.detachWarning,
          showWarning: ua.showWarning,
          setMessage: ua.setMessage,
          set: function (e, t) {
            t || (t = ua[e]),
              da[e] = t
          },
          getWarning: e => la.get(e)
        };
      var ma = da;
      function pa(e) {
        if (e instanceof window.HTMLFormElement) {
          e.__hf_form_validation = !0;
          const t = Rn(e).map(pa).every((e => e));
          return delete e.__hf_form_validation,
            t
        }
        const t = na(e).valid;
        var n;
        if (t) {
          const t = Un(e);
          t && t.settings.validEvent && (n = Zn(e, "valid", {
            cancelable: !0
          }))
        } else
          n = Zn(e, "invalid", {
            cancelable: !0
          });
        return n && n.defaultPrevented || ma.showWarning(e, e.form && e.form.__hf_form_validation),
          t
      }
      function ha(e, t) {
        t ? jo.set(e, t, !0) : jo.delete(e, !0);
        const n = ma.getWarning(e);
        n && ma.setMessage(n, t, e),
          Jo.valid(e)
      }
      function fa(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        const n = ao(e);
        if (Kn.indexOf(n) > -1) {
          if (void 0 !== t) {
            if (null === t)
              e.value = "";
            else {
              if (!(t instanceof Date))
                throw new window.DOMException("valueAsDate setter encountered invalid value", "TypeError");
              isNaN(t.getTime()) ? e.value = "" : e.value = uo(t, n)
            }
            return
          }
          const o = mo(e.value, n);
          return o instanceof Date ? o : null
        }
        if (void 0 !== t)
          throw new window.DOMException("valueAsDate setter cannot set date on this element", "InvalidStateError");
        return null
      }
      function ga(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        const n = ao(e);
        if (Qn.indexOf(n) > -1) {
          if ("range" === n && e.hasAttribute("multiple"))
            return NaN;
          if (void 0 !== t) {
            if (isNaN(t))
              e.value = "";
            else {
              if ("number" != typeof t || !window.isFinite(t))
                throw new window.DOMException("valueAsNumber setter encountered invalid value", "TypeError");
              try {
                fa(e, new Date(t))
              } catch (n) {
                if (!(n instanceof window.DOMException))
                  throw n;
                e.value = t.toString()
              }
            }
            return
          }
          return po(e.value, n)
        }
        if (void 0 !== t)
          throw new window.DOMException("valueAsNumber setter cannot set number on this element", "InvalidStateError");
        return NaN
      }
      function va(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (-1 === Qn.indexOf(ao(e)))
          throw new window.DOMException("stepDown encountered invalid type", "InvalidStateError");
        if ("any" === (e.getAttribute("step") || "").toLowerCase())
          throw new window.DOMException('stepDown encountered step "any"', "InvalidStateError");
        const n = Eo(e, t)[0];
        null !== n && ga(e, n)
      }
      function ya(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (-1 === Qn.indexOf(ao(e)))
          throw new window.DOMException("stepUp encountered invalid type", "InvalidStateError");
        if ("any" === (e.getAttribute("step") || "").toLowerCase())
          throw new window.DOMException('stepUp encountered step "any"', "InvalidStateError");
        const n = Eo(e, t)[1];
        null !== n && ga(e, n)
      }
      function ba(e) {
        const t = jo.get(e);
        return t ? t.toString() : ""
      }
      function wa(e) {
        return ro(e)
      }
      const _a = window.Element.prototype
        , Sa = _a.matches || _a.matchesSelector || _a.msMatchesSelector || _a.webkitMatchesSelector;
      function La(e) {
        var t, n = Yn("submit", {
          cancelable: !0
        });
        n.preventDefault(),
          Object.defineProperty(n, "defaultPrevented", {
            value: !1,
            writable: !0
          }),
          Object.defineProperty(n, "preventDefault", {
            value: () => n.defaultPrevented = t = !0,
            writable: !0
          }),
          Zn(e.form, n, {}, {
            submittedVia: e
          }),
          t || (function (e) {
            if (["image", "submit"].indexOf(e.type) > -1 && e.name) {
              const n = Un(e.form) || {};
              var t = n.submit_helper;
              t ? t.parentNode && t.parentNode.removeChild(t) : ((t = document.createElement("input")).type = "hidden",
                n.submit_helper = t),
                t.name = e.name,
                t.value = e.value,
                e.form.appendChild(t)
            }
          }(e),
            window.HTMLFormElement.prototype.submit.call(e.form),
            window.setTimeout((() => function (e) {
              if (["image", "submit"].indexOf(e.type) > -1 && e.name) {
                const t = (Un(e.form) || {}).submit_helper;
                t && t.parentNode && t.parentNode.removeChild(t)
              }
            }(e))))
      }
      function Ea(e) {
        if (!Zn(e.form, "validate", {
          cancelable: !0
        }).defaultPrevented) {
          var t, n = !0;
          e.form.__hf_form_validation = !0,
            Rn(e.form).map((e => {
              pa(e) || (n = !1,
                !t && "focus" in e && (t = e))
            }
            )),
            delete e.form.__hf_form_validation,
            n ? La(e) : t && (t.focus(),
              Zn(e.form, "forminvalid"))
        }
      }
      function ka(e) {
        return !("INPUT" !== e.nodeName && "BUTTON" !== e.nodeName || "image" !== e.type && "submit" !== e.type)
      }
      function Aa(e, t) {
        return !e.defaultPrevented && (!("button" in e) || e.button < 2) && ka(t) && t.form && !t.form.hasAttribute("novalidate")
      }
      function Ca(e) {
        return ka(e) ? e : function (e, t) {
          return Sa.call(e, 'button:not([type]) *, button[type="submit"] *')
        }(e) ? Ca(e.parentNode) : null
      }
      function xa() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
          const n = Ca(t.target);
          n && Aa(t, n) && (t.preventDefault(),
            e || n.hasAttribute("formnovalidate") ? La(n) : Ea(n))
        }
      }
      const Ta = xa()
        , ja = xa(!0);
      function qa(e) {
        return function (t) {
          if (function (e) {
            return !e.defaultPrevented && (13 === e.keyCode && "INPUT" === e.target.nodeName && eo.indexOf(e.target.type) > -1 || (13 === e.keyCode || 32 === e.keyCode) && ka(e.target)) && e.target.form && !e.target.form.hasAttribute("novalidate")
          }(t)) {
            if (t.preventDefault(),
              (Un(t.target.form) || {
                settings: {}
              }).settings.preventImplicitSubmit)
              return;
            const o = t.target.form.elements.length;
            var n;
            for (let e = 0; e < o; e++)
              if (["image", "submit"].indexOf(t.target.form.elements[e].type) > -1) {
                n = t.target.form.elements[e];
                break
              }
            if (Zn(t.target.form, "implicit_submit", {
              cancelable: !0
            }, {
              trigger: t.target,
              submittedVia: n || t.target
            }).defaultPrevented)
              return;
            n ? n.click() : e ? La(t.target) : Ea(t.target)
          }
        }
      }
      const Pa = qa()
        , Oa = qa(!0);
      function Ma(e, t, n) {
        n.configurable = !0,
          n.enumerable = !0,
          "value" in n && (n.writable = !0);
        let o = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === o && (o = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t)),
          o) {
          if (!1 === o.configurable) {
            const n = Un(e);
            return n && n.settings.debug && console.log("[hyperform] cannot install custom property " + t),
              !1
          }
          if (o.get && o.get.__hyperform || o.value && o.value.__hyperform)
            return;
          Object.defineProperty(e, "_original_" + t, o)
        }
        return delete e[t],
          Object.defineProperty(e, t, n),
          !0
      }
      function Da(e) {
        return e instanceof window.HTMLButtonElement || e instanceof window.HTMLInputElement || e instanceof window.HTMLSelectElement || e instanceof window.HTMLTextAreaElement || e instanceof window.HTMLFieldSetElement || e === window.HTMLButtonElement.prototype || e === window.HTMLInputElement.prototype || e === window.HTMLSelectElement.prototype || e === window.HTMLTextAreaElement.prototype || e === window.HTMLFieldSetElement.prototype
      }
      function Ba(e, t) {
        try {
          delete e[t]
        } catch (n) {
          const o = Un(e);
          return o && o.settings.debug && console.log("[hyperform] cannot uninstall custom property " + t),
            !1
        }
        const n = Object.getOwnPropertyDescriptor(e, "_original_" + t);
        n && Object.defineProperty(e, t, n)
      }
      const Na = e => function () {
        return Xn("attr_get_" + e, this.getAttribute(e), this)
      }
        , Ia = e => function (t) {
          this.setAttribute(e, Xn("attr_set_" + e, t, this))
        }
        , $a = e => function () {
          return Xn("attr_get_" + e, this.hasAttribute(e), this)
        }
        , Va = e => function (t) {
          Xn("attr_set_" + e, t, this) ? this.setAttribute(e, e) : this.removeAttribute(e)
        }
        , Ha = e => function () {
          return Xn("attr_get_" + e, Math.max(0, Number(this.getAttribute(e))), this)
        }
        , Fa = e => function (t) {
          t = Xn("attr_set_" + e, t, this),
            /^[0-9]+$/.test(t) && this.setAttribute(e, t)
        }
        , Ua = {
          checkValidity: {
            value: so((function () {
              return sa(this)
            }
            ))
          },
          reportValidity: {
            value: so((function () {
              return pa(this)
            }
            ))
          },
          setCustomValidity: {
            value: so((function (e) {
              return ha(this, e)
            }
            ))
          },
          stepDown: {
            value: so((function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
              return va(this, e)
            }
            ))
          },
          stepUp: {
            value: so((function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
              return ya(this, e)
            }
            ))
          },
          validationMessage: {
            get: so((function () {
              return ba(this)
            }
            ))
          },
          validity: {
            get: so((function () {
              return na(this)
            }
            ))
          },
          valueAsDate: {
            get: so((function () {
              return fa(this)
            }
            )),
            set: so((function (e) {
              fa(this, e)
            }
            ))
          },
          valueAsNumber: {
            get: so((function () {
              return ga(this)
            }
            )),
            set: so((function (e) {
              ga(this, e)
            }
            ))
          },
          willValidate: {
            get: so((function () {
              return wa(this)
            }
            ))
          }
        };
      function Ra(e) {
        if (Da(e)) {
          for (let t in Ua)
            Ma(e, t, Ua[t]);
          !function (e) {
            for (let t of ["accept", "max", "min", "pattern", "placeholder", "step"])
              Ma(e, t, {
                get: Na(t),
                set: Ia(t)
              });
            for (let t of ["multiple", "required", "readOnly"])
              Ma(e, t, {
                get: $a(t.toLowerCase()),
                set: Va(t.toLowerCase())
              });
            for (let t of ["minLength", "maxLength"])
              Ma(e, t, {
                get: Ha(t.toLowerCase()),
                set: Fa(t.toLowerCase())
              })
          }(e)
        } else
          (e instanceof window.HTMLFormElement || e === window.HTMLFormElement.prototype) && (Ma(e, "checkValidity", Ua.checkValidity),
            Ma(e, "reportValidity", Ua.reportValidity))
      }
      function Wa(e) {
        Da(e) ? (Ba(e, "checkValidity"),
          Ba(e, "reportValidity"),
          Ba(e, "setCustomValidity"),
          Ba(e, "stepDown"),
          Ba(e, "stepUp"),
          Ba(e, "validationMessage"),
          Ba(e, "validity"),
          Ba(e, "valueAsDate"),
          Ba(e, "valueAsNumber"),
          Ba(e, "willValidate"),
          function (e) {
            for (let t of ["accept", "max", "min", "pattern", "placeholder", "step", "multiple", "required", "readOnly", "minLength", "maxLength"])
              Ba(e, t)
          }(e)) : e instanceof window.HTMLFormElement && (Ba(e, "checkValidity"),
            Ba(e, "reportValidity"))
      }
      const za = [window.HTMLButtonElement.prototype, window.HTMLInputElement.prototype, window.HTMLSelectElement.prototype, window.HTMLTextAreaElement.prototype, window.HTMLFieldSetElement.prototype];
      function Xa(e, t) {
        t instanceof window.Element && (t = [t]);
        const n = t.length;
        for (let o = 0; o < n; o++)
          e(t[o])
      }
      function Ya(e) {
        const t = e.form
          , n = e.settings;
        if (e.revalidator = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "hybrid";
          return function (t) {
            if (t.target instanceof window.HTMLButtonElement || t.target instanceof window.HTMLTextAreaElement || t.target instanceof window.HTMLSelectElement || t.target instanceof window.HTMLInputElement) {
              if (t.target.form && t.target.form.hasAttribute("novalidate"))
                return;
              "hybrid" === e ? ("blur" === t.type && t.target.value !== t.target.defaultValue || na(t.target).valid || ("keyup" === t.type && 9 !== t.keyCode || "change" === t.type) && na(t.target).valid) && pa(t.target) : "keyup" === t.type && 9 === t.keyCode || pa(t.target)
            }
          }
        }(n.revalidate),
          e.observer = {
            disconnect() { }
          },
          e.install = e => Xa(Ra, e),
          e.uninstall = e => Xa(Wa, e),
          e._destruct = function (e) {
            const t = e.form;
            return function () {
              var n;
              if ((n = t).removeEventListener("click", ja),
                n.removeEventListener("keypress", Oa),
                n.removeEventListener("click", Ta),
                n.removeEventListener("keypress", Pa),
                t.removeEventListener("keyup", e.revalidator),
                t.removeEventListener("change", e.revalidator),
                t.removeEventListener("blur", e.revalidator, !0),
                t === window || 9 === t.nodeType)
                e.uninstall(za),
                  Wa(window.HTMLFormElement);
              else if (t instanceof window.HTMLFormElement || t instanceof window.HTMLFieldSetElement)
                e.uninstall(t.elements),
                  t instanceof window.HTMLFormElement && Wa(t);
              else if (t instanceof window.HTMLElement) {
                e.observer.disconnect();
                for (let n of Array.prototype.slice.call(t.getElementsByTagName("form")))
                  e.uninstall(n.elements),
                    Wa(n)
              }
            }
          }(e),
          function (e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (e.addEventListener("click", ja),
              e.addEventListener("keypress", Oa)) : (e.addEventListener("click", Ta),
                e.addEventListener("keypress", Pa))
          }(t, "never" === n.revalidate),
          t === window || 9 === t.nodeType)
          e.install(za),
            Ra(window.HTMLFormElement);
        else if (t instanceof window.HTMLFormElement || t instanceof window.HTMLFieldSetElement)
          e.install(t.elements),
            t instanceof window.HTMLFormElement && Ra(t);
        else {
          if (!(t instanceof window.HTMLElement))
            throw new Error("Hyperform must be used with a node or window.");
          for (let t of Array.prototype.slice.call(e.form.getElementsByTagName("form")))
            e.install(t.elements),
              Ra(t);
          e.observer = new window.MutationObserver((t => {
            for (let n of t)
              if ("childList" === n.type) {
                for (let t of Array.prototype.slice.call(n.addedNodes))
                  t instanceof window.HTMLFormElement && (e.install(t.elements),
                    Ra(t));
                for (let t of Array.prototype.slice.call(n.removedNodes))
                  t instanceof window.HTMLFormElement && (e.uninstall(t.elements),
                    Wa(t))
              }
          }
          )),
            e.observer.observe(t, {
              subtree: !0,
              childList: !0
            })
        }
        "oninput" !== n.revalidate && "hybrid" !== n.revalidate || (t.addEventListener("keyup", e.revalidator),
          t.addEventListener("change", e.revalidator)),
          "onblur" !== n.revalidate && "hybrid" !== n.revalidate || t.addEventListener("blur", e.revalidator, !0)
      }
      function Za(e) {
        let { classes: t, debug: n = !1, extendFieldset: o, novalidateOnElements: a, preventImplicitSubmit: r = !1, revalidate: s, strict: i = !1, validEvent: c, validateNameless: l = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t || (t = {}),
          void 0 === o && (o = !i),
          void 0 === a && (a = !i),
          void 0 === r && (r = !1),
          void 0 === s && (s = i ? "onsubmit" : "hybrid"),
          void 0 === c && (c = !i);
        const u = {
          debug: n,
          strict: i,
          preventImplicitSubmit: r,
          revalidate: s,
          validEvent: c,
          extendFieldset: o,
          classes: t,
          novalidateOnElements: a,
          validateNameless: l
        };
        if (e instanceof window.NodeList || e instanceof window.HTMLCollection || e instanceof Array)
          return Array.prototype.map.call(e, (e => Za(e, u)));
        const d = new Fn(e, u);
        return Ya(d),
          d
      }
      Za.version = "0.12.0",
        Za.checkValidity = sa,
        Za.reportValidity = pa,
        Za.setCustomValidity = ha,
        Za.stepDown = va,
        Za.stepUp = ya,
        Za.validationMessage = ba,
        Za.ValidityState = na,
        Za.valueAsDate = fa,
        Za.valueAsNumber = ga,
        Za.willValidate = wa,
        Za.setLanguage = e => {
          var t;
          return fo = t = e,
            go = t.replace(/[-_].*/, ""),
            Za
        }
        ,
        Za.addTranslation = (e, t) => (vo(e, t),
          Za),
        Za.setRenderer = (e, t) => (ma.set(e, t),
          Za),
        Za.addValidator = (e, t) => (Oo.set(e, t),
          Za),
        Za.setMessage = (e, t, n) => (xo.set(e, t, n),
          Za),
        Za.addHook = (e, t, n) => (function (e, t, n) {
          e in Wn || (Wn[e] = []),
            void 0 === n && (n = Wn[e].length),
            Wn[e].splice(n, 0, t)
        }(e, t, n),
          Za),
        Za.removeHook = (e, t) => (function (e, t) {
          if (e in Wn)
            for (let n = 0; n < Wn[e].length; n++)
              if (Wn[e][n] === t) {
                Wn[e].splice(n, 1);
                break
              }
        }(e, t),
          Za),
        document.currentScript && document.currentScript.hasAttribute("data-hf-autoload") && Za(window);
      var Ka = Za;
      const Qa = () => (Ka.addTranslation("ru", {
        BonusError: "pp",
        TextTooLong: "Пожалуйста, сократите этот текст до %l символов или меньше",
        TextTooShort: "Пожалуйста, используйте не менее %l символов",
        ValueMissing: "Пожалуйста, заполните это поле",
        CheckboxMissing: "Пожалуйста, поставьте флажок, если Вы хотите продолжить",
        RadioMissing: "Пожалуйста, выберите один из этих вариантов",
        FileMissing: "Пожалуйста, выберите файл",
        SelectMissing: "Пожалуйста, выберите пункт из списка",
        InvalidEmail: "Пожалуйста, введите адрес электронной почты",
        InvalidURL: "Пожалуйста, введите веб-адрес",
        InvalidDate: "Пожалуйста, введите дату",
        PatternMismatch: "Пожалуйста, придерживайтесь установленного формата",
        PatternMismatchWithTitle: "Пожалуйста, придерживайтесь установленного формата: %l",
        NumberRangeOverflow: "Пожалуйста, выберите значение, не больше чем %l",
        DateRangeOverflow: "Пожалуйста, выберите значение, не позднее %l",
        TimeRangeOverflow: "Пожалуйста, выберите значение, не позднее %l",
        NumberRangeUnderflow: "Пожалуйста, выберите значение, не менее %l",
        DateRangeUnderflow: "Пожалуйста, выберите значение, не ранее, чем %l",
        TimeRangeUnderflow: "Пожалуйста, выберите значение, не ранее, чем %l",
        StepMismatch: "Пожалуйста, выберите корректное значение. Два ближайших допустимых значения %l и %l",
        StepMismatchOneValue: "Пожалуйста, введите корректное значение. Ближайшее допустимое значение %l",
        BadInputNumber: "Пожалуйста, введите число",
        "Please match the requested type.": "Пожалуйста, придерживайтесь требуемого типа",
        "Please comply with all requirements.": "Пожалуйста, выполните все необходимые условия",
        "Please lengthen this text to %l characters or more (you are currently using %l characters).": "**захардкожено в validity_state_checkers**",
        "Please use the appropriate format.": "Пожалуйста, используйте правильный формат",
        "Please enter a comma separated list of email addresses.": "Пожалуйста, введите список адресов электронной почты через запятую",
        "Please select a file of the correct type.": "Пожалуйста, выберите файл правильного типа",
        "Please select one or more files.": "Пожалуйста, выберите один или несколько файлов",
        "any value": "любое значение",
        "any valid value": "любое допустимое значение"
      }),
        Ka.setLanguage("ru"),
        Ka.setRenderer("attachWarning", (function (e, t) {
          ["text", "email", "tel", "password", "date", "checkbox"].indexOf(t.getAttribute("type")) > -1 || "SELECT" === t.tagName || "TEXTAREA" === t.tagName ? "SELECT" === t.tagName ? t.parentNode.parentNode.parentNode.insertBefore(e, t.parentNode.parentNode.nextSibling) : t.parentNode.parentNode.insertBefore(e, t.parentNode.nextSibling) : t.parentNode.insertBefore(e, t.nextSibling)
        }
        )),
        Ka)
        , Ja = (e, t) => {
          e && t && e.addValidator(t, (function (e) {
            const t = /^(\+7|7|8)?[\s\—]?\(?[0-9]{3}\)?[\s\—]?[0-9]{3}[\s\—]?[0-9]{2}[\s\—]?[0-9]{2}$/gm.test(e.value);
            return e.setCustomValidity(t ? "" : "Неверный формат телефона"),
              t
          }
          ))
        }
        , Ga = (e, t) => {
          e.addValidator(t, (function (e) {
            for (e.value = e.value.replace(/[а-яА-Я\<\>\;\#\$\%\&]+/g, ""); e.value.length > 0 && !/^[A-zА-яЁё0-9]$/gm.test(e.value[0]);)
              e.value = e.value.slice(1);
            e.value = e.value.replace(/\s/g, "");
            let t = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm.test(e.value) || "" === e.value;
            return t = !(t && e.value.length > 254) && t,
              e.setCustomValidity(t ? "" : "Неверный формат Email"),
              !0
          }
          ))
        }
        , er = (e, t) => {
          e.addValidator(t, (function (e) {
            e.value = e.value.replace(/[^A-zА-яЁё]+/g, ""),
              e.value = e.value.replace(/[\]\[\^]+/g, ""),
              e.value = e.value.replace(/\\/g, ""),
              e.value.length > 0 && (e.value = e.value[0].toUpperCase() + e.value.slice(1),
                e.value = tr(e.value, 20));
            const t = /^[A-zА-яЁё]{2,20}$/gm.test(e.value) || "" === e.value;
            return e.setCustomValidity(t ? "" : "Неверный формат имени"),
              t
          }
          ))
        }
        , tr = (e, t) => (e.length > t && (e = e.substr(0, t)),
          e)
        , nr = (e, t, n) => {
          let o, a, r = e;
          const s = () => {
            o = parseInt(r / 60, 10),
              a = parseInt(r % 60, 10),
              o = o < 10 ? "0" + o : o,
              a = a < 10 ? "0" + a : a,
              t.textContent = o + ":" + a
          }
            ;
          s();
          const i = setInterval((function () {
            s(),
              --r < 0 && (r = e,
                n(),
                clearInterval(i))
          }
          ), 1e3);
          return i
        }
        , or = () => {
          "undefined" != typeof jQuery && $(document).on("submit", ".js-auth-email-form", (function () {
            Tr();
            var e = $(this)
              , t = $(this).attr("action");
            return $.ajax({
              type: "POST",
              url: t,
              dataType: "json",
              data: $(this).serialize(),
              error: function (e, t) {
                An("timeout" == t ? "timeout" : "Error! Please try again!")
              },
              success: function (t) {
                return t && "success" === t.status ? ("/confirmation/" != new URL(window.location).pathname && Cn(t.message),
                  location.reload(),
                  !1) : (e.find(".hf-warning").html(t.message),
                    t.restore && e.find(".js-auth-restore").show(),
                    t.need_captcha && (e.find("#captcha_image").attr("src", t.captcha_image),
                      e.find("#captcha_sid").val(t.captcha_sid),
                      e.find("#captcha").show()),
                    t.need_agreement && br(),
                    !1)
              }
            }),
              !1
          }
          ))
        }
        ;
      var ar = n(4529)
        , rr = n.n(ar);
      const sr = e => {
        e.forEach((e => {
          const t = new (rr())(e, {
            allowHTML: !0,
            searchResultLimit: 51,
            searchEnabled: (n = e,
              !(!n.hasAttribute("data-searchable") || !n.getAttribute("data-searchable"))),
            placeholderValue: "Поиск",
            searchPlaceholderValue: "Поиск...",
            noResultsText: "Нет результатов",
            noChoicesText: "Нет элементов для выбора",
            shouldSort: !1,
            itemSelectText: ""
          });
          var n;
          let o = ""
            , a = !!(e => e.hasAttribute("data-support") && e.getAttribute("data-support"))(e)
            , r = t.getValue()?.label
            , s = t.getValue()?.value
            , i = new AbortController
            , c = [];
          for (let l of t.config.choices)
            c.push(l);
          if (window.selector = t,
            "settlement" === e.dataset.selectionType) {
            async function u() {
              const e = o;
              if (0 === e.length)
                return t.setValue(c),
                  void t.setValue([{
                    value: "placeholder",
                    label: "Выберите населённый пункт",
                    placeholder: !0
                  }]);
              try {
                const n = "/local/ajax/search_location.php"
                  , o = new FormData;
                o.append("query", e),
                  i.abort(),
                  i = new AbortController;
                const r = await fetch(n, {
                  signal: i.signal,
                  method: "POST",
                  body: o
                })
                  , s = await r.json();
                if (!0 === s.result) {
                  const e = [];
                  for (let t of s.data)
                    e.push({
                      value: a ? t.name : t.value,
                      label: t.name
                    });
                  0 === s.data.length ? e.push({
                    value: "placeholder",
                    label: "Нет результатов",
                    placeholder: !0
                  }) : e.push({
                    value: "placeholder",
                    label: "Выберите населённый пункт",
                    placeholder: !0
                  }),
                    t.setValue(e)
                } else
                  t.setValue([{
                    value: "placeholder",
                    label: s.errors[0],
                    placeholder: !0
                  }])
              } catch (e) {
                e instanceof DOMException || (console.error("Ошибка:", e),
                  An("Ошибка:", e))
              }
            }
            const d = function (e) {
              let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
              return function () {
                for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
                  a[r] = arguments[r];
                clearTimeout(t),
                  t = setTimeout((() => {
                    t = null,
                      e(...a)
                  }
                  ), n)
              }
            }(u, 500)
              , m = e => {
                let t = e.closest(".choices").querySelector(".choices__list--dropdown .choices__list");
                t.classList.add("search-preloader__icon_active"),
                  t.innerHTML = "<div class='search-preloader-wrap'><div class='search-preloader__icon'></div><span>Ищем Ваш населённый пункт</span></div>"
              }
              ;
            function p(e, n) {
              o = e,
                t.clearStore(),
                t.setValue([{
                  value: "placeholder",
                  label: "Идёт поиск",
                  placeholder: !0
                }]),
                m(n),
                d()
            }
            e.addEventListener("search", (async function (e) {
              p(e.detail.value, e.target)
            }
            )),
              e.addEventListener("choice", (async function (e) {
                r = e.detail.choice.label,
                  s = e.detail.choice.value,
                  c = [];
                for (let e of t.config.choices)
                  c.push(e)
              }
              )),
              e.addEventListener("showDropdown", (function () {
                t.clearStore(),
                  t.setValue(c),
                  t.setValue([{
                    value: "placeholder",
                    label: "Выберите населённый пункт",
                    placeholder: !0
                  }])
              }
              )),
              e.addEventListener("hideDropdown", (function () {
                t.clearStore(),
                  t.setValue([{
                    value: s,
                    label: r
                  }])
              }
              )),
              t.input.element.addEventListener("input", (function () {
                0 === this.value.length && p("")
              }
              )),
              t.input.element.addEventListener("blur", (function () {
                this.value = ""
              }
              ))
          }
        }
        ))
      }
        , ir = () => {
          const e = document.querySelectorAll(".form-select__select");
          return sr(e),
            e
        }
        ;
      let cr = {};
      const lr = () => {
        const e = document.querySelector(".js-auth-register-button")
          , t = document.querySelector("#reg-email")
          , n = document.querySelector("#reg-newpass")
          , o = document.querySelector("#reg-oldpass")
          , a = document.querySelector("#reg-name")
          , r = document.querySelector("#reg-fz152")
          , s = t.value.length > 0 && t.checkValidity()
          , i = n.value.length > 0
          , c = o.value.length > 0
          , l = a.value.replace(/[^a-z-A-Zа-яА-ЯёЁ]/g, "").length > 0;
        s && i && c && l && r.checked && i === c ? Nn(e, !0) : Nn(e, !1)
      }
        , ur = () => {
          const e = document.querySelector(".auth-email")
            , t = document.querySelector(".js-auth-email-button");
          e.checkValidity() ? Nn(t, !0) : Nn(t, !1)
        }
        , dr = async e => {
          e.preventDefault();
          const t = e.target
            , n = new FormData(t);
          n.append("forgot_password", "yes");
          let o = n.get("USER_EMAIL");
          o || (o = n.get("USER_LOGIN"),
            n.set("USER_EMAIL", o)),
            n.set("TYPE", "RESTORE_PWD");
          try {
            const e = await fetch("/local/ajax/auth.php", {
              method: "POST",
              body: n
            });
            await e.json(),
              Cn("На указанный Email отправлено письмо со ссылкой для смены пароля. Пожалуйста, перейдите по ссылке в письме и укажите новый пароль", {
                popup: "swal2-popup_success swal2-popup_successw492",
                title: "swal2-title_success",
                image: "swal2-image_success"
              })
          } catch (e) {
            console.error("Ошибка:", e),
              Cn(e, {
                popup: "swal2-popup_success swal2-popup_successw492",
                title: "swal2-title_success",
                image: "swal2-image_success"
              })
          }
        }
        , mr = e => {
          En.fire({
            ...kn,
            title: "Войти или зарегистрироваться",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".auth-email")
                  , t = document.querySelector("#USER_LOGIN");
                Ga(Qa(), t),
                  Qa()(e),
                  e.addEventListener("input", ur)
              }
              )(),
                (() => {
                  const e = document.querySelector(".auth-register")
                    , t = document.querySelector("#reg-email")
                    , n = document.querySelector("#reg-name")
                    , o = document.querySelector("#reg-newpass")
                    , a = document.querySelector("#reg-oldpass");
                  var r, s, i;
                  Ga(Qa(), t),
                    er(Qa(), n),
                    r = Qa(),
                    s = a,
                    i = o,
                    r.addValidator(s, (function (e) {
                      const t = e.value === i.value;
                      return i.setCustomValidity(t ? "" : "Ошибка! Пароли не совпадают"),
                        t
                    }
                    )),
                    i.addEventListener("keyup", (function () {
                      s.reportValidity()
                    }
                    )),
                    Qa()(e),
                    e.addEventListener("input", lr)
                }
                )()
            }
          })
        }
        , pr = () => {
          const e = document.querySelector(".register-phone")
            , t = document.querySelector(".js-register-phone-button")
            , n = e.checkValidity();
          Nn(t, n)
        }
        , hr = async e => {
          const t = e.target
            , n = document.querySelector(".js-register-phone-error")
            , o = document.querySelector(".js-auth-restore");
          if (qn(n),
            t.checkValidity()) {
            e.preventDefault();
            const a = "/local/ajax/auth.php"
              , r = new FormData(t);
            try {
              const e = await fetch(a, {
                method: "POST",
                body: r
              })
                , t = await e.json();
              "success" === t.status ? ("/confirmation/" !== new URL(window.location).pathname && Cn("Вы успешно зарегистрированы", {
                popup: "swal2-popup_success swal2-popup_successw346",
                title: "swal2-title_success",
                image: "swal2-image_success"
              }),
                setTimeout((() => {
                  location.reload()
                }
                ), 1e3)) : (n.textContent = t.message,
                  jn(n),
                  t.restore && jn(o),
                  console.error("Ошибка:", t.message))
            } catch (e) {
              console.error("Ошибка:", e)
            }
          }
        }
        , fr = e => {
          En.fire({
            ...kn,
            title: "Зарегистрироваться",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".register-phone")
                  , t = document.querySelector("#regphone-name")
                  , n = document.querySelector("#regphone-email");
                Ga(Qa(), n),
                  er(Qa(), t),
                  Qa()(e),
                  e.addEventListener("change", pr),
                  e.addEventListener("submit", hr)
              }
              )()
            }
          })
        }
        , gr = () => {
          const e = document.querySelector(".auth-fill")
            , t = document.querySelector(".js-auth-fill-submit")
            , n = e.checkValidity();
          Nn(t, n)
        }
        , vr = async e => {
          const t = e.target;
          if (t.checkValidity()) {
            e.preventDefault(),
              await Tr();
            const n = "/local/ajax/auth.php"
              , o = new FormData(t);
            try {
              const e = await fetch(n, {
                method: "POST",
                body: o
              })
                , t = await e.json();
              t.status ? ("/confirmation/" !== new URL(window.location).pathname && Cn("Вы успешно авторизованы", {
                popup: "swal2-popup_success swal2-popup_successw346",
                title: "swal2-title_success",
                image: "swal2-image_success"
              }),
                setTimeout((() => {
                  location.reload()
                }
                ), 1e3)) : console.error("Ошибка:", t.message)
            } catch (e) {
              console.error("Ошибка:", e)
            }
          }
        }
        , yr = e => {
          En.fire({
            ...kn,
            title: "Войти или зарегистрироваться",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".auth-fill")
                  , t = (e.elements["fill-gender"],
                    document.querySelector(".js-auth-fill-cancel"));
                ir(),
                  Qa()(e),
                  t.addEventListener("click", En.close),
                  e.addEventListener("change", gr),
                  e.addEventListener("submit", vr)
              }
              )()
            }
          })
        }
        , br = () => {
          xn("/auth/consent/", yr)
        }
        , wr = async e => {
          const t = e.target
            , n = document.querySelector(".js-auth-code-error");
          if (qn(n),
            t.checkValidity()) {
            const e = document.querySelector(".js-auth-phone-form").elements["auth-phone"].value
              , o = t.value;
            await Tr();
            const a = "/local/ajax/confirm_phone_auth.php"
              , r = new FormData;
            r.append("auth-phone", e),
              r.append("auth-code", o);
            try {
              const e = await fetch(a, {
                method: "POST",
                body: r
              })
                , t = await e.json();
              t.status ? t.authorized ? ("/confirmation/" !== new URL(window.location).pathname && Cn("Вы успешно авторизованы", {
                popup: "swal2-popup_success swal2-popup_successw346",
                title: "swal2-title_success",
                image: "swal2-image_success"
              }),
                setTimeout((() => {
                  location.reload()
                }
                ), 1e3)) : t.need_agreement ? br() : xn("/auth/registration/", fr) : (n.textContent = t.message,
                  jn(n),
                  console.error("Ошибка:", t.message))
            } catch (e) {
              console.error("Ошибка:", e)
            }
          }
        }
        , _r = e => {
          const t = (new DOMParser).parseFromString(e, "text/html").querySelector("#already-authorized");
          t && t ? location.reload() : En.fire({
            ...kn,
            title: "Войти или зарегистрироваться",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".auth-phone")
                  , t = document.querySelector("#auth-phone")
                  , n = document.querySelector(".js-auth-code");
                "undefined" != typeof grecaptcha && (cr = {},
                  void 0 === cr.auth ? cr.auth = grecaptcha.render("g-recaptcha") : grecaptcha.reset(cr.auth)),
                  Ja(Qa(), t),
                  Vn(t),
                  Qa()(e),
                  document.addEventListener("click", Er),
                  n.addEventListener("input", wr),
                  t.focus()
              }
              )()
            }
          })
        }
        , Sr = () => {
          const e = document.querySelector(".js-auth-get-code")
            , t = document.querySelector(".js-auth-retry");
          Nn(e, !0),
            e.innerHTML = "Получить код повторно",
            "undefined" != typeof grecaptcha && void 0 !== cr.auth && grecaptcha.reset(cr.auth),
            qn(t)
        }
        , Lr = async (e, t) => {
          const n = document.querySelector(".js-auth-code")
            , o = document.querySelector(".js-auth-email")
            , a = document.querySelector(".js-auth-countdown")
            , r = document.querySelector(".js-auth-get-code")
            , s = document.querySelector(".js-auth-retry")
            , i = new FormData;
          i.append("guid", e);
          try {
            const e = await fetch("/local/ajax/check_sms.php", {
              method: "POST",
              body: i
            })
              , t = await e.json();
            if (t.status)
              qn(o),
                jn(n),
                jn(s),
                Nn(r, !1),
                nr(60, a, Sr);
            else {
              if ("" === t.message)
                throw new Error("Ошибка при проверке отправки смс");
              console.error("Ошибка:", t.message)
            }
          } catch (n) {
            if (t <= 1)
              throw n;
            await (1e3,
              new Promise((e => setTimeout(e, 1e3)))),
              Lr(e, t - 1)
          }
        }
        , Er = async e => {
          const t = document.querySelector(".js-auth-phone-form");
          if (t) {
            const n = t.querySelector(".g-recaptcha-response");
            let o;
            if ("undefined" != typeof grecaptcha && (o = n.value),
              Bn(e.target, "js-auth-get-code") && t.checkValidity()) {
              e.preventDefault();
              const n = document.querySelector("#auth-code")
                , a = document.querySelector(".js-auth-phone-error");
              n.value = null,
                a.innerHTML = "",
                qn(a),
                jn(a);
              const r = "/local/ajax/send_code.php"
                , s = new FormData;
              "undefined" != typeof grecaptcha && s.append("g-recaptcha-response", o),
                s.append("auth-phone", t.elements["auth-phone"].value);
              try {
                const e = await fetch(r, {
                  method: "POST",
                  body: s
                })
                  , t = await e.json();
                t.status ? Lr(t.guid, 30) : (console.error("Ошибка:", t.message),
                  a.innerHTML = t.message,
                  jn(a),
                  "undefined" != typeof grecaptcha && cr.auth && grecaptcha.reset(cr.auth))
              } catch (e) {
                console.error("Ошибка:", e),
                  "undefined" != typeof grecaptcha && cr.auth && grecaptcha.reset(cr.auth)
              }
            }
          }
        }
        , kr = e => {
          const t = e.target.closest(".js-auth-phone");
          if (t) {
            e.preventDefault();
            const n = t.dataset.modal;
            xn(n, _r)
          }
        }
        , Ar = e => {
          Bn(e.target, "js-auth-email") && (e.preventDefault(),
            void 0 !== cr.auth && (grecaptcha.reset(cr.auth),
              cr = {}),
            xn("/auth/", mr))
        }
        , Cr = e => {
          Bn(e.target, "js-auth-restore") && (e.preventDefault(),
            xn("/auth/restore/", xr))
        }
        , xr = e => {
          En.fire({
            ...kn,
            title: "Восстановление пароля",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".restore-password")
                  , t = document.querySelector("#restore-email");
                Ga(Qa(), t),
                  Qa()(e),
                  e.addEventListener("submit", dr)
              }
              )()
            }
          })
        }
        , Tr = async () => {
          if ("/confirmation/" == window.location.pathname) {
            const e = "/local/ajax/local_storage.php"
              , t = new FormData;
            let n = {};
            const o = document.querySelector('input[name="PAY_SYSTEM_ID"]:checked');
            o && o.value && (n.PAY_SYSTEM_ID = o.value);
            const a = document.querySelector('input[name="PROFILE"]:checked');
            a && a.value && (n.PROFILE = a.value);
            const r = document.querySelector('input[name="town"]');
            r && r.value && (n.town = r.value);
            const s = document.querySelector('input[name="DELIVERY_ID"]:checked');
            s && s.value && (n.DELIVERY_ID = s.value);
            const i = document.querySelector('input[name="checkout-selected-point"]');
            i && i.value && (n["checkout-selected-point"] = i.value);
            const c = document.querySelector('input[name="checkout-point"]:checked');
            c && c.value && (n["checkout-point"] = c.value),
              n.auth = "Y",
              t.append("values", JSON.stringify(n)),
              t.append("name", "checkout");
            try {
              const n = await fetch(e, {
                method: "POST",
                body: t
              });
              await n.json()
            } catch (e) {
              console.error("Ошибка:", e)
            }
          }
        }
        , jr = e => {
          const t = e.target.parentNode;
          t.classList.contains("menu__item_hassubmenu") && t.classList.contains("js-footer-menu") && (e.preventDefault(),
            t.classList.toggle("is-opened"))
        }
        ;
      n(6770);
      const qr = document.querySelectorAll(".js-catalog-button")
        , Pr = document.querySelector(".js-catalog-menu.old_catalog")
        , Or = document.querySelector(".js-header-aside")
        , Mr = document.querySelector(".js-header")
        , Dr = document.querySelector(".js-header .js-catalog-button")
        , Br = document.querySelector("body")
        , Nr = () => {
          const e = document.querySelector(".js-catalog-menu")
            , t = e.querySelectorAll(".menu__submenu");
          let n = 0;
          t.forEach((e => {
            const t = e.getBoundingClientRect().height;
            n = n > t ? n : t
          }
          )),
            e.classList.contains("is-opened") ? e.style.marginBottom = `-${n}px` : e.style.marginBottom = 0
        }
        , Ir = async e => {
          const t = e.currentTarget
            , n = document.querySelector(".menu-main.menu-loaded")
            , o = document.querySelector(".menu_mobcatalog.header-aside__catalog")
            , a = document.querySelector("#jsLoader")
            , r = document.querySelector("#jsLoaderMobile");
          if (e.stopPropagation(),
            !Pn() && n) {
            if (!a) {
              const e = await fetch("/local/ajax/menu_desktop.php", {});
              n.innerHTML = await e.json();
              const t = document.querySelector(".menu-main__left .menu-item-js .border-line");
              let o = document.createElement("script");
              o.id = "jsLoader",
                o.src = "/local/templates/beurer/components/bitrix/menu/catalog_popup/script.js",
                document.querySelector("body").after(o),
                t.style.left = document.querySelector(".menu-main__left").offsetWidth - 3 + "px"
            }
          } else if (!r) {
            const e = await fetch("/local/ajax/menu_mobile.php", {});
            o.innerHTML = await e.json();
            let t = document.createElement("script");
            t.id = "jsLoaderMobile",
              t.src = "/local/templates/beurer/components/bitrix/menu/catalog_mobile/script.js",
              document.querySelector("body").after(t)
          }
          if (!Pn() || Bn(t, "js-navigation-bar-catalog"))
            return Dr.classList.toggle("is-active"),
              Pr.classList.toggle("is-opened"),
              Mr.classList.toggle("is-submenu"),
              Br.classList.toggle("is-submenu_body"),
              void Nr();
          Or.classList.add("is-opened")
        }
        , $r = e => {
          void 0 !== e && (Bn(e.target, "menu-main__list") || Bn(e.target, "menu-main__block-title") || Bn(e.target, "menu-main__block__links-link") || (Pr.classList.remove("is-opened"),
            Mr.classList.remove("is-submenu"),
            Br.classList.remove("is-submenu_body"),
            Dr.classList.remove("is-active"),
            Nr()))
        }
        , Vr = e => {
          Bn(e.target, "js-catalog-menu") && e.stopPropagation()
        }
        , Hr = e => {
          const t = e.target;
          if (Bn(t, "js-tab-button")) {
            e.preventDefault();
            const n = t.closest(".tabs__header");
            t.closest(".tabs").querySelectorAll(".tabs__tab_active, .tabs__button_active").forEach((e => {
              e.classList.remove("tabs__tab_active"),
                e.classList.remove("tabs__button_active")
            }
            )),
              t.classList.add("tabs__button_active"),
              n.scrollTo(t.offsetLeft, 0),
              document.querySelector(`[data-tab="${t.dataset.tabid}"]`).classList.add("tabs__tab_active")
          }
        }
        ;
      window.onload = function () {
        const e = window.location.search.match(new RegExp("reviews=([^&=]+)"))
          , t = document.querySelector("#js-tab-button-reviews");
        e && "true" === e[1] && t && Hr({
          target: t
        })
      }
        ;
      var Fr = n(1955);
      let Ur = {};
      const Rr = e => {
        ((e, t, n, o) => {
          if (Bn(e.target, t)) {
            e.preventDefault();
            let o = (e.target.classList.contains(t) ? e.target : e.target.closest(".js-checkout-legal")).getAttribute("data-modal");
            xn(o, n)
          }
        }
        )(e, "js-checkout-legal", Wr)
      }
        , Wr = e => {
          En.fire({
            ...kn,
            customClass: {
              popup: "swal2-popup_legal"
            },
            title: "Оформить заказ",
            html: e,
            didOpen: () => {
              Zr()
            }
          })
        }
        , zr = e => {
          const t = document.querySelector(".legal")
            , n = t.querySelector(".recaptcha-error");
          t.querySelector(".g-recaptcha-legal"),
            "" == t.querySelector(".g-recaptcha-response").value ? (e.preventDefault(),
              n.innerHTML = 'Пройдите проверку "Я не робот"') : n.innerHTML = ""
        }
        , Xr = e => {
          const t = document.querySelector(".legal")
            , n = document.querySelector(".legal .legal__submit");
          "personal-fz152" != e.srcElement.id && Yr(!1);
          const o = t.checkValidity();
          Nn(n, o)
        }
        , Yr = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const t = document.querySelector("#personal-fz152");
          t.checked = e
        }
        , Zr = () => {
          const e = document.querySelector(".legal")
            , t = document.querySelector("#legal-phone")
            , n = document.querySelector("#legal-name")
            , o = document.querySelector("#legal-text")
            , a = document.querySelector("#legal-email")
            , r = document.querySelector("#legal-inn");
          var s;
          document.querySelector(".legal .legal__submit"),
            Mn(e, ["change", "input"], Xr),
            e.addEventListener("submit", zr),
            Vn(t),
            Ja(Qa(), t),
            s = n,
            Qa().addValidator(s, (function (e) {
              e.value = e.value.replace(/[^A-zА-яЁё -]+/g, ""),
                e.value = e.value.replace(/ +(?= )/g, ""),
                e.value = e.value.replace(/-+(?=-)/g, ""),
                e.value = e.value.replace(/\\/g, ""),
                e.value.length > 0 && (e.value = tr(e.value, 100));
              const t = /^[\p{L}\p{N}\s-]{2,100}$/u.test(e.value) || "" === e.value;
              return e.setCustomValidity(t ? "" : "Неверный формат ФИО"),
                t
            }
            )),
            ((e, t) => {
              e.addValidator(t, (function (e) {
                e.value = e.value.replace(/[<>#&;%]+/g, "");
                const t = !/[<>#&;%]+/gm.test(e.value) || "" === e.value;
                return e.setCustomValidity(t ? "" : "Неверный формат текста"),
                  t
              }
              ))
            }
            )(Qa(), o),
            ((e, t) => {
              e.addValidator(t, (function (e) {
                e.value = e.value.replace(/[^\d.]/g, ""),
                  e.value = e.value.slice(0, 12);
                const t = /^(\d{10}|\d{12})$/gm.test(e.value) || "" === e.value;
                return e.setCustomValidity(t ? "" : "Неверный формат ИНН"),
                  t
              }
              ))
            }
            )(Qa(), r),
            Ga(Qa(), a),
            Qa()(e),
            "undefined" != typeof grecaptcha && (Ur = {},
              void 0 === Ur.on ? Ur.on = grecaptcha.render("g-recaptcha-legal") : grecaptcha.reset(Ur.on))
        }
        ;
      window.addEventListener("DOMContentLoaded", (() => {
        "addok" == window.location.search.replace("?", "").split("&").reduce((function (e, t) {
          var n = t.split("=");
          return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]),
            e
        }
        ), {}).formresult && Cn("Ваша заявка отправлена"),
          document.addEventListener("click", Rr)
      }
      ));
      var Kr = n(8509);
      const Qr = document.querySelector(".page__content")
        , Jr = document.querySelector(".search__suggestions")
        , Gr = e => {
          Bn(e.target, "search__all") && (document.getElementById("title-search-input").disabled = !0,
            Jr.classList.add("search-preloader__icon_active"))
        }
        , es = e => {
          const t = e.currentTarget
            , n = t.querySelector(".js-search-suggestions");
          t.querySelector(".js-search-reset").classList.remove("is-visible"),
            n.innerHTML = ""
        }
        , ts = e => {
          const t = e.currentTarget.closest(".js-search")
            , n = t.querySelector(".js-search-suggestions");
          t.classList.add("is-focused"),
            (0,
              Kr.Qp)(n, {
                reserveScrollBarGap: !0
              }),
            On() && t.classList.contains("search_fixed") && Qr.classList.add("is-searched"),
            "" !== n.innerHTML && n.classList.add("is-visible")
        }
        , ns = e => {
          const t = e.currentTarget.closest(".js-search")
            , n = t.querySelector(".js-search-suggestions");
          n.classList.remove("is-visible"),
            t.classList.remove("is-focused"),
            (0,
              Kr.tG)(n),
            On() && Qr.classList.remove("is-searched")
        }
        , os = e => {
          const t = e.currentTarget
            , n = t.closest(".js-search").querySelector(".js-search-reset");
          "" !== t.value ? n.classList.add("is-visible") : n.classList.remove("is-visible")
        }
        , as = e => {
          const t = document.querySelector(".js-search-input");
          document.activeElement === t && e.preventDefault()
        }
        ;
      let rs;
      const ss = () => {
        const e = document.querySelector(".js-status-submit")
          , t = document.querySelector(".js-status-code-submit");
        Nn(e, !0),
          Nn(t, !0)
      }
        , is = () => {
          const e = document.querySelector(".js-status-code")
            , t = e.querySelector(".js-status-code-submit")
            , n = e.checkValidity();
          Nn(t, n)
        }
        , cs = (e, t) => {
          e.preventDefault();
          const n = document.querySelector(".js-status-submit");
          n.classList.add("is-processing");
          const o = document.querySelector("#status-phone").value
            , a = document.querySelector("#status-number").value
            , r = document.querySelector(".check-status__row_info")
            , s = t.querySelector(".g-recaptcha-response");
          let i;
          "undefined" != typeof grecaptcha && (i = s.value);
          const c = new FormData(t);
          "undefined" != typeof grecaptcha && c.append("g-recaptcha-response", i);
          const l = [];
          for (let e of c.entries())
            l[e[0]] = e[1];
          BX.ajax.runComponentAction("intaro:order.status", "checkOrder", {
            mode: "class",
            data: {
              orderId: a,
              phone: o
            }
          }).then((function () {
            n.classList.remove("is-processing"),
              r.style.display = "none",
              BX.ajax({
                method: "POST",
                url: "/local/ajax/send_code.php",
                data: l,
                timeout: 3e3,
                onfailure: function (e, t) {
                  fs(t),
                    "undefined" != typeof grecaptcha && void 0 !== rs.status && grecaptcha.reset(rs.status)
                },
                onsuccess: function (e) {
                  !0 === (e = JSON.parse(e)).status ? hs(e.uuid) : fs([e])
                }
              })
          }
          ), (function (e) {
            n.classList.remove("is-processing");
            const t = document.querySelector(".check-status__row_info")
              , o = document.querySelector(".check-status__row_info .alert__content");
            let a = "";
            e.errors.forEach((e => {
              a += '<div class= "alert__text">' + e.message + "</div>"
            }
            )),
              t && o && (o.innerHTML = a,
                t.style.display = "flex"),
              "error" === e.status && "undefined" != typeof grecaptcha && void 0 !== rs.status && grecaptcha.reset(rs.status)
          }
          ))
        }
        , ls = e => {
          En.fire({
            ...kn,
            title: "Статус заказа",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".js-status-form")
                  , t = document.querySelector("#status-phone");
                let n = document.querySelector("#status-number")
                  , o = document.querySelector("#status-code");
                var a, r;
                a = n,
                  (r = document.querySelector("#order-status-prefix-popup").value) && $n()({
                    mask: r + "9999999999",
                    showMaskOnHover: !1,
                    placeholder: " ",
                    onBeforeMask: function (e) {
                      return e.replace(/\D/g, "")
                    }
                  }).mask(a),
                  Ja(Qa(), t),
                  Vn(t),
                  Qa()(e),
                  "undefined" != typeof grecaptcha && (rs = {},
                    void 0 === rs.status && (rs.status = grecaptcha.render("g-recaptcha-status"))),
                  e.addEventListener("submit", (t => cs(t, e))),
                  o.addEventListener("input", gs),
                  document.querySelector(".js-status-code-submit").addEventListener("click", vs)
              }
              )()
            }
            ,
            willClose: () => {
              grecaptcha.reset(rs.status)
            }
          })
        }
        , us = e => {
          if (Bn(e.target, "js-order-status")) {
            e.preventDefault();
            const t = document.querySelector(".js-order-status .menu__link").dataset.modal;
            xn(t, ls)
          }
        }
        , ds = e => {
          En.fire({
            ...kn,
            title: "Движение заказа",
            html: e
          })
        }
        , ms = e => {
          const t = e.target;
          if (t.closest(".js-where")) {
            let e = document.getElementById("order-history");
            e && ds(e.innerHTML),
              t.dataset.modal && xn(t.dataset.modal, ds)
          }
        }
        , ps = e => {
          const t = e.target;
          t.classList.contains("js-track-copy") && function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => { }
              ;
            if (navigator.clipboard && window.isSecureContext)
              return t(),
                navigator.clipboard.writeText(e);
            {
              let n = document.createElement("textarea");
              n.value = e,
                n.style.position = "fixed",
                n.style.left = "-999999px",
                n.style.top = "-999999px",
                document.body.appendChild(n),
                n.focus(),
                n.select(),
                t(),
                new Promise(((e, t) => {
                  document.execCommand("copy") ? e() : t(),
                    n.remove()
                }
                ))
            }
          }(t.closest(".order-param").querySelector(".js-track-value").dataset.track, (function () {
            Cn("Трекномер успешно скопирован")
          }
          ))
        }
        ;
      function hs(e) {
        let t = document.querySelector("#status-code");
        BX.ajax({
          method: "POST",
          url: "/local/ajax/check_sms.php",
          data: {
            guid: e
          },
          timeout: 30,
          onfailure: function () {
            hs(e)
          },
          onsuccess: function () {
            t.style.display = "flex",
              (() => {
                const e = document.querySelector(".js-status-code")
                  , t = document.querySelector(".js-status-form")
                  , n = document.querySelector(".js-status-countdown");
                jn(e),
                  qn(t.querySelector(".check-status__footer")),
                  (() => {
                    const e = document.querySelector(".js-status-submit")
                      , t = document.querySelector(".js-status-code-submit");
                    Nn(e, !1),
                      Nn(t, !1)
                  }
                  )(),
                  !parseInt(n.dataset.time) || parseInt(n.dataset.time),
                  nr(60, n, ss),
                  e.addEventListener("input", is)
              }
              )()
          }
        })
      }
      const fs = e => {
        const t = document.querySelector(".check-status__row_info")
          , n = document.querySelector(".check-status__row_info .alert__content");
        if (t && n) {
          n.innerHTML = "";
          let o = "";
          e.forEach((e => {
            o += '<div class= "alert__text">' + e.message + "</div>"
          }
          )),
            n.innerHTML = o,
            setTimeout((function () {
              t.style.display = "flex"
            }
            ), 1500)
        }
      }
        , gs = () => {
          let e = document.querySelector("#status-code")
            , t = document.querySelector("#status-phone")
            , n = document.querySelector("#status-number");
          e.checkValidity() && BX.ajax.runComponentAction("intaro:order.status", "checkCode", {
            mode: "class",
            data: {
              orderId: n.value,
              phone: t.value,
              code: e.value
            }
          }).then((function (e) {
            !0 === e.data.status ? (document.getElementById("swal2-title").innerHTML = e.data.title,
              document.getElementById("swal2-html-container").innerHTML = e.data.html) : fs([e.data])
          }
          ), (function (e) {
            fs(e.errors)
          }
          ))
        }
        , vs = e => {
          e.preventDefault(),
            document.querySelector(".js-status-submit").click()
        }
        , ys = async e => {
          let t = e.target.dataset.href;
          if (t)
            try {
              const e = new FormData
                , n = document.querySelector("#cancel_order_id").value;
              e.append("id", n),
                document.querySelectorAll(".order-cancel-select__input").forEach((t => {
                  t.checked && e.append("cancel_reason_code", t.value)
                }
                ));
              const o = document.querySelector("#cancel-comment");
              e.append("other_cancel_reason_text", o.value);
              const a = await fetch(t, {
                method: "POST",
                body: e
              })
                , r = await a.json();
              "success" === r.status ? ("Ваш заказ успешно отменен",
                En.fire({
                  ...kn,
                  imageUrl: "/local/templates/beurer/assets/images/common/success.png",
                  customClass: {
                    popup: "swal2-popup_success",
                    title: "swal2-title_success",
                    image: "swal2-image_success"
                  },
                  title: "Ваш заказ успешно отменен",
                  timer: undefined,
                  didClose: () => {
                    window.location.reload()
                  }
                })) : (An("Ошибка:", r.message),
                  console.error(r.message))
            } catch (e) {
              An("Ошибка:", "Не удалось отменить заказ"),
                console.error(e)
            }
          else
            An("Ошибка", "Не удалось отменить заказ")
        }
        , bs = e => {
          En.fire({
            ...kn,
            customClass: {
              popup: "swal2-popup_orderCancel"
            },
            title: !1,
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".order-cancel__btn")
                  , t = document.querySelectorAll(".order-cancel-select__input")
                  , n = document.querySelector("#cancel-comment");
                n.addEventListener("input", (t => {
                  e.disabled = !(t.target.value.length > 5)
                }
                )),
                  t.forEach((t => {
                    t.addEventListener("click", (t => {
                      "other_reason" === t.target.value ? (n.disabled = !1,
                        n.focus(),
                        e.disabled = !(void 0 !== n && n.value.length > 5)) : (e.disabled = !t.target.checked,
                          n.disabled = !0)
                    }
                    ))
                  }
                  )),
                  e.addEventListener("click", ys)
              }
              )()
            }
          })
        }
        , ws = e => {
          const t = e.target.closest(".js-order-cancel");
          if (t) {
            const e = t.dataset.modal;
            xn(e, bs)
          }
        }
        ;
      let _s = 0;
      const Ss = document.querySelector(".js-header")
        , Ls = document.querySelector(".js-search")
        , Es = document.querySelector(".js-search-input")
        , ks = document.querySelector(".js-search-suggestions")
        , As = document.querySelector(".page__content")
        , Cs = document.getElementById("topline")
        , xs = () => {
          let e = window.pageYOffset || document.documentElement.scrollTop;
          if (e > 95 || Ss.classList.contains("is-always-fixed")) {
            const e = Ss.classList.contains("is-always-fixed") ? "143px" : "246px";
            "/cart/" !== window.location.pathname && (As.style.marginTop = e),
              Ss.classList.add("is-fixed")
          } else
            As.style.marginTop = 0,
              Ss.classList.remove("is-fixed");
          e > 95 ? Ss.classList.add("is-shadow") : Ss.classList.remove("is-shadow")
        }
        , Ts = () => {
          (window.pageYOffset || document.documentElement.scrollTop) > 139 ? (As.classList.add("page__content_header-offset"),
            Ss.classList.add("is-fixed"),
            Ls.classList.add("search_fixed"),
            ks.classList.add("search__suggestions_fixed"),
            Ss.classList.add("is-shadow")) : (As.classList.remove("page__content_header-offset"),
              Ss.classList.remove("is-fixed"),
              Ls.classList.remove("search_fixed"),
              ks.classList.remove("search__suggestions_fixed"),
              Ss.classList.remove("is-shadow"))
        }
        , js = () => {
          On() && (Ts(),
            (() => {
              const e = "scroll-up"
                , t = "scroll-down"
                , n = "is-visible"
                , o = window.pageYOffset;
              if (o <= 0)
                return Ss.classList.remove(e),
                  void Ss.classList.remove(n);
              o > _s && !Ss.classList.contains(t) ? (Ss.classList.remove(e),
                Ss.classList.add(t),
                Ss.classList.remove(n)) : o < _s && Ss.classList.contains(t) && (Ss.classList.remove(t),
                  Ss.classList.add(e),
                  Ss.classList.add(n)),
                _s = o
            }
            )(),
            document.activeElement === Es && Es.blur()),
            On() || xs()
        }
        , qs = () => {
          (On() || Pn()) && As.removeAttribute("style")
        }
        , Ps = e => {
          const t = e.target
            , n = t.closest(".topline");
          if (t.classList.contains("close-topline")) {
            e.preventDefault(),
              n.classList.add("topline-hide");
            const o = t.dataset.id
              , a = t.dataset.timestamp;
            document.cookie = a + o + "-hide-top-banner=true; max-age=604800; path=/"
          }
        }
        , Os = e => {
          const t = e.target;
          if (Bn(t, "js-show-pass")) {
            const e = t.closest(".form-input")
              , n = t.closest(".form-input").querySelector(".form-input__input")
              , o = "password" === n.getAttribute("type") ? "text" : "password";
            console.log(n, n.getAttribute("type")),
              e.classList.toggle("form-input_show"),
              n.setAttribute("type", o)
          }
        }
        , Ms = "js-notifyinstock"
        , Ds = () => {
          let e = $(".button_notifycart");
          e = [...e],
            e.forEach((function (e) {
              let t = $(e).parents(".cart-list__item").data("product-id");
              BX.ajax({
                method: "POST",
                dataType: "json",
                url: "/local/ajax/product_subscribe.php",
                data: {
                  sessid: BX.bitrix_sessid(),
                  checkSubscribe: "Y",
                  itemId: t
                },
                onsuccess: BX.delegate((function (t) {
                  t.subscribe && ($(e).attr("disabled", "disabled"),
                    $(e).children(".show-notifycart").text("Сообщим о поступлении"))
                }
                ), this)
              })
            }
            ))
        }
        , Bs = async e => {
          if (Bn(e.target, "notify-form")) {
            e.preventDefault();
            const t = document.querySelector(".notify-form")
              , n = t.action
              , o = new FormData(t);
            try {
              const e = await fetch(n, {
                method: "POST",
                body: o
              })
                , t = await e.json();
              t.status ? (Ds(),
                Cn(t.message, void 0, !0, 2e3),
                window.CatalogSubscribeObejct && window.CatalogSubscribeObejct.setButton(!0),
                Ds()) : (An("Ошибка:", t.message),
                  console.error("Ошибка:", t.message))
            } catch (e) {
              An("Ошибка:", e),
                console.error("Ошибка:", e)
            }
          }
        }
        , Ns = (e, t) => {
          e.checkValidity() ? Nn(t, !0) : Nn(t, !1)
        }
        , Is = e => {
          En.fire({
            ...kn,
            title: "Сообщить о поступлении",
            html: e,
            customClass: {
              container: "swal2-container_auto",
              popup: "swal2-popup_auto",
              title: "swal2-title_auto",
              image: "swal2-image_auto"
            },
            didOpen: () => {
              (() => {
                const e = document.querySelector(".notify-form")
                  , t = e.querySelector(".notify-form__submit")
                  , n = document.querySelector("#notify-email");
                Ga(Qa(), n),
                  Qa()(e),
                  e.addEventListener("input", (() => {
                    Ns(e, t)
                  }
                  )),
                  e.addEventListener("submit", Bs),
                  Ns(e, t)
              }
              )()
            }
          })
        }
        , $s = e => {
          if (Bn(e.target, Ms)) {
            e.preventDefault();
            const t = e.target
              , n = t.classList.contains(Ms) ? t.getAttribute("data-modal") : t.closest(".js-notifyinstock").getAttribute("data-modal");
            xn(n, Is)
          }
        }
        , Vs = e => {
          const t = e.target;
          if (Bn(t, "js-switcher")) {
            let e = "";
            t.closest(".product-hor") && (e = "-hor");
            let n = t.closest(`.product${e}`);
            const o = n.querySelector(`.product${e}__link`)
              , a = t.getAttribute("data-url");
            o.classList.add("is-loading");
            const r = new Image;
            r.onload = function () {
              o.append(r),
                o.querySelector(`.product${e}__img`).remove(),
                n.querySelector(".product-switcher__button_active").classList.remove("product-switcher__button_active"),
                t.classList.add("product-switcher__button_active"),
                o.classList.remove("is-loading")
            }
              ,
              r.onerror = function () {
                o.classList.remove("is-loading")
              }
              ,
              r.classList.add("image", `product${e}__img`),
              r.src = a
          }
        }
        ;
      var Hs = n(8689);
      const Fs = document.querySelector(".footer__up")
        , Us = e => {
          e.preventDefault(),
            window.scrollTo(0, 0)
        }
        , Rs = async e => {
          e.preventDefault();
          const t = e.target
            , n = new FormData(t);
          try {
            const e = await fetch("/local/ajax/subscribe.php", {
              method: "POST",
              body: n
            })
              , t = await e.json();
            t.status ? Cn(t.message) : An(t.message)
          } catch (e) {
            console.error("Ошибка:", e)
          }
        }
        , Ws = () => {
          let e = function () {
            return Number(document.querySelector(".js-favorites-status .menu__count").innerText.trim())
          };
          "undefined" != typeof BX && (BX.ready((function () {
            BX.bindDelegate(document.body, "click", {
              className: "js-product-favorite"
            }, (function () {
              const t = location.pathname.includes("my-favorites");
              BX.ajax.runComponentAction("intaro:favorite", "addAndDelProduct", {
                mode: "class",
                data: {
                  id: BX.data(this, "id-favorite")
                }
              }).then((function (n) {
                const o = document.querySelectorAll('button[data-id-favorite="' + n.data.id + '"]');
                var a;
                !0 === n.data.delete && !0 === t ? o.forEach((function (e) {
                  e.closest(".catalog__item").remove(),
                    0 === document.querySelectorAll(".catalog__item").length && (document.querySelector(".favorites__item_empty").style.display = "block")
                }
                )) : n.data.delete ? o.forEach((function (e) {
                  e.classList.remove("is-active")
                }
                )) : o.forEach((function (e) {
                  return e.classList.add("is-active")
                }
                )),
                  a = n.data.delete ? e() - 1 : e() + 1,
                  document.querySelectorAll(".js-favorites-status .menu__count, .js-favorite-count-inline").forEach((function (e) {
                    e.innerText = a
                  }
                  ))
              }
              ), (function (e) {
                console.error(e)
              }
              ))
            }
            ))
          }
          )),
            BX.ready((function () {
              BX.bindDelegate(document.body, "click", {
                className: "js-favorites-clear"
              }, (function () {
                BX.ajax.runComponentAction("intaro:favorite", "allDelete", {
                  mode: "class",
                  data: {}
                }).then((function (e) {
                  !0 === e.data.result && location.reload()
                }
                ), (function (e) {
                  console.log(e)
                }
                ))
              }
              ))
            }
            )))
        }
        ;
      var zs = n(5068);
      const Xs = document.querySelector(".js-compare-difference .form-checkbox__input")
        , Ys = document.querySelector(".js-compare-difference")
        , Zs = document.querySelectorAll(".compare__slide")
        , Ks = Dn(document.querySelector(".compare-empty")) ? document.querySelector(".compare-empty").closest(".compare__slide") : void 0;
      let Qs;
      const Js = e => {
        const t = e.target
          , n = t.getAttribute("data-filter");
        if (Bn(t, "js-compare-button")) {
          Zs.forEach((e => {
            e.style.display = "none",
              document.querySelectorAll(n).forEach((e => {
                e.style.display = ""
              }
              )),
              ti(),
              document.querySelectorAll(".js-compare-button").forEach((e => {
                e.classList.remove("compare__button_active")
              }
              )),
              t.classList.add("compare__button_active");
            const o = document.querySelector(".compare__button_active").getAttribute("data-filter");
            document.querySelectorAll(o).length < 2 && Dn(Ks) ? (Ks.style.display = "block",
              qn(Ys)) : jn(Ys)
          }
          )),
            Gs(),
            si();
          const e = t.getAttribute("data-url");
          document.querySelector("a.compare-empty").setAttribute("href", e)
        }
      }
        , Gs = () => {
          const e = document.querySelector(".compare__button_active.js-compare-button");
          if (!Dn(e))
            return;
          document.querySelectorAll(".js-compare-hide").forEach((e => {
            e.classList.remove("js-compare-hide")
          }
          ));
          const t = document.querySelectorAll(e.dataset.filter);
          let n = [];
          t.forEach((e => {
            e.querySelectorAll(".compare-param__param").forEach(((e, t) => {
              let o = e.querySelector(".compare-param__param-value").textContent.trim();
              n[t] ? n[t].push(o) : n.push([o])
            }
            ))
          }
          )),
            n.length > 0 && (n.forEach(((e, n) => {
              var o;
              (o = e).every((e => e === o[0])) && t.forEach((e => {
                const t = e.querySelectorAll(".compare-param__param");
                t.length > 0 && t[n].classList.add("js-compare-hide")
              }
              ))
            }
            )),
              document.querySelectorAll(".compare-param").forEach((e => {
                const t = e.querySelectorAll(".compare-param__param").length;
                e.querySelectorAll(".js-compare-hide").length === t && e.classList.add("js-compare-hide")
              }
              ))),
            Qs = document.querySelectorAll(".js-compare-hide")
        }
        ;
      let ei;
      const ti = () => {
        ei.updateSize(),
          ei.updateSlides(),
          ei.updateProgress(),
          ei.updateSlidesClasses(),
          ei.slideTo(0),
          ei.scrollbar.updateSize()
      }
        , ni = () => Number(document.querySelector(".js-compare-status .menu__count").innerText.trim())
        , oi = e => {
          document.querySelectorAll(".js-compare-status .menu__count, .js-compare-count-inline").forEach((t => {
            t.innerText = e
          }
          ))
        }
        , ai = () => {
          "undefined" != typeof BX && BX.ready((function () {
            BX.bindDelegate(document.body, "click", {
              className: "js-product-compare"
            }, (function () {
              let e = location.pathname.includes("comparison");
              BX.ajax.runComponentAction("intaro:compare", "addAndDelProduct", {
                mode: "class",
                data: {
                  id: BX.data(this, "id")
                }
              }).then((function (t) {
                const n = document.querySelectorAll('button[data-id="' + t.data.id + '"]');
                if (!0 === t.data.delete && !0 === e)
                  if (Dn(document.querySelector(".compare"))) {
                    const e = document.querySelector(".compare__button_active").getAttribute("data-filter");
                    n.forEach((e => {
                      e.closest(".compare__slide").remove(),
                        e.classList.remove("is-active")
                    }
                    )),
                      document.querySelectorAll(e).length < 2 && Dn(Ks) && (Ks.style.display = "block"),
                      ti(),
                      si()
                  } else
                    n.forEach((e => {
                      e.classList.remove("is-active")
                    }
                    ));
                else
                  t.data.delete ? n.forEach((e => {
                    e.classList.remove("is-active")
                  }
                  )) : n.forEach((e => e.classList.add("is-active")));
                oi(t.data.delete ? ni() - 1 : ni() + 1)
              }
              ), (function (e) {
                console.error(e)
              }
              ))
            }
            ))
          }
          ))
        }
        , ri = () => {
          "undefined" != typeof BX && BX.ready((function () {
            BX.bindDelegate(document.body, "click", {
              className: "compare-tools__clear"
            }, (function () {
              BX.ajax.runComponentAction("intaro:compare", "allDelete", {
                mode: "class",
                data: {
                  id: BX.data(this, "id")
                }
              }).then((function (e) {
                if (!0 === e.data.result) {
                  const e = document.querySelectorAll(".product_compare")
                    , t = document.querySelectorAll(".compare__top, .compare-tools, .compare__compare-prev, .compare__compare-next, .js-compare-count-inline");
                  e.forEach((e => {
                    e.closest(".compare__slide").remove()
                  }
                  )),
                    Ks.style.display = "block",
                    t.forEach((e => {
                      e.remove()
                    }
                    )),
                    oi(0),
                    ti(),
                    si(),
                    location.reload()
                }
              }
              ), (function (e) {
                console.log(e)
              }
              ))
            }
            ))
          }
          ))
        }
        ;
      function si() {
        const e = []
          , t = [];
        if (document.querySelectorAll(".js-compare-params").forEach((n => {
          "none" !== n.closest(".swiper-slide").style.display && (e.push(n.querySelectorAll(".js-compare-param-title")),
            t.push(n.querySelectorAll(".js-compare-param-value")))
        }
        )),
          t.length > 0 && t[0].length > 0) {
          const n = t.length
            , o = t[0].length
            , a = []
            , r = [];
          window.requestAnimationFrame((function () {
            window.requestAnimationFrame((function () {
              for (let s = 0; s < o; s++) {
                a.push(e[0][s].getBoundingClientRect().height),
                  r.push(t[0][s].getBoundingClientRect().height);
                for (let e = 1; e < n; e++)
                  if ("-" !== t[e][s].textContent) {
                    const n = t[e][s].getBoundingClientRect().height;
                    n > r[s] && (r[s] = n)
                  }
              }
              for (let s = 0; s < o; s++)
                for (let o = 0; o < n; o++)
                  e[o][s].parentElement.style.height = `${a[s]}px`,
                    t[o][s].parentElement.style.height = `${r[s]}px`
            }
            ))
          }
          ))
        }
      }
      const ii = e => {
        e && BX.ajax({
          method: "POST",
          url: "/local/ajax/check_sms.php",
          data: {
            guid: e
          },
          timeout: 30,
          onfailure: function () {
            ii(e)
          }
        })
      }
        , ci = e => {
          const t = document.querySelector(".check-status__row_info")
            , n = document.querySelector(".check-status__row_info .alert__content")
            , o = document.querySelector(".js-confirm-code-error");
          if (t && n || o) {
            let a = "";
            e.forEach((e => {
              a += '<div class= "alert__text">' + e.message + "</div>"
            }
            )),
              t && n && (n.innerHTML = a,
                t.style.display = "flex"),
              o && (o.innerHTML = a,
                o.style.display = "flex")
          }
        }
        , li = "js-preorder";
      let ui, di, mi, pi, hi, fi;
      const gi = e => {
        const t = e.target
          , n = document.querySelector(".js-confirm-code-error");
        n && (n.style.display = "none"),
          t.checkValidity() ? ((e, t) => {
            BX.ajax({
              method: "POST",
              url: "/local/ajax/confirm_code.php",
              data: {
                "auth-phone": e.value,
                "auth-code": t.value
              },
              timeout: 3e3,
              onfailure: function (e) {
                ci(e.errors)
              },
              onsuccess: function (e) {
                if (!0 === (e = JSON.parse(e)).status) {
                  let e = new Event("confirm_code", {
                    bubbles: !0
                  });
                  t.dispatchEvent(e)
                } else
                  ci([e])
              }
            })
          }
          )(pi, t) : (ui.classList.remove("is-hidden"),
            di.classList.remove("is-visible"),
            mi.classList.add("is-visible"),
            hi.classList.add("form-input_mediahidden"))
      }
        , vi = () => {
          ui.classList.add("is-hidden"),
            di.classList.add("is-visible"),
            mi.classList.remove("is-visible"),
            hi.classList.remove("form-input_mediahidden"),
            fi.checked = !0
        }
        , yi = () => {
          Nn(mi, !0),
            Nn(ui, !0)
        }
        , bi = e => {
          const t = document.querySelector(".js-code-countdown");
          if (Bn(e.target, "js-code-getcode")) {
            e.preventDefault();
            const n = pi.value;
            n && (e => {
              BX.ajax({
                method: "POST",
                url: "/local/ajax/send_code.php",
                data: {
                  phone: e
                },
                timeout: 3e3,
                onfailure: function (e, t) {
                  ci(t)
                },
                onsuccess: function (e) {
                  !0 === (e = JSON.parse(e)).status ? ii(e.guid) : ci([e])
                }
              })
            }
            )(n),
              fi.checked = !1,
              mi.classList.add("is-visible"),
              nr(5, t, yi)
          }
        }
        ;
      let wi;
      const _i = e => {
        const t = e.target;
        clearTimeout(wi),
          fi.checked = !1,
          wi = setTimeout((() => {
            Nn(ui, t.checkValidity())
          }
          ), 0)
      }
        , Si = e => {
          Bn(e.target, "js-code-another") && (ui.classList.remove("is-hidden"),
            di.classList.remove("is-visible"),
            mi.classList.add("is-visible"),
            hi.classList.add("form-input_mediahidden"),
            pi.querySelector(".form-input__input").removeAttribute("readonly"),
            document.querySelector("#preorder-code").value = "")
        }
        , Li = () => {
          document.querySelector(".swal2-container").addEventListener("click", (function (e) {
            const t = e.target;
            document.querySelector(".swal2-popup").contains(t) || document.querySelector(".swal2-close").click()
          }
          ))
        }
        , Ei = e => {
          e.preventDefault();
          const t = document.querySelector(".preorder")
            , n = new FormData(t)
            , o = [];
          for (let e of n.entries())
            o[e[0]] = e[1];
          o.web_form_apply = "Y",
            BX.ajax({
              method: "POST",
              url: "/local/templates/beurer/assets/popups/popup-preorder.php",
              data: o,
              timeout: 3e3,
              onfailure: function (e) {
                console.log(e)
              },
              onsuccess: function (e) {
                ki(e),
                  Li(),
                  setTimeout((() => {
                    document.querySelector(".swal2-close").click()
                  }
                  ), 5e3)
              }
            })
        }
        , ki = e => {
          En.fire({
            ...kn,
            title: !1,
            html: e,
            customClass: {
              container: "swal2-container_auto",
              popup: "swal2-popup_auto",
              title: "swal2-title_auto",
              image: "swal2-image_auto"
            },
            didOpen: () => { }
          })
        }
        , Ai = e => {
          En.fire({
            ...kn,
            title: "Предзаказ",
            html: e,
            didOpen: () => {
              (() => {
                const e = document.querySelector(".preorder")
                  , t = document.querySelector("#preorder-email")
                  , n = document.querySelector("#preorder-code");
                pi = document.querySelector("#preorder-phone"),
                  hi = document.querySelector(".js-code-phone"),
                  ui = document.querySelector(".js-code-getcode"),
                  di = document.querySelector(".js-code-another"),
                  mi = document.querySelector(".js-code-input"),
                  fi = document.getElementById("preorder-confirm-code"),
                  Ja(Qa(), pi),
                  Vn(pi),
                  Ga(Qa(), t),
                  Qa()(e),
                  pi.addEventListener("input", _i),
                  n.addEventListener("input", gi),
                  document.addEventListener("click", bi),
                  document.addEventListener("click", Si),
                  sr(document.querySelectorAll("#preorder-count")),
                  Mn(e, ["change", "input"], xi),
                  e.addEventListener("submit", Ei),
                  Li()
              }
              )()
            }
          })
        }
        , Ci = e => {
          if (Bn(e.target, li)) {
            e.preventDefault();
            const t = e.target
              , n = t.classList.contains(li) ? t.getAttribute("data-modal") : t.closest(".js-preorder").getAttribute("data-modal");
            xn(n, Ai)
          }
        }
        , xi = () => {
          const e = document.querySelector(".preorder")
            , t = document.querySelector(".js-preorder-submit")
            , n = e.checkValidity();
          Nn(t, n)
        }
        , Ti = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = document.querySelectorAll(e)
            , o = document.querySelectorAll(`${e} ~ .swiper-button-prev`)
            , a = document.querySelectorAll(`${e} ~ .swiper-button-next`)
            , r = 20
            , s = {
              preloadImages: !1,
              lazy: !0,
              loadOnTransitionStart: !0,
              breakpoints: {
                320: {
                  spaceBetween: r,
                  slidesPerView: 2
                },
                768: {
                  spaceBetween: r,
                  slidesPerView: 3
                },
                993: {
                  spaceBetween: r,
                  slidesPerView: 4
                },
                1180: {
                  spaceBetween: 0,
                  slidesPerView: 4
                }
              }
            };
          n.forEach(((e, n) => {
            new zs.Z(e, {
              ...s,
              navigation: {
                nextEl: a[n],
                prevEl: o[n]
              },
              ...t
            })
          }
          ))
        }
        , ji = e => {
          if (Bn(e.target, "js-input-inc")) {
            const t = e.target.closest(".incdec").querySelector(".js-input-count");
            t.value = "" === t.value ? 1 : parseInt(t.value) + 1
          }
        }
        , qi = e => {
          if (Bn(e.target, "js-input-dec")) {
            const t = e.target.closest(".incdec").querySelector(".js-input-count");
            t.value = "" === t.value || 1 === parseInt(t.value) ? 1 : parseInt(t.value) - 1
          }
        }
        , Pi = () => {
          document.addEventListener("click", ji),
            document.addEventListener("click", qi)
        }
        ;
      window.addEventListener("DOMContentLoaded", Pi),
        window.initProductCarousel = () => Ti(".js-productslist"),
        window.addEventListener("DOMContentLoaded", (() => {
          Mr.classList.contains("header_checkout") || (document.addEventListener("click", (e => {
            $r(e)
          }
          )),
            window.addEventListener("resize", (e => {
              $r(e),
                Nr()
            }
            ))),
            qr.forEach((e => {
              e.addEventListener("click", Ir)
            }
            )),
            document.addEventListener("click", Vr),
            document.addEventListener("swiped-left", (() => document.querySelector(".js-header-aside").classList.remove("is-opened"))),
            document.addEventListener("click", jr),
            document.addEventListener("click", Hr),
            document.addEventListener("click", Ar),
            document.addEventListener("click", kr),
            document.addEventListener("click", Cr),
            or(),
            document.addEventListener("click", Tn),
            Fr.Z.get("hide-cookie-popup") || En.fire({
              ...kn,
              title: !1,
              position: "bottom",
              backdrop: !1,
              customClass: {
                container: "swal2-container_cookie",
                popup: "swal2-popup_cookie",
                title: "swal2-title_cookie",
                image: "swal2-image_cookie"
              },
              html: "<div class='cookie'><div class='cookie__text'><span class='show show_desktop'>Сайт использует cookie-файлы. Продолжив просмотр сайта, Вы таким образом подтверждаете свое согласие на использование этих файлов.</span><span class='show show_tablet'>Сайт использует cookie-файлы. Продолжив просмотр сайта, Вы таким образом подтверждаете свое согласие на использование этих файлов.</span><span class='show show_mobile'>Продолжая просмотр сайта Вы соглашаетесь с использованием cookie-файлов.</span> <a href='/politika-v-otnoshenii-faylov-cookie/' class='cookie__link'>Подробнее о cookie-файлах</a></div><button class='cookie__button button js-close-popup' type='button'>Закрыть</button></div>",
              showClass: {
                popup: "animate__animated animate__slideInUp"
              },
              hideClass: {
                popup: "animate__animated animate__slideOutDown"
              },
              didOpen: () => { }
              ,
              didClose: () => {
                document.cookie = "hide-cookie-popup=true; max-age=7776000; path=/"
              }
            }),
            (() => {
              const e = document.querySelector(".js-search-input")
                , t = document.querySelector(".js-search")
                , n = document.querySelector(".js-search-suggestions");
              Dn(e) && (e.addEventListener("input", os),
                e.addEventListener("focus", ts),
                e.addEventListener("blur", ns),
                t.addEventListener("reset", es),
                n.addEventListener("mousedown", as)),
                document.addEventListener("click", Gr)
            }
            )(),
            document.addEventListener("click", ps),
            document.addEventListener("click", ms),
            document.addEventListener("click", us),
            document.addEventListener("click", ws),
            document.addEventListener("click", Ps),
            Ss.classList.contains("is-always-fixed") && null !== Cs && (Ss.style.top = Cs.offsetHeight + "px"),
            Ss.classList.contains("header_checkout") || (On() && Ts(),
              On() || xs(),
              document.addEventListener("scroll", js),
              window.addEventListener("resize", qs)),
            document.addEventListener("click", Os),
            ir(),
            document.addEventListener("click", $s),
            document.addEventListener("click", Vs),
            document.querySelectorAll(".js-credit-tip").forEach((e => {
              (0,
                Hs.ZP)(".js-credit-tip", {
                  content: e.getAttribute("data-tip"),
                  placement: "bottom-start",
                  offset: [-11, 11],
                  maxWidth: 165
                })
            }
            )),
            Dn(Fs) && Fs.addEventListener("click", Us),
            (() => {
              const e = document.querySelector(".js-subscribe-form")
                , t = document.querySelector("#subscr-email");
              Dn(e) && (Ga(Qa(), t),
                Qa()(e),
                e.addEventListener("submit", Rs))
            }
            )(),
            (() => {
              const e = document.createElement("p");
              e.style.width = "100%",
                e.style.height = "200px";
              const t = document.createElement("div");
              t.style.position = "absolute",
                t.style.top = "0px",
                t.style.left = "0px",
                t.style.visibility = "hidden",
                t.style.width = "200px",
                t.style.height = "150px",
                t.style.overflow = "hidden",
                t.appendChild(e),
                document.body.appendChild(t);
              let n = e.offsetWidth;
              t.style.overflow = "scroll";
              let o = e.offsetWidth;
              n === o && (o = t.clientWidth),
                document.body.removeChild(t),
                document.documentElement.style.setProperty("--scroll_width", n - o + "px")
            }
            )(),
            Ws(),
            ei = new zs.Z(".js-compare", {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: {
                nextEl: ".js-compare ~ .swiper-button-next",
                prevEl: ".js-compare ~ .swiper-button-prev"
              },
              breakpoints: {
                320: {
                  slidesPerView: 2
                },
                709: {
                  slidesPerView: 3
                },
                993: {
                  slidesPerView: 4
                }
              }
            }),
            document.addEventListener("click", Js),
            Dn(Xs) && Xs.addEventListener("change", (() => {
              Xs.checked ? Array.from(Qs).forEach((e => e.style.display = "none")) : Array.from(Qs).forEach((e => e.style.removeProperty("display")))
            }
            )),
            Gs(),
            ai(),
            ri(),
            si(),
            window.addEventListener("resize", (function () {
              si()
            }
            )),
            document.addEventListener("click", Ci),
            document.addEventListener("confirm_code", vi),
            Pi(),
            Ti(".js-productslist")
        }
        )),
        window.getEcommerce = class {
          constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.dataLayer = e,
              this.ajaxUrlForItem = "/local/ajax/ecommerce/product_info.php",
              this.ajaxUrlForItemFromBasket = "/local/ajax/ecommerce/product_info_from_basket.php",
              this.ajaxUrlForBasket = "/local/ajax/ecommerce/basket_info.php",
              this.ajaxUrlForOrder = "/local/ajax/ecommerce/order_info.php",
              this.ajaxUrlForProductsRemove = "/local/ajax/ecommerce/products_remove.php",
              this.currency = "RUB"
          }
          addToCart(e) {
            this.fetchQuery(this.ajaxUrlForItem, e).then((e => {
              this.dataLayer.push({
                ecommerce: null
              }),
                e.VALUE && e.ITEMS && this.dataLayer.push({
                  event: "add_to_cart",
                  user_id: e.USER_ID,
                  ecommerce: {
                    currency: this.currency,
                    value: e.VALUE,
                    items: e.ITEMS
                  }
                })
            }
            )).catch((e => console.error(e)))
          }
          addToCartFromBasket(e) {
            this.fetchQuery(this.ajaxUrlForItemFromBasket, e).then((e => {
              this.dataLayer.push({
                ecommerce: null
              }),
                e.VALUE && e.ITEMS && this.dataLayer.push({
                  event: "add_to_cart",
                  user_id: e.USER_ID,
                  ecommerce: {
                    currency: this.currency,
                    value: e.VALUE,
                    items: e.ITEMS
                  }
                })
            }
            )).catch((e => console.error(e)))
          }
          removeFromCart(e) {
            this.fetchQuery(this.ajaxUrlForProductsRemove, {
              items: e
            }).then((e => {
              this.dataLayer.push({
                ecommerce: null
              }),
                e.VALUE && e.ITEMS && this.dataLayer.push({
                  event: "remove_from_cart",
                  user_id: e.USER_ID,
                  ecommerce: {
                    currency: this.currency,
                    value: e.VALUE,
                    coupon: e.COUPON ? e.COUPON : "",
                    items: e.ITEMS
                  }
                })
            }
            )).catch((e => console.error(e)))
          }
          purchase(e) {
            this.fetchQuery(this.ajaxUrlForOrder, {
              orderId: e
            }).then((e => {
              this.dataLayer.push({
                ecommerce: null
              }),
                e.PRICE && e.ITEMS && e.TRANSACTION_ID && this.dataLayer.push({
                  event: "purchase",
                  user_id: e.USER_ID,
                  ecommerce: {
                    transaction_id: e.TRANSACTION_ID,
                    currency: this.currency,
                    value: e.PRICE,
                    coupon: e.COUPON ? e.COUPON : "",
                    tax: e.TAX,
                    shipping: e.SHIPPING,
                    items: e.ITEMS
                  }
                })
            }
            )).catch((e => console.error(e)))
          }
          beginCheckout() {
            this.fetchQuery(this.ajaxUrlForBasket).then((e => {
              this.dataLayer.push({
                ecommerce: null
              }),
                e.PRICE && e.ITEMS && this.dataLayer.push({
                  event: "begin_checkout",
                  user_id: e.USER_ID,
                  ecommerce: {
                    currency: this.currency,
                    value: e.PRICE,
                    coupon: e.COUPON ? e.COUPON : "",
                    items: e.ITEMS
                  }
                })
            }
            )).catch((e => console.error(e)))
          }
          async fetchQuery(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = new FormData;
            Object.keys(t).length > 0 && Object.keys(t).forEach((e => {
              "object" == typeof t[e] ? n.append(e, JSON.stringify(t[e])) : n.append(e, t[e])
            }
            ));
            let o = await fetch(e, {
              method: "POST",
              body: n
            });
            if (o.ok)
              return await o.json()
          }
        }
    }
  }, n = {};
  function o(e) {
    var a = n[e];
    if (void 0 !== a)
      return a.exports;
    var r = n[e] = {
      exports: {}
    };
    return t[e].call(r.exports, r, r.exports, o),
      r.exports
  }
  o.m = t,
    e = [],
    o.O = function (t, n, a, r) {
      if (!n) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          n = e[u][0],
            a = e[u][1],
            r = e[u][2];
          for (var i = !0, c = 0; c < n.length; c++)
            (!1 & r || s >= r) && Object.keys(o.O).every((function (e) {
              return o.O[e](n[c])
            }
            )) ? n.splice(c--, 1) : (i = !1,
              r < s && (s = r));
          if (i) {
            e.splice(u--, 1);
            var l = a();
            void 0 !== l && (t = l)
          }
        }
        return t
      }
      r = r || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > r; u--)
        e[u] = e[u - 1];
      e[u] = [n, a, r]
    }
    ,
    o.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      }
        : function () {
          return e
        }
        ;
      return o.d(t, {
        a: t
      }),
        t
    }
    ,
    o.d = function (e, t) {
      for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        })
    }
    ,
    o.g = function () {
      if ("object" == typeof globalThis)
        return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window)
          return window
      }
    }(),
    o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }
    ,
    o.j = 143,
    function () {
      var e = {
        143: 0
      };
      o.O.j = function (t) {
        return 0 === e[t]
      }
        ;
      var t = function (t, n) {
        var a, r, s = n[0], i = n[1], c = n[2], l = 0;
        if (s.some((function (t) {
          return 0 !== e[t]
        }
        ))) {
          for (a in i)
            o.o(i, a) && (o.m[a] = i[a]);
          if (c)
            var u = c(o)
        }
        for (t && t(n); l < s.length; l++)
          r = s[l],
            o.o(e, r) && e[r] && e[r][0](),
            e[s[l]] = 0;
        return o.O(u)
      }
        , n = self.webpackChunkproject_template = self.webpackChunkproject_template || [];
      n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
  var a = o.O(void 0, [736], (function () {
    return o(8432)
  }
  ));
  a = o.O(a)
}();
