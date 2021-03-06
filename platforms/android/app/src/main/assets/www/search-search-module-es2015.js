(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!config.appNavigationTabs\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button icon=\"arrow-back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        {{'Search'|translate}}\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"basket\"></ion-icon>\n          <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"getSearchData()\">\n    <ion-searchbar [(ngModel)]=\"search\" name=\"search\" placeholder=\"{{'Search'|translate}}\"\n      (ionInput)=\"onChangeKeyword($event)\">\n    </ion-searchbar>\n  </form>\n  <div class=\"list\" *ngFor=\"let p of searchResult\">\n    <app-product [data]=\"p\" [type]=\"'list'\"></app-product>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor=\"let c of shared.allCategories; let i = index\" (click)=\"openProducts(c.id,c.name,c.sku)\">\n      <ion-avatar slot=\"start\" class=\"animate-item delay-500ms\">\n        <img width=\"150\" height=\"150\" src=\"{{c.image.src}}\" *ngIf=\"c.image\" /> \n      </ion-avatar>\n      <ion-label class=\"ion-padding\">\n        <ion-text>\n          <h2>{{c.name|translate}}</h2>\n          <p>{{c.count}} {{'Products'| translate }}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n  padding-left: 0;\n}\nion-content ion-item ion-label h2 {\n  font-size: 18px;\n}\nion-content ion-item ion-label p {\n  color: gray;\n}\nion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRlo7QURHWTtFQUNJLGVBQUE7QUNEaEI7QURHWTtFQUNJLFdBQUE7QUNEaEI7QURRSTtFQUNJLGtCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZ3JpZHtcbiAgICBpb24tcm93e1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufSIsImlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWdyaWQgaW9uLXJvdyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let SearchPage = class SearchPage {
    constructor(navCtrl, config, http, loading, shared, applicationRef) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.searchResult = [];
        this.showCategories = true;
        this.showSku = true;
        this.onChangeKeyword = function (e) {
            //console.log(this.search);
            // if (search != undefined) {
            //rchResult = [];
            //  }
        };
        this.getSearchData = function () {
            if (this.search != undefined) {
                if (this.search == null || this.search == '') {
                    this.shared.toast("Please enter something");
                    return 0;
                }
            }
            else {
                this.shared.toast("Please enter something");
                return 0;
            }
            this.loading.show();
            this.config.getWoo("products?status=publish&per_page=70&search=" + this.search + "&" + this.config.productsArguments).then((data) => {
                this.loading.hide();
                this.searchResult = data;
                this.searchSku = true;
                this.showCategories = false;
                if (this.searchResult.length == 0) {
                    this.shared.toast("No Product found!");
                }
                this.applicationRef.tick();
            });
        };
    }
    openProducts(id, name, sku) {
        this.navCtrl.navigateForward(this.config.currentRoute + "/products/" + id + "/" + name + "/newest");
    }
    ngOnInit() {
    }
};
SearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map