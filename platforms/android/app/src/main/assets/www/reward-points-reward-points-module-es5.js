function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reward-points-reward-points-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRewardPointsRewardPointsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Reward Point'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid\" class=\"ion-no-padding\" *ngIf=\"rewards.length==0 && !httpLoading\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"happy\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Rewards List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openShop()\">{{'Explore'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-card *ngFor=\"let r of rewards\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Action'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" col-6>\n            {{r.type}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Points'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{r.points}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Date'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{r.date}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <h5> {{'Total Points Earned'|translate}} &nbsp;&nbsp;:</h5>\n    </ion-col>\n    <ion-col class=\"ion-text-right\">\n      <h5>{{totalPoints()}}</h5>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/reward-points/reward-points.module.ts ***!
    \*******************************************************/

  /*! exports provided: RewardPointsPageModule */

  /***/
  function srcAppRewardPointsRewardPointsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardPointsPageModule", function () {
      return RewardPointsPageModule;
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


    var _reward_points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reward-points.page */
    "./src/app/reward-points/reward-points.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _reward_points_page__WEBPACK_IMPORTED_MODULE_6__["RewardPointsPage"]
    }];

    var RewardPointsPageModule = function RewardPointsPageModule() {
      _classCallCheck(this, RewardPointsPageModule);
    };

    RewardPointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_reward_points_page__WEBPACK_IMPORTED_MODULE_6__["RewardPointsPage"]]
    })], RewardPointsPageModule);
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/reward-points/reward-points.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRewardPointsRewardPointsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .grid {\n  margin-top: 50%;\n}\nion-content .grid ion-row ion-col {\n  text-align: center;\n}\nion-content .grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content .grid ion-row ion-col ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 0px;\n  height: 30px;\n}\nion-content .grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n}\nion-content .grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-grid ion-card {\n  color: black;\n}\nion-footer {\n  background-color: #557f5f;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV3YXJkLXBvaW50cy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxyZXdhcmQtcG9pbnRzXFxyZXdhcmQtcG9pbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmV3YXJkLXBvaW50cy9yZXdhcmQtcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGVBQUE7QUNEUjtBREdZO0VBQ0ksa0JBQUE7QUNEaEI7QURFZ0I7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNBcEI7QURFZ0I7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0FwQjtBREVnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBcEI7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBcEI7QURNUTtFQUNJLFlBQUE7QUNKWjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcmV3YXJkLXBvaW50cy9yZXdhcmQtcG9pbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgLmdyaWR7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICB6b29tOjMuOTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6bGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTU3ZjVmIDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59IiwiaW9uLWNvbnRlbnQgLmdyaWQge1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5pb24tY29udGVudCAuZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICB6b29tOiAzLjk7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG5pb24tY29udGVudCAuZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1jYXJkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1N2Y1ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/reward-points/reward-points.page.ts ***!
    \*****************************************************/

  /*! exports provided: RewardPointsPage */

  /***/
  function srcAppRewardPointsRewardPointsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardPointsPage", function () {
      return RewardPointsPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var RewardPointsPage = /*#__PURE__*/function () {
      function RewardPointsPage(navCtrl, http, loading, shared, config) {
        _classCallCheck(this, RewardPointsPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.rewards = [];
        this.httpLoading = true;
        this.getRewards();
      }

      _createClass(RewardPointsPage, [{
        key: "getRewards",
        value: function getRewards() {
          var _this = this;

          this.httpLoading = true;
          this.loading.show();
          this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe(function (data) {
            _this.httpLoading = false;

            _this.loading.hide();

            var dat = data.data;
            _this.rewards = dat;
            console.log(dat);
          });
        }
      }, {
        key: "openShop",
        value: function openShop() {
          this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('ionViewDidLoad RewardPointsPage');
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          this.getRewards();
        }
      }, {
        key: "totalPoints",
        value: function totalPoints() {
          var t = 0;

          var _iterator = _createForOfIteratorHelper(this.rewards),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;
              t = t + parseInt(v.points);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return t;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RewardPointsPage;
    }();

    RewardPointsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
      }];
    };

    RewardPointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reward-points',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reward-points.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reward-points.page.scss */
      "./src/app/reward-points/reward-points.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])], RewardPointsPage);
    /***/
  }
}]);
//# sourceMappingURL=reward-points-reward-points-module-es5.js.map