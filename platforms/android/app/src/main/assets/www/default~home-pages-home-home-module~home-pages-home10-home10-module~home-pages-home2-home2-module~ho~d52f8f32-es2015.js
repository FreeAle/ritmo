(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner-component\">\n\n  <div *ngIf=\"shared.banners.length==0\">\n    <ion-skeleton-text animated style=\"height: 211px;\">\n    </ion-skeleton-text>\n  </div>\n  <div *ngIf=\" shared.banners.length !=0\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" [class]=\"config.bannerStyle\">\n      <ion-slide *ngFor=\"let b of shared.banners\" class=\"ion-no-padding animate-item\" (click)=\"bannerClick(b)\">\n        <img src=\"{{b.banners_image}}\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- For Home-6 -->\n<!-- =========================================================== with name and product -->\n<div class=\"name\" *ngIf=\"type=='withName'\">\n\n  <ion-slides class=\"animate-item\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"c!=1\">\n\n        <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n        <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n\n        <ion-text>\n          <h6>{{c.name}}</h6>\n          <p>{{c.count}} Products</p>\n        </ion-text>\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"c==1\" class=\"skeleton-name\">\n        <ion-skeleton-text animated>\n        </ion-skeleton-text>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<!-- For Home-7 -->\n<!-- =========================================================== with name and product count -->\n<div class=\"name-count\" *ngIf=\"type=='name&count'\">\n  <ion-slides class=\"animate-item\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"c!=1\" class=\"card-h7\">\n        <ion-avatar>\n          <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n          <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n        </ion-avatar>\n        <ion-text>\n          <h6>{{c.name}}</h6>\n          <p>{{c.count}} Products</p>\n        </ion-text>\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"c==1\">\n        <ion-skeleton-text animated>\n        </ion-skeleton-text>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<!-- For Home-8 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"round\" *ngIf=\"type=='roundImage'\">\n  <ion-slides class=\"animate-item\" [options]=\"sliderConfig2\">\n    <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"c!=1\" class=\"card-h8\">\n        <ion-avatar>\n          <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n          <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n        </ion-avatar>\n        <ion-text>\n          <h6>{{c.name}}</h6>\n          <p>{{c.count}} Products</p>\n        </ion-text>\n\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"c==1\" class=\"card-skeleton-h8\">\n        <ion-avatar>\n          <ion-skeleton-text class=\"skeleton-h8\" animated>\n          </ion-skeleton-text>\n        </ion-avatar>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<!-- // For Home-9 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"grid\" *ngIf=\"type=='grid'\">\n  <ion-grid class=\"ion-no-padding categories-grid\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"4\" *ngFor=\"let c of shared.categories | slice:0:6;\" (click)=\"openSubCategories(c)\">\n        <ion-card class=\"card-h9\">\n          <ion-avatar class=\"avatar-h9\">\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n            <img *ngIf=\"!c.image\" src=\"assets/placeholder.png\" />\n          </ion-avatar>\n          <ion-text>\n            <h6>{{c.name}}</h6>\n            <p>{{c.count}} Products</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-component animate-item\">\n  <!-- skeleton text until data not loaded -->\n  <div *ngIf=\"p==1\" style=\"padding-left: 10px;\" class=\"ion-text-center\">\n    <ion-skeleton-text animated style=\"width: 100%; height: 130px;\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 80%; height: 15px;\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 100%; height: 15px;\">\n    </ion-skeleton-text>\n  </div>\n\n  <div *ngIf=\"p!=1\" class=\"animated fadeIn\">\n    <div *ngIf=\"type=='normal' || type=='recent' || type=='wishList'\">\n\n      <!---------------------------------------------------------  style default -------------------------------->\n      <ion-card class=\"default\" *ngIf=\"config.productCardStyle==1\">\n        <div>\n          <div *ngIf=\"p.on_sale==true\">{{ 'Sale' | translate }}</div>\n          <div *ngIf=\"p.featured\">{{'Featured' | translate }}</div>\n        </div>\n        <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.sku}}</p>\n        <p (click)=\"showProductDetail()\" class=\"dispo\">Disp. <b style=\"color: black;\">{{p.stock_quantity}}</b></p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"10\" class=\"ion-no-padding\">\n              <h4 class=\"price\" [innerHTML]=\"p.price_html\"></h4>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\">\n              <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" style=\"text-decoration: darkgray;\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'Rimuovi'|translate}}</ion-button>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='normal'\">\n            <ion-button [color]=\"getButtonColor()\" (click)=\"buttonClick()\">{{getButtonText()|translate}}\n            </ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n\n\n      <!---------------------------------------------------------  style 1-------------------------------->\n      <ion-card class=\"style21 ion-text-center\" *ngIf=\"config.productCardStyle==21\">\n\n        <div class=\"main-img\"><img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\"></div>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.sku}}</p>\n        <p (click)=\"showProductDetail()\" class=\"dispo\">Disp. <b style=\"color: black;\">{{p.stock_quantity}}</b></p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n\n      <!---------------------------------------------------------  style 2 -------------------------------->\n      <ion-card class=\"style11 ion-text-center\" *ngIf=\"config.productCardStyle==11\">\n        <div class=\"main-img\"><img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\"></div>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n        <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n        </ion-icon>\n      </ion-card>\n\n\n      <!---------------------------------------------------------  style  -------------------------------->\n      <ion-card class=\"default\" *ngIf=\"config.productCardStyle==2\">\n        <div>\n          <div *ngIf=\"p.on_sale==true\">{{ 'Sale' | translate }}</div>\n          <div *ngIf=\"p.featured\">{{'Featured' | translate }}</div>\n        </div>\n        <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"10\" class=\"ion-no-padding\">\n              <h4 class=\"price\" [innerHTML]=\"p.price_html\"></h4>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\">\n              <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style3 ion-text-start\" *ngIf=\"config.productCardStyle==3\">\n\n        <div class=\"main-image\">\n          <ion-badge color=\"primary\" class=\"ion-text-start\" mode=ios *ngIf=\"pDiscount()\">{{pDiscount()}}\n            <span>{{'OFF'|translate}}</span>\n          </ion-badge>\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n              <p class=\"category\">({{getCategoryName()}})</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"10\">\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-icon (click)=\"buttonClick()\" class=\"ion-float-end\" [color]=\"getButtonColor()\" name=\"basket\">\n              </ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n\n      </ion-card>\n\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style6 ion-text-start\" *ngIf=\"config.productCardStyle==6\">\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n          <ion-fab-button size=small color=\"danger\">\n            <ion-icon (click)=\"buttonClick()\" name=\"basket\">\n            </ion-icon>\n          </ion-fab-button>\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding colum-2\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n              <span class=\"product-ratings ion-float-right\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n\n      </ion-card>\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style8 ion-text-start\" *ngIf=\"config.productCardStyle==8\">\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span class=\"product-ratings\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n                <div class=\"rating-value\">({{getParsedRating()}})</div>\n              </span>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n        <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n        </ion-icon>\n      </ion-card>\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style9 ion-text-start\" *ngIf=\"config.productCardStyle==9\">\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n          <ion-fab-button size=small color=\"danger\">\n            <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\">\n            </ion-icon>\n          </ion-fab-button>\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=6>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n            <ion-col size=6>\n              <span class=\"product-ratings ion-float-right\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n\n      </ion-card>\n\n      <!---------------------------------------------------------  style  -------------------------------->\n      <ion-card class=\"style12\" *ngIf=\"config.productCardStyle==12\">\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name ion-text-start\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price ion-text-end\"></span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n        <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n        </ion-icon>\n      </ion-card>\n\n\n      <!---------------------------------------------------------  style  -------------------------------->\n\n      <ion-card class=\"style5 ion-text-center\" *ngIf=\"config.productCardStyle==5\">\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"2\">\n              <ion-icon (click)=\"clickWishList()\" color=\"secondary\" [name]=\"getHeartName()\">\n              </ion-icon>\n            </ion-col>\n            <ion-col size=\"8\">\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-icon (click)=\"buttonClick()\" [color]=\"getButtonColor()\" name=\"basket\">\n              </ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n\n      </ion-card>\n\n      <!---------------------------------------------------------  style  -------------------------------->\n      <ion-card class=\"style7\" *ngIf=\"config.productCardStyle==7\">\n        <div class=\"floating-tags\">\n          <span class=\"ion-no-padding ion-text-left\" *ngIf=\"p.on_sale\">\n            <ion-badge color=\"secondary\" class=\"first\">\n              {{ 'Sale' | translate }}</ion-badge>\n          </span>\n          <span class=\"ion-no-padding ion-text-left\" *ngIf=\"p.featured\">\n            <ion-badge color=\"danger\" class=\"second\">\n              {{'Featured' | translate }}</ion-badge>\n          </span>\n        </div>\n        <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"10\" class=\"ion-no-padding\">\n              <h4 [innerHTML]=\"p.price_html\" class=\"price\"></h4>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\">\n              <ion-icon (click)=\"clickWishList()\" [name]=\"getHeartName()\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style13 ion-text-center\" *ngIf=\"config.productCardStyle==13\">\n\n        <ion-badge color=\"light\" class=\"heart-top-right price\">\n          <span [innerHTML]=\"p.price_html\" class=\"innerprice\"></span>\n        </ion-badge>\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n          <ion-grid class=\"floating-tags\">\n            <ion-row class=\"ion-no-padding\" *ngIf=\"p.on_sale==true\">\n              <ion-badge color=\"secondary\">\n                {{ 'Sale' | translate }}</ion-badge>\n            </ion-row>\n            <ion-row class=\"ion-no-padding\" *ngIf=\"p.featured\">\n              <ion-badge color=\"danger\">\n                {{'Featured' | translate }}</ion-badge>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding paddingb5\">\n            <ion-col>\n              <span class=\"product-ratings\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n\n      </ion-card>\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style15 ion-text-center\" *ngIf=\"config.productCardStyle==15\">\n\n        <ion-row class=\"ion-no-padding\">\n          <ion-col>\n            <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n          </ion-col>\n        </ion-row>\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col class=\"rating-colum\">\n              <span class=\"product-ratings\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n\n\n      </ion-card>\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style16 ion-text-start\" *ngIf=\"config.productCardStyle==16\">\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n\n\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col>\n                <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-no-padding\">\n              <ion-col>\n                <span class=\"product-ratings ion-float-left\" *ngIf=\"p.reviews_allowed\">\n                  <div class=\"stars-outer\">\n                    <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                  </div>\n                </span>\n\n                <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"ion-float-right\" [name]=\"getHeartName()\">\n                </ion-icon>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n              <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n                {{'REMOVE'|translate}}</ion-button>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n      <!---------------------------------------------------------  style default -------------------------------->\n      <ion-card class=\"default style17\" *ngIf=\"config.productCardStyle==17\">\n\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n        </ion-icon>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=8 class=\"ion-no-padding\">\n              <h4 class=\"price\" [innerHTML]=\"p.price_html\"></h4>\n            </ion-col>\n            <ion-col size=4 class=\"ion-text-center ion-no-padding\">\n              <ion-text class=\"price\">\n                <ion-icon name=\"star\"></ion-icon>{{getParsedRating()}}\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='normal'\">\n            <ion-button [color]=\"getButtonColor()\" (click)=\"buttonClick()\">{{getButtonText()|translate}}\n            </ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style3 style18 ion-text-start\" *ngIf=\"config.productCardStyle==18\">\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n              <p class=\"category\">({{getCategoryName()}})</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=7>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n            <ion-col size=5 class=\"cart\">\n              <ion-icon name=\"remove\" (click)=\"removingToCart()\"></ion-icon>\n              <ion-text>\n                <p>{{cartQuantity}}</p>\n              </ion-text>\n              <ion-icon name=\"add\" (click)=\"addingToCart()\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style9 style19 ion-text-start\" *ngIf=\"config.productCardStyle==19\">\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n          <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n          </ion-icon>\n          <ion-grid class=\"floating-tags\">\n            <ion-row class=\"ion-no-padding\" *ngIf=\"p.on_sale==true\">\n              <ion-badge>\n                {{ 'Sale' | translate }}</ion-badge>\n            </ion-row>\n            <ion-row class=\"ion-no-padding\" *ngIf=\"p.featured\">\n              <ion-badge>\n                {{'Featured' | translate }}</ion-badge>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n              <span class=\"product-ratings ion-float-right\" *ngIf=\"p.reviews_allowed\">\n                <div class=\"stars-outer\">\n                  <div class=\"stars-inner\" [style.width]=\"getRating()\"></div>\n                </div>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n      <!---------------------------------------------------------  style  -------------------------------->\n\n      <ion-card class=\"style4 ion-text-center\" *ngIf=\"config.productCardStyle==4\">\n\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-badge [color]=\"getButtonColor()\" (click)=\"buttonClick()\" class=\"ellipsis\">\n                <span>{{getButtonText()|translate}}</span>\n              </ion-badge>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n      <!---------------------------------------------------------  style -------------------------------->\n      <ion-card class=\"style20 ion-text-center\" *ngIf=\"config.productCardStyle==20\">\n        <div class=\"main-img\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n\n          <div class=\"buttons-img\">\n\n            <ion-button size=\"small\" [color]=\"getButtonColor()\" (click)=\"buttonClick()\">\n              {{getButtonText()|translate}}\n              <ion-icon slot=\"end\" name=\"basket\"></ion-icon>\n            </ion-button>\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"clickWishList()\">\n              <ion-icon slot=\"icon-only\" [name]=\"getHeartName()\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n        <p class=\"category\">{{getCategoryName()}}</p>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style3 style18 ion-text-start\" *ngIf=\"config.productCardStyle==22\">\n\n        <div class=\"main-image\">\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n              <p class=\"category\">({{getCategoryName()}})</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=7>\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n            <ion-col size=5 class=\"cart\">\n              <ion-icon name=\"remove-circle\" (click)=\"removingToCart()\"></ion-icon>\n              <ion-text>\n                <p>{{cartQuantity}}</p>\n              </ion-text>\n              <ion-icon name=\"add-circle\" (click)=\"addingToCart()\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <!--------------------------------------------------------- style   -------------------------------->\n\n      <ion-card class=\"style10 ion-text-center\" *ngIf=\"config.productCardStyle==10\">\n\n        <div class=\"main-image\">\n          <ion-badge color=\"light\" mode=ios [innerHTML]=\"p.price_html\" class=\"price\">\n          </ion-badge>\n          <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        </div>\n\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n              <p class=\"category\">({{getCategoryName()}})</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button class=\"bottom-big-button\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n\n      <!---------------------------------------------------------  style  -------------------------------->\n      <ion-card class=\"default style14 ion-text-center\" *ngIf=\"config.productCardStyle==14\">\n        <img id=\"image\" [src]=\"getProductImage()\" (click)=\"showProductDetail()\">\n        <ion-icon (click)=\"clickWishList()\" color=\"secondary\" class=\"heart-top-right\" [name]=\"getHeartName()\">\n        </ion-icon>\n        <p (click)=\"showProductDetail()\" class=\"name\">{{p.name}}</p>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <span [innerHTML]=\"p.price_html\" class=\"price\"></span>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-no-padding\" *ngIf=\"type=='recent' || type=='wishList'\">\n            <ion-button style=\"z-index: 10;\" color=\"danger\" (click)=\"removeProduct(type)\">\n              {{'REMOVE'|translate}}</ion-button>\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-card>\n\n      <!------------------------------------------- end of simple card styles------------------------------------------ -->\n    </div>\n\n\n    <!-- //====================================  list view for shop page ==================================== -->\n    <ion-item lines=\"none\" *ngIf=\"type=='list'\" class=\"list-product-design\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img class=\"badge-img\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n        <img *ngIf=\"p.images.length!=0\" src=\"{{p.images[0].src}}\" (click)=\"showProductDetail()\">\n        <img *ngIf=\"p.images.length==0\" src=\"assets/woocommerce-placeholder.png\" (click)=\"showProductDetail()\">\n      </ion-thumbnail>\n      <ion-label>\n        <p (click)=\"showProductDetail()\">{{p.name}}</p>\n        <p>SKU: {{ p.sku }} </p>\n        <p (click)=\"showProductDetail()\" class=\"dispo\">Disp. <b style=\"color: black;\">{{p.stock_quantity}}</b></p>\n        <p [innerHTML]=\"p.price_html\"></p>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"basket\" size=\"large\" color=\"secondary\" id=\"config.cartButton==1 && p.stock_status=='instock' && p.type =='simple'\"\n              (click)=\"addToCart(p)\" item-start>{{'ADD TO CART'|translate}}</ion-icon>\n            <ion-icon name=\"eye\" id=\"basketprova\" size=\"large\" style=\"padding-left: 15px;\" color=\"secondary\" (click)=\"showProductDetail()\"\n              id=\"config.cartButton==1 && p.stock_status=='instock' && p.type!='simple'\">\n              {{'DETAILS'|translate}}</ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-icon id=\"list-heart-icon\" *ngIf=\"isLiked==0\" (click)=\"clickWishList()\" name=\"heart-outline\"></ion-icon>\n        <ion-icon id=\"list-heart-icon\" *ngIf=\"isLiked!=0\" (click)=\"clickWishList()\" name=\"heart\"></ion-icon>\n      </ion-label>\n\n      <div class=\"img-div\">\n        <div *ngIf=\"p.on_sale==true\" class=\"sale\">{{'SALE'|translate}}</div>\n        <div *ngIf=\"p.featured\" class=\"featured\">{{'Featured'|translate}}</div>\n      </div>\n      <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-row>\n    </ion-item>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sliding-tabs\">\n  <ion-slides *ngIf=\"type!='image'\" [options]=\"sliderConfig\">\n    <ion-slide class=\"first-slide\" [class.selected]=\"selected==0\" *ngIf=\"shared.allCategories!=null\"\n      (click)=\"changeTab('0')\">\n      {{'All'|translate}}</ion-slide>\n    <ion-slide [class.selected]=\"selected==c.id\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- Home-2 For Segments With Image -->\n  <ion-slides *ngIf=\"type=='image'\" [options]=\"sliderConfig\">\n    <ion-slide class=\"first-slide\" [class.selected]=\"selected==0\" *ngIf=\"shared.allCategories!=null\"\n      (click)=\"changeTab('0')\">\n      <img src=\"assets/home-page/category.png\">\n      {{'All'|translate}}</ion-slide>\n    <ion-slide [class.selected]=\"selected==c.id\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n      <img *ngIf=\"c.image\" src=\"{{c.image.src}}\">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n  <!-- scrollable segment divisions -->\n  <div [ngSwitch]=\"selected\">\n  </div>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- infinite scroll -->\n  <ion-infinite-scroll threshold=\"10px\" #infinite (ionInfinite)=\"getProducts($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"config.showVendorInfo || config.showWcVendorInfo\">\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      {{'Featured Vendors'|translate}}\n    </ion-button>\n  </ion-row>\n  <div *ngIf=\"shared.vendors.length!=0 && shared.vendors[0]!=1\" class=\"module\">\n    <!-- vendor list swipe slider -->\n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let c of shared.vendors\" (click)=\"openVendorPage(c)\" class=\"animate-item\">\n        <ion-card>\n          <img src=\"{{c.banner}}\" />\n          <p>{{c.name}}</p>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <!-- skeleton text until data not loaded -->\n  <ion-slides [options]=\"sliderConfig\" *ngIf=\"shared.vendors[0]==1\">\n    <ion-slide *ngFor=\"let c of shared.vendors\" (click)=\"openVendorPage(c)\" class=\"animate-item\">\n      <ion-card *ngIf=\"c==1\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>");

/***/ }),

/***/ "./src/components/banner/banner.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/banner/banner.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner-component ion-slides {\n  --bullet-background: var(--ion-color-primary);\n  --bullet-background-active: var(--ion-color-secondary);\n  --progress-bar-background: var(--ion-color-secondary-contrast);\n  --progress-bar-background-active: var(--ion-color-secondary);\n  min-height: 180;\n}\n.banner-component .squareBullets .swiper-pagination-bullet {\n  width: 12px;\n  border-radius: 3px;\n}\n.banner-component .bottomBulletsWhiteBackground .swiper-pagination-bullet {\n  padding: 6px;\n}\n.banner-component .bottomBulletsWhiteBackground .swiper-pagination-bullets {\n  position: unset;\n  margin-top: 10px;\n  margin-left: 50%;\n  margin-right: auto;\n}\n.banner-component .progressBar .swiper-pagination-progressbar {\n  top: auto;\n  bottom: 0;\n}\n.banner-component .verticalRightBullets .swiper-pagination-bullet {\n  display: block;\n  margin: 5px;\n  border-radius: 3px;\n  padding: 8px 0;\n}\n.banner-component .verticalRightBullets .swiper-pagination-bullets {\n  left: auto;\n  right: 5px;\n  width: auto;\n  bottom: auto;\n  margin: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.banner-component .verticalLeftBullets .swiper-pagination-bullet {\n  display: block;\n  margin: 5px;\n  border-radius: 3px;\n  padding: 8px 0;\n}\n.banner-component .verticalLeftBullets .swiper-pagination-bullets {\n  left: 5px;\n  width: auto;\n  bottom: auto;\n  margin: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.banner-component .numberBullets .swiper-pagination-bullet {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  opacity: 1;\n  color: var(--ion-color-medium-contrast);\n  background: var(--ion-color-medium);\n}\n.banner-component .numberBullets .swiper-pagination-bullet-active {\n  color: var(--ion-color-secondary-contrast);\n  background: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2Jhbm5lci9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcY29tcG9uZW50c1xcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsNkNBQUE7RUFDQSxzREFBQTtFQUNBLDhEQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0FDQUo7QURLSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0hOO0FET0k7RUFDRSxZQUFBO0FDTE47QURPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMTjtBRFNJO0VBQ0UsU0FBQTtFQUNBLFNBQUE7QUNQTjtBRFlJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNWTjtBRFlJO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUNWTjtBRGVJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNiTjtBRGVJO0VBQ0UsU0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBQ2ROO0FEbUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLG1DQUFBO0FDakJOO0FEbUJJO0VBQ0UsMENBQUE7RUFDQSxzQ0FBQTtBQ2pCTiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lci1jb21wb25lbnQge1xuICBpb24tc2xpZGVzIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBtaW4taGVpZ2h0OiAxODA7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAuc3F1YXJlQnVsbGV0cyB7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gIH1cbiAgLmJvdHRvbUJ1bGxldHNXaGl0ZUJhY2tncm91bmQge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgIH1cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgLnByb2dyZXNzQmFyIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC52ZXJ0aWNhbFJpZ2h0QnVsbGV0cyB7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgfVxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogNXB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBib3R0b206IGF1dG87XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICB9XG5cbiAgLnZlcnRpY2FsTGVmdEJ1bGxldHMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIH1cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICAvL3JpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gIH1cblxuICAubnVtYmVyQnVsbGV0cyB7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gIH1cblxufVxuIiwiLmJhbm5lci1jb21wb25lbnQgaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtaW4taGVpZ2h0OiAxODA7XG59XG4uYmFubmVyLWNvbXBvbmVudCAuc3F1YXJlQnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5iYW5uZXItY29tcG9uZW50IC5ib3R0b21CdWxsZXRzV2hpdGVCYWNrZ3JvdW5kIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBwYWRkaW5nOiA2cHg7XG59XG4uYmFubmVyLWNvbXBvbmVudCAuYm90dG9tQnVsbGV0c1doaXRlQmFja2dyb3VuZCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmJhbm5lci1jb21wb25lbnQgLnByb2dyZXNzQmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xufVxuLmJhbm5lci1jb21wb25lbnQgLnZlcnRpY2FsUmlnaHRCdWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uYmFubmVyLWNvbXBvbmVudCAudmVydGljYWxSaWdodEJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uYmFubmVyLWNvbXBvbmVudCAudmVydGljYWxMZWZ0QnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmJhbm5lci1jb21wb25lbnQgLnZlcnRpY2FsTGVmdEJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICBsZWZ0OiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgdG9wOiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5iYW5uZXItY29tcG9uZW50IC5udW1iZXJCdWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uYmFubmVyLWNvbXBvbmVudCAubnVtYmVyQnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/components/banner/banner.component.ts":
/*!***************************************************!*\
  !*** ./src/components/banner/banner.component.ts ***!
  \***************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");







let BannerComponent = class BannerComponent {
    constructor(shared, navCtrl, config, http, loading, applicationRef) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.slideOpts = {
            autoplay: {
                delay: 6500,
            }
        };
        //===============================================================================================
        //on click image banners
        this.bannerClick = function (image) {
            //  console.log(image);
            if (image.type == 'category') {
                this.navCtrl.navigateForward(this.config.currentRoute + "/products/" + image.banners_url + "/0/newest");
            }
            else if (image.type == 'product') {
                this.getSingleProductDetail(parseInt(image.banners_url));
            }
            else {
                this.navCtrl.navigateForward(this.config.currentRoute + "/products/0/0/" + image.type);
            }
        };
    }
    ionViewWillEnter() {
    }
    //===============================================================================================
    //getting single product data
    getSingleProductDetail(id) {
        this.loading.show();
        //if (this.type == 'recent' || this.type == 'wishList') {
        this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data) => {
            //this.shared.showAlert("loaded");
            this.loading.hide();
            this.shared.singleProductPageData.push(data);
            this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + data.id);
            this.shared.addToRecent(data);
        }, err => {
            this.loading.hide();
            this.shared.showAlert("Item not Available!");
            console.log(err);
        });
    }
    applyFlipEffect() {
        this.slideOpts = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { $, slides, rtlTranslate: rtl } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) {
                            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        }
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        const rotate = -180 * progress;
                        let rotateY = rotate;
                        let rotateX = 0;
                        let tx = -offset$$1;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (rtl) {
                            rotateY = -rotateY;
                        }
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                        if (swiper.params.flipEffect.slideShadows) {
                            // Set shadows
                            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        $slideEl
                            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, activeIndex, $wrapperEl } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        // eslint-disable-next-line
                        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            }
        };
    }
    applyCubeEffect() {
        this.slideOpts = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                        }
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + (round * 4 * swiperSize);
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = (3 * swiperSize) + (swiperSize * 4 * round);
                        }
                        if (rtl) {
                            tx = -tx;
                        }
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = (slideIndex * 90) + (progress * 90);
                            if (rtl)
                                wrapperRotate = (-slideIndex * 90) - (progress * 90);
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                            const multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                                + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = (swiper.browser.isSafari) ? (-swiperSize / 2) : 0;
                    $wrapperEl
                        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            }
        };
    }
    applyCoverFlowEffect() {
        this.slideOpts = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $ } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
    }
    applyFadeEffect() {
        this.slideOpts = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { slides } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = swiper.slides.eq(i);
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        let tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, $wrapperEl } = swiper;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        slides.transitionEnd(() => {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
    }
    ngOnInit() {
    }
    ngDoCheck() {
        if (this.config.bannerAnimationEffect == 'fade')
            this.applyFadeEffect();
        else if (this.config.bannerAnimationEffect == 'cube')
            this.applyCubeEffect();
        else if (this.config.bannerAnimationEffect == 'flip')
            this.applyFlipEffect();
        else if (this.config.bannerAnimationEffect == 'coverFlow')
            this.applyCoverFlowEffect();
        if (this.config.bannerStyle == "bottomBulletsWhiteBackground") {
            this.slideOpts.pagination = {
                el: '.swiper-pagination',
                dynamicBullets: true,
            };
        }
        if (this.config.bannerStyle == "progressBar") {
            this.slideOpts.pagination = {
                el: '.swiper-pagination',
                type: 'progressbar',
                progressbarOpposite: false
            };
        }
        if (this.config.bannerStyle == "numberBullets") {
            this.slideOpts.pagination = {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            };
        }
    }
};
BannerComponent.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner.component.scss */ "./src/components/banner/banner.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], BannerComponent);



/***/ }),

/***/ "./src/components/categories/categories.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/categories/categories.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name .swiper-slide {\n  width: 40%;\n}\n.name ion-card {\n  margin-left: 10px;\n  margin-right: 0px;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.name ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.name ion-card img {\n  width: 100%;\n}\n.name ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #000;\n}\n.name ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n  color: #747474;\n}\n.name .skeleton-name {\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n}\n.name .skeleton-name ion-skeleton-text {\n  height: 90px;\n}\n.name .skeleton-name p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.name .skeleton-name ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.round .swiper-slide {\n  width: 40%;\n}\n.round ion-slides ion-slide ion-card {\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.round ion-slides ion-slide ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.round ion-slides ion-slide ion-card ion-skeleton-text {\n  height: 90px;\n}\n.round ion-slides ion-slide ion-card p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.round ion-slides ion-slide ion-card ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.round ion-slides ion-slide ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.round ion-slides ion-slide ion-card img {\n  width: 100%;\n}\n.round ion-slides ion-slide ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  color: black;\n}\n.round ion-slides ion-slide ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n  color: grey;\n}\n.name-count .swiper-slide {\n  width: 40%;\n}\n.name-count ion-slides ion-slide ion-card {\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.name-count ion-slides ion-slide ion-card:nth-child(2) {\n  background: none;\n}\n.name-count ion-slides ion-slide ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.name-count ion-slides ion-slide ion-card:last-child {\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n}\n.name-count ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n  height: 90px;\n}\n.name-count ion-slides ion-slide ion-card:last-child p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.name-count ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.name-count ion-slides ion-slide ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.name-count ion-slides ion-slide ion-card img {\n  width: 100%;\n}\n.name-count ion-slides ion-slide ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.name-count ion-slides ion-slide ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n}\n.grid ion-card {\n  min-height: 144px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.grid ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.grid ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.grid ion-card img {\n  width: 100%;\n}\n.grid ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  color: #000;\n}\n.grid ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  margin-top: 0;\n  color: #747474;\n}\n.card-h7 {\n  margin-right: 0 !important;\n}\n.card-h8 {\n  background: none !important;\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.card-skeleton-h8 {\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.card-skeleton-h8 .skeleton-h8 {\n  height: 90% !important;\n}\n.card-h9 {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.card-h9 .avatar-h9 {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.card-h9 h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n}\n.card-h9 p {\n  white-space: nowrap;\n  margin-top: 0;\n}\n.name {\n  font-size: var(--heading-font-size) !important;\n}\n.count {\n  font-size: var(--sub-heading-font-size) !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDTjtBRENJO0VBQ0UsV0FBQTtBQ0NOO0FERUk7RUFDRSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQU47QURFSTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDREo7QURFSTtFQUNFLFlBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBTjtBREVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQU47QURNRTtFQUNFLFVBQUE7QUNISjtBRE9NO0VBT0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBZUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDekJSO0FEQVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFVjtBRElRO0VBQ0UsWUFBQTtBQ0ZWO0FESVE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZWO0FESVE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNGVjtBRFFRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNOVjtBRFFRO0VBQ0UsV0FBQTtBQ05WO0FEU1E7RUFDRSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNQVjtBRFNRO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDUFY7QURjRTtFQUNFLFVBQUE7QUNYSjtBRGVNO0VBNEJFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3hDUjtBRFdRO0VBQ0UsZ0JBQUE7QUNUVjtBRFdRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFY7QURXUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNUVjtBRFVVO0VBQ0UsWUFBQTtBQ1JaO0FEVVU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEVVU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNSWjtBRGNRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNaVjtBRGNRO0VBQ0UsV0FBQTtBQ1pWO0FEZVE7RUFDRSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2JWO0FEZVE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2JWO0FEb0JFO0VBQ0UsaUJBQUE7RUFNQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDdEJKO0FEYUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYTjtBRGtCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDaEJOO0FEa0JJO0VBQ0UsV0FBQTtBQ2hCTjtBRG1CSTtFQUNFLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2pCTjtBRG1CSTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2pCTjtBRHNCQTtFQUNFLDBCQUFBO0FDbkJGO0FEcUJBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNsQkY7QURvQkE7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNqQkY7QURrQkU7RUFDRSxzQkFBQTtBQ2hCSjtBRG1CQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDaEJGO0FEaUJFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZko7QURpQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNmSjtBRGlCRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ2ZKO0FEbUJBO0VBQ0UsOENBQUE7QUNoQkY7QURrQkE7RUFDRSxrREFBQTtFQUNBLGdCQUFBO0FDZkYiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGg2IHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBjb2xvcjogIzc0NzQ3NDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNrZWxldG9uLW5hbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yb3VuZCB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XHJcbiAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICNlZWU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubmFtZS1jb3VudCB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XHJcbiAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogI2VlZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmdyaWQge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDE0NHB4O1xyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6ICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDYge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1oNyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtaDgge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1za2VsZXRvbi1oOCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgLnNrZWxldG9uLWg4IHtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jYXJkLWg5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC5hdmF0YXItaDkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBoNiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxufVxyXG4uY291bnQge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIiwiLm5hbWUgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4ubmFtZSBpb24tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5uYW1lIGlvbi1jYXJkIGlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYW1lIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWUgaW9uLWNhcmQgaDYge1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5uYW1lIGlvbi1jYXJkIHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuLm5hbWUgLnNrZWxldG9uLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xufVxuLm5hbWUgLnNrZWxldG9uLW5hbWUgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ubmFtZSAuc2tlbGV0b24tbmFtZSBwIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4ubmFtZSAuc2tlbGV0b24tbmFtZSBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucm91bmQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6ICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgcCB7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGg2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubmFtZS1jb3VudCAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQ6bGFzdC1jaGlsZCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogOTBweDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOmxhc3QtY2hpbGQgcCB7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQ6bGFzdC1jaGlsZCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZCBoNiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmdyaWQgaW9uLWNhcmQge1xuICBtaW4taGVpZ2h0OiAxNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAjZWVlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmdyaWQgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZ3JpZCBpb24tY2FyZCBpb24taW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ3JpZCBpb24tY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ncmlkIGlvbi1jYXJkIGg2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICMwMDA7XG59XG4uZ3JpZCBpb24tY2FyZCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuXG4uY2FyZC1oNyB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1oOCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtc2tlbGV0b24taDgge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmNhcmQtc2tlbGV0b24taDggLnNrZWxldG9uLWg4IHtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaDkge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY2FyZC1oOSAuYXZhdGFyLWg5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkLWg5IGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJkLWg5IHAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/components/categories/categories.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/categories/categories.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");






let CategoriesComponent = class CategoriesComponent {
    constructor(config, shared, nav, appEventsService) {
        this.config = config;
        this.shared = shared;
        this.nav = nav;
        this.appEventsService = appEventsService;
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.2,
            spaceBetween: 0
        };
        this.sliderConfig2 = {
            slidesPerView: 3.5,
            spaceBetween: 0
        };
    }
    openSubCategories(parent) {
        let count = 0;
        for (let val of this.shared.subCategories) {
            if (val.parent == parent.id)
                count++;
        }
        if (count == 0)
            this.nav.navigateForward(this.config.currentRoute + "/products/" + parent.id + "/" + parent.name + "/newest");
        else {
            this.appEventsService.publish("openSubcategoryPage", parent);
        }
    }
    ngOnInit() { }
};
CategoriesComponent.ctorParameters = () => [
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesComponent.prototype, "type", void 0);
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.scss */ "./src/components/categories/categories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]])
], CategoriesComponent);



/***/ }),

/***/ "./src/components/product/product.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/product/product.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.product-component .default {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .default div div {\n  text-transform: uppercase;\n  position: absolute;\n  z-index: 1;\n  font-size: 0.6875rem;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n  right: 0px;\n  width: auto;\n  top: 0px;\n  border-radius: 2px;\n  padding: 2px 4px;\n}\n.product-component .default div div:nth-child(2) {\n  top: 20px;\n}\n.product-component .default .cara {\n  -webkit-text-decoration: dimgrey;\n          text-decoration: dimgrey;\n}\n.product-component .default .dispo {\n  color: #017dbb;\n}\n.product-component .default #newimage {\n  height: 52px;\n  position: absolute;\n  z-index: 1;\n  left: 0px !important;\n  width: 30%;\n  top: -4px;\n  margin-left: -4.2px;\n}\n.product-component .default #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component .default .name {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.product-component .default .price {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.product-component .default ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .default ion-grid ion-row ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .list-product-design {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n.product-component .list-product-design ion-thumbnail {\n  margin: 0;\n  height: 100px;\n  width: 100px;\n}\n.product-component .list-product-design ion-thumbnail .badge-img {\n  position: absolute;\n  z-index: 1;\n  height: 45px;\n  width: 45px;\n  left: 9px;\n  top: 9px;\n}\n.product-component .list-product-design ion-thumbnail img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n.product-component .list-product-design #list-heart-icon {\n  margin-bottom: 0;\n  position: absolute;\n  top: 60px;\n  right: 10px;\n  font-size: 25px;\n  color: var(--ion-color-secondary);\n}\n.product-component .list-product-design ion-label {\n  margin-bottom: auto;\n  margin-left: 10px;\n}\n.product-component .list-product-design ion-label p {\n  margin-top: 10px;\n}\n.product-component .list-product-design .sale {\n  background: var(--ion-color-secondary);\n  padding: 2px;\n  color: var(--ion-color-secondary-contrast);\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n.product-component .list-product-design .featured {\n  background: var(--ion-color-secondary);\n  padding: 2px;\n  color: var(--ion-color-secondary-contrast);\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n.product-component .list-product-design .img-div {\n  font-size: 12px;\n}\n.product-component .list-product-design .img-div :nth-child(1) {\n  top: 0;\n}\n.product-component .list-product-design .img-div :nth-child(2) {\n  top: 25px;\n}\n.product-component .style21, .product-component .style12, .product-component .style5, .product-component .style11 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .style21 .name, .product-component .style12 .name, .product-component .style5 .name, .product-component .style11 .name {\n  margin-top: 0px;\n}\n.product-component .style21 .main-img, .product-component .style12 .main-img, .product-component .style5 .main-img, .product-component .style11 .main-img {\n  padding: 3px;\n}\n.product-component .style21 #image, .product-component .style12 #image, .product-component .style5 #image, .product-component .style11 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style21 ion-grid ion-row ion-icon, .product-component .style12 ion-grid ion-row ion-icon, .product-component .style5 ion-grid ion-row ion-icon, .product-component .style11 ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .style11 .price * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style3 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 10px 10px 0 0;\n}\n.product-component .style3 .main-image {\n  position: relative;\n}\n.product-component .style3 .main-image ion-badge {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 10;\n  font-size: 10px;\n  padding: 5px 8px;\n  border-radius: 0;\n  display: inline-grid;\n}\n.product-component .style3 .main-image span {\n  margin-top: 5px;\n}\n.product-component .style3 .name {\n  margin-top: 5px;\n  margin-bottom: 4px;\n}\n.product-component .style3 .main-img {\n  padding: 3px;\n}\n.product-component .style3 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style3 ion-grid ion-row ion-icon {\n  color: var(--ion-color-secondary);\n  margin-top: 5px;\n  margin-right: 3px;\n  font-size: 16px !important;\n}\n.product-component .style6 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0;\n}\n.product-component .style6 .main-image {\n  position: relative;\n}\n.product-component .style6 .main-image ion-fab-button {\n  position: absolute;\n  bottom: -10px;\n  right: 0px;\n  z-index: 10;\n  width: 20px;\n  height: 20px;\n  margin: 3px;\n}\n.product-component .style6 .main-image ion-fab-button ion-icon {\n  font-size: inherit;\n}\n.product-component .style6 .main-image span {\n  margin-top: 5px;\n}\n.product-component .style6 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style6 .colum-2 {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.product-component .style6 .price {\n  max-width: 50%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  float: left;\n}\n.product-component .style6 .main-img {\n  padding: 3px;\n}\n.product-component .style6 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style7 {\n  border-radius: 10px;\n  position: relative;\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n}\n.product-component .style7 .floating-tags {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: 0;\n  z-index: 1;\n  display: inline-grid;\n}\n.product-component .style7 .floating-tags ion-badge {\n  font-size: 9px;\n  margin-bottom: 2px;\n  z-index: 4;\n}\n.product-component .style7 .floating-tags .first {\n  border-radius: 10px 0px 3px 0;\n  padding: 5px 5px;\n}\n.product-component .style7 .floating-tags .second {\n  border-radius: 0px 3px 3px 0px;\n  padding: 5px 5px;\n}\n.product-component .style7 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style7 ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-secondary);\n}\n.product-component .style7 ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .style8 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0;\n}\n.product-component .style8 .product-ratings {\n  display: flex;\n}\n.product-component .style8 .product-ratings .rating-value {\n  font-size: 10px;\n  padding-top: 2px;\n}\n.product-component .style8 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style8 .heart-top-right {\n  top: 5px;\n  right: 5px;\n}\n.product-component .style8 .price {\n  margin-top: 3px;\n  margin-bottom: 2px;\n}\n.product-component .style8 .main-img {\n  padding: 3px;\n}\n.product-component .style8 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component .style9 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 10px;\n}\n.product-component .style9 .main-image {\n  position: relative;\n}\n.product-component .style9 .main-image ion-fab-button {\n  position: absolute;\n  bottom: -10px;\n  right: 2px;\n  z-index: 10;\n  width: 25px;\n  height: 25px;\n  margin: 3px;\n}\n.product-component .style9 .main-image ion-fab-button ion-icon {\n  font-size: 17px;\n}\n.product-component .style9 .main-image span {\n  margin-top: 5px;\n}\n.product-component .style9 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style9 .price {\n  max-width: 50%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style9 .main-img {\n  padding: 3px;\n}\n.product-component .style9 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component .style10 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 10px;\n}\n.product-component .style10 .main-image {\n  position: relative;\n}\n.product-component .style10 .main-image ion-badge {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 10;\n  font-size: 10px;\n  padding: 8px 10px;\n  border-radius: 10px 10px 10px 0;\n  margin: 0;\n}\n.product-component .style10 .name {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.product-component .style10 .category {\n  margin-bottom: 5px;\n}\n.product-component .style10 .main-img {\n  padding: 3px;\n}\n.product-component .style10 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style10 ion-grid ion-row ion-icon {\n  color: var(--ion-color-secondary);\n  margin-top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style14 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 10px 10px 0 0;\n  box-shadow: none;\n  --background: var(--ion-background-color);\n}\n.product-component .style14 .heart-top-right {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 20px;\n}\n.product-component .style14 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style14 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n  border-radius: 10px;\n}\n.product-component .style14 ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .style14 ion-grid ion-row ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .style4 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  box-shadow: none;\n  border-radius: 0;\n  --background: var(--ion-background-color);\n}\n.product-component .style4 .heart-top-right {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 20px;\n}\n.product-component .style4 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style4 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n  border-radius: 10px 10px 0 0;\n}\n.product-component .style4 .name {\n  margin-bottom: 5px;\n}\n.product-component .style4 ion-badge {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n}\n.product-component .style4 ion-badge span {\n  font-size: 9px;\n  vertical-align: sub;\n}\n.product-component .style4 .price {\n  width: 100%;\n}\n.product-component .style4 ion-button {\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component .style13 {\n  border-radius: 0px;\n  margin-top: 0px !important;\n  margin-right: 0px;\n  height: auto;\n}\n.product-component .style13 .heart-top-right {\n  right: 5px;\n  top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style13 .floating-tags {\n  position: absolute;\n  top: 5px;\n  left: 0px;\n  padding: 0;\n}\n.product-component .style13 .floating-tags ion-badge {\n  border-radius: 0 3px 3px 0;\n  font-size: 9px;\n  margin-bottom: 2px;\n  padding: 3px 5px;\n}\n.product-component .style13 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style13 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style13 .innerprice {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.product-component .style13 .price {\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-radius: 100%;\n  width: 45px;\n  height: 45px;\n}\n.product-component .style13 .price .woocommerce-Price-amount {\n  font-size: 10px;\n}\n.product-component .style13 .main-img {\n  padding: 3px;\n}\n.product-component .style13 #image {\n  width: auto;\n  height: auto;\n}\n.product-component .style13 .woocommerce-Price-amount {\n  margin-left: 0px !important;\n}\n.product-component .style13 .woocs_price_code {\n  display: block !important;\n}\n.product-component .style13 .paddingb5 {\n  padding-bottom: 5px;\n}\n.product-component .style15 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0;\n  padding-top: 5px;\n}\n.product-component .style15 .name {\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.product-component .style15 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style15 .price {\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style15 .rating-colum {\n  padding-bottom: 5px;\n}\n.product-component .style15 .main-img {\n  padding: 3px;\n}\n.product-component .style15 #image {\n  width: auto;\n  height: auto;\n}\n.product-component .style16 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  border-radius: 0px;\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  box-shadow: none;\n  --background: var(--ion-background-color);\n}\n.product-component .style16 ion-grid {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  width: 92%;\n  background-color: var(--ion-background-color);\n  border-radius: 10px;\n  border-radius: 6px;\n  padding-top: 5px;\n  z-index: 2;\n  margin-top: -25px;\n  position: relative;\n}\n.product-component .style16 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style16 .product-ratings {\n  padding-bottom: 5px;\n}\n.product-component .style16 .name {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style16 .price {\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.product-component .style16 .main-img {\n  padding: 3px;\n}\n.product-component .style16 ion-icon {\n  padding: 0 5px;\n}\n.product-component .style16 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  border-radius: 10px;\n  height: auto;\n  z-index: 1;\n}\n.product-component .style16 ion-button {\n  --border-radius: 0 0 6px 6px !important;\n}\n.product-component .style17 ins * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style17 .heart-top-right {\n  right: 5px;\n  top: 5px;\n}\n.product-component .style17 .price {\n  margin-top: 2px;\n}\n.product-component .style17 ion-grid ion-icon {\n  font-size: inherit !important;\n  color: #f8ce0b !important;\n}\n.product-component .style19 {\n  border-radius: 0px;\n}\n.product-component .style19 .heart-top-right {\n  right: 5px;\n  top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style19 .floating-tags {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  padding: 0;\n}\n.product-component .style19 ion-badge {\n  border-radius: 0;\n  font-size: 9px;\n  margin-bottom: 2px;\n  padding: 2px 5px;\n  background: transparent;\n  border: 1px solid black;\n  color: black;\n}\n.product-component .style5 .name {\n  margin-top: 5px;\n}\n.product-component .style5 .price {\n  width: 100%;\n  padding: 0;\n}\n.product-component .style5 ion-icon {\n  margin-top: 5px;\n  font-size: 16px !important;\n}\n.product-component .style12 .name {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.product-component .style12 .price {\n  margin-top: 0px;\n}\n.product-component .style12 .price * {\n  color: var(--ion-color-danger) !important;\n}\n.product-component .style12 .cart-button {\n  height: 100%;\n  margin: 0px;\n  --border-radius: 0px;\n  font-size: 1vw;\n}\n.product-component .style18 {\n  border-radius: 0;\n}\n.product-component .style18 .cart {\n  display: flex;\n  padding-right: 2px;\n  padding-left: 2px;\n}\n.product-component .style18 .cart ion-text {\n  margin: auto;\n}\n.product-component .style18 .cart ion-text p {\n  margin: auto;\n  margin: auto 4px;\n}\n.product-component .style18 .cart .price {\n  width: 100%;\n}\n.product-component .style20 {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component .style20 .main-img {\n  position: relative;\n}\n.product-component .style20 .main-img .buttons-img {\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n}\n.product-component .style20 .main-img .buttons-img ion-button {\n  margin-right: 0px;\n  font-size: 2vw;\n  --border-radius: 0px;\n}\n.product-component .style20 .main-img .buttons-img ion-button ion-icon {\n  font-size: 3vw;\n}\n.product-component .style20 .name {\n  margin-top: 0px;\n}\n.product-component .style20 #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: var(--ion-background-color);\n  width: auto;\n  height: auto;\n}\n.product-component .style20 ion-grid ion-row ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-secondary);\n}\n.product-component .product-ratings {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.product-component .product-ratings .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 12px;\n}\n.product-component .product-ratings .stars-outer::before {\n  content: \"☆☆☆☆☆\";\n  color: #ccc;\n}\n.product-component .product-ratings .stars-outer .stars-inner {\n  font-size: 12px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-component .product-ratings .stars-outer .stars-inner::before {\n  content: \"★★★★★\";\n  color: #f8ce0b;\n}\n.product-component .category {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin: 0;\n  color: var(--ion-text-color);\n  font-size: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-component .heart-top-right {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 22px;\n}\n.product-component .name {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  color: var(--ion-text-color);\n  font-size: 12px !important;\n  font-weight: bold !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-component .price {\n  display: inline-block;\n  align-items: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.product-component .price .woocommerce-Price-amount {\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n}\n.product-component .price .woocs_price_code {\n  display: flex;\n}\n.product-component .price del .woocommerce-Price-amount {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n  text-decoration: line-through;\n}\n.product-component .price ins {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  text-decoration: none;\n}\n.product-component .price ins .woocommerce-Price-amount {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--ion-color-danger);\n  margin-left: 5px;\n}\n.product-component .bottom-big-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n  z-index: 10;\n}\n.product-component .card-add-cart {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n}\n.product-component .card-add-cart:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 110%;\n  height: 102%;\n  background-color: var(--ion-background-color);\n  opacity: 0.8;\n}\n.product-component .card-add-cart ion-icon {\n  position: unset;\n  margin: auto;\n  font-size: 2.5rem !important;\n  color: var(--ion-color-secondary);\n  z-index: 10;\n}\n[dir=rtl] ion-card p {\n  text-align: right !important;\n}\n[dir=rtl] ins .woocommerce-Price-amount {\n  margin-left: 0px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL3Byb2R1Y3QvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGNvbXBvbmVudHNcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2Q7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNDTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUVBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBREFSO0FDQ1E7RUFDRSxTQUFBO0FEQ1Y7QUNHSTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QURETjtBQ0dJO0VBQ0UsY0FBQTtBREROO0FDR0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FERE47QUNHSTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FERE47QUNLSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURITjtBQ0tJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBREhOO0FDUVE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUROVjtBQ1NRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QURQVjtBQ2NFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURaSjtBQ2FJO0VBU0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEbkJOO0FDU007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FEUFI7QUNZTTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QURWUjtBQ2FJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEWE47QUNhSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QURYTjtBQ1lNO0VBQ0UsZ0JBQUE7QURWUjtBQ2FJO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEWE47QUNhSTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRFhOO0FDYUk7RUFDRSxlQUFBO0FEWE47QUNZTTtFQUNFLE1BQUE7QURWUjtBQ1lNO0VBQ0UsU0FBQTtBRFZSO0FDZUU7RUFPRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEbkJKO0FDVUk7RUFDRSxlQUFBO0FEUk47QUNVSTtFQUNFLFlBQUE7QURSTjtBQ2VJO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURiTjtBQ2lCUTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBRGZWO0FDeUJJO0VBQ0UseUNBQUE7QUR2Qk47QUM0QkU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FEMUJKO0FDNEJJO0VBQ0Usa0JBQUE7QUQxQk47QUMyQk07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUR6QlI7QUMyQk07RUFDRSxlQUFBO0FEekJSO0FDNkJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEM0JOO0FDNkJJO0VBQ0UsWUFBQTtBRDNCTjtBQzhCSTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FENUJOO0FDZ0NRO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBRDlCVjtBQ3FDRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURuQ0o7QUNxQ0k7RUFDRSxrQkFBQTtBRG5DTjtBQ3FDTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbkNSO0FDb0NRO0VBQ0Usa0JBQUE7QURsQ1Y7QUNzQ007RUFDRSxlQUFBO0FEcENSO0FDd0NJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEdENOO0FDeUNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEdkNOO0FDeUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUR2Q047QUN5Q0k7RUFDRSxZQUFBO0FEdkNOO0FDMENJO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUR4Q047QUM0Q0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUQxQ0o7QUM0Q0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBRDFDTjtBQzJDTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7QUQxQ1I7QUM0Q007RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FEMUNSO0FDNENNO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBRDFDUjtBQzZDSTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEM0NOO0FDOENJO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FENUNOO0FDOENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUQ1Q047QUNnREU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEOUNKO0FDK0NJO0VBQ0UsYUFBQTtBRDdDTjtBQzhDTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRDVDUjtBQ2dESTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRDlDTjtBQ2dESTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FEOUNOO0FDZ0RJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEOUNOO0FDZ0RJO0VBQ0UsWUFBQTtBRDlDTjtBQ2lESTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEL0NOO0FDb0RFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRGxESjtBQ29ESTtFQUNFLGtCQUFBO0FEbEROO0FDb0RNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURsRFI7QUNtRFE7RUFDRSxlQUFBO0FEakRWO0FDcURNO0VBQ0UsZUFBQTtBRG5EUjtBQ3VESTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRHJETjtBQ3VESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURyRE47QUN1REk7RUFDRSxZQUFBO0FEckROO0FDd0RJO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUR0RE47QUMwREU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEeERKO0FDMERJO0VBQ0Usa0JBQUE7QUR4RE47QUN5RE07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBRHZEUjtBQzJESTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRHpETjtBQzJESTtFQUNFLGtCQUFBO0FEekROO0FDMkRJO0VBQ0UsWUFBQTtBRHpETjtBQzRESTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEMUROO0FDOERRO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUQ1RFY7QUNvRUU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBRGxFSjtBQ29FSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEbEVOO0FDcUVJO0VBQ0UseUNBQUE7QURuRU47QUNxRUk7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEbkVOO0FDd0VRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FEdEVWO0FDeUVRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUR2RVY7QUM2RUU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBRDNFSjtBQzZFSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEM0VOO0FDOEVJO0VBQ0UseUNBQUE7QUQ1RU47QUM4RUk7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FENUVOO0FDOEVJO0VBQ0Usa0JBQUE7QUQ1RU47QUM4RUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FENUVOO0FDNkVNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FEM0VSO0FDOEVJO0VBQ0UsV0FBQTtBRDVFTjtBQzhFSTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtBRDVFTjtBQ2dGRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUQ5RUo7QUNnRkk7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0FEOUVOO0FDaUZJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUQvRU47QUNpRk07RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEL0VSO0FDbUZJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEakZOO0FDb0ZJO0VBQ0UseUNBQUE7QURsRk47QUNvRkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QURsRk47QUNvRkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRGxGTjtBQ21GTTtFQUNFLGVBQUE7QURqRlI7QUNvRkk7RUFDRSxZQUFBO0FEbEZOO0FDcUZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURuRk47QUNxRkk7RUFDRSwyQkFBQTtBRG5GTjtBQ3FGSTtFQUNFLHlCQUFBO0FEbkZOO0FDcUZJO0VBQ0UsbUJBQUE7QURuRk47QUN1RkU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURyRko7QUN1Rkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURyRk47QUN1Rkk7RUFDRSx5Q0FBQTtBRHJGTjtBQ3VGSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURyRk47QUN1Rkk7RUFDRSxtQkFBQTtBRHJGTjtBQ3VGSTtFQUNFLFlBQUE7QURyRk47QUN3Rkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRHRGTjtBQzJGRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLHlDQUFBO0FEM0ZKO0FDNkZJO0VBQ0UseUhBQUE7RUFFQSxVQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDVGTjtBQzhGSTtFQUNFLHlDQUFBO0FENUZOO0FDOEZJO0VBQ0UsbUJBQUE7QUQ1Rk47QUM4Rkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUQ1Rk47QUM4Rkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FENUZOO0FDOEZJO0VBQ0UsWUFBQTtBRDVGTjtBQzhGSTtFQUNFLGNBQUE7QUQ1Rk47QUMrRkk7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRDdGTjtBQ2dHSTtFQUNFLHVDQUFBO0FEOUZOO0FDb0dJO0VBQ0UseUNBQUE7QURsR047QUNvR0k7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBRGxHTjtBQ29HSTtFQUNFLGVBQUE7QURsR047QUNxR007RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FEbkdSO0FDeUdFO0VBQ0Usa0JBQUE7QUR2R0o7QUN5R0k7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0FEdkdOO0FDMEdJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUR4R047QUMyR0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUR6R047QUNrSEk7RUFDRSxlQUFBO0FEaEhOO0FDa0hJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QURoSE47QUNrSEk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QURoSE47QUN3SEk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUR0SE47QUN3SEk7RUFDRSxlQUFBO0FEdEhOO0FDd0hJO0VBQ0UseUNBQUE7QUR0SE47QUN3SEk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRHRITjtBQzBIRTtFQUNFLGdCQUFBO0FEeEhKO0FDMEhJO0VBQ0UsYUFBQTtFQVdBLGtCQUFBO0VBQ0EsaUJBQUE7QURsSU47QUN1SE07RUFDRSxZQUFBO0FEckhSO0FDc0hRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FEcEhWO0FDdUhNO0VBQ0UsV0FBQTtBRHJIUjtBQzZIRTtFQTBCRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEcEpKO0FDd0hJO0VBQ0Usa0JBQUE7QUR0SE47QUN3SE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FEdEhSO0FDd0hRO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUR0SFY7QUN1SFU7RUFDRSxjQUFBO0FEckhaO0FDMkhJO0VBQ0UsZUFBQTtBRHpITjtBQ2lJSTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEL0hOO0FDbUlRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FEaklWO0FDd0lFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBRHRJSjtBQ3VJSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEcklOO0FDc0lNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FEcElSO0FDc0lNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEcElSO0FDc0lRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FEcElWO0FDeUlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUR2SUo7QUN5SUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRHZJSjtBQ3lJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUR2SUo7QUMwSUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRHhJSjtBQzBJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUR4SU47QUMwSUk7RUFDRSxhQUFBO0FEeElOO0FDMklNO0VBQ0UsMkNBQUE7RUFDQSw2QkFBQTtBRHpJUjtBQzRJSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEMUlOO0FDMklNO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBRHpJUjtBQzhJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBRDVJSjtBQ2dKRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUQ5SUo7QUNnSkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0FEOUlOO0FDZ0pJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBRDlJTjtBQ3FKRTtFQUNFLDRCQUFBO0FEbEpKO0FDcUpJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRG5KTiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCBkaXYgZGl2IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgZGl2IGRpdjpudGgtY2hpbGQoMikge1xuICB0b3A6IDIwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgLmNhcmEge1xuICB0ZXh0LWRlY29yYXRpb246IGRpbWdyZXk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgLmRpc3BvIHtcbiAgY29sb3I6ICMwMTdkYmI7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgI25ld2ltYWdlIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzAlO1xuICB0b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNC4ycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgLm5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCAucHJpY2Uge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuZGVmYXVsdCBpb24tZ3JpZCBpb24tcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmRlZmF1bHQgaW9uLWdyaWQgaW9uLXJvdyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZTtcbiAgYm9yZGVyLXRvcDogc29saWQgI2VlZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIGlvbi10aHVtYm5haWwge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiBpb24tdGh1bWJuYWlsIC5iYWRnZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGxlZnQ6IDlweDtcbiAgdG9wOiA5cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gaW9uLXRodW1ibmFpbCBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiAjbGlzdC1oZWFydC1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiBpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAubGlzdC1wcm9kdWN0LWRlc2lnbiBpb24tbGFiZWwgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gLnNhbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gLmZlYXR1cmVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIC5pbWctZGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5saXN0LXByb2R1Y3QtZGVzaWduIC5pbWctZGl2IDpudGgtY2hpbGQoMSkge1xuICB0b3A6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmxpc3QtcHJvZHVjdC1kZXNpZ24gLmltZy1kaXYgOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogMjVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyLCAucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTExIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjEgLm5hbWUsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMiAubmFtZSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTUgLm5hbWUsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMSAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMSAubWFpbi1pbWcsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMiAubWFpbi1pbWcsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU1IC5tYWluLWltZywgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTExIC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMSAjaW1hZ2UsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMiAjaW1hZ2UsIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU1ICNpbWFnZSwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTExICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjEgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiwgLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24sIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU1IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24sIC5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMSBpb24tZ3JpZCBpb24tcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTEgLnByaWNlICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMgLm1haW4taW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMyAubWFpbi1pbWFnZSBpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUzIC5tYWluLWltYWdlIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMyAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMgLm1haW4taW1nIHtcbiAgcGFkZGluZzogM3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTMgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUzIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTYge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiAubWFpbi1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5tYWluLWltYWdlIGlvbi1mYWItYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiAubWFpbi1pbWFnZSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5tYWluLWltYWdlIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTYgLmNvbHVtLTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU2IC5wcmljZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiAubWFpbi1pbWcge1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNiAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU3IC5mbG9hdGluZy10YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nOiAwO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU3IC5mbG9hdGluZy10YWdzIGlvbi1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHotaW5kZXg6IDQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNyAuZmxvYXRpbmctdGFncyAuZmlyc3Qge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAzcHggMDtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU3IC5mbG9hdGluZy10YWdzIC5zZWNvbmQge1xuICBib3JkZXItcmFkaXVzOiAwcHggM3B4IDNweCAwcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNyAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTcgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU3IGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU4IC5wcm9kdWN0LXJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggLnByb2R1Y3QtcmF0aW5ncyAucmF0aW5nLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggLm5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU4IC5oZWFydC10b3AtcmlnaHQge1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU4IC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggLm1haW4taW1nIHtcbiAgcGFkZGluZzogM3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTggI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5IC5tYWluLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTkgLm1haW4taW1hZ2UgaW9uLWZhYi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHJpZ2h0OiAycHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5IC5tYWluLWltYWdlIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTkgLm1haW4taW1hZ2Ugc3BhbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU5IC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOSAucHJpY2Uge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOSAubWFpbi1pbWcge1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlOSAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMCAubWFpbi1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMCAubWFpbi1pbWFnZSBpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMDtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTAgLmNhdGVnb3J5IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwIC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMCAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEwIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE0IC5oZWFydC10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTQgaW5zICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNCAjaW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNCBpb24tZ3JpZCBpb24tcm93IGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTQgaW5zICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0ICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCAubmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU0IGlvbi1iYWRnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCBpb24tYmFkZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTQgLnByaWNlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5mbG9hdGluZy10YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5mbG9hdGluZy10YWdzIGlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgaW5zICoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAuaW5uZXJwcmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgLnByaWNlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAucHJpY2UgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAubWFpbi1pbWcge1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTMgI2ltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEzIC53b29jc19wcmljZV9jb2RlIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMyAucGFkZGluZ2I1IHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNSAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE1IGlucyAqIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTUgLnByaWNlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNSAucmF0aW5nLWNvbHVtIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNSAubWFpbi1pbWcge1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTUgI2ltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiBpb24tZ3JpZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG4gIHdpZHRoOiA5MiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2IGlucyAqIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTYgLnByb2R1Y3QtcmF0aW5ncyB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTYgLm5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiAucHJpY2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2IC5tYWluLWltZyB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNiBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE2ICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDE7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTYgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNyBpbnMgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE3IC5oZWFydC10b3AtcmlnaHQge1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxNyAucHJpY2Uge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTcgaW9uLWdyaWQgaW9uLWljb24ge1xuICBmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmOGNlMGIgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxOSB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxOSAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE5IC5mbG9hdGluZy10YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE5IGlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTUgLm5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlNSAucHJpY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGU1IGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMiAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxMiAucHJpY2UgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTEyIC5jYXJ0LWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDF2dztcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUxOCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTggLmNhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE4IC5jYXJ0IGlvbi10ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTE4IC5jYXJ0IGlvbi10ZXh0IHAge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbjogYXV0byA0cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMTggLmNhcnQgLnByaWNlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMCAubWFpbi1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjAgLm1haW4taW1nIC5idXR0b25zLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuc3R5bGUyMCAubWFpbi1pbWcgLmJ1dHRvbnMtaW1nIGlvbi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAydnc7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIwIC5tYWluLWltZyAuYnV0dG9ucy1pbWcgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogM3Z3O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIwIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5zdHlsZTIwICNpbWFnZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnN0eWxlMjAgaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcm9kdWN0LXJhdGluZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcm9kdWN0LXJhdGluZ3MgLnN0YXJzLW91dGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAucHJvZHVjdC1yYXRpbmdzIC5zdGFycy1vdXRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIbimIbimIbimIbimIZcIjtcbiAgY29sb3I6ICNjY2M7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByb2R1Y3QtcmF0aW5ncyAuc3RhcnMtb3V0ZXIgLnN0YXJzLWlubmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAucHJvZHVjdC1yYXRpbmdzIC5zdGFycy1vdXRlciAuc3RhcnMtaW5uZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piF4piF4piF4piF4piFXCI7XG4gIGNvbG9yOiAjZjhjZTBiO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5jYXRlZ29yeSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLm5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcmljZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLnByaWNlIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAucHJpY2UgLndvb2NzX3ByaWNlX2NvZGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcmljZSBkZWwgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcmljZSBpbnMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5wcmljZSBpbnMgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgLmJvdHRvbS1iaWctYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuY2FyZC1hZGQtY2FydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5jYXJkLWFkZC1jYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiAxMDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuY2FyZC1hZGQtY2FydCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5bZGlyPXJ0bF0gaW9uLWNhcmQgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gaW5zIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCIucHJvZHVjdC1jb21wb25lbnQge1xuICAuZGVmYXVsdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZGl2IHtcbiAgICAgIGRpdiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY2FyYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGRpbWdyZXk7XG4gICAgfVxuICAgIC5kaXNwbyB7XG4gICAgICBjb2xvcjogIzAxN2RiYjtcbiAgICB9XG4gICAgI25ld2ltYWdlIHtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB0b3A6IC00cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTQuMnB4O1xuICAgIH1cbiAgICAjaW1hZ2Uge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG5cbiAgICAubmFtZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIGlvbi1ncmlkIHtcbiAgICAgIGlvbi1yb3cge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAvL3BhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZm9yIHByb2R1Y3QgbGlzdFxuICAubGlzdC1wcm9kdWN0LWRlc2lnbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAjZWVlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgLmJhZGdlLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgIH1cbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBpbWcge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgIH1cbiAgICB9XG4gICAgI2xpc3QtaGVhcnQtaWNvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNhbGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5mZWF0dXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gICAgLmltZy1kaXYge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgMSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5zdHlsZTIxIHtcbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgIC5tYWluLWltZyB7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgI2ltYWdlIHtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIGlvbi1ncmlkIHtcbiAgICAgIGlvbi1yb3cge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgMiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5zdHlsZTExIHtcbiAgICBAZXh0ZW5kIC5zdHlsZTIxO1xuXG4gICAgLnByaWNlICoge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5zdHlsZTMge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcblxuICAgIC5tYWluLWltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIC5tYWluLWltZyB7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgI2ltYWdlIHtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIGlvbi1ncmlkIHtcbiAgICAgIGlvbi1yb3cge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAuc3R5bGU2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAubWFpbi1pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLmNvbHVtLTIge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLm1haW4taW1nIHtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAjaW1hZ2Uge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICAuc3R5bGU3IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLmZsb2F0aW5nLXRhZ3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcblxuICAgICAgICB6LWluZGV4OiA0O1xuICAgICAgfVxuICAgICAgLmZpcnN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggM3B4IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICB9XG4gICAgICAuc2Vjb25kIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAjaW1hZ2Uge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgfVxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLnN0eWxlOCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC5wcm9kdWN0LXJhdGluZ3Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG4gICAgLm1haW4taW1nIHtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAjaW1hZ2Uge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5zdHlsZTkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC5tYWluLWltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAubWFpbi1pbWcge1xuICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cblxuICAgICNpbWFnZSB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5zdHlsZTEwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAubWFpbi1pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpb24tYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmNhdGVnb3J5IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLm1haW4taW1nIHtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAjaW1hZ2Uge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgaW9uLWdyaWQge1xuICAgICAgaW9uLXJvdyB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLnN0eWxlMTQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgaW5zICoge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICNpbWFnZSB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICBpb24tZ3JpZCB7XG4gICAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgLy9wYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLnN0eWxlNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICBpbnMgKiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI2ltYWdlIHtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIGlvbi1iYWRnZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICB9XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgfVxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLnN0eWxlMTMge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5mbG9hdGluZy10YWdzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIGlucyAqIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW5uZXJwcmljZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1haW4taW1nIHtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAjaW1hZ2Uge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAud29vY3NfcHJpY2VfY29kZSB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucGFkZGluZ2I1IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAuc3R5bGUxNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIGlucyAqIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAucmF0aW5nLWNvbHVtIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5tYWluLWltZyB7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgI2ltYWdlIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAuc3R5bGUxNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIC8vb3ZlcmZsb3c6IGF1dG87XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGlvbi1ncmlkIHtcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG4gICAgICB3aWR0aDogOTIlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIGlucyAqIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJvZHVjdC1yYXRpbmdzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLm1haW4taW1nIHtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuXG4gICAgI2ltYWdlIHtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5zdHlsZTE3IHtcbiAgICBpbnMgKiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgdG9wOiA1cHg7XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuICAgIGlvbi1ncmlkIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZjhjZTBiICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAuc3R5bGUxOSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgLmhlYXJ0LXRvcC1yaWdodCB7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZmxvYXRpbmctdGFncyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgaW9uLWJhZGdlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgc3R5bGUgNSAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLnN0eWxlNSB7XG4gICAgQGV4dGVuZCAuc3R5bGUyMTtcblxuICAgIC5uYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBzdHlsZSA2ICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAuc3R5bGUxMiB7XG4gICAgQGV4dGVuZCAuc3R5bGUyMTtcbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgIC5wcmljZSAqIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2FydC1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIH1cbiAgfVxuXG4gIC5zdHlsZTE4IHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgLmNhcnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnByaWNlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICB9XG4gIH1cblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIHN0eWxlIDcgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAuc3R5bGUyMCB7XG4gICAgLm1haW4taW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmJ1dHRvbnMtaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAgICNpbWFnZSB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBpb24tZ3JpZCB7XG4gICAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gY29tbW9uIGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAucHJvZHVjdC1yYXRpbmdzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgLnN0YXJzLW91dGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA2XFwyNjA2XFwyNjA2XFwyNjA2XFwyNjA2XCI7XG4gICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgfVxuICAgICAgLnN0YXJzLWlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA1XFwyNjA1XFwyNjA1XFwyNjA1XFwyNjA1XCI7XG4gICAgICAgICAgY29sb3I6ICNmOGNlMGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNhdGVnb3J5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuaGVhcnQtdG9wLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAubmFtZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAvL3ByaWNlXG4gIC5wcmljZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC53b29jc19wcmljZV9jb2RlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIGRlbCB7XG4gICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB9XG4gICAgfVxuICAgIGlucyB7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbS1iaWctYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLy9hZGQgdG8gY2FydCBoaWdobGlnaHRlclxuXG4gIC5jYXJkLWFkZC1jYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMTAlO1xuICAgICAgaGVpZ2h0OiAxMDIlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICB9XG5cblxufVxuW2Rpcj1cInJ0bFwiXSB7XG4gIGlvbi1jYXJkIHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW5zIHtcbiAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/components/product/product.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/product/product.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");








let ProductComponent = class ProductComponent {
    constructor(config, shared, navCtrl, modalCtrl, appEventsService, storage, loading) {
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.appEventsService = appEventsService;
        this.storage = storage;
        this.loading = loading;
        this.isLiked = 0;
        this.wishArray = [];
        this.cartQuantity = 0;
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
            if (p.quantity == 1) {
                this.removeCartItem(p.cart_id);
                this.cartQuantity = 0;
            }
        };
        let wishListUpdate = this.appEventsService.subscribe("wishListUpdate");
        wishListUpdate.subscriptions.add(wishListUpdate.event.subscribe(data => {
            if (data.id == this.p.id)
                this.isLiked = data.value;
        }));
        this.storage.get('wishListProducts').then((val) => {
            this.wishArray = val;
            this.checkWishList();
        });
    }
    checkWishList() {
        //getting wishList items from local storage
        let count = 0;
        if (this.wishArray != null)
            for (let value of this.wishArray) {
                if (value.id == this.p.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    }
    pDiscount() {
        if (!this.p.on_sale)
            return false;
        var rtn = "";
        var p1 = parseInt(this.p.regular_price);
        var p2 = parseInt(this.p.price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            return false;
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            return false;
        }
        rtn = result + '%';
        return rtn;
    }
    showProductDetail() {
        this.shared.singleProductPageData.push(this.p);
        this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + this.p.id);
        if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
        }
    }
    checkProductNew() {
        var pDate = new Date(this.p.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    }
    addToCart() {
        this.shared.addToCart(this.p, null, null, null);
        //this.navCtrl.push(CartPage); 
    }
    isInCart() {
        var found = false;
        for (let value of this.shared.cartProducts) {
            if (value.product_id == this.p.id) {
                found = true;
            }
        }
        if (found == true)
            return true;
        else
            return false;
    }
    removeRecent() {
        this.shared.removeRecent(this.p);
    }
    clickWishList() {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    }
    getProductImage() {
        if (this.p.images.length != 0)
            return this.p.images[0].src;
        else
            return "assets/woocommerce-placeholder.png";
    }
    getHeartName() {
        if (this.isLiked == 0)
            return "heart-outline";
        else
            return "heart";
    }
    removeProduct(type) {
        if (type == "recent") {
            this.removeRecent();
        }
        else if (type == "wishList") {
            this.removeWishList();
        }
    }
    getButtonText() {
        let r = "";
        if (this.p.stock_status == 'instock' && this.p.type == 'simple')
            r = 'ADD TO CART';
        if (this.p.stock_status == 'instock' && this.p.type != 'simple')
            r = 'DETAILS';
        if (this.p.stock_status != 'instock')
            r = 'OUT OF STOCK';
        return r;
    }
    buttonClick() {
        if (this.getButtonText() == 'ADD TO CART')
            this.addToCart();
        if (this.getButtonText() == 'DETAILS')
            this.showProductDetail();
    }
    getButtonColor() {
        if (this.getButtonText() == 'ADD TO CART')
            return 'secondary';
        else if (this.getButtonText() == 'DETAILS')
            return 'secondary';
        else if (this.getButtonText() == 'OUT OF STOCK')
            return 'danger';
    }
    getCategoryName() {
        if (this.p.categories.length != 0)
            return this.p.categories[0].name;
    }
    addWishList() {
        this.shared.addWishList(this.p);
    }
    removeWishList() {
        this.shared.removeWishList(this.p);
    }
    ngOnInit() {
    }
    getRating() {
        return (this.p.average_rating / 0.05) + '%';
    }
    getParsedRating() {
        return parseInt(this.p.average_rating).toFixed(1);
    }
    ngDoCheck() {
        this.shared.cartProducts.forEach(element => {
            if (element.product_id == this.p.id) {
                this.cartQuantity = element.quantity;
            }
        });
    }
    addingToCart() {
        if (this.getButtonText() == "ADD TO CART") {
            if (this.cartQuantity == 0) {
                this.addToCart();
            }
            else {
                this.shared.cartProducts.forEach(element => {
                    if (element.product_id == this.p.id) {
                        this.qunatityPlus(element);
                    }
                });
            }
        }
        else {
            this.buttonClick();
        }
    }
    removingToCart() {
        this.shared.cartProducts.forEach(element => {
            if (element.product_id == this.p.id) {
                this.qunatityMinus(element);
            }
        });
    }
    removeCartItem(id) {
        this.shared.cartProducts.forEach((value, index) => {
            if (value.cart_id == id) {
                this.shared.cartProducts.splice(index, 1);
                console.log("removing" + id);
            }
        });
        this.shared.removeCart(this.shared.cartProducts);
    }
    updateCart() {
        this.shared.removeCart(this.shared.cartProducts);
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_7__["AppEventsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "p", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "type", void 0);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/components/product/product.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_7__["AppEventsService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
], ProductComponent);



/***/ }),

/***/ "./src/components/scrolling-featured-products/scrolling-featured-products.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/components/scrolling-featured-products/scrolling-featured-products.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Njcm9sbGluZy1mZWF0dXJlZC1wcm9kdWN0cy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcY29tcG9uZW50c1xcc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzXFxzY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9zY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSIsImlvbi1ncmlkIGlvbi1yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/components/scrolling-featured-products/scrolling-featured-products.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/components/scrolling-featured-products/scrolling-featured-products.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ScrollingFeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingFeaturedProductsComponent", function() { return ScrollingFeaturedProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ScrollingFeaturedProductsComponent = class ScrollingFeaturedProductsComponent {
    constructor(config, shared) {
        this.config = config;
        this.shared = shared;
        // For products
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
    }
    getProducts() {
        if (this.loadingServerData)
            return 0;
        if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
        }
        this.loadingServerData = true;
        let query = 'products?' + 'page=' + this.page;
        if (this.selected != '')
            query = 'products?page=' + this.page;
        query = query + "&status=publish" + "&" + this.config.productsArguments;
        this.config.getWoo(query).then((data) => {
            let dat = data;
            this.infinite.disabled = false;
            if (this.page == 1) {
                this.products = new Array;
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.products.push(value);
                }
            }
            if (dat.length == 0) {
                this.infinite.disabled = true;
            }
            this.loadingServerData = false;
        });
    }
    ngOnInit() {
        this.getProducts();
    }
};
ScrollingFeaturedProductsComponent.ctorParameters = () => [
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], ScrollingFeaturedProductsComponent.prototype, "infinite", void 0);
ScrollingFeaturedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scrolling-featured-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scrolling-featured-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scrolling-featured-products.component.scss */ "./src/components/scrolling-featured-products/scrolling-featured-products.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])
], ScrollingFeaturedProductsComponent);



/***/ }),

/***/ "./src/components/share/share.module.ts":
/*!**********************************************!*\
  !*** ./src/components/share/share.module.ts ***!
  \**********************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner/banner.component */ "./src/components/banner/banner.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product.component */ "./src/components/product/product.component.ts");
/* harmony import */ var _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor-list/vendor-list.component */ "./src/components/vendor-list/vendor-list.component.ts");
/* harmony import */ var _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sliding-tabs/sliding-tabs.component */ "./src/components/sliding-tabs/sliding-tabs.component.ts");
/* harmony import */ var _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scrolling-featured-products/scrolling-featured-products.component */ "./src/components/scrolling-featured-products/scrolling-featured-products.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../categories/categories.component */ "./src/components/categories/categories.component.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");





//for home banner

//for home footer segment
// for product

//for vendor list

//for sliding tab

//for featrued product scrolling

//for categories


let ShareModule = class ShareModule {
};
ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
            _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__["VendorListComponent"],
            _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__["SlidingTabsComponent"],
            _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__["ScrollingFeaturedProductsComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]
        ],
        exports: [
            _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
            _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__["VendorListComponent"],
            _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__["SlidingTabsComponent"],
            _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__["ScrollingFeaturedProductsComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
        ],
    })
], ShareModule);



/***/ }),

/***/ "./src/components/sliding-tabs/sliding-tabs.component.scss":
/*!*****************************************************************!*\
  !*** ./src/components/sliding-tabs/sliding-tabs.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sliding-tabs .first-slide {\n  width: 80px !important;\n}\n.sliding-tabs ion-slides {\n  background-color: var(--ion-background-color);\n}\n.sliding-tabs ion-slides ion-slide {\n  height: auto;\n  display: inline-grid;\n  text-align: center;\n  width: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 12px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: transparent;\n  color: var(--ion-text-color);\n  text-transform: uppercase;\n  min-height: 56px;\n}\n.sliding-tabs ion-slides ion-slide img {\n  width: 32px;\n  height: 36px;\n  padding: 6px;\n  margin: auto;\n}\n.sliding-tabs ion-slides .selected {\n  border-bottom-color: var(--ion-primary-color);\n  background-color: var(accent-color);\n}\n.sliding-tabs ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRpbmctdGFicy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcY29tcG9uZW50c1xcc2xpZGluZy10YWJzXFxzbGlkaW5nLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9zbGlkaW5nLXRhYnMvc2xpZGluZy10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7QUNBUjtBREVJO0VBQ0ksNkNBQUE7QUNBUjtBRENRO0VBT0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNMWjtBRGhCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNrQmhCO0FEQ1E7RUFDSSw2Q0FBQTtFQUNBLG1DQUFBO0FDQ1o7QURJUTtFQUNJLGtCQUFBO0FDRloiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGluZy10YWJzL3NsaWRpbmctdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkaW5nLXRhYnMge1xyXG4gICAgLmZpcnN0LXNsaWRlIHtcclxuICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWlvbi1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKGFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuc2xpZGluZy10YWJzIC5maXJzdC1zbGlkZSB7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG4uc2xpZGluZy10YWJzIGlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG4uc2xpZGluZy10YWJzIGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtaW4taGVpZ2h0OiA1NnB4O1xufVxuLnNsaWRpbmctdGFicyBpb24tc2xpZGVzIGlvbi1zbGlkZSBpbWcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zbGlkaW5nLXRhYnMgaW9uLXNsaWRlcyAuc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tcHJpbWFyeS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcihhY2NlbnQtY29sb3IpO1xufVxuLnNsaWRpbmctdGFicyBpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/components/sliding-tabs/sliding-tabs.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/sliding-tabs/sliding-tabs.component.ts ***!
  \***************************************************************/
/*! exports provided: SlidingTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingTabsComponent", function() { return SlidingTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");






let SlidingTabsComponent = class SlidingTabsComponent {
    constructor(shared, config, loading, applicationRef) {
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.sliderConfig = {
            slidesPerView: "auto"
        };
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '0';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
    }
    getProducts(infiniteScroll) {
        if (this.loadingServerData)
            return 0;
        if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
        }
        this.loadingServerData = true;
        let query = 'products?' + 'page=' + this.page;
        if (this.selected != '0')
            query = 'products?category=' + this.selected + '&page=' + this.page;
        query = query + "&status=publish" + "&" + this.config.productsArguments;
        if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
        }
        this.config.getWoo(query).then((data) => {
            let dat = data;
            this.infinite.complete();
            if (this.page == 1) {
                this.products = new Array;
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.products.push(value);
                }
            }
            if (dat.length < 10) {
                this.infinite.disabled = true;
            }
            this.loadingServerData = false;
            this.applicationRef.tick();
        });
    }
    //changing tab
    changeTab(c) {
        this.infinite.disabled = false;
        this.page = 1;
        if (c == '0')
            this.selected = c;
        else
            this.selected = c.id;
        this.getProducts(null);
        //this.loading.autoHide(700);
    }
    ngOnInit() {
        this.getProducts(null);
    }
};
SlidingTabsComponent.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SlidingTabsComponent.prototype, "infinite", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SlidingTabsComponent.prototype, "type", void 0);
SlidingTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sliding-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sliding-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sliding-tabs.component.scss */ "./src/components/sliding-tabs/sliding-tabs.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], SlidingTabsComponent);



/***/ }),

/***/ "./src/components/vendor-list/vendor-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/vendor-list/vendor-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide {\n  width: 40%;\n}\n\nion-card {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n\nion-card ion-img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n}\n\nion-card p {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  color: black;\n}\n\nion-card {\n  width: 100%;\n}\n\nion-skeleton-text {\n  height: 80px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3ZlbmRvci1saXN0L0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxjb21wb25lbnRzXFx2ZW5kb3ItbGlzdFxcdmVuZG9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURBRTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItc2xpZGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBpb24taW1nIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1za2VsZXRvbi10ZXh0IHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuIiwiLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5pb24tY2FyZCBpb24taW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5pb24tY2FyZCBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/components/vendor-list/vendor-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/vendor-list/vendor-list.component.ts ***!
  \*************************************************************/
/*! exports provided: VendorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorListComponent", function() { return VendorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let VendorListComponent = class VendorListComponent {
    constructor(navCtrl, config, shared, loading, http, applicationRef) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef;
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0
        };
    }
    openVendorPage(c) {
        if (this.config.showVendorInfo) {
            this.loading.show();
            this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + c.user_id).then((data) => {
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
        else if (this.config.showWcVendorInfo) {
            //this.loading.show();
            this.shared.storePageData.push(c);
            console.log(this.shared.storePageData);
            let id;
            if (c.ID)
                id = c.ID;
            if (c.id)
                id = c.id;
            if (c.user_id)
                id = c.user_id;
            this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);
            // this.http.get(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + c.user_id).map(res => res.json()).subscribe(data => {
            //   this.loading.hide();
            //   this.applicationRef.tick();
            // });
        }
    }
    ngOnInit() { }
};
VendorListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
VendorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-list.component.scss */ "./src/components/vendor-list/vendor-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], VendorListComponent);



/***/ })

}]);
//# sourceMappingURL=default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32-es2015.js.map