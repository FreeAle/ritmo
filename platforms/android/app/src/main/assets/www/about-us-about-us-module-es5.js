function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutUsAboutUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"About Us\"|translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text class=\"ion-no-padding\">\n    <p [innerHTML]=\"config.aboutUs\">\n    </p>\n  </ion-text>\n  <ion-list>\n    <ion-item (click)=\"openSite()\" lines=\"full\">\n      {{\"Official Website\"|translate}}\n      <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('privacyPolicy')\" lines=\"full\">\n      {{'ANDRE CRUZ'|translate}}\n      <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('refundPolicy')\" lines=\"full\">\n      {{'TIAGO DA SILVA'|translate}}\n      <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('termServices')\" lines=\"full\">\n      {{'RITMO DO BRAZIL'|translate}}\n      <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('blankModal')\" lines=\"none\">\n      {{'JUMP'|translate}}\n      <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/about-us/about-us.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutUsPageModule */

  /***/
  function srcAppAboutUsAboutUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function () {
      return AboutUsPageModule;
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


    var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about-us.page */
    "./src/app/about-us/about-us.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts"); // For Translation Language


    var routes = [{
      path: '',
      component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }];

    var AboutUsPageModule = function AboutUsPageModule() {
      _classCallCheck(this, AboutUsPageModule);
    };

    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })], AboutUsPageModule);
    /***/
  },

  /***/
  "./src/app/about-us/about-us.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/about-us/about-us.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutUsAboutUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-text p {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-content ion-list {\n  margin-left: 10px;\n  margin-right: 10px;\n}\nion-content ion-list ion-item ion-icon {\n  color: black;\n  zoom: 1.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcYWJvdXQtdXNcXGFib3V0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FETUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURNWTtFQUNJLFlBQUE7RUFDQSxTQUFBO0FDSmhCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgem9vbTogMS4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgaW9uLXRleHQgcCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6b29tOiAxLjE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/about-us/about-us.page.ts ***!
    \*******************************************/

  /*! exports provided: AboutUsPage */

  /***/
  function srcAppAboutUsAboutUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPage", function () {
      return AboutUsPage;
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


    var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modals/privacy-policy/privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modals/term-services/term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../modals/refund-policy/refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var _modals_blank_modal_blank_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../modals/blank-modal/blank-modal.page */
    "./src/app/modals/blank-modal/blank-modal.page.ts");

    var AboutUsPage = /*#__PURE__*/function () {
      function AboutUsPage(shared, config, modalCtrl, loading, iab) {
        _classCallCheck(this, AboutUsPage);

        this.shared = shared;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.iab = iab;
      }

      _createClass(AboutUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showModal",
        value: function showModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal, _modal, _modal2, _modal3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(value == 'privacyPolicy')) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyPage"]
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 9:
                    if (!(value == 'termServices')) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 12;
                    return this.modalCtrl.create({
                      component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_8__["TermServicesPage"]
                    });

                  case 12:
                    _modal = _context.sent;
                    _context.next = 15;
                    return _modal.present();

                  case 15:
                    return _context.abrupt("return", _context.sent);

                  case 18:
                    if (!(value == 'blankModal')) {
                      _context.next = 27;
                      break;
                    }

                    _context.next = 21;
                    return this.modalCtrl.create({
                      component: _modals_blank_modal_blank_modal_page__WEBPACK_IMPORTED_MODULE_10__["BlankModalPage"]
                    });

                  case 21:
                    _modal2 = _context.sent;
                    _context.next = 24;
                    return _modal2.present();

                  case 24:
                    return _context.abrupt("return", _context.sent);

                  case 27:
                    _context.next = 29;
                    return this.modalCtrl.create({
                      component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_9__["RefundPolicyPage"]
                    });

                  case 29:
                    _modal3 = _context.sent;
                    _context.next = 32;
                    return _modal3.present();

                  case 32:
                    return _context.abrupt("return", _context.sent);

                  case 33:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openSite",
        value: function openSite() {
          this.loading.autoHide(2000);
          this.iab.create(this.config.site, "blank");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.config.admob == 1) this.shared.showAd();
        }
      }]);

      return AboutUsPage;
    }();

    AboutUsPage.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }];
    };

    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.page.scss */
      "./src/app/about-us/about-us.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])], AboutUsPage);
    /***/
  }
}]);
//# sourceMappingURL=about-us-about-us-module-es5.js.map