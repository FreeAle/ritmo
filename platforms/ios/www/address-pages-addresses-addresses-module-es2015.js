(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-pages-addresses-addresses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'Address'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge>{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- For Shipping Address \n  <p>\n    {{'Shipping Address'| translate }}\n  </p>\n\n  <form #shippingForm=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shipping.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shipping.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Compnay'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" [(ngModel)]=\"shipping.company\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"shipping.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"address2\" [(ngModel)]=\"shipping.address_2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_country\" tappable (click)=\"selectCountryPage('shippingUpdate')\" readonly\n        [(ngModel)]=\"shippingCountryName\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n      <ion-input type=\"text\" required name=\"shipping_zone\" tappable (click)=\"selectZonePage('shippingUpdate')\" readonly\n        [(ngModel)]=\"shippingStateName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'City'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_city\" [(ngModel)]=\"shipping.city\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_postcode\" [(ngModel)]=\"shipping.postcode\" required></ion-input>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"updateShippingAddress()\" [disabled]=\"!shippingForm.form.valid\">\n    {{'Update Shipping'|translate}}\n  </ion-button> -->\n\n  <!-- For Billing Address -->\n  <p >\n    {{'Billing Address'| translate }}\n  </p>\n  <p style=\"font-size: 10px;\"> Cliccare sulle voci per modificarle </p>\n  <p style=\"font-size: 10px; padding: 0; margin: 0;\" > (per confermare le modifiche premere su aggiorna dati)</p>\n\n  <form #billingForm=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_firstname\" [(ngModel)]=\"billing.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_lastname\" [(ngModel)]=\"billing.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Azienda'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billingcompany\" [(ngModel)]=\"billing.company\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Indirizzo'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"billingaddress\" [(ngModel)]=\"billing.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Stato'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_country\" tappable (click)=\"selectCountryPage('billingUpdate')\" \n        [(ngModel)]=\"billingCountryName\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Provincia'|translate}} (Inserire solo Sigla es.\"RM\")</ion-label>\n      <ion-input class=\"alto\" type=\"text\" required name=\"billing_state\" autocapitalize=\"characters\"\n        [(ngModel)]=\"billing.state \"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'City'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_city\" [(ngModel)]=\"billing.city\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_postcode\" [(ngModel)]=\"billing.postcode\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Phone'|translate}}</ion-label>\n      <ion-input type=\"tel\" name=\"Phone\" [(ngModel)]=\"billing.phone\" ></ion-input>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"updateBillingAddress()\" [disabled]=\"!billingForm.form.valid\">\n    {{'Aggiorna Dati'|translate}}\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/address-pages/addresses/addresses.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/address-pages/addresses/addresses.module.ts ***!
  \*************************************************************/
/*! exports provided: AddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function() { return AddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addresses.page */ "./src/app/address-pages/addresses/addresses.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");







// For Translation Language

const routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]
    }
];
let AddressesPageModule = class AddressesPageModule {
};
AddressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
    })
], AddressesPageModule);



/***/ }),

/***/ "./src/app/address-pages/addresses/addresses.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/address-pages/addresses/addresses.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: 20px;\n  text-align: center;\n}\nion-content form ion-item {\n  --background: var(--ion-background-color);\n}\nion-content form ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy1wYWdlcy9hZGRyZXNzZXMvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcYWRkcmVzcy1wYWdlc1xcYWRkcmVzc2VzXFxhZGRyZXNzZXMucGFnZS5zY3NzIiwic3JjL2FwcC9hZGRyZXNzLXBhZ2VzL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURHUTtFQUNJLHlDQUFBO0FDRFo7QURFWTtFQUNJLDJDQUFBO0FDQWhCIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy1wYWdlcy9hZGRyZXNzZXMvYWRkcmVzc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/address-pages/addresses/addresses.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/address-pages/addresses/addresses.page.ts ***!
  \***********************************************************/
/*! exports provided: AddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPage", function() { return AddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/location-data/location-data.service */ "./src/providers/location-data/location-data.service.ts");
/* harmony import */ var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/select-country/select-country.page */ "./src/app/modals/select-country/select-country.page.ts");
/* harmony import */ var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/select-zones/select-zones.page */ "./src/app/modals/select-zones/select-zones.page.ts");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");











let AddressesPage = class AddressesPage {
    constructor(navCtrl, shared, modalCtrl, config, storage, appEventsService, loading, location) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.appEventsService = appEventsService;
        this.loading = loading;
        this.location = location;
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: '',
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        let countryChange = this.appEventsService.subscribe("countryChange");
        countryChange.subscriptions.add(countryChange.event.subscribe(data => {
            if (data.page == "shippingUpdate") {
                this.shippingCountryName = data.value.name;
                this.shipping.country = data.value.value;
                this.shipping.state = null;
                this.shipping.city = null;
                this.shipping.postcode = null;
                this.shippingStateName = "";
            }
            if (data.page == "billingUpdate") {
                this.billingCountryName = data.value.name;
                this.billing.country = data.value.value;
                this.billing.state = null;
                this.billing.city = null;
                this.billing.postcode = null;
                this.billingStateName = "";
            }
        }));
        let updateSideMenu = this.appEventsService.subscribe("updateSideMenu");
        updateSideMenu.subscriptions.add(updateSideMenu.event.subscribe(data => {
            if (data.page == "shippingUpdate") {
                if (data.value == 'other') {
                    console.log(data.page + data.value);
                    this.shipping.state = 'other';
                    this.shippingStateName = "other";
                }
                else {
                    this.shipping.state = data.value.value;
                    this.shippingStateName = data.value.name;
                }
            }
            if (data.page == "billingUpdate") {
                if (data.value == 'other') {
                    this.billing.state = 'other';
                    this.billingStateName = "other";
                }
                else {
                    this.billing.state = data.value.value;
                    this.billingStateName = data.value.name;
                }
            }
        }));
        //state is selected
    }
    updateBillingAddress() {
        this.loading.show();
        var d = {
            billing: this.billing
        };
        this.config.putAsync("customers/" + this.shared.customerData.id, d).then((data) => {
            this.loading.hide();
            let dat = data;
            this.shared.customerData.billing = dat.billing;
            this.storage.set('customerData', this.shared.customerData);
            this.shared.toast("Billing Address Updated");
        });
    }
    updateShippingAddress() {
        this.loading.show();
        var d = {
            shipping: this.shipping
        };
        this.config.putAsync("customers/" + this.shared.customerData.id, d).then((data) => {
            this.loading.hide();
            let dat = data;
            this.shared.customerData.shipping = dat.shipping;
            console.log("customer data");
            console.log(this.shared.customerData);
            this.storage.set('customerData', this.shared.customerData);
            this.shared.toast("Shipping Address Updated");
        });
    }
    selectCountryPage(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_8__["SelectCountryPage"],
                componentProps: {
                    page: value
                }
            });
            return yield modal.present();
        });
    }
    selectZonePage(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = (value == "shippingUpdate") ? this.shipping.country : this.billing.country;
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_9__["SelectZonesPage"],
                componentProps: {
                    page: value, id: id
                }
            });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        if (this.shared.customerData.id != null) {
            this.shipping = this.shared.customerData.shipping;
            this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
            this.billing = this.shared.customerData.billing;
            this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
    }
    ngOnInit() {
    }
};
AddressesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__["AppEventsService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"] }
];
AddressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addresses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addresses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addresses.page.scss */ "./src/app/address-pages/addresses/addresses.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__["AppEventsService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]])
], AddressesPage);



/***/ })

}]);
//# sourceMappingURL=address-pages-addresses-addresses-module-es2015.js.map