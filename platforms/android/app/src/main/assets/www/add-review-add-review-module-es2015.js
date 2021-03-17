(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-review-add-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Write a review'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <h4>{{'Comment about this product'|translate}}</h4>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"3.6\" class=\"ion-no-padding\">\n        <h5>{{'Your Rating:'|translate}}</h5>\n      </ion-col>\n      <ion-col size=\"1\" *ngFor=\"let s of ratingStars\" class=\"ion-align-self-end\">\n        <ion-icon [name]=\"s.fill\" (click)=\"selectRating(s.value)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"{{'Name'|translate}}\" name=\"name\" [(ngModel)]=\"formData.name\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"{{'Email'|translate}}\" name=\"email\" [(ngModel)]=\"formData.email\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"17\" placeholder=\"{{'Enter a description'|translate}}\" name=\"desc\"\n        [(ngModel)]=\"formData.description\" required></ion-textarea>\n    </ion-item>\n  </form>\n\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"addComment()\" [disabled]=\"disbaleButton()\">\n    {{ 'Post Comment' | translate }}\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/add-review/add-review.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-review/add-review.module.ts ***!
  \*************************************************/
/*! exports provided: AddReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review.page */ "./src/app/add-review/add-review.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]
    }
];
let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
    })
], AddReviewPageModule);



/***/ }),

/***/ "./src/app/add-review/add-review.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-review/add-review.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content h4 {\n  padding-left: 10px;\n}\nion-content ion-grid ion-row ion-col h5 {\n  padding-left: 10px;\n}\nion-content ion-grid ion-row ion-col ion-icon {\n  zoom: 1.9;\n  color: #d9d027;\n}\nion-content form ion-item {\n  --background: #fafafa;\n}\nion-content ion-button {\n  width: 100%;\n  margin: 0;\n  border: none;\n}\nion-footer ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXJldmlldy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxhZGQtcmV2aWV3XFxhZGQtcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXJldmlldy9hZGQtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0FDREo7QURNUTtFQUNFLGtCQUFBO0FDSlY7QURNUTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FDSlY7QURVSTtFQUNFLHFCQUFBO0FDUk47QURXRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEY0U7RUFDRSxTQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICBoNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1ncmlkIHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIHpvb206IDEuOTtcclxuICAgICAgICAgIGNvbG9yOiAjZDlkMDI3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IGg0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgem9vbTogMS45O1xuICBjb2xvcjogI2Q5ZDAyNztcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-review/add-review.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-review/add-review.page.ts ***!
  \***********************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AddReviewPage = class AddReviewPage {
    constructor(navCtrl, http, config, activatedRoute, loading, shared, applicationRef) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.activatedRoute = activatedRoute;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.rating = null;
        this.errorMessage = '';
        this.formData = { name: '', email: '', description: '' };
        this.ratingStars = [
            { value: '1', fill: 'star-outline' },
            { value: '2', fill: 'star-outline' },
            { value: '3', fill: 'star-outline' },
            { value: '4', fill: 'star-outline' },
            { value: '5', fill: 'star-outline' }
        ];
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getNonce();
        this.formData.name = this.shared.customerData.first_name + " " + this.shared.customerData.last_name;
        this.formData.email = this.shared.customerData.email;
    }
    getNonce() {
        this.loading.show();
        this.http.get(this.config.url + "/api/get_nonce/?controller=AppSettings&method=create_product_review").subscribe((data) => {
            this.nonce = data.nonce;
            console.log(data);
            this.loading.hide();
        });
    }
    addComment() {
        this.loading.show();
        this.http.get(this.config.url + "/api/appsettings/create_product_review/?insecure=cool&nonce="
            + this.nonce
            + "&author_name=" + this.formData.name
            + "&author_email=" + this.formData.email
            + "&product_id=" + this.id
            + "&author_content=" + this.formData.description
            + "&rate_star=" + this.rating
            + "&user_id=" + this.shared.customerData.id).subscribe((data) => {
            this.loading.hide();
            if (data.status == 'ok') {
                this.navCtrl.pop();
            }
            console.log(data);
        }, err => {
            this.errorMessage = err.message;
        });
    }
    selectRating(value) {
        this.rating = value;
        for (let v of this.ratingStars) {
            if (v.value <= value)
                v.fill = 'star';
            else
                v.fill = 'star-outline';
        }
        this.applicationRef.tick();
    }
    disbaleButton() {
        //this.applicationRef.tick();
        if (this.rating == null) {
            return true;
        }
        else if (this.formData.description == "") {
            return true;
        }
        else if (this.formData.name == "") {
            return true;
        }
        else if (this.formData.email == "") {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
    }
};
AddReviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
AddReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-review.page.scss */ "./src/app/add-review/add-review.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], AddReviewPage);



/***/ })

}]);
//# sourceMappingURL=add-review-add-review-module-es2015.js.map