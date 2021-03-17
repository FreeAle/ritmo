function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home/home.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home/home.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img class=\"pappa\" src=\"assets/logo_header.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" class=\"home-page-1\">\n  <app-banner></app-banner>\n  <ion-segment [(ngModel)]=\"segments\">\n    <!--<ion-segment-button value=\"topSeller\">{{ 'Newest' | translate }}</ion-segment-button>-->\n    <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n    <ion-segment-button value=\"deals\">{{ 'On Sale' | translate }} </ion-segment-button>\n    \n  </ion-segment>\n  <div [ngSwitch]=\"segments\">\n\n    <!-- first swipe slider -->\n    \n    <ion-slides *ngSwitchCase=\"'topSeller'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab1\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 2nd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'deals'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab2\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 3rd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'mostLiked'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab3\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"caret-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n\n  <!-- recently view Heading -->\n  <ion-row *ngIf=\"shared.recentViewedProducts.length!=0\" class=\"top-icon-header\" style=\"text-decoration: dimgrey,none; \">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"list\"></ion-icon>\n      {{'Recently Viewed'|translate}}\n    </ion-button>\n  </ion-row>\n\n  <!-- recently viewed swipe slider -->\n  <ion-slides #recentSlider [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.recentViewedProducts\">\n      <app-product [data]=\"p\" [type]=\"'recent'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <!-- for scrollable segment and all products -->\n  <app-sliding-tabs [type]=\"'text'\"></app-sliding-tabs>\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n  <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n    <ion-icon name=\"arrow-up\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./src/app/home-pages/home/home.module.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home/home.module.ts ***!
    \************************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomePagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home-pages/home/home.page.ts");
    /* harmony import */


    var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/components/share/share.module */
    "./src/components/share/share.module.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }];

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home/home.page.scss":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home/home.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home-page-1 .swiper-slide {\n  width: 40%;\n}\n.home-page-1 ion-segment ion-segment-button {\n  font-size: 0.75rem;\n}\n.home-page-1 ion-slides ion-slide:last-child {\n  height: auto;\n}\n.home-page-1 app-product {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlcy9ob21lL0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXGhvbWUtcGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7QURJSTtFQUNFLGtCQUFBO0FDRk47QURPTTtFQUNFLFlBQUE7QUNMUjtBRFNFO0VBQ0UsV0FBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcGFnZS0xIHtcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAvLyBpZiBkYXRhIGxvYWRcbiAgaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIGlvbi1mYWIge1xuICAvLyAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgLy8gICBpb24tZmFiLWJ1dHRvbiB7XG4gIC8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLy8gICB9XG4gIC8vIH1cblxufVxuIiwiLmhvbWUtcGFnZS0xIC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuLmhvbWUtcGFnZS0xIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5ob21lLXBhZ2UtMSBpb24tc2xpZGVzIGlvbi1zbGlkZTpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmhvbWUtcGFnZS0xIGFwcC1wcm9kdWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-pages/home/home.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/home-pages/home/home.page.ts ***!
    \**********************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomePagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(nav, config, router, shared, platform) {
        _classCallCheck(this, HomePage);

        this.nav = nav;
        this.config = config;
        this.router = router;
        this.shared = shared;
        this.platform = platform;
        this.segments = "mostLiked"; //first segment by default 

        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner

        this.sliderConfig = {
          slidesPerView: this.config.productSlidesPerPage,
          spaceBetween: 0
        };
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
          this.initializeBackButtonCustomHandler();
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999, function () {
            if (window.confirm('Chiudere l\'applicazione?')) {
              navigator['app'].exitApp();
            }
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.unsubscribeBackEvent.unsubscribe();
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
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {//this.content.resize();
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], HomePage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recentSlider', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], HomePage.prototype, "slider", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home-pages/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home-home-module-es5.js.map