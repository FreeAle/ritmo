(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'My Cart'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"removeCart1()\">\n        <ion-icon name=\"trash\"></ion-icon>\n        Svuota\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge>{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  <ion-grid class=\"ion-no-padding grid-empty\" *ngIf=\"products.length==0 && loadingServerData\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"basket\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your cart is empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"ion-padding\" *ngFor=\"let product of products\" >\n    <ion-card-header class=\"ion-no-padding\">\n      <ion-card-subtitle>\n        <h3> {{product.name}} </h3>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content >\n      <ion-row>\n        <ion-thumbnail>\n          <ion-img class=\"product-image\" src=\"{{product.image}}\"></ion-img>      \n        </ion-thumbnail>\n      </ion-row>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-row >\n              <ion-col class=\"ion-text-left\" >\n                {{'SKU' |translate}}&nbsp;:\n              </ion-col>\n              <ion-col class=\"ion-text-right\">\n                {{ product.sku }}  \n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-text-left\">\n                {{'Prezzo' |translate}}&nbsp;:\n              </ion-col>\n              <ion-col class=\"ion-text-right\">\n               ??? {{product.price }}  \n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let att of product.meta_data\">\n              <ion-col class=\"ion-text-left\">\n                {{att.key}}&nbsp;:\n              </ion-col>\n              <ion-col class=\"ion-text-right\">\n                {{att.value}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-text-left\">\n                <span style=\"margin: auto;\">{{'Quantity' |translate}}</span>&nbsp;:\n              </ion-col>\n              <ion-col class=\"ion-text-right ion-no-padding\">\n                <ion-row class=\"ion-float-right\">\n                  <ion-icon name=\"remove-circle\" (click)=\"qunatityMinus(product)\" *ngIf=\"!product.sold_individually\">\n                  </ion-icon>\n                  <span class=\"quantity\">{{product.quantity}}</span>\n                  <ion-icon name=\"add-circle\" (click)=\"qunatityPlus(product);\" *ngIf=\"!product.sold_individually\">\n                  </ion-icon>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-text-left\">\n                <strong > {{'Sub Total' |translate}}</strong>&nbsp;:\n              </ion-col>\n              <ion-col class=\"ion-text-right\">\n                <strong > ??? {{product.subtotal | number : '1.2-2'}}</strong>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"vedi\">\n          <ion-icon name=\"eye\" class=\"vedioc\" size=\"large\" color=\"primary\" (click)=\"getSingleProductDetail(product.product_id)\"></ion-icon>\n          <ion-icon name=\"trash\" class=\"vedice\" size=\"large\" color=\"danger\" (click)=\"removeCart(product.cart_id);\"></ion-icon>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"products.length!=0\">\n    <ion-card class=\"card-product\" *ngFor=\"let coupon of shared.couponArray\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Coupon Code'|translate}}\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            {{coupon.code}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Coupon Amount'|translate}}\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            {{coupon.amount| curency}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'percent'\">\n            {{'A percentage discount for the entire cart'|translate}}\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'fixed_cart'\">\n            {{'A fixed total discount for the entire cart'|translate}}\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'fixed_product'\">\n            {{'A fixed total discount for selected products only'|translate}}\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'percent_product'\">\n            {{'A percentage discount for selected products only'|translate}}\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button small color=\"secondary\" (click)=\"deleteCoupon(coupon.code)\">{{'Remove'|translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"ion-padding\">\n      <ion-card-header class=\"ion-no-padding\">\n        <ion-card-subtitle>\n          <h3 id=\"copounlist\" *ngIf=\"!config.appInProduction\" (click)=\"couponslist()\">\n            {{'List of coupon codes'|translate}}\n          </h3>\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-input placeholder=\"{{'coupon code'|translate}}\" [(ngModel)]=\"c\"></ion-input>\n          <ion-button color=\"secondary\" slot=\"end\" [disabled]=\"c==''\" (click)=\"getCoupon(c)\">{{'Apply'|translate}}\n          </ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <ion-card *ngIf=\"products.length!=0\">\n    <ion-card-content style=\"padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'SubTotale'|translate}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          ??? {{subtotal| number : '1.2-2'}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Discount'|translate}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          -??? {{(subtotal-total)| number : '1.2-2'}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Total'|translate}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          ??? {{total| number : '1.2-2'}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"products.length!=0\">\n  <ion-button expand=\"full\" solid block color=\"secondary\" (click)=\"proceedToCheckOut()\">\n    {{'Proceed'|translate}}\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");







// For Translation Language

const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .grid-empty {\n  margin-top: 50%;\n}\nion-content .grid-empty ion-row ion-col {\n  text-align: center;\n}\nion-content .grid-empty ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\nion-content .grid-empty ion-row ion-col ion-button {\n  --border-radius: 0px;\n}\nion-content .grid-empty ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n  margin-bottom: 6px;\n}\nion-content .grid-empty ion-row ion-col h5 {\n  font-size: 14px;\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  margin-top: 0;\n}\nion-content .vedi {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .vedioc {\n  size: 30px;\n}\nion-content .vedice {\n  size: 30px;\n  padding-left: 10px;\n  color: red !important;\n}\nion-content .product-description p {\n  font-size: 14px;\n  padding-left: 0px;\n  margin-top: 5px;\n}\nion-content ion-card ion-card-header {\n  border-bottom: solid var(--ion-color-light-shade);\n  border-width: 0.2px;\n  font-size: 25px;\n}\nion-content ion-card ion-card-header ion-card-subtitle h3 {\n  font-size: 15px;\n  font-weight: bold;\n  margin-top: 0;\n}\nion-content ion-card ion-card-content {\n  padding: 0;\n}\nion-content ion-card ion-card-content .product-image {\n  position: initial;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nion-content ion-card ion-card-content ion-icon {\n  font-size: 7vw;\n  vertical-align: -webkit-baseline-middle;\n  color: var(--ion-text-color) !important;\n}\nion-content ion-card ion-card-content .quantity {\n  padding-left: 15px;\n  padding-right: 15px;\n  font-weight: 800;\n  font-size: 4vw;\n  margin: auto;\n}\nion-footer .toolbar {\n  padding-left: 10px;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.zero-padding-horizontal {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBREVNO0VBQ0Usa0JBQUE7QUNBUjtBRENRO0VBQ0UsU0FBQTtFQUNBLDJDQUFBO0FDQ1Y7QURDUTtFQUNFLG9CQUFBO0FDQ1Y7QURDUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NWO0FEQ1E7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0FDQ1Y7QURJRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElFO0VBQ0UsVUFBQTtBQ0ZKO0FES0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0hKO0FETUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSk47QURRSTtFQUNFLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTk47QURRUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNOVjtBRFVJO0VBRUUsVUFBQTtBQ1ROO0FEZ0JNO0VBQ0UsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDZFI7QURnQk07RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtBQ2RSO0FEZ0JNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNkUjtBRHFCRTtFQUNFLGtCQUFBO0FDbEJKO0FEb0JFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2xCSjtBRHFCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQkYiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5ncmlkLWVtcHR5IHtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgem9vbTogMy45O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudmVkaXtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICAudmVkaW9je1xyXG4gICAgc2l6ZTogMzBweDtcclxuICAgIFxyXG4gIH1cclxuICAudmVkaWNle1xyXG4gICAgc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwLjJweDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIC8vZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDd2dztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4uemVyby1wYWRkaW5nLWhvcml6b250YWwge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4iLCJpb24tY29udGVudCAuZ3JpZC1lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWVtcHR5IGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWVtcHR5IGlvbi1yb3cgaW9uLWNvbCBpb24taWNvbiB7XG4gIHpvb206IDMuOTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWVtcHR5IGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG5pb24tY29udGVudCAuZ3JpZC1lbXB0eSBpb24tcm93IGlvbi1jb2wgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWVtcHR5IGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IC52ZWRpIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbmlvbi1jb250ZW50IC52ZWRpb2Mge1xuICBzaXplOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLnZlZGljZSB7XG4gIHNpemU6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnByb2R1Y3QtZGVzY3JpcHRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci13aWR0aDogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLnByb2R1Y3QtaW1hZ2Uge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLnF1YW50aXR5IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDR2dztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tZm9vdGVyIC50b29sYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi56ZXJvLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/coupon/coupon.service */ "./src/providers/coupon/coupon.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/login/login.page */ "./src/app/modals/login/login.page.ts");










let CartPage = class CartPage {
    constructor(navCtrl, shared, config, http, loading, storage, modalCtrl, applicationRef, couponProvider, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.applicationRef = applicationRef;
        this.couponProvider = couponProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.c = '';
        this.couponArray = [];
        this.products = [];
        this.loadingServerData = true;
        //============================================================================================  
        this.qunatityPlus = function (p) {
            if (p.stock_quantity == p.quantity)
                this.shared.showAlert("Product Quantity is Limited!");
            else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
                p.quantity++;
                p.subtotal = p.subtotal + parseFloat(p.price);
                p.total = p.total + parseFloat(p.price);
                this.updateCart();
            }
        };
        //============================================================================================  
        //function decreasing the quantity
        this.qunatityMinus = function (p) {
            if (p.quantity != 1) {
                p.quantity--;
                p.subtotal = parseFloat(p.price) * p.quantity;
                p.total = parseFloat(p.price) * p.quantity;
                this.updateCart();
            }
        };
        //============================================================================================   
        //getting getMostLikedProducts from the server
        this.getCoupon = function (code) {
            this.loading.show();
            this.config.getWoo("coupons?code=" + code).then((data) => {
                this.loading.hide();
                let d = data;
                let coupon = d[0];
                if (d.length == 0)
                    this.shared.showAlert("Invalid Coupon Code!");
                else
                    this.applyCouponCart(coupon);
            }, error => {
                this.loading.hide();
                console.log(error);
            });
        };
        //============================================================================================  
        //applying coupon on the cart
        this.applyCouponCart = function (coupon) {
            //checking the coupon is valid or not
            if (this.couponProvider.validateCouponService(coupon, this.products, this.shared.couponArray) == false) {
                return 0;
            }
            else {
                if (coupon.individual_use == 1) {
                    this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
                    this.shared.couponArray = [];
                    console.log('individual_use');
                }
                var v = {};
                v.code = coupon.code;
                v.amount = coupon.amount;
                v.product_ids = coupon.product_ids;
                v.excluded_product_ids = coupon.exclude_product_ids;
                v.product_categories = coupon.product_categories;
                v.excluded_product_categories = coupon.excluded_product_categories;
                v.discount = coupon.amount;
                v.individual_use = coupon.individual_use;
                v.free_shipping = coupon.free_shipping;
                v.discount_type = coupon.discount_type;
                // v.limit_usage_to_x_items = coupon.limit_usage_to_x_items;
                // v.usage_limit = coupon.usage_limit;
                // v.used_by = coupon.used_by ;
                // v.usage_limit_per_user = coupon.usage_limit_per_user ;
                // v.exclude_sale_items = coupon.exclude_sale_items;
                this.shared.couponArray.push(coupon);
            }
            //applying coupon service
            this.products = this.couponProvider.apply(coupon, this.products);
            this.updateCart();
        };
        //============================================================================================  
        //delete Coupon
        this.deleteCoupon = function (code) {
            this.shared.couponArray.forEach((value, index) => {
                if (value.code == code) {
                    this.shared.couponArray.splice(index, 1);
                    return true;
                }
            });
            this.updateCart();
            console.log(this.shared.couponArray);
        };
    }
    //============================================================================================  
    totalPrice() {
        var price = 0;
        var subPrice = 0;
        for (let value of this.products) {
            subPrice = subPrice + value.subtotal;
            price = price + value.total;
        }
        this.subtotal = subPrice;
        this.total = price;
        // console.log(price);
    }
    ;
    formataNumero(e, separador = '.', decimais = 2) {
        let a = e.value.split('');
        let ns = '';
        a.forEach((c) => { if (!isNaN(c))
            ns = ns + c; });
        ns = parseInt(ns).toString();
        if (ns.length < (decimais + 1)) {
            ns = ('0'.repeat(decimais + 1) + ns);
            ns = ns.slice((decimais + 1) * -1);
        }
        let ans = ns.split('');
        let r = '';
        for (let i = 0; i < ans.length; i++)
            if (i == ans.length - decimais)
                r = r + separador + ans[i];
            else
                r = r + ans[i];
        e.value = r;
    }
    //============================================================================================  
    getSingleProductDetail(id) {
        this.loading.show();
        this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data) => {
            this.loading.hide();
            this.shared.singleProductPageData.push(data);
            if (this.config.appNavigationTabs)
                this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + data.id);
            else
                this.navCtrl.navigateForward("/product-detail/" + data.id);
        }, err => {
            this.loading.hide();
            console.log(err);
        });
    }
    showProductDetail(id) {
        this.loading.show();
        this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data) => {
            //this.shared.showAlert("loaded");
            this.loading.hide();
            let p = data;
            this.shared.singleProductPageData.push(p);
            this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + p.id);
        }, err => {
            this.loading.hide();
            console.log(err);
        });
        this.shared.addToRecent(this.product);
    }
    //============================================================================================  
    removeCart(id) {
        this.products.forEach((value, index) => {
            if (value.cart_id == id) {
                this.products.splice(index, 1);
                console.log("removing" + id);
            }
        });
        this.shared.removeCart(this.products);
        this.updateCart();
    }
    removeCart1() {
        this.products.forEach((value, index) => {
            if (value.cart_id) {
                this.products.splice(index);
            }
        });
        this.shared.removeCart(this.products);
        this.updateCart();
    }
    //============================================================================================  
    proceedToCheckOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {
                let modal = yield this.modalCtrl.create({
                    component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"],
                    componentProps: {
                        'hideGuestLogin': true
                    }
                });
                yield modal.present();
            }
            else {
                // <!-- 2.0 updates -->
                if (this.config.checkOutPage == 1)
                    this.shared.onePageCheckOut();
                else {
                    if (this.config.appNavigationTabs)
                        this.navCtrl.navigateForward(this.config.currentRoute + "/billing-address");
                    else
                        this.navCtrl.navigateForward("/billing-address");
                }
            }
        });
    }
    //============================================================================================  
    openProductsPage() {
        if (this.config.appNavigationTabs)
            this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
        else
            this.navCtrl.navigateForward(this.config.getCurrentHomePage());
    }
    //============================================================================================  
    ionViewWillEnter() {
        //if (this.config.admob == 1) this.shared.showAd();
        this.updateCart();
    }
    //============================================================================================  
    updateCart() {
        if (this.shared.cartProducts.length != 0) {
            this.loading.show();
            this.loadingServerData = false;
        }
        let count = 0;
        this.shared.cartProducts.forEach((value, index) => {
            let id = value.product_id;
            if (value.variation_id != undefined)
                id = value.variation_id;
            this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data) => {
                count++;
                let p = data;
                if (p.id == undefined) {
                    this.shared.cartProducts.splice(index, 1);
                }
                else if (p.status == 'trash') {
                    this.shared.cartProducts.splice(index, 1);
                }
                else {
                    value.price = p.price;
                    value.name = p.name;
                    value.stock_quantity = p.stock_quantity;
                    value.tax_status = p.tax_status;
                    //value.image = p.images[0].src;
                    value.tax_class = p.tax_class;
                    value.tax_status = p.tax_status;
                    value.on_sale = p.on_sale;
                    value.categories = p.categories;
                    if (p.stock_quantity == null) { }
                    else if (p.stock_quantity < value.quantity)
                        value.quantity = p.stock_quantity;
                    else if (p.stock_status != 'instock') {
                        this.shared.cartProducts.splice(index, 1);
                    }
                    value.subtotal = parseFloat(value.price) * value.quantity;
                    value.total = parseFloat(value.price) * value.quantity;
                }
                this.applicationRef.tick();
                if (count == this.shared.cartProducts.length) {
                    this.changingCart();
                    this.loading.hide();
                    this.loadingServerData = true;
                }
            });
        });
    }
    //==========================================================================
    changingCart() {
        this.products = this.shared.cartProducts;
        this.storage.set('cartProducts', this.shared.cartProducts);
        this.shared.cartTotalItems();
        this.shared.couponArray.forEach((value) => {
            this.products = this.couponProvider.apply(value, this.shared.cartProducts);
        });
        this.totalPrice();
        this.applicationRef.tick();
    }
    couponslist() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionSheetCtrl.create({
                header: 'Demo Coupons',
                buttons: [
                    {
                        icon: 'arrow-forward',
                        text: 'Product Fixed (fp). A fixed total discount for selected products only',
                        handler: () => {
                            this.c = 'fp';
                        }
                    },
                    {
                        icon: 'arrow-forward',
                        text: 'Cart Fixed (fc). A fixed total discount for the entire cart',
                        handler: () => {
                            this.c = 'fc';
                        }
                    },
                    {
                        icon: 'arrow-forward',
                        text: 'Product Percentage (percentage). A percentage discount for selected products only',
                        handler: () => {
                            this.c = 'percentage';
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    ionViewDidEnter() {
        this.shared.getBrowserHeaderColorFromAppHeader();
    }
    ngOnInit() {
    }
    getProductData(id) {
        let p;
        this.shared.singleProductPageData.forEach(element => {
            if (element.id == id) {
                p = element;
            }
        });
        return p;
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map