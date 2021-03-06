function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home10-home10-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home10/home10.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home10/home10.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome10Home10PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"apps\"></ion-icon>\n      {{'Categories' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openCategoryPage()\">\n      <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n  <!-- categories component -->\n  <app-categories [type]=\"'withName'\"></app-categories>\n\n  <!-- For Banner -->\n  <app-banner></app-banner>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n      {{'Newest Products'|translate}}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n      <ion-icon slot=\"end\" name=\"caret-forward\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <!-- Newest Products swipe slider -->\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab1\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- For Segments Products -->\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"sale\">{{ 'On Sale' | translate }} </ion-segment-button>\n    <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"segments\">\n    <ion-grid class=\"ion-no-padding\" *ngSwitchCase=\"'sale'\">\n      <ion-row class=\"row-segment ion-no-padding\">\n        <ion-col *ngFor=\"let p of shared.tab2\" size=\"6\" class=\"ion-no-padding\">\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <ion-button fill=\"clear\" color=\"secondary\" (click)=\"openProducts('sale')\">\n            {{ 'Shop More' | translate}}\n            <ion-icon name=\"caret-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\" *ngSwitchCase=\"'mostLiked'\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col *ngFor=\"let p of shared.tab3\" size=\"6\" class=\"ion-no-padding\">\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <ion-button fill=\"clear\" color=\"secondary\" (click)=\"openProducts('featured')\">{{ 'Shop More' | translate}}\n            <ion-icon name=\"caret-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home-pages/home10/home10.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/home-pages/home10/home10.module.ts ***!
    \****************************************************/

  /*! exports provided: Home10PageModule */

  /***/
  function srcAppHomePagesHome10Home10ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home10PageModule", function () {
      return Home10PageModule;
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


    var _home10_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home10.page */
    "./src/app/home-pages/home10/home10.page.ts");
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
      component: _home10_page__WEBPACK_IMPORTED_MODULE_6__["Home10Page"]
    }];

    var Home10PageModule = function Home10PageModule() {
      _classCallCheck(this, Home10PageModule);
    };

    Home10PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home10_page__WEBPACK_IMPORTED_MODULE_6__["Home10Page"]]
    })], Home10PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home10/home10.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/home-pages/home10/home10.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome10Home10PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-segment ion-segment-button {\n  font-size: 11.3px;\n  --color: var(--ion-color-primary);\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content .row-segment {\n  margin-right: 10px;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlcy9ob21lMTAvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcaG9tZS1wYWdlc1xcaG9tZTEwXFxob21lMTAucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWUxMC9ob21lMTAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKO0FES0k7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0FDSE47QURRTTtFQUNFLFlBQUE7QUNOUjtBRFVFO0VBQ0UsV0FBQTtBQ1JKO0FEVUU7RUFDRSxrQkFBQTtBQ1JKO0FEV0k7RUFDRSxrQkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlcy9ob21lMTAvaG9tZTEwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAvLyBpZiBkYXRhIGxvYWRcbiAgaW9uLXNlZ21lbnQge1xuXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTEuM3B4O1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBpb24tc2xpZGUge1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcHAtcHJvZHVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJvdy1zZWdtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDExLjNweDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGU6bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IGFwcC1wcm9kdWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAucm93LXNlZ21lbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-pages/home10/home10.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home10/home10.page.ts ***!
    \**************************************************/

  /*! exports provided: Home10Page */

  /***/
  function srcAppHomePagesHome10Home10PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home10Page", function () {
      return Home10Page;
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


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var Home10Page = /*#__PURE__*/function () {
      function Home10Page(nav, config, appEventsService, shared) {
        _classCallCheck(this, Home10Page);

        this.nav = nav;
        this.config = config;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.segments = "sale"; //first segment by default 
        //for product slider after banner

        this.sliderConfig = {
          slidesPerView: this.config.productSlidesPerPage,
          spaceBetween: 0
        };
      }

      _createClass(Home10Page, [{
        key: "openCategoryPage",
        value: function openCategoryPage() {
          this.appEventsService.publish("openCategoryPage", "");
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
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.config.setCardStyle("22");
        }
      }]);

      return Home10Page;
    }();

    Home10Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }];
    };

    Home10Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home10',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home10.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home10/home10.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home10.page.scss */
      "./src/app/home-pages/home10/home10.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])], Home10Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home10-home10-module-es5.js.map