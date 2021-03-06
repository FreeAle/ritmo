function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["downloads-downloads-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/downloads/downloads.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/downloads/downloads.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDownloadsDownloadsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Download'| translate }} </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"downloads.length==0 && !httpLoading\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <h3 class=\"ion-text-center\">\n          <ion-icon name=\"download\"></ion-icon>\n        </h3>\n        <h4 class=\"ion-text-center\">{{'Your Download List is Empty'|translate}}</h4>\n        <h5 class=\"ion-text-center\">{{'continue shopping'|translate}}</h5>\n        <p class=\"ion-text-center\">\n          <ion-button (click)=\"openShop()\" >\n            {{'Explore'|translate}}\n          </ion-button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor=\"let down of downloads\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Product'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{down.product_name}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Downloads remaining'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.downloads_remaining!='unlimited'\">\n          {{down.downloads_remaining}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.downloads_remaining=='unlimited'\">\n          &infin;\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Expires'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.access_expires == 'never'\">\n          {{down.access_expires|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.access_expires != 'never'\">\n          {{down.access_expires|date}}\n        </ion-col>\n      </ion-row>\n      <ion-button expand=\"full\" color=\"secondary\" (click)=\"downloadFile(down)\">\n        {{down.download_name}}\n        <ion-icon name=\"download\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getDownloads()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/downloads/downloads.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/downloads/downloads.module.ts ***!
    \***********************************************/

  /*! exports provided: DownloadsPageModule */

  /***/
  function srcAppDownloadsDownloadsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function () {
      return DownloadsPageModule;
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


    var _downloads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./downloads.page */
    "./src/app/downloads/downloads.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]
    }];

    var DownloadsPageModule = function DownloadsPageModule() {
      _classCallCheck(this, DownloadsPageModule);
    };

    DownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]]
    })], DownloadsPageModule);
    /***/
  },

  /***/
  "./src/app/downloads/downloads.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/downloads/downloads.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDownloadsDownloadsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-grid {\n  margin-top: 50%;\n}\nion-content ion-grid ion-row ion-col {\n  text-align: center;\n}\nion-content ion-grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n  margin-bottom: 6px;\n}\nion-content ion-grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-card ion-card-content {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWRzL0M6XFxVc2Vyc1xcQWxlc3NhbmRyb1xcRGVza3RvcFxccml0bW9hcHAvc3JjXFxhcHBcXGRvd25sb2Fkc1xcZG93bmxvYWRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZG93bmxvYWRzL2Rvd25sb2Fkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURFTTtFQUNFLGtCQUFBO0FDQVI7QURDUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NWO0FEQ1E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDVjtBREtJO0VBQ0UsYUFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvZG93bmxvYWRzL2Rvd25sb2Fkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1ncmlkIHtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCBpb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/downloads/downloads.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/downloads/downloads.page.ts ***!
    \*********************************************/

  /*! exports provided: DownloadsPage */

  /***/
  function srcAppDownloadsDownloadsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadsPage", function () {
      return DownloadsPage;
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


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var DownloadsPage = /*#__PURE__*/function () {
      function DownloadsPage(navCtrl, loading, shared, config, appEventsService, applicationRef, iab) {
        _classCallCheck(this, DownloadsPage);

        this.navCtrl = navCtrl;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.appEventsService = appEventsService;
        this.applicationRef = applicationRef;
        this.iab = iab;
        this.downloads = [];
        this.httpLoading = true;
        this.getDownloads();
      }

      _createClass(DownloadsPage, [{
        key: "getDownloads",
        value: function getDownloads() {
          var _this = this;

          this.httpLoading = true;
          this.loading.show();
          this.config.getWoo("customers/" + this.shared.customerData.id + "/downloads" + "?" + this.config.productsArguments).then(function (data) {
            _this.httpLoading = false;

            _this.loading.hide();

            var dat = data;
            _this.downloads = dat;
            console.log(dat);

            _this.applicationRef.tick();
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(value) {
          this.iab.create(value.download_url, '_system');
          this.loading.autoHide(1000);
          this.appEventsService.publish("openHomePage", "");
        }
      }, {
        key: "openShop",
        value: function openShop() {
          this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          this.getDownloads();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DownloadsPage;
    }();

    DownloadsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__["AppEventsService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }];
    };

    DownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-downloads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./downloads.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/downloads/downloads.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./downloads.page.scss */
      "./src/app/downloads/downloads.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__["AppEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])], DownloadsPage);
    /***/
  }
}]);
//# sourceMappingURL=downloads-downloads-module-es5.js.map