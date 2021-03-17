(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{product.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"product-detail-page\">\n  <div class=\"product-tags-top\">\n    <div class=\"product-tag-new\" *ngIf=\"checkProductNew()\">{{'New'|translate}}</div>\n    <div class=\"product-tag-featured\" *ngIf=\"product.featured\">{{'Featured'|translate}}</div>\n  </div>\n\n  <div class=\"icons share-like\">\n    <ion-icon name=\"share\" (click)=\"share()\"></ion-icon>\n    <ion-icon *ngIf=\"isLiked!=0\" name=\"heart\" (click)=\"clickWishList()\"></ion-icon>\n    <ion-icon *ngIf=\"isLiked==0\" name=\"heart-outline\" (click)=\"clickWishList()\"></ion-icon>\n  </div>\n  <ion-slides class=\"product-slides\" pager=\"true\" dir=\"{{shared.dir}}\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let b of product.images\" (click)=\"zoomImage(b.src)\">\n      <div>\n        <img src=\"{{b.src}}\" imageViewer>\n      </div>\n    </ion-slide>\n    <ion-slide *ngIf=\"product.images.length==0\" (click)=\"zoomImage(b.src)\">\n      <div>\n        <img src=\"assets/woocommerce-placeholder.png\" imageViewer>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid class=\"product-detail-title\">\n    <ion-row>\n      <div class=\"product-tags\">\n        <div class=\"product-tag-off\" *ngIf=\"product.on_sale\">{{'SALE'|translate}}</div>\n      </div>\n      <!-- 2.0 updates -->\n\n      <ion-col class=\"woo-price-group\" size=\"12\">\n        <span class=\"woo-price\" [innerHTML]=\"product.price_html\"></span>\n        <span class=\"woo-price\" *ngIf=\"variationPrice!=null\">{{'Your Price'|translate}} &nbsp;\n          {{variationPrice|curency}}</span>\n\n        <span class=\"product-outstock\" *ngIf=\"product.stock_status!='instock'\">{{'Out of Stock'|translate}}</span>\n        <span class=\"product-instock\" *ngIf=\"product.stock_status=='instock'\">{{'In Stock'|translate}}&nbsp;\n          <span *ngIf=\"product.stock_quantity!=null\">({{product.stock_quantity}})</span>\n        </span>\n      </ion-col>\n\n      <ion-col class=\"product-title\" size=\"12\">\n        <h2>{{product.name}}\n          <br>\n          <small *ngFor=\"let b of product.categories\">{{b.name}}&nbsp;</small>\n        </h2>\n        <ion-spinner *ngIf=\"ratingStarsValue==null\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"product-detail-content\" *ngIf=\"product.sku!=null && product.sku!=''\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"product-describtion\">{{'SKU:'|translate}} {{product.sku}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class=\"product-detail-header\" *ngIf=\"product.type!='grouped'\">\n    <ion-row>\n      <ion-col class=\"left\" size=\"6\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"qty-name\" size=\"12\">{{'Quantity' |translate}}</ion-col>\n          <ion-col size=\"2.7\" class=\"qty-vlue ion-text-right\">\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"qunatityMinus(product,quantity);\"\n              *ngIf=\"!product.sold_individually\">\n              <ion-icon name=\"remove\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" class=\"qty-vlue\">\n            <ion-input class=\"dgi\" name=\"q\" [(ngModel)]=\"quantity\" (focusout)=\"quantityChange()\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\" class=\"qty-vlue\">\n            <!-- <span class=\"dgi\">{{quantity}}</span> -->\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"qunatityPlus(product,quantity);\"\n              *ngIf=\"!product.sold_individually\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-text-end\" size=\"6\" *ngIf=\"selectedVariation!=null && !disableCartButton\">\n        <ion-row class=\"ion-no-margin\">\n          <ion-col class=\"ion-text-right\" class=\"ttl-name\" size=\"12\">{{'Prezzo' |translate}}&nbsp;{{'Totale' |translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" class=\"ttl-vlue\" size=\"12\">€ {{ quantity*selectedVariation.price | number : '1.2-2'}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-text-end\" size=\"6\" *ngIf=\"product.type!='variable'\">\n        <ion-row class=\"ion-no-margin\">\n          <ion-col class=\"ion-text-right\" class=\"ttl-name\" size=\"12\">{{'Prezzo' |translate}}&nbsp;{{'Totale' |translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" class=\"ttl-vlue\" size=\"12\">€ {{ quantity*product.price | number : '1.2-2'}}</ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"select-col\" size=\"12\" *ngIf=\"product.type=='variable'\">\n        {{'Please select all product options before adding this product to your cart'|translate}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"groupProducts.length==0 && product.type=='grouped'\">\n    <ion-col>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-grid>\n  <ion-list class=\"group-product\" *ngIf=\"groupProducts.length!=0\">\n\n    <ion-item *ngFor=\"let g of groupProducts\">\n      <ion-thumbnail slot=\"start\">\n        <img *ngIf=\"g.images.length!=0\" src=\"{{g.images[0].src}}\">\n        <img *ngIf=\"g.images.length==0\" src=\"assets/woocommerce-placeholder.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <ion-text>\n          <h3 class=\"ion-text-left\">{{g.name}}</h3>\n        </ion-text>\n        <span class=\"ion-text-left\" class=\"woo-price\" [innerHTML]=\"g.price_html\"></span>\n\n        <ion-row class=\"qty-box-total\">\n          <ion-col class=\"left\" size=\"12\">\n            <ion-row>\n              <ion-col class=\"ion-text-left\" class=\"qty-name\" size=\"12\">{{'Quantity' |translate}}</ion-col>\n              <ion-col class=\"qty-vlue ion-text-right\" size=\"3\">\n                <ion-button class=\"button\" size=\"small\" color=\"secondary\" (click)=\"qunatityGroupMinus(g)\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col class=\"qty-vlue\" size=\"3\">\n                <span class=\"dgi\">{{g.quantity}}</span>\n              </ion-col>\n              <ion-col class=\"qty-vlue\" size=\"3\">\n                <ion-button class=\"button\" size=\"small\" color=\"secondary\" (click)=\"qunatityGroupPlus(g)\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ttl-name\" size=\"12\">{{'Prezzo' |translate}}&nbsp;{{'Totale' |translate}}</ion-col>\n              <ion-col class=\"ttl-vlue\" size=\"12\">€ {{ g.quantity*g.price}}</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid class=\"product-detail-content product-tags\" *ngIf=\"product.type!='variable' && attributes.length!=0\">\n    <ion-row>\n      <ion-col>\n        <h3 style=\"color: #0088CC; text-decoration: dotted;\">{{'Tags'|translate}}</h3>\n        <span *ngFor=\" let att of attributes\">\n          <span *ngIf=\"product.type!='variable'\">\n            <span *ngIf=\"att.visible\">\n              <h6>{{att.name}}</h6>\n              <ion-badge *ngFor=\" let val of att.options\">{{val}}</ion-badge>\n            </span>\n          </span>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"loaderProductVariations\">\n    <ion-col>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"product.type=='variable' && !loaderProductVariations\" class=\"attributes-grid\">\n    <ion-list>\n      <div *ngFor=\" let att of attributes; let ind = index\">\n        <ion-card *ngIf=\"att.variation\" class=\"att-variation-card\">\n          <ion-card-header>\n            <ion-card-subtitle>{{att.name}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <span *ngFor=\" let val of att.options; let i = index\">\n              <span [class.disabled]=\"!availableOption(att.name,val)\" style=\"padding-right: 15px;\">\n                <ion-badge mode=\"md\" [color]=\"checkOptionSelected(val,att.name,ind)\" style=\"padding-right: 10px;\"\n                  (click)=\"fillAttributes(val,att.name,ind)\">\n                  {{val}}\n                </ion-badge>\n              </span>\n            </span>\n          </ion-card-content>\n        </ion-card>\n      </div>\n      <!-- for attributes just to show -->\n      <div *ngFor=\"let att of attributes\">\n        <ion-card class=\"att-variation-card\" *ngIf=\"!att.variation && att.visible\">\n          <ion-card-header>\n            <ion-card-subtitle>{{att.name}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <span *ngFor=\" let val of att.options\">\n              <ion-badge mode=\"md\" color=\"primary\" style=\"padding-right: 10px;\">\n                {{val}}\n              </ion-badge>\n            </span>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-list>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content bing-fo\" *ngIf=\"config.showVendorInfo && product.store\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <h3>{{'Seller Information'|translate}}<br><small>{{'Sold by'|translate}}{{' '+product.store.name}}</small></h3>\n        <ion-button expand=\"block\" color=\"light\" (click)=\"openStore(product.store)\">\n          {{'View Store'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"loaderWcVendorInfo\">\n    <ion-col>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content bing-fo\"\n    *ngIf=\"!loaderWcVendorInfo && config.showWcVendorInfo && wcVendorInfo.meta.pv_shop_name\">\n    <ion-row *ngIf=\"!loaderWcVendorInfo\">\n      <ion-col size=\"12\">\n        <h3>\n          {{'Seller Information'|translate}}<br><small>{{'Sold by'|translate}}{{' '+wcVendorInfo.meta.pv_shop_name}}</small>\n        </h3>\n        <ion-button expand=\"block\" color=\"light\" (click)=\"openStore(wcVendorInfo)\">\n          {{'View Store'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content ion-no-padding\" *ngIf=\"product.description!=''\">\n    <ion-row class=\"top-icon-header heading\">\n      <ion-button fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"list\"></ion-icon>\n        {{'Product Description'|translate}}\n      </ion-button>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" style=\"padding:0 10px\">\n        <div class=\"product-description\" [innerHTML]=\"product.description\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content animate-product ion-no-padding\">\n    <ion-col *ngIf=\"releatedItems.length==0\">\n      <ion-spinner style=\"margin:5px 5px\"></ion-spinner>\n    </ion-col>\n    <ion-row class=\"ion-no-padding\" *ngIf=\"releatedItems.length!=0\">\n      <ion-col class=\"ion-no-padding\" size=\"12\">\n        <ion-row class=\"top-icon-header heading\">\n          <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n            {{'Prodotti Correlati'|translate}}\n          </ion-button>\n        </ion-row>\n        <ion-slides class=\"animate-item\" [options]=\"sliderConfigReleatedItems\">\n          <ion-slide *ngFor=\"let p of releatedItems\">\n            <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectAttributes.length!=0\">\n    <ion-fab-button color=\"danger\" (click)=\"resetAttributes()\">{{'Clear'|translate}}\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer class=\"product-detail-footer\">\n  <ion-button expand=\"full\" color=\"secondary\" [disabled]=\"disableCartButton\" *ngIf=\"product.type!='external'\"\n    (click)=\"addToCartProduct()\">\n    {{'Aggiungi Al Carrello'|translate}}</ion-button>\n\n  <ion-button expand=\"full\" color=\"secondary\" [disabled]=\"disableCartButton\" *ngIf=\"product.type=='external'\"\n    (click)=\"openProduct()\">\n    {{product.button_text|translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/product-detail/product-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");









const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]
    }
];
let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ }),

/***/ "./src/app/product-detail/product-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.product-detail-page iframe {\n  width: 100%;\n  min-height: 300px;\n  height: auto;\n}\n.product-detail-page .product-tags-top {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9;\n}\n.product-detail-page .product-tags-top .product-tag-new {\n  color: white;\n  background-color: red;\n  padding: 5px 8px;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.product-detail-page .product-tags-top .product-tag-featured {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n  padding: 5px 8px;\n}\n.product-detail-page .icons {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  background-color: #d6d2d2;\n  z-index: 9;\n  direction: ltr;\n}\n.product-detail-page .icons ion-icon {\n  padding-top: 5px;\n  font-size: 22px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.product-detail-page .icons ion-icon[name=share] {\n  color: #bed13c;\n}\n.product-detail-page .icons ion-icon[aria-label=heart],\n.product-detail-page .icons .icon[aria-label=\"heart outline\"] {\n  color: var(--ion-color-secondary);\n}\n.product-detail-page .product-slides .swiper-wrapper .swiper-slide {\n  background-color: var(--ion-background-color);\n}\n.product-detail-page .product-slides img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n.product-detail-page .product-detail-title {\n  position: relative;\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-title .product-tags {\n  position: absolute;\n  left: 10px;\n  top: -15px;\n  z-index: 9;\n}\n.product-detail-page .product-detail-title .product-tags .product-tag-off {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n  padding: 5px 8px;\n  margin-right: 4px;\n  float: left;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.product-detail-page .product-detail-title .product-tags .product-tag-featured {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n  padding: 5px 8px;\n  float: left;\n}\n.product-detail-page .product-detail-title .woo-price-group {\n  padding-top: 15px;\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-title .woo-price-group .woocommerce-Price-amount {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-text-color);\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price {\n  float: left;\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price del .woocommerce-Price-amount {\n  font-size: 16px;\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  text-decoration: line-through;\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price ins {\n  text-decoration: none;\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price ins .woocommerce-Price-amount {\n  color: var(--ion-color-danger);\n  margin-left: 5px;\n}\n.product-detail-page .product-detail-title .woo-price-group .product-instock,\n.product-detail-page .product-detail-title .woo-price-group .product-outstock {\n  float: right;\n  color: red;\n  padding-top: 0;\n  font-size: 14px;\n}\n.product-detail-page .product-detail-title .woo-price-group .product-instock {\n  color: var(--ion-color-text);\n}\n.product-detail-page .product-detail-title .woo-price-group .product-outstock {\n  color: var(--ion-color-text);\n}\n.product-detail-page .product-detail-title .product-title {\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-title .product-title h3 {\n  color: var(--ion-text-color);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.product-detail-page .product-detail-title .product-title h3 small {\n  font-size: 12px;\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\n.product-detail-page .product-ratings .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 25px;\n}\n.product-detail-page .product-ratings .stars-outer::before {\n  content: \"☆☆☆☆☆\";\n  color: #ccc;\n}\n.product-detail-page .product-ratings .stars-outer .stars-inner {\n  font-size: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-detail-page .product-ratings .stars-outer .stars-inner::before {\n  content: \"★★★★★\";\n  color: #f8ce0b;\n}\n.product-detail-page .product-ratings ion-icon {\n  font-size: 28px;\n  color: gray;\n}\n.product-detail-page .product-ratings h6 {\n  margin-bottom: 6px;\n  text-align: start;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  margin-top: 6px;\n}\n.product-detail-page .product-detail-header {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.15);\n  position: relative;\n}\n.product-detail-page .product-detail-header .left,\n.product-detail-page .product-detail-header .right {\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-header .left .col,\n.product-detail-page .product-detail-header .right .col {\n  display: flex;\n  align-items: center;\n}\n.product-detail-page .product-detail-header .left .col {\n  justify-content: flex-start;\n}\n.product-detail-page .product-detail-header .right .col {\n  justify-content: flex-end;\n}\n.product-detail-page .product-detail-header .qty-name {\n  padding-top: 0;\n  font-size: 12px;\n}\n.product-detail-page .product-detail-header .qty-name,\n.product-detail-page .product-detail-header .ttl-name {\n  padding-left: 0;\n  padding-bottom: 0;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.product-detail-page .product-detail-header .ttl-vlue {\n  font-weight: bold;\n  font-size: 20px;\n}\n.product-detail-page .product-detail-header .qty-vlue,\n.product-detail-page .product-detail-header .ttl-vlue {\n  padding-left: 0;\n  padding-right: 0;\n}\n.product-detail-page .product-detail-header .total-para {\n  font-size: 12px;\n}\n.product-detail-page .product-detail-header .qty-vlue {\n  padding-left: 0;\n  padding-right: 0;\n}\n.product-detail-page .product-detail-header .qty-vlue ion-button {\n  border-width: 0;\n  margin: 0;\n  height: 30px;\n}\n.product-detail-page .product-detail-header .qty-vlue .dgi {\n  background-color: var(--ion-background-color);\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2);\n}\n.product-detail-page .product-detail-header .qty-vlue .dgi input {\n  text-align: center;\n  padding-left: 0px;\n}\n.product-detail-page .product-detail-content h3 {\n  margin-top: 0;\n  font-weight: 400;\n  font-size: 14px;\n  font-weight: 400;\n}\n.product-detail-page .product-detail-content p {\n  margin-bottom: 0;\n}\n.product-detail-page .product-detail-content.bing-fo {\n  background-color: var(ion-color-light);\n}\n.product-detail-page .group-product ion-label {\n  margin-left: 10px;\n}\n.product-detail-page .group-product ion-thumbnail {\n  margin: 0;\n  width: 115px;\n  height: 115px;\n}\n.product-detail-page .group-product ion-item {\n  --padding-start: 0;\n  align-items: flex-start;\n  border-bottom: 1px solid #dedede;\n  background-color: var(--ion-color-text);\n}\n.product-detail-page .group-product ion-item .item-inner {\n  border-bottom: none;\n}\n.product-detail-page .group-product .item:last-child {\n  border-bottom: none;\n}\n.product-detail-page .group-product h3 {\n  color: var(--ion-color-text);\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-weight: 400;\n}\n.product-detail-page .group-product .woo-price {\n  float: left;\n  font-size: 12px;\n}\n.product-detail-page .group-product .woo-price del .woocommerce-Price-amount {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  text-decoration: line-through;\n}\n.product-detail-page .group-product .woo-price ins {\n  text-decoration: none;\n}\n.product-detail-page .group-product .woo-price ins .woocommerce-Price-amount {\n  margin-left: 5px;\n}\n.product-detail-page .group-product .qty-box-total {\n  float: left;\n}\n.product-detail-page .group-product .qty-box-total .left,\n.product-detail-page .group-product .qty-box-total .right {\n  padding-bottom: 0;\n}\n.product-detail-page .group-product .qty-box-total .left .col,\n.product-detail-page .group-product .qty-box-total .right .col {\n  display: flex;\n  align-items: center;\n}\n.product-detail-page .group-product .qty-box-total .left {\n  padding-left: 0;\n}\n.product-detail-page .group-product .qty-box-total .left .col {\n  padding-left: 0;\n  justify-content: flex-start;\n}\n.product-detail-page .group-product .qty-box-total .right {\n  padding-right: 0;\n}\n.product-detail-page .group-product .qty-box-total .right .col {\n  padding-right: 0;\n  justify-content: flex-end;\n}\n.product-detail-page .group-product .qty-box-total .qty-name,\n.product-detail-page .group-product .qty-box-total .ttl-name {\n  font-size: 12px;\n  text-transform: uppercase;\n  padding-bottom: 0;\n  padding-left: 0;\n}\n.product-detail-page .group-product .qty-box-total .ttl-vlue {\n  font-size: 12px;\n  padding-left: 0;\n}\n.product-detail-page .group-product .qty-box-total .qty-vlue {\n  padding-left: 0;\n  padding-right: 0;\n}\n.product-detail-page .group-product .qty-box-total .qty-vlue .button {\n  border-width: 0;\n  margin: 0;\n  width: 45px;\n}\n.product-detail-page .group-product .qty-box-total .qty-vlue .dgi {\n  background-color: var(--ion-background-color);\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2);\n  text-align: center;\n  padding-left: 0;\n  --padding-start: 0;\n  padding-right: 0;\n}\n.product-detail-page .product-detail-content h3 {\n  margin-top: 0;\n}\n.product-detail-page .product-detail-content p {\n  margin-bottom: 0;\n}\n.product-detail-page .product-detail-content.bing-fo {\n  background-color: var(--ion-color-light);\n}\n.product-detail-page .product-description p {\n  font-size: 14px;\n  padding-left: 0px;\n  margin-top: 5px;\n}\n.product-detail-page .product-tags-top {\n  font-size: 14px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9;\n}\n.product-detail-page .product-tags-top .product-tag-new {\n  color: white;\n  background-color: red;\n  padding: 5px 8px;\n  display: inline-block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.product-detail-page .product-tags-top .product-tag-featured {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n  padding: 5px 8px;\n  text-transform: uppercase;\n}\n.product-detail-page ion-slides ion-slide:last-child {\n  height: auto;\n}\n.product-detail-page app-product {\n  width: 100%;\n}\n.product-detail-page ion-row ion-col h5 {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.product-detail-page ion-row ion-col ion-icon {\n  zoom: 0.8;\n  border-color: black;\n  border-width: 2px;\n}\n.product-detail-page .select-col {\n  font-size: 12px;\n}\n.product-detail-page .related-item {\n  padding-left: 10px;\n}\n.product-detail-page [dir=rtl] .product-tags-top {\n  right: 0;\n  left: auto;\n}\n.product-detail-page [dir=rtl] .share-like {\n  left: 0;\n  right: auto;\n}\n.product-detail-page .disabled {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.product-detail-page ion-badge {\n  padding: 8px 10px;\n}\n.product-detail-page .attributes-grid {\n  padding-bottom: 0;\n}\n.product-detail-page .attributes-grid ion-list {\n  padding-bottom: 0;\n}\n.product-detail-page .att-variation-card {\n  box-shadow: none !important;\n  margin: 0px 5px;\n}\n.product-detail-page .att-variation-card ion-card-header {\n  padding: 0;\n  padding-bottom: 5px;\n}\n.product-detail-page .att-variation-card ion-card-content {\n  padding: 0;\n}\n.product-detail-footer ion-button {\n  width: 100%;\n  margin: 0;\n  color: #bed13c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NkO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRENKO0FDQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRENKO0FDQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURDTjtBQ0NJO0VBQ0UsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FEQ047QUNFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEQUo7QUNDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURDTjtBQ0NJO0VBQ0UsY0FBQTtBRENOO0FDQ0k7O0VBRUUsaUNBQUE7QURDTjtBQ0lNO0VBQ0UsNkNBQUE7QURGUjtBQ0tJO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBREhOO0FDTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FESko7QUNNSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FESk47QUNNTTtFQUNFLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBREpSO0FDTU07RUFDRSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FESlI7QUNRSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUROTjtBQ1FNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUROUjtBQ1NNO0VBQ0UsV0FBQTtBRFBSO0FDU1U7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtBRFBaO0FDVVE7RUFDRSxxQkFBQTtBRFJWO0FDU1U7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FEUFo7QUNZTTs7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEVlI7QUNZTTtFQUNFLDRCQUFBO0FEVlI7QUNZTTtFQUNFLDRCQUFBO0FEVlI7QUNhSTtFQUNFLGlCQUFBO0FEWE47QUNZTTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRFZSO0FDV1E7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7QURUVjtBQ2VJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURiTjtBQ2NNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FEWlI7QUNjTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRFpSO0FDY1E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QURaVjtBQ2dCSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FEZE47QUNnQkk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBRGROO0FDaUJFO0VBQ0UsMERBQUE7RUFDQSxrQkFBQTtBRGZKO0FDZ0JJOztFQUVFLGlCQUFBO0FEZE47QUNlTTs7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURaUjtBQ2dCTTtFQUNFLDJCQUFBO0FEZFI7QUNrQk07RUFDRSx5QkFBQTtBRGhCUjtBQ29CSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEbEJOO0FDb0JJOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBRGxCTjtBQ29CSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRGxCTjtBQ29CSTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7QURsQk47QUNvQkk7RUFDRSxlQUFBO0FEbEJOO0FDb0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEbEJOO0FDbUJNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEakJSO0FDbUJNO0VBQ0UsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBRGpCUjtBQ2tCUTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QURoQlY7QUNzQkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURwQk47QUNzQkk7RUFDRSxnQkFBQTtBRHBCTjtBQ3NCSTtFQUNFLHNDQUFBO0FEcEJOO0FDd0JJO0VBQ0UsaUJBQUE7QUR0Qk47QUN3Qkk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUR0Qk47QUN3Qkk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtBRHRCTjtBQ3VCTTtFQUNFLG1CQUFBO0FEckJSO0FDd0JJO0VBQ0UsbUJBQUE7QUR0Qk47QUN3Qkk7RUFDRSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEdkJOO0FDeUJJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUR2Qk47QUN5QlE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRHZCVjtBQzBCTTtFQUNFLHFCQUFBO0FEeEJSO0FDeUJRO0VBQ0UsZ0JBQUE7QUR2QlY7QUM0Qkk7RUFDRSxXQUFBO0FEMUJOO0FDNEJNOztFQUVFLGlCQUFBO0FEMUJSO0FDMkJROztFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRHhCVjtBQzJCTTtFQUNFLGVBQUE7QUR6QlI7QUMwQlE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUR4QlY7QUMyQk07RUFDRSxnQkFBQTtBRHpCUjtBQzBCUTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUR4QlY7QUMyQk07O0VBRUUsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEekJSO0FDMkJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUR6QlI7QUMyQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUR6QlI7QUMwQlE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUR4QlY7QUMwQlE7RUFDRSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRHhCVjtBQzhCSTtFQUNFLGFBQUE7QUQ1Qk47QUMrQkk7RUFDRSxnQkFBQTtBRDdCTjtBQytCSTtFQUNFLHdDQUFBO0FEN0JOO0FDaUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRC9CTjtBQ2tDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGhDSjtBQ2tDSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEaENOO0FDa0NJO0VBQ0UsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QURoQ047QUNxQ007RUFDRSxZQUFBO0FEbkNSO0FDdUNFO0VBQ0UsV0FBQTtBRHJDSjtBQzBDTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRHhDUjtBQzBDTTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0FEekNSO0FDNkNFO0VBQ0UsZUFBQTtBRDNDSjtBQzZDRTtFQUNFLGtCQUFBO0FEM0NKO0FDK0NJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUQ3Q047QUMrQ0k7RUFDRSxPQUFBO0VBQ0EsV0FBQTtBRDdDTjtBQ2lERTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBRC9DSjtBQ2lERTtFQUNFLGlCQUFBO0FEL0NKO0FDa0RFO0VBQ0UsaUJBQUE7QURoREo7QUNpREk7RUFDRSxpQkFBQTtBRC9DTjtBQ2tERTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBRGhESjtBQ2lESTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBRC9DTjtBQ2lESTtFQUNFLFVBQUE7QUQvQ047QUNvREU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURqREoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXRhZ3MtdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC10YWdzLXRvcCAucHJvZHVjdC10YWctbmV3IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtdGFncy10b3AgLnByb2R1Y3QtdGFnLWZlYXR1cmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDJkMjtcbiAgei1pbmRleDogOTtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuaWNvbnMgaW9uLWljb24ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuaWNvbnMgaW9uLWljb25bbmFtZT1zaGFyZV0ge1xuICBjb2xvcjogI2JlZDEzYztcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5pY29ucyBpb24taWNvblthcmlhLWxhYmVsPWhlYXJ0XSxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5pY29ucyAuaWNvblthcmlhLWxhYmVsPVwiaGVhcnQgb3V0bGluZVwiXSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXNsaWRlcyAuc3dpcGVyLXdyYXBwZXIgLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXNsaWRlcyBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLnByb2R1Y3QtdGFncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAtMTVweDtcbiAgei1pbmRleDogOTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10YWdzIC5wcm9kdWN0LXRhZy1vZmYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10YWdzIC5wcm9kdWN0LXRhZy1mZWF0dXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLndvby1wcmljZSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLndvby1wcmljZSBkZWwgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAud29vLXByaWNlIGlucyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAud29vLXByaWNlLWdyb3VwIC53b28tcHJpY2UgaW5zIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAucHJvZHVjdC1pbnN0b2NrLFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLnByb2R1Y3Qtb3V0c3RvY2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAucHJvZHVjdC1pbnN0b2NrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXh0KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAud29vLXByaWNlLWdyb3VwIC5wcm9kdWN0LW91dHN0b2NrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXh0KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC5wcm9kdWN0LXRpdGxlIGgzIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC5wcm9kdWN0LXRpdGxlIGgzIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IpLCAwLjUpO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtcmF0aW5ncyAuc3RhcnMtb3V0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtcmF0aW5ncyAuc3RhcnMtb3V0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piG4piG4piG4piG4piGXCI7XG4gIGNvbG9yOiAjY2NjO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtcmF0aW5ncyAuc3RhcnMtb3V0ZXIgLnN0YXJzLWlubmVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXJhdGluZ3MgLnN0YXJzLW91dGVyIC5zdGFycy1pbm5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIXimIXimIXimIXimIVcIjtcbiAgY29sb3I6ICNmOGNlMGI7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1yYXRpbmdzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXJhdGluZ3MgaDYge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5sZWZ0LFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAucmlnaHQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLmxlZnQgLmNvbCxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnJpZ2h0IC5jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAubGVmdCAuY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAucmlnaHQgLmNvbCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5xdHktbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5xdHktbmFtZSxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnR0bC1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAudHRsLXZsdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAucXR5LXZsdWUsXG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC50dGwtdmx1ZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnRvdGFsLXBhcmEge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5xdHktdmx1ZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnF0eS12bHVlIGlvbi1idXR0b24ge1xuICBib3JkZXItd2lkdGg6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAucXR5LXZsdWUgLmRnaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnF0eS12bHVlIC5kZ2kgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1jb250ZW50LmJpbmctZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoaW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQpO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgaW9uLWl0ZW0gLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLml0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dCk7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC53b28tcHJpY2Uge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLndvby1wcmljZSBkZWwgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAud29vLXByaWNlIGlucyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC53b28tcHJpY2UgaW5zIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwge1xuICBmbG9hdDogbGVmdDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5sZWZ0LFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnJpZ2h0IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAucXR5LWJveC10b3RhbCAubGVmdCAuY29sLFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnJpZ2h0IC5jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLmxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAucXR5LWJveC10b3RhbCAubGVmdCAuY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAucXR5LWJveC10b3RhbCAucmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnJpZ2h0IC5jb2wge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnF0eS1uYW1lLFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnR0bC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnR0bC12bHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAucXR5LWJveC10b3RhbCAucXR5LXZsdWUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAucXR5LWJveC10b3RhbCAucXR5LXZsdWUgLmJ1dHRvbiB7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogNDVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5xdHktdmx1ZSAuZGdpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtY29udGVudC5iaW5nLWZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC10YWdzLXRvcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC10YWdzLXRvcCAucHJvZHVjdC10YWctbmV3IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtdGFncy10b3AgLnByb2R1Y3QtdGFnLWZlYXR1cmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIGlvbi1zbGlkZXMgaW9uLXNsaWRlOmxhc3QtY2hpbGQge1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSBhcHAtcHJvZHVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICB6b29tOiAwLjg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnNlbGVjdC1jb2wge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucmVsYXRlZC1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgW2Rpcj1ydGxdIC5wcm9kdWN0LXRhZ3MtdG9wIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSBbZGlyPXJ0bF0gLnNoYXJlLWxpa2Uge1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSBpb24tYmFkZ2Uge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5hdHRyaWJ1dGVzLWdyaWQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5hdHRyaWJ1dGVzLWdyaWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5hdHQtdmFyaWF0aW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5hdHQtdmFyaWF0aW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5hdHQtdmFyaWF0aW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9kdWN0LWRldGFpbC1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjYmVkMTNjO1xufSIsIi5wcm9kdWN0LWRldGFpbC1wYWdlIHtcbiAgaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb2R1Y3QtdGFncy10b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuXG4gICAgLnByb2R1Y3QtdGFnLW5ldyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAucHJvZHVjdC10YWctZmVhdHVyZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIH1cbiAgfVxuICAuaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjEwLCAyMTApO1xuICAgIHotaW5kZXg6IDk7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgaW9uLWljb24ge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbiAgICBpb24taWNvbltuYW1lPVwic2hhcmVcIl0ge1xuICAgICAgY29sb3I6ICNiZWQxM2M7XG4gICAgfVxuICAgIGlvbi1pY29uW2FyaWEtbGFiZWw9XCJoZWFydFwiXSxcbiAgICAuaWNvblthcmlhLWxhYmVsPVwiaGVhcnQgb3V0bGluZVwiXSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LXNsaWRlcyB7XG4gICAgLnN3aXBlci13cmFwcGVyIHtcbiAgICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICB9XG4gIH1cbiAgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAucHJvZHVjdC10YWdzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB0b3A6IC0xNXB4O1xuICAgICAgei1pbmRleDogOTtcblxuICAgICAgLnByb2R1Y3QtdGFnLW9mZiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgLnByb2R1Y3QtdGFnLWZlYXR1cmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndvby1wcmljZS1ncm91cCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAud29vLXByaWNlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGRlbCB7XG4gICAgICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IpLCAwLjUpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlucyB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnByb2R1Y3QtaW5zdG9jayxcbiAgICAgIC5wcm9kdWN0LW91dHN0b2NrIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLnByb2R1Y3QtaW5zdG9jayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dCk7XG4gICAgICB9XG4gICAgICAucHJvZHVjdC1vdXRzdG9jayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0LXRpdGxlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAucHJvZHVjdC1yYXRpbmdzIHtcbiAgICAuc3RhcnMtb3V0ZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcIjtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICB9XG4gICAgICAuc3RhcnMtaW5uZXIge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcXDI2MDVcXDI2MDVcXDI2MDVcXDI2MDVcXDI2MDVcIjtcbiAgICAgICAgICBjb2xvcjogI2Y4Y2UwYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgaDYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgfVxuICAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAubGVmdCxcbiAgICAucmlnaHQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAuY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQge1xuICAgICAgLmNvbCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0IHtcbiAgICAgIC5jb2wge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xdHktbmFtZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnF0eS1uYW1lLFxuICAgIC50dGwtbmFtZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC50dGwtdmx1ZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLnF0eS12bHVlLFxuICAgIC50dGwtdmx1ZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAudG90YWwtcGFyYSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5xdHktdmx1ZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICAuZGdpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRldGFpbC1jb250ZW50IHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgJi5iaW5nLWZvIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihpb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgfVxuICAuZ3JvdXAtcHJvZHVjdCB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgIGhlaWdodDogMTE1cHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dCk7XG4gICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgaDMge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXh0KTtcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC53b28tcHJpY2Uge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBkZWwge1xuICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5zIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnF0eS1ib3gtdG90YWwge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgIC5sZWZ0LFxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmxlZnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnF0eS1uYW1lLFxuICAgICAgLnR0bC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgLnR0bC12bHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAucXR5LXZsdWUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRnaSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRldGFpbC1jb250ZW50IHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgLy9mb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgJi5iaW5nLWZvIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgfVxuICAucHJvZHVjdC10YWdzLXRvcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuXG4gICAgLnByb2R1Y3QtdGFnLW5ldyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLnByb2R1Y3QtdGFnLWZlYXR1cmVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpb24tcm93IHtcbiAgICAvL21hcmdpbi1yaWdodDogMTBweDtcbiAgICBpb24tY29sIHtcbiAgICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHpvb206IDAuODtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgLy8gY29sb3I6ICNmZmQ3MDA7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VsZWN0LWNvbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5yZWxhdGVkLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIFtkaXI9XCJydGxcIl0ge1xuICAgIC5wcm9kdWN0LXRhZ3MtdG9wIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gICAgLnNoYXJlLWxpa2Uge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG4gIGlvbi1iYWRnZSB7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgLy9ib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIC5hdHRyaWJ1dGVzLWdyaWQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGlvbi1saXN0IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAuYXR0LXZhcmlhdGlvbi1jYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxufVxuLnByb2R1Y3QtZGV0YWlsLWZvb3RlciB7XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogI2JlZDEzYztcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");














let ProductDetailPage = class ProductDetailPage {
    constructor(navCtrl, config, shared, modalCtrl, loading, iab, appEventsService, storage, http, photoViewer, applicationRef, socialSharing, activatedRoute, sanitizer, router) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.iab = iab;
        this.appEventsService = appEventsService;
        this.storage = storage;
        this.http = http;
        this.photoViewer = photoViewer;
        this.applicationRef = applicationRef;
        this.socialSharing = socialSharing;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.router = router;
        this.selectAttributes = new Array;
        this.selectedVariation = null;
        this.quantity = 1;
        this.releatedItems = []; // <!-- 2.0 updates -->
        this.reviews = []; // <!-- 2.0 updates -->
        this.ratingStarsValue = null; // <!-- 2.0 updates -->
        this.allVariableAttributes = [];
        this.tempAllVariableAttributes = [];
        this.attributes = [];
        this.isLiked = 0;
        this.wishArray = [];
        this.disableCartButton = false;
        this.variations = new Array;
        this.groupProducts = new Array;
        this.variationPrice = null;
        this.loaderWcVendorInfo = false;
        this.loaderProductVariations = false;
        this.sliderConfigReleatedItems = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
        this.sliderConfig = {
            zoom: true
        };
        this.setDefaultFirstTime = true;
        //===============================================================================================================================
        //function adding attibute into array
        this.fillAttributes = function (val, key, position) {
            //console.log(key + "  " + val + " " + position);
            let count = 0;
            this.selectAttributes.forEach((value, index) => {
                if (value.position == position) {
                    value.value = val;
                    count++;
                }
                if (val == 'choose' && value.position == position) {
                    this.selectAttributes.splice(index, 1);
                    console.log("splice " + value.key + "  " + value.value);
                }
                if (this.removeDiacritics(value.key) == this.removeDiacritics(key)) {
                    value.value = val;
                    count++;
                }
            });
            if (count == 0 && val != "choose")
                this.selectAttributes.push({
                    key: this.removeDiacritics(key),
                    value: this.removeDiacritics(val),
                    position: position
                });
            this.sortAttributes();
            if (this.getAttributesLength() == this.selectAttributes.length)
                this.selectVariation();
            if (this.selectAttributes.length != this.getAttributesLength()) {
                this.updateProductDetail(JSON.parse(JSON.stringify(this.getProductData(this.pId))));
                this.variationPrice = null;
            }
            this.enableDisbaleCartButton();
            // console.log("onFill end");
            // console.log(this.selectAttributes);
        };
        //==============================================================================================================================================  
        //calculating total price  
        this.calculatingTotalPrice = function () {
            var price = parseFloat(this.product.products_price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                price = this.product.discount_price;
            var totalPrice = this.shared.calculateFinalPriceService(this.attributes) + parseFloat(price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                this.discount_price = totalPrice;
            else
                this.product_price = totalPrice;
            //  console.log(totalPrice);
        };
        //===============================================================================================================================
        this.qunatityGroupPlus = function (p) {
            //console.log(p.quantity);
            if (p.stock_quantity == null || p.stock_quantity > p.quantity)
                p.quantity++;
            else if (p.stock_quantity == p.quantity)
                this.shared.translateString("Product Quantity is Limited!").then((res) => { this.shared.showAlert(res); });
            this.applicationRef.tick();
            // console.log(p);
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityGroupMinus = function (p) {
            if (p.quantity != 0) {
                p.quantity--;
            }
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        this.qunatityPlus = function () {
            if (this.product.stock_quantity == null || this.product.stock_quantity > this.quantity)
                this.quantity++;
            else if (this.product.stock_quantity == this.quantity)
                this.shared.translateString("Product Quantity is Limited!").then((res) => { this.shared.showAlert(res); });
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityMinus = function () {
            if (this.quantity != 1) {
                this.quantity--;
            }
            this.applicationRef.tick();
        };
        //this.removeDiacritics("KOLOR");
        this.pId = this.activatedRoute.snapshot.paramMap.get('id');
        this.product = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        let wishListUpdate = this.appEventsService.subscribe("wishListUpdate");
        wishListUpdate.subscriptions.add(wishListUpdate.event.subscribe(data => {
            if (data.id == this.product.id)
                this.isLiked = data.value;
        }));
        this.storage.get('wishListProducts').then((val) => {
            this.wishArray = val;
            this.checkWishList();
        });
        this.enableDisbaleCartButton();
        if (this.product.type == 'variable') {
            this.getVariations();
        }
        if (this.product.type == 'grouped') {
            this.getGroupProducts();
        }
        this.getRelatedItems();
        this.getProductReviews();
        this.product.short_description = this.sanitizer.bypassSecurityTrustHtml(this.product.short_description);
        if (this.config.showWcVendorInfo)
            this.getWcVendorInfo();
    }
    checkOptionSelected(value, key, ind) {
        let color = "primary";
        this.selectAttributes.forEach(e => {
            if (this.removeDiacritics(e.key) == this.removeDiacritics(key) &&
                this.removeDiacritics(e.value) == this.removeDiacritics(value))
                color = "secondary";
        });
        return color;
    }
    ionViewWillEnter() {
        this.enableDisbaleCartButton();
    }
    zoomImage(img) {
        this.photoViewer.show(img);
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
    ngOnInit() {
    }
    //=================================================================================================================================================================================
    getGroupProducts() {
        //this.loading.show();
        let count = 0;
        for (let value of this.product.grouped_products) {
            count++;
            this.config.getWoo("products/" + value + "?" + this.config.productsArguments).then(data => {
                this.groupProducts.push(Object.assign(data, { quantity: 0 }));
                this.applicationRef.tick();
            });
            if (count == this.product.grouped_products.length) {
                //this.loading.hide();
            }
        }
    }
    //===============================================================================================================================
    getVariations() {
        // let count = 0;
        // this.loaderProductVariations = true;
        // this.config.getWoo("products/" + this.product.id + "/variations?per_page=" + this.product.variations.length).then((data: any) => {
        //   let d = data
        //   this.variations = d;
        //   this.variations.forEach(element => {
        //     this.initializeAllVariationAttributes(element);
        //   });
        //   this.loaderProductVariations = false;
        //   this.product.default_attributes.forEach((e, ind) => {
        //     this.fillAttributes(e.option, e.name, ind);
        //   });
        //   this.setDefaultFirstTime = false;
        // });
        let count = 0;
        this.loaderProductVariations = true;
        for (let value of this.product.variations) {
            this.config.getWoo("products/" + value + "?" + this.config.productsArguments).then(data => {
                count++;
                let d = data;
                this.variations.push(d);
                this.initializeAllVariationAttributes(d);
                //console.log(count);
                if (count == this.product.variations.length) {
                    this.loaderProductVariations = false;
                    this.product.default_attributes.forEach((e, ind) => {
                        this.fillAttributes(e.option, e.name, ind);
                    });
                }
            });
        }
    }
    //===============================================================================================================================
    initializeAllVariationAttributes(p) {
        let ob = {};
        ob.id = p.id;
        ob.select = false;
        for (let val of this.attributes) {
            if (val.variation == false)
                continue;
            ob[val.name] = 'any';
            for (let v2 of p.attributes) {
                if (this.removeDiacritics(val.name) == this.removeDiacritics(v2.name))
                    ob[val.name] = this.removeDiacritics(v2.option);
            }
        }
        this.allVariableAttributes.push(ob);
        if (this.allVariableAttributes.length == this.product.variations.length)
            this.sortAllVariationAttributes();
        console.log(this.allVariableAttributes);
    }
    checkDefaultAttribute(value) {
        if (this.setDefaultFirstTime) {
            let a = false;
            const new_str = this.removeDiacritics(value);
            this.product.default_attributes.forEach(element => {
                //console.log(element.option+" "+ value);
                const str = value;
                if (this.removeDiacritics(element.option) == new_str) {
                    a = true;
                }
                ;
                //console.log(element.option + " " + new_str);
            });
            //console.log("slected default " + value + " " + a);
            //console.log(value);
            return a;
        }
    }
    //===============================================================================================================================
    sortAllVariationAttributes() {
        let array = [];
        for (let val of this.product.variations) {
            for (let v2 of this.allVariableAttributes) {
                if (val == v2.id)
                    array.push(v2);
            }
        }
        this.allVariableAttributes = array;
        //console.log(this.allVariableAttributes);
    }
    availableOption(name, val) {
        if (this.selectAttributes.length == 0)
            return true;
        for (let value of this.tempAllVariableAttributes) {
            if (value.select == true) {
                if (value[name] == 'any')
                    return true;
                if (this.removeDiacritics(value[name]) == this.removeDiacritics(val))
                    return true;
            }
        }
    }
    //checking avalability of option in all variations
    sortAttributes() {
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        let count = 0;
        //console.log(this.tempAllVariableAttributes);
        //console.log(this.selectAttributes);
        for (let x of this.selectAttributes) {
            for (let y of this.tempAllVariableAttributes) {
                //converting object into array
                let keyOfY = "";
                var _this = this;
                Object.keys(y).forEach(function (yKeys) {
                    let v1 = _this.removeDiacritics(x.key);
                    let v2 = _this.removeDiacritics(yKeys);
                    if (v1 == v2) {
                        keyOfY = yKeys;
                        //console.log(x.key + " found  " + yKeys);
                    }
                });
                if (this.removeDiacritics(y[keyOfY]) == this.removeDiacritics(x.value) || y[keyOfY] == 'any') {
                    if (count == 0) {
                        y.select = true;
                    }
                    else {
                        if (y.select == true)
                            y.select = true;
                        else
                            y.select = false;
                    }
                    //console.log(y[x.key] + "   ---  " + x.value);
                }
                else
                    y.select = false;
            }
            count++;
        }
        //console.log("attributes after select");
        console.log(this.tempAllVariableAttributes);
    }
    // reset attributes and selection
    resetAttributes() {
        //console.log("reset att");
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        this.selectAttributes = [];
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        this.selectedVariation = null;
        this.enableDisbaleCartButton();
        this.product = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
    }
    //===============================================================================================================================
    getAttributesLength() {
        let count = 0;
        for (let a of this.attributes) {
            if (a.variation)
                count++;
        }
        return count;
    }
    //===============================================================================================================================
    enableDisbaleCartButton() {
        // if (this.product.type == 'external') this.disableCartButton = true;
        // else
        if (this.product.type != 'variable' && this.product.stock_status == 'instock')
            this.disableCartButton = false;
        else if (this.selectAttributes.length == this.getAttributesLength() && this.product.stock_status == 'instock')
            this.disableCartButton = false;
        else
            this.disableCartButton = true;
        //console.log("disbale cart button " + this.disableCartButton);
        this.applicationRef.tick();
    }
    //===============================================================================================================================
    checkWishList() {
        //getting wishList items from local storage
        let count = 0;
        if (this.wishArray != null)
            for (let value of this.wishArray) {
                if (value.id == this.product.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    }
    //===============================================================================================================================
    openProduct() {
        this.loading.autoHide(2000);
        this.iab.create(this.product.external_url, "blank");
    }
    addToCartProduct() {
        let total = 0;
        //this.loading.autoHide(500);
        //console.log(this.selectAttributes);
        if (this.product.type == 'variable') {
            this.shared.addToCart(this.product, this.selectedVariation, this.quantity, this.selectAttributes);
            this.navCtrl.pop();
            //this.navCtrl.push(CartPage);
        }
        if (this.product.type == 'simple') {
            this.shared.addToCart(this.product, null, this.quantity, null);
            this.navCtrl.pop();
            //this.navCtrl.push(CartPage);
        }
        if (this.product.type == 'grouped') {
            for (let a of this.groupProducts) {
                total = total + a.quantity;
            }
            if (total == 0)
                this.shared.translateString("Please Add Quantity").then((res) => { this.shared.showAlert(res); });
            else
                for (let value of this.groupProducts) {
                    if (value.quantity != 0)
                        this.shared.addToCart(value, null, value.quantity, null);
                }
            if (total != 0) {
                this.navCtrl.pop();
                //this.navCtrl.push(CartPage);
            }
        }
    }
    //===============================================================================================================================
    selectVariation() {
        console.log(this.tempAllVariableAttributes);
        let pId = null;
        for (let i of this.tempAllVariableAttributes) {
            if (i.select == true) {
                pId = i.id;
                break;
            }
        }
        for (let i of this.variations) {
            if (i.id == pId) {
                this.selectedVariation = i;
                break;
            }
        }
        if (this.selectAttributes != null)
            this.updateProductDetail(this.selectedVariation);
    }
    //===============================================================================================================================
    updateProductDetail(p) {
        if (p.images) {
            this.product.images = p.images;
        }
        else {
            let pImges = [];
            pImges.push(p.image);
            //console.log(pImges);
            this.product.images = this.removeDuplication(pImges.concat(this.product.images));
        }
    }
    removeDuplication(array) {
        var a = array.concat();
        // console.log(a);
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].src === a[j].src)
                    a.splice(j--, 1);
            }
        }
        //console.log(a);
        return a;
    }
    //===============================================================================================================================
    checkProductNew() {
        var pDate = new Date(this.product.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    }
    quantityChange() {
        console.log("quantity updated");
        if (this.product.stock_quantity == null) {
            console.log("quantity is unlimited");
        }
        else if (this.product.stock_quantity > this.quantity) {
            console.log("quantity is less than stock quantity");
        }
        else if (this.product.stock_quantity < this.quantity) {
            this.shared.translateString("Product Quantity is Limited!").then((res) => {
                if (this.product.stock_quantity == null)
                    this.quantity = 1;
                else
                    this.quantity = parseInt(this.product.stock_quantity);
                this.shared.showAlert(res);
            });
        }
        if (this.quantity == null || this.quantity == 0 || this.quantity < 0) {
            this.quantity = 1;
        }
        this.applicationRef.tick();
    }
    //===============================================================================================================================
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
    //===============================================================================================================================
    share() {
        this.loading.autoHide(1000);
        // Share via email
        let img = "";
        if (this.product.images.length != 0)
            img = this.product.images[0].src;
        this.socialSharing.share(this.product.name, this.product.name, img, this.product.permalink);
    }
    //===============================================================================================================================
    clickWishList() {
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    }
    //===============================================================================================================================
    addWishList() {
        this.shared.addWishList(this.product);
    }
    //===============================================================================================================================
    removeWishList() {
        this.shared.removeWishList(this.product);
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    getRelatedItems() {
        this.config.getWoo("products/?include=" + this.product.related_ids + "&" + this.config.productsArguments).then((data) => {
            this.releatedItems = data;
            this.applicationRef.tick();
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    getProductReviews() {
        this.config.getWoo("products/reviews/?" + this.config.productsArguments + "&product=" + [this.pId]).then((data) => {
            this.reviews = data;
            this.applicationRef.tick();
            this.totalRating();
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    openReviewsPage() {
        this.navCtrl.navigateForward(this.config.currentRoute + "/reviews/" + this.product.id);
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    totalRating() {
        let total = 0;
        for (let value of this.reviews) {
            total = total + value.rating;
        }
        let result = (total / this.reviews.length) * 20;
        if (total == 0)
            result = 0;
        this.ratingStarsValue = result;
        this.applicationRef.tick();
        //return result;
    }
    //==============================================================
    openStore(value) {
        if (this.config.showWcVendorInfo) {
            this.shared.storePageData.push(value);
            let id;
            if (value.ID)
                id = value.ID;
            if (value.id)
                id = value.id;
            this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);
        }
        else {
            this.loading.show();
            this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + this.product.store.id).then((data) => {
                this.loading.hide();
                let d = data;
                this.shared.storePageData.push(d);
                let id;
                if (d.ID)
                    id = d.ID;
                if (d.id)
                    id = d.id;
                this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);
                this.applicationRef.tick();
            });
        }
    }
    getWcVendorInfo() {
        this.loaderWcVendorInfo = true;
        this.config.getWithUrl(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + this.product.id).then((data) => {
            this.loaderWcVendorInfo = false;
            let d = data;
            this.wcVendorInfo = data.data[0];
            this.applicationRef.tick();
        });
    }
    //=========================================================================================
    removeDiacritics(str) {
        var defaultDiacriticsRemovalMap = [
            { 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g },
            { 'base': 'AA', 'letters': /[\uA732]/g },
            { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g },
            { 'base': 'AO', 'letters': /[\uA734]/g },
            { 'base': 'AU', 'letters': /[\uA736]/g },
            { 'base': 'AV', 'letters': /[\uA738\uA73A]/g },
            { 'base': 'AY', 'letters': /[\uA73C]/g },
            { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
            { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g },
            { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g },
            { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g },
            { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g },
            { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g },
            { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
            { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g },
            { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g },
            { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g },
            { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
            { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g },
            { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g },
            { 'base': 'LJ', 'letters': /[\u01C7]/g },
            { 'base': 'Lj', 'letters': /[\u01C8]/g },
            { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
            { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g },
            { 'base': 'NJ', 'letters': /[\u01CA]/g },
            { 'base': 'Nj', 'letters': /[\u01CB]/g },
            { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g },
            { 'base': 'OI', 'letters': /[\u01A2]/g },
            { 'base': 'OO', 'letters': /[\uA74E]/g },
            { 'base': 'OU', 'letters': /[\u0222]/g },
            { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
            { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
            { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g },
            { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g },
            { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g },
            { 'base': 'TZ', 'letters': /[\uA728]/g },
            { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g },
            { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
            { 'base': 'VY', 'letters': /[\uA760]/g },
            { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
            { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
            { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g },
            { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g },
            { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g },
            { 'base': 'aa', 'letters': /[\uA733]/g },
            { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g },
            { 'base': 'ao', 'letters': /[\uA735]/g },
            { 'base': 'au', 'letters': /[\uA737]/g },
            { 'base': 'av', 'letters': /[\uA739\uA73B]/g },
            { 'base': 'ay', 'letters': /[\uA73D]/g },
            { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
            { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g },
            { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g },
            { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g },
            { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g },
            { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
            { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g },
            { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g },
            { 'base': 'hv', 'letters': /[\u0195]/g },
            { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g },
            { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
            { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g },
            { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g },
            { 'base': 'lj', 'letters': /[\u01C9]/g },
            { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
            { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g },
            { 'base': 'nj', 'letters': /[\u01CC]/g },
            { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g },
            { 'base': 'oi', 'letters': /[\u01A3]/g },
            { 'base': 'ou', 'letters': /[\u0223]/g },
            { 'base': 'oo', 'letters': /[\uA74F]/g },
            { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
            { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
            { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g },
            { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g },
            { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g },
            { 'base': 'tz', 'letters': /[\uA729]/g },
            { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g },
            { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
            { 'base': 'vy', 'letters': /[\uA761]/g },
            { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
            { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
            { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g },
            { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }
        ];
        for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }
        return str.toUpperCase();
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_13__["AppEventsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/product-detail/product-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_13__["AppEventsService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], ProductDetailPage);



/***/ })

}]);
//# sourceMappingURL=product-detail-product-detail-module-es2015.js.map