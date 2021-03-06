(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home5-home5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home5/home5.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home5/home5.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\" class=\"animate-item\">\n      <img *ngIf=\"c.image\" src=\"{{c.image.src}}\">\n      <div>\n        <h2>{{c.name }}</h2>\n        <p>{{c.count}} {{'Products'| translate }}</p>\n      </div>\n    </ion-card>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/home-pages/home5/home5.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home5/home5.module.ts ***!
  \**************************************************/
/*! exports provided: Home5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home5PageModule", function() { return Home5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home5.page */ "./src/app/home-pages/home5/home5.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _home5_page__WEBPACK_IMPORTED_MODULE_6__["Home5Page"]
    }
];
let Home5PageModule = class Home5PageModule {
};
Home5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_home5_page__WEBPACK_IMPORTED_MODULE_6__["Home5Page"]]
    })
], Home5PageModule);



/***/ }),

/***/ "./src/app/home-pages/home5/home5.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home5/home5.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  padding-top: 0;\n}\nion-list ion-card {\n  height: 235px;\n}\nion-list ion-card img {\n  -webkit-filter: brightness(0.6);\n          filter: brightness(0.6);\n  width: 100%;\n}\nion-list ion-card div {\n  position: absolute;\n  top: 32%;\n  text-align: center;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n  height: 250px;\n}\nion-list ion-card div h2 {\n  margin-top: 25px;\n  margin-bottom: 5px;\n  font-size: var(--heading-font-size);\n  font-weight: bold;\n}\nion-list ion-card div p {\n  font-size: var(--sub-heading-font-size);\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlcy9ob21lNS9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxob21lLXBhZ2VzXFxob21lNVxcaG9tZTUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU1L2hvbWU1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0daO0FERFE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDR1o7QURGWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0FDSWhCO0FERlk7RUFDSSx1Q0FBQTtFQUNBLGFBQUE7QUNJaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU1L2hvbWU1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGhlaWdodDogMjM1cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDMyJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuaW9uLWxpc3QgaW9uLWNhcmQge1xuICBoZWlnaHQ6IDIzNXB4O1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGRpdiBoMiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgZGl2IHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIG1hcmdpbi10b3A6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-pages/home5/home5.page.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home5/home5.page.ts ***!
  \************************************************/
/*! exports provided: Home5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home5Page", function() { return Home5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");





let Home5Page = class Home5Page {
    constructor(nav, config, shared) {
        this.nav = nav;
        this.config = config;
        this.shared = shared;
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
    openSubCategories(parent) {
        let count = 0;
        for (let value of this.shared.allCategories) {
            if (value.parent == parent.id) {
                count++;
            }
        }
        if (count != 0)
            this.nav.navigateForward(this.config.currentRoute + "/categories6/" + parent.id + "/" + parent.name);
        else
            this.nav.navigateForward(this.config.currentRoute + "/products/" + parent.id + "/" + parent.name + "/newest");
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.config.setCardStyle("10");
    }
};
Home5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
Home5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home5/home5.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home5.page.scss */ "./src/app/home-pages/home5/home5.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], Home5Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home5-home5-module-es2015.js.map