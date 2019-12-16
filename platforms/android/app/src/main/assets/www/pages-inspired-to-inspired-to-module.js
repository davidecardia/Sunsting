(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inspired-to-inspired-to-module"],{

/***/ "./src/app/pages/inspired-to/inspired-to.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/inspired-to/inspired-to.module.ts ***!
  \*********************************************************/
/*! exports provided: InspiredToPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspiredToPageModule", function() { return InspiredToPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inspired_to_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspired-to.page */ "./src/app/pages/inspired-to/inspired-to.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _inspired_to_page__WEBPACK_IMPORTED_MODULE_6__["InspiredToPage"]
    }
];
var InspiredToPageModule = /** @class */ (function () {
    function InspiredToPageModule() {
    }
    InspiredToPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inspired_to_page__WEBPACK_IMPORTED_MODULE_6__["InspiredToPage"]]
        })
    ], InspiredToPageModule);
    return InspiredToPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inspired-to/inspired-to.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/inspired-to/inspired-to.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{title}}\"></app-header>\n\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/inspired-to/inspired-to.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/inspired-to/inspired-to.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3BpcmVkLXRvL2luc3BpcmVkLXRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/inspired-to/inspired-to.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inspired-to/inspired-to.page.ts ***!
  \*******************************************************/
/*! exports provided: InspiredToPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspiredToPage", function() { return InspiredToPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InspiredToPage = /** @class */ (function () {
    function InspiredToPage() {
        this.title = "Inspired to";
    }
    InspiredToPage.prototype.ngOnInit = function () {
    };
    InspiredToPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inspired-to',
            template: __webpack_require__(/*! ./inspired-to.page.html */ "./src/app/pages/inspired-to/inspired-to.page.html"),
            styles: [__webpack_require__(/*! ./inspired-to.page.scss */ "./src/app/pages/inspired-to/inspired-to.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InspiredToPage);
    return InspiredToPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inspired-to-inspired-to-module.js.map