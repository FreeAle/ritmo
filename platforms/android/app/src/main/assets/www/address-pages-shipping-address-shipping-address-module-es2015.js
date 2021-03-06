(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-pages-shipping-address-shipping-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'Shipping Address'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"getLocationAddress()\">\n        <ion-icon name=\"locate\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form #loginForm=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shared.shipping.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shared.shipping.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Compnay'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" [(ngModel)]=\"shared.shipping.company\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"shared.shipping.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"address2\" [(ngModel)]=\"shared.shipping.address_2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_country\" tappable (click)=\"selectCountryPage()\" readonly\n        [(ngModel)]=\"shared.shippingCountryName\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n      <ion-input type=\"text\" required name=\"shipping_zone\" tappable (click)=\"selectZonePage()\" readonly\n        [(ngModel)]=\"shared.shippingStateName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'City'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_city\" [(ngModel)]=\"shared.shipping.city\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_postcode\" [(ngModel)]=\"shared.shipping.postcode\" required></ion-input>\n    </ion-item>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"submit()\" [disabled]=\"disableButton()\">{{'Next'|translate}}\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/address-pages/shipping-address/shipping-address.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/address-pages/shipping-address/shipping-address.module.ts ***!
  \***************************************************************************/
/*! exports provided: ShippingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressPageModule", function() { return ShippingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-address.page */ "./src/app/address-pages/shipping-address/shipping-address.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");







// For Translation Language

const routes = [
    {
        path: '',
        component: _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]
    }
];
let ShippingAddressPageModule = class ShippingAddressPageModule {
};
ShippingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]]
    })
], ShippingAddressPageModule);



/***/ }),

/***/ "./src/app/address-pages/shipping-address/shipping-address.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/address-pages/shipping-address/shipping-address.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: 20px;\n  text-align: center;\n}\nion-content form ion-item {\n  --background: var(--ion-background-color);\n}\nion-content form ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\nion-footer .toolbar {\n  padding-left: 10px;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy1wYWdlcy9zaGlwcGluZy1hZGRyZXNzL0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXGFkZHJlc3MtcGFnZXNcXHNoaXBwaW5nLWFkZHJlc3NcXHNoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9hZGRyZXNzLXBhZ2VzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdJO0VBQ0UseUNBQUE7QUNETjtBREVNO0VBQ0UsMkNBQUE7QUNBUjtBRE9FO0VBQ0Usa0JBQUE7QUNKSjtBRE1FO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy1wYWdlcy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbn1cblxuaW9uLWZvb3RlciAudG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/address-pages/shipping-address/shipping-address.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/address-pages/shipping-address/shipping-address.page.ts ***!
  \*************************************************************************/
/*! exports provided: ShippingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressPage", function() { return ShippingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_user_address_user_address_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/user-address/user-address.service */ "./src/providers/user-address/user-address.service.ts");
/* harmony import */ var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/location-data/location-data.service */ "./src/providers/location-data/location-data.service.ts");
/* harmony import */ var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/select-country/select-country.page */ "./src/app/modals/select-country/select-country.page.ts");
/* harmony import */ var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/select-zones/select-zones.page */ "./src/app/modals/select-zones/select-zones.page.ts");











let ShippingAddressPage = class ShippingAddressPage {
    constructor(navCtrl, config, http, shared, modalCtrl, loading, userAddress, location) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.userAddress = userAddress;
        this.location = location;
        if (this.shared.customerData.id != null) {
            this.shared.shipping = this.shared.customerData.shipping;
            this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
        }
        if (this.shared.shippingCountryName == "" || this.shared.shippingCountryName == null)
            this.shared.shippingStateName = "";
    }
    disableButton() {
        if (this.shared.shipping.first_name == ""
            || this.shared.shipping.last_name == ""
            || this.shared.shipping.city == ""
            || this.shared.shipping.postcode == ""
            || this.shared.shipping.state == ""
            || this.shared.shipping.country == ""
            || this.shared.shipping.address_1 == ""
            || this.shared.shipping.state == null
            || this.shared.shipping.city == null
            || this.shared.shipping.postcode == null) {
            return true;
        }
        else
            return false;
    }
    submit() {
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward(this.config.currentRoute + "/billing-address");
        else
            this.navCtrl.navigateForward("/billing-address");
    }
    selectCountryPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_9__["SelectCountryPage"],
                componentProps: {
                    page: 'shipping'
                }
            });
            return yield modal.present();
        });
    }
    selectZonePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_10__["SelectZonesPage"],
                componentProps: {
                    page: 'shipping'
                }
            });
            return yield modal.present();
        });
    }
    getLocationAddress() {
        this.loading.show();
        this.userAddress.getAddress().then((value) => {
            this.shared.shipping.country = value.countryCode;
            this.shared.shipping.city = value.locality;
            this.shared.shipping.postcode = value.postalCode;
            this.shared.shipping.state = this.location.getStateCode(value.countryCode, value.administrativeArea);
            this.shared.shippingStateName = value.administrativeArea;
            this.shared.shippingCountryName = value.countryName;
            this.shared.shipping.address_1 = value.subLocality;
            this.loading.hide();
        });
    }
    ngOnInit() {
    }
};
ShippingAddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: src_providers_user_address_user_address_service__WEBPACK_IMPORTED_MODULE_7__["UserAddressService"] },
    { type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__["LocationDataService"] }
];
ShippingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipping-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipping-address.page.scss */ "./src/app/address-pages/shipping-address/shipping-address.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        src_providers_user_address_user_address_service__WEBPACK_IMPORTED_MODULE_7__["UserAddressService"],
        src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_8__["LocationDataService"]])
], ShippingAddressPage);



/***/ }),

/***/ "./src/providers/user-address/user-address.service.ts":
/*!************************************************************!*\
  !*** ./src/providers/user-address/user-address.service.ts ***!
  \************************************************************/
/*! exports provided: UserAddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressService", function() { return UserAddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");





let UserAddressService = class UserAddressService {
    constructor(config, geolocation, nativeGeocoder) {
        this.config = config;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        console.log('Hello UserAddressProvider Provider');
    }
    getCordinates() {
        return new Promise(resolve => {
            this.geolocation.getCurrentPosition().then((resp) => {
                // resp.coords.latitude
                // resp.coords.longitude
                console.log(resp);
                resolve({ "lat": resp.coords.latitude, "long": resp.coords.longitude });
            }).catch((error) => {
                console.log('Error getting location', error);
                resolve("error");
            });
        });
    }
    getAddress() {
        return new Promise(resolve => {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.getCordinates().then((value) => {
                this.nativeGeocoder.reverseGeocode(value.lat, value.long, options)
                    .then((result) => {
                    resolve(result[0]);
                    console.log(result[0]);
                })
                    .catch((error) => {
                    console.log(error);
                    resolve("error");
                });
            });
        });
    }
};
UserAddressService.ctorParameters = () => [
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"] }
];
UserAddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]])
], UserAddressService);



/***/ })

}]);
//# sourceMappingURL=address-pages-shipping-address-shipping-address-module-es2015.js.map