(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Reviews'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"review-page\">\n  <ion-grid class=\"rating-gird\" *ngIf=\"r5!=null\">\n    <ion-row>\n      <ion-col>\n        <h4>{{'Ratings & Reviews'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"5\">\n        <h1>{{average| number:'1.2-2'}}\n          <ion-icon name=\"star\"></ion-icon>\n        </h1>\n        <h3>{{reviews.length}} {{'rating'|translate}}</h3>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ul>\n          <li>5\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r5+'%'\" style=\"background-color:green;\"></span>\n          </li>\n          <li>4\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r4+'%'\" style=\"background-color:lightgreen;\"></span>\n          </li>\n          <li>3\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r3+'%'\" style=\"background-color:yellow;\"></span>\n          </li>\n          <li>2\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r2+'%'\" style=\"background-color:orange;\"></span>\n          </li>\n          <li>1\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r1+'%'\" style=\"background-color:dar=darkorange;\"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"danger\" (click)=\"openReviewsPage()\">{{'Rate and write a review'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class=\"rating-users\">\n    <ion-item *ngFor=\"let r of reviews\">\n      <ion-avatar item-start>\n        <img src=\"assets/avatar.png\">\n      </ion-avatar>\n      <h2>{{r.name}}</h2>\n      <ul class=\"product-rating\">\n        <li>\n          <div class=\"stars-outer\">\n            <div class=\"stars-inner\" [style.width]=\"(r.rating*20)+'%'\"></div>\n          </div>\n          <h6>{{r.date_created|date:'dd-MM-yyyy'}}</h6>\n        </li>\n      </ul>\n      <p [innerHTML]=\"r.review\"></p>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/reviews/reviews.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.module.ts ***!
  \*******************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.page */ "./src/app/reviews/reviews.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]
    }
];
let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
    })
], ReviewsPageModule);



/***/ }),

/***/ "./src/app/reviews/reviews.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.review-page {\n  background-color: white;\n}\n.review-page .rating-gird h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.review-page .rating-gird h1 {\n  font-size: 30px;\n  margin-top: 0;\n  text-align: center;\n}\n.review-page .rating-gird h3 {\n  color: var(--ion-color-secondary);\n  margin-bottom: 0;\n  text-align: center;\n}\n.review-page .rating-gird ul {\n  padding-left: 15px;\n  margin-bottom: 0;\n  border-left: 1px solid #ccc;\n}\n.review-page .rating-gird ul li {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  list-style: none;\n  position: relative;\n}\n.review-page .rating-gird ul li .icon {\n  margin-left: 5px;\n}\n.review-page .rating-gird ul li .block {\n  height: 11px;\n  display: inline-block;\n  margin-left: 7px;\n  position: relative;\n  z-index: 2;\n}\n.review-page .rating-gird ul li::after {\n  content: \"\";\n  background-color: #f4f4f4;\n  height: 11px;\n  width: calc(100% - 36px);\n  position: absolute;\n  left: 36px;\n  z-index: 1;\n  top: 5px;\n}\n.review-page .rating-gird .button {\n  min-height: 45px;\n}\n.review-page .rating-users .item {\n  background-color: transparent;\n  align-items: flex-start;\n}\n.review-page .rating-users .item ion-avatar {\n  margin-top: 10px;\n}\n.review-page .rating-users .item h2 {\n  font-weight: bold;\n}\n.review-page .rating-users .item .product-rating {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n.review-page .rating-users .item .product-rating li {\n  display: flex;\n  align-items: center;\n}\n.review-page .rating-users .item .product-rating li h6 {\n  margin-top: 5px;\n  margin-left: 10px;\n}\n.review-page .rating-users .item p p {\n  margin-top: 2px;\n  white-space: normal;\n}\n.review-page .product-rating {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.review-page .product-rating .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 25px;\n}\n.review-page .product-rating .stars-outer::before {\n  content: \"☆☆☆☆☆\";\n  color: #ccc;\n}\n.review-page .product-rating .stars-outer .stars-inner {\n  font-size: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.review-page .product-rating .stars-outer .stars-inner::before {\n  content: \"★★★★★\";\n  color: #f8ce0b;\n}\n.review-page .product-rating h6 {\n  color: cornflowerblue;\n  margin-left: 15px;\n}\n.review-page .animate {\n  -webkit-animation: fadeInRight 0.75s;\n          animation: fadeInRight 0.75s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmV2aWV3cy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxyZXZpZXdzXFxyZXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSx1QkFBQTtBREVGO0FDQUk7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7QURDTjtBQ0VJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBREFOO0FDS0k7RUFFRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURKTjtBQ01JO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FESk47QUNLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESFI7QUNJUTtFQUNFLGdCQUFBO0FERlY7QUNJUTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FERlY7QUNJUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FERlY7QUNNSTtFQUNFLGdCQUFBO0FESk47QUNRSTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUROTjtBQ1FNO0VBQ0UsZ0JBQUE7QUROUjtBQ1FNO0VBQ0UsaUJBQUE7QUROUjtBQ1FNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRE5SO0FDT1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURMVjtBQ09VO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FETFo7QUNVUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRFJWO0FDY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBRFpKO0FDY0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRFpOO0FDYU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QURYUjtBQ2FNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEWFI7QUNhUTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRFhWO0FDZUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FEYk47QUNpQkU7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FEZkoiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJldmlldy1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy1naXJkIGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgaDEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgaDMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgdWwgbGkgLmljb24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctZ2lyZCB1bCBsaSAuYmxvY2sge1xuICBoZWlnaHQ6IDExcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctZ2lyZCB1bCBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBoZWlnaHQ6IDExcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNnB4O1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDVweDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLWdpcmQgLmJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy11c2VycyAuaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLXVzZXJzIC5pdGVtIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctdXNlcnMgLml0ZW0gaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLXVzZXJzIC5pdGVtIC5wcm9kdWN0LXJhdGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5yZXZpZXctcGFnZSAucmF0aW5nLXVzZXJzIC5pdGVtIC5wcm9kdWN0LXJhdGluZyBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmV2aWV3LXBhZ2UgLnJhdGluZy11c2VycyAuaXRlbSAucHJvZHVjdC1yYXRpbmcgbGkgaDYge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnJldmlldy1wYWdlIC5yYXRpbmctdXNlcnMgLml0ZW0gcCBwIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnJldmlldy1wYWdlIC5wcm9kdWN0LXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5yZXZpZXctcGFnZSAucHJvZHVjdC1yYXRpbmcgLnN0YXJzLW91dGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5yZXZpZXctcGFnZSAucHJvZHVjdC1yYXRpbmcgLnN0YXJzLW91dGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYhuKYhuKYhuKYhuKYhlwiO1xuICBjb2xvcjogI2NjYztcbn1cbi5yZXZpZXctcGFnZSAucHJvZHVjdC1yYXRpbmcgLnN0YXJzLW91dGVyIC5zdGFycy1pbm5lciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmV2aWV3LXBhZ2UgLnByb2R1Y3QtcmF0aW5nIC5zdGFycy1vdXRlciAuc3RhcnMtaW5uZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piF4piF4piF4piF4piFXCI7XG4gIGNvbG9yOiAjZjhjZTBiO1xufVxuLnJldmlldy1wYWdlIC5wcm9kdWN0LXJhdGluZyBoNiB7XG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ucmV2aWV3LXBhZ2UgLmFuaW1hdGUge1xuICBhbmltYXRpb246IGZhZGVJblJpZ2h0IDAuNzVzO1xufSIsIi5yZXZpZXctcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAucmF0aW5nLWdpcmQge1xuICAgIGg0IHtcbiAgICAgIC8vZm9udC1zaXplOiAkaDItZm9udC1zaXplO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLmljb24ge1xuICAgICAgfVxuICAgIH1cbiAgICBoMyB7XG4gICAgICAvL2ZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuYmxvY2sge1xuICAgICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDM2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICB9XG4gIC5yYXRpbmctdXNlcnMge1xuICAgIC5pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5wcm9kdWN0LXJhdGluZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnByb2R1Y3QtcmF0aW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgLnN0YXJzLW91dGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA2XFwyNjA2XFwyNjA2XFwyNjA2XFwyNjA2XCI7XG4gICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgfVxuICAgICAgLnN0YXJzLWlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA1XFwyNjA1XFwyNjA1XFwyNjA1XFwyNjA1XCI7XG4gICAgICAgICAgY29sb3I6ICNmOGNlMGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaDYge1xuICAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLmFuaW1hdGUge1xuICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC43NXM7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/reviews/reviews.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reviews/reviews.page.ts ***!
  \*****************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/login/login.page */ "./src/app/modals/login/login.page.ts");








let ReviewsPage = class ReviewsPage {
    constructor(navCtrl, activatedRoute, applicationRef, config, modalCtrl, loading, shared) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.applicationRef = applicationRef;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.reviews = [];
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
        this.r4 = null;
        this.r5 = null;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getProductReviews();
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    getProductReviews() {
        this.loading.show();
        this.config.getWoo("products/reviews/?" + this.config.productsArguments + "&product=" + [this.id]).then((data) => {
            this.reviews = data;
            this.applicationRef.tick();
            let total = 0;
            for (let value of this.reviews) {
                total = total + value.rating;
            }
            this.average = (total / this.reviews.length);
            if (this.reviews.length == 0)
                this.average = 0;
            this.calculateAll();
            this.applicationRef.tick();
            this.loading.hide();
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    openReviewsPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {
                let modal = yield this.modalCtrl.create({
                    component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
                    componentProps: {
                        'hideGuestLogin': false
                    }
                });
                return yield modal.present();
            }
            else {
                this.navCtrl.navigateForward(this.config.currentRoute + "/add-review/" + this.id);
            }
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    totalRating() {
        let total = 0;
        for (let value of this.reviews) {
            total = total + value.rating;
        }
        let result = total;
        if (total == 0)
            result = 0;
        return result;
    }
    calculateAll() {
        let r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0;
        let total = this.reviews.length;
        for (let value of this.reviews) {
            if (value.rating == 1)
                r1++;
            if (value.rating == 2)
                r2++;
            if (value.rating == 3)
                r3++;
            if (value.rating == 4)
                r4++;
            if (value.rating == 5)
                r5++;
        }
        this.r1 = (100 / total) * r1;
        if (r1 == 0)
            this.r1 = 0;
        this.r2 = (100 / total) * r2;
        if (r2 == 0)
            this.r2 = 0;
        this.r3 = (100 / total) * r3;
        if (r3 == 0)
            this.r3 = 0;
        this.r4 = (100 / total) * r4;
        if (r4 == 0)
            this.r4 = 0;
        this.r5 = (100 / total) * r5;
        if (r5 == 0)
            this.r5 = 0;
    }
    ngOnInit() {
    }
};
ReviewsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] }
];
ReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviews.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviews.page.scss */ "./src/app/reviews/reviews.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]])
], ReviewsPage);



/***/ })

}]);
//# sourceMappingURL=reviews-reviews-module-es2015.js.map