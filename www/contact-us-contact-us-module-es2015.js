(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      {{'Contact Us'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-no-padding\">\n    <ion-card-content class=\"ion-no-padding\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"pin\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <p wrap-text>\n             Sede Operativa <br>\n             Via T. Tasso n. 12   <br> 66050 San Salvo CH - Italy\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"mail\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <p>\n            {{config.email}} info@ritmodobrazil.com\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"call\"></ion-icon>\n        </ion-avatar>\n\n        <ion-label>\n          <a href=\"tel:+393519400965\">\n            {{config.phoneNo}} +39 351 940 0965\n          </a>\n        </ion-label>\n      </ion-item>\n\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"{{'Nome'|translate}}\" name=\"name\" [(ngModel)]=\"contact.name\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"email\" placeholder=\"{{'Email'|translate}}\" name=\"email\" [(ngModel)]=\"contact.email\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"{{'Richiesta'|translate}}\" name=\"message\"\n            [(ngModel)]=\"contact.message\" required></ion-input>\n        </ion-item>\n        <ion-col col-12>\n          <label *ngIf=\"errorMessage!=''\">\n            <span>{{errorMessage}}</span>\n          </label>\n        </ion-col>\n        <ion-item lines=\"none\">\n          <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!contactForm.form.valid\">{{'Send'|translate}}</ion-button>\n        </ion-item>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-card ion-card-content ion-item {\n  --inner-padding-end: 0;\n}\nion-content ion-card ion-card-content ion-item ion-avatar {\n  background: #eee;\n}\nion-content ion-card ion-card-content ion-item ion-avatar ion-icon {\n  width: 100%;\n  margin-top: 8px;\n  color: var(--ion-color-primary);\n  zoom: 1.3;\n}\nion-content ion-card ion-card-content ion-item ion-label p {\n  white-space: normal;\n  font-size: 14px;\n}\nion-content ion-card ion-card-content ion-item:last-child {\n  --inner-padding-end: 10px !important;\n  --padding-start: 10px !important;\n}\nion-content ion-card ion-card-content ion-item:last-child ion-button {\n  --background: #83af8c;\n  width: 100%;\n}\n#map {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxjb250YWN0LXVzXFxjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTtFQUNFLHNCQUFBO0FDSFI7QURJUTtFQUNFLGdCQUFBO0FDRlY7QURHVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0FDRFo7QURLVTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0haO0FETVE7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FDSlY7QURLVTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0haO0FEV0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICBpb24tY2FyZCB7XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgem9vbTogMS4zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM4M2FmOGM7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24tYXZhdGFyIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgem9vbTogMS4zO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtOmxhc3QtY2hpbGQgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzgzYWY4YztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ContactUsPage = class ContactUsPage {
    constructor(http, config, loading, shared) {
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
        this.errorMessage = '';
    }
    ionViewDidLoad() {
        if (this.config.googleMapId != "")
            this.loadMap();
    }
    // <!-- 2.0 updates -->
    submit() {
        this.loading.autoHide(2000);
        var data = {};
        data = this.contact;
        this.http.get(this.config.url + '/api/appusers/send_mail/?insecure=cool&email=' + this.contact.email + '&name=' + this.contact.name + '&message=' + this.contact.message).subscribe((data) => {
            console.log(data);
            this.contact.name = '';
            this.contact.email = '';
            this.contact.message = '';
            this.errorMessage = data;
        }, error => {
            this.errorMessage = JSON.parse(error._body).error;
            console.log(this.errorMessage);
        });
    }
    ;
    loadMap() {
        const myApiKey = this.config.googleMapId;
        const lat = parseFloat(this.config.latitude);
        const lng = parseFloat(this.config.longitude);
        let content = this.config.address;
        const parentElement = this.mapElement.nativeElement;
        const script = document.createElement('script');
        try {
            script.src = "https://maps.googleapis.com/maps/api/js?key=" + myApiKey;
            script.async = true;
            script.defer = true;
            script.onload = function () {
                let map = new google.maps.Map(parentElement, {
                    center: { lat, lng },
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                let marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: map.getCenter()
                });
                let infoWindow = new google.maps.InfoWindow({
                    content: content
                });
                google.maps.event.addListener(marker, 'click', () => {
                    infoWindow.open(map, marker);
                });
            };
            this.mapElement.nativeElement.insertBefore(script, null);
        }
        catch (error) {
        }
    }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ContactUsPage.prototype, "mapElement", void 0);
ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es2015.js.map