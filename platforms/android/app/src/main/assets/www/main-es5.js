function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./about-us/about-us.module": ["./src/app/about-us/about-us.module.ts", "about-us-about-us-module"],
      "./add-review/add-review.module": ["./src/app/add-review/add-review.module.ts", "add-review-add-review-module"],
      "./address-pages/addresses/addresses.module": ["./src/app/address-pages/addresses/addresses.module.ts", "address-pages-addresses-addresses-module"],
      "./address-pages/billing-address/billing-address.module": ["./src/app/address-pages/billing-address/billing-address.module.ts", "address-pages-billing-address-billing-address-module"],
      "./address-pages/shipping-address/shipping-address.module": ["./src/app/address-pages/shipping-address/shipping-address.module.ts", "address-pages-shipping-address-shipping-address-module"],
      "./cart/cart.module": ["./src/app/cart/cart.module.ts", "default~cart-cart-module~order-order-module", "cart-cart-module"],
      "./categorie-pages/categories/categories.module": ["./src/app/categorie-pages/categories/categories.module.ts", "categorie-pages-categories-categories-module"],
      "./categorie-pages/categories2/categories2.module": ["./src/app/categorie-pages/categories2/categories2.module.ts", "categorie-pages-categories2-categories2-module"],
      "./categorie-pages/categories3/categories3.module": ["./src/app/categorie-pages/categories3/categories3.module.ts", "categorie-pages-categories3-categories3-module"],
      "./categorie-pages/categories4/categories4.module": ["./src/app/categorie-pages/categories4/categories4.module.ts", "categorie-pages-categories4-categories4-module"],
      "./categorie-pages/categories5/categories5.module": ["./src/app/categorie-pages/categories5/categories5.module.ts", "categorie-pages-categories5-categories5-module"],
      "./categorie-pages/categories6/categories6.module": ["./src/app/categorie-pages/categories6/categories6.module.ts", "categorie-pages-categories6-categories6-module"],
      "./contact-us/contact-us.module": ["./src/app/contact-us/contact-us.module.ts", "contact-us-contact-us-module"],
      "./downloads/downloads.module": ["./src/app/downloads/downloads.module.ts", "downloads-downloads-module"],
      "./home-pages/home/home.module": ["./src/app/home-pages/home/home.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home-home-module"],
      "./home-pages/home10/home10.module": ["./src/app/home-pages/home10/home10.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home10-home10-module"],
      "./home-pages/home2/home2.module": ["./src/app/home-pages/home2/home2.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home2-home2-module"],
      "./home-pages/home3/home3.module": ["./src/app/home-pages/home3/home3.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home3-home3-module"],
      "./home-pages/home4/home4.module": ["./src/app/home-pages/home4/home4.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home4-home4-module"],
      "./home-pages/home5/home5.module": ["./src/app/home-pages/home5/home5.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home5-home5-module"],
      "./home-pages/home6/home6.module": ["./src/app/home-pages/home6/home6.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home6-home6-module"],
      "./home-pages/home7/home7.module": ["./src/app/home-pages/home7/home7.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home7-home7-module"],
      "./home-pages/home8/home8.module": ["./src/app/home-pages/home8/home8.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home8-home8-module"],
      "./home-pages/home9/home9.module": ["./src/app/home-pages/home9/home9.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home9-home9-module"],
      "./intro/intro.module": ["./src/app/intro/intro.module.ts", "intro-intro-module"],
      "./my-account/my-account.module": ["./src/app/my-account/my-account.module.ts", "my-account-my-account-module"],
      "./my-order-detail/my-order-detail.module": ["./src/app/my-order-detail/my-order-detail.module.ts", "my-order-detail-my-order-detail-module"],
      "./my-orders/my-orders.module": ["./src/app/my-orders/my-orders.module.ts", "my-orders-my-orders-module"],
      "./news-detail/news-detail.module": ["./src/app/news-detail/news-detail.module.ts", "news-detail-news-detail-module"],
      "./news-list/news-list.module": ["./src/app/news-list/news-list.module.ts", "news-list-news-list-module"],
      "./news/news.module": ["./src/app/news/news.module.ts", "news-news-module"],
      "./notifications/notifications.module": ["./src/app/notifications/notifications.module.ts", "notifications-notifications-module"],
      "./order/order.module": ["./src/app/order/order.module.ts", "default~cart-cart-module~order-order-module", "order-order-module"],
      "./product-detail/product-detail.module": ["./src/app/product-detail/product-detail.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "product-detail-product-detail-module"],
      "./products/products.module": ["./src/app/products/products.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "products-products-module"],
      "./reviews/reviews.module": ["./src/app/reviews/reviews.module.ts", "reviews-reviews-module"],
      "./reward-points/reward-points.module": ["./src/app/reward-points/reward-points.module.ts", "reward-points-reward-points-module"],
      "./search/search.module": ["./src/app/search/search.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "search-search-module"],
      "./settings/settings.module": ["./src/app/settings/settings.module.ts", "settings-settings-module"],
      "./shipping-method/shipping-method.module": ["./src/app/shipping-method/shipping-method.module.ts", "shipping-method-shipping-method-module"],
      "./store/store.module": ["./src/app/store/store.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "store-store-module"],
      "./thank-you/thank-you.module": ["./src/app/thank-you/thank-you.module.ts", "thank-you-thank-you-module"],
      "./wish-list/wish-list.module": ["./src/app/wish-list/wish-list.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "wish-list-wish-list-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app [class.green-theme]=\"config.appTheme=='green'\" [class.plum-theme]=\"config.appTheme=='plum'\"\n  [class.magnesium-theme]=\"config.appTheme=='magnesium'\" [class.salmon-theme]=\"config.appTheme=='salmon'\"\n  [class.blue-theme]=\"config.appTheme=='blue'\" [class.pink-theme]=\"config.appTheme=='pink'\"\n  [class.orange-theme]=\"config.appTheme=='orange'\" [class.maroon-theme]=\"config.appTheme=='maroon'\"\n  [class.cayanne-theme]=\"config.appTheme=='cayanne'\" [class.red-theme]=\"config.appTheme=='red'\"\n  [class.sea-theme]=\"config.appTheme=='sea'\" [class.sky-theme]=\"config.appTheme=='sky'\"\n  [class.grape-theme]=\"config.appTheme=='grape'\" [class.dark-theme]=\"config.darkMode==true\"\n  [class.light-theme]=\"config.darkMode==false\" [class.default-theme]=\"config.appTheme=='default'\"\n  [class.white-theme]=\"config.appTheme=='white'\"\n  [class.black-theme]=\"config.appTheme=='black'\"\n\n  [class.theme15]=\"config.appTheme=='theme15'\"\n  [class.theme16]=\"config.appTheme=='theme16'\"\n  [class.theme17]=\"config.appTheme=='theme17'\"\n  [class.theme18]=\"config.appTheme=='theme18'\"\n\n  [class.light-mode-plus-white-theme]=\"config.appTheme=='white' && config.darkMode==false\"\n  [class.dark-mode-plus-white-theme]=\"config.appTheme=='white' && config.darkMode==true\"\n  [class.light-mode-plus-black-theme]=\"config.appTheme=='default' && config.darkMode==false\"\n  [class.dark-mode-plus-black-theme]=\"config.appTheme=='default' && config.darkMode==true\"\n  class=\"copyPrimaryToSecondary\">\n\n\n\n  <ion-split-pane contentId=\"main-content\" content=\"main-content\">\n    <ion-menu type=\"overlay\" *ngIf=\"!config.appNavigationTabs\" contentId=\"main-content\" content=\"main-content\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>{{ 'Menu' | translate:appPages }}</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openCurrencyPage()\" *ngIf=\"config.multiCurrency\">\n              <ion-icon slot=\"icon-only\" name=\"logo-usd\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" (click)=\"openLanguagePage()\" *ngIf=\"config.multiLanguage\">\n              <ion-icon name=\"globe\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list class=\"ion-no-padding\">\n          <ion-item lines=\"none\" *ngIf=\"shared.customerData.id==null\" (click)=\"openLoginPage()\">\n            <img id=backimage src=\"assets/icons_stripe.svg\">\n            <div></div>\n            <ion-item lines=\"none\">\n              <ion-avatar>\n                <img src=\"assets/avatar.png\" />\n              </ion-avatar>\n              <ion-label class=\"ion-padding\">\n                <h2>{{ 'Login & Register' | translate:appPages }}</h2>\n                <p>{{ 'Please login or create an account for free' | translate:appPages }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-item>\n\n          <ion-item lines=\"none\" *ngIf=\"shared.customerData.id!=null\" (click)=\"openPage('/settings')\">\n            <img id=backimage src=\"assets/icons_stripe.svg\">\n            <div></div>\n            <ion-item lines=\"none\">\n              <ion-avatar class=\"nameTextAvatar\">\n                <ion-fab-button id=\"nametext\">{{getNameFirstLetter()}}</ion-fab-button>\n              </ion-avatar>\n              <ion-label class=\"ion-padding\">\n                <h2>{{shared.customerData.first_name +\"&nbsp;\"+shared.customerData.last_name}}</h2>\n                <p>{{shared.customerData.email}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-item>\n\n          <ion-item lines=\"none\" *ngFor=\"let p of appPages\" class=\"ion-no-padding\">\n            <ion-grid class=\"ion-no-padding\">\n              <ion-row class=\"ion-no-padding\" (click)=\"openPage(p.url)\" *ngIf=\"!p.items\">\n                <ion-col class=\"ion-align-self-center\" size=\"2\">\n                  <img *ngIf=\"showImg()\" src=\"{{p.img}}\">\n                  <ion-icon *ngIf=\"!showImg()\" name=\"{{p.icon}}\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"col-text\" class=\"ion-align-self-center\" size=\"8\">\n                  <p>\n                    {{p.name | translate}}\n                  </p>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-no-padding\" *ngIf=\"p.items\" (click)=\"expandItem(p)\">\n                <ion-col class=\"ion-align-self-center\" size=\"2\">\n                  <img *ngIf=\"showImg()\" src=\"{{p.img}}\">\n                  <ion-icon *ngIf=\"!showImg()\" name=\"{{p.icon}}\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"col-text\" class=\"ion-align-self-center\" size=\"8\">\n                  <p>\n                    {{p.name | translate}}\n                  </p>\n                </ion-col>\n                <ion-col class=\"ion-align-self-center\" size=\"2\">\n                  <ion-icon name=\"add\" *ngIf=\"!p.expanded\"></ion-icon>\n                  <ion-icon name=\"remove\" *ngIf=\"p.expanded\"></ion-icon>\n                </ion-col>\n              </ion-row>\n              <app-menu-component expandHeight=\"700px\" *ngIf=\"p.items\" [expanded]=\"p.expanded\" class=\"ion-no-padding\">\n                <ion-item class=\"item-inner-list\" lines=\"full\" *ngFor=\"let list of p.items;\"\n                  (click)=\"openPage(list.url)\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"ion-align-self-center\" size=\"2\">\n                        <ion-icon name=\"remove\"></ion-icon>\n                      </ion-col>\n                      <ion-col class=\"ion-align-self-center\">\n                        <p><span *ngIf=\"p.name!='Shop'\">{{p.name | translate}} - </span> {{list.name| translate}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n              </app-menu-component>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n  <ion-fab class=\"ion-padding-start\" vertical=\"bottom\" horizontal=\"top\" *ngIf=\"!config.appInProduction\"\n    [class.margin50bottom]=\"config.appNavigationTabs\">\n    <ion-fab-button (click)=\"openDemoSettings()\" class=\"rotation-animation\">\n      <ion-icon name=\"settings\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsBlankModalBlankModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"dismiss()\">\r\n          <ion-icon name=\"close\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>JUMP</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fullscreen>\r\n    <ion-card>\r\n      <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/10/IMG_20200912_132010_3441869.jpg\" />\r\n      <ion-card-header>\r\n        <ion-card-title>JUMP BY RDB</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        JUMP BY RITMO DO BRAZIL Nasce da un???idea di Andr?? Cruz (Brazuca Fitness Creator e Gabriela Gonzalez in \r\n        collaborazione con Tiago da Silva (Sambafit Official Creator) JUMP by Ritmo do Brazil ?? l' evoluzione di \r\n        Brazuca Jump. Jump by ritmo do Brazil ?? un programma di allenamento nato per sfruttare al meglio le potenzialit?? \r\n        che l'attrezzo trampolino elastico pu?? dare. Mediante L'utilizzo di questo fantastico attrezzo , \r\n        l'allenamento diventa di tipo aerobico , ad alto impatto e di resistenza muscolare. Jump by ritmo do Brazil \r\n        utilizza musiche e ritmi brasiliani redendo la lezione innovativa , coinvolgente pi?? divertente ed adatta a tutti. \r\n        La struttura della lezione si basa sul metodo pre-coreografato che garantisce agli istruttori ed all'utente finale \r\n        una maggior padronanza del proprio corpo e di conseguenza del proprio allenamento. Adatto ad ogni tipologia di \r\n        clientela. Ritmo do brazil nasce dalla collaborazione tra Andr?? Cruz (Brazuca fitness) e Tiago Da Silva \r\n        (sambafit official) creando cos?? un format esplosivo e unico che porta agli appassionati della danza e del \r\n        fitness il meglio della cultura brasiliana senza perdere di vista le caratteristiche di queste due dicipline \r\n        tra le piu note e quotate nel mondo del fitness internazionale.\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsCurrencyListCurrencyListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{\"Select Currency\"|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"currency\" (ionChange)=\"updateCurrency($event)\">\n      <ion-item *ngFor=\"let v of currencyList\">\n        <ion-label>{{v.name}}</ion-label>\n        <ion-radio [value]=\"v\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/demo-settings/demo-settings.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/demo-settings/demo-settings.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsDemoSettingsDemoSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"demo-settings\">\n\n  <ion-list-header color=\"medium\" class=\"ion-margin-vertical\">\n    <ion-label>Change App Theme</ion-label>\n  </ion-list-header>\n  <ion-card class=\"ion-no-margin ion-margin-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=auto *ngFor=\"let c of colors;\" (click)=\"changeAppTheme(c.name)\">\n          <ion-icon name=\"square\" style.color=\"{{c.value}}\" class=\"color-box\">\n          </ion-icon>\n          <ion-icon class=\"icon-checked\" *ngIf=\"c.name==config.appTheme\" name=\"checkmark-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n\n  <ion-list-header color=\"medium\" class=\"ion-margin-vertical\">\n    <ion-label>Choose Color Mode</ion-label>\n  </ion-list-header>\n\n  <ion-item lines=none>\n\n    <ion-segment (ionChange)=\"modeChange()\" mode=\"ios\" [value]=\"themeMode\" [(ngModel)]=\"themeMode\">\n      <ion-segment-button value=\"dark\" class=\"ion-padding\">\n        <ion-icon name=\"color-palette-outline\"></ion-icon>\n        <ion-label>Dark Mode</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"light\" class=\"ion-padding\">\n        <ion-icon name=\"color-palette-outline\"></ion-icon>\n        <ion-label>Light Mode</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-item>\n\n\n  <ion-list-header color=\"medium\" class=\"ion-margin-vertical\">\n    <ion-label>Navigation</ion-label>\n  </ion-list-header>\n\n  <ion-item lines=none>\n\n    <ion-segment (ionChange)=\"navigationChange()\" mode=\"ios\" [value]=\"navigation\" [(ngModel)]=\"navigation\">\n      <ion-segment-button value=\"bottom\" class=\"ion-padding\">\n        <ion-icon name=\"navigate\"></ion-icon>\n        <ion-label>Bottom Navigation</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"left\" class=\"ion-padding\">\n        <ion-icon name=\"navigate\"></ion-icon>\n        <ion-label>Left Navigation</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-item>\n\n\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Multi Language\n    </ion-label>\n  </ion-item>\n\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"language\" (ionChange)=\"updateLanguage()\" mode=ios>\n      <ion-card *ngFor=\"let v of languageList\" class=\"ion-no-margin ion-margin-top ion-margin-horizontal\">\n        <ion-item lines=none>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{v.image}}\">\n          </ion-avatar>\n          <ion-label>{{v.name}}</ion-label>\n          <ion-radio [value]=\"v\"></ion-radio>\n        </ion-item>\n      </ion-card>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Multi Currency\n    </ion-label>\n    <ion-spinner *ngIf=\"loaderCurrecny\"></ion-spinner>\n  </ion-item>\n\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"currency\" mode=ios>\n      <ion-card *ngFor=\"let v of currencyList\" class=\"ion-no-margin ion-margin-top ion-margin-horizontal\">\n        <ion-item lines=none (click)=\"updateCurrency()\">\n          <ion-label>{{v.name}}</ion-label>\n          <ion-radio [value]=\"v\"></ion-radio>\n        </ion-item>\n      </ion-card>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Banner Style\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-row class=\"ion-no-padding product-cards ion-text-center\">\n      <ion-col (click)=\"setBannerStyle(p)\" *ngFor=\"let p of [1,2,3,4,5,6]\" class=\"ion-no-padding\"\n        (click)=\"setCardStyle(p)\" size=\"12\">\n        <img src=\"assets/banners/{{p}}.png\">\n\n        <ion-row class=\"selected-card\" *ngIf=\"p==config.appSettings.banner_style\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Product Card Styles\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-row class=\"ion-no-padding product-cards ion-text-center\">\n      <ion-col *ngFor=\"let p of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\" size=\"6\"\n        class=\"ion-no-padding\" (click)=\"setCardStyle(p)\">\n        <img src=\"assets/card-style/rcard{{p}}.png\">\n\n        <ion-row class=\"selected-card\" *ngIf=\"p==config.productCardStyle\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Forgot Password'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-img src=\"assets/icons_stripe.svg\"></ion-img>\n\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"forgetPassword()\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" name=\"customers_email_address\" [(ngModel)]=\"formData.customers_email_address\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Send'|translate}}\n    </ion-button>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsLanguageLanguagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Select Language'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"language\" (ionChange)=\"updateLanguage($event)\">\n      <ion-item *ngFor=\"let v of languageList\">\n        <ion-img src=\"{{v.image}}\" slot=\"start\"></ion-img>\n        <ion-label>{{v.name}}</ion-label>\n        <ion-radio [value]=\"v\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-no-padding\">{{'Login'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" class=\"sfondologin\">\n  <ion-img src=\"assets/logo_stripe_une.png\"></ion-img>\n\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"login()\">\n    <ion-item style=\"border: 1px; border-radius: 15px;margin: 5px;\">\n      <ion-label position=\"floating\">{{'Email or Username'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"formData.username\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item  style=\"border: 1px; border-radius: 15px; margin: 5px;\" >\n      <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n        <ion-input  [type]=\"getType()\" type=\"password\" name=\"password\" [(ngModel)]=\"formData.password\" required>\n        </ion-input>\n    </ion-item>\n    <ion-button style=\"align-items: center;\" size=\"small\" item-right (click)=\"toggleTextPassword()\"> Mostra Password</ion-button>\n\n    <ion-item lines=\"none\" *ngIf=\"errorMessage!=''\">\n      <ion-label>\n        {{errorMessage| translate}}\n        \n      </ion-label>\n    </ion-item>\n\n\n    <ion-button style=\"border: 1px; border-radius: 15px;\" [disabled]=\"!loginForm.form.valid\" color=\"secondary\" expand=\"full\" type=\"submit\" (click)=\"countup()\">\n      {{ 'Login' | translate }}\n      \n    </ion-button>\n     <p style=\"font-size: 14px;\">Tentativi rimasti {{count}}</p>\n  </form>\n\n  <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" (click)=\"openForgetPasswordPage()\">{{ \"Hai dimenticato la Password?\" | translate }}</ion-button>\n\n\n  <ion-button expand=\"block\" *ngIf=\"config.guestCheckOut && hideGuestLogin\" [disabled]=\"shared.cartProducts.length==0\"\n    (click)=\"guestLogin()\">\n    {{'Continue as a Guest'|translate}}</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsPrivacyPolicyPrivacyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'ANDRE CRUZ'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/IMG_7353.jpg\" />\n    <ion-card-header>\n      <ion-card-subtitle>ANDRE CRUZ</ion-card-subtitle>\n      <ion-card-title>BRAZUCA FITNESS CREATOR</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Brazuca significa ?? Brasileiro ?? cio?? BRASILIANO; questa attivit?? nasce da un???idea \n      di Andr?? Cruz, nato a Brasilia nel 1979. Andr?? inizia a danzare all???et?? di 14 anni e nel 2000, \n      dopo aver preso accordi con il circo Lidia Togni, inizia la sua carriera di \n      coreografo e primo ballerino per il gruppo di danza del circo stesso.\n      Continua come istruttore e coreografo presso alcune palestre e villaggi in \n      Sicilia e inizia a creare alcune discipline tra le quali Lambax?? e \n      Tribal-Gym che presenter?? sul palco Crunch al festival de fitness di Firenze nel 2006.\n      Entra nel circuito del Fitness internazionale, partecipando ad importanti convention \n      ed eventi fitness in Italia ed in Europa come Rimini Wellness e Fibo (Germania).\n      La passione per la musica porta Andr?? ad incidere alcuni brani musicali come:\n      <ul>\n        <li>Princesa do Brasil</li>\n        <li>Sambatuca</li>\n        <li>Gatinha</li>\n        <li>Negao Marrento</li>\n        <li>Eu To Maluco</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsRefundPolicyRefundPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'TIAGO DA SILVA'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/IMG_7443.jpg\" />\n    <ion-card-header>\n      <ion-card-subtitle>TIAGO DA SILVA</ion-card-subtitle>\n      <ion-card-title>SAMBAFIT OFFICIAL CREATOR</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Sambafit Official ?? la novit?? del palcoscenico del fitness che sta conquistando tutte le palestre italiane \n      ed europee. Un???attivit?? energizzante e di grande impatto apprezzatissima dalle donne, che fonde il meglio del \n      cardio fitness con passi tecnici selezionati di danza brasiliana, estremamente sollecitanti per gambe addome e \n      glutei. Una miscela esplosiva con coreografie coinvolgenti e intuitive, per un metodo straordinariamente \n      efficace sotto il profilo del consumo calorico e della stimolazione muscolare, profonda e completa. \n      Ma preparatevi a risultati sorprendenti non solo sul lato B: l???energia di Sambafit contagia anche l???anima, \n      a partire dal sorriso! Divertenti, coinvolgenti e ad alto impatto, le lezioni di Sambafit sono aperte a tutti: \n      grazie alle classi di diverso livello e fasce d???eta (dai 5-7 ai 70 anni) possono essere svolte sia da chi si \n      avvicina al fitness per la prima volta, sia da chi pratica gi?? il Samba e vuole provare una nuova, \n      irresistibile attivit?? per tenersi in forma. Anche l???intensit?? delle lezioni ?? modulabile, consentendo un \n      training pi?? intenso quando si vuole spingere l???acceleratore sulla performance aerobica, ovvero pi?? misurato \n      e controllato, quando si persegue specificamente la stimolazione e tonificazione muscolare. \n      La fonte principale d???ispirazione delle lezioni ?? rappresentata dalle musiche brasiliane, con ritmi di samba \n      delle scuole pi?? importanti al mondo.\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/scratch-card/scratch-card.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/scratch-card/scratch-card.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsScratchCardScratchCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{'Scratch it'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-only fill=\"clear\" (click)=\"close()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"scratch-card-popup\">\n  <div id=\"js--sc--container\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSelectCountrySelectCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Select Country'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar (ionInput)=\"getItems($event)\" placeholder=\"{{'Search'|translate}}\" #Searchbar></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\" (click)=\"selectCountry(item)\">\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSelectZonesSelectZonesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Select Zone'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"page-select-zones\">\n  <ion-searchbar (ionInput)=\"getItems($event)\" placeholder=\"{{'Search'|translate}}\" autofocus></ion-searchbar>\n  <!-- <ion-item *ngFor=\"let item of items\" (click)=\"selectZone(item)\">\n      {{ item.name }}\n    </ion-item>\n    <ion-item (click)=\"selectZone('other')\" *ngIf=\"hideOther()\">\n      {{'other'|translate}}\n    </ion-item> -->\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\" (click)=\"selectZone(item)\">\n      {{ item.name }}\n    </ion-item>\n    <ion-item (click)=\"selectZone('other')\" *ngIf=\"hideOther()\">\n      {{'other'|translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Create an Account'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-avatar>\n    <ion-img src=\"assets/avatar.png\"></ion-img>\n  </ion-avatar>\n\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"createAccount()\">\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"customers_firstname\" [(ngModel)]=\"formData.first_name\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"customers_lastname\" [(ngModel)]=\"formData.last_name\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Username'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"formData.username\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" email name=\"email\" [(ngModel)]=\"formData.email\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n      <ion-input type=\"password\" name=\"c_d\" [(ngModel)]=\"formData.password\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n    <p>{{\"Creating an account means you???re okay with our\"|translate}}\n      <a (click)=\"openTermServicesPage()\">{{'Term and Services'|translate}}</a>,\n      <a (click)=\"openPrivacyPolicyPage()\">{{'Privacy Policy'|translate}}</a> {{'and'|translate}}\n      <a (click)=\"openRefundPolicyPage()\">{{'Refund Policy'|translate}}</a>\n    </p>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Register'|translate}}\n    </ion-button>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsTermServicesTermServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'RITMO DO BRAZIL'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/back.jpg\" />\n    <ion-card-header>\n      <ion-card-title>RITMO DO BRAZIL</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      RITMO DO BRAZIL ?? la fusione tra Brazuca Fitness ?? e Sambafit Official ??, due discipline brasiliane, \n      tanto diverse quanto complementari, tali da creare un mix esplosivo. Nasce dalla collaborazione tra \n      Andr?? Cruz (Brazuca Fitness Creator) e Tiago Da Silva (Sambafit Official Creator) creando cos?? un format \n      esplosivo e unico che porta agli appassionati della danza e del fitness il meglio della cultura brasiliana \n      senza perdere di vista le caratteristiche di queste due dicipline tra le piu note e quotate nel mondo del \n      fitness \n      internazionale.\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/menu-component/menu-component.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/menu-component/menu-component.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsMenuComponentMenuComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n    <ng-content></ng-content>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'intro',
      loadChildren: './intro/intro.module#IntroPageModule'
    }, {
      path: 'about-us',
      loadChildren: './about-us/about-us.module#AboutUsPageModule'
    }, {
      path: 'add-review/:id',
      loadChildren: './add-review/add-review.module#AddReviewPageModule'
    }, {
      path: 'cart',
      loadChildren: './cart/cart.module#CartPageModule'
    }, {
      path: 'contact-us',
      loadChildren: './contact-us/contact-us.module#ContactUsPageModule'
    }, {
      path: 'downloads',
      loadChildren: './downloads/downloads.module#DownloadsPageModule'
    }, {
      path: 'intro',
      loadChildren: './intro/intro.module#IntroPageModule'
    }, {
      path: 'my-account',
      loadChildren: './my-account/my-account.module#MyAccountPageModule'
    }, {
      path: 'my-orders',
      loadChildren: './my-orders/my-orders.module#MyOrdersPageModule'
    }, {
      path: 'news',
      loadChildren: './news/news.module#NewsPageModule'
    }, {
      path: 'news-detail',
      loadChildren: './news-detail/news-detail.module#NewsDetailPageModule'
    }, {
      path: 'news-list/:id/:name',
      loadChildren: './news-list/news-list.module#NewsListPageModule'
    }, {
      path: 'notifications',
      loadChildren: './notifications/notifications.module#NotificationsPageModule'
    }, {
      path: 'order',
      loadChildren: './order/order.module#OrderPageModule'
    }, {
      path: 'product-detail/:id',
      loadChildren: './product-detail/product-detail.module#ProductDetailPageModule'
    }, {
      path: 'products/:id/:name/:type',
      loadChildren: './products/products.module#ProductsPageModule'
    }, {
      path: 'reviews/:id',
      loadChildren: './reviews/reviews.module#ReviewsPageModule'
    }, {
      path: 'reward-points',
      loadChildren: './reward-points/reward-points.module#RewardPointsPageModule'
    }, {
      path: 'search',
      loadChildren: './search/search.module#SearchPageModule'
    }, {
      path: 'settings',
      loadChildren: './settings/settings.module#SettingsPageModule'
    }, {
      path: 'shipping-method',
      loadChildren: './shipping-method/shipping-method.module#ShippingMethodPageModule'
    }, {
      path: 'store/:id',
      loadChildren: './store/store.module#StorePageModule'
    }, {
      path: 'thank-you',
      loadChildren: './thank-you/thank-you.module#ThankYouPageModule'
    }, {
      path: 'wish-list',
      loadChildren: './wish-list/wish-list.module#WishListPageModule'
    }, {
      path: 'addresses',
      loadChildren: './address-pages/addresses/addresses.module#AddressesPageModule'
    }, {
      path: 'billing-address',
      loadChildren: './address-pages/billing-address/billing-address.module#BillingAddressPageModule'
    }, {
      path: 'shipping-address',
      loadChildren: './address-pages/shipping-address/shipping-address.module#ShippingAddressPageModule'
    }, {
      path: 'categories/:parent/:name',
      loadChildren: './categorie-pages/categories/categories.module#CategoriesPageModule'
    }, {
      path: 'categories2/:parent/:name',
      loadChildren: './categorie-pages/categories2/categories2.module#Categories2PageModule'
    }, {
      path: 'categories3/:parent/:name',
      loadChildren: './categorie-pages/categories3/categories3.module#Categories3PageModule'
    }, {
      path: 'categories4/:parent/:name',
      loadChildren: './categorie-pages/categories4/categories4.module#Categories4PageModule'
    }, {
      path: 'categories5/:parent/:name',
      loadChildren: './categorie-pages/categories5/categories5.module#Categories5PageModule'
    }, {
      path: 'categories6/:parent/:name',
      loadChildren: './categorie-pages/categories6/categories6.module#Categories6PageModule'
    }, {
      path: 'home',
      loadChildren: './home-pages/home/home.module#HomePageModule'
    }, {
      path: 'home2',
      loadChildren: './home-pages/home2/home2.module#Home2PageModule'
    }, {
      path: 'home3',
      loadChildren: './home-pages/home3/home3.module#Home3PageModule'
    }, {
      path: 'home4',
      loadChildren: './home-pages/home4/home4.module#Home4PageModule'
    }, {
      path: 'home5',
      loadChildren: './home-pages/home5/home5.module#Home5PageModule'
    }, {
      path: 'home6',
      loadChildren: './home-pages/home6/home6.module#Home6PageModule'
    }, {
      path: 'home7',
      loadChildren: './home-pages/home7/home7.module#Home7PageModule'
    }, {
      path: 'home8',
      loadChildren: './home-pages/home8/home8.module#Home8PageModule'
    }, {
      path: 'home9',
      loadChildren: './home-pages/home9/home9.module#Home9PageModule'
    }, {
      path: 'home10',
      loadChildren: './home-pages/home10/home10.module#Home10PageModule'
    }, {
      path: 'my-order-detail',
      loadChildren: './my-order-detail/my-order-detail.module#MyOrderDetailPageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .nameTextAvatar {\n  width: auto;\n  height: auto;\n}\nion-content ion-list ion-item {\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-menu-toggle {\n  width: 100%;\n}\nion-content ion-list ion-item:first-child {\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  height: 100px;\n}\nion-content ion-list ion-item:first-child #backimage {\n  position: fixed;\n  opacity: 0.3;\n}\nion-content ion-list ion-item:first-child div {\n  background: var(--ion-color-primary-shade);\n  width: 100%;\n  height: 100px;\n}\nion-content ion-list ion-item:first-child ion-item {\n  position: absolute;\n  --background: transparent;\n  --color: var(--ion-color-primary-contrast);\n}\nion-content ion-list ion-item:first-child ion-item ion-label h2 {\n  font-weight: bold;\n}\nion-content ion-list ion-item:first-child ion-item ion-label p {\n  color: var(--ion-color-primary-contrast);\n  white-space: normal;\n}\nion-content ion-list ion-item ion-grid ion-row {\n  border-bottom: solid var(--ion-color-light-shade);\n  border-width: 0.4px;\n  height: 47px;\n}\nion-content ion-list ion-item ion-grid ion-row ion-icon {\n  zoom: 1.2;\n}\nion-content ion-list ion-item ion-grid ion-row img {\n  max-width: 60%;\n}\nion-content ion-list ion-item ion-grid ion-row ion-col p {\n  margin-top: 6px !important;\n  margin-bottom: 8px !important;\n}\nion-content ion-list ion-item ion-grid ion-row ion-col:first-child {\n  text-align: center;\n}\n.item-inner-list {\n  height: 52px !important;\n  margin-left: -3px !important;\n  --inner-padding-end: 0 !important;\n  --padding-start: 0 !important;\n}\n.item-inner-list ion-row {\n  padding-left: 0 !important;\n}\n.item-inner-list:last-child {\n  border-bottom: none;\n}\n.col-text {\n  padding-left: 16px !important;\n}\n.primary-Color {\n  color: var(--ion-color-primary);\n  display: none;\n}\n#nametext {\n  font-size: 25px;\n  text-transform: capitalize;\n}\n.rotation-animation {\n  -webkit-animation-name: rotate;\n          animation-name: rotate;\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.margin50bottom {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0k7RUFDRSxzQkFBQTtBQ0ROO0FERU07RUFDRSxXQUFBO0FDQVI7QURFTTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ1Y7QURDUTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDVjtBRENRO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDQ1Y7QURDWTtFQUNFLGlCQUFBO0FDQ2Q7QURDWTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUNDZDtBREtRO0VBQ0UsaURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNIVjtBRElVO0VBQ0UsU0FBQTtBQ0ZaO0FESVU7RUFDRSxjQUFBO0FDRlo7QURLWTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUNIZDtBREtZO0VBQ0Usa0JBQUE7QUNIZDtBRFdBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7QUNSRjtBRFNFO0VBQ0UsMEJBQUE7QUNQSjtBRFNFO0VBQ0UsbUJBQUE7QUNQSjtBRFVBO0VBQ0UsNkJBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0FDUEY7QURTQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQ05GO0FEU0E7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDTkY7QURTQTtFQUNFO0lBQ0UsdUJBQUE7RUNORjtFRFFBO0lBQ0UseUJBQUE7RUNORjtBQUNGO0FEQUE7RUFDRTtJQUNFLHVCQUFBO0VDTkY7RURRQTtJQUNFLHlCQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0UsbUJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLm5hbWVUZXh0QXZhdGFyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICBpb24tbWVudS10b2dnbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICNiYWNraW1hZ2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgem9vbTogMS4yO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaXRlbS1pbm5lci1saXN0IHtcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufVxuLmNvbC10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmltYXJ5LUNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNuYW1ldGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5yb3RhdGlvbi1hbmltYXRpb24ge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5tYXJnaW41MGJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4iLCJpb24tY29udGVudCAubmFtZVRleHRBdmF0YXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLW1lbnUtdG9nZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkICNiYWNraW1hZ2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG9wYWNpdHk6IDAuMztcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIGRpdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCBpb24taXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tZ3JpZCBpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXdpZHRoOiAwLjRweDtcbiAgaGVpZ2h0OiA0N3B4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWdyaWQgaW9uLXJvdyBpb24taWNvbiB7XG4gIHpvb206IDEuMjtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1ncmlkIGlvbi1yb3cgaW1nIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgcCB7XG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0taW5uZXItbGlzdCB7XG4gIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTNweCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuLml0ZW0taW5uZXItbGlzdCBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1pbm5lci1saXN0Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29sLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnByaW1hcnktQ29sb3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbmFtZXRleHQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucm90YXRpb24tYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLm1hcmdpbjUwYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modals/login/login.page */
    "./src/app/modals/login/login.page.ts");
    /* harmony import */


    var _modals_sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modals/sign-up/sign-up.page */
    "./src/app/modals/sign-up/sign-up.page.ts");
    /* harmony import */


    var _modals_language_language_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modals/language/language.page */
    "./src/app/modals/language/language.page.ts");
    /* harmony import */


    var _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./modals/currency-list/currency-list.page */
    "./src/app/modals/currency-list/currency-list.page.ts");
    /* harmony import */


    var _modals_demo_settings_demo_settings_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./modals/demo-settings/demo-settings.page */
    "./src/app/modals/demo-settings/demo-settings.page.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(shared, config, router, navCtrl, platform, modalCtrl, statusBar, storage, network, loading, admobFree, appEventsService, plt, appVersion, iab, socialSharing, deeplinks, menuCtrl, zone, OneSignal) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.shared = shared;
        this.config = config;
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.storage = storage;
        this.network = network;
        this.loading = loading;
        this.admobFree = admobFree;
        this.appEventsService = appEventsService;
        this.plt = plt;
        this.appVersion = appVersion;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.deeplinks = deeplinks;
        this.menuCtrl = menuCtrl;
        this.zone = zone;
        this.OneSignal = OneSignal;
        this.isUserLoggedIn = false;
        this.rootPage = "Login";
        this.appPages = []; // For all pages

        this.a1 = [{
          name: 'Home',
          icon: 'home',
          url: 'home',
          login: true,
          img: 'assets/left-menu-icon/home.png',
          items: [{
            name: "1",
            url: '/home',
            login: true
          }, {
            name: "2",
            url: '/home2',
            login: true
          }, {
            name: "3",
            url: '/home3',
            login: true
          }, {
            name: "4",
            url: '/home4',
            login: true
          }, {
            name: "5",
            url: '/home5',
            login: true
          }, {
            name: "6",
            url: '/home6',
            login: true
          }, {
            name: "7",
            url: '/home7',
            login: true
          }, {
            name: "8",
            url: '/home8',
            login: true
          }, {
            name: "9",
            url: '/home9',
            login: true
          }, {
            name: "10",
            url: '/home10',
            login: true
          }],
          expanded: false
        }, {
          name: 'Categories',
          icon: 'apps',
          url: 'categories/0/0',
          img: 'assets/left-menu-icon/category.png',
          items: [{
            name: "1",
            url: '/categories/0/0'
          }, {
            name: "2",
            url: '/categories2/0/0'
          }, {
            name: "3",
            url: '/categories3/0/0'
          }, {
            name: "4",
            url: '/categories4/0/0'
          }, {
            name: "5",
            url: '/categories5/0/0'
          }, {
            name: "6",
            url: '/categories6/0/0'
          }],
          expanded: false
        }, {
          name: 'Shop',
          icon: 'cash',
          url: '/products/0/0/newest',
          img: 'assets/left-menu-icon/shop.png',
          items: [{
            name: "Newest",
            url: '/products/0/0/newest'
          }, {
            name: "On Sale",
            url: '/products/0/0/sale'
          }, {
            name: "Featured",
            url: '/products/0/0/featured'
          }],
          expanded: false
        }];
        this.a2 = [{
          name: 'Home',
          icon: 'home',
          url: 'home',
          login: true,
          img: 'assets/left-menu-icon/home.png'
        }, {
          name: 'Categories',
          icon: 'apps',
          url: 'categories',
          img: 'assets/left-menu-icon/category.png'
        }, {
          name: 'Shop',
          icon: 'cash',
          url: '/products',
          login: true,
          img: 'assets/left-menu-icon/shop.png',
          items: [{
            name: "Newest",
            url: '/products/0/0/newest'
          }, {
            name: "On Sale",
            url: '/products/0/0/sale'
          }, {
            name: "Featured",
            url: '/products/0/0/featured'
          }],
          expanded: false
        }];
        this.a3 = [{
          name: 'My Wish List',
          icon: 'heart',
          img: 'assets/left-menu-icon/wishlist.png',
          url: '/wish-list',
          value: 'wishListPage'
        }, {
          name: 'Contact Us',
          icon: 'call',
          img: 'assets/left-menu-icon/phone.png',
          url: '/contact-us',
          value: 'contactPage'
        }, {
          name: 'About Us',
          icon: 'information-circle',
          img: 'assets/left-menu-icon/about.png',
          url: '/about-us',
          value: 'aboutUsPage'
        }, {
          name: 'News',
          icon: 'newspaper',
          img: 'assets/left-menu-icon/news.png',
          url: '/news',
          value: 'newsPage'
        }, {
          name: 'Intro',
          icon: 'caret-forward',
          img: 'assets/left-menu-icon/intro.png',
          url: '/intro',
          value: 'introPage'
        }, {
          name: 'Share',
          icon: 'share',
          img: 'assets/left-menu-icon/share.png',
          url: 'share',
          value: 'sharePage'
        }, {
          name: 'Rate Us',
          icon: 'star-half',
          img: 'assets/left-menu-icon/rating.png',
          url: 'rateUs',
          value: 'ratePage'
        }, {
          name: 'Settings',
          icon: 'settings',
          img: 'assets/left-menu-icon/setting.png',
          url: '/settings',
          value: 'settingsPage'
        }];
        this.a4 = [{
          name: 'My Wish List',
          icon: 'heart',
          img: 'assets/left-menu-icon/wishlist.png',
          url: '/wish-list',
          value: 'wishListPage'
        }, {
          name: 'Edit Profile',
          icon: 'lock-closed',
          img: 'assets/left-menu-icon/locked.png',
          url: '/my-account',
          login: true,
          value: 'editPage'
        }, {
          name: 'Addresses',
          icon: 'home',
          img: 'assets/left-menu-icon/map.png',
          url: '/addresses',
          login: true,
          value: 'addressesPage'
        }, {
          name: 'Downloads',
          icon: 'download',
          img: 'assets/left-menu-icon/download.png',
          url: '/downloads',
          login: true,
          value: 'downloadsPage'
        }, {
          name: 'My Orders',
          icon: 'cart',
          img: 'assets/left-menu-icon/orders.png',
          url: '/my-orders',
          login: true,
          value: 'myOrdersPage'
        }, {
          name: 'Reward Points',
          img: 'assets/left-menu-icon/gift.png',
          icon: 'happy',
          url: '/reward-points',
          login: true,
          value: 'rewardPointsPage'
        }, {
          name: 'Scratch Cards',
          icon: 'notifications',
          img: 'assets/left-menu-icon/notifications.png',
          url: '/notifications',
          login: true,
          value: 'scratchCardPage'
        }, {
          name: 'Contact Us',
          icon: 'call',
          img: 'assets/left-menu-icon/phone.png',
          url: '/contact-us',
          value: 'contactPage'
        }, {
          name: 'About Us',
          icon: 'information-circle',
          img: 'assets/left-menu-icon/about.png',
          url: '/about-us',
          value: 'aboutUsPage'
        }, {
          name: 'News',
          icon: 'newspaper',
          img: 'assets/left-menu-icon/news.png',
          url: '/news',
          value: 'newsPage'
        }, {
          name: 'Intro',
          icon: 'caret-forward',
          img: 'assets/left-menu-icon/intro.png',
          login: true,
          url: '/intro',
          value: 'introPage'
        }, {
          name: 'Share',
          icon: 'share',
          img: 'assets/left-menu-icon/share.png',
          url: 'share',
          value: 'sharePage'
        }, {
          name: 'Rate Us',
          icon: 'star-half',
          img: 'assets/left-menu-icon/rating.png',
          url: 'rateUs',
          value: 'ratePage'
        }, {
          name: 'Settings',
          icon: 'settings',
          img: 'assets/left-menu-icon/setting.png',
          url: '/settings',
          value: 'settingsPage'
        }];
        this.link = "empty";
        this.deepUrl = "";
        this.initializeApp();
        var connectedToInternet = true;
        network.onDisconnect().subscribe(function () {
          connectedToInternet = false;

          _this2.shared.showAlertWithTitle("Please Connect to the Internet!", "Disconnected"); //  console.log('network was disconnected :-(');

        });
        network.onConnect().subscribe(function () {
          if (!connectedToInternet) {
            window.location.reload();

            _this2.shared.showAlertWithTitle("Network connected Reloading Data" + '...', "Connected");
          } //connectSubscription.unsubscribe();

        }); //this.platform.setDir(, true);

        document.documentElement.dir = this.config.appDirection;
        shared.dir = this.config.appDirection;
        var showAd = this.appEventsService.subscribe("showAd");
        showAd.subscriptions.add(showAd.event.subscribe(function (data) {
          _this2.showInterstitial();
        }));
        var openThankYouPage = this.appEventsService.subscribe("openThankYouPage");
        openThankYouPage.subscriptions.add(openThankYouPage.event.subscribe(function (data) {
          _this2.zone.run(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.navCtrl.navigateRoot("/thank-you");

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }));
        var openShippingAddressPage = this.appEventsService.subscribe("openShippingAddressPage");
        openShippingAddressPage.subscriptions.add(openShippingAddressPage.event.subscribe(function (data) {
          _this2.zone.run(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (config.appNavigationTabs) this.navCtrl.navigateForward("tabs/cart/shipping-address");else this.navCtrl.navigateForward("/shipping-address");

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }));
        var openDeepLink = this.appEventsService.subscribe("openDeepLink");
        openDeepLink.subscriptions.add(openDeepLink.event.subscribe(function (data) {
          _this2.naviagateDeeplink(data);
        }));
        var openCategoryPage = this.appEventsService.subscribe("openCategoryPage");
        openCategoryPage.subscriptions.add(openCategoryPage.event.subscribe(function (data) {
          _this2.openCategoryPage();
        }));
        var openHomePage = this.appEventsService.subscribe("openHomePage");
        openHomePage.subscriptions.add(openHomePage.event.subscribe(function (data) {
          _this2.zone.run(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.openHomePage();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }));
        var openSubcategoryPage = this.appEventsService.subscribe("openSubcategoryPage");
        openSubcategoryPage.subscriptions.add(openSubcategoryPage.event.subscribe(function (data) {
          _this2.openSubcategoryPage(data);
        }));
        var updateSideMenu = this.appEventsService.subscribe("updateSideMenu");
        updateSideMenu.subscriptions.add(updateSideMenu.event.subscribe(function (data) {
          _this2.getLeftItems();
        }));
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          var order;
          this.shared.myOrderDetialPageData = order;
          var currentUserId = localStorage.getItem('currentUserId');
          this.platform.ready().then(function () {
            //this.getStatusBarColor()
            _this3.shared.subscribePush();

            _this3.runAdmob();

            _this3.config.siteSetting().then(function (value) {
              _this3.openLoginPage();

              _this3.shared.getVendorList();

              _this3.getLeftItems();
            });

            if (_this3.platform.is('cordova')) {
              _this3.initializeDeepLinks();
            }
          });
        } // loading home page =========================================================================

      }, {
        key: "loadHomePage",
        value: function loadHomePage() {
          var _this4 = this;

          this.storage.get('firsttimeApp').then(function (val) {
            var value = val;
            if (_this4.config.showIntroPage == 0) value = 'firstTime';

            if (value == 'firstTime') {
              _this4.openHomePage();

              _this4.config.checkingNewSettingsFromServer();
            } else {
              _this4.navCtrl.navigateRoot("intro");
            }

            _this4.storage.set('firsttimeApp', 'firstTime');

            setTimeout(function () {
              _this4.appEventsService.publish("openDeepLink", "");
            }, 500);
          });
        } // starting admob =========================================================================

      }, {
        key: "runAdmob",
        value: function runAdmob() {
          if (this.plt.is('ios')) {
            if (this.config.admobIos == 1) this.initializeAdmob(this.config.admobBanneridIos, this.config.admobIntidIos);
            this.config.admob = this.config.admobIos;
            this.shared.device = 'ios';
          } else if (this.plt.is('android')) {
            if (this.config.admob == 1) this.initializeAdmob(this.config.admobBannerid, this.config.admobIntid);
            this.shared.device = 'android';
          }
        } // preparing admob =========================================================================

      }, {
        key: "initializeAdmob",
        value: function initializeAdmob(bannerId, intId) {
          if (this.platform.is('cordova')) {
            var bannerConfig = {
              id: bannerId,
              isTesting: false,
              autoShow: true
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare().then(function () {//alert("loaded" +bannerId);
              //this.admobFree.banner.show();
            })["catch"](function (e) {
              return console.log(e);
            });
            var interstitialConfig = {
              id: intId,
              isTesting: false,
              autoShow: false
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare();
          }
        } //=========================================================================

      }, {
        key: "showInterstitial",
        value: function showInterstitial() {
          if (this.platform.is('cordova')) {
            this.admobFree.interstitial.show(); //this.admobFree.interstitial.isReady().then(() => { });

            this.admobFree.interstitial.prepare();
          }
        } //=========================================================================

      }, {
        key: "openHomePage",
        value: function openHomePage() {
          if (this.config.appNavigationTabs) {
            if (this.config.homePage == 1) {
              this.navCtrl.navigateForward("/tabs/home");
            }

            if (this.config.homePage == 2) {
              this.navCtrl.navigateForward("/tabs/home2");
            }

            if (this.config.homePage == 3) {
              this.navCtrl.navigateForward("/tabs/home3");
            }

            if (this.config.homePage == 4) {
              this.navCtrl.navigateForward("/tabs/home4");
            }

            if (this.config.homePage == 5) {
              this.navCtrl.navigateForward("/tabs/home5");
            }

            if (this.config.homePage == 6) this.navCtrl.navigateForward("/tabs/home6");
            if (this.config.homePage == 7) this.navCtrl.navigateForward("/tabs/home7");
            if (this.config.homePage == 8) this.navCtrl.navigateForward("/tabs/home8");
            if (this.config.homePage == 9) this.navCtrl.navigateForward("/tabs/home9");
            if (this.config.homePage == 10) this.navCtrl.navigateForward("/tabs/home10");
          } else {
            if (this.config.homePage == 1) {
              this.navCtrl.navigateRoot("/home");
            }

            if (this.config.homePage == 2) {
              this.navCtrl.navigateRoot("/home2");
            }

            if (this.config.homePage == 3) {
              this.navCtrl.navigateRoot("/home3");
            }

            if (this.config.homePage == 4) {
              this.navCtrl.navigateRoot("/home4");
            }

            if (this.config.homePage == 5) {
              this.navCtrl.navigateRoot("/home5");
            }

            if (this.config.homePage == 6) this.navCtrl.navigateRoot("/home6");
            if (this.config.homePage == 7) this.navCtrl.navigateRoot("/home7");
            if (this.config.homePage == 8) this.navCtrl.navigateRoot("/home8");
            if (this.config.homePage == 9) this.navCtrl.navigateRoot("/home9");
            if (this.config.homePage == 10) this.navCtrl.navigateRoot("/home10");
          }
        }
      }, {
        key: "openCategoryPage",
        value: function openCategoryPage() {
          if (this.config.appNavigationTabs) {
            if (this.config.categoryPage == 1) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories/0/0");
            }

            if (this.config.categoryPage == 2) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories2/0/0");
            }

            if (this.config.categoryPage == 3) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories3/0/0");
            }

            if (this.config.categoryPage == 4) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories4/0/0");
            }

            if (this.config.categoryPage == 5) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories5/0/0");
            }

            if (this.config.categoryPage == 6) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories6/0/0");
            }
          } else {
            if (this.config.categoryPage == 1) {
              this.navCtrl.navigateRoot("categories/0/0");
            }

            if (this.config.categoryPage == 2) {
              this.navCtrl.navigateRoot("categories2/0/0");
            }

            if (this.config.categoryPage == 3) {
              this.navCtrl.navigateRoot("categories3/0/0");
            }

            if (this.config.categoryPage == 4) {
              this.navCtrl.navigateRoot("categories4/0/0");
            }

            if (this.config.categoryPage == 5) {
              this.navCtrl.navigateRoot("categories5/0/0");
            }

            if (this.config.categoryPage == 6) {
              this.navCtrl.navigateRoot("categories6/0/0");
            }
          }
        }
      }, {
        key: "openSubcategoryPage",
        value: function openSubcategoryPage(parent) {
          var i = "/" + parent.id + "/" + parent.name;

          if (this.config.appNavigationTabs) {
            if (this.config.categoryPage == 1) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories" + i);
            }

            if (this.config.categoryPage == 2) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories2" + i);
            }

            if (this.config.categoryPage == 3) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories3" + i);
            }

            if (this.config.categoryPage == 4) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories4" + i);
            }

            if (this.config.categoryPage == 5) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories5" + i);
            }

            if (this.config.categoryPage == 6) {
              this.navCtrl.navigateForward(this.config.currentRoute + "/categories6" + i);
            }
          } else {
            if (this.config.categoryPage == 1) {
              this.navCtrl.navigateForward("categories" + i);
            }

            if (this.config.categoryPage == 2) {
              this.navCtrl.navigateForward("categories2" + i);
            }

            if (this.config.categoryPage == 3) {
              this.navCtrl.navigateForward("categories3" + i);
            }

            if (this.config.categoryPage == 4) {
              this.navCtrl.navigateForward("categories4" + i);
            }

            if (this.config.categoryPage == 5) {
              this.navCtrl.navigateForward("categories5" + i);
            }

            if (this.config.categoryPage == 6) {
              this.navCtrl.navigateForward("categories6" + i);
            }
          }
        }
      }, {
        key: "openLoginPage",
        value: function openLoginPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_17__["LoginPage"],
                      componentProps: {
                        'hideGuestLogin': false
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    this.openHomePage();
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openSignUpPage",
        value: function openSignUpPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_18__["SignUpPage"]
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.shared.logOut();
        }
      }, {
        key: "rateUs",
        value: function rateUs() {
          var _this5 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this5.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
          }
        }
      }, {
        key: "share",
        value: function share() {
          var _this6 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString());
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this6.socialSharing.share(_this6.config.appName, _this6.config.appName, "", "https://play.google.com/store/apps/details?id=" + val);
            });
          }
        }
      }, {
        key: "openLanguagePage",
        value: function openLanguagePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_language_language_page__WEBPACK_IMPORTED_MODULE_19__["LanguagePage"]
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openCurrencyPage",
        value: function openCurrencyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_20__["CurrencyListPage"]
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } //=========================================================================

      }, {
        key: "openPage",
        value: function openPage(page) {
          console.log(page); //this.router.navigateByUrl(page);

          if (page == 'home') this.openHomePage();else if (page == 'categories') this.openCategoryPage();else if (page == '/products/0/0/newest') this.navCtrl.navigateForward(page);else if (page == '/products/0/0/sale') this.navCtrl.navigateForward(page);else if (page == '/products/0/0/featured') this.navCtrl.navigateForward(page);else if (page == 'share') this.share();else if (page == 'rateUs') this.rateUs();else this.navCtrl.navigateRoot(page);
          this.menuCtrl.toggle();
        }
      }, {
        key: "getStatusBarColor",
        value: function getStatusBarColor() {
          var headerColor = jquery__WEBPACK_IMPORTED_MODULE_15__('#primary').css('color');
          var rgb2 = headerColor;
          rgb2 = headerColor.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
          this.shared.headerHexColor = rgb2 && rgb2.length === 4 ? "#" + ("0" + parseInt(rgb2[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb2[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb2[3], 10).toString(16)).slice(-2) : headerColor;
          console.log(this.shared.headerHexColor);
          var color = jquery__WEBPACK_IMPORTED_MODULE_15__('#my').css('color');
          var rgb = color;
          rgb = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
          var ret = rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
          console.log(ret);
          this.statusBar.backgroundColorByHexString(ret);
        }
      }, {
        key: "initializeDeepLinks",
        value: function initializeDeepLinks() {
          var _this7 = this;

          //this.deeplinks.routeWithNavController(this.nav, {
          this.deeplinks.route({}).subscribe(function (match) {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            _this7.deepUrl = match.$link.url;
            _this7.link = match.$link.path;
            _this7.linkArgs = match.$args;
            console.log(match);
            console.log(match.$args);
            console.log('Successfully matched route', match); //if (this.rootPage != undefined) this.naviagateDeeplink();
          }, function (nomatch) {
            // nomatch.$link - the full link data
            _this7.deepUrl = nomatch.$link.url; //if (this.rootPage != undefined) this.naviagateDeeplink();

            console.error('Got a deeplink that didn\'t match', nomatch);
          });
        }
      }, {
        key: "naviagateDeeplink",
        value: function naviagateDeeplink(value) {
          //console.log(this.deepUrl)
          if (this.deepUrl.indexOf('/shop') != -1 && value != "openCategoryInShop") {
            this.navCtrl.navigateForward("tabs/search/products/0/0/newest");
            console.log("navigate to Shop");
          }

          if (this.link == "/shop/" && value != "openCategoryInShop") {
            console.log("navigate to Shop with sorting");
          }

          if (this.link == "/product/" && value != "openCategoryInShop") {
            console.log("navigate to product detail");
          }

          if (this.deepUrl.indexOf('product=') != -1 && value != "openCategoryInShop") {
            var linkk = this.deepUrl;
            var arr = linkk.split("=");
            var slug = "";

            var _iterator = _createForOfIteratorHelper(arr),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var val = _step.value;
                if (val.indexOf('product') == -1) slug = val;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.getSingleProductDetail(slug);
            console.log("navigate to product detail with = Slug");
          }

          if (this.deepUrl.indexOf('/product/') != -1 && value != "openCategoryInShop") {
            var _arr = this.deepUrl.split("/");

            var count = 0;

            var _iterator2 = _createForOfIteratorHelper(_arr),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _val = _step2.value;
                count++;

                if (_val == "product") {
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _slug = _arr[count];
            this.getSingleProductDetail(_slug);
            console.log("navigate to product detail with / Slug :" + _slug);
          }

          if (this.deepUrl.indexOf('/product-category/') != -1) {
            //'http://vc.com/product-category/watches/gold-watches/ooo'
            var _arr2 = this.deepUrl.split("/");

            var _count = 0;
            var arr2 = [];

            var _iterator3 = _createForOfIteratorHelper(_arr2),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _val3 = _step3.value;
                if (_count == 1 && _val3 != "") arr2.push(_val3);
                if (_val3 == "product-category") _count = 1;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _slug2 = arr2[arr2.length - 1];
            console.log(_slug2);
            console.log("navigate to shop page with category . Slug :" + _slug2);
            console.log(value);

            if (value == "openCategoryInShop") {
              var _iterator4 = _createForOfIteratorHelper(this.shared.allCategories),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _val2 = _step4.value;
                  console.log(_val2);

                  if (_val2.slug == _slug2) {
                    console.log("id matched : " + _val2.id);
                    console.log(_val2);
                    this.navCtrl.navigateForward("tabs/search/products/" + _val2.id + "/0/newest");
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          }
        }
      }, {
        key: "getSingleProductDetail",
        value: function getSingleProductDetail(slug) {
          var _this8 = this;

          this.loading.show();
          this.config.getWoo("products/" + "?" + this.config.productsArguments + "&slug=" + slug).then(function (data) {
            _this8.loading.hide();

            var p = data;

            _this8.shared.singleProductPageData.push(p);

            _this8.navCtrl.navigateForward(_this8.config.currentRoute + "/product-detail/" + p.id);
          }, function (err) {
            _this8.loading.hide();

            console.log(err);
          });
        }
      }, {
        key: "checkAvatar",
        value: function checkAvatar() {
          return this.shared.checkAvatar();
        }
      }, {
        key: "getNameFirstLetter",
        value: function getNameFirstLetter() {
          return this.shared.getNameFirstLetter();
        } //==============================================================
        //for

      }, {
        key: "expandItem",
        value: function expandItem(i) {
          if (i.expanded == false) i.expanded = true;else i.expanded = false;
        }
      }, {
        key: "showImg",
        value: function showImg() {
          return !this.config.defaultIcons;
        }
      }, {
        key: "getLeftItems",
        value: function getLeftItems() {
          var _this9 = this;

          var tempArray = new Array();

          if (!this.config.appInProduction) {
            this.a1.forEach(function (v, index) {
              tempArray.push(v);
            });
          } else {
            this.a2.forEach(function (v, index) {
              tempArray.push(v);
            });
          }

          if (this.shared.customerData.id == null) {
            this.a3.forEach(function (v, index) {
              tempArray.push(v);
            });
          } else {
            this.a4.forEach(function (v, index) {
              tempArray.push(v);
            });
          }

          tempArray.forEach(function (v, index) {
            if (_this9.config.wishListPage == 0 && v.value == "wishListPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.editProfilePage == 0 && v.value == "editPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.contactUsPage == 0 && v.value == "contactPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.downloadPage == false && v.value == "downloadsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.enableWpPointReward == false && v.value == "rewardPointsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.aboutUsPage == 0 && v.value == "aboutUsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.newsPage == 0 && v.value == "newsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.introPage == 0 && v.value == "introPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.shareApp == 0 && v.value == "sharePage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.rateApp == 0 && v.value == "ratePage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.settingPage == 0 && v.value == "settingsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.myOrdersPage == 0 && v.value == "myOrdersPage") {
              tempArray.splice(index, 1);
            }
          });
          this.appPages = tempArray;
          return tempArray;
        }
      }, {
        key: "openDemoSettings",
        value: function openDemoSettings() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_demo_settings_demo_settings_page__WEBPACK_IMPORTED_MODULE_21__["DemoSettingsPage"]
                    });

                  case 2:
                    modal = _context8.sent;
                    _context8.next = 5;
                    return modal.present();

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
      }, {
        type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_22__["AppEventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]
      }, {
        type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_22__["AppEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../components/menu-component/menu-component.component */
    "./src/components/menu-component/menu-component.component.ts");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");
    /* harmony import */


    var _modals_refund_policy_refund_policy_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./modals/refund-policy/refund-policy.module */
    "./src/app/modals/refund-policy/refund-policy.module.ts");
    /* harmony import */


    var _modals_currency_list_currency_list_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./modals/currency-list/currency-list.module */
    "./src/app/modals/currency-list/currency-list.module.ts");
    /* harmony import */


    var _modals_login_login_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./modals/login/login.module */
    "./src/app/modals/login/login.module.ts");
    /* harmony import */


    var _modals_sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./modals/sign-up/sign-up.module */
    "./src/app/modals/sign-up/sign-up.module.ts");
    /* harmony import */


    var _modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./modals/forgot-password/forgot-password.module */
    "./src/app/modals/forgot-password/forgot-password.module.ts");
    /* harmony import */


    var _modals_privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./modals/privacy-policy/privacy-policy.module */
    "./src/app/modals/privacy-policy/privacy-policy.module.ts");
    /* harmony import */


    var _modals_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./modals/select-country/select-country.module */
    "./src/app/modals/select-country/select-country.module.ts");
    /* harmony import */


    var _modals_select_zones_select_zones_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./modals/select-zones/select-zones.module */
    "./src/app/modals/select-zones/select-zones.module.ts");
    /* harmony import */


    var _modals_scratch_card_scratch_card_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./modals/scratch-card/scratch-card.module */
    "./src/app/modals/scratch-card/scratch-card.module.ts");
    /* harmony import */


    var _modals_term_services_term_services_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./modals/term-services/term-services.module */
    "./src/app/modals/term-services/term-services.module.ts");
    /* harmony import */


    var _modals_language_language_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./modals/language/language.module */
    "./src/app/modals/language/language.module.ts");
    /* harmony import */


    var _modals_blank_modal_blank_modal_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./modals/blank-modal/blank-modal.module */
    "./src/app/modals/blank-modal/blank-modal.module.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
    /* harmony import */


    var _modals_demo_settings_demo_settings_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./modals/demo-settings/demo-settings.module */
    "./src/app/modals/demo-settings/demo-settings.module.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js"); // Providers Import
    // For Translation
    //for side menu expandable


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _components_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponentComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'md'
      }), _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_29__["PipesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], _modals_blank_modal_blank_modal_module__WEBPACK_IMPORTED_MODULE_41__["BlankModalPageModule"], _modals_language_language_module__WEBPACK_IMPORTED_MODULE_40__["LanguagePageModule"], _modals_refund_policy_refund_policy_module__WEBPACK_IMPORTED_MODULE_30__["RefundPolicyPageModule"], _modals_currency_list_currency_list_module__WEBPACK_IMPORTED_MODULE_31__["CurrencyListPageModule"], _modals_login_login_module__WEBPACK_IMPORTED_MODULE_32__["LoginPageModule"], _modals_sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_33__["SignUpPageModule"], _modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_34__["ForgotPasswordPageModule"], _modals_privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_35__["PrivacyPolicyPageModule"], _modals_term_services_term_services_module__WEBPACK_IMPORTED_MODULE_39__["TermServicesPageModule"], _modals_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_36__["SelectCountryPageModule"], _modals_select_zones_select_zones_module__WEBPACK_IMPORTED_MODULE_37__["SelectZonesPageModule"], _modals_scratch_card_scratch_card_module__WEBPACK_IMPORTED_MODULE_38__["ScratchCardPageModule"], _modals_demo_settings_demo_settings_module__WEBPACK_IMPORTED_MODULE_43__["DemoSettingsPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_22__["LocationDataService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_21__["SharedDataService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeGeocoder"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_15__["AdMobFree"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_17__["Deeplinks"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_18__["HTTP"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_27__["Facebook"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_19__["EmailComposer"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_42__["PhotoViewer"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_44__["LocalNotifications"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modals/blank-modal/blank-modal.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/blank-modal/blank-modal.module.ts ***!
    \**********************************************************/

  /*! exports provided: BlankModalPageModule */

  /***/
  function srcAppModalsBlankModalBlankModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankModalPageModule", function () {
      return BlankModalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _blank_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blank-modal.page */
    "./src/app/modals/blank-modal/blank-modal.page.ts");

    var routes = [{
      path: '',
      component: _blank_modal_page__WEBPACK_IMPORTED_MODULE_6__["BlankModalPage"]
    }];

    var BlankModalPageModule = function BlankModalPageModule() {
      _classCallCheck(this, BlankModalPageModule);
    };

    BlankModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_blank_modal_page__WEBPACK_IMPORTED_MODULE_6__["BlankModalPage"]],
      entryComponents: [_blank_modal_page__WEBPACK_IMPORTED_MODULE_6__["BlankModalPage"]]
    })], BlankModalPageModule);
    /***/
  },

  /***/
  "./src/app/modals/blank-modal/blank-modal.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modals/blank-modal/blank-modal.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsBlankModalBlankModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9ibGFuay1tb2RhbC9ibGFuay1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/blank-modal/blank-modal.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/modals/blank-modal/blank-modal.page.ts ***!
    \********************************************************/

  /*! exports provided: BlankModalPage */

  /***/
  function srcAppModalsBlankModalBlankModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankModalPage", function () {
      return BlankModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var BlankModalPage = /*#__PURE__*/function () {
      function BlankModalPage(mdCtrl, config) {
        _classCallCheck(this, BlankModalPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(BlankModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return BlankModalPage;
    }();

    BlankModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    BlankModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blank-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blank-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blank-modal.page.scss */
      "./src/app/modals/blank-modal/blank-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], BlankModalPage);
    /***/
  },

  /***/
  "./src/app/modals/currency-list/currency-list.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/currency-list/currency-list.module.ts ***!
    \**************************************************************/

  /*! exports provided: CurrencyListPageModule */

  /***/
  function srcAppModalsCurrencyListCurrencyListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyListPageModule", function () {
      return CurrencyListPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _currency_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./currency-list.page */
    "./src/app/modals/currency-list/currency-list.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _currency_list_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyListPage"]
    }];

    var CurrencyListPageModule = function CurrencyListPageModule() {
      _classCallCheck(this, CurrencyListPageModule);
    };

    CurrencyListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_currency_list_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyListPage"]],
      entryComponents: [_currency_list_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyListPage"]]
    })], CurrencyListPageModule);
    /***/
  },

  /***/
  "./src/app/modals/currency-list/currency-list.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/currency-list/currency-list.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsCurrencyListCurrencyListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jdXJyZW5jeS1saXN0L2N1cnJlbmN5LWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modals/currency-list/currency-list.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/currency-list/currency-list.page.ts ***!
    \************************************************************/

  /*! exports provided: CurrencyListPage */

  /***/
  function srcAppModalsCurrencyListCurrencyListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyListPage", function () {
      return CurrencyListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CurrencyListPage = /*#__PURE__*/function () {
      function CurrencyListPage(loading, config, shared, modalCtrl, http) {
        _classCallCheck(this, CurrencyListPage);

        this.loading = loading;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.currencyList = [];
        this.getListOfCurrency();
      }

      _createClass(CurrencyListPage, [{
        key: "getListOfCurrency",
        value: function getListOfCurrency() {
          var _this10 = this;

          this.loading.show();
          this.config.getWithUrl(this.config.url + "/api/appsettings/get_all_currencies/?insecure=cool").then(function (data) {
            _this10.loading.hide();

            _this10.currencyList = data.data;

            _this10.currencyList.forEach(function (val) {
              if (val.symbol == localStorage.currency) {
                console.log(val.symbol);
                _this10.currency = val;
              }
            });
          });
        }
      }, {
        key: "updateCurrency",
        value: function updateCurrency(event) {
          var c = event.detail.value;

          if (localStorage.currency != c.symbol) {
            this.loading.autoHide(1000);
            localStorage.currency = c.symbol;
            localStorage.currencyCode = c.name;
            localStorage.currencyPos = c.position;
            localStorage.decimals = c.decimals;
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CurrencyListPage;
    }();

    CurrencyListPage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    CurrencyListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currency-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currency-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currency-list.page.scss */
      "./src/app/modals/currency-list/currency-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], CurrencyListPage);
    /***/
  },

  /***/
  "./src/app/modals/demo-settings/demo-settings.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/demo-settings/demo-settings.module.ts ***!
    \**************************************************************/

  /*! exports provided: DemoSettingsPageModule */

  /***/
  function srcAppModalsDemoSettingsDemoSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoSettingsPageModule", function () {
      return DemoSettingsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _demo_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./demo-settings.page */
    "./src/app/modals/demo-settings/demo-settings.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _demo_settings_page__WEBPACK_IMPORTED_MODULE_6__["DemoSettingsPage"]
    }];

    var DemoSettingsPageModule = function DemoSettingsPageModule() {
      _classCallCheck(this, DemoSettingsPageModule);
    };

    DemoSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_demo_settings_page__WEBPACK_IMPORTED_MODULE_6__["DemoSettingsPage"]]
    })], DemoSettingsPageModule);
    /***/
  },

  /***/
  "./src/app/modals/demo-settings/demo-settings.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/demo-settings/demo-settings.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsDemoSettingsDemoSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".demo-settings ion-grid {\n  background-color: lightgrey;\n}\n.demo-settings .icon-checked {\n  font-size: 40px;\n  color: var(--ion-color-primary-contrast);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.demo-settings ion-segment ion-icon {\n  font-size: 30px;\n}\n.demo-settings ion-list-header ion-label {\n  font-size: 14px;\n  font-weight: bold;\n}\n.demo-settings .color-box {\n  font-size: 50px;\n}\n.demo-settings .color-box svg {\n  stroke: var(--ion-color-primary-contrast) !important;\n}\n.demo-settings .selected {\n  background-color: black;\n}\n.demo-settings ion-item ion-label {\n  font-size: 14px !important;\n  font-weight: bold;\n}\n.demo-settings .product-cards {\n  padding: 5px;\n}\n.demo-settings .product-cards .selected-card {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n}\n.demo-settings .product-cards .selected-card:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 110%;\n  height: 102%;\n  background-color: var(--ion-background-color);\n  opacity: 0.5;\n}\n.demo-settings .product-cards .selected-card ion-icon {\n  position: unset;\n  margin: auto;\n  font-size: 2.5rem !important;\n  color: var(--ion-color-secondary);\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2RlbW8tc2V0dGluZ3MvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcbW9kYWxzXFxkZW1vLXNldHRpbmdzXFxkZW1vLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2RlbW8tc2V0dGluZ3MvZGVtby1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQkFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNBSjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FET0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNMTjtBRFFFO0VBQ0UsZUFBQTtBQ05KO0FET0k7RUFDRSxvREFBQTtBQ0xOO0FEUUU7RUFDRSx1QkFBQTtBQ05KO0FEU0k7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDUE47QURXRTtFQUNFLFlBQUE7QUNUSjtBRFdJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1ROO0FEV007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0FDVFI7QURXTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9kZW1vLXNldHRpbmdzL2RlbW8tc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tc2V0dGluZ3Mge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICB9XG4gIC5pY29uLWNoZWNrZWQge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIGlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1saXN0LWhlYWRlciB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICAuY29sb3ItYm94IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgc3ZnIHtcbiAgICAgIHN0cm9rZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0LWNhcmRzIHtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAuc2VsZWN0ZWQtY2FyZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB6LWluZGV4OiA5O1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTEwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDIlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuZGVtby1zZXR0aW5ncyBpb24tZ3JpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5kZW1vLXNldHRpbmdzIC5pY29uLWNoZWNrZWQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5kZW1vLXNldHRpbmdzIGlvbi1zZWdtZW50IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmRlbW8tc2V0dGluZ3MgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGVtby1zZXR0aW5ncyAuY29sb3ItYm94IHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuLmRlbW8tc2V0dGluZ3MgLmNvbG9yLWJveCBzdmcge1xuICBzdHJva2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xufVxuLmRlbW8tc2V0dGluZ3MgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uZGVtby1zZXR0aW5ncyBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGVtby1zZXR0aW5ncyAucHJvZHVjdC1jYXJkcyB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5kZW1vLXNldHRpbmdzIC5wcm9kdWN0LWNhcmRzIC5zZWxlY3RlZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG59XG4uZGVtby1zZXR0aW5ncyAucHJvZHVjdC1jYXJkcyAuc2VsZWN0ZWQtY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDExMCU7XG4gIGhlaWdodDogMTAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZGVtby1zZXR0aW5ncyAucHJvZHVjdC1jYXJkcyAuc2VsZWN0ZWQtY2FyZCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/demo-settings/demo-settings.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/demo-settings/demo-settings.page.ts ***!
    \************************************************************/

  /*! exports provided: DemoSettingsPage */

  /***/
  function srcAppModalsDemoSettingsDemoSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoSettingsPage", function () {
      return DemoSettingsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var DemoSettingsPage = /*#__PURE__*/function () {
      function DemoSettingsPage(loading, modalCont, config, nav, cdr, shared) {
        _classCallCheck(this, DemoSettingsPage);

        this.loading = loading;
        this.modalCont = modalCont;
        this.config = config;
        this.nav = nav;
        this.cdr = cdr;
        this.shared = shared;
        this.colors = [{
          value: '#51688f',
          name: 'default'
        }, {
          value: '#ffffff',
          name: 'white'
        }, {
          value: '#000000',
          name: 'black'
        }, {
          value: '#EC3F34',
          name: 'green'
        }, {
          value: '#BF04A0',
          name: 'red'
        }, {
          value: '#FCAD8E',
          name: 'magnesium'
        }, {
          value: '#FF8EA6',
          name: 'salmon'
        }, {
          value: '#44B3FF',
          name: 'plum'
        }, {
          value: '#9546FE',
          name: 'blue'
        }, {
          value: '#A6633C',
          name: 'pink'
        }, {
          value: '#3CA68D',
          name: 'orange'
        }, {
          value: '#3C51A6',
          name: 'maroon'
        }, {
          value: '#726DFF',
          name: 'cayanne'
        }, {
          value: '#FF6D6D',
          name: 'sea'
        }, {
          value: '#B3182A',
          name: 'theme15'
        }, {
          value: '#3E5902',
          name: 'theme16'
        }, {
          value: '#483A6F',
          name: 'theme17'
        }, {
          value: '#621529',
          name: 'theme18'
        }];
        this.currencyList = [];
        this.navigation = 'bottom';
        this.themeMode = 'dark';
        this.loaderLanguages = true;
        this.loaderCurrecny = true;
        this.banner = "1";
        this.currentLanguageCode = localStorage.languageCode;
        this.languageList = [{
          "name": "English",
          "code": "en",
          "image": "assets/flags/english.jpg",
          "direction": "ltr"
        }, {
          "name": "Arabic",
          "code": "ar",
          "image": "assets/flags/uae.jpg",
          "direction": "rtl"
        }];
        this.getListOfCurrency();

        if (this.config.appNavigationTabs) {
          this.navigation = 'bottom';
        } else {
          this.navigation = 'left';
        }

        if (this.config.darkMode) {
          this.themeMode = 'dark';
        } else {
          this.themeMode = 'light';
        }

        console.log(this.config.appNavigationTabs, this.navigation);
        console.log(this.config.darkMode, this.themeMode);
        this.settingDefaultLanguage();
        this.banner = this.config.bannerStyle;
      }

      _createClass(DemoSettingsPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log("chekc");
          this.cdr.markForCheck();
        }
      }, {
        key: "navigationChange",
        value: function navigationChange() {
          if (this.navigation == 'bottom') {
            this.config.appNavigationTabs = localStorage.tabsNavigation = true;
            this.config.currentRoute = "tabs/" + this.config.getCurrentHomePage();
            this.nav.navigateRoot(this.config.currentRoute);
          } else {
            this.config.appNavigationTabs = localStorage.tabsNavigation = false;
            this.config.currentRoute = "";
            this.nav.navigateRoot('home');
          }

          this.dismiss();
          console.log(localStorage.tabsNavigation);
          console.log(this.navigation);
        }
      }, {
        key: "modeChange",
        value: function modeChange() {
          if (this.themeMode == 'dark') {
            this.config.darkMode = true;
          } else {
            this.config.darkMode = false;
          }

          console.log("dasdasdadasd");
          this.cdr.detectChanges();
        }
      }, {
        key: "settingDefaultLanguage",
        value: function settingDefaultLanguage() {
          var _this11 = this;

          this.languageList.forEach(function (val) {
            if (val.code == _this11.currentLanguageCode) _this11.language = val;
          });
        }
      }, {
        key: "updateLanguage",
        value: function updateLanguage() {
          var _this12 = this;

          setTimeout(function () {
            var v = _this12.language;
            console.log(v.code);

            if (_this12.currentLanguageCode != v.code) {
              console.log(v.code);

              _this12.loading.autoHide(1000);

              localStorage.languageCode = v.code;
              localStorage.languageDirection = v.direction;

              _this12.shared.emptyCart();

              _this12.shared.emptyRecentViewed();

              setTimeout(function () {
                window.location.reload();
              }, 1000);
            }
          }, 300);
        }
      }, {
        key: "getListOfCurrency",
        value: function getListOfCurrency() {
          var _this13 = this;

          this.loaderCurrecny = true;
          this.config.getWithUrl(this.config.url + "/api/appsettings/get_all_currencies/?insecure=cool").then(function (data) {
            _this13.loaderCurrecny = false;
            _this13.currencyList = data.data;

            _this13.currencyList.forEach(function (val) {
              if (val.symbol == localStorage.currency) {
                console.log(val.symbol);
                _this13.currency = val;
              }
            });
          });
        }
      }, {
        key: "updateCurrency",
        value: function updateCurrency() {
          var _this14 = this;

          setTimeout(function () {
            if (localStorage.currency != _this14.currency.code) {
              _this14.loading.autoHide(1000);

              localStorage.currency = _this14.currency.symbol;
              localStorage.currencyCode = _this14.currency.name;
              localStorage.currencyPos = _this14.currency.position;
              localStorage.decimals = _this14.currency.decimals;

              _this14.shared.emptyCart();

              _this14.shared.emptyRecentViewed();

              setTimeout(function () {
                window.location.reload();
              }, 1000);
            }
          }, 300);
        }
      }, {
        key: "setBannerStyle",
        value: function setBannerStyle(banner) {
          this.config.setBannerStyle(banner);
          this.config.appSettings.banner_style = banner;
          if (this.navigation == "bottom") this.navigation = 'left';else this.navigation = 'bottom';
          this.navigationChange();
        }
      }, {
        key: "setCardStyle",
        value: function setCardStyle(card) {
          this.config.setCardStyle(card);
          this.dismiss();
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCont.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeAppTheme",
        value: function changeAppTheme(value) {
          this.config.appTheme = value;
        }
      }]);

      return DemoSettingsPage;
    }();

    DemoSettingsPage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }];
    };

    DemoSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-demo-settings',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./demo-settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/demo-settings/demo-settings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./demo-settings.page.scss */
      "./src/app/modals/demo-settings/demo-settings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]])], DemoSettingsPage);
    /***/
  },

  /***/
  "./src/app/modals/forgot-password/forgot-password.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modals/forgot-password/forgot-password.module.ts ***!
    \******************************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppModalsForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/modals/forgot-password/forgot-password.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }];

    var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
      _classCallCheck(this, ForgotPasswordPageModule);
    };

    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]],
      entryComponents: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })], ForgotPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/modals/forgot-password/forgot-password.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modals/forgot-password/forgot-password.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  height: 150px;\n  opacity: 0.1;\n}\n\nform {\n  padding-top: 28px;\n}\n\nform ion-item {\n  --padding-start: 0;\n  --background: var(--ion-background-color);\n}\n\nform ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\n\nform ion-item:nth-child(2) {\n  height: 33px;\n}\n\nform ion-item:nth-child(2) ion-label {\n  color: red;\n}\n\nform ion-button {\n  margin-top: 10px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2ZvcmdvdC1wYXNzd29yZC9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxtb2RhbHNcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtFQUNBLHlDQUFBO0FDQVI7O0FEQ1E7RUFDSSwyQ0FBQTtBQ0NaOztBRENRO0VBQ0ksWUFBQTtBQ0NaOztBREFZO0VBQ0ksVUFBQTtBQ0VoQjs7QURFSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciBpbWFnZSBkZXNpZ25cbmlvbi1pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgb3BhY2l0eTogMC4xO1xufVxuXG4vLyBGb3IgRm9ybVxuZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDI4cHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuIiwiaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuZm9ybSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5mb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG59XG5mb3JtIGlvbi1pdGVtOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogMzNweDtcbn1cbmZvcm0gaW9uLWl0ZW06bnRoLWNoaWxkKDIpIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5mb3JtIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/forgot-password/forgot-password.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/forgot-password/forgot-password.page.ts ***!
    \****************************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppModalsForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var ForgotPasswordPage = /*#__PURE__*/function () {
      function ForgotPasswordPage(loading, http, config, shared, modalCtrl) {
        _classCallCheck(this, ForgotPasswordPage);

        this.loading = loading;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.formData = {
          customers_email_address: ''
        };
        this.errorMessage = '';
      }

      _createClass(ForgotPasswordPage, [{
        key: "forgetPassword",
        value: function forgetPassword() {
          var _this15 = this;

          this.loading.show();
          this.errorMessage = '';
          this.http.get(this.config.url + '/api/appusers/forgot_password/?insecure=cool&email=' + this.formData.customers_email_address).subscribe(function (data) {
            _this15.loading.hide();

            console.log(data);

            _this15.shared.showAlert(data);

            _this15.dismiss();
          }, function (error) {
            _this15.loading.hide();

            if (error.ok == false) {
              console.log(error);
              _this15.errorMessage = error.error.error;
            }
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordPage;
    }();

    ForgotPasswordPage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.page.scss */
      "./src/app/modals/forgot-password/forgot-password.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], ForgotPasswordPage);
    /***/
  },

  /***/
  "./src/app/modals/language/language.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/modals/language/language.module.ts ***!
    \****************************************************/

  /*! exports provided: LanguagePageModule */

  /***/
  function srcAppModalsLanguageLanguageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function () {
      return LanguagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./language.page */
    "./src/app/modals/language/language.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]
    }];

    var LanguagePageModule = function LanguagePageModule() {
      _classCallCheck(this, LanguagePageModule);
    };

    LanguagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      exports: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]],
      declarations: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]],
      entryComponents: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]]
    })], LanguagePageModule);
    /***/
  },

  /***/
  "./src/app/modals/language/language.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/modals/language/language.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsLanguageLanguagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9sYW5ndWFnZS9sYW5ndWFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/language/language.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/modals/language/language.page.ts ***!
    \**************************************************/

  /*! exports provided: LanguagePage */

  /***/
  function srcAppModalsLanguageLanguagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePage", function () {
      return LanguagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var LanguagePage = /*#__PURE__*/function () {
      function LanguagePage(loading, modalCont, config, shared) {
        var _this16 = this;

        _classCallCheck(this, LanguagePage);

        this.loading = loading;
        this.modalCont = modalCont;
        this.config = config;
        this.shared = shared;
        this.currentLanguageCode = localStorage.languageCode;
        this.languageList = [{
          "name": "English",
          "code": "en",
          "image": "assets/flags/english.jpg",
          "direction": "ltr"
        }, {
          "name": "Arabic",
          "code": "ar",
          "image": "assets/flags/uae.jpg",
          "direction": "rtl"
        }];
        this.languageList.forEach(function (val) {
          if (val.code == _this16.currentLanguageCode) _this16.language = val;
        });
      }

      _createClass(LanguagePage, [{
        key: "updateLanguage",
        value: function updateLanguage(event) {
          var v = event.detail.value;
          console.log(v.code);

          if (this.currentLanguageCode != v.code) {
            console.log(v.code);
            this.loading.autoHide(1000);
            localStorage.languageCode = v.code;
            localStorage.languageDirection = v.direction;
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCont.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LanguagePage;
    }();

    LanguagePage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }];
    };

    LanguagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./language.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./language.page.scss */
      "./src/app/modals/language/language.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]])], LanguagePage);
    /***/
  },

  /***/
  "./src/app/modals/login/login.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/modals/login/login.module.ts ***!
    \**********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppModalsLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/modals/login/login.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
      entryComponents: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/modals/login/login.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/modals/login/login.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  height: 150px;\n}\n\n.ion-no-padding {\n  -webkit-text-size-adjust: 38px;\n     -moz-text-size-adjust: 38px;\n      -ms-text-size-adjust: 38px;\n          text-size-adjust: 38px;\n  -webkit-text-decoration: double;\n          text-decoration: double;\n  text-align: center;\n}\n\n.sfondologin {\n  --background: url('patternritmo.png') no-repeat center/cover fixed;\n}\n\nform {\n  padding-top: 28px;\n}\n\nform ion-item {\n  --padding-start: 0;\n  --background: var(--ion-background-color);\n}\n\nform ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\n\nform ion-item:nth-child(3) {\n  height: 33px;\n}\n\nform ion-item:nth-child(3) ion-label {\n  color: red;\n}\n\nform ion-button {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2xvZ2luL0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXG1vZGFsc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUNBRjs7QURFQTtFQUNBLDhCQUFBO0tBQUEsMkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0MsK0JBQUE7VUFBQSx1QkFBQTtFQUNDLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrRUFBQTtBQ0VGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EseUNBQUE7QUNFSjs7QURESTtFQUNFLDJDQUFBO0FDR047O0FEREk7RUFDRSxZQUFBO0FDR047O0FERk07RUFDRSxVQUFBO0FDSVI7O0FEQUU7RUFDRSx5QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciBpbWFnZSBkZXNpZ25cbmlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmlvbi1uby1wYWRkaW5ne1xudGV4dC1zaXplLWFkanVzdDogMzhweDtcbiB0ZXh0LWRlY29yYXRpb246IGRvdWJsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNmb25kb2xvZ2lue1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcGF0dGVybnJpdG1vLnBuZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbn1cblxuLy8gRm9yIEZvcm1cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjhweDtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiKSwgMC41KTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuXG4vLyBGb3IgTG9naW4sIEZhY2Vib29rLCBSZWdpc3RlciBCdXR0b25zXG4iLCJpb24taW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmlvbi1uby1wYWRkaW5nIHtcbiAgdGV4dC1zaXplLWFkanVzdDogMzhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBkb3VibGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNmb25kb2xvZ2luIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3BhdHRlcm5yaXRtby5wbmcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn1cbmZvcm0gaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuZm9ybSBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IpLCAwLjUpO1xufVxuZm9ybSBpb24taXRlbTpudGgtY2hpbGQoMykge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5mb3JtIGlvbi1pdGVtOm50aC1jaGlsZCgzKSBpb24tbGFiZWwge1xuICBjb2xvcjogcmVkO1xufVxuZm9ybSBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/login/login.page.ts":
  /*!********************************************!*\
    !*** ./src/app/modals/login/login.page.ts ***!
    \********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppModalsLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sign-up/sign-up.page */
    "./src/app/modals/sign-up/sign-up.page.ts");
    /* harmony import */


    var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../forgot-password/forgot-password.page */
    "./src/app/modals/forgot-password/forgot-password.page.ts");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(http, config, modalCtrl, loading, shared, fb, applicationRef, navCtrl, appEventsService, navParams, alertController) {
        _classCallCheck(this, LoginPage);

        this.http = http;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.fb = fb;
        this.applicationRef = applicationRef;
        this.navCtrl = navCtrl;
        this.appEventsService = appEventsService;
        this.navParams = navParams;
        this.alertController = alertController;
        this.isActiveToggleTextPassword = true;
        this.hideGuestLogin = false;
        this.count = 6;
        this.formData = {
          username: '',
          password: ''
        };
        this.errorMessage = '';
        this.hideGuestLogin = navParams.get('hideGuestLogin');
        console.log(this.hideGuestLogin);
      }

      _createClass(LoginPage, [{
        key: "toggleTextPassword",
        value: function toggleTextPassword() {
          this.isActiveToggleTextPassword = this.isActiveToggleTextPassword == true ? false : true;
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.isActiveToggleTextPassword ? 'password' : 'text';
        } // <!-- 2.0 updates -->

      }, {
        key: "guestLogin",
        value: function guestLogin() {
          if (this.config.checkOutPage == 1) this.shared.onePageCheckOut();else this.appEventsService.publish('openShippingAddressPage', "");
          this.dismiss();
        }
      }, {
        key: "login",
        value: function login() {
          var _this17 = this;

          this.loading.show();
          this.errorMessage = '';
          var formData = new FormData();
          formData.append("username", this.formData.username);
          formData.append("password", this.formData.password);
          this.http.post(this.config.url + '/api/appusers/generate_cookie/?insecure=cool', formData).subscribe(function (data) {
            if (data.status == "ok") _this17.getUserData(data, "simple");else {
              _this17.errorMessage = data.error;

              _this17.loading.hide();
            }
          }, function (err) {
            _this17.loading.hide();

            if (err.ok == false) {
              _this17.errorMessage = "Invalid Username or Password";
              _this17.count;
            }
          }); // this.config.getWoo("customers/" + 118 + "?" + this.config.productsArguments).then((data:any) => {
          //   this.loading.hide();
          //   this.shared.login(data);
          //   //console.log(this.shared.customerData);
          //   this.dismiss();
          //   this.applicationRef.tick();
          // });
        }
      }, {
        key: "countup",
        value: function countup() {
          this.count--; //instead of reinitializing, we are using already initialized variable

          console.log(JSON.stringify(this.count));

          if (this.count == 0) {
            this.presentAlert2();
          }

          if (this.count === 4) {
            this.presentAlert1();
          } else {
            console.log(this.count);
          }
        }
      }, {
        key: "getUserData",
        value: function getUserData(c, type) {
          var _this18 = this;

          var id;
          if (type == "simple") id = c.user.id;
          if (type == "fb") id = c.id; //alert(c.user.id + " -- " + c.id + " --- " + id);

          this.config.getWoo("customers/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this18.loading.hide();

            var dat = data; //alert(JSON.stringify(dat));

            _this18.shared.login(Object.assign({
              cookie: c.cookie
            }, dat)); // alert(JSON.stringify(Object.assign({ cookie: c.cookie }, dat)));


            _this18.dismiss();

            _this18.applicationRef.tick();
          });
        }
      }, {
        key: "openSignUpPage",
        value: function openSignUpPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalCtrl.create({
                      component: _sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
                    });

                  case 2:
                    modal = _context9.sent;
                    _context9.next = 5;
                    return modal.present();

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "openForgetPasswordPage",
        value: function openForgetPasswordPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalCtrl.create({
                      component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordPage"]
                    });

                  case 2:
                    modal = _context10.sent;
                    _context10.next = 5;
                    return modal.present();

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this19 = this;

          this.fb.getLoginStatus().then(function (res) {
            if (res.status == 'connected') {
              console.log("user connected already" + res.authResponse.accessToken);

              _this19.createAccount(res.authResponse.accessToken, 'fb');
            } else {
              console.log("USer Not login ");

              _this19.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
                // this.shared.showAlert('Logged into Facebook!' + JSON.stringify(res));
                console.log("successfully login ");

                _this19.createAccount(res.authResponse.accessToken, 'fb');
              })["catch"](function (e) {
                return console.log('Error logging into Facebook' + JSON.stringify(e));
              });
            }
          })["catch"](function (e) {
            return console.log('Error Check Login Status Facebook' + JSON.stringify(e));
          });
        } // googleLogin() {
        //   this.loading.autoHide(500);
        //   this.googlePlus.login({})
        //     .then(res => {
        //       //  alert(JSON.stringify(res))
        //       this.createAccount(res, 'google');
        //     })
        //     .catch(err => this.shared.showAlert(JSON.stringify(err)));
        // }
        //============================================================================================  
        //creating new account using function facebook or google details 

      }, {
        key: "createAccount",
        value: function createAccount(info, type) {
          var _this20 = this;

          //this.formData.username = info;
          // alert(info);
          this.loading.show();
          var url = '';
          url = '/api/appusers/fb_connect/?insecure=cool&access_token=' + info;
          this.http.get(this.config.url + url).subscribe(function (data) {
            _this20.loading.hide(); //alert(JSON.stringify(data));


            _this20.getUserData(data, "fb");
          }, function (error) {
            _this20.loading.hide(); //this.shared.showAlert("error " + JSON.stringify(error));

          });
        }
      }, {
        key: "dismiss",
        //close modal
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentAlert1",
        value: function presentAlert1() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var alert, result;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      header: 'Attenzione',
                      subHeader: '',
                      message: 'Per ragioni di sicurezza, dopo 6 tentativi errati il sistema si blocca per 15 minuti.',
                      buttons: ['OK'],
                      cssClass: 'secondary'
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                    _context11.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context11.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "presentAlert2",
        value: function presentAlert2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var alert, result;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.alertController.create({
                      header: 'Attenzione',
                      subHeader: '',
                      message: 'Attendere 15min prima di riprovare. Ulteriori tentativi bloccheranno il login per 24h',
                      buttons: ['OK'],
                      cssClass: 'secondary'
                    });

                  case 2:
                    alert = _context12.sent;
                    _context12.next = 5;
                    return alert.present();

                  case 5:
                    _context12.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context12.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__["AppEventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/modals/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__["AppEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/modals/privacy-policy/privacy-policy.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/privacy-policy/privacy-policy.module.ts ***!
    \****************************************************************/

  /*! exports provided: PrivacyPolicyPageModule */

  /***/
  function srcAppModalsPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
      return PrivacyPolicyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]
    }];

    var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
      _classCallCheck(this, PrivacyPolicyPageModule);
    };

    PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]],
      entryComponents: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })], PrivacyPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/modals/privacy-policy/privacy-policy.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modals/privacy-policy/privacy-policy.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsPrivacyPolicyPrivacyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-text p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3ByaXZhY3ktcG9saWN5L0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXG1vZGFsc1xccHJpdmFjeS1wb2xpY3lcXHByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gIGlvbi10ZXh0IHtcclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IGlvbi10ZXh0IHAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modals/privacy-policy/privacy-policy.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/privacy-policy/privacy-policy.page.ts ***!
    \**************************************************************/

  /*! exports provided: PrivacyPolicyPage */

  /***/
  function srcAppModalsPrivacyPolicyPrivacyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
      return PrivacyPolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var PrivacyPolicyPage = /*#__PURE__*/function () {
      function PrivacyPolicyPage(mdCtrl, config) {
        _classCallCheck(this, PrivacyPolicyPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(PrivacyPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // For Modal Dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return PrivacyPolicyPage;
    }();

    PrivacyPolicyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.page.scss */
      "./src/app/modals/privacy-policy/privacy-policy.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], PrivacyPolicyPage);
    /***/
  },

  /***/
  "./src/app/modals/refund-policy/refund-policy.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/refund-policy/refund-policy.module.ts ***!
    \**************************************************************/

  /*! exports provided: RefundPolicyPageModule */

  /***/
  function srcAppModalsRefundPolicyRefundPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyPageModule", function () {
      return RefundPolicyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _refund_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _refund_policy_page__WEBPACK_IMPORTED_MODULE_6__["RefundPolicyPage"]
    }];

    var RefundPolicyPageModule = function RefundPolicyPageModule() {
      _classCallCheck(this, RefundPolicyPageModule);
    };

    RefundPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_refund_policy_page__WEBPACK_IMPORTED_MODULE_6__["RefundPolicyPage"]],
      entryComponents: [_refund_policy_page__WEBPACK_IMPORTED_MODULE_6__["RefundPolicyPage"]]
    })], RefundPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/modals/refund-policy/refund-policy.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/refund-policy/refund-policy.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsRefundPolicyRefundPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-text p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3JlZnVuZC1wb2xpY3kvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcbW9kYWxzXFxyZWZ1bmQtcG9saWN5XFxyZWZ1bmQtcG9saWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3JlZnVuZC1wb2xpY3kvcmVmdW5kLXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvcmVmdW5kLXBvbGljeS9yZWZ1bmQtcG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgaW9uLXRleHQge1xyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgaW9uLXRleHQgcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/refund-policy/refund-policy.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/refund-policy/refund-policy.page.ts ***!
    \************************************************************/

  /*! exports provided: RefundPolicyPage */

  /***/
  function srcAppModalsRefundPolicyRefundPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyPage", function () {
      return RefundPolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var RefundPolicyPage = /*#__PURE__*/function () {
      function RefundPolicyPage(mdCtrl, config) {
        _classCallCheck(this, RefundPolicyPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(RefundPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // For Modal Dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return RefundPolicyPage;
    }();

    RefundPolicyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    RefundPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refund-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refund-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refund-policy.page.scss */
      "./src/app/modals/refund-policy/refund-policy.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])], RefundPolicyPage);
    /***/
  },

  /***/
  "./src/app/modals/scratch-card/scratch-card.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/scratch-card/scratch-card.module.ts ***!
    \************************************************************/

  /*! exports provided: ScratchCardPageModule */

  /***/
  function srcAppModalsScratchCardScratchCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScratchCardPageModule", function () {
      return ScratchCardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _scratch_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scratch-card.page */
    "./src/app/modals/scratch-card/scratch-card.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _scratch_card_page__WEBPACK_IMPORTED_MODULE_6__["ScratchCardPage"]
    }];

    var ScratchCardPageModule = function ScratchCardPageModule() {
      _classCallCheck(this, ScratchCardPageModule);
    };

    ScratchCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_scratch_card_page__WEBPACK_IMPORTED_MODULE_6__["ScratchCardPage"]]
    })], ScratchCardPageModule);
    /***/
  },

  /***/
  "./src/app/modals/scratch-card/scratch-card.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/modals/scratch-card/scratch-card.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsScratchCardScratchCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scratch-card-popup {\n  /* Where the scratchcard will be generate. */\n  /* Background image, the result... */\n  /* The scratchcard generate with scratchcard-js */\n  /* Scratchcard informations */\n}\n.scratch-card-popup #js--sc--container {\n  position: relative;\n  margin: 0 auto;\n  height: 100px;\n  border: 1px solid black;\n  top: -100px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transform: translateY(100px);\n  opacity: 1;\n}\n.scratch-card-popup #js--sc--container:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/loader.gif\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.scratch-card-popup #js--sc--container canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.scratch-card-popup #js--sc--container img {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.scratch-card-popup #js-debug-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: yellow;\n  width: 50px;\n  height: 50px;\n  z-index: 99;\n  will-change: transform;\n  transition-duration: 300ms;\n}\n.scratch-card-popup .sc__wrapper {\n  display: block;\n  width: 100%;\n  height: 300px;\n  max-width: 300px;\n  margin: 0 auto;\n  border: 5px solid rgba(255, 255, 255, 0.5);\n}\n.scratch-card-popup .sc__container {\n  position: relative;\n  overflow: hidden;\n  max-height: 300px;\n  max-width: 300px;\n}\n.scratch-card-popup .sc__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.scratch-card-popup .sc__container > img {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.scratch-card-popup .sc__container canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.scratch-card-popup .sc__infos {\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 5px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.scratch-card-popup .test {\n  color: lightsalmon;\n  font-size: 23px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3NjcmF0Y2gtY2FyZC9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxtb2RhbHNcXHNjcmF0Y2gtY2FyZFxcc2NyYXRjaC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3NjcmF0Y2gtY2FyZC9zY3JhdGNoLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBeUVFLDRDQUFBO0VBZ0JBLG9DQUFBO0VBU0EsaURBQUE7RUFTQSw2QkFBQTtBQ3RHRjtBREpFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FDS0o7QURERTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDR0o7QURBRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ0RKO0FES0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKSjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTko7QURVRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEWUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zY3JhdGNoLWNhcmQvc2NyYXRjaC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JhdGNoLWNhcmQtcG9wdXAge1xuICAjanMtLXNjLS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAvL3dpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHRvcDogLTEwMHB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8vIGFuaW1hdGlvbjogbW92ZSAycztcbiAgfVxuXG4gICNqcy0tc2MtLWNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvYWRlci5naWZcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG5cbiAgI2pzLS1zYy0tY29udGFpbmVyIGNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICNqcy0tc2MtLWNvbnRhaW5lciBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gICNqcy1kZWJ1Zy1jdXJzb3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgfVxuXG4gIC5zY19fd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoI2ZmZiwgMC41KTtcbiAgfVxuXG4gIC8qIFdoZXJlIHRoZSBzY3JhdGNoY2FyZCB3aWxsIGJlIGdlbmVyYXRlLiAqL1xuICAuc2NfX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5zY19faW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAvKiBCYWNrZ3JvdW5kIGltYWdlLCB0aGUgcmVzdWx0Li4uICovXG4gIC5zY19fY29udGFpbmVyID4gaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLyogVGhlIHNjcmF0Y2hjYXJkIGdlbmVyYXRlIHdpdGggc2NyYXRjaGNhcmQtanMgKi9cbiAgLnNjX19jb250YWluZXIgY2FudmFzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLyogU2NyYXRjaGNhcmQgaW5mb3JtYXRpb25zICovXG4gIC5zY19faW5mb3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC50ZXN0IHtcbiAgICBjb2xvcjogbGlnaHRzYWxtb247XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICB9XG59XG4iLCIuc2NyYXRjaC1jYXJkLXBvcHVwIHtcbiAgLyogV2hlcmUgdGhlIHNjcmF0Y2hjYXJkIHdpbGwgYmUgZ2VuZXJhdGUuICovXG4gIC8qIEJhY2tncm91bmQgaW1hZ2UsIHRoZSByZXN1bHQuLi4gKi9cbiAgLyogVGhlIHNjcmF0Y2hjYXJkIGdlbmVyYXRlIHdpdGggc2NyYXRjaGNhcmQtanMgKi9cbiAgLyogU2NyYXRjaGNhcmQgaW5mb3JtYXRpb25zICovXG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwICNqcy0tc2MtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0b3A6IC0xMDBweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgb3BhY2l0eTogMTtcbn1cbi5zY3JhdGNoLWNhcmQtcG9wdXAgI2pzLS1zYy0tY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2FkZXIuZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAjanMtLXNjLS1jb250YWluZXIgY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwICNqcy0tc2MtLWNvbnRhaW5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwICNqcy1kZWJ1Zy1jdXJzb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiA5OTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwIC5zY19fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5zY3JhdGNoLWNhcmQtcG9wdXAgLnNjX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAuc2NfX2lubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwIC5zY19fY29udGFpbmVyID4gaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwIC5zY19fY29udGFpbmVyIGNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAuc2NfX2luZm9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwIC50ZXN0IHtcbiAgY29sb3I6IGxpZ2h0c2FsbW9uO1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modals/scratch-card/scratch-card.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/scratch-card/scratch-card.page.ts ***!
    \**********************************************************/

  /*! exports provided: ScratchCardPage */

  /***/
  function srcAppModalsScratchCardScratchCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScratchCardPage", function () {
      return ScratchCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var ScratchCardPage = /*#__PURE__*/function () {
      function ScratchCardPage(navCtrl, popoverCtrl, navParams, appEventsService) {
        _classCallCheck(this, ScratchCardPage);

        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.appEventsService = appEventsService;
        this.data = this.navParams.get("data");
      }

      _createClass(ScratchCardPage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {}
      }, {
        key: "close",
        value: function close() {
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.data = this.navParams.get("data");
          console.log(this.data);

          var _this = this; // window.addEventListener('load', function () {


          var html = '<div class="test">' + this.data.message + '<br>(code : <strong>' + this.data.code + ')</strong></div>';
          var scContainer = document.getElementById('js--sc--container');
          var sc = new ScratchCard('#js--sc--container', {
            enabledPercentUpdate: true,
            scratchType: SCRATCH_TYPE.CIRCLE,
            // brushSrc: './images/brush.png',
            containerWidth: scContainer.offsetWidth,
            containerHeight: scContainer.offsetHeight,
            imageForwardSrc: 'assets/scratchcard.png',
            imageBackgroundSrc: '',
            htmlBackground: html,
            clearZoneRadius: 25,
            percentToFinish: 25,
            nPoints: 30,
            pointSize: 20,
            callback: function callback() {
              _this.appEventsService.publish('cardScratched', _this.data);

              console.log("Card is scratched"); //_this.close();
            }
          });
          sc.init();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScratchCardPage;
    }();

    ScratchCardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_3__["AppEventsService"]
      }];
    };

    ScratchCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scratch-card',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scratch-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/scratch-card/scratch-card.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scratch-card.page.scss */
      "./src/app/modals/scratch-card/scratch-card.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_3__["AppEventsService"]])], ScratchCardPage);
    /***/
  },

  /***/
  "./src/app/modals/select-country/select-country.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/select-country/select-country.module.ts ***!
    \****************************************************************/

  /*! exports provided: SelectCountryPageModule */

  /***/
  function srcAppModalsSelectCountrySelectCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function () {
      return SelectCountryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/modals/select-country/select-country.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]
    }];

    var SelectCountryPageModule = function SelectCountryPageModule() {
      _classCallCheck(this, SelectCountryPageModule);
    };

    SelectCountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
    })], SelectCountryPageModule);
    /***/
  },

  /***/
  "./src/app/modals/select-country/select-country.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modals/select-country/select-country.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSelectCountrySelectCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zZWxlY3QtY291bnRyeS9zZWxlY3QtY291bnRyeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/select-country/select-country.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/select-country/select-country.page.ts ***!
    \**************************************************************/

  /*! exports provided: SelectCountryPage */

  /***/
  function srcAppModalsSelectCountrySelectCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
      return SelectCountryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var SelectCountryPage = /*#__PURE__*/function () {
      function SelectCountryPage(http, appEventsService, config, modalCtrl, loading, shared, navParams, location) {
        var _this21 = this;

        _classCallCheck(this, SelectCountryPage);

        this.http = http;
        this.appEventsService = appEventsService;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.navParams = navParams;
        this.location = location;
        this.searchQuery = '';
        this.countries = new Array();
        this.items = this.countries = this.location.data.countries;
        setTimeout(function () {
          _this21.searchBar.setFocus();
        }, 250);
      }

      _createClass(SelectCountryPage, [{
        key: "initializeItems",
        value: function initializeItems() {
          this.items = this.countries;
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          // Reset items back to all of the items
          this.initializeItems(); // set val to the value of the searchbar

          var val = ev.target.value; // if the value is an empty string don't filter the items

          if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
              return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "selectCountry",
        value: function selectCountry(c) {
          var page = this.navParams.get('page');
          this.appEventsService.publish("countryChange", {
            page: page,
            value: c
          });

          if (page == 'shipping') {
            this.shared.shippingCountryName = c.name;
            this.shared.shipping.country = c.value;
            this.shared.shipping.state = null;
            this.shared.shipping.city = null;
            this.shared.shipping.postcode = null;
            this.shared.shippingStateName = "";
          } else if (page == 'billing') {
            this.shared.billingCountryName = c.name;
            this.shared.billing.country = c.value;
            this.shared.billing.state = null;
            this.shared.billing.city = null;
            this.shared.billing.postcode = null;
            this.shared.billingStateName = "";
          }

          this.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectCountryPage;
    }();

    SelectCountryPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__["LocationDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Searchbar', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"])], SelectCountryPage.prototype, "searchBar", void 0);
    SelectCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-country',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-country.page.scss */
      "./src/app/modals/select-country/select-country.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__["LocationDataService"]])], SelectCountryPage);
    /***/
  },

  /***/
  "./src/app/modals/select-zones/select-zones.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/select-zones/select-zones.module.ts ***!
    \************************************************************/

  /*! exports provided: SelectZonesPageModule */

  /***/
  function srcAppModalsSelectZonesSelectZonesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectZonesPageModule", function () {
      return SelectZonesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _select_zones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-zones.page */
    "./src/app/modals/select-zones/select-zones.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _select_zones_page__WEBPACK_IMPORTED_MODULE_6__["SelectZonesPage"]
    }];

    var SelectZonesPageModule = function SelectZonesPageModule() {
      _classCallCheck(this, SelectZonesPageModule);
    };

    SelectZonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_select_zones_page__WEBPACK_IMPORTED_MODULE_6__["SelectZonesPage"]]
    })], SelectZonesPageModule);
    /***/
  },

  /***/
  "./src/app/modals/select-zones/select-zones.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/modals/select-zones/select-zones.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSelectZonesSelectZonesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zZWxlY3Qtem9uZXMvc2VsZWN0LXpvbmVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modals/select-zones/select-zones.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/select-zones/select-zones.page.ts ***!
    \**********************************************************/

  /*! exports provided: SelectZonesPage */

  /***/
  function srcAppModalsSelectZonesSelectZonesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectZonesPage", function () {
      return SelectZonesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var SelectZonesPage = /*#__PURE__*/function () {
      function SelectZonesPage(navCtrl, navParams, http, appEventsService, config, modalCtrl, loading, shared, location) {
        _classCallCheck(this, SelectZonesPage);

        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appEventsService = appEventsService;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.items = [];
        this.zones = [];
        var page = this.navParams.get('page');
        var id = this.navParams.get('id');

        if (page == 'shipping') {
          this.items = this.zones = this.location.data.states[this.shared.shipping.country];
        } else {
          this.items = this.zones = this.location.data.states[this.shared.billing.country];
        }

        if (page == 'shippingUpdate' || page == 'billingUpdate') {
          console.log(id);
          this.items = this.zones = this.location.data.states[id];
          if (this.items == undefined) this.items = this.zones = [];
          console.log(this.items);
        }
      }

      _createClass(SelectZonesPage, [{
        key: "initializeItems",
        value: function initializeItems() {
          this.items = this.zones;
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          // Reset items back to all of the items
          this.initializeItems(); // set val to the value of the searchbar

          var val = ev.target.value; // if the value is an empty string don't filter the items

          if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
              return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "selectZone",
        value: function selectZone(c) {
          var page = this.navParams.get('page');
          this.appEventsService.publish("stateChange", {
            page: page,
            value: c
          });

          if (page == 'shipping') {
            if (c == 'other') {
              this.shared.shipping.state = 'other';
              this.shared.shippingStateName = "other";
            } else {
              this.shared.shipping.state = c.value;
              this.shared.shippingStateName = c.name; // this.shared.orderDetails.tax_zone_id = c.zone_id;
            }
          } else {
            if (c == 'other') {
              this.shared.billing.state = 'other';
              this.shared.billingStateName = "other";
            } else {
              this.shared.billing.state = c.value;
              this.shared.billingStateName = c.name;
            }
          }

          this.dismiss();
        }
      }, {
        key: "hideOther",
        value: function hideOther() {
          if (this.zones == undefined) this.zones = [];
          if (this.zones.length == 0) return true;else return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectZonesPage;
    }();

    SelectZonesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]
      }];
    };

    SelectZonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-zones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-zones.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-zones.page.scss */
      "./src/app/modals/select-zones/select-zones.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__["AppEventsService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]])], SelectZonesPage);
    /***/
  },

  /***/
  "./src/app/modals/sign-up/sign-up.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/modals/sign-up/sign-up.module.ts ***!
    \**************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppModalsSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/modals/sign-up/sign-up.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
    }];

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]],
      entryComponents: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/modals/sign-up/sign-up.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/modals/sign-up/sign-up.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-avatar {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100px;\n  width: 100px;\n}\nion-content form {\n  padding-top: 28px;\n}\nion-content form ion-item {\n  --padding-start: 0;\n  --background: var(--ion-background-color);\n}\nion-content form ion-item ion-label {\n  color: rgba(var(--ion-text-color-rgb), 0.5);\n}\nion-content form ion-item:nth-child(6) {\n  height: 33px;\n}\nion-content form ion-item:nth-child(6) ion-label {\n  color: red;\n}\nion-content form p {\n  font-size: 14px;\n}\nion-content form ion-button {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3NpZ24tdXAvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcbW9kYWxzXFxzaWduLXVwXFxzaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RKO0FES0U7RUFDRSxpQkFBQTtBQ0hKO0FESUk7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0FDRk47QURHTTtFQUNFLDJDQUFBO0FDRFI7QURHTTtFQUNFLFlBQUE7QUNEUjtBREVRO0VBQ0UsVUFBQTtBQ0FWO0FESUk7RUFDRSxlQUFBO0FDRk47QURJSTtFQUNFLHlCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLy8gRm9yIGltYWdlIGRlc2lnblxuICBpb24tYXZhdGFyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLy8gRm9yIEZvcm1cbiAgZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDI4cHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IpLCAwLjUpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoNikge1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7ICAgXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWF2YXRhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiksIDAuNSk7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtOm50aC1jaGlsZCg2KSB7XG4gIGhlaWdodDogMzNweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW06bnRoLWNoaWxkKDYpIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5pb24tY29udGVudCBmb3JtIHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/sign-up/sign-up.page.ts":
  /*!************************************************!*\
    !*** ./src/app/modals/sign-up/sign-up.page.ts ***!
    \************************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppModalsSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../term-services/term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../refund-policy/refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../privacy-policy/privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(http, config, modalCtrl, loading, shared, platform) {
        _classCallCheck(this, SignUpPage);

        this.http = http;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.platform = platform;
        this.formData = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          username: '',
          wpgdprc: 1,
          register: 'Register'
        };
        this.errorMessage = ''; // /api/appusers/register/?insecure=cool&username=abcd&password=123456&email=abcdxyz@gmail.com&display_name=aopi&nonce=6ad2605198
      }

      _createClass(SignUpPage, [{
        key: "createAccount",
        value: function createAccount() {
          var _this22 = this;

          this.loading.show();
          this.http.get(this.config.url + '/api/get_nonce/?controller=appusers&method=register').subscribe(function (data) {
            _this22.signUp(data.nonce);
          });
        }
      }, {
        key: "signUp",
        value: function signUp(nonce) {
          var _this23 = this;

          console.log(nonce);
          this.errorMessage = '';
          var formData = new FormData();
          formData.append("username", this.formData.username);
          formData.append("email", this.formData.email);
          formData.append("display_name", this.formData.first_name + " " + this.formData.last_name);
          formData.append("nonce", nonce);
          formData.append("password", this.formData.password);
          formData.append("first_name", this.formData.first_name);
          formData.append("last_name", this.formData.last_name);
          this.http.post(this.config.url + '/api/appusers/register/?insecure=cool', formData).subscribe(function (data) {
            _this23.loading.hide();

            if (data.status == "ok") {
              _this23.shared.toast("User Created. Login Using your Username & Password");

              _this23.dismiss();
            } else {
              _this23.errorMessage = data.error;
              console.log(_this23.errorMessage);
            }
          }, function (err) {
            _this23.loading.hide();

            if (err.ok == false) {
              console.log(err);
              _this23.errorMessage = err.error.error;
            }
          });
        }
      }, {
        key: "openPrivacyPolicyPage",
        value: function openPrivacyPolicyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var modal;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.modalCtrl.create({
                      component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyPage"]
                    });

                  case 2:
                    modal = _context13.sent;
                    _context13.next = 5;
                    return modal.present();

                  case 5:
                    return _context13.abrupt("return", _context13.sent);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "openTermServicesPage",
        value: function openTermServicesPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var modal;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.modalCtrl.create({
                      component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_7__["TermServicesPage"]
                    });

                  case 2:
                    modal = _context14.sent;
                    _context14.next = 5;
                    return modal.present();

                  case 5:
                    return _context14.abrupt("return", _context14.sent);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "openRefundPolicyPage",
        value: function openRefundPolicyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var modal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.modalCtrl.create({
                      component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_8__["RefundPolicyPage"]
                    });

                  case 2:
                    modal = _context15.sent;
                    _context15.next = 5;
                    return modal.present();

                  case 5:
                    return _context15.abrupt("return", _context15.sent);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.modalCtrl.dismiss();

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/modals/sign-up/sign-up.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], SignUpPage);
    /***/
  },

  /***/
  "./src/app/modals/term-services/term-services.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/term-services/term-services.module.ts ***!
    \**************************************************************/

  /*! exports provided: TermServicesPageModule */

  /***/
  function srcAppModalsTermServicesTermServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermServicesPageModule", function () {
      return TermServicesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _term_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]
    }];

    var TermServicesPageModule = function TermServicesPageModule() {
      _classCallCheck(this, TermServicesPageModule);
    };

    TermServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]],
      entryComponents: [_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]]
    })], TermServicesPageModule);
    /***/
  },

  /***/
  "./src/app/modals/term-services/term-services.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/term-services/term-services.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsTermServicesTermServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-text p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3Rlcm0tc2VydmljZXMvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcbW9kYWxzXFx0ZXJtLXNlcnZpY2VzXFx0ZXJtLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3Rlcm0tc2VydmljZXMvdGVybS1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvdGVybS1zZXJ2aWNlcy90ZXJtLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCBpb24tdGV4dCBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/term-services/term-services.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/term-services/term-services.page.ts ***!
    \************************************************************/

  /*! exports provided: TermServicesPage */

  /***/
  function srcAppModalsTermServicesTermServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermServicesPage", function () {
      return TermServicesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var TermServicesPage = /*#__PURE__*/function () {
      function TermServicesPage(mdCtrl, config) {
        _classCallCheck(this, TermServicesPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(TermServicesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // For Modal Dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return TermServicesPage;
    }();

    TermServicesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    TermServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./term-services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./term-services.page.scss */
      "./src/app/modals/term-services/term-services.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], TermServicesPage);
    /***/
  },

  /***/
  "./src/components/menu-component/menu-component.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/components/menu-component/menu-component.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsMenuComponentMenuComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n  width: 100%;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxjb21wb25lbnRzXFxtZW51LWNvbXBvbmVudFxcbWVudS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVJO0VBQ0Usd0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuY29sbGFwc2VkIHtcbiAgICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9IiwiLmV4cGFuZC13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/components/menu-component/menu-component.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/components/menu-component/menu-component.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MenuComponentComponent */

  /***/
  function srcComponentsMenuComponentMenuComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponentComponent", function () {
      return MenuComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponentComponent = /*#__PURE__*/function () {
      function MenuComponentComponent(renderer) {
        _classCallCheck(this, MenuComponentComponent);

        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
      }

      _createClass(MenuComponentComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
        }
      }]);

      return MenuComponentComponent;
    }();

    MenuComponentComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MenuComponentComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MenuComponentComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponentComponent.prototype, "expandHeight", void 0);
    MenuComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/menu-component/menu-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-component.component.scss */
      "./src/components/menu-component/menu-component.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], MenuComponentComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    //import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/pipes/curency.pipe.ts":
  /*!***********************************!*\
    !*** ./src/pipes/curency.pipe.ts ***!
    \***********************************/

  /*! exports provided: CurencyPipe */

  /***/
  function srcPipesCurencyPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurencyPipe", function () {
      return CurencyPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var CurencyPipe = /*#__PURE__*/function () {
      function CurencyPipe() {
        _classCallCheck(this, CurencyPipe);

        this.currency = jquery__WEBPACK_IMPORTED_MODULE_2__('<textarea />').html(localStorage.currency).text();
        this.position = localStorage.currencyPos;
        this.decimal = localStorage.decimals;
      }

      _createClass(CurencyPipe, [{
        key: "transform",
        value: function transform(value) {
          var v = parseFloat(value).toFixed(this.decimal);

          if (v.toString() == 'NaN') {
            if (this.position == 'left') return this.currency + "" + value;else return value + " " + this.currency;
          } else {
            if (this.position == 'left') return this.currency + "" + v;else return v + " " + this.currency;
          }
        }
      }]);

      return CurencyPipe;
    }();

    CurencyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'curency'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CurencyPipe);
    /***/
  },

  /***/
  "./src/pipes/pipes.module.ts":
  /*!***********************************!*\
    !*** ./src/pipes/pipes.module.ts ***!
    \***********************************/

  /*! exports provided: PipesModule */

  /***/
  function srcPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curency.pipe */
    "./src/pipes/curency.pipe.ts");
    /* harmony import */


    var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sanitize-html.pipe */
    "./src/pipes/sanitize-html.pipe.ts");
    /* harmony import */


    var _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./translate-app/translate-app.pipe */
    "./src/pipes/translate-app/translate-app.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_curency_pipe__WEBPACK_IMPORTED_MODULE_2__["CurencyPipe"], _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_4__["TranslateAppPipe"], _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_3__["sanitizeHtmlPipe"]],
      imports: [],
      exports: [_curency_pipe__WEBPACK_IMPORTED_MODULE_2__["CurencyPipe"], _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_4__["TranslateAppPipe"], _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_3__["sanitizeHtmlPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/pipes/sanitize-html.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/pipes/sanitize-html.pipe.ts ***!
    \*****************************************/

  /*! exports provided: sanitizeHtmlPipe */

  /***/
  function srcPipesSanitizeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sanitizeHtmlPipe", function () {
      return sanitizeHtmlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var sanitizeHtmlPipe = /*#__PURE__*/function () {
      function sanitizeHtmlPipe(sanitizer) {
        _classCallCheck(this, sanitizeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(sanitizeHtmlPipe, [{
        key: "transform",
        value: function transform(content) {
          return this.sanitizer.bypassSecurityTrustHtml(content);
        }
      }]);

      return sanitizeHtmlPipe;
    }();

    sanitizeHtmlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    sanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sainitizeHtml',
      pure: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], sanitizeHtmlPipe);
    /***/
  },

  /***/
  "./src/pipes/translate-app/translate-app.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/pipes/translate-app/translate-app.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: TranslateAppPipe */

  /***/
  function srcPipesTranslateAppTranslateAppPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateAppPipe", function () {
      return TranslateAppPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var TranslateAppPipe = /*#__PURE__*/function () {
      function TranslateAppPipe(shared) {
        _classCallCheck(this, TranslateAppPipe);

        this.shared = shared;
      }

      _createClass(TranslateAppPipe, [{
        key: "transform",
        value: function transform(value) {
          //console.log(value + " " + this.shared.translationListArray[value.toString()]);
          if (this.shared.translationListArray[value] == undefined) return value;
          return this.shared.translationListArray[value];
        }
      }]);

      return TranslateAppPipe;
    }();

    TranslateAppPipe.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }];
    };

    TranslateAppPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'translate'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])], TranslateAppPipe);
    /***/
  },

  /***/
  "./src/providers/app-events/app-events.service.ts":
  /*!********************************************************!*\
    !*** ./src/providers/app-events/app-events.service.ts ***!
    \********************************************************/

  /*! exports provided: AppEventsService */

  /***/
  function srcProvidersAppEventsAppEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppEventsService", function () {
      return AppEventsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/Subscription */
    "./node_modules/rxjs/internal/Subscription.js");
    /* harmony import */


    var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppEventsService = /*#__PURE__*/function () {
      function AppEventsService(http) {
        _classCallCheck(this, AppEventsService);

        this.http = http;
        this.openCategoryPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openDeepLink = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openHomePage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openShippingAddressPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.setting = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showAd = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.settingsLoaded = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recentDeleted = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cartChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.wishListUpdate = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openThankYouPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openSubcategoryPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.countryChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stateChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cardScratched = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateSideMenu = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subscriptions = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.openCategoryPage$ = this.openCategoryPage.asObservable();
        this.openDeepLink$ = this.openDeepLink.asObservable();
        this.openHomePage$ = this.openHomePage.asObservable();
        this.openShippingAddressPage$ = this.openShippingAddressPage.asObservable();
        this.setting$ = this.setting.asObservable();
        this.recentDeleted$ = this.recentDeleted.asObservable();
        this.settingsLoaded$ = this.settingsLoaded.asObservable();
        this.cartChange$ = this.cartChange.asObservable();
        this.wishListUpdate$ = this.wishListUpdate.asObservable();
        this.showAd$ = this.showAd.asObservable();
        this.openThankYouPage$ = this.openThankYouPage.asObservable();
        this.openSubcategoryPage$ = this.openSubcategoryPage.asObservable();
        this.countryChange$ = this.countryChange.asObservable();
        this.stateChange$ = this.stateChange.asObservable();
        this.cardScratched$ = this.cardScratched.asObservable();
        this.updateSideMenu$ = this.updateSideMenu.asObservable();
      }

      _createClass(AppEventsService, [{
        key: "publish",
        value: function publish(eventName, eventData) {
          if (eventName == "openCategoryPage") this.openCategoryPage.next(eventData);
          if (eventName == "openDeepLink") this.openDeepLink.next(eventData);
          if (eventName == "openHomePage") this.openHomePage.next(eventData);
          if (eventName == "openShippingAddressPage") this.openShippingAddressPage.next(eventData);
          if (eventName == "setting") this.setting.next(eventData);
          if (eventName == "settingsLoaded") this.settingsLoaded.next(eventData);
          if (eventName == "recentDeleted") this.recentDeleted.next(eventData);
          if (eventName == "cartChange") this.cartChange.next(eventData);
          if (eventName == "wishListUpdate") this.wishListUpdate.next(eventData);
          if (eventName == "showAd") this.showAd.next(eventData);
          if (eventName == "openThankYouPage") this.openThankYouPage.next(eventData);
          if (eventName == "openSubcategoryPage") this.openSubcategoryPage.next(eventData);
          if (eventName == "countryChange") this.countryChange.next(eventData);
          if (eventName == "stateChange") this.stateChange.next(eventData);
          if (eventName == "cardScratched") this.cardScratched.next(eventData);
          if (eventName == "updateSideMenu") this.updateSideMenu.next(eventData);
        }
      }, {
        key: "subscribe",
        value: function subscribe(eventName) {
          if (eventName == "openCategoryPage") return {
            subscriptions: this.subscriptions,
            event: this.openCategoryPage$
          };
          if (eventName == "openDeepLink") return {
            subscriptions: this.subscriptions,
            event: this.openDeepLink$
          };
          if (eventName == "openHomePage") return {
            subscriptions: this.subscriptions,
            event: this.openHomePage$
          };
          if (eventName == "setting") return {
            subscriptions: this.subscriptions,
            event: this.setting$
          };
          if (eventName == "settingsLoaded") return {
            subscriptions: this.subscriptions,
            event: this.settingsLoaded$
          };
          if (eventName == "recentDeleted") return {
            subscriptions: this.subscriptions,
            event: this.recentDeleted$
          };
          if (eventName == "cartChange") return {
            subscriptions: this.subscriptions,
            event: this.cartChange$
          };
          if (eventName == "wishListUpdate") return {
            subscriptions: this.subscriptions,
            event: this.wishListUpdate$
          };
          if (eventName == "showAd") return {
            subscriptions: this.subscriptions,
            event: this.showAd$
          };
          if (eventName == "openShippingAddressPage") return {
            subscriptions: this.subscriptions,
            event: this.openShippingAddressPage$
          };
          if (eventName == "openThankYouPage") return {
            subscriptions: this.subscriptions,
            event: this.openThankYouPage$
          };
          if (eventName == "openSubcategoryPage") return {
            subscriptions: this.subscriptions,
            event: this.openSubcategoryPage$
          };
          if (eventName == "countryChange") return {
            subscriptions: this.subscriptions,
            event: this.countryChange$
          };
          if (eventName == "stateChange") return {
            subscriptions: this.subscriptions,
            event: this.stateChange$
          };
          if (eventName == "cardScratched") return {
            subscriptions: this.subscriptions,
            event: this.cardScratched$
          };
          if (eventName == "updateSideMenu") return {
            subscriptions: this.subscriptions,
            event: this.updateSideMenu$
          };
        }
      }]);

      return AppEventsService;
    }();

    AppEventsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    AppEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], AppEventsService);
    /***/
  },

  /***/
  "./src/providers/config/config.service.ts":
  /*!************************************************!*\
    !*** ./src/providers/config/config.service.ts ***!
    \************************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcProvidersConfigConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    if (localStorage.languageCode == undefined) {
      localStorage.languageCode = "en"; //default language code

      localStorage.languageDirection = "ltr"; //default language direction of app

      localStorage.currency = "&#128;"; //default currecny html code to show in app.
      // Please visit this link to get your html code  https://html-css-js.com/html/character-codes/currency/

      localStorage.currencyCode = "EUR"; //default currency code

      localStorage.currencyPos = "left"; //default currency position

      localStorage.decimals = 2; //default currecny decimal

      localStorage.tabsNavigation = true; //default currecny decimal
    }

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(http, storage, platform, applicationRef, appEventsService, httpNative) {
        var _this24 = this;

        _classCallCheck(this, ConfigService);

        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.applicationRef = applicationRef;
        this.appEventsService = appEventsService;
        this.httpNative = httpNative;
        this.url = 'http://porto.amserver.it/';
        this.consumerKey = 'ck_c8fd88d91c5de203cab58e1b20d09372a47e938c';
        this.consumerSecret = 'cs_48db3754ebf8619e96a069b623251cc2892323b1';
        this.face = 'https://www.facebook.com/ritmodobrazil/';
        this.insta = 'https://www.instagram.com/ritmodobrazil/';
        this.you = 'https://www.youtube.com/channel/UCiTbbBpCVWo8QMhyaB69B6A/';
        this.site = 'https://ritmodobrazil.com/newsite/';
        this.showIntroPage = 1; // show/hide intro page value 1 for show, 0 for hide

        this.appInProduction = true;
        this.productSlidesPerPage = 2.5;
        this.appNavigationTabs = localStorage.tabsNavigation; //  true for tabs layout and false for sidemenu layout

        this.appTheme = 'default';
        this.darkMode = false;
        this.bannerAnimationEffect = "default"; // fade, coverFlow, flip, cube, default

        this.bannerStyle = "default"; // default, squareBullets, numberBullets, bottomBulletsWhiteBackground, progressBar, verticalRightBullets, verticalLeftBullets

        this.productCardStyle = "1";
        this.onesignalAppId = "a26b61b2-d0b8-4944-b45d-2a117379df7d";
        this.onesignalSenderId = "1016954013296";
        this.googleMapId = "";
        this.admob = 0; // show/hide ads on android value 1 for show, 0 for hide

        this.admobBannerid = '';
        this.admobIntid = '';
        this.admobIos = 0; // show/hide ads on ios value 1 for show, 0 for hide

        this.admobBanneridIos = '';
        this.admobIntidIos = '';
        this.languageCode = localStorage.languageCode; //default language of app

        this.languageDirection = localStorage.languageDirection; //default direction of app

        this.appDirection = this.languageDirection; // application direction

        this.currency = localStorage.currency;
        this.productsArguments = "lang=" + localStorage.languageCode + "&currency=" + localStorage.currencyCode; //additional product arguments for query

        this.Woocommerce = WooCommerceAPI.WooCommerceAPI({
          url: this.url,
          consumerKey: this.consumerKey,
          consumerSecret: this.consumerSecret,
          wpAPI: true,
          queryStringAuth: true,
          version: 'wc/v3'
        });
        this.urlExt = this.url + "/wp-json/woo_app_connect/mobile/";
        this.langId = "1";
        this.loader = 'dots';
        this.newProductDuration = 20;
        this.cartButton = 1; //1 = show and 0 = hide

        this.currencyPos = localStorage.currencyPos;
        this.homePage = 1;
        this.categoryPage = 1;
        this.siteUrl = '';
        this.appName = '';
        this.packgeName = 1;
        this.introPage = 1;
        this.myOrdersPage = 1;
        this.newsPage = 1;
        this.wishListPage = 1;
        this.shippingAddressPage = 1;
        this.aboutUsPage = 1;
        this.contactUsPage = 1;
        this.editProfilePage = 1;
        this.settingPage = 1;
        this.rateApp = 1;
        this.shareApp = 1;
        this.fbButton = 1;
        this.googleButton = 1;
        this.notificationType = "";
        this.privacyPolicy = "";
        this.termServices = "";
        this.aboutUs = "";
        this.refundPolicy = "";
        this.filterMaxPrice = 1000;
        this.guestCheckOut = false;
        this.checkOutPage = 1;
        this.defaultIcons = true;
        this.orderCancelButton = false;
        this.addressPage = true;
        this.downloadPage = true;
        this.showVendorInfo = false; //for dokan plugin

        this.showWcVendorInfo = false;
        this.multiLanguage = false;
        this.multiCurrency = false;
        this.appSettings = {};
        this.enableGeoFencing = false;
        this.enableDeliveryTracking = false;
        this.enableWpPointReward = false;
        this.trackingUrl = "";
        this.currentSettings = 1;
        this.allSettings = {};
        this.currentRoute = "tabs/home";
        this.httpAllDataArray = [];
        if (localStorage.tabsNavigation == 'true' || localStorage.tabsNavigation == true) this.appNavigationTabs = true;else this.appNavigationTabs = false;
        this.saveDefaultCurrency();

        if (!this.appInProduction) {
          storage.get('httpAllDataArray').then(function (val) {
            if (val != null) _this24.httpAllDataArray = val;
          });
        }

        if (this.appNavigationTabs == false) this.currentRoute = "";
      }

      _createClass(ConfigService, [{
        key: "getWithUrl",
        value: function getWithUrl(url) {
          return this.getDataHttp(url);
        }
      }, {
        key: "getWoo",
        value: function getWoo(url) {
          var request = this.getUrl("get", url).url;
          return this.getDataHttp(request);
        }
      }, {
        key: "getDataHttp",
        value: function getDataHttp(request) {
          var _this25 = this;

          var loadedData = this.loadAlreadyLoadedHttp(request);

          if (loadedData.found == false) {
            return new Promise(function (resolve) {
              if (_this25.platform.is('cordova')) {
                _this25.httpNative.get(request, {}, {}).then(function (data) {
                  var d = JSON.parse(data.data);

                  _this25.storeHttpData(request, d);

                  resolve(d); //console.log(data.status);

                  console.log(data.data); // data received by server
                  //console.log(data.headers);
                })["catch"](function (error) {
                  console.log(error.status);
                  console.log(error.error); // error message as string

                  console.log(error.headers);
                });
              } else {
                _this25.http.get(request).subscribe(function (data) {
                  var d = data;

                  _this25.storeHttpData(request, d);

                  resolve(d);
                }, function (err) {
                  console.log("Error : " + request);
                  console.log(err);
                });
              }
            });
          } else {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(loadedData.data);
              }, 200);
            });
          }
        }
      }, {
        key: "putAsync",
        value: function putAsync(url, dataToPost) {
          var _this26 = this;

          return new Promise(function (resolve) {
            var request = _this26.getUrl("put", url + "/"); //console.log(dataToPost);


            if (_this26.platform.is('cordova')) {
              _this26.httpNative.setDataSerializer("json");

              _this26.httpNative.put(request.url, dataToPost, request.headers).then(function (data) {
                resolve(JSON.parse(data.data)); //console.log(data.status);
                //console.log(data.data); // data received by server
                //console.log(data.headers);
              })["catch"](function (error) {
                console.log("------------------ error.status ---------------------");
                console.log(error.status);
                console.log("------------------ error.error ---------------------");
                console.log(error.error); // error message as string

                console.log("------------------ error.headers ---------------------");
                console.log(error.headers);
              });
            } else {
              _this26.http.put(request.url, dataToPost, request.headers).subscribe(function (data) {
                resolve(data);
              }, function (err) {
                console.log("Error : " + request.url);
                console.log(err);
              });
            }
          });
        }
      }, {
        key: "getUrl",
        value: function getUrl(type, endpoint) {
          var start = "&";
          if (type == "put") start = "?";

          var r = this.Woocommerce._request2(type, endpoint);

          var s = r.url + start;

          if (this.url.indexOf('https://') != -1) {
            s = s + "consumer_key=" + this.consumerKey;
            s = s + "&consumer_secret=" + this.consumerSecret;
          } else if (this.url.indexOf('http://') != -1) {
            s = s + "oauth_consumer_key=" + r.qs.oauth_consumer_key;
            s = s + "&oauth_nonce=" + r.qs.oauth_nonce;
            s = s + "&oauth_signature=" + r.qs.oauth_signature;
            s = s + "&oauth_signature_method=" + r.qs.oauth_signature_method;
            s = s + "&oauth_timestamp=" + r.qs.oauth_timestamp;
            s = s + "&oauth_version=" + r.qs.oauth_version;
          }

          return {
            url: s,
            headers: r.headers
          };
        }
      }, {
        key: "loadAlreadyLoadedHttp",
        value: function loadAlreadyLoadedHttp(url) {
          var found = false;
          var data = {};

          if (!this.appInProduction) {
            var path = url;
            if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];
            var d = this.httpAllDataArray[path];

            if (d != undefined) {
              data = d;
              found = true; // console.log("------------ url match -------------");
              // console.log(path);
            }

            if (found == false) {// console.log("------------ url not match -------------");
              // console.log(path);
            }
          }

          return {
            found: found,
            data: data
          };
        }
      }, {
        key: "storeHttpData",
        value: function storeHttpData(url, data) {
          if (!this.appInProduction) {
            //======================  for debuging =====================
            var path = url;
            if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];
            if (path.indexOf('orders/?') != -1) return;
            this.httpAllDataArray[path] = data;
            this.storage.set('httpAllDataArray', this.httpAllDataArray);
          }
        }
      }, {
        key: "siteSetting",
        value: function siteSetting() {
          var _this27 = this;

          return new Promise(function (resolve) {
            _this27.storage.get('appSettings').then(function (val) {
              if (val == null) {
                _this27.http.get(_this27.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe(function (data) {
                  _this27.appSettings = data;

                  _this27.storage.set("appSettings", _this27.appSettings);

                  _this27.defaultSettings();

                  _this27.appEventsService.publish('settingsLoaded', "");

                  resolve();
                });
              } else {
                _this27.appSettings = val;

                _this27.defaultSettings();

                _this27.appEventsService.publish('settingsLoaded', "");

                resolve();
              }
            });
          });
        }
      }, {
        key: "defaultSettings",
        value: function defaultSettings() {
          this.homePage = parseInt(this.appSettings.home_style);
          this.categoryPage = parseInt(this.appSettings.category_style);
          this.introPage = parseInt(this.appSettings.intro_page);
          this.myOrdersPage = parseInt(this.appSettings.my_orders_page);
          this.newsPage = parseInt(this.appSettings.news_page);
          this.wishListPage = parseInt(this.appSettings.wish_list_page);
          this.shippingAddressPage = parseInt(this.appSettings.shipping_address_page);
          this.aboutUsPage = parseInt(this.appSettings.about_us_page);
          this.contactUsPage = this.appSettings.contact_us_page;
          this.editProfilePage = parseInt(this.appSettings.edit_profile_page);
          this.settingPage = parseInt(this.appSettings.setting_page); //this.currency = this.appSettings.currency_symbol;

          this.cartButton = parseInt(this.appSettings.cart_button);
          this.productCardStyle = this.appSettings.card_style;
          this.setBannerStyle(this.appSettings.banner_style);
          this.footerShowHide = parseInt(this.appSettings.footer_button);
          this.addressPage = this.appSettings.bill_ship_info == "1" ? true : false;
          this.downloadPage = this.appSettings.downloads == "1" ? true : false;
          this.multiLanguage = this.appSettings.wpml_enabled == "1" ? true : false;
          this.multiCurrency = this.appSettings.wp_multi_currency == "1" ? true : false;
          this.showVendorInfo = this.appSettings.mvf_enabled == "1" ? true : false;
          this.showWcVendorInfo = this.appSettings.mvf_enabled == "2" ? true : false;
          this.enableGeoFencing = this.appSettings.geo_fencing == "1" ? true : false;
          this.enableDeliveryTracking = this.appSettings.delivery_tracking == "1" ? true : false;
          this.enableWpPointReward = this.appSettings.wp_point_reward == "1" ? true : false;
          this.rateApp = parseInt(this.appSettings.rate_app);
          this.shareApp = parseInt(this.appSettings.share_app);
          this.defaultIcons = this.appSettings.sidebar_menu_icon == "1" ? false : true;
          this.currentSettings = this.appSettings.update_order;

          if (this.appNavigationTabs) {
            if (this.homePage != 1) this.currentRoute = "tabs/home" + this.homePage;
          }

          this.appEventsService.publish("openDeepLink", ""); //this.initializeGeoFence();
        }
      }, {
        key: "getCurrentHomePage",
        value: function getCurrentHomePage() {
          if (this.homePage == 1) return "home";else return "home" + this.homePage;
        }
      }, {
        key: "getCurrentCategoriesPage",
        value: function getCurrentCategoriesPage() {
          if (this.categoryPage == 1) return "categories";else return "categories" + this.categoryPage;
        }
      }, {
        key: "checkingNewSettingsFromServer",
        value: function checkingNewSettingsFromServer() {
          var _this28 = this;

          this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe(function (data) {
            var settings = data;
            _this28.address = settings.address + ', ' + settings.city + ', ' + settings.state + ' ' + settings.zip + ', ' + settings.country;
            _this28.email = settings.contact_us_email;
            _this28.latitude = settings.latitude;
            _this28.longitude = settings.longitude;
            _this28.phoneNo = settings.phone_no;
            _this28.newProductDuration = settings.new_product_duration;
            _this28.notifText = settings.notification_text;
            _this28.notifTitle = settings.notification_title;
            _this28.notifDuration = settings.notification_duration;
            _this28.packgeName = _this28.appSettings.package_name;
            _this28.appName = settings.app_name;
            _this28.fbButton = parseInt(settings.facebook_login);
            _this28.siteUrl = _this28.appSettings.site_url;
            _this28.filterMaxPrice = parseInt(settings.filter_max_price);
            _this28.guestCheckOut = settings.checkout_process == "yes" ? true : false;
            _this28.checkOutPage = parseInt(settings.one_page_checkout); //this.checkOutPage = 2;

            _this28.orderCancelButton = settings.cancel_order_button == "1" ? true : false;
            _this28.cancelOrderTime = parseInt(settings.cancel_order_hours);
            _this28.trackingUrl = settings.tracking_url;

            _this28.applicationRef.tick();

            _this28.reloadingWithNewSettings(settings);
          });
        }
      }, {
        key: "reloadingWithNewSettings",
        value: function reloadingWithNewSettings(data) {
          //console.log(this.currentSettings + " setting cahnge " + data.update_order);
          if (this.currentSettings != data.update_order) {
            if (data.wp_multi_currency == "0") this.restoreDefaultCurrency();
            this.storage.set("appSettings", data);
          }
        }
      }, {
        key: "saveDefaultCurrency",
        value: function saveDefaultCurrency() {
          if (localStorage.appStartFirstTime == undefined) {
            localStorage.currencyDefault = localStorage.currency; //default currecny symbol to show in app

            localStorage.currencyCodeDefault = localStorage.currencyCode; //default currency code

            localStorage.currencyPosDefault = localStorage.currencyPos; //default currency position

            localStorage.decimalsDefault = localStorage.decimals; //default currecny decimal

            localStorage.appStartFirstTime = "started";
          }
        }
      }, {
        key: "restoreDefaultCurrency",
        value: function restoreDefaultCurrency() {
          if (localStorage.appStartFirstTime == "started") {
            localStorage.currency = localStorage.currencyDefault; //default currecny symbol to show in app

            localStorage.currencyCode = localStorage.currencyCodeDefault; //default currency code

            localStorage.currencyPos = localStorage.currencyPosDefault; //default currency position

            localStorage.decimals = localStorage.decimalsDefault; //default currecny decimal
          }
        }
      }, {
        key: "setBannerStyle",
        value: function setBannerStyle(s) {
          switch (parseInt(s)) {
            case 4:
              this.bannerStyle = "squareBullets";
              break;

            case 5:
              this.bannerStyle = "numberBullets";
              break;

            case 3:
              this.bannerStyle = "bottomBulletsWhiteBackground";
              break;

            case 2:
              this.bannerStyle = "progressBar";
              break;

            case 6:
              this.bannerStyle = "verticalRightBullets";
              break;
            // case 5:
            //   this.bannerStyle = "verticalLeftBullets"
            //   break;

            case 1:
              this.bannerStyle = "default";
              break;

            default:
              this.bannerStyle = "default";
              break;
          }
        }
      }, {
        key: "setCardStyle",
        value: function setCardStyle(value) {
          if (!this.appInProduction) {
            this.productCardStyle = value;
          }

          console.log(value);
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__["AppEventsService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }];
    };

    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__["AppEventsService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]])], ConfigService);
    /***/
  },

  /***/
  "./src/providers/loading/loading.service.ts":
  /*!**************************************************!*\
    !*** ./src/providers/loading/loading.service.ts ***!
    \**************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcProvidersLoadingLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var LoadingService = /*#__PURE__*/function () {
      function LoadingService(loadingCtrl) {
        _classCallCheck(this, LoadingService);

        this.loadingCtrl = loadingCtrl;
      }

      _createClass(LoadingService, [{
        key: "show",
        value: function show() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.loadingCtrl.create({
                      duration: 7000
                    });

                  case 2:
                    this.loading = _context17.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          try {
            this.loading.dismiss();
          } catch (error) {}
        }
      }, {
        key: "autoHide",
        value: function autoHide(time) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.loadingCtrl.create({
                      duration: time
                    });

                  case 2:
                    this.loading = _context18.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return LoadingService;
    }();

    LoadingService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], LoadingService);
    /***/
  },

  /***/
  "./src/providers/location-data/location-data.service.ts":
  /*!**************************************************************!*\
    !*** ./src/providers/location-data/location-data.service.ts ***!
    \**************************************************************/

  /*! exports provided: LocationDataService */

  /***/
  function srcProvidersLocationDataLocationDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationDataService", function () {
      return LocationDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocationDataService = /*#__PURE__*/function () {
      function LocationDataService() {
        _classCallCheck(this, LocationDataService);

        this.data = {
          "countries": [{
            "value": "AF",
            "name": "Afghanistan"
          }, {
            "value": "AL",
            "name": "Albania"
          }, {
            "value": "DZ",
            "name": "Algeria"
          }, {
            "value": "AS",
            "name": "American Samoa"
          }, {
            "value": "AD",
            "name": "Andorra"
          }, {
            "value": "AO",
            "name": "Angola"
          }, {
            "value": "AI",
            "name": "Anguilla"
          }, {
            "value": "AQ",
            "name": "Antarctica"
          }, {
            "value": "AG",
            "name": "Antigua and Barbuda"
          }, {
            "value": "AR",
            "name": "Argentina"
          }, {
            "value": "AM",
            "name": "Armenia"
          }, {
            "value": "AW",
            "name": "Aruba"
          }, {
            "value": "AU",
            "name": "Australia"
          }, {
            "value": "AT",
            "name": "Austria"
          }, {
            "value": "AZ",
            "name": "Azerbaijan"
          }, {
            "value": "BS",
            "name": "Bahamas"
          }, {
            "value": "BH",
            "name": "Bahrain"
          }, {
            "value": "BD",
            "name": "Bangladesh"
          }, {
            "value": "BB",
            "name": "Barbados"
          }, {
            "value": "BY",
            "name": "Belarus"
          }, {
            "value": "PW",
            "name": "Belau"
          }, {
            "value": "BE",
            "name": "Belgium"
          }, {
            "value": "BZ",
            "name": "Belize"
          }, {
            "value": "BJ",
            "name": "Benin"
          }, {
            "value": "BM",
            "name": "Bermuda"
          }, {
            "value": "BT",
            "name": "Bhutan"
          }, {
            "value": "BO",
            "name": "Bolivia"
          }, {
            "value": "BQ",
            "name": "Bonaire, Saint Eustatius and Saba"
          }, {
            "value": "BA",
            "name": "Bosnia and Herzegovina"
          }, {
            "value": "BW",
            "name": "Botswana"
          }, {
            "value": "BV",
            "name": "Bouvet Island"
          }, {
            "value": "BR",
            "name": "Brazil"
          }, {
            "value": "IO",
            "name": "British Indian Ocean Territory"
          }, {
            "value": "VG",
            "name": "British Virgin Islands"
          }, {
            "value": "BN",
            "name": "Brunei"
          }, {
            "value": "BG",
            "name": "Bulgaria"
          }, {
            "value": "BF",
            "name": "Burkina Faso"
          }, {
            "value": "BI",
            "name": "Burundi"
          }, {
            "value": "KH",
            "name": "Cambodia"
          }, {
            "value": "CM",
            "name": "Cameroon"
          }, {
            "value": "CA",
            "name": "Canada"
          }, {
            "value": "CV",
            "name": "Cape Verde"
          }, {
            "value": "KY",
            "name": "Cayman Islands"
          }, {
            "value": "CF",
            "name": "Central African Republic"
          }, {
            "value": "TD",
            "name": "Chad"
          }, {
            "value": "CL",
            "name": "Chile"
          }, {
            "value": "CN",
            "name": "China"
          }, {
            "value": "CX",
            "name": "Christmas Island"
          }, {
            "value": "CC",
            "name": "Cocos (Keeling) Islands"
          }, {
            "value": "CO",
            "name": "Colombia"
          }, {
            "value": "KM",
            "name": "Comoros"
          }, {
            "value": "CG",
            "name": "Congo (Brazzaville)"
          }, {
            "value": "CD",
            "name": "Congo (Kinshasa)"
          }, {
            "value": "CK",
            "name": "Cook Islands"
          }, {
            "value": "CR",
            "name": "Costa Rica"
          }, {
            "value": "HR",
            "name": "Croatia"
          }, {
            "value": "CU",
            "name": "Cuba"
          }, {
            "value": "CW",
            "name": "Cura&ccedil;ao"
          }, {
            "value": "CY",
            "name": "Cyprus"
          }, {
            "value": "CZ",
            "name": "Czech Republic"
          }, {
            "value": "DK",
            "name": "Denmark"
          }, {
            "value": "DJ",
            "name": "Djibouti"
          }, {
            "value": "DM",
            "name": "Dominica"
          }, {
            "value": "DO",
            "name": "Dominican Republic"
          }, {
            "value": "EC",
            "name": "Ecuador"
          }, {
            "value": "EG",
            "name": "Egypt"
          }, {
            "value": "SV",
            "name": "El Salvador"
          }, {
            "value": "GQ",
            "name": "Equatorial Guinea"
          }, {
            "value": "ER",
            "name": "Eritrea"
          }, {
            "value": "EE",
            "name": "Estonia"
          }, {
            "value": "ET",
            "name": "Ethiopia"
          }, {
            "value": "FK",
            "name": "Falkland Islands"
          }, {
            "value": "FO",
            "name": "Faroe Islands"
          }, {
            "value": "FJ",
            "name": "Fiji"
          }, {
            "value": "FI",
            "name": "Finland"
          }, {
            "value": "FR",
            "name": "France"
          }, {
            "value": "GF",
            "name": "French Guiana"
          }, {
            "value": "PF",
            "name": "French Polynesia"
          }, {
            "value": "TF",
            "name": "French Southern Territories"
          }, {
            "value": "GA",
            "name": "Gabon"
          }, {
            "value": "GM",
            "name": "Gambia"
          }, {
            "value": "GE",
            "name": "Georgia"
          }, {
            "value": "DE",
            "name": "Germany"
          }, {
            "value": "GH",
            "name": "Ghana"
          }, {
            "value": "GI",
            "name": "Gibraltar"
          }, {
            "value": "GR",
            "name": "Greece"
          }, {
            "value": "GL",
            "name": "Greenland"
          }, {
            "value": "GD",
            "name": "Grenada"
          }, {
            "value": "GP",
            "name": "Guadeloupe"
          }, {
            "value": "GU",
            "name": "Guam"
          }, {
            "value": "GT",
            "name": "Guatemala"
          }, {
            "value": "GG",
            "name": "Guernsey"
          }, {
            "value": "GN",
            "name": "Guinea"
          }, {
            "value": "GW",
            "name": "Guinea-Bissau"
          }, {
            "value": "GY",
            "name": "Guyana"
          }, {
            "value": "HT",
            "name": "Haiti"
          }, {
            "value": "HM",
            "name": "Heard Island and McDonald Islands"
          }, {
            "value": "HN",
            "name": "Honduras"
          }, {
            "value": "HK",
            "name": "Hong Kong"
          }, {
            "value": "HU",
            "name": "Hungary"
          }, {
            "value": "IS",
            "name": "Iceland"
          }, {
            "value": "IN",
            "name": "India"
          }, {
            "value": "ID",
            "name": "Indonesia"
          }, {
            "value": "IR",
            "name": "Iran"
          }, {
            "value": "IQ",
            "name": "Iraq"
          }, {
            "value": "IE",
            "name": "Ireland"
          }, {
            "value": "IM",
            "name": "Isle of Man"
          }, {
            "value": "IL",
            "name": "Israel"
          }, {
            "value": "IT",
            "name": "Italy"
          }, {
            "value": "CI",
            "name": "Ivory Coast"
          }, {
            "value": "JM",
            "name": "Jamaica"
          }, {
            "value": "JP",
            "name": "Japan"
          }, {
            "value": "JE",
            "name": "Jersey"
          }, {
            "value": "JO",
            "name": "Jordan"
          }, {
            "value": "KZ",
            "name": "Kazakhstan"
          }, {
            "value": "KE",
            "name": "Kenya"
          }, {
            "value": "KI",
            "name": "Kiribati"
          }, {
            "value": "KW",
            "name": "Kuwait"
          }, {
            "value": "KG",
            "name": "Kyrgyzstan"
          }, {
            "value": "LA",
            "name": "Laos"
          }, {
            "value": "LV",
            "name": "Latvia"
          }, {
            "value": "LB",
            "name": "Lebanon"
          }, {
            "value": "LS",
            "name": "Lesotho"
          }, {
            "value": "LR",
            "name": "Liberia"
          }, {
            "value": "LY",
            "name": "Libya"
          }, {
            "value": "LI",
            "name": "Liechtenstein"
          }, {
            "value": "LT",
            "name": "Lithuania"
          }, {
            "value": "LU",
            "name": "Luxembourg"
          }, {
            "value": "MO",
            "name": "Macao S.A.R., China"
          }, {
            "value": "MK",
            "name": "Macedonia"
          }, {
            "value": "MG",
            "name": "Madagascar"
          }, {
            "value": "MW",
            "name": "Malawi"
          }, {
            "value": "MY",
            "name": "Malaysia"
          }, {
            "value": "MV",
            "name": "Maldives"
          }, {
            "value": "ML",
            "name": "Mali"
          }, {
            "value": "MT",
            "name": "Malta"
          }, {
            "value": "MH",
            "name": "Marshall Islands"
          }, {
            "value": "MQ",
            "name": "Martinique"
          }, {
            "value": "MR",
            "name": "Mauritania"
          }, {
            "value": "MU",
            "name": "Mauritius"
          }, {
            "value": "YT",
            "name": "Mayotte"
          }, {
            "value": "MX",
            "name": "Mexico"
          }, {
            "value": "FM",
            "name": "Micronesia"
          }, {
            "value": "MD",
            "name": "Moldova"
          }, {
            "value": "MC",
            "name": "Monaco"
          }, {
            "value": "MN",
            "name": "Mongolia"
          }, {
            "value": "ME",
            "name": "Montenegro"
          }, {
            "value": "MS",
            "name": "Montserrat"
          }, {
            "value": "MA",
            "name": "Morocco"
          }, {
            "value": "MZ",
            "name": "Mozambique"
          }, {
            "value": "MM",
            "name": "Myanmar"
          }, {
            "value": "NA",
            "name": "Namibia"
          }, {
            "value": "NR",
            "name": "Nauru"
          }, {
            "value": "NP",
            "name": "Nepal"
          }, {
            "value": "NL",
            "name": "Netherlands"
          }, {
            "value": "NC",
            "name": "New Caledonia"
          }, {
            "value": "NZ",
            "name": "New Zealand"
          }, {
            "value": "NI",
            "name": "Nicaragua"
          }, {
            "value": "NE",
            "name": "Niger"
          }, {
            "value": "NG",
            "name": "Nigeria"
          }, {
            "value": "NU",
            "name": "Niue"
          }, {
            "value": "NF",
            "name": "Norfolk Island"
          }, {
            "value": "KP",
            "name": "North Korea"
          }, {
            "value": "MP",
            "name": "Northern Mariana Islands"
          }, {
            "value": "NO",
            "name": "Norway"
          }, {
            "value": "OM",
            "name": "Oman"
          }, {
            "value": "PK",
            "name": "Pakistan"
          }, {
            "value": "PS",
            "name": "Palestinian Territory"
          }, {
            "value": "PA",
            "name": "Panama"
          }, {
            "value": "PG",
            "name": "Papua New Guinea"
          }, {
            "value": "PY",
            "name": "Paraguay"
          }, {
            "value": "PE",
            "name": "Peru"
          }, {
            "value": "PH",
            "name": "Philippines"
          }, {
            "value": "PN",
            "name": "Pitcairn"
          }, {
            "value": "PL",
            "name": "Poland"
          }, {
            "value": "PT",
            "name": "Portugal"
          }, {
            "value": "PR",
            "name": "Puerto Rico"
          }, {
            "value": "QA",
            "name": "Qatar"
          }, {
            "value": "RE",
            "name": "Reunion"
          }, {
            "value": "RO",
            "name": "Romania"
          }, {
            "value": "RU",
            "name": "Russia"
          }, {
            "value": "RW",
            "name": "Rwanda"
          }, {
            "value": "ST",
            "name": "S&atilde;o Tom&eacute; and Pr&iacute;ncipe"
          }, {
            "value": "BL",
            "name": "Saint Barth&eacute;lemy"
          }, {
            "value": "SH",
            "name": "Saint Helena"
          }, {
            "value": "KN",
            "name": "Saint Kitts and Nevis"
          }, {
            "value": "LC",
            "name": "Saint Lucia"
          }, {
            "value": "SX",
            "name": "Saint Martin (Dutch part)"
          }, {
            "value": "MF",
            "name": "Saint Martin (French part)"
          }, {
            "value": "PM",
            "name": "Saint Pierre and Miquelon"
          }, {
            "value": "VC",
            "name": "Saint Vincent and the Grenadines"
          }, {
            "value": "WS",
            "name": "Samoa"
          }, {
            "value": "SM",
            "name": "San Marino"
          }, {
            "value": "SA",
            "name": "Saudi Arabia"
          }, {
            "value": "SN",
            "name": "Senegal"
          }, {
            "value": "RS",
            "name": "Serbia"
          }, {
            "value": "SC",
            "name": "Seychelles"
          }, {
            "value": "SL",
            "name": "Sierra Leone"
          }, {
            "value": "SG",
            "name": "Singapore"
          }, {
            "value": "SK",
            "name": "Slovakia"
          }, {
            "value": "SI",
            "name": "Slovenia"
          }, {
            "value": "SB",
            "name": "Solomon Islands"
          }, {
            "value": "SO",
            "name": "Somalia"
          }, {
            "value": "ZA",
            "name": "South Africa"
          }, {
            "value": "GS",
            "name": "South Georgia/Sandwich Islands"
          }, {
            "value": "KR",
            "name": "South Korea"
          }, {
            "value": "SS",
            "name": "South Sudan"
          }, {
            "value": "ES",
            "name": "Spain"
          }, {
            "value": "LK",
            "name": "Sri Lanka"
          }, {
            "value": "SD",
            "name": "Sudan"
          }, {
            "value": "SR",
            "name": "Suriname"
          }, {
            "value": "SJ",
            "name": "Svalbard and Jan Mayen"
          }, {
            "value": "SZ",
            "name": "Swaziland"
          }, {
            "value": "SE",
            "name": "Sweden"
          }, {
            "value": "CH",
            "name": "Switzerland"
          }, {
            "value": "SY",
            "name": "Syria"
          }, {
            "value": "TW",
            "name": "Taiwan"
          }, {
            "value": "TJ",
            "name": "Tajikistan"
          }, {
            "value": "TZ",
            "name": "Tanzania"
          }, {
            "value": "TH",
            "name": "Thailand"
          }, {
            "value": "TL",
            "name": "Timor-Leste"
          }, {
            "value": "TG",
            "name": "Togo"
          }, {
            "value": "TK",
            "name": "Tokelau"
          }, {
            "value": "TO",
            "name": "Tonga"
          }, {
            "value": "TT",
            "name": "Trinidad and Tobago"
          }, {
            "value": "TN",
            "name": "Tunisia"
          }, {
            "value": "TR",
            "name": "Turkey"
          }, {
            "value": "TM",
            "name": "Turkmenistan"
          }, {
            "value": "TC",
            "name": "Turks and Caicos Islands"
          }, {
            "value": "TV",
            "name": "Tuvalu"
          }, {
            "value": "UG",
            "name": "Uganda"
          }, {
            "value": "UA",
            "name": "Ukraine"
          }, {
            "value": "AE",
            "name": "United Arab Emirates"
          }, {
            "value": "GB",
            "name": "United Kingdom (UK)"
          }, {
            "value": "US",
            "name": "United States (US)"
          }, {
            "value": "UM",
            "name": "United States (US) Minor Outlying Islands"
          }, {
            "value": "VI",
            "name": "United States (US) Virgin Islands"
          }, {
            "value": "UY",
            "name": "Uruguay"
          }, {
            "value": "UZ",
            "name": "Uzbekistan"
          }, {
            "value": "VU",
            "name": "Vanuatu"
          }, {
            "value": "VA",
            "name": "Vatican"
          }, {
            "value": "VE",
            "name": "Venezuela"
          }, {
            "value": "VN",
            "name": "Vietnam"
          }, {
            "value": "WF",
            "name": "Wallis and Futuna"
          }, {
            "value": "EH",
            "name": "Western Sahara"
          }, {
            "value": "YE",
            "name": "Yemen"
          }, {
            "value": "ZM",
            "name": "Zambia"
          }, {
            "value": "ZW",
            "name": "Zimbabwe"
          }],
          "states": {
            "AR": [{
              "value": "C",
              "name": "Ciudad Aut&oacute;noma de Buenos Aires"
            }, {
              "value": "B",
              "name": "Buenos Aires"
            }, {
              "value": "K",
              "name": "Catamarca"
            }, {
              "value": "H",
              "name": "Chaco"
            }, {
              "value": "U",
              "name": "Chubut"
            }, {
              "value": "X",
              "name": "C&oacute;rdoba"
            }, {
              "value": "W",
              "name": "Corrientes"
            }, {
              "value": "E",
              "name": "Entre R&iacute;os"
            }, {
              "value": "P",
              "name": "Formosa"
            }, {
              "value": "Y",
              "name": "Jujuy"
            }, {
              "value": "L",
              "name": "La Pampa"
            }, {
              "value": "F",
              "name": "La Rioja"
            }, {
              "value": "M",
              "name": "Mendoza"
            }, {
              "value": "N",
              "name": "Misiones"
            }, {
              "value": "Q",
              "name": "Neuqu&eacute;n"
            }, {
              "value": "R",
              "name": "R&iacute;o Negro"
            }, {
              "value": "A",
              "name": "Salta"
            }, {
              "value": "J",
              "name": "San Juan"
            }, {
              "value": "D",
              "name": "San Luis"
            }, {
              "value": "Z",
              "name": "Santa Cruz"
            }, {
              "value": "S",
              "name": "Santa Fe"
            }, {
              "value": "G",
              "name": "Santiago del Estero"
            }, {
              "value": "V",
              "name": "Tierra del Fuego"
            }, {
              "value": "T",
              "name": "Tucum&aacute;n"
            }],
            "AU": [{
              "value": "ACT",
              "name": "Australian Capital Territory"
            }, {
              "value": "NSW",
              "name": "New South Wales"
            }, {
              "value": "NT",
              "name": "Northern Territory"
            }, {
              "value": "QLD",
              "name": "Queensland"
            }, {
              "value": "SA",
              "name": "South Australia"
            }, {
              "value": "TAS",
              "name": "Tasmania"
            }, {
              "value": "VIC",
              "name": "Victoria"
            }, {
              "value": "WA",
              "name": "Western Australia"
            }],
            "BD": [{
              "value": "BAG",
              "name": "Bagerhat"
            }, {
              "value": "BAN",
              "name": "Bandarban"
            }, {
              "value": "BAR",
              "name": "Barguna"
            }, {
              "value": "BARI",
              "name": "Barisal"
            }, {
              "value": "BHO",
              "name": "Bhola"
            }, {
              "value": "BOG",
              "name": "Bogra"
            }, {
              "value": "BRA",
              "name": "Brahmanbaria"
            }, {
              "value": "CHA",
              "name": "Chandpur"
            }, {
              "value": "CHI",
              "name": "Chittagong"
            }, {
              "value": "CHU",
              "name": "Chuadanga"
            }, {
              "value": "COM",
              "name": "Comilla"
            }, {
              "value": "COX",
              "name": "Cox's Bazar"
            }, {
              "value": "DHA",
              "name": "Dhaka"
            }, {
              "value": "DIN",
              "name": "Dinajpur"
            }, {
              "value": "FAR",
              "name": "Faridpur "
            }, {
              "value": "FEN",
              "name": "Feni"
            }, {
              "value": "GAI",
              "name": "Gaibandha"
            }, {
              "value": "GAZI",
              "name": "Gazipur"
            }, {
              "value": "GOP",
              "name": "Gopalganj"
            }, {
              "value": "HAB",
              "name": "Habiganj"
            }, {
              "value": "JAM",
              "name": "Jamalpur"
            }, {
              "value": "JES",
              "name": "Jessore"
            }, {
              "value": "JHA",
              "name": "Jhalokati"
            }, {
              "value": "JHE",
              "name": "Jhenaidah"
            }, {
              "value": "JOY",
              "name": "Joypurhat"
            }, {
              "value": "KHA",
              "name": "Khagrachhari"
            }, {
              "value": "KHU",
              "name": "Khulna"
            }, {
              "value": "KIS",
              "name": "Kishoreganj"
            }, {
              "value": "KUR",
              "name": "Kurigram"
            }, {
              "value": "KUS",
              "name": "Kushtia"
            }, {
              "value": "LAK",
              "name": "Lakshmipur"
            }, {
              "value": "LAL",
              "name": "Lalmonirhat"
            }, {
              "value": "MAD",
              "name": "Madaripur"
            }, {
              "value": "MAG",
              "name": "Magura"
            }, {
              "value": "MAN",
              "name": "Manikganj "
            }, {
              "value": "MEH",
              "name": "Meherpur"
            }, {
              "value": "MOU",
              "name": "Moulvibazar"
            }, {
              "value": "MUN",
              "name": "Munshiganj"
            }, {
              "value": "MYM",
              "name": "Mymensingh"
            }, {
              "value": "NAO",
              "name": "Naogaon"
            }, {
              "value": "NAR",
              "name": "Narail"
            }, {
              "value": "NARG",
              "name": "Narayanganj"
            }, {
              "value": "NARD",
              "name": "Narsingdi"
            }, {
              "value": "NAT",
              "name": "Natore"
            }, {
              "value": "NAW",
              "name": "Nawabganj"
            }, {
              "value": "NET",
              "name": "Netrakona"
            }, {
              "value": "NIL",
              "name": "Nilphamari"
            }, {
              "value": "NOA",
              "name": "Noakhali"
            }, {
              "value": "PAB",
              "name": "Pabna"
            }, {
              "value": "PAN",
              "name": "Panchagarh"
            }, {
              "value": "PAT",
              "name": "Patuakhali"
            }, {
              "value": "PIR",
              "name": "Pirojpur"
            }, {
              "value": "RAJB",
              "name": "Rajbari"
            }, {
              "value": "RAJ",
              "name": "Rajshahi"
            }, {
              "value": "RAN",
              "name": "Rangamati"
            }, {
              "value": "RANP",
              "name": "Rangpur"
            }, {
              "value": "SAT",
              "name": "Satkhira"
            }, {
              "value": "SHA",
              "name": "Shariatpur"
            }, {
              "value": "SHE",
              "name": "Sherpur"
            }, {
              "value": "SIR",
              "name": "Sirajganj"
            }, {
              "value": "SUN",
              "name": "Sunamganj"
            }, {
              "value": "SYL",
              "name": "Sylhet"
            }, {
              "value": "TAN",
              "name": "Tangail"
            }, {
              "value": "THA",
              "name": "Thakurgaon"
            }],
            "BO": [{
              "value": "B",
              "name": "Chuquisaca"
            }, {
              "value": "H",
              "name": "Beni"
            }, {
              "value": "C",
              "name": "Cochabamba"
            }, {
              "value": "L",
              "name": "La Paz"
            }, {
              "value": "O",
              "name": "Oruro"
            }, {
              "value": "N",
              "name": "Pando"
            }, {
              "value": "P",
              "name": "Potos??"
            }, {
              "value": "S",
              "name": "Santa Cruz"
            }, {
              "value": "T",
              "name": "Tarija"
            }],
            "BR": [{
              "value": "AC",
              "name": "Acre"
            }, {
              "value": "AL",
              "name": "Alagoas"
            }, {
              "value": "AP",
              "name": "Amap&aacute;"
            }, {
              "value": "AM",
              "name": "Amazonas"
            }, {
              "value": "BA",
              "name": "Bahia"
            }, {
              "value": "CE",
              "name": "Cear&aacute;"
            }, {
              "value": "DF",
              "name": "Distrito Federal"
            }, {
              "value": "ES",
              "name": "Esp&iacute;rito Santo"
            }, {
              "value": "GO",
              "name": "Goi&aacute;s"
            }, {
              "value": "MA",
              "name": "Maranh&atilde;o"
            }, {
              "value": "MT",
              "name": "Mato Grosso"
            }, {
              "value": "MS",
              "name": "Mato Grosso do Sul"
            }, {
              "value": "MG",
              "name": "Minas Gerais"
            }, {
              "value": "PA",
              "name": "Par&aacute;"
            }, {
              "value": "PB",
              "name": "Para&iacute;ba"
            }, {
              "value": "PR",
              "name": "Paran&aacute;"
            }, {
              "value": "PE",
              "name": "Pernambuco"
            }, {
              "value": "PI",
              "name": "Piau&iacute;"
            }, {
              "value": "RJ",
              "name": "Rio de Janeiro"
            }, {
              "value": "RN",
              "name": "Rio Grande do Norte"
            }, {
              "value": "RS",
              "name": "Rio Grande do Sul"
            }, {
              "value": "RO",
              "name": "Rond&ocirc;nia"
            }, {
              "value": "RR",
              "name": "Roraima"
            }, {
              "value": "SC",
              "name": "Santa Catarina"
            }, {
              "value": "SP",
              "name": "S&atilde;o Paulo"
            }, {
              "value": "SE",
              "name": "Sergipe"
            }, {
              "value": "TO",
              "name": "Tocantins"
            }],
            "BG": [{
              "value": "BG-01",
              "name": "Blagoevgrad"
            }, {
              "value": "BG-02",
              "name": "Burgas"
            }, {
              "value": "BG-08",
              "name": "Dobrich"
            }, {
              "value": "BG-07",
              "name": "Gabrovo"
            }, {
              "value": "BG-26",
              "name": "Haskovo"
            }, {
              "value": "BG-09",
              "name": "Kardzhali"
            }, {
              "value": "BG-10",
              "name": "Kyustendil"
            }, {
              "value": "BG-11",
              "name": "Lovech"
            }, {
              "value": "BG-12",
              "name": "Montana"
            }, {
              "value": "BG-13",
              "name": "Pazardzhik"
            }, {
              "value": "BG-14",
              "name": "Pernik"
            }, {
              "value": "BG-15",
              "name": "Pleven"
            }, {
              "value": "BG-16",
              "name": "Plovdiv"
            }, {
              "value": "BG-17",
              "name": "Razgrad"
            }, {
              "value": "BG-18",
              "name": "Ruse"
            }, {
              "value": "BG-27",
              "name": "Shumen"
            }, {
              "value": "BG-19",
              "name": "Silistra"
            }, {
              "value": "BG-20",
              "name": "Sliven"
            }, {
              "value": "BG-21",
              "name": "Smolyan"
            }, {
              "value": "BG-23",
              "name": "Sofia"
            }, {
              "value": "BG-22",
              "name": "Sofia-Grad"
            }, {
              "value": "BG-24",
              "name": "Stara Zagora"
            }, {
              "value": "BG-25",
              "name": "Targovishte"
            }, {
              "value": "BG-03",
              "name": "Varna"
            }, {
              "value": "BG-04",
              "name": "Veliko Tarnovo"
            }, {
              "value": "BG-05",
              "name": "Vidin"
            }, {
              "value": "BG-06",
              "name": "Vratsa"
            }, {
              "value": "BG-28",
              "name": "Yambol"
            }],
            "CA": [{
              "value": "AB",
              "name": "Alberta"
            }, {
              "value": "BC",
              "name": "British Columbia"
            }, {
              "value": "MB",
              "name": "Manitoba"
            }, {
              "value": "NB",
              "name": "New Brunswick"
            }, {
              "value": "NL",
              "name": "Newfoundland and Labrador"
            }, {
              "value": "NT",
              "name": "Northwest Territories"
            }, {
              "value": "NS",
              "name": "Nova Scotia"
            }, {
              "value": "NU",
              "name": "Nunavut"
            }, {
              "value": "ON",
              "name": "Ontario"
            }, {
              "value": "PE",
              "name": "Prince Edward Island"
            }, {
              "value": "QC",
              "name": "Quebec"
            }, {
              "value": "SK",
              "name": "Saskatchewan"
            }, {
              "value": "YT",
              "name": "Yukon Territory"
            }],
            "CN": [{
              "value": "CN1",
              "name": "Yunnan / &#20113;&#21335;"
            }, {
              "value": "CN2",
              "name": "Beijing / &#21271;&#20140;"
            }, {
              "value": "CN3",
              "name": "Tianjin / &#22825;&#27941;"
            }, {
              "value": "CN4",
              "name": "Hebei / &#27827;&#21271;"
            }, {
              "value": "CN5",
              "name": "Shanxi / &#23665;&#35199;"
            }, {
              "value": "CN6",
              "name": "Inner Mongolia / &#20839;&#33945;&#21476;"
            }, {
              "value": "CN7",
              "name": "Liaoning / &#36797;&#23425;"
            }, {
              "value": "CN8",
              "name": "Jilin / &#21513;&#26519;"
            }, {
              "value": "CN9",
              "name": "Heilongjiang / &#40657;&#40857;&#27743;"
            }, {
              "value": "CN10",
              "name": "Shanghai / &#19978;&#28023;"
            }, {
              "value": "CN11",
              "name": "Jiangsu / &#27743;&#33487;"
            }, {
              "value": "CN12",
              "name": "Zhejiang / &#27993;&#27743;"
            }, {
              "value": "CN13",
              "name": "Anhui / &#23433;&#24509;"
            }, {
              "value": "CN14",
              "name": "Fujian / &#31119;&#24314;"
            }, {
              "value": "CN15",
              "name": "Jiangxi / &#27743;&#35199;"
            }, {
              "value": "CN16",
              "name": "Shandong / &#23665;&#19996;"
            }, {
              "value": "CN17",
              "name": "Henan / &#27827;&#21335;"
            }, {
              "value": "CN18",
              "name": "Hubei / &#28246;&#21271;"
            }, {
              "value": "CN19",
              "name": "Hunan / &#28246;&#21335;"
            }, {
              "value": "CN20",
              "name": "Guangdong / &#24191;&#19996;"
            }, {
              "value": "CN21",
              "name": "Guangxi Zhuang / &#24191;&#35199;&#22766;&#26063;"
            }, {
              "value": "CN22",
              "name": "Hainan / &#28023;&#21335;"
            }, {
              "value": "CN23",
              "name": "Chongqing / &#37325;&#24198;"
            }, {
              "value": "CN24",
              "name": "Sichuan / &#22235;&#24029;"
            }, {
              "value": "CN25",
              "name": "Guizhou / &#36149;&#24030;"
            }, {
              "value": "CN26",
              "name": "Shaanxi / &#38485;&#35199;"
            }, {
              "value": "CN27",
              "name": "Gansu / &#29976;&#32899;"
            }, {
              "value": "CN28",
              "name": "Qinghai / &#38738;&#28023;"
            }, {
              "value": "CN29",
              "name": "Ningxia Hui / &#23425;&#22799;"
            }, {
              "value": "CN30",
              "name": "Macau / &#28595;&#38376;"
            }, {
              "value": "CN31",
              "name": "Tibet / &#35199;&#34255;"
            }, {
              "value": "CN32",
              "name": "Xinjiang / &#26032;&#30086;"
            }],
            "GR": [{
              "value": "I",
              "name": "????????????"
            }, {
              "value": "A",
              "name": "?????????????????? ?????????????????? ?????? ??????????"
            }, {
              "value": "B",
              "name": "???????????????? ??????????????????"
            }, {
              "value": "C",
              "name": "???????????? ??????????????????"
            }, {
              "value": "D",
              "name": "??????????????"
            }, {
              "value": "E",
              "name": "????????????????"
            }, {
              "value": "F",
              "name": "???????????? ??????????"
            }, {
              "value": "G",
              "name": "???????????? ????????????"
            }, {
              "value": "H",
              "name": "???????????? ????????????"
            }, {
              "value": "J",
              "name": "????????????????????????"
            }, {
              "value": "K",
              "name": "???????????? ????????????"
            }, {
              "value": "L",
              "name": "?????????? ????????????"
            }, {
              "value": "M",
              "name": "??????????"
            }],
            "HK": [{
              "value": "HONG KONG",
              "name": "Hong Kong Island"
            }, {
              "value": "KOWLOON",
              "name": "Kowloon"
            }, {
              "value": "NEW TERRITORIES",
              "name": "New Territories"
            }],
            "HU": [{
              "value": "BK",
              "name": "B??cs-Kiskun"
            }, {
              "value": "BE",
              "name": "B??k??s"
            }, {
              "value": "BA",
              "name": "Baranya"
            }, {
              "value": "BZ",
              "name": "Borsod-Aba??j-Zempl??n"
            }, {
              "value": "BU",
              "name": "Budapest"
            }, {
              "value": "CS",
              "name": "Csongr??d"
            }, {
              "value": "FE",
              "name": "Fej??r"
            }, {
              "value": "GS",
              "name": "Gy??r-Moson-Sopron"
            }, {
              "value": "HB",
              "name": "Hajd??-Bihar"
            }, {
              "value": "HE",
              "name": "Heves"
            }, {
              "value": "JN",
              "name": "J??sz-Nagykun-Szolnok"
            }, {
              "value": "KE",
              "name": "Kom??rom-Esztergom"
            }, {
              "value": "NO",
              "name": "N??gr??d"
            }, {
              "value": "PE",
              "name": "Pest"
            }, {
              "value": "SO",
              "name": "Somogy"
            }, {
              "value": "SZ",
              "name": "Szabolcs-Szatm??r-Bereg"
            }, {
              "value": "TO",
              "name": "Tolna"
            }, {
              "value": "VA",
              "name": "Vas"
            }, {
              "value": "VE",
              "name": "Veszpr??m"
            }, {
              "value": "ZA",
              "name": "Zala"
            }],
            "IN": [{
              "value": "AP",
              "name": "Andhra Pradesh"
            }, {
              "value": "AR",
              "name": "Arunachal Pradesh"
            }, {
              "value": "AS",
              "name": "Assam"
            }, {
              "value": "BR",
              "name": "Bihar"
            }, {
              "value": "CT",
              "name": "Chhattisgarh"
            }, {
              "value": "GA",
              "name": "Goa"
            }, {
              "value": "GJ",
              "name": "Gujarat"
            }, {
              "value": "HR",
              "name": "Haryana"
            }, {
              "value": "HP",
              "name": "Himachal Pradesh"
            }, {
              "value": "JK",
              "name": "Jammu and Kashmir"
            }, {
              "value": "JH",
              "name": "Jharkhand"
            }, {
              "value": "KA",
              "name": "Karnataka"
            }, {
              "value": "KL",
              "name": "Kerala"
            }, {
              "value": "MP",
              "name": "Madhya Pradesh"
            }, {
              "value": "MH",
              "name": "Maharashtra"
            }, {
              "value": "MN",
              "name": "Manipur"
            }, {
              "value": "ML",
              "name": "Meghalaya"
            }, {
              "value": "MZ",
              "name": "Mizoram"
            }, {
              "value": "NL",
              "name": "Nagaland"
            }, {
              "value": "OR",
              "name": "Orissa"
            }, {
              "value": "PB",
              "name": "Punjab"
            }, {
              "value": "RJ",
              "name": "Rajasthan"
            }, {
              "value": "SK",
              "name": "Sikkim"
            }, {
              "value": "TN",
              "name": "Tamil Nadu"
            }, {
              "value": "TS",
              "name": "Telangana"
            }, {
              "value": "TR",
              "name": "Tripura"
            }, {
              "value": "UK",
              "name": "Uttarakhand"
            }, {
              "value": "UP",
              "name": "Uttar Pradesh"
            }, {
              "value": "WB",
              "name": "West Bengal"
            }, {
              "value": "AN",
              "name": "Andaman and Nicobar Islands"
            }, {
              "value": "CH",
              "name": "Chandigarh"
            }, {
              "value": "DN",
              "name": "Dadra and Nagar Haveli"
            }, {
              "value": "DD",
              "name": "Daman and Diu"
            }, {
              "value": "DL",
              "name": "Delhi"
            }, {
              "value": "LD",
              "name": "Lakshadeep"
            }, {
              "value": "PY",
              "name": "Pondicherry (Puducherry)"
            }],
            "ID": [{
              "value": "AC",
              "name": "Daerah Istimewa Aceh"
            }, {
              "value": "SU",
              "name": "Sumatera Utara"
            }, {
              "value": "SB",
              "name": "Sumatera Barat"
            }, {
              "value": "RI",
              "name": "Riau"
            }, {
              "value": "KR",
              "name": "Kepulauan Riau"
            }, {
              "value": "JA",
              "name": "Jambi"
            }, {
              "value": "SS",
              "name": "Sumatera Selatan"
            }, {
              "value": "BB",
              "name": "Bangka Belitung"
            }, {
              "value": "BE",
              "name": "Bengkulu"
            }, {
              "value": "LA",
              "name": "Lampung"
            }, {
              "value": "JK",
              "name": "DKI Jakarta"
            }, {
              "value": "JB",
              "name": "Jawa Barat"
            }, {
              "value": "BT",
              "name": "Banten"
            }, {
              "value": "JT",
              "name": "Jawa Tengah"
            }, {
              "value": "JI",
              "name": "Jawa Timur"
            }, {
              "value": "YO",
              "name": "Daerah Istimewa Yogyakarta"
            }, {
              "value": "BA",
              "name": "Bali"
            }, {
              "value": "NB",
              "name": "Nusa Tenggara Barat"
            }, {
              "value": "NT",
              "name": "Nusa Tenggara Timur"
            }, {
              "value": "KB",
              "name": "Kalimantan Barat"
            }, {
              "value": "KT",
              "name": "Kalimantan Tengah"
            }, {
              "value": "KI",
              "name": "Kalimantan Timur"
            }, {
              "value": "KS",
              "name": "Kalimantan Selatan"
            }, {
              "value": "KU",
              "name": "Kalimantan Utara"
            }, {
              "value": "SA",
              "name": "Sulawesi Utara"
            }, {
              "value": "ST",
              "name": "Sulawesi Tengah"
            }, {
              "value": "SG",
              "name": "Sulawesi Tenggara"
            }, {
              "value": "SR",
              "name": "Sulawesi Barat"
            }, {
              "value": "SN",
              "name": "Sulawesi Selatan"
            }, {
              "value": "GO",
              "name": "Gorontalo"
            }, {
              "value": "MA",
              "name": "Maluku"
            }, {
              "value": "MU",
              "name": "Maluku Utara"
            }, {
              "value": "PA",
              "name": "Papua"
            }, {
              "value": "PB",
              "name": "Papua Barat"
            }],
            "IR": [{
              "value": "KHZ",
              "name": "Khuzestan  (??????????????)"
            }, {
              "value": "THR",
              "name": "Tehran  (??????????)"
            }, {
              "value": "ILM",
              "name": "Ilaam (??????????)"
            }, {
              "value": "BHR",
              "name": "Bushehr (??????????)"
            }, {
              "value": "ADL",
              "name": "Ardabil (????????????)"
            }, {
              "value": "ESF",
              "name": "Isfahan (????????????)"
            }, {
              "value": "YZD",
              "name": "Yazd (??????)"
            }, {
              "value": "KRH",
              "name": "Kermanshah (????????????????)"
            }, {
              "value": "KRN",
              "name": "Kerman (??????????)"
            }, {
              "value": "HDN",
              "name": "Hamadan (??????????)"
            }, {
              "value": "GZN",
              "name": "Ghazvin (??????????)"
            }, {
              "value": "ZJN",
              "name": "Zanjan (??????????)"
            }, {
              "value": "LRS",
              "name": "Luristan (????????????)"
            }, {
              "value": "ABZ",
              "name": "Alborz (??????????)"
            }, {
              "value": "EAZ",
              "name": "East Azarbaijan (?????????????????? ????????)"
            }, {
              "value": "WAZ",
              "name": "West Azarbaijan (?????????????????? ????????)"
            }, {
              "value": "CHB",
              "name": "Chaharmahal and Bakhtiari (???????????????? ?? ??????????????)"
            }, {
              "value": "SKH",
              "name": "South Khorasan (???????????? ??????????)"
            }, {
              "value": "RKH",
              "name": "Razavi Khorasan (???????????? ????????)"
            }, {
              "value": "NKH",
              "name": "North Khorasan (???????????? ??????????)"
            }, {
              "value": "SMN",
              "name": "Semnan (??????????)"
            }, {
              "value": "FRS",
              "name": "Fars (????????)"
            }, {
              "value": "QHM",
              "name": "Qom (????)"
            }, {
              "value": "KRD",
              "name": "Kurdistan / ??????????????)"
            }, {
              "value": "KBD",
              "name": "Kohgiluyeh and BoyerAhmad (?????????????????? ?? ????????????????)"
            }, {
              "value": "GLS",
              "name": "Golestan (????????????)"
            }, {
              "value": "GIL",
              "name": "Gilan (??????????)"
            }, {
              "value": "MZN",
              "name": "Mazandaran (????????????????)"
            }, {
              "value": "MKZ",
              "name": "Markazi (??????????)"
            }, {
              "value": "HRZ",
              "name": "Hormozgan (??????????????)"
            }, {
              "value": "SBN",
              "name": "Sistan and Baluchestan (???????????? ?? ????????????????)"
            }],
            "IE": [{
              "value": "CE",
              "name": "Clare"
            }, {
              "value": "CK",
              "name": "Cork"
            }, {
              "value": "CN",
              "name": "Cavan"
            }, {
              "value": "CW",
              "name": "Carlow"
            }, {
              "value": "DL",
              "name": "Donegal"
            }, {
              "value": "DN",
              "name": "Dublin"
            }, {
              "value": "GY",
              "name": "Galway"
            }, {
              "value": "KE",
              "name": "Kildare"
            }, {
              "value": "KK",
              "name": "Kilkenny"
            }, {
              "value": "KY",
              "name": "Kerry"
            }, {
              "value": "LD",
              "name": "Longford"
            }, {
              "value": "LH",
              "name": "Louth"
            }, {
              "value": "LK",
              "name": "Limerick"
            }, {
              "value": "LM",
              "name": "Leitrim"
            }, {
              "value": "LS",
              "name": "Laois"
            }, {
              "value": "MH",
              "name": "Meath"
            }, {
              "value": "MN",
              "name": "Monaghan"
            }, {
              "value": "MO",
              "name": "Mayo"
            }, {
              "value": "OY",
              "name": "Offaly"
            }, {
              "value": "RN",
              "name": "Roscommon"
            }, {
              "value": "SO",
              "name": "Sligo"
            }, {
              "value": "TY",
              "name": "Tipperary"
            }, {
              "value": "WD",
              "name": "Waterford"
            }, {
              "value": "WH",
              "name": "Westmeath"
            }, {
              "value": "WW",
              "name": "Wicklow"
            }, {
              "value": "WX",
              "name": "Wexford"
            }],
            "IT": [{
              "value": "AG",
              "name": "Agrigento"
            }, {
              "value": "AL",
              "name": "Alessandria"
            }, {
              "value": "AN",
              "name": "Ancona"
            }, {
              "value": "AO",
              "name": "Aosta"
            }, {
              "value": "AR",
              "name": "Arezzo"
            }, {
              "value": "AP",
              "name": "Ascoli Piceno"
            }, {
              "value": "AT",
              "name": "Asti"
            }, {
              "value": "AV",
              "name": "Avellino"
            }, {
              "value": "BA",
              "name": "Bari"
            }, {
              "value": "BT",
              "name": "Barletta-Andria-Trani"
            }, {
              "value": "BL",
              "name": "Belluno"
            }, {
              "value": "BN",
              "name": "Benevento"
            }, {
              "value": "BG",
              "name": "Bergamo"
            }, {
              "value": "BI",
              "name": "Biella"
            }, {
              "value": "BO",
              "name": "Bologna"
            }, {
              "value": "BZ",
              "name": "Bolzano"
            }, {
              "value": "BS",
              "name": "Brescia"
            }, {
              "value": "BR",
              "name": "Brindisi"
            }, {
              "value": "CA",
              "name": "Cagliari"
            }, {
              "value": "CL",
              "name": "Caltanissetta"
            }, {
              "value": "CB",
              "name": "Campobasso"
            }, {
              "value": "CI",
              "name": "Carbonia-Iglesias"
            }, {
              "value": "CE",
              "name": "Caserta"
            }, {
              "value": "CT",
              "name": "Catania"
            }, {
              "value": "CZ",
              "name": "Catanzaro"
            }, {
              "value": "CH",
              "name": "Chieti"
            }, {
              "value": "CO",
              "name": "Como"
            }, {
              "value": "CS",
              "name": "Cosenza"
            }, {
              "value": "CR",
              "name": "Cremona"
            }, {
              "value": "KR",
              "name": "Crotone"
            }, {
              "value": "CN",
              "name": "Cuneo"
            }, {
              "value": "EN",
              "name": "Enna"
            }, {
              "value": "FM",
              "name": "Fermo"
            }, {
              "value": "FE",
              "name": "Ferrara"
            }, {
              "value": "FI",
              "name": "Firenze"
            }, {
              "value": "FG",
              "name": "Foggia"
            }, {
              "value": "FC",
              "name": "Forl??-Cesena"
            }, {
              "value": "FR",
              "name": "Frosinone"
            }, {
              "value": "GE",
              "name": "Genova"
            }, {
              "value": "GO",
              "name": "Gorizia"
            }, {
              "value": "GR",
              "name": "Grosseto"
            }, {
              "value": "IM",
              "name": "Imperia"
            }, {
              "value": "IS",
              "name": "Isernia"
            }, {
              "value": "SP",
              "name": "La Spezia"
            }, {
              "value": "AQ",
              "name": "L'Aquila"
            }, {
              "value": "LT",
              "name": "Latina"
            }, {
              "value": "LE",
              "name": "Lecce"
            }, {
              "value": "LC",
              "name": "Lecco"
            }, {
              "value": "LI",
              "name": "Livorno"
            }, {
              "value": "LO",
              "name": "Lodi"
            }, {
              "value": "LU",
              "name": "Lucca"
            }, {
              "value": "MC",
              "name": "Macerata"
            }, {
              "value": "MN",
              "name": "Mantova"
            }, {
              "value": "MS",
              "name": "Massa-Carrara"
            }, {
              "value": "MT",
              "name": "Matera"
            }, {
              "value": "ME",
              "name": "Messina"
            }, {
              "value": "MI",
              "name": "Milano"
            }, {
              "value": "MO",
              "name": "Modena"
            }, {
              "value": "MB",
              "name": "Monza e della Brianza"
            }, {
              "value": "NA",
              "name": "Napoli"
            }, {
              "value": "NO",
              "name": "Novara"
            }, {
              "value": "NU",
              "name": "Nuoro"
            }, {
              "value": "OT",
              "name": "Olbia-Tempio"
            }, {
              "value": "OR",
              "name": "Oristano"
            }, {
              "value": "PD",
              "name": "Padova"
            }, {
              "value": "PA",
              "name": "Palermo"
            }, {
              "value": "PR",
              "name": "Parma"
            }, {
              "value": "PV",
              "name": "Pavia"
            }, {
              "value": "PG",
              "name": "Perugia"
            }, {
              "value": "PU",
              "name": "Pesaro e Urbino"
            }, {
              "value": "PE",
              "name": "Pescara"
            }, {
              "value": "PC",
              "name": "Piacenza"
            }, {
              "value": "PI",
              "name": "Pisa"
            }, {
              "value": "PT",
              "name": "Pistoia"
            }, {
              "value": "PN",
              "name": "Pordenone"
            }, {
              "value": "PZ",
              "name": "Potenza"
            }, {
              "value": "PO",
              "name": "Prato"
            }, {
              "value": "RG",
              "name": "Ragusa"
            }, {
              "value": "RA",
              "name": "Ravenna"
            }, {
              "value": "RC",
              "name": "Reggio Calabria"
            }, {
              "value": "RE",
              "name": "Reggio Emilia"
            }, {
              "value": "RI",
              "name": "Rieti"
            }, {
              "value": "RN",
              "name": "Rimini"
            }, {
              "value": "RM",
              "name": "Roma"
            }, {
              "value": "RO",
              "name": "Rovigo"
            }, {
              "value": "SA",
              "name": "Salerno"
            }, {
              "value": "VS",
              "name": "Medio Campidano"
            }, {
              "value": "SS",
              "name": "Sassari"
            }, {
              "value": "SV",
              "name": "Savona"
            }, {
              "value": "SI",
              "name": "Siena"
            }, {
              "value": "SR",
              "name": "Siracusa"
            }, {
              "value": "SO",
              "name": "Sondrio"
            }, {
              "value": "TA",
              "name": "Taranto"
            }, {
              "value": "TE",
              "name": "Teramo"
            }, {
              "value": "TR",
              "name": "Terni"
            }, {
              "value": "TO",
              "name": "Torino"
            }, {
              "value": "OG",
              "name": "Ogliastra"
            }, {
              "value": "TP",
              "name": "Trapani"
            }, {
              "value": "TN",
              "name": "Trento"
            }, {
              "value": "TV",
              "name": "Treviso"
            }, {
              "value": "TS",
              "name": "Trieste"
            }, {
              "value": "UD",
              "name": "Udine"
            }, {
              "value": "VA",
              "name": "Varese"
            }, {
              "value": "VE",
              "name": "Venezia"
            }, {
              "value": "VB",
              "name": "Verbano-Cusio-Ossola"
            }, {
              "value": "VC",
              "name": "Vercelli"
            }, {
              "value": "VR",
              "name": "Verona"
            }, {
              "value": "VV",
              "name": "Vibo Valentia"
            }, {
              "value": "VI",
              "name": "Vicenza"
            }, {
              "value": "VT",
              "name": "Viterbo"
            }],
            "JP": [{
              "value": "JP01",
              "name": "Hokkaido"
            }, {
              "value": "JP02",
              "name": "Aomori"
            }, {
              "value": "JP03",
              "name": "Iwate"
            }, {
              "value": "JP04",
              "name": "Miyagi"
            }, {
              "value": "JP05",
              "name": "Akita"
            }, {
              "value": "JP06",
              "name": "Yamagata"
            }, {
              "value": "JP07",
              "name": "Fukushima"
            }, {
              "value": "JP08",
              "name": "Ibaraki"
            }, {
              "value": "JP09",
              "name": "Tochigi"
            }, {
              "value": "JP10",
              "name": "Gunma"
            }, {
              "value": "JP11",
              "name": "Saitama"
            }, {
              "value": "JP12",
              "name": "Chiba"
            }, {
              "value": "JP13",
              "name": "Tokyo"
            }, {
              "value": "JP14",
              "name": "Kanagawa"
            }, {
              "value": "JP15",
              "name": "Niigata"
            }, {
              "value": "JP16",
              "name": "Toyama"
            }, {
              "value": "JP17",
              "name": "Ishikawa"
            }, {
              "value": "JP18",
              "name": "Fukui"
            }, {
              "value": "JP19",
              "name": "Yamanashi"
            }, {
              "value": "JP20",
              "name": "Nagano"
            }, {
              "value": "JP21",
              "name": "Gifu"
            }, {
              "value": "JP22",
              "name": "Shizuoka"
            }, {
              "value": "JP23",
              "name": "Aichi"
            }, {
              "value": "JP24",
              "name": "Mie"
            }, {
              "value": "JP25",
              "name": "Shiga"
            }, {
              "value": "JP26",
              "name": "Kyoto"
            }, {
              "value": "JP27",
              "name": "Osaka"
            }, {
              "value": "JP28",
              "name": "Hyogo"
            }, {
              "value": "JP29",
              "name": "Nara"
            }, {
              "value": "JP30",
              "name": "Wakayama"
            }, {
              "value": "JP31",
              "name": "Tottori"
            }, {
              "value": "JP32",
              "name": "Shimane"
            }, {
              "value": "JP33",
              "name": "Okayama"
            }, {
              "value": "JP34",
              "name": "Hiroshima"
            }, {
              "value": "JP35",
              "name": "Yamaguchi"
            }, {
              "value": "JP36",
              "name": "Tokushima"
            }, {
              "value": "JP37",
              "name": "Kagawa"
            }, {
              "value": "JP38",
              "name": "Ehime"
            }, {
              "value": "JP39",
              "name": "Kochi"
            }, {
              "value": "JP40",
              "name": "Fukuoka"
            }, {
              "value": "JP41",
              "name": "Saga"
            }, {
              "value": "JP42",
              "name": "Nagasaki"
            }, {
              "value": "JP43",
              "name": "Kumamoto"
            }, {
              "value": "JP44",
              "name": "Oita"
            }, {
              "value": "JP45",
              "name": "Miyazaki"
            }, {
              "value": "JP46",
              "name": "Kagoshima"
            }, {
              "value": "JP47",
              "name": "Okinawa"
            }],
            "MY": [{
              "value": "JHR",
              "name": "Johor"
            }, {
              "value": "KDH",
              "name": "Kedah"
            }, {
              "value": "KTN",
              "name": "Kelantan"
            }, {
              "value": "LBN",
              "name": "Labuan"
            }, {
              "value": "MLK",
              "name": "Malacca (Melaka)"
            }, {
              "value": "NSN",
              "name": "Negeri Sembilan"
            }, {
              "value": "PHG",
              "name": "Pahang"
            }, {
              "value": "PNG",
              "name": "Penang (Pulau Pinang)"
            }, {
              "value": "PRK",
              "name": "Perak"
            }, {
              "value": "PLS",
              "name": "Perlis"
            }, {
              "value": "SBH",
              "name": "Sabah"
            }, {
              "value": "SWK",
              "name": "Sarawak"
            }, {
              "value": "SGR",
              "name": "Selangor"
            }, {
              "value": "TRG",
              "name": "Terengganu"
            }, {
              "value": "PJY",
              "name": "Putrajaya"
            }, {
              "value": "KUL",
              "name": "Kuala Lumpur"
            }],
            "MX": [{
              "value": "Distrito Federal",
              "name": "Distrito Federal"
            }, {
              "value": "Jalisco",
              "name": "Jalisco"
            }, {
              "value": "Nuevo Leon",
              "name": "Nuevo Le??n"
            }, {
              "value": "Aguascalientes",
              "name": "Aguascalientes"
            }, {
              "value": "Baja California",
              "name": "Baja California"
            }, {
              "value": "Baja California Sur",
              "name": "Baja California Sur"
            }, {
              "value": "Campeche",
              "name": "Campeche"
            }, {
              "value": "Chiapas",
              "name": "Chiapas"
            }, {
              "value": "Chihuahua",
              "name": "Chihuahua"
            }, {
              "value": "Coahuila",
              "name": "Coahuila"
            }, {
              "value": "Colima",
              "name": "Colima"
            }, {
              "value": "Durango",
              "name": "Durango"
            }, {
              "value": "Guanajuato",
              "name": "Guanajuato"
            }, {
              "value": "Guerrero",
              "name": "Guerrero"
            }, {
              "value": "Hidalgo",
              "name": "Hidalgo"
            }, {
              "value": "Estado de Mexico",
              "name": "Edo. de M??xico"
            }, {
              "value": "Michoacan",
              "name": "Michoac??n"
            }, {
              "value": "Morelos",
              "name": "Morelos"
            }, {
              "value": "Nayarit",
              "name": "Nayarit"
            }, {
              "value": "Oaxaca",
              "name": "Oaxaca"
            }, {
              "value": "Puebla",
              "name": "Puebla"
            }, {
              "value": "Queretaro",
              "name": "Quer??taro"
            }, {
              "value": "Quintana Roo",
              "name": "Quintana Roo"
            }, {
              "value": "San Luis Potosi",
              "name": "San Luis Potos??"
            }, {
              "value": "Sinaloa",
              "name": "Sinaloa"
            }, {
              "value": "Sonora",
              "name": "Sonora"
            }, {
              "value": "Tabasco",
              "name": "Tabasco"
            }, {
              "value": "Tamaulipas",
              "name": "Tamaulipas"
            }, {
              "value": "Tlaxcala",
              "name": "Tlaxcala"
            }, {
              "value": "Veracruz",
              "name": "Veracruz"
            }, {
              "value": "Yucatan",
              "name": "Yucat??n"
            }, {
              "value": "Zacatecas",
              "name": "Zacatecas"
            }],
            "NP": [{
              "value": "BAG",
              "name": "Bagmati"
            }, {
              "value": "BHE",
              "name": "Bheri"
            }, {
              "value": "DHA",
              "name": "Dhaulagiri"
            }, {
              "value": "GAN",
              "name": "Gandaki"
            }, {
              "value": "JAN",
              "name": "Janakpur"
            }, {
              "value": "KAR",
              "name": "Karnali"
            }, {
              "value": "KOS",
              "name": "Koshi"
            }, {
              "value": "LUM",
              "name": "Lumbini"
            }, {
              "value": "MAH",
              "name": "Mahakali"
            }, {
              "value": "MEC",
              "name": "Mechi"
            }, {
              "value": "NAR",
              "name": "Narayani"
            }, {
              "value": "RAP",
              "name": "Rapti"
            }, {
              "value": "SAG",
              "name": "Sagarmatha"
            }, {
              "value": "SET",
              "name": "Seti"
            }],
            "NZ": [{
              "value": "NL",
              "name": "Northland"
            }, {
              "value": "AK",
              "name": "Auckland"
            }, {
              "value": "WA",
              "name": "Waikato"
            }, {
              "value": "BP",
              "name": "Bay of Plenty"
            }, {
              "value": "TK",
              "name": "Taranaki"
            }, {
              "value": "GI",
              "name": "Gisborne"
            }, {
              "value": "HB",
              "name": "Hawke&rsquo;s Bay"
            }, {
              "value": "MW",
              "name": "Manawatu-Wanganui"
            }, {
              "value": "WE",
              "name": "Wellington"
            }, {
              "value": "NS",
              "name": "Nelson"
            }, {
              "value": "MB",
              "name": "Marlborough"
            }, {
              "value": "TM",
              "name": "Tasman"
            }, {
              "value": "WC",
              "name": "West Coast"
            }, {
              "value": "CT",
              "name": "Canterbury"
            }, {
              "value": "OT",
              "name": "Otago"
            }, {
              "value": "SL",
              "name": "Southland"
            }],
            "NG": [{
              "value": "AB",
              "name": "Abia"
            }, {
              "value": "FC",
              "name": "Abuja"
            }, {
              "value": "AD",
              "name": "Adamawa"
            }, {
              "value": "AK",
              "name": "Akwa Ibom"
            }, {
              "value": "AN",
              "name": "Anambra"
            }, {
              "value": "BA",
              "name": "Bauchi"
            }, {
              "value": "BY",
              "name": "Bayelsa"
            }, {
              "value": "BE",
              "name": "Benue"
            }, {
              "value": "BO",
              "name": "Borno"
            }, {
              "value": "CR",
              "name": "Cross River"
            }, {
              "value": "DE",
              "name": "Delta"
            }, {
              "value": "EB",
              "name": "Ebonyi"
            }, {
              "value": "ED",
              "name": "Edo"
            }, {
              "value": "EK",
              "name": "Ekiti"
            }, {
              "value": "EN",
              "name": "Enugu"
            }, {
              "value": "GO",
              "name": "Gombe"
            }, {
              "value": "IM",
              "name": "Imo"
            }, {
              "value": "JI",
              "name": "Jigawa"
            }, {
              "value": "KD",
              "name": "Kaduna"
            }, {
              "value": "KN",
              "name": "Kano"
            }, {
              "value": "KT",
              "name": "Katsina"
            }, {
              "value": "KE",
              "name": "Kebbi"
            }, {
              "value": "KO",
              "name": "Kogi"
            }, {
              "value": "KW",
              "name": "Kwara"
            }, {
              "value": "LA",
              "name": "Lagos"
            }, {
              "value": "NA",
              "name": "Nasarawa"
            }, {
              "value": "NI",
              "name": "Niger"
            }, {
              "value": "OG",
              "name": "Ogun"
            }, {
              "value": "ON",
              "name": "Ondo"
            }, {
              "value": "OS",
              "name": "Osun"
            }, {
              "value": "OY",
              "name": "Oyo"
            }, {
              "value": "PL",
              "name": "Plateau"
            }, {
              "value": "RI",
              "name": "Rivers"
            }, {
              "value": "SO",
              "name": "Sokoto"
            }, {
              "value": "TA",
              "name": "Taraba"
            }, {
              "value": "YO",
              "name": "Yobe"
            }, {
              "value": "ZA",
              "name": "Zamfara"
            }],
            "PK": [{
              "value": "JK",
              "name": "Azad Kashmir"
            }, {
              "value": "BA",
              "name": "Balochistan"
            }, {
              "value": "TA",
              "name": "FATA"
            }, {
              "value": "GB",
              "name": "Gilgit Baltistan"
            }, {
              "value": "IS",
              "name": "Islamabad Capital Territory"
            }, {
              "value": "KP",
              "name": "Khyber Pakhtunkhwa"
            }, {
              "value": "PB",
              "name": "Punjab"
            }, {
              "value": "SD",
              "name": "Sindh"
            }],
            "PE": [{
              "value": "CAL",
              "name": "El Callao"
            }, {
              "value": "LMA",
              "name": "Municipalidad Metropolitana de Lima"
            }, {
              "value": "AMA",
              "name": "Amazonas"
            }, {
              "value": "ANC",
              "name": "Ancash"
            }, {
              "value": "APU",
              "name": "Apur&iacute;mac"
            }, {
              "value": "ARE",
              "name": "Arequipa"
            }, {
              "value": "AYA",
              "name": "Ayacucho"
            }, {
              "value": "CAJ",
              "name": "Cajamarca"
            }, {
              "value": "CUS",
              "name": "Cusco"
            }, {
              "value": "HUV",
              "name": "Huancavelica"
            }, {
              "value": "HUC",
              "name": "Hu&aacute;nuco"
            }, {
              "value": "ICA",
              "name": "Ica"
            }, {
              "value": "JUN",
              "name": "Jun&iacute;n"
            }, {
              "value": "LAL",
              "name": "La Libertad"
            }, {
              "value": "LAM",
              "name": "Lambayeque"
            }, {
              "value": "LIM",
              "name": "Lima"
            }, {
              "value": "LOR",
              "name": "Loreto"
            }, {
              "value": "MDD",
              "name": "Madre de Dios"
            }, {
              "value": "MOQ",
              "name": "Moquegua"
            }, {
              "value": "PAS",
              "name": "Pasco"
            }, {
              "value": "PIU",
              "name": "Piura"
            }, {
              "value": "PUN",
              "name": "Puno"
            }, {
              "value": "SAM",
              "name": "San Mart&iacute;n"
            }, {
              "value": "TAC",
              "name": "Tacna"
            }, {
              "value": "TUM",
              "name": "Tumbes"
            }, {
              "value": "UCA",
              "name": "Ucayali"
            }],
            "PH": [{
              "value": "ABR",
              "name": "Abra"
            }, {
              "value": "AGN",
              "name": "Agusan del Norte"
            }, {
              "value": "AGS",
              "name": "Agusan del Sur"
            }, {
              "value": "AKL",
              "name": "Aklan"
            }, {
              "value": "ALB",
              "name": "Albay"
            }, {
              "value": "ANT",
              "name": "Antique"
            }, {
              "value": "APA",
              "name": "Apayao"
            }, {
              "value": "AUR",
              "name": "Aurora"
            }, {
              "value": "BAS",
              "name": "Basilan"
            }, {
              "value": "BAN",
              "name": "Bataan"
            }, {
              "value": "BTN",
              "name": "Batanes"
            }, {
              "value": "BTG",
              "name": "Batangas"
            }, {
              "value": "BEN",
              "name": "Benguet"
            }, {
              "value": "BIL",
              "name": "Biliran"
            }, {
              "value": "BOH",
              "name": "Bohol"
            }, {
              "value": "BUK",
              "name": "Bukidnon"
            }, {
              "value": "BUL",
              "name": "Bulacan"
            }, {
              "value": "CAG",
              "name": "Cagayan"
            }, {
              "value": "CAN",
              "name": "Camarines Norte"
            }, {
              "value": "CAS",
              "name": "Camarines Sur"
            }, {
              "value": "CAM",
              "name": "Camiguin"
            }, {
              "value": "CAP",
              "name": "Capiz"
            }, {
              "value": "CAT",
              "name": "Catanduanes"
            }, {
              "value": "CAV",
              "name": "Cavite"
            }, {
              "value": "CEB",
              "name": "Cebu"
            }, {
              "value": "COM",
              "name": "Compostela Valley"
            }, {
              "value": "NCO",
              "name": "Cotabato"
            }, {
              "value": "DAV",
              "name": "Davao del Norte"
            }, {
              "value": "DAS",
              "name": "Davao del Sur"
            }, {
              "value": "DAC",
              "name": "Davao Occidental"
            }, {
              "value": "DAO",
              "name": "Davao Oriental"
            }, {
              "value": "DIN",
              "name": "Dinagat Islands"
            }, {
              "value": "EAS",
              "name": "Eastern Samar"
            }, {
              "value": "GUI",
              "name": "Guimaras"
            }, {
              "value": "IFU",
              "name": "Ifugao"
            }, {
              "value": "ILN",
              "name": "Ilocos Norte"
            }, {
              "value": "ILS",
              "name": "Ilocos Sur"
            }, {
              "value": "ILI",
              "name": "Iloilo"
            }, {
              "value": "ISA",
              "name": "Isabela"
            }, {
              "value": "KAL",
              "name": "Kalinga"
            }, {
              "value": "LUN",
              "name": "La Union"
            }, {
              "value": "LAG",
              "name": "Laguna"
            }, {
              "value": "LAN",
              "name": "Lanao del Norte"
            }, {
              "value": "LAS",
              "name": "Lanao del Sur"
            }, {
              "value": "LEY",
              "name": "Leyte"
            }, {
              "value": "MAG",
              "name": "Maguindanao"
            }, {
              "value": "MAD",
              "name": "Marinduque"
            }, {
              "value": "MAS",
              "name": "Masbate"
            }, {
              "value": "MSC",
              "name": "Misamis Occidental"
            }, {
              "value": "MSR",
              "name": "Misamis Oriental"
            }, {
              "value": "MOU",
              "name": "Mountain Province"
            }, {
              "value": "NEC",
              "name": "Negros Occidental"
            }, {
              "value": "NER",
              "name": "Negros Oriental"
            }, {
              "value": "NSA",
              "name": "Northern Samar"
            }, {
              "value": "NUE",
              "name": "Nueva Ecija"
            }, {
              "value": "NUV",
              "name": "Nueva Vizcaya"
            }, {
              "value": "MDC",
              "name": "Occidental Mindoro"
            }, {
              "value": "MDR",
              "name": "Oriental Mindoro"
            }, {
              "value": "PLW",
              "name": "Palawan"
            }, {
              "value": "PAM",
              "name": "Pampanga"
            }, {
              "value": "PAN",
              "name": "Pangasinan"
            }, {
              "value": "QUE",
              "name": "Quezon"
            }, {
              "value": "QUI",
              "name": "Quirino"
            }, {
              "value": "RIZ",
              "name": "Rizal"
            }, {
              "value": "ROM",
              "name": "Romblon"
            }, {
              "value": "WSA",
              "name": "Samar"
            }, {
              "value": "SAR",
              "name": "Sarangani"
            }, {
              "value": "SIQ",
              "name": "Siquijor"
            }, {
              "value": "SOR",
              "name": "Sorsogon"
            }, {
              "value": "SCO",
              "name": "South Cotabato"
            }, {
              "value": "SLE",
              "name": "Southern Leyte"
            }, {
              "value": "SUK",
              "name": "Sultan Kudarat"
            }, {
              "value": "SLU",
              "name": "Sulu"
            }, {
              "value": "SUN",
              "name": "Surigao del Norte"
            }, {
              "value": "SUR",
              "name": "Surigao del Sur"
            }, {
              "value": "TAR",
              "name": "Tarlac"
            }, {
              "value": "TAW",
              "name": "Tawi-Tawi"
            }, {
              "value": "ZMB",
              "name": "Zambales"
            }, {
              "value": "ZAN",
              "name": "Zamboanga del Norte"
            }, {
              "value": "ZAS",
              "name": "Zamboanga del Sur"
            }, {
              "value": "ZSI",
              "name": "Zamboanga Sibugay"
            }, {
              "value": "00",
              "name": "Metro Manila"
            }],
            "RO": [{
              "value": "AB",
              "name": "Alba"
            }, {
              "value": "AR",
              "name": "Arad"
            }, {
              "value": "AG",
              "name": "Arges"
            }, {
              "value": "BC",
              "name": "Bacau"
            }, {
              "value": "BH",
              "name": "Bihor"
            }, {
              "value": "BN",
              "name": "Bistrita-Nasaud"
            }, {
              "value": "BT",
              "name": "Botosani"
            }, {
              "value": "BR",
              "name": "Braila"
            }, {
              "value": "BV",
              "name": "Brasov"
            }, {
              "value": "B",
              "name": "Bucuresti"
            }, {
              "value": "BZ",
              "name": "Buzau"
            }, {
              "value": "CL",
              "name": "Calarasi"
            }, {
              "value": "CS",
              "name": "Caras-Severin"
            }, {
              "value": "CJ",
              "name": "Cluj"
            }, {
              "value": "CT",
              "name": "Constanta"
            }, {
              "value": "CV",
              "name": "Covasna"
            }, {
              "value": "DB",
              "name": "Dambovita"
            }, {
              "value": "DJ",
              "name": "Dolj"
            }, {
              "value": "GL",
              "name": "Galati"
            }, {
              "value": "GR",
              "name": "Giurgiu"
            }, {
              "value": "GJ",
              "name": "Gorj"
            }, {
              "value": "HR",
              "name": "Harghita"
            }, {
              "value": "HD",
              "name": "Hunedoara"
            }, {
              "value": "IL",
              "name": "Ialomita"
            }, {
              "value": "IS",
              "name": "Iasi"
            }, {
              "value": "IF",
              "name": "Ilfov"
            }, {
              "value": "MM",
              "name": "Maramures"
            }, {
              "value": "MH",
              "name": "Mehedinti"
            }, {
              "value": "MS",
              "name": "Mures"
            }, {
              "value": "NT",
              "name": "Neamt"
            }, {
              "value": "OT",
              "name": "Olt"
            }, {
              "value": "PH",
              "name": "Prahova"
            }, {
              "value": "SJ",
              "name": "Salaj"
            }, {
              "value": "SM",
              "name": "Satu Mare"
            }, {
              "value": "SB",
              "name": "Sibiu"
            }, {
              "value": "SV",
              "name": "Suceava"
            }, {
              "value": "TR",
              "name": "Teleorman"
            }, {
              "value": "TM",
              "name": "Timis"
            }, {
              "value": "TL",
              "name": "Tulcea"
            }, {
              "value": "VL",
              "name": "Valcea"
            }, {
              "value": "VS",
              "name": "Vaslui"
            }, {
              "value": "VN",
              "name": "Vrancea"
            }],
            "ZA": [{
              "value": "EC",
              "name": "Eastern Cape"
            }, {
              "value": "FS",
              "name": "Free State"
            }, {
              "value": "GP",
              "name": "Gauteng"
            }, {
              "value": "KZN",
              "name": "KwaZulu-Natal"
            }, {
              "value": "LP",
              "name": "Limpopo"
            }, {
              "value": "MP",
              "name": "Mpumalanga"
            }, {
              "value": "NC",
              "name": "Northern Cape"
            }, {
              "value": "NW",
              "name": "North West"
            }, {
              "value": "WC",
              "name": "Western Cape"
            }],
            "ES": [{
              "value": "C",
              "name": "A Coru&ntilde;a"
            }, {
              "value": "VI",
              "name": "Araba/&Aacute;lava"
            }, {
              "value": "AB",
              "name": "Albacete"
            }, {
              "value": "A",
              "name": "Alicante"
            }, {
              "value": "AL",
              "name": "Almer&iacute;a"
            }, {
              "value": "O",
              "name": "Asturias"
            }, {
              "value": "AV",
              "name": "&Aacute;vila"
            }, {
              "value": "BA",
              "name": "Badajoz"
            }, {
              "value": "PM",
              "name": "Baleares"
            }, {
              "value": "B",
              "name": "Barcelona"
            }, {
              "value": "BU",
              "name": "Burgos"
            }, {
              "value": "CC",
              "name": "C&aacute;ceres"
            }, {
              "value": "CA",
              "name": "C&aacute;diz"
            }, {
              "value": "S",
              "name": "Cantabria"
            }, {
              "value": "CS",
              "name": "Castell&oacute;n"
            }, {
              "value": "CE",
              "name": "Ceuta"
            }, {
              "value": "CR",
              "name": "Ciudad Real"
            }, {
              "value": "CO",
              "name": "C&oacute;rdoba"
            }, {
              "value": "CU",
              "name": "Cuenca"
            }, {
              "value": "GI",
              "name": "Girona"
            }, {
              "value": "GR",
              "name": "Granada"
            }, {
              "value": "GU",
              "name": "Guadalajara"
            }, {
              "value": "SS",
              "name": "Gipuzkoa"
            }, {
              "value": "H",
              "name": "Huelva"
            }, {
              "value": "HU",
              "name": "Huesca"
            }, {
              "value": "J",
              "name": "Ja&eacute;n"
            }, {
              "value": "LO",
              "name": "La Rioja"
            }, {
              "value": "GC",
              "name": "Las Palmas"
            }, {
              "value": "LE",
              "name": "Le&oacute;n"
            }, {
              "value": "L",
              "name": "Lleida"
            }, {
              "value": "LU",
              "name": "Lugo"
            }, {
              "value": "M",
              "name": "Madrid"
            }, {
              "value": "MA",
              "name": "M&aacute;laga"
            }, {
              "value": "ML",
              "name": "Melilla"
            }, {
              "value": "MU",
              "name": "Murcia"
            }, {
              "value": "NA",
              "name": "Navarra"
            }, {
              "value": "OR",
              "name": "Ourense"
            }, {
              "value": "P",
              "name": "Palencia"
            }, {
              "value": "PO",
              "name": "Pontevedra"
            }, {
              "value": "SA",
              "name": "Salamanca"
            }, {
              "value": "TF",
              "name": "Santa Cruz de Tenerife"
            }, {
              "value": "SG",
              "name": "Segovia"
            }, {
              "value": "SE",
              "name": "Sevilla"
            }, {
              "value": "SO",
              "name": "Soria"
            }, {
              "value": "T",
              "name": "Tarragona"
            }, {
              "value": "TE",
              "name": "Teruel"
            }, {
              "value": "TO",
              "name": "Toledo"
            }, {
              "value": "V",
              "name": "Valencia"
            }, {
              "value": "VA",
              "name": "Valladolid"
            }, {
              "value": "BI",
              "name": "Bizkaia"
            }, {
              "value": "ZA",
              "name": "Zamora"
            }, {
              "value": "Z",
              "name": "Zaragoza"
            }],
            "TH": [{
              "value": "TH-37",
              "name": "Amnat Charoen (&#3629;&#3635;&#3609;&#3634;&#3592;&#3648;&#3592;&#3619;&#3636;&#3597;)"
            }, {
              "value": "TH-15",
              "name": "Ang Thong (&#3629;&#3656;&#3634;&#3591;&#3607;&#3629;&#3591;)"
            }, {
              "value": "TH-14",
              "name": "Ayutthaya (&#3614;&#3619;&#3632;&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3629;&#3618;&#3640;&#3608;&#3618;&#3634;)"
            }, {
              "value": "TH-10",
              "name": "Bangkok (&#3585;&#3619;&#3640;&#3591;&#3648;&#3607;&#3614;&#3617;&#3627;&#3634;&#3609;&#3588;&#3619;)"
            }, {
              "value": "TH-38",
              "name": "Bueng Kan (&#3610;&#3638;&#3591;&#3585;&#3634;&#3628;)"
            }, {
              "value": "TH-31",
              "name": "Buri Ram (&#3610;&#3640;&#3619;&#3637;&#3619;&#3633;&#3617;&#3618;&#3660;)"
            }, {
              "value": "TH-24",
              "name": "Chachoengsao (&#3593;&#3632;&#3648;&#3594;&#3636;&#3591;&#3648;&#3607;&#3619;&#3634;)"
            }, {
              "value": "TH-18",
              "name": "Chai Nat (&#3594;&#3633;&#3618;&#3609;&#3634;&#3607;)"
            }, {
              "value": "TH-36",
              "name": "Chaiyaphum (&#3594;&#3633;&#3618;&#3616;&#3641;&#3617;&#3636;)"
            }, {
              "value": "TH-22",
              "name": "Chanthaburi (&#3592;&#3633;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-50",
              "name": "Chiang Mai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3651;&#3627;&#3617;&#3656;)"
            }, {
              "value": "TH-57",
              "name": "Chiang Rai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3619;&#3634;&#3618;)"
            }, {
              "value": "TH-20",
              "name": "Chonburi (&#3594;&#3621;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-86",
              "name": "Chumphon (&#3594;&#3640;&#3617;&#3614;&#3619;)"
            }, {
              "value": "TH-46",
              "name": "Kalasin (&#3585;&#3634;&#3628;&#3626;&#3636;&#3609;&#3608;&#3640;&#3660;)"
            }, {
              "value": "TH-62",
              "name": "Kamphaeng Phet (&#3585;&#3635;&#3649;&#3614;&#3591;&#3648;&#3614;&#3594;&#3619;)"
            }, {
              "value": "TH-71",
              "name": "Kanchanaburi (&#3585;&#3634;&#3597;&#3592;&#3609;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-40",
              "name": "Khon Kaen (&#3586;&#3629;&#3609;&#3649;&#3585;&#3656;&#3609;)"
            }, {
              "value": "TH-81",
              "name": "Krabi (&#3585;&#3619;&#3632;&#3610;&#3637;&#3656;)"
            }, {
              "value": "TH-52",
              "name": "Lampang (&#3621;&#3635;&#3611;&#3634;&#3591;)"
            }, {
              "value": "TH-51",
              "name": "Lamphun (&#3621;&#3635;&#3614;&#3641;&#3609;)"
            }, {
              "value": "TH-42",
              "name": "Loei (&#3648;&#3621;&#3618;)"
            }, {
              "value": "TH-16",
              "name": "Lopburi (&#3621;&#3614;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-58",
              "name": "Mae Hong Son (&#3649;&#3617;&#3656;&#3630;&#3656;&#3629;&#3591;&#3626;&#3629;&#3609;)"
            }, {
              "value": "TH-44",
              "name": "Maha Sarakham (&#3617;&#3627;&#3634;&#3626;&#3634;&#3619;&#3588;&#3634;&#3617;)"
            }, {
              "value": "TH-49",
              "name": "Mukdahan (&#3617;&#3640;&#3585;&#3604;&#3634;&#3627;&#3634;&#3619;)"
            }, {
              "value": "TH-26",
              "name": "Nakhon Nayok (&#3609;&#3588;&#3619;&#3609;&#3634;&#3618;&#3585;)"
            }, {
              "value": "TH-73",
              "name": "Nakhon Pathom (&#3609;&#3588;&#3619;&#3611;&#3600;&#3617;)"
            }, {
              "value": "TH-48",
              "name": "Nakhon Phanom (&#3609;&#3588;&#3619;&#3614;&#3609;&#3617;)"
            }, {
              "value": "TH-30",
              "name": "Nakhon Ratchasima (&#3609;&#3588;&#3619;&#3619;&#3634;&#3594;&#3626;&#3637;&#3617;&#3634;)"
            }, {
              "value": "TH-60",
              "name": "Nakhon Sawan (&#3609;&#3588;&#3619;&#3626;&#3623;&#3619;&#3619;&#3588;&#3660;)"
            }, {
              "value": "TH-80",
              "name": "Nakhon Si Thammarat (&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3608;&#3619;&#3619;&#3617;&#3619;&#3634;&#3594;)"
            }, {
              "value": "TH-55",
              "name": "Nan (&#3609;&#3656;&#3634;&#3609;)"
            }, {
              "value": "TH-96",
              "name": "Narathiwat (&#3609;&#3619;&#3634;&#3608;&#3636;&#3623;&#3634;&#3626;)"
            }, {
              "value": "TH-39",
              "name": "Nong Bua Lam Phu (&#3627;&#3609;&#3629;&#3591;&#3610;&#3633;&#3623;&#3621;&#3635;&#3616;&#3641;)"
            }, {
              "value": "TH-43",
              "name": "Nong Khai (&#3627;&#3609;&#3629;&#3591;&#3588;&#3634;&#3618;)"
            }, {
              "value": "TH-12",
              "name": "Nonthaburi (&#3609;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-13",
              "name": "Pathum Thani (&#3611;&#3607;&#3640;&#3617;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-94",
              "name": "Pattani (&#3611;&#3633;&#3605;&#3605;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-82",
              "name": "Phang Nga (&#3614;&#3633;&#3591;&#3591;&#3634;)"
            }, {
              "value": "TH-93",
              "name": "Phatthalung (&#3614;&#3633;&#3607;&#3621;&#3640;&#3591;)"
            }, {
              "value": "TH-56",
              "name": "Phayao (&#3614;&#3632;&#3648;&#3618;&#3634;)"
            }, {
              "value": "TH-67",
              "name": "Phetchabun (&#3648;&#3614;&#3594;&#3619;&#3610;&#3641;&#3619;&#3603;&#3660;)"
            }, {
              "value": "TH-76",
              "name": "Phetchaburi (&#3648;&#3614;&#3594;&#3619;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-66",
              "name": "Phichit (&#3614;&#3636;&#3592;&#3636;&#3605;&#3619;)"
            }, {
              "value": "TH-65",
              "name": "Phitsanulok (&#3614;&#3636;&#3625;&#3603;&#3640;&#3650;&#3621;&#3585;)"
            }, {
              "value": "TH-54",
              "name": "Phrae (&#3649;&#3614;&#3619;&#3656;)"
            }, {
              "value": "TH-83",
              "name": "Phuket (&#3616;&#3641;&#3648;&#3585;&#3655;&#3605;)"
            }, {
              "value": "TH-25",
              "name": "Prachin Buri (&#3611;&#3619;&#3634;&#3592;&#3637;&#3609;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-77",
              "name": "Prachuap Khiri Khan (&#3611;&#3619;&#3632;&#3592;&#3623;&#3610;&#3588;&#3637;&#3619;&#3637;&#3586;&#3633;&#3609;&#3608;&#3660;)"
            }, {
              "value": "TH-85",
              "name": "Ranong (&#3619;&#3632;&#3609;&#3629;&#3591;)"
            }, {
              "value": "TH-70",
              "name": "Ratchaburi (&#3619;&#3634;&#3594;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-21",
              "name": "Rayong (&#3619;&#3632;&#3618;&#3629;&#3591;)"
            }, {
              "value": "TH-45",
              "name": "Roi Et (&#3619;&#3657;&#3629;&#3618;&#3648;&#3629;&#3655;&#3604;)"
            }, {
              "value": "TH-27",
              "name": "Sa Kaeo (&#3626;&#3619;&#3632;&#3649;&#3585;&#3657;&#3623;)"
            }, {
              "value": "TH-47",
              "name": "Sakon Nakhon (&#3626;&#3585;&#3621;&#3609;&#3588;&#3619;)"
            }, {
              "value": "TH-11",
              "name": "Samut Prakan (&#3626;&#3617;&#3640;&#3607;&#3619;&#3611;&#3619;&#3634;&#3585;&#3634;&#3619;)"
            }, {
              "value": "TH-74",
              "name": "Samut Sakhon (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3634;&#3588;&#3619;)"
            }, {
              "value": "TH-75",
              "name": "Samut Songkhram (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3591;&#3588;&#3619;&#3634;&#3617;)"
            }, {
              "value": "TH-19",
              "name": "Saraburi (&#3626;&#3619;&#3632;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-91",
              "name": "Satun (&#3626;&#3605;&#3641;&#3621;)"
            }, {
              "value": "TH-17",
              "name": "Sing Buri (&#3626;&#3636;&#3591;&#3627;&#3660;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-33",
              "name": "Sisaket (&#3624;&#3619;&#3637;&#3626;&#3632;&#3648;&#3585;&#3625;)"
            }, {
              "value": "TH-90",
              "name": "Songkhla (&#3626;&#3591;&#3586;&#3621;&#3634;)"
            }, {
              "value": "TH-64",
              "name": "Sukhothai (&#3626;&#3640;&#3650;&#3586;&#3607;&#3633;&#3618;)"
            }, {
              "value": "TH-72",
              "name": "Suphan Buri (&#3626;&#3640;&#3614;&#3619;&#3619;&#3603;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-84",
              "name": "Surat Thani (&#3626;&#3640;&#3619;&#3634;&#3625;&#3598;&#3619;&#3660;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-32",
              "name": "Surin (&#3626;&#3640;&#3619;&#3636;&#3609;&#3607;&#3619;&#3660;)"
            }, {
              "value": "TH-63",
              "name": "Tak (&#3605;&#3634;&#3585;)"
            }, {
              "value": "TH-92",
              "name": "Trang (&#3605;&#3619;&#3633;&#3591;)"
            }, {
              "value": "TH-23",
              "name": "Trat (&#3605;&#3619;&#3634;&#3604;)"
            }, {
              "value": "TH-34",
              "name": "Ubon Ratchathani (&#3629;&#3640;&#3610;&#3621;&#3619;&#3634;&#3594;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-41",
              "name": "Udon Thani (&#3629;&#3640;&#3604;&#3619;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-61",
              "name": "Uthai Thani (&#3629;&#3640;&#3607;&#3633;&#3618;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-53",
              "name": "Uttaradit (&#3629;&#3640;&#3605;&#3619;&#3604;&#3636;&#3605;&#3606;&#3660;)"
            }, {
              "value": "TH-95",
              "name": "Yala (&#3618;&#3632;&#3621;&#3634;)"
            }, {
              "value": "TH-35",
              "name": "Yasothon (&#3618;&#3650;&#3626;&#3608;&#3619;)"
            }],
            "TR": [{
              "value": "TR01",
              "name": "Adana"
            }, {
              "value": "TR02",
              "name": "Ad&#305;yaman"
            }, {
              "value": "TR03",
              "name": "Afyon"
            }, {
              "value": "TR04",
              "name": "A&#287;r&#305;"
            }, {
              "value": "TR05",
              "name": "Amasya"
            }, {
              "value": "TR06",
              "name": "Ankara"
            }, {
              "value": "TR07",
              "name": "Antalya"
            }, {
              "value": "TR08",
              "name": "Artvin"
            }, {
              "value": "TR09",
              "name": "Ayd&#305;n"
            }, {
              "value": "TR10",
              "name": "Bal&#305;kesir"
            }, {
              "value": "TR11",
              "name": "Bilecik"
            }, {
              "value": "TR12",
              "name": "Bing&#246;l"
            }, {
              "value": "TR13",
              "name": "Bitlis"
            }, {
              "value": "TR14",
              "name": "Bolu"
            }, {
              "value": "TR15",
              "name": "Burdur"
            }, {
              "value": "TR16",
              "name": "Bursa"
            }, {
              "value": "TR17",
              "name": "&#199;anakkale"
            }, {
              "value": "TR18",
              "name": "&#199;ank&#305;r&#305;"
            }, {
              "value": "TR19",
              "name": "&#199;orum"
            }, {
              "value": "TR20",
              "name": "Denizli"
            }, {
              "value": "TR21",
              "name": "Diyarbak&#305;r"
            }, {
              "value": "TR22",
              "name": "Edirne"
            }, {
              "value": "TR23",
              "name": "Elaz&#305;&#287;"
            }, {
              "value": "TR24",
              "name": "Erzincan"
            }, {
              "value": "TR25",
              "name": "Erzurum"
            }, {
              "value": "TR26",
              "name": "Eski&#351;ehir"
            }, {
              "value": "TR27",
              "name": "Gaziantep"
            }, {
              "value": "TR28",
              "name": "Giresun"
            }, {
              "value": "TR29",
              "name": "G&#252;m&#252;&#351;hane"
            }, {
              "value": "TR30",
              "name": "Hakkari"
            }, {
              "value": "TR31",
              "name": "Hatay"
            }, {
              "value": "TR32",
              "name": "Isparta"
            }, {
              "value": "TR33",
              "name": "&#304;&#231;el"
            }, {
              "value": "TR34",
              "name": "&#304;stanbul"
            }, {
              "value": "TR35",
              "name": "&#304;zmir"
            }, {
              "value": "TR36",
              "name": "Kars"
            }, {
              "value": "TR37",
              "name": "Kastamonu"
            }, {
              "value": "TR38",
              "name": "Kayseri"
            }, {
              "value": "TR39",
              "name": "K&#305;rklareli"
            }, {
              "value": "TR40",
              "name": "K&#305;r&#351;ehir"
            }, {
              "value": "TR41",
              "name": "Kocaeli"
            }, {
              "value": "TR42",
              "name": "Konya"
            }, {
              "value": "TR43",
              "name": "K&#252;tahya"
            }, {
              "value": "TR44",
              "name": "Malatya"
            }, {
              "value": "TR45",
              "name": "Manisa"
            }, {
              "value": "TR46",
              "name": "Kahramanmara&#351;"
            }, {
              "value": "TR47",
              "name": "Mardin"
            }, {
              "value": "TR48",
              "name": "Mu&#287;la"
            }, {
              "value": "TR49",
              "name": "Mu&#351;"
            }, {
              "value": "TR50",
              "name": "Nev&#351;ehir"
            }, {
              "value": "TR51",
              "name": "Ni&#287;de"
            }, {
              "value": "TR52",
              "name": "Ordu"
            }, {
              "value": "TR53",
              "name": "Rize"
            }, {
              "value": "TR54",
              "name": "Sakarya"
            }, {
              "value": "TR55",
              "name": "Samsun"
            }, {
              "value": "TR56",
              "name": "Siirt"
            }, {
              "value": "TR57",
              "name": "Sinop"
            }, {
              "value": "TR58",
              "name": "Sivas"
            }, {
              "value": "TR59",
              "name": "Tekirda&#287;"
            }, {
              "value": "TR60",
              "name": "Tokat"
            }, {
              "value": "TR61",
              "name": "Trabzon"
            }, {
              "value": "TR62",
              "name": "Tunceli"
            }, {
              "value": "TR63",
              "name": "&#350;anl&#305;urfa"
            }, {
              "value": "TR64",
              "name": "U&#351;ak"
            }, {
              "value": "TR65",
              "name": "Van"
            }, {
              "value": "TR66",
              "name": "Yozgat"
            }, {
              "value": "TR67",
              "name": "Zonguldak"
            }, {
              "value": "TR68",
              "name": "Aksaray"
            }, {
              "value": "TR69",
              "name": "Bayburt"
            }, {
              "value": "TR70",
              "name": "Karaman"
            }, {
              "value": "TR71",
              "name": "K&#305;r&#305;kkale"
            }, {
              "value": "TR72",
              "name": "Batman"
            }, {
              "value": "TR73",
              "name": "&#350;&#305;rnak"
            }, {
              "value": "TR74",
              "name": "Bart&#305;n"
            }, {
              "value": "TR75",
              "name": "Ardahan"
            }, {
              "value": "TR76",
              "name": "I&#287;d&#305;r"
            }, {
              "value": "TR77",
              "name": "Yalova"
            }, {
              "value": "TR78",
              "name": "Karab&#252;k"
            }, {
              "value": "TR79",
              "name": "Kilis"
            }, {
              "value": "TR80",
              "name": "Osmaniye"
            }, {
              "value": "TR81",
              "name": "D&#252;zce"
            }],
            "US": [{
              "value": "AL",
              "name": "Alabama"
            }, {
              "value": "AK",
              "name": "Alaska"
            }, {
              "value": "AZ",
              "name": "Arizona"
            }, {
              "value": "AR",
              "name": "Arkansas"
            }, {
              "value": "CA",
              "name": "California"
            }, {
              "value": "CO",
              "name": "Colorado"
            }, {
              "value": "CT",
              "name": "Connecticut"
            }, {
              "value": "DE",
              "name": "Delaware"
            }, {
              "value": "DC",
              "name": "District Of Columbia"
            }, {
              "value": "FL",
              "name": "Florida"
            }, {
              "value": "GA",
              "name": "Georgia"
            }, {
              "value": "HI",
              "name": "Hawaii"
            }, {
              "value": "ID",
              "name": "Idaho"
            }, {
              "value": "IL",
              "name": "Illinois"
            }, {
              "value": "IN",
              "name": "Indiana"
            }, {
              "value": "IA",
              "name": "Iowa"
            }, {
              "value": "KS",
              "name": "Kansas"
            }, {
              "value": "KY",
              "name": "Kentucky"
            }, {
              "value": "LA",
              "name": "Louisiana"
            }, {
              "value": "ME",
              "name": "Maine"
            }, {
              "value": "MD",
              "name": "Maryland"
            }, {
              "value": "MA",
              "name": "Massachusetts"
            }, {
              "value": "MI",
              "name": "Michigan"
            }, {
              "value": "MN",
              "name": "Minnesota"
            }, {
              "value": "MS",
              "name": "Mississippi"
            }, {
              "value": "MO",
              "name": "Missouri"
            }, {
              "value": "MT",
              "name": "Montana"
            }, {
              "value": "NE",
              "name": "Nebraska"
            }, {
              "value": "NV",
              "name": "Nevada"
            }, {
              "value": "NH",
              "name": "New Hampshire"
            }, {
              "value": "NJ",
              "name": "New Jersey"
            }, {
              "value": "NM",
              "name": "New Mexico"
            }, {
              "value": "NY",
              "name": "New York"
            }, {
              "value": "NC",
              "name": "North Carolina"
            }, {
              "value": "ND",
              "name": "North Dakota"
            }, {
              "value": "OH",
              "name": "Ohio"
            }, {
              "value": "OK",
              "name": "Oklahoma"
            }, {
              "value": "OR",
              "name": "Oregon"
            }, {
              "value": "PA",
              "name": "Pennsylvania"
            }, {
              "value": "RI",
              "name": "Rhode Island"
            }, {
              "value": "SC",
              "name": "South Carolina"
            }, {
              "value": "SD",
              "name": "South Dakota"
            }, {
              "value": "TN",
              "name": "Tennessee"
            }, {
              "value": "TX",
              "name": "Texas"
            }, {
              "value": "UT",
              "name": "Utah"
            }, {
              "value": "VT",
              "name": "Vermont"
            }, {
              "value": "VA",
              "name": "Virginia"
            }, {
              "value": "WA",
              "name": "Washington"
            }, {
              "value": "WV",
              "name": "West Virginia"
            }, {
              "value": "WI",
              "name": "Wisconsin"
            }, {
              "value": "WY",
              "name": "Wyoming"
            }, {
              "value": "AA",
              "name": "Armed Forces (AA)"
            }, {
              "value": "AE",
              "name": "Armed Forces (AE)"
            }, {
              "value": "AP",
              "name": "Armed Forces (AP)"
            }]
          },
          "continent": {
            "BD": "AS",
            "BE": "EU",
            "BF": "AF",
            "BG": "EU",
            "BA": "EU",
            "BB": "NA",
            "WF": "OC",
            "BL": "NA",
            "BM": "NA",
            "BN": "AS",
            "BO": "SA",
            "BH": "AS",
            "BI": "AF",
            "BJ": "AF",
            "BT": "AS",
            "JM": "NA",
            "BV": "AN",
            "BW": "AF",
            "WS": "OC",
            "BQ": "NA",
            "BR": "SA",
            "BS": "NA",
            "JE": "EU",
            "BY": "EU",
            "BZ": "NA",
            "RU": "EU",
            "RW": "AF",
            "RS": "EU",
            "TL": "OC",
            "RE": "AF",
            "TM": "AS",
            "TJ": "AS",
            "RO": "EU",
            "TK": "OC",
            "GW": "AF",
            "GU": "OC",
            "GT": "NA",
            "GS": "AN",
            "GR": "EU",
            "GQ": "AF",
            "GP": "NA",
            "JP": "AS",
            "GY": "SA",
            "GG": "EU",
            "GF": "SA",
            "GE": "AS",
            "GD": "NA",
            "GB": "EU",
            "GA": "AF",
            "SV": "NA",
            "GN": "AF",
            "GM": "AF",
            "GL": "NA",
            "GI": "EU",
            "GH": "AF",
            "OM": "AS",
            "TN": "AF",
            "JO": "AS",
            "HR": "EU",
            "HT": "NA",
            "HU": "EU",
            "HK": "AS",
            "HN": "NA",
            "HM": "AN",
            "VE": "SA",
            "PR": "NA",
            "PS": "AS",
            "PW": "OC",
            "PT": "EU",
            "SJ": "EU",
            "PY": "SA",
            "IQ": "AS",
            "PA": "NA",
            "PF": "OC",
            "PG": "OC",
            "PE": "SA",
            "PK": "AS",
            "PH": "AS",
            "PN": "OC",
            "PL": "EU",
            "PM": "NA",
            "ZM": "AF",
            "EH": "AF",
            "EE": "EU",
            "EG": "AF",
            "ZA": "AF",
            "EC": "SA",
            "IT": "EU",
            "VN": "AS",
            "SB": "OC",
            "ET": "AF",
            "SO": "AF",
            "ZW": "AF",
            "SA": "AS",
            "ES": "EU",
            "ER": "AF",
            "ME": "EU",
            "MD": "EU",
            "MG": "AF",
            "MF": "NA",
            "MA": "AF",
            "MC": "EU",
            "UZ": "AS",
            "MM": "AS",
            "ML": "AF",
            "MO": "AS",
            "MN": "AS",
            "MH": "OC",
            "MK": "EU",
            "MU": "AF",
            "MT": "EU",
            "MW": "AF",
            "MV": "AS",
            "MQ": "NA",
            "MP": "OC",
            "MS": "NA",
            "MR": "AF",
            "IM": "EU",
            "UG": "AF",
            "TZ": "AF",
            "MY": "AS",
            "MX": "NA",
            "IL": "AS",
            "FR": "EU",
            "IO": "AS",
            "SH": "AF",
            "FI": "EU",
            "FJ": "OC",
            "FK": "SA",
            "FM": "OC",
            "FO": "EU",
            "NI": "NA",
            "NL": "EU",
            "NO": "EU",
            "NA": "AF",
            "VU": "OC",
            "NC": "OC",
            "NE": "AF",
            "NF": "OC",
            "NG": "AF",
            "NZ": "OC",
            "NP": "AS",
            "NR": "OC",
            "NU": "OC",
            "CK": "OC",
            "XK": "EU",
            "CI": "AF",
            "CH": "EU",
            "CO": "SA",
            "CN": "AS",
            "CM": "AF",
            "CL": "SA",
            "CC": "AS",
            "CA": "NA",
            "CG": "AF",
            "CF": "AF",
            "CD": "AF",
            "CZ": "EU",
            "CY": "EU",
            "CX": "AS",
            "CR": "NA",
            "CW": "NA",
            "CV": "AF",
            "CU": "NA",
            "SZ": "AF",
            "SY": "AS",
            "SX": "NA",
            "KG": "AS",
            "KE": "AF",
            "SS": "AF",
            "SR": "SA",
            "KI": "OC",
            "KH": "AS",
            "KN": "NA",
            "KM": "AF",
            "ST": "AF",
            "SK": "EU",
            "KR": "AS",
            "SI": "EU",
            "KP": "AS",
            "KW": "AS",
            "SN": "AF",
            "SM": "EU",
            "SL": "AF",
            "SC": "AF",
            "KZ": "AS",
            "KY": "NA",
            "SG": "AS",
            "SE": "EU",
            "SD": "AF",
            "DO": "NA",
            "DM": "NA",
            "DJ": "AF",
            "DK": "EU",
            "VG": "NA",
            "DE": "EU",
            "YE": "AS",
            "DZ": "AF",
            "US": "NA",
            "UY": "SA",
            "YT": "AF",
            "UM": "OC",
            "LB": "AS",
            "LC": "NA",
            "LA": "AS",
            "TV": "OC",
            "TW": "AS",
            "TT": "NA",
            "TR": "AS",
            "LK": "AS",
            "LI": "EU",
            "LV": "EU",
            "TO": "OC",
            "LT": "EU",
            "LU": "EU",
            "LR": "AF",
            "LS": "AF",
            "TH": "AS",
            "TF": "AN",
            "TG": "AF",
            "TD": "AF",
            "TC": "NA",
            "LY": "AF",
            "VA": "EU",
            "VC": "NA",
            "AE": "AS",
            "AD": "EU",
            "AG": "NA",
            "AF": "AS",
            "AI": "NA",
            "VI": "NA",
            "IS": "EU",
            "IR": "AS",
            "AM": "AS",
            "AL": "EU",
            "AO": "AF",
            "AQ": "AN",
            "AS": "OC",
            "AR": "SA",
            "AU": "OC",
            "AT": "EU",
            "AW": "NA",
            "IN": "AS",
            "AX": "EU",
            "AZ": "AS",
            "IE": "EU",
            "ID": "AS",
            "UA": "EU",
            "QA": "AS",
            "MZ": "AF"
          }
        };
      }

      _createClass(LocationDataService, [{
        key: "getCountryName",
        value: function getCountryName(val) {
          var name = '';

          var _iterator5 = _createForOfIteratorHelper(this.data.countries),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var v = _step5.value;
              if (val == v.value) name = v.name;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return name;
        }
      }, {
        key: "getStateName",
        value: function getStateName(val, val2) {
          var name = "";

          if (this.data.states[val]) {
            var _iterator6 = _createForOfIteratorHelper(this.data.states[val]),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var v = _step6.value;
                if (val2 == v.value) name = v.name;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          } else name = "other";

          return name;
        }
      }, {
        key: "getStateCode",
        value: function getStateCode(c, s) {
          var name = "";

          if (this.data.states[c]) {
            var _iterator7 = _createForOfIteratorHelper(this.data.states[c]),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var v = _step7.value;
                if (s == v.name) name = v.value;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } else name = "s";

          return name;
        }
      }, {
        key: "getContientCode",
        value: function getContientCode(con) {
          return this.data.continent[con];
        }
      }]);

      return LocationDataService;
    }();

    LocationDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LocationDataService);
    /***/
  },

  /***/
  "./src/providers/shared-data/shared-data.service.ts":
  /*!**********************************************************!*\
    !*** ./src/providers/shared-data/shared-data.service.ts ***!
    \**********************************************************/

  /*! exports provided: SharedDataService */

  /***/
  function srcProvidersSharedDataSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedDataService", function () {
      return SharedDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js"); // Project Name: IonicEcommerce
    // Project URI: http://ionicecommerce.com
    // Author: VectorCoder Team
    // Author URI: http://vectorcoder.com/


    var SharedDataService = /*#__PURE__*/function () {
      function SharedDataService(http, config, storage, loading, appEventsService, platform, spinnerDialog, oneSignal, alertCtrl, toastCtrl, iab, applicationRef, splashScreen) {
        var _this29 = this;

        _classCallCheck(this, SharedDataService);

        this.http = http;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.appEventsService = appEventsService;
        this.platform = platform;
        this.spinnerDialog = spinnerDialog;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.applicationRef = applicationRef;
        this.splashScreen = splashScreen;
        this.banners = [];
        this.tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.vendors = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.allCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.categories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.subCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.wishListProducts = new Array();
        this.cartProducts = new Array();
        this.couponArray = new Array();
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.cartTempProducts = [];
        this.translationListArray = [];
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
          phone: ''
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
        this.shipping_lines = [];
        this.listTaxRates = [];
        this.sameAddress = false;
        this.checkOutPageText = "Place Your Order";
        this.device = '';
        this.attributes = [];
        this.headerHexColor = "#51688F";
        this.headerHexColorContrast = "#ffffff";
        this.singleProductPageData = [];
        this.storePageData = [];
        this.splashScreenHide = false; //Function calcualte the total items of cart

        this.cartTotalItems = function () {
          this.appEventsService.publish('cartChange');
          var total = 0;

          var _iterator8 = _createForOfIteratorHelper(this.cartProducts),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var value = _step8.value;
              total += parseInt(value.quantity);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          this.cartquantity = total; // this.applicationRef.tick();

          return total;
        };

        this.http.get('assets/i18n/' + localStorage.languageCode + ".json").subscribe(function (data) {
          _this29.translationListArray = data;

          _this29.applicationRef.tick();
        });
        var settingsLoaded = this.appEventsService.subscribe("settingsLoaded");
        settingsLoaded.subscriptions.add(settingsLoaded.event.subscribe(function (data) {
          _this29.onStart();
        })); //getting translation of the 

        this.translateString(this.checkOutPageText).then(function (res) {
          _this29.checkOutPageText = res;
        }); //update settings before calling
        //getting recent viewed items from local storage

        storage.get('customerData').then(function (val) {
          if (val != null || val != undefined) _this29.customerData = val;
        }); //getting recent viewed items from local storage

        storage.get('recentViewedProducts').then(function (val) {
          if (val != null) _this29.recentViewedProducts = val;
        }); //getting cart from local storage

        storage.get('cartProducts').then(function (val) {
          if (val != null) _this29.cartProducts = val;

          _this29.cartTotalItems();
        });
        this.cartTotalItems(); //getting wishList items from local storage

        storage.get('wishListProducts').then(function (val) {
          if (val != null) _this29.wishListProducts = val; // console.log(val);
        }); //---------------- end -----------------
      }

      _createClass(SharedDataService, [{
        key: "hideSplashScreen",
        value: function hideSplashScreen() {
          if (this.platform.is('cordova')) {
            if (!this.splashScreenHide) {
              this.splashScreen.hide();
              this.splashScreenHide = true;
            }
          }
        }
      }, {
        key: "onStart",
        value: function onStart() {
          var _this30 = this;

          //banners
          this.config.getWithUrl(this.config.url + '/api/appsettings/get_all_banners/?insecure=cool').then(function (data) {
            _this30.banners = data.data;
          }); // //getting tab 1 products?status=publish

          this.config.getWoo("products?status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this30.tab1 = data;

            _this30.applicationRef.tick();
          }); //getting tab 2

          this.config.getWoo("products?on_sale=true&status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this30.tab2 = data;

            _this30.applicationRef.tick();
          }); //getting tab 3

          this.config.getWoo("products?featured=true&status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this30.tab3 = data;

            _this30.applicationRef.tick();
          });
          var url = this.config.url + '/wp-json/wp/v2/pages/';

          if (this.config.appSettings.about_page_id != undefined) {
            var ids = this.config.appSettings.about_page_id + "," + this.config.appSettings.refund_page_id + "," + this.config.appSettings.terms_page_id + "," + this.config.appSettings.privacy_page_id;
            url = url + '?include=' + ids;
          } //content pages


          this.config.getWithUrl(url).then(function (data) {
            var d = data;

            var _iterator9 = _createForOfIteratorHelper(d),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var value = _step9.value;

                if (_this30.config.appSettings.about_page_id == value.id) {
                  _this30.config.aboutUs = value.content.rendered;
                }

                if (_this30.config.appSettings.refund_page_id == value.id) _this30.config.refundPolicy = value.content.rendered;
                if (_this30.config.appSettings.terms_page_id == value.id) _this30.config.termServices = value.content.rendered;
                if (_this30.config.appSettings.privacy_page_id == value.id) _this30.config.privacyPolicy = value.content.rendered;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }); //getting all allCategories

          this.getAllCategories(1);
        }
      }, {
        key: "getVendorList",
        value: function getVendorList() {
          var _this31 = this;

          if (this.config.showVendorInfo) {
            this.config.getWithUrl(this.config.url + "/api/appsettings/get_featured_dokan_vendors_list/?insecure=cool").then(function (data) {
              if (_this31.vendors[0] == 1) _this31.vendors = [];

              var _iterator10 = _createForOfIteratorHelper(data.data),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var d = _step10.value;
                  if (d.banner == false) d.banner = "assets/placeholder-v.png"; //;

                  if (d.meta[0].store_name != '') d.name = d.meta[0].store_name;else d.name = d.first_name + " " + d.last_name; //console.log(d.name);

                  _this31.vendors.push(d);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              _this31.applicationRef.tick();
            }); //console.log("dokan is enabled");
          } else if (this.config.showWcVendorInfo) {
            this.config.getWithUrl(this.config.url + "/api/appsettings/get_featured_wcvendors_list/?insecure=cool").then(function (data) {
              if (_this31.vendors[0] == 1) _this31.vendors = []; //console.log(data.data)

              if (data.data == null) data.data = [];

              var _iterator11 = _createForOfIteratorHelper(data.data),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var d = _step11.value;
                  if (d.banner == false) d.banner = "assets/placeholder-wc.png"; //;

                  if (d.meta.pv_shop_name != '') d.name = d.meta.pv_shop_name;else d.name = d.first_name + " " + d.last_name; // console.log(d.name);

                  _this31.vendors.push(d);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              _this31.applicationRef.tick();
            });
          }
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories(page) {
          var _this32 = this;

          //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
          this.config.getWoo("products/categories?per_page=50&page=" + page + "&" + this.config.productsArguments).then(function (data) {
            var dat = data;

            if (_this32.allCategories[0] == 1) {
              _this32.allCategories = [];
              _this32.categories = [];
              _this32.subCategories = [];
            }

            var _iterator12 = _createForOfIteratorHelper(dat),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var value = _step12.value;

                if (value.count != 0) {
                  value.name = _this32.removeHtmlEntites(value.name);

                  _this32.allCategories.push(value);

                  if (value.parent == 0) _this32.categories.push(value);else _this32.subCategories.push(value);
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            if (dat.length == 50) {
              _this32.getAllCategories(page + 1);
            }

            if (dat.length == 0) {
              _this32.appEventsService.publish("openDeepLink", "openCategoryInShop");
            }

            _this32.applicationRef.tick();
          });
        }
      }, {
        key: "removeHtmlEntites",
        value: function removeHtmlEntites(value) {
          var multiple = {
            '&nbsp;': ' ',
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': '\'',
            '&cent;': '??',
            '&pound;': '??',
            '&yen;': '??',
            '&euro;': '???',
            '&copy;': '??',
            '&reg;': '??',
            '&#160;': ' ',
            '&#60;': '<',
            '&#62;': '>',
            '&#38;': '&',
            '&#34;': '"',
            '&#39;': '\'',
            '&#162;': '??',
            '&#163;': '??',
            '&#165;': '??',
            '&#8364;': '???',
            '&#169;': '??',
            '&#174;': '??'
          };

          for (var _char in multiple) {
            var before = _char;
            var after = multiple[_char];
            var pattern = new RegExp(before, 'g');
            value = value.replace(pattern, after);
          }

          return value;
        } //adding into recent array products

      }, {
        key: "addToRecent",
        value: function addToRecent(p) {
          var found = false;

          var _iterator13 = _createForOfIteratorHelper(this.recentViewedProducts),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var value = _step13.value;

              if (value.id == p.id) {
                found = true;
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
          }
        } //removing from recent array products

      }, {
        key: "removeRecent",
        value: function removeRecent(p) {
          var _this33 = this;

          this.recentViewedProducts.forEach(function (value, index) {
            if (value.id == p.id) {
              _this33.recentViewedProducts.splice(index, 1);

              _this33.storage.set('recentViewedProducts', _this33.recentViewedProducts);
            }
          });
        } //adding into cart array products

      }, {
        key: "addToCart",
        value: function addToCart(product, variation, quantity, metaData) {
          if (!this.checkCart(product, quantity)) return 0;
          if (this.alreadyInCart(product, variation, quantity)) return 0;
          var p = {};
          p.product_id = product.id;
          p.name = product.name;
          if (quantity == null || quantity == "null") p.quantity = 1;else {
            p.quantity = quantity;
            console.log(quantity);
            console.log("quantity not null");
          }
          ;
          var seconds = new Date().getTime();
          p.cart_id = product.id + seconds;
          if (product.images.length != 0) p.image = product.images[0].src;else p.image = "assets/woocommerce-placeholder.png";
          console.log(p.image);
          p.stock_quantity = product.stock_quantity;
          p.tax_class = product.tax_class;
          p.tax_status = product.tax_status;
          p.price = product.price;
          p.price_html = product.price_html;
          p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
          p.total = parseFloat(product.price) * parseInt(p.quantity);
          p.on_sale = product.on_sale;
          p.categories = product.categories;
          p.sku = product.sku;
          if (metaData != null) p.meta_data = metaData;
          p.sold_individually = product.sold_individually;

          if (product.type == 'variable' && variation != null) {
            p.variation_id = variation.id;
            p.price = parseFloat(variation.price);
            p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
            p.total = parseFloat(variation.price) * parseInt(p.quantity);
            p.name = variation.name;
            p.stock_quantity = variation.stock_quantity;
            p.tax_status = variation.tax_status;
            if (variation.image) p.image = variation.image.src;else p.image = variation.images[0].src;
          }

          console.log(p);
          this.cartProducts.push(p);
          this.storage.set('cartProducts', this.cartProducts);
          this.cartTotalItems();
          this.applicationRef.tick(); // console.log(this.cartProducts);
          //console.log(this.cartProducts);

          this.toast("Added To Cart!");
        }
      }, {
        key: "checkCart",
        value: function checkCart(p, quantity) {
          var name = null;
          var onlyOneAllowed = true;
          var quantityCheck = true; //check for only one item is allowed

          var _iterator14 = _createForOfIteratorHelper(this.cartProducts),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var value = _step14.value;

              if (value.sold_individually == true && p.id == value.product_id) {
                onlyOneAllowed = false;
                name = value.name;
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          if (onlyOneAllowed == false) this.showAlertWithTitle(name, "Only One Item Allowed"); //check for product quantity

          if (quantity == null) quantity = 1;
          if (p.stock_quantity == null || p.stock_quantity > quantity) quantityCheck = true;else if (p.stock_quantity < quantity) {
            quantityCheck = false;
            this.showAlert("Product Quantity is Limited!");
          }
          if (onlyOneAllowed && quantityCheck) return true;else return false;
        }
      }, {
        key: "alreadyInCart",
        value: function alreadyInCart(p, vId, quantity) {
          var count = 0;

          var _iterator15 = _createForOfIteratorHelper(this.cartProducts),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var value = _step15.value;

              //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
              if (p.type != 'variable' && value.product_id == p.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
              } else if (value.product_id == p.id && value.variation_id == vId.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          this.storage.set('cartProducts', this.cartProducts);
          this.cartTotalItems();
          if (count != 0) return true;else return false;
        } //removing from recent array products

      }, {
        key: "removeCart",
        value: function removeCart(p) {
          //console.log(value);
          this.cartProducts = p;
          this.storage.set('cartProducts', this.cartProducts); // this.storage.get('cartProducts').then((val) => {
          //   //console.log(val);
          // });

          this.cartTotalItems();
        }
      }, {
        key: "emptyCart",
        value: function emptyCart() {
          this.cartProducts = [];
          this.storage.set('cartProducts', this.cartProducts);
          this.cartTotalItems();
        }
      }, {
        key: "emptyRecentViewed",
        value: function emptyRecentViewed() {
          this.recentViewedProducts = [];
          this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
      }, {
        key: "productsTotal",
        value: function productsTotal() {
          var total = 0;

          var _iterator16 = _createForOfIteratorHelper(this.cartProducts),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var value = _step16.value;
              total = total + parseFloat(value.total);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          return total;
        }
      }, {
        key: "removeWishList",
        value: function removeWishList(p) {
          var _this34 = this;

          this.wishListProducts.forEach(function (value, index) {
            if (value.id == p.id) {
              _this34.wishListProducts.splice(index, 1);

              _this34.storage.set('wishListProducts', _this34.wishListProducts);
            }
          });
          this.appEventsService.publish('wishListUpdate', {
            id: p.id,
            value: 0
          });
          this.toast("Removed From Wish List!");
          this.applicationRef.tick();
        }
      }, {
        key: "addWishList",
        value: function addWishList(p) {
          this.wishListProducts.push(p);
          this.storage.set('wishListProducts', this.wishListProducts);
          this.appEventsService.publish('wishListUpdate', {
            id: p.id,
            value: 1
          });
          this.toast("Added To Wish List!");
          this.applicationRef.tick();
        }
      }, {
        key: "login",
        value: function login(data) {
          console.log(data);
          this.customerData = data;
          this.storage.set('customerData', this.customerData);
          this.subscribePush();
          this.appEventsService.publish("updateSideMenu", '');
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.loading.autoHide(500);
          this.customerData = {};
          this.storage.set('customerData', this.customerData);
          this.resetData();
          this.appEventsService.publish("updateSideMenu", ''); // this.fb.logout();
        } //============================================================================================
        //getting token and passing to server

      }, {
        key: "subscribePush",
        value: function subscribePush() {
          if (this.platform.is('cordova') && this.config.onesignalAppId != "") {
            this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (data) {// alert("registration" + data.userId);
              // console.log(data.userId);
              //this.storage.set('registrationId', token);
            });
          }
        }
      }, {
        key: "showAd",
        value: function showAd() {
          if (this.platform.is('cordova')) {
            this.appEventsService.publish('showAd', "");
          }
        }
      }, {
        key: "orderComplete",
        value: function orderComplete() {
          this.cartProducts = [];
          this.couponArray = [];
          this.storage.set('cartProducts', []);
          this.shipping_lines = [];
          this.cartTotalItems();
          console.log("order complete");
        } // <!-- 2.0 updates -->

      }, {
        key: "onePageCheckOut",
        value: function onePageCheckOut() {
          var customer_id = 0;
          var token = null;
          var biling = this.billing;
          var shiping = this.shipping;

          if (this.customerData.id != null) {
            customer_id = this.customerData.id;
            token = this.customerData.cookie;
            biling = this.customerData.billing;
            shiping = this.customerData.shipping;
          }

          var onePage = this.config.checkOutPage;
          var data = {
            token: token,
            billing_info: biling,
            shipping_info: shiping,
            products: this.getProducts(),
            //shipping_ids: this.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            //sameAddress: this.sameAddress
            one_page: onePage,
            platform: this.device
          };
          console.log(data);
          this.openCheckoutWebview(data);
        } //=================================================================================================================================
        // <!-- 2.0 updates -->

      }, {
        key: "getProducts",
        value: function getProducts() {
          var data = [];

          var _iterator17 = _createForOfIteratorHelper(this.cartProducts),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var v = _step17.value;
              var obj = {
                quantity: v.quantity,
                product_id: v.product_id,
                total: v.total.toString()
              };
              if (v.variation_id) Object.assign(obj, {
                variation_id: v.variation_id
              }); //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })

              data.push(obj);
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          return data;
        } //=================================================================================================================================
        //Object.assign(c, data
        // <!-- 2.0 updates -->

      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var data = [];

          var _iterator18 = _createForOfIteratorHelper(this.couponArray),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var v = _step18.value;
              data.push({
                code: v.code,
                discount: v.amount
              });
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          return data;
        } //=================================================================================================================================
        // <!-- 2.0 updates -->

      }, {
        key: "getShippingLines",
        value: function getShippingLines() {
          var data = [];

          var _iterator19 = _createForOfIteratorHelper(this.shipping_lines),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var v = _step19.value;
              data.push({
                code: v.code,
                discount: v.amount
              });
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return data;
        }
      }, {
        key: "resetData",
        value: function resetData() {
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
            phone: ''
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
        }
      }, {
        key: "toast",
        value: function toast(msg) {
          var _this35 = this;

          this.translateString(msg).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this35, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var toast;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.toastCtrl.create({
                        message: res,
                        duration: 1500,
                        position: 'top',
                        color: 'primary'
                      });

                    case 2:
                      toast = _context19.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          });
        }
      }, {
        key: "uploadDataToServer",
        value: function uploadDataToServer(data) {
          var _this36 = this;

          this.loading.show(); // var uri = encodeURIComponent(JSON.stringify(data));
          // let d = { "order_link": data };

          return new Promise(function (resolve) {
            _this36.http.post(_this36.config.url + '/api/appsettings/ionic_data_link/?insecure=cool', data).subscribe(function (dat) {
              console.log(dat);
              resolve(dat);

              _this36.loading.hide();
            });
          });
        } //=================================================================================================================================

      }, {
        key: "openCheckoutWebview",
        value: function openCheckoutWebview(data) {
          var _this37 = this;

          // let options: InAppBrowserOptions = {
          //   toolbarposition: "top",
          //   toolbarcolor: this.headerHexColor,
          //   location: "yes",
          //   hideurlbar: "yes",
          //   hidenavigationbuttons: "yes",
          //   zoom: "no",
          //   //usewkwebview: "yes",
          //   closebuttoncolor: this.headerHexColorContrast
          // }
          var options = {
            toolbarposition: "top",
            location: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            hideurlbar: "yes",
            zoom: 'no',
            closebuttoncolor: this.headerHexColorContrast,
            toolbarcolor: this.headerHexColor,
            toolbar: 'yes'
          };
          console.log(options);
          this.uploadDataToServer(data).then(function (id) {
            console.log("id from data = " + id);

            var b = _this37.iab.create(_this37.config.url + "/mobile-checkout/?order_id=" + id, '_blank', options);

            var orderPlaced = false;
            b.on('loadstart').subscribe(function (res) {
              _this37.translateString('Loading').then(function (res) {
                _this37.spinnerDialog.show("", res, true, {
                  overlayOpacity: 1.00
                });

                setTimeout(function () {
                  _this37.spinnerDialog.hide();
                }, 5000);
              });

              if (res.url.indexOf('order-received') != -1) {
                console.log(res.url);
                orderPlaced = true;
                b.close();

                _this37.appEventsService.publish('openThankYouPage', "");
              } else if (res.url.indexOf('cancel_order=true') != -1) {
                b.close();
              }
            });
            b.on('loadstop').subscribe(function (res) {
              console.log('loadstop');
            });
            b.on('exit').subscribe(function (res) {
              if (orderPlaced) _this37.appEventsService.publish('openThankYouPage', "");
            });
          });
        }
      }, {
        key: "checkAvatar",
        value: function checkAvatar() {
          var result = "";

          if (this.customerData.id != null) {
            if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') != -1) {
              result = "avatar";
            } else if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') == -1) {
              result = "image";
            }
          } else result = "false";

          return result;
        }
      }, {
        key: "getNameFirstLetter",
        value: function getNameFirstLetter() {
          return this.customerData.first_name.charAt(0);
        } //categories page

      }, {
        key: "getCategoriesPageItems",
        value: function getCategoriesPageItems(parent) {
          var c = [];
          if (parent == undefined) c = this.categories;else {
            var _iterator20 = _createForOfIteratorHelper(this.allCategories),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var v = _step20.value;

                if (v.parent == parent) {
                  c.push(v);
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
          return c;
        } // translation services

      }, {
        key: "translateString",
        value: function translateString(value) {
          var _this38 = this;

          return new Promise(function (resolve) {
            resolve(_this38.translationListArray[value]);
          });
        }
      }, {
        key: "translateArray",
        value: function translateArray(value) {
          var _this39 = this;

          return new Promise(function (resolve) {
            var tempArray = [];
            value.forEach(function (element) {
              if (_this39.translationListArray[element] != undefined) tempArray[element] = _this39.translationListArray[element];else tempArray[element] = element;
            });
            resolve(tempArray);
          });
        } //=================================================

      }, {
        key: "showAlert",
        value: function showAlert(text) {
          var _this40 = this;

          this.translateArray([text, "ok", "Alert"]).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this40, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var alert;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      console.log(res);
                      _context20.next = 3;
                      return this.alertCtrl.create({
                        header: res["Alert"],
                        message: res[text],
                        buttons: [res["ok"]],
                        cssClass: 'alertHeader'
                      });

                    case 3:
                      alert = _context20.sent;
                      _context20.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          });
        }
      }, {
        key: "showAlertWithTitle",
        value: function showAlertWithTitle(text, title) {
          var _this41 = this;

          this.translateArray([text, "ok", title]).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this41, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var alert;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.alertCtrl.create({
                        header: res[title],
                        message: res[text],
                        buttons: [res["ok"]],
                        cssClass: 'alertHeader'
                      });

                    case 2:
                      alert = _context21.sent;
                      _context21.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          });
        } //==================================== functions to invert the hexcolor =============================

      }, {
        key: "invertColor",
        value: function invertColor(hex) {
          if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
          } // convert 3-digit hex to 6-digits.


          if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }

          if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
          } // invert color components


          var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
              g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
              b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16); // pad each with zeros and return

          return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
        }
      }, {
        key: "padZero",
        value: function padZero(str) {
          var len = 2;
          var zeros = new Array(len).join('0');
          return (zeros + str).slice(-len);
        }
      }, {
        key: "getBrowserHeaderColorFromAppHeader",
        value: function getBrowserHeaderColorFromAppHeader() {
          var toolbar = document.getElementsByTagName("ion-toolbar");
          var style = getComputedStyle(toolbar[0]);
          var color = style.getPropertyValue("--ion-color-primary") || undefined;
          this.headerHexColorContrast = style.getPropertyValue("--ion-color-primary-contrast") || undefined;
          this.headerHexColor = color.toString();
          if (this.headerHexColorContrast == undefined) this.headerHexColorContrast = this.invertColor(this.headerHexColor).toString();
          this.headerHexColorContrast = this.headerHexColorContrast.trim();
          this.headerHexColor = this.headerHexColor.trim();
          console.log("browser Header Colors", this.headerHexColor, this.headerHexColorContrast);
        }
      }]);

      return SharedDataService;
    }();

    SharedDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__["AppEventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"]
      }];
    };

    SharedDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_10__["AppEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"]])], SharedDataService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Alessandro\Desktop\ritmoapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map