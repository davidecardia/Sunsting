(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertising-advertising-module"],{

/***/ "./src/app/pages/advertising/advertising.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/advertising/advertising.module.ts ***!
  \*********************************************************/
/*! exports provided: AdvertisingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisingPageModule", function() { return AdvertisingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advertising_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertising.page */ "./src/app/pages/advertising/advertising.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _advertising_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisingPage"]
    }
];
var AdvertisingPageModule = /** @class */ (function () {
    function AdvertisingPageModule() {
    }
    AdvertisingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_advertising_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisingPage"]]
        })
    ], AdvertisingPageModule);
    return AdvertisingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advertising/advertising.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/advertising/advertising.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{title}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/advertising/advertising.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/advertising/advertising.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzaW5nL2FkdmVydGlzaW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/advertising/advertising.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/advertising/advertising.page.ts ***!
  \*******************************************************/
/*! exports provided: AdvertisingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisingPage", function() { return AdvertisingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdvertisingPage = /** @class */ (function () {
    function AdvertisingPage() {
        this.title = "Advertising";
    }
    AdvertisingPage.prototype.ngOnInit = function () {
    };
    AdvertisingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advertising',
            template: __webpack_require__(/*! ./advertising.page.html */ "./src/app/pages/advertising/advertising.page.html"),
            styles: [__webpack_require__(/*! ./advertising.page.scss */ "./src/app/pages/advertising/advertising.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvertisingPage);
    return AdvertisingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advertising-advertising-module.js.map