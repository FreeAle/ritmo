function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home7-home7-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome7Home7PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n  <app-banner></app-banner>\n<div class=\"card\">\n  <ion-card (click)=\"showModal('refundPolicy')\">\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/tiago.jpg\" />\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center; font-size: small;\">Tiago</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card (click)=\"showModal('privacyPolicy')\">\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/andre.jpg\" />\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center; font-size: small;\">Andrè</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n<div class=\"card\">\n  <ion-card (click)=\"showModal('termServices')\">\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/rdb.jpg\" />\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center; font-size: small;\">Ritmo Do Brazil</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card (click)=\"showModal2('blankModal')\">\n    <img src=\"https://ritmodobrazil.com/newsite/wp-content/uploads/2020/02/rdb.jpg\" />\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center; font-size: small;\">Jump</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n  <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n    <ion-icon name=\"arrow-up\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./src/app/home-pages/home7/home7.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home7/home7.module.ts ***!
    \**************************************************/

  /*! exports provided: Home7PageModule */

  /***/
  function srcAppHomePagesHome7Home7ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home7PageModule", function () {
      return Home7PageModule;
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


    var _home7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home7.page */
    "./src/app/home-pages/home7/home7.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");
    /* harmony import */


    var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/components/share/share.module */
    "./src/components/share/share.module.ts");

    var routes = [{
      path: '',
      component: _home7_page__WEBPACK_IMPORTED_MODULE_6__["Home7Page"]
    }];

    var Home7PageModule = function Home7PageModule() {
      _classCallCheck(this, Home7PageModule);
    };

    Home7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home7_page__WEBPACK_IMPORTED_MODULE_6__["Home7Page"]]
    })], Home7PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home7/home7.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home7/home7.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome7Home7PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-segment ion-segment-button {\n  font-size: 0.75rem;\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content ion-fab {\n  position: fixed;\n}\nion-content ion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\nion-grid ion-row {\n  margin-right: 10px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlcy9ob21lNy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxob21lLXBhZ2VzXFxob21lN1xcaG9tZTcucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU3L2hvbWU3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBRElJO0VBQ0Usa0JBQUE7QUNGTjtBRE9NO0VBQ0UsWUFBQTtBQ0xSO0FEU0U7RUFDRSxXQUFBO0FDUEo7QURVRTtFQUNFLGVBQUE7QUNSSjtBRFNJO0VBQ0Usc0NBQUE7QUNQTjtBRGFFO0VBQ0Usa0JBQUE7QUNWSjtBRGFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU3L2hvbWU3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAvLyBpZiBkYXRhIGxvYWRcbiAgaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGlvbi1mYWIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWdyaWQge1xuICBpb24tcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5jYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSIsImlvbi1jb250ZW50IC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGU6bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IGFwcC1wcm9kdWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-pages/home7/home7.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home7/home7.page.ts ***!
    \************************************************/

  /*! exports provided: Home7Page */

  /***/
  function srcAppHomePagesHome7Home7PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home7Page", function () {
      return Home7Page;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modals/privacy-policy/privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modals/term-services/term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modals/refund-policy/refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var src_app_modals_blank_modal_blank_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modals/blank-modal/blank-modal.page */
    "./src/app/modals/blank-modal/blank-modal.page.ts");

    var Home7Page = /*#__PURE__*/function () {
      function Home7Page(nav, config, shared, modalCtrl) {
        _classCallCheck(this, Home7Page);

        this.nav = nav;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.segments = "topSeller"; //first segment by default 

        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner

        this.sliderConfig = {
          slidesPerView: this.config.productSlidesPerPage,
          spaceBetween: 0
        };
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.page = 1;
      }

      _createClass(Home7Page, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
        } // For FAB Scroll

      }, {
        key: "onScroll",
        value: function onScroll(e) {
          if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
          }

          if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
          }
        } // For Scroll To Top Content

      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.content.scrollToTop(700);
          this.scrollTopButton = false;
        }
      }, {
        key: "openProducts",
        value: function openProducts(value) {
          this.nav.navigateForward(this.config.currentRoute + "/products/0/0/" + value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showModal",
        value: function showModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal, _modal, _modal2;

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
                      component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]
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
                      component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]
                    });

                  case 12:
                    _modal = _context.sent;
                    _context.next = 15;
                    return _modal.present();

                  case 15:
                    return _context.abrupt("return", _context.sent);

                  case 18:
                    _context.next = 20;
                    return this.modalCtrl.create({
                      component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_7__["RefundPolicyPage"]
                    });

                  case 20:
                    _modal2 = _context.sent;
                    _context.next = 23;
                    return _modal2.present();

                  case 23:
                    return _context.abrupt("return", _context.sent);

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showModal2",
        value: function showModal2(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(value == 'blankModal')) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: src_app_modals_blank_modal_blank_modal_page__WEBPACK_IMPORTED_MODULE_8__["BlankModalPage"]
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.config.setCardStyle("15");
        }
      }]);

      return Home7Page;
    }();

    Home7Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], Home7Page.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recentSlider', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], Home7Page.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], Home7Page.prototype, "infinite", void 0);
    Home7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home7',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home7.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home7.page.scss */
      "./src/app/home-pages/home7/home7.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], Home7Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home7-home7-module-es5.js.map