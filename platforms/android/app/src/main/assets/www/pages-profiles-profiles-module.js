(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profiles-profiles-module"],{

/***/ "./src/app/pages/profiles/profiles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPageModule", function() { return ProfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profiles.page */ "./src/app/pages/profiles/profiles.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _profiles_page__WEBPACK_IMPORTED_MODULE_6__["ProfilesPage"]
    }
];
var ProfilesPageModule = /** @class */ (function () {
    function ProfilesPageModule() {
    }
    ProfilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profiles_page__WEBPACK_IMPORTED_MODULE_6__["ProfilesPage"]]
        })
    ], ProfilesPageModule);
    return ProfilesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{title}}\"></app-header>\n\n<ion-content>\n  <div>\n    <ion-card  class=\"profile\" color=\"personal\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-avatar class=\"profile--avatar\">\n            <img src=\"https://i.pravatar.cc/150?img={{user.id}}\" >\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"profile--label\">\n            <div class=\"profile--label--name\">\n              {{user.firstName}} {{user.lastName}}\n            </div>\n            <div class=\"profile--label--place\">\n              <ion-icon name=\"pin\"></ion-icon>\n              London\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-segment class=\"profile--segment\">\n      <ion-segment-button class=\"profile--segment--button\" >\n        <ion-label class=\"profile--segment--button--label\">Follower</ion-label>\n        <ion-text class=\"profile--segment--button--text\">366</ion-text>\n      </ion-segment-button>\n      <ion-segment-button class=\"profile--segment--button\">\n        <ion-label class=\"profile--segment--button--label\">Following</ion-label>\n        <ion-text class=\"profile--segment--button--text\">244</ion-text>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <app-post [posts]=\"filteredPost\"></app-post>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** personal **/\n  --ion-color-personal: #2c3e50;\n  --ion-color-personal-rgb: 244, 244, 244;\n  --ion-color-personal-contrast: #ffffff;\n  --ion-color-personal-contrast-rgb: 0, 0, 0;\n  --ion-color-personal-shade: #d7d8da;\n  --ion-color-personal-tint: #f5f6f9; }\n.ion-color-personal {\n  background: #f46b45;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #eea849, #f46b45);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n/*MENU*/\n/*PAGES*/\n.profile {\n  margin: 0;\n  padding-bottom: 50px;\n  border-radius: 0; }\n.profile--avatar {\n    margin: auto; }\n.profile--label {\n    text-align: center;\n    color: #f5f6f9; }\n.profile--label--name {\n      letter-spacing: 1.5px;\n      padding: 5px;\n      text-transform: uppercase; }\n.profile--segment {\n    width: 80%;\n    margin: auto;\n    height: 100px;\n    background-color: #fff;\n    bottom: 50px;\n    position: relative;\n    border-radius: 5px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n    border: none; }\n.profile--segment--button {\n      border-bottom: 2px solid #eea849;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      color: #7f8c8d;\n      --color-activated:$secondColor;\n      --background-activated: #fff !important;\n      --background-checked: #fff !important;\n      --background-hover: #fff !important;\n      --background: #fff !important; }\n.profile--segment--button--label {\n        font-size: 12px; }\n.profile--segment--button--text {\n        font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9naXQvc3Vuc3RpbmcyL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2RhdmlkZS9naXQvc3Vuc3RpbmcyL3NyYy9hcHAvcGFnZXMvcHJvZmlsZXMvcHJvZmlsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLHFDQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsK0NBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsZ0JBQUE7RUFDQSw4QkFBc0I7RUFDdEIsdUNBQTBCO0VBQzFCLHVDQUErQjtFQUMvQixpREFBbUM7RUFDbkMsb0NBQTRCO0VBQzVCLG1DQUEyQjtFQUUzQixlQUFBO0VBQ0EsNkJBQXFCO0VBQ3JCLHNDQUF5QjtFQUN6QixzQ0FBOEI7RUFDOUIsZ0RBQWtDO0VBQ2xDLG1DQUEyQjtFQUMzQixrQ0FBMEI7RUFFMUIsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixvQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLCtDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsb0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QiwrQ0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLG1DQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsOENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsV0FBQTtFQUNBLHlCQUFpQjtFQUNqQixnQ0FBcUI7RUFDckIsa0NBQTBCO0VBQzFCLDRDQUE4QjtFQUM5QiwrQkFBdUI7RUFDdkIsOEJBQXNCO0VBRXRCLGFBQUE7RUFDQSwyQkFBbUI7RUFDbkIscUNBQXVCO0VBQ3ZCLG9DQUE0QjtFQUM1Qiw4Q0FBZ0M7RUFDaEMsaUNBQXlCO0VBQ3pCLGdDQUF3QjtFQUV4QixZQUFBO0VBQ0EsMEJBQWtCO0VBQ2xCLG9DQUFzQjtFQUN0QixtQ0FBMkI7RUFDM0IsdUNBQStCO0VBQy9CLGdDQUF3QjtFQUN4QiwrQkFBdUI7RUFFdkIsZUFBQTtFQUNBLDZCQUFxQjtFQUNyQix1Q0FBeUI7RUFDekIsc0NBQThCO0VBQzlCLDBDQUFrQztFQUNsQyxtQ0FBMkI7RUFDM0Isa0NBQTBCLEVBQUE7QUFLNUI7RUFDRSxtQkFBbUI7RUFBRyw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSx1REFBdUQ7RUFBRSxxRUFBQSxFQUFzRTtBQU1qSSxPQUFBO0FBSUEsUUFBQTtBQ25HQTtFQUNFLFNBQVE7RUFDUixvQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFDaEI7SUFDRSxZQUFZLEVBQUE7QUFFZDtJQUNFLGtCQUFpQjtJQUNqQixjQUFjLEVBQUE7QUFDZDtNQUNFLHFCQUFxQjtNQUNyQixZQUFXO01BQ1gseUJBQXlCLEVBQUE7QUFHN0I7SUFDRSxVQUFTO0lBQ1QsWUFBVztJQUNYLGFBQVk7SUFDWixzQkFBcUI7SUFDckIsWUFBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUNBQXNDO0lBQ3RDLFlBQVksRUFBQTtBQUNaO01BQ0UsZ0NEaUVhO01DaEViLGFBQVk7TUFDWixjQUFjO01BQ2QsZUFBZTtNQUNmLGNEcUVhO01DcEViLDhCQUFrQjtNQUNsQix1Q0FBdUI7TUFDdkIscUNBQXFCO01BQ3JCLG1DQUFtQjtNQUNuQiw2QkFBYSxFQUFBO0FBQ2I7UUFDRSxlQUFjLEVBQUE7QUFFaEI7UUFDRSxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlcy9wcm9maWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyNGQ2ZWE7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmMDQxNDE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLyoqIHBlcnNvbmFsICoqL1xuICAtLWlvbi1jb2xvci1wZXJzb25hbDogIzJjM2U1MDtcbiAgLS1pb24tY29sb3ItcGVyc29uYWwtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1wZXJzb25hbC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcGVyc29uYWwtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1wZXJzb25hbC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItcGVyc29uYWwtdGludDogI2Y1ZjZmOTtcblxuXG59XG5cbi5pb24tY29sb3ItcGVyc29uYWwge1xuICBiYWNrZ3JvdW5kOiAjZjQ2YjQ1OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlYTg0OSwgI2Y0NmI0NSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWE4NDksICNmNDZiNDUpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbiRmaXJzdENvbG9yOiNlZWE4NDk7XG4kc2Vjb25kQ29sb3I6I2Y0NmI0NTtcblxuLypNRU5VKi9cbiRtZW51TGFiZWxDb2xvcjogI2RkZDtcbiRtZW51SWNvbkNvbG9yOiAjN2Y4YzhkO1xuXG4vKlBBR0VTKi9cbiR0aXRsZUNvbG9yOiM3ZjhjOGQ7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbi5wcm9maWxle1xuICBtYXJnaW46MDtcbiAgcGFkZGluZy1ib3R0b206NTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgJi0tYXZhdGFye1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAmLS1sYWJlbHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjb2xvcjogI2Y1ZjZmOTtcbiAgICAmLS1uYW1le1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgcGFkZGluZzo1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxuICAmLS1zZWdtZW50e1xuICAgIHdpZHRoOjgwJTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIGJvdHRvbTo1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgICYtLWJ1dHRvbntcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZmlyc3RDb2xvcjtcbiAgICAgIGJvcmRlci10b3A6MDtcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgY29sb3I6JHRpdGxlQ29sb3I7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDokc2Vjb25kQ29sb3I7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICYtLWxhYmVse1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgIH1cbiAgICAgICYtLXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.ts ***!
  \*************************************************/
/*! exports provided: ProfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPage", function() { return ProfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var ProfilesPage = /** @class */ (function () {
    function ProfilesPage(postsService, usersService, ngZone, activatedRoute, authService) {
        this.postsService = postsService;
        this.usersService = usersService;
        this.ngZone = ngZone;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.url = "../assets/ssLogo.png";
        this.auth = true; //gestire da autenticazione
        this.title = "Profiles";
        this.user = {
            id: 1,
            firstName: "admin",
            lastName: "admin",
            username: "admin"
        };
        this.getUserId();
    }
    ProfilesPage.prototype.ngOnInit = function () { };
    ProfilesPage.prototype.getUserId = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.activatedRoute.queryParams.subscribe(function (params) {
                _this.getFilteredPosts(params.idUser);
                /* this.getFilteredUsers(params.idUser);*/
            });
        });
    };
    ProfilesPage.prototype.getFilteredPosts = function (id) {
        var _this = this;
        this.postsService.getPosts()
            .subscribe(function (posts) {
            _this.filteredPost = posts.data.filter(function (post) {
                return post.owner.id == id;
            });
            _this.user = _this.filteredPost[0].owner;
        });
    };
    ProfilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.page.html */ "./src/app/pages/profiles/profiles.page.html"),
            styles: [__webpack_require__(/*! ./profiles.page.scss */ "./src/app/pages/profiles/profiles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ProfilesPage);
    return ProfilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profiles-profiles-module.js.map