(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home9-home9-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"apps\"></ion-icon>\n      {{'Categories' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openCategoryPage()\">\n      <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n  <!-- categories component -->\n  <app-categories [type]=\"'grid'\"></app-categories>\n\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"topSeller\">{{ 'Newest' | translate }}</ion-segment-button>\n    <ion-segment-button value=\"deals\">{{ 'On Sale' | translate }} </ion-segment-button>\n    <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"segments\">\n\n    <!-- first swipe slider -->\n    <ion-slides *ngSwitchCase=\"'topSeller'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab1\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 2nd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'deals'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab2\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 3rd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'mostLiked'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab3\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n      {{'All Products' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n      <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- infinite scroll -->\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n  <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n    <ion-icon name=\"arrow-up\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/home-pages/home9/home9.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home9/home9.module.ts ***!
  \**************************************************/
/*! exports provided: Home9PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home9PageModule", function() { return Home9PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home9_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home9.page */ "./src/app/home-pages/home9/home9.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _home9_page__WEBPACK_IMPORTED_MODULE_6__["Home9Page"]
    }
];
let Home9PageModule = class Home9PageModule {
};
Home9PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_home9_page__WEBPACK_IMPORTED_MODULE_6__["Home9Page"]]
    })
], Home9PageModule);



/***/ }),

/***/ "./src/app/home-pages/home9/home9.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home9/home9.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-product {\n  width: 100%;\n}\n\n.swiper-slide {\n  width: 40%;\n}\n\nion-slides ion-slide:last-child {\n  height: auto;\n}\n\nion-segment ion-segment-button {\n  --indicator-color: lightgray;\n  --indicator-color-checked: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n  font-size: 0.75rem;\n}\n\nion-fab {\n  position: fixed;\n}\n\nion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\n\nion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlcy9ob21lOS9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxob21lLXBhZ2VzXFxob21lOVxcaG9tZTkucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU5L2hvbWU5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURFSTtFQUNFLFlBQUE7QUNDTjs7QURJRTtFQUNFLDRCQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FERUU7RUFDRSxzQ0FBQTtBQ0FKOztBRElFO0VBQ0ksa0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTkvaG9tZTkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLXNsaWRlcyB7XG4gIGlvbi1zbGlkZSB7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cbmlvbi1zZWdtZW50IHtcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogbGlnaHRncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuaW9uLWdyaWR7XG4gIGlvbi1yb3d7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn0iLCJhcHAtcHJvZHVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGxpZ2h0Z3JheTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-pages/home9/home9.page.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home9/home9.page.ts ***!
  \************************************************/
/*! exports provided: Home9Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home9Page", function() { return Home9Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");






let Home9Page = class Home9Page {
    constructor(nav, config, appEventsService, shared) {
        this.nav = nav;
        this.config = config;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.segments = "topSeller"; //first segment by default 
        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.page = 1;
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
    // For FAB Scroll
    onScroll(e) {
        if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
        }
        if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
        }
    }
    // For Scroll To Top Content
    scrollToTop() {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    }
    openProducts(value) {
        this.nav.navigateForward(this.config.currentRoute + "/sproducts/0/0/" + value);
    }
    openCategoryPage() {
        this.appEventsService.publish("openCategoryPage", "");
    }
    getProducts() {
        let query = 'products?' + 'page=' + this.page;
        query = query + "&status=publish" + "&" + this.config.productsArguments;
        if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        }
        this.config.getWoo(query).then((data) => {
            let dat = data;
            this.infinite.complete();
            if (this.page == 1) {
                this.products = new Array;
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.products.push(value);
                }
            }
            if (dat.length < 10) {
                this.infinite.disabled = true;
            }
        });
    }
    ngOnInit() {
        this.getProducts();
    }
    ionViewWillEnter() {
        this.config.setCardStyle("14");
    }
};
Home9Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], Home9Page.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], Home9Page.prototype, "infinite", void 0);
Home9Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home9',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home9.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home9.page.scss */ "./src/app/home-pages/home9/home9.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], Home9Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home9-home9-module-es2015.js.map