(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-detail-news-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-detail/news-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-detail/news-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        {{post.title.rendered}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"{{post.featured_url}}\" *ngIf=\"post.image\"></ion-img>\n  <h2 [innerHTML]=\"htmlTitle\">\n  </h2>\n  <p [innerHTML]=\"htmlContent\"></p>\n</ion-content>");

/***/ }),

/***/ "./src/app/news-detail/news-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.module.ts ***!
  \***************************************************/
/*! exports provided: NewsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/news-detail/news-detail.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]
    }
];
let NewsDetailPageModule = class NewsDetailPageModule {
};
NewsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]]
    })
], NewsDetailPageModule);



/***/ }),

/***/ "./src/app/news-detail/news-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-img {\n  margin-right: auto;\n  margin-left: auto;\n}\nion-content h2 {\n  padding-left: 8px;\n  font-size: 20px;\n  font-weight: bold;\n}\nion-content h2 small {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: #747474;\n  font-weight: normal;\n  margin-top: 5px;\n}\nion-content h2 small .icon {\n  font-size: 18px;\n  margin-right: 5px;\n}\nion-content p {\n  margin-top: auto;\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kZXRhaWwvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcbmV3cy1kZXRhaWxcXG5ld3MtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0hSO0FES0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hSO0FESVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FER1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNEaEI7QURLSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudHtcblxuICAgIGlvbi1pbWd7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICAgIGgye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgc21hbGx7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc0NzQ3NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIH1cbn0iLCJpb24tY29udGVudCBpb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbmlvbi1jb250ZW50IGgyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCBoMiBzbWFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IGgyIHNtYWxsIC5pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IHAge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/news-detail/news-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.ts ***!
  \*************************************************/
/*! exports provided: NewsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPage", function() { return NewsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");




let NewsDetailPage = class NewsDetailPage {
    constructor(shared, domSanitizer) {
        this.shared = shared;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
        this.post = this.shared.singlePostData;
        let self = this;
        if (self.post.content) {
            self.htmlContent = self.domSanitizer.bypassSecurityTrustHtml(self.post.content.rendered);
        }
        console.log(this.post);
        if (self.post.title) {
            self.htmlTitle = self.domSanitizer.bypassSecurityTrustHtml(self.post.title.rendered);
        }
    }
};
NewsDetailPage.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
NewsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-detail/news-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-detail.page.scss */ "./src/app/news-detail/news-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], NewsDetailPage);



/***/ })

}]);
//# sourceMappingURL=news-detail-news-detail-module-es2015.js.map