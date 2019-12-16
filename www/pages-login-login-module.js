(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"login-top\">\n    <ion-content padding class=\"login\">\n        <ion-item lines=\"none\">\n            <ion-title class=\"login--title\">LOGIN</ion-title>\n        </ion-item>\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\" class=\"login--form\">\n            <ion-item lines=\"none\">\n                <ion-label class=\"login--form--label\" position=\"floating\">Username</ion-label>\n                <ion-input\n                        class=\"login--form--input\"\n                        type=\"text\"\n                        formControlName=\"username\">\n                </ion-input>\n                <span class=\"login--form--error\" [hidden]=\"form.controls.username.valid || form.controls.username.pristine\">Email non\n              valida</span>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-label class=\"login--form--label\" position=\"floating\">Password</ion-label>\n                <ion-input\n                        class=\"login--form--input\"\n                        type=\"password\"\n                        formControlName=\"password\">\n                </ion-input>\n                <span class=\"login--form--error\" [hidden]=\"form.controls.password.valid || form.controls.password.pristine\">Password non\n              valida o troppo corta</span>\n            </ion-item>\n            <button class=\"login--button\" type=\"submit\" class=\"fill\" [disabled]=\"!form.valid\">Login</button>\n        </form>\n    </ion-content>\n</div>\n<div class=\"login-bottom\">\n    <p>{{ 'LOGIN.text' | translate:params }} <span> <a routerLink=\"#\">Sign-in</a> </span> </p>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** personal **/\n  --ion-color-personal: #2c3e50;\n  --ion-color-personal-rgb: 244, 244, 244;\n  --ion-color-personal-contrast: #ffffff;\n  --ion-color-personal-contrast-rgb: 0, 0, 0;\n  --ion-color-personal-shade: #d7d8da;\n  --ion-color-personal-tint: #f5f6f9; }\n.ion-color-personal {\n  background: #f46b45;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #eea849, #f46b45);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n/*MENU*/\n/*PAGES*/\n.fill:hover,\n.fill:focus {\n  box-shadow: inset 0 0 0 2em var(--hover); }\n.pulse:hover,\n.pulse:focus {\n  -webkit-animation: pulse 1s;\n          animation: pulse 1s;\n  box-shadow: 0 0 0 2em rgba(255, 255, 255, 0); }\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 var(--hover); } }\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 var(--hover); } }\n.close:hover,\n.close:focus {\n  box-shadow: inset -3.5em 0 0 0 var(--hover), inset 3.5em 0 0 0 var(--hover); }\n.raise:hover,\n.raise:focus {\n  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\n  transform: translateY(-0.25em); }\n.up:hover,\n.up:focus {\n  box-shadow: inset 0 -3.25em 0 0 var(--hover); }\n.slide:hover,\n.slide:focus {\n  box-shadow: inset 6.5em 0 0 0 var(--hover); }\n.offset {\n  box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color); }\n.offset:hover, .offset:focus {\n    box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover); }\n.fill {\n  --color: #eea849;\n  --hover: #eea849; }\n.pulse {\n  --color: #ef6eae;\n  --hover: #eea849; }\n.close {\n  --color: #ff7f82;\n  --hover: #eea849; }\n.raise {\n  --color: #ffa260;\n  --hover: #eea849; }\n.up {\n  --color: #e4cb58;\n  --hover: #eea849; }\n.slide {\n  --color: #8fc866;\n  --hover: #eea849; }\n.offset {\n  --color: #19bc8b;\n  --hover: #eea849; }\nbutton {\n  color: var(--color);\n  transition: 0.25s; }\nbutton:hover, button:focus {\n    border-color: var(--hover);\n    color: #fff; }\nbutton {\n  background: none;\n  border: 2px solid;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n  height: 50px; }\n.login-top {\n  padding: 25px;\n  top: 10%;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  position: absolute;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  text-align: center; }\n.login {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%); }\n.login--title {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 400;\n    color: grey;\n    letter-spacing: 5px; }\n.login--form--label {\n    padding: 6px;\n    color: #eea849 !important; }\n.login--form--input {\n    border: none;\n    border-bottom: 1px solid #eea849; }\n.login--form--error {\n    color: #eea849;\n    text-align: center;\n    border: 1px solid #eea849;\n    font-size: 12px;\n    display: block;\n    width: 100%;\n    padding: 2px;\n    margin-top: 5px; }\n.login--button {\n    margin-top: 25px;\n    position: relative; }\n.login-bottom {\n  background: linear-gradient(to right, #eea849, #f46b45);\n  -webkit-clip-path: polygon(0 20%, 0% 100%, 100% 100%);\n          clip-path: polygon(0 20%, 0% 100%, 100% 100%);\n  height: 30%;\n  bottom: 0;\n  width: 100%;\n  z-index: 1000 !important;\n  position: absolute; }\n.login-bottom p {\n    bottom: 0px;\n    position: absolute;\n    color: #fff;\n    padding: 10px; }\n.login-bottom p span {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9naXQvc3Vuc3RpbmcyL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2RhdmlkZS9naXQvc3Vuc3RpbmcyL3NyYy90aGVtZS9idXR0b25zLnNjc3MiLCIvaG9tZS9kYXZpZGUvZ2l0L3N1bnN0aW5nMi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixxQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLCtDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGdCQUFBO0VBQ0EsOEJBQXNCO0VBQ3RCLHVDQUEwQjtFQUMxQix1Q0FBK0I7RUFDL0IsaURBQW1DO0VBQ25DLG9DQUE0QjtFQUM1QixtQ0FBMkI7RUFFM0IsZUFBQTtFQUNBLDZCQUFxQjtFQUNyQixzQ0FBeUI7RUFDekIsc0NBQThCO0VBQzlCLGdEQUFrQztFQUNsQyxtQ0FBMkI7RUFDM0Isa0NBQTBCO0VBRTFCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsb0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QiwrQ0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLG9DQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsK0NBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsYUFBQTtFQUNBLDJCQUFtQjtFQUNuQixtQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLDhDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLFdBQUE7RUFDQSx5QkFBaUI7RUFDakIsZ0NBQXFCO0VBQ3JCLGtDQUEwQjtFQUMxQiw0Q0FBOEI7RUFDOUIsK0JBQXVCO0VBQ3ZCLDhCQUFzQjtFQUV0QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLHFDQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsOENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsWUFBQTtFQUNBLDBCQUFrQjtFQUNsQixvQ0FBc0I7RUFDdEIsbUNBQTJCO0VBQzNCLHVDQUErQjtFQUMvQixnQ0FBd0I7RUFDeEIsK0JBQXVCO0VBRXZCLGVBQUE7RUFDQSw2QkFBcUI7RUFDckIsdUNBQXlCO0VBQ3pCLHNDQUE4QjtFQUM5QiwwQ0FBa0M7RUFDbEMsbUNBQTJCO0VBQzNCLGtDQUEwQixFQUFBO0FBSzVCO0VBQ0UsbUJBQW1CO0VBQUcsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUsdURBQXVEO0VBQUUscUVBQUEsRUFBc0U7QUFNakksT0FBQTtBQUlBLFFBQUE7QUNuR0E7O0VBRUUsd0NBQXdDLEVBQUE7QUFJMUM7O0VBRUUsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0Q0FBK0IsRUFBQTtBQUdqQztFQUNFO0lBQUssZ0NBQWdDLEVBQUEsRUFBQTtBQUR2QztFQUNFO0lBQUssZ0NBQWdDLEVBQUEsRUFBQTtBQUl2Qzs7RUFFRSwyRUFFc0MsRUFBQTtBQUl4Qzs7RUFFRSw2Q0FBNkM7RUFDN0MsOEJBQThCLEVBQUE7QUFJaEM7O0VBRUUsNENBQTRDLEVBQUE7QUFJOUM7O0VBRUUsMENBQTBDLEVBQUE7QUFJNUM7RUFDRSw0RUFFMEMsRUFBQTtBQUg1QztJQU9JLGtFQUV3QyxFQUFBO0FBb0IxQztFQUNFLGdCQUFRO0VBQ1IsZ0JBQVEsRUFBQTtBQUZWO0VBQ0UsZ0JBQVE7RUFDUixnQkFBUSxFQUFBO0FBRlY7RUFDRSxnQkFBUTtFQUNSLGdCQUFRLEVBQUE7QUFGVjtFQUNFLGdCQUFRO0VBQ1IsZ0JBQVEsRUFBQTtBQUZWO0VBQ0UsZ0JBQVE7RUFDUixnQkFBUSxFQUFBO0FBRlY7RUFDRSxnQkFBUTtFQUNSLGdCQUFRLEVBQUE7QUFGVjtFQUNFLGdCQUFRO0VBQ1IsZ0JBQVEsRUFBQTtBQUtaO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0FBRm5CO0lBTUksMEJBQTBCO0lBQzFCLFdBQVcsRUFBQTtBQUtmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBVyxFQUFBO0FDbkdiO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFFbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBaUI7RUFDakIsUUFBTztFQUNQLDJCQUEyQixFQUFBO0FBQzNCO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVTtJQUNWLG1CQUFtQixFQUFBO0FBR25CO0lBQ0UsWUFBVztJQUNYLHlCQUE2QixFQUFBO0FBRS9CO0lBQ0UsWUFBWTtJQUNaLGdDRjREYSxFQUFBO0FFMURmO0lBQ0UsY0Z5RGE7SUV4RGIsa0JBQWtCO0lBQ2xCLHlCRnVEYTtJRXREYixlQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVU7SUFDVixZQUFXO0lBQ1gsZUFBZSxFQUFBO0FBR25CO0lBQ0UsZ0JBQWU7SUFDZixrQkFBa0IsRUFBQTtBQUl0QjtFQUNFLHVEQUF1RDtFQUN2RCxxREFBNkM7VUFBN0MsNkNBQTZDO0VBQzdDLFdBQVc7RUFDWCxTQUFRO0VBQ1IsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0IsRUFBQTtBQVBwQjtJQVNJLFdBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVTtJQUNWLGFBQVksRUFBQTtBQVpoQjtNQWNNLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMGNkMWU4O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxMiwgMjA5LCAyMzI7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGJiOGNjO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI0ZDZlYTtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzI4ZTA3MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjA2LCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAvKiogcGVyc29uYWwgKiovXG4gIC0taW9uLWNvbG9yLXBlcnNvbmFsOiAjMmMzZTUwO1xuICAtLWlvbi1jb2xvci1wZXJzb25hbC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLXBlcnNvbmFsLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wZXJzb25hbC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXBlcnNvbmFsLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1wZXJzb25hbC10aW50OiAjZjVmNmY5O1xuXG5cbn1cblxuLmlvbi1jb2xvci1wZXJzb25hbCB7XG4gIGJhY2tncm91bmQ6ICNmNDZiNDU7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVhODQ5LCAjZjQ2YjQ1KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlYTg0OSwgI2Y0NmI0NSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuJGZpcnN0Q29sb3I6I2VlYTg0OTtcbiRzZWNvbmRDb2xvcjojZjQ2YjQ1O1xuXG4vKk1FTlUqL1xuJG1lbnVMYWJlbENvbG9yOiAjZGRkO1xuJG1lbnVJY29uQ29sb3I6ICM3ZjhjOGQ7XG5cbi8qUEFHRVMqL1xuJHRpdGxlQ29sb3I6IzdmOGM4ZDtcbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbi8vIEFuaW1hdGUgdGhlIHNpemUsIGluc2lkZVxuLmZpbGw6aG92ZXIsXG4uZmlsbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJlbSB2YXIoLS1ob3Zlcik7XG59XG5cbi8vIEFuaW1hdGUgdGhlIHNpemUsIG91dHNpZGVcbi5wdWxzZTpob3Zlcixcbi5wdWxzZTpmb2N1cyB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMXM7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJlbSByZ2JhKCNmZmYsMCk7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgdmFyKC0taG92ZXIpOyB9XG59XG5cbi8vIFN0YWNrIG11bHRpcGxlIHNoYWRvd3MsIG9uZSBmcm9tIHRoZSBsZWZ0LCB0aGUgb3RoZXIgZnJvbSB0aGUgcmlnaHRcbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6XG4gICAgICAgICAgaW5zZXQgLTMuNWVtIDAgMCAwIHZhcigtLWhvdmVyKSxcbiAgICAgICAgICBpbnNldCAzLjVlbSAwIDAgMCB2YXIoLS1ob3Zlcik7XG59XG5cbi8vIFNpemUgY2FuIGFsc28gYmUgbmVnYXRpdmU7IHNlZSBob3cgaXQncyBzbWFsbGVyIHRoYW4gdGhlIGVsZW1lbnRcbi5yYWlzZTpob3Zlcixcbi5yYWlzZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gMC41ZW0gLTAuNGVtIHZhcigtLWhvdmVyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xufVxuXG4vLyBBbmltYXRpbmcgZnJvbSB0aGUgYm90dG9tXG4udXA6aG92ZXIsXG4udXA6Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zLjI1ZW0gMCAwIHZhcigtLWhvdmVyKTtcbn1cblxuLy8gQW5kIGZyb20gdGhlIGxlZnRcbi5zbGlkZTpob3Zlcixcbi5zbGlkZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDYuNWVtIDAgMCAwIHZhcigtLWhvdmVyKTtcbn1cblxuLy8gTXVsdGlwbGUgc2hhZG93cywgb25lIG9uIHRoZSBvdXRzaWRlLCBhbm90aGVyIG9uIHRoZSBpbnNpZGVcbi5vZmZzZXQge1xuICBib3gtc2hhZG93OlxuICAgICAgICAgIDAuM2VtIDAuM2VtIDAgMCB2YXIoLS1jb2xvciksXG4gICAgICAgICAgaW5zZXQgMC4zZW0gMC4zZW0gMCAwIHZhcigtLWNvbG9yKTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OlxuICAgICAgICAgICAgMCAwIDAgMCB2YXIoLS1ob3ZlciksXG4gICAgICAgICAgICBpbnNldCA2ZW0gMy41ZW0gMCAwIHZhcigtLWhvdmVyKTtcbiAgfVxufVxuXG4vLz09PSBTZXQgYnV0dG9uIGNvbG9yc1xuLy8gSWYgeW91IHdvbmRlciB3aHkgdXNlIFNhc3MgdmFycyBvciBDU1MgY3VzdG9tIHByb3BlcnRpZXMuLi5cbi8vIE1ha2UgYSBtYXAgd2l0aCB0aGUgY2xhc3MgbmFtZXMgYW5kIG1hdGNoaW5nIGNvbG9yc1xuJGNvbG9yczogKFxuICAgICAgICBmaWxsOiAkZmlyc3RDb2xvcixcbiAgICAgICAgcHVsc2U6ICNlZjZlYWUsXG4gICAgICAgIGNsb3NlOiAjZmY3ZjgyLFxuICAgICAgICByYWlzZTogI2ZmYTI2MCxcbiAgICAgICAgdXA6ICNlNGNiNTgsXG4gICAgICAgIHNsaWRlOiAjOGZjODY2LFxuICAgICAgICBvZmZzZXQ6ICMxOWJjOGJcbik7XG5cbi8vIFNhc3MgdmFyaWFibGVzIGNvbXBpbGUgdG8gYSBzdGF0aWMgc3RyaW5nOyBDU1MgdmFyaWFibGVzIGFyZSBkeW5hbWljIGFuZCBpbmhlcml0ZWRcbi8vIExvb3AgdGhyb3VnaCB0aGUgbWFwIGFuZCBzZXQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIHVzaW5nIFNhc3MgdmFyaWFibGVzXG5AZWFjaCAkYnV0dG9uLCAkY29sb3IgaW4gJGNvbG9ycyB7XG4gIC4jeyRidXR0b259IHtcbiAgICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gICAgLS1ob3ZlcjogI3skZmlyc3RDb2xvcn07XG4gIH1cbn1cblxuLy8gTm93IGV2ZXJ5IGJ1dHRvbiB3aWxsIGhhdmUgZGlmZmVyZW50IGNvbG9ycyBhcyBzZXQgYWJvdmUuIFdlIGdldCB0byB1c2UgdGhlIHNhbWUgc3RydWN0dXJlLCBvbmx5IGNoYW5naW5nIHRoZSBjdXN0b20gcHJvcGVydGllcy5cbmJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taG92ZXIpO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi8vIEJhc2ljIGJ1dHRvbiBzdHlsZXNcbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBmb250OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtIDJlbTtcbiAgaGVpZ2h0OjUwcHg7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9idXR0b25zJztcblxuLmxvZ2luLXRvcCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRvcDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vY2VudGVyIGFsbCBldmVyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2lue1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAmLS10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOmdyZXk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxuICAmLS1mb3Jte1xuICAgICYtLWxhYmVse1xuICAgICAgcGFkZGluZzo2cHg7XG4gICAgICBjb2xvcjogJGZpcnN0Q29sb3IgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi0taW5wdXR7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAkZmlyc3RDb2xvcjtcbiAgICB9XG4gICAgJi0tZXJyb3J7XG4gICAgICBjb2xvcjogJGZpcnN0Q29sb3I7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkZmlyc3RDb2xvcjtcbiAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgcGFkZGluZzoycHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG4gICYtLWJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5sb2dpbi1ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWE4NDksICNmNDZiNDUpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMCUsIDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gIGhlaWdodDogMzAlO1xuICBib3R0b206MDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwe1xuICAgIGJvdHRvbTowcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIHNwYW57XG4gICAgICBjb2xvcjojZmZmO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.url = '../assets/ssLogo.png';
        this.title = 'Login';
        this.submitted = false;
        this.loading = false;
        this.form = formBuilder.group({
            username: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]
            ],
            password: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]
            ]
        });
    }
    LoginPage.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        var username = form.value.username;
        var password = form.value.password;
        this.authService.login(username, password);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginPage);
    return LoginPage;
}()); //END CLASS



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map