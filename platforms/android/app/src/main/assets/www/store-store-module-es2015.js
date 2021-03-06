(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-store-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"list-avatar\">\n    <img class=\"bing-img\" src=\"{{banner}}\" *ngIf=\"banner!=false\">\n    <ion-item class=\"ion-no-padding ion-text-center\">\n      <ion-label>\n        <ion-avatar *ngIf=\"gravatar!=null\">\n          <img src=\"{{gravatar}}\">\n        </ion-avatar>\n        <h2>{{name}}</h2>\n        <p class=\"icon\" *ngIf=\"rating!=null\">\n          <ion-icon name=\"star-outline\"></ion-icon>&nbsp;&nbsp;{{rating.rating}}\n        </p>\n        <p>{{email}}</p>\n        <ion-button color=\"light\" (click)=\"contactUs()\">\n          {{'Contact Us' | translate }}\n        </ion-button>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.page */ "./src/app/store/store.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_6__["StorePage"]
    }
];
let StorePageModule = class StorePageModule {
};
StorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_6__["StorePage"]]
    })
], StorePageModule);



/***/ }),

/***/ "./src/app/store/store.page.scss":
/*!***************************************!*\
  !*** ./src/app/store/store.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list {\n  background: var(--ion-color-primary);\n  margin-bottom: 5px;\n  padding-bottom: 0 !important;\n}\nion-content ion-list .item {\n  --background: transparent;\n}\nion-content ion-list .button {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\nion-content ion-list .bing-img {\n  padding: 60px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\nion-content .list-avatar {\n  position: relative;\n  text-align: center;\n}\nion-content .list-avatar .item {\n  background-color: transparent;\n}\nion-content .list-avatar .item .item-inner {\n  padding-right: 0;\n}\nion-content .list-avatar .item .item-inner .label {\n  margin-right: 0;\n  margin-bottom: 0;\n}\nion-content .list-avatar .item ion-avatar {\n  min-width: 80px;\n  min-height: 80px;\n  margin-bottom: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content .list-avatar .item ion-avatar .icon {\n  color: var(--ion-color-light);\n  font-size: 100px;\n  margin-top: -5px;\n}\nion-content .list-avatar .item ion-avatar img {\n  margin-left: auto;\n  margin-right: auto;\n  height: 80px;\n  width: 80px;\n}\nion-content .list-avatar .item h2 {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-content .list-avatar .item p {\n  color: white;\n  white-space: normal;\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\nion-content .list-avatar .item .icon {\n  margin-bottom: 0;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcc3RvcmVcXHN0b3JlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RvcmUvc3RvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQUo7QURFSTtFQUNFLHlCQUFBO0FDQU47QURFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FOO0FERUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQU47QURHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREVJO0VBQ0UsNkJBQUE7QUNBTjtBREVNO0VBQ0UsZ0JBQUE7QUNBUjtBRENRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ1Y7QURFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDVjtBRENRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ1Y7QURFTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERU07RUFDRSxnQkFBQTtBQ0FSO0FES0k7RUFDRSxrQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuXG4gICAgLml0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLmJpbmctaW1nIHtcbiAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAubGlzdC1hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLml0ZW0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1ncmlkIHtcbiAgICBpb24tcm93IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCAuaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IC5iaW5nLWltZyB7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5saXN0LWF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmxpc3QtYXZhdGFyIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAubGlzdC1hdmF0YXIgLml0ZW0gLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuaW9uLWNvbnRlbnQgLmxpc3QtYXZhdGFyIC5pdGVtIC5pdGVtLWlubmVyIC5sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5saXN0LWF2YXRhciAuaXRlbSBpb24tYXZhdGFyIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmxpc3QtYXZhdGFyIC5pdGVtIGlvbi1hdmF0YXIgLmljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbmlvbi1jb250ZW50IC5saXN0LWF2YXRhciAuaXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5pb24tY29udGVudCAubGlzdC1hdmF0YXIgLml0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY29udGVudCAubGlzdC1hdmF0YXIgLml0ZW0gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tY29udGVudCAubGlzdC1hdmF0YXIgLml0ZW0gLmljb24ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/store/store.page.ts":
/*!*************************************!*\
  !*** ./src/app/store/store.page.ts ***!
  \*************************************/
/*! exports provided: StorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePage", function() { return StorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");









let StorePage = class StorePage {
    constructor(navCtrl, activatedRoute, config, loading, http, applicationRef, emailComposer, shared) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.config = config;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef;
        this.emailComposer = emailComposer;
        this.shared = shared;
        this.page = 1;
        this.name = "";
        this.email = "";
        this.id = null;
        this.rating = null;
        this.gravatar = null;
        this.products = [];
        let d = this.getData(this.activatedRoute.snapshot.paramMap.get('id'));
        if (d.user_email != undefined)
            this.email = d.user_email;
        if (d.email)
            this.email = d.email;
        if (d.rating)
            this.rating = d.rating;
        if (d.ID)
            this.id = d.ID;
        if (d.id)
            this.id = d.id;
        if (d.display_name) {
            this.name = d.display_name;
            this.banner = false;
        }
        else {
            this.name = d.first_name + " " + d.last_name;
            this.banner = d.banner;
            this.gravatar = d.gravatar;
        }
        if (this.config.showWcVendorInfo) {
            console.log(d);
            if (d.meta)
                this.name = d.meta.pv_shop_name;
            else if (d.first_name)
                this.name = d.first_name + " " + d.last_name;
            else if (d.display_name)
                this.name = d.display_name;
            if (d.user_email)
                this.email = d.user_email;
            if (d.user_id)
                this.id = d.user_id;
            this.banner = d.banner;
        }
        this.getProducts();
    }
    getData(id) {
        let p;
        this.shared.storePageData.forEach(element => {
            if (element.id) {
                if (element.id == id)
                    p = element;
            }
            if (element.ID) {
                if (element.ID == id)
                    p = element;
            }
            if (element.user_id) {
                if (element.user_id == id)
                    p = element;
            }
        });
        return p;
    }
    getProducts() {
        if (this.page == 1)
            this.loading.show();
        this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_vendor_products/?insecure=cool&post_author=' + this.id + "&page=" + this.page).then((response) => {
            let q = 'products?include=' + response.data + "&status=publish";
            this.config.getWoo(q).then((data) => {
                if (this.page == 1)
                    this.loading.hide();
                this.infinite.complete();
                let d = data;
                console.log(d);
                if (d.length != 0) {
                    this.page++;
                    for (let value of d)
                        this.products.push(value);
                }
                if (d.length == 0 || d.length < 10) {
                    this.infinite.disabled = true;
                }
                this.applicationRef.tick();
            });
        });
    }
    contactUs() {
        let email = {
            to: this.email,
            subject: 'your title',
            body: 'your message'
        };
        this.emailComposer.open(email);
    }
    ngOnInit() {
    }
};
StorePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], StorePage.prototype, "infinite", void 0);
StorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store.page.scss */ "./src/app/store/store.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]])
], StorePage);



/***/ })

}]);
//# sourceMappingURL=store-store-module-es2015.js.map