(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'I Miei Ordini'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\" *ngIf=\"!config.appNavigationTabs\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding grid\" *ngIf=\"orders.length==0 && httpRunning==false\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"briefcase\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Order List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-card *ngFor=\"let order of orders\" (click)=\"showOrderDetail(order)\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Order ID'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" col-6>\n            {{'#'+order.number}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Data'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{order.date_created | date:'dd-M-yyyy'}} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Ora'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{order.date_created | date:'HH:mm'}} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Totale'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{order.total}}\n          </ion-col>\n        </ion-row>\n        <ion-row [class.pending]=\"order.status=='pending' || order.status=='refunded'\"\n          [class.cancel]=\"order.status=='cancelled' || order.status=='failed'\"\n          [class.inprocess]=\"order.status=='processing'\" [class.complete]=\"order.status=='completed'\">\n          <ion-col size=\"6\">\n            {{'Status'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            <strong>{{order.status|translate}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getOrders()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/my-orders/my-orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.module.ts ***!
  \***********************************************/
/*! exports provided: MyOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/my-orders/my-orders.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]
    }
];
let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
    })
], MyOrdersPageModule);



/***/ }),

/***/ "./src/app/my-orders/my-orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .grid {\n  margin-top: 50%;\n}\nion-content .grid ion-row ion-col {\n  text-align: center;\n}\nion-content .grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content .grid ion-row ion-col ion-button {\n  --border-radius: 0px;\n}\nion-content .grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n  margin-bottom: 6px;\n}\nion-content .grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-grid ion-card {\n  color: black;\n}\n.pending {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n.cancel {\n  background-color: red;\n  color: white;\n}\n.complete {\n  background-color: green;\n  color: white;\n}\n.inprocess {\n  background-color: green;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXG15LW9yZGVyc1xcbXktb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0FDREo7QURHTTtFQUNFLGtCQUFBO0FDRFI7QURFUTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQ0FWO0FERVE7RUFDRSxvQkFBQTtBQ0FWO0FERVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBVjtBREVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQVY7QURNSTtFQUNFLFlBQUE7QUNKTjtBRFNBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FDTkY7QURRQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FEUUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNMRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9teS1vcmRlcnMvbXktb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHpvb206IDMuOTtcbiAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWdyaWQge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cbn1cblxuLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy8gY29sb3I6IGNvbG9yKCRjb2xvcnMsIGRhbmdlcik7XG59XG4uY29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmlucHJvY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCJpb24tY29udGVudCAuZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24taWNvbiB7XG4gIHpvb206IDMuOTtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG5pb24tY29udGVudCAuZ3JpZCBpb24tcm93IGlvbi1jb2wgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tY2FyZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/my-orders/my-orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.ts ***!
  \*********************************************/
/*! exports provided: MyOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function() { return MyOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");








let MyOrdersPage = class MyOrdersPage {
    constructor(navCtrl, http, config, shared, loading, applicationRef, OneSignal) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.OneSignal = OneSignal;
        this.page = 1;
        this.orders = new Array;
        this.httpRunning = true;
    }
    getOrders() {
        this.httpRunning = true;
        if (this.page == 1) {
            this.loading.show();
        }
        this.config.getWoo('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id + "&" + this.config.productsArguments).then((data) => {
            this.infinite.complete();
            this.httpRunning = false;
            let dat = data;
            if (this.page == 1) {
                this.orders = new Array;
                this.loading.hide();
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.orders.push(value);
                }
            }
            if (dat.length == 0) {
                this.infinite.disabled = true;
            }
            this.applicationRef.tick();
        }, err => {
            this.loading.hide();
            this.shared.showAlert("Server Error while Loading Orders");
        });
    }
    ;
    showOrderDetail(order) {
        this.shared.myOrderDetialPageData = order;
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward(this.config.currentRoute + "/my-order-detail");
        else
            this.navCtrl.navigateForward("/my-order-detail");
        console.log(order);
    }
    ionViewDidLoad() {
    }
    openShop() {
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward(this.config.currentRoute + "/products/0/0/newest");
        else
            this.navCtrl.navigateForward("/products/0/0/newest");
    }
    refreshPage() {
        this.page = 1;
        this.infinite.disabled = false;
        this.getOrders();
    }
    addCurrecny(order, v2) {
        return order.currency + " " + v2;
    }
    ngOnInit() {
        this.httpRunning = true;
        this.getOrders();
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], MyOrdersPage.prototype, "infinite", void 0);
MyOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-orders.page.scss */ "./src/app/my-orders/my-orders.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"]])
], MyOrdersPage);



/***/ })

}]);
//# sourceMappingURL=my-orders-my-orders-module-es2015.js.map