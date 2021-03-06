function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      {{'Settings'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" ((click)=\"share()\" *ngIf=\"showOption('sharePage')\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"rateUs()\" *ngIf=\"showOption('ratePage')\">\n        <ion-icon slot=\"icon-only\" name=\"star-half\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\" *ngIf=\"!config.appNavigationTabs\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"setting-page\">\n  <ion-grid class=\"ion-padding\">\n\n    <ion-row *ngIf=\"shared.customerData.id==null\" (click)=\"openLoginPage()\">\n      <ion-avatar>\n        <img src=\"assets/avatar.png\">\n      </ion-avatar>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h2>{{ 'Login & Register' | translate }}</h2>\n        <p>{{ 'Please login or create an account for free' | translate }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"shared.customerData.id!=null\">\n      <ion-avatar>\n        <ion-fab-button id=\"nametxt\">{{getNameFirstLetter()}}</ion-fab-button>\n      </ion-avatar>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h2>{{shared.customerData.first_name +\"&nbsp;\"+shared.customerData.last_name}}</h2>\n        <p>{{shared.customerData.email}}</p>\n        <ion-button (click)=\"openAccountPage()\">{{'Edit Profile' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n    <span class=\"opacity-background\"></span>\n  </ion-grid>\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"full\" (click)=\"openPage('my-account')\" *ngIf=\"showOption('editPage')\">\n      <ion-label>\n        <p>{{\"Edit Profile\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"lock-closed\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('contact-us')\" *ngIf=\"showOption('contactPage')\">\n      <ion-label>\n        <p>{{\"Contact Us\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPage('about-us')\" *ngIf=\"showOption('aboutUsPage')\">\n      <ion-label>\n        <p>{{\"About Us\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"information-circle\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"presentAlert()\" class=\"prova\">\n      <ion-label >\n        <p>Versione & Crediti</p>\n      </ion-label>\n      <ion-icon icon=build slot=\"end\"></ion-icon>\n    </ion-item>  \n  </ion-list>\n  <ion-footer class=\"ion-no-border\">\n    <ion-row class=\"ion-no-border\">\n        <ion-col size=\"2\" class=\"ion-text-start\" (click)=\"openFace()\">\n            <img src=\"assets/ic_fb.png\" >\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-start\" (click)=\"openYou()\">\n          <img src=\"assets/ic_yt.png\">\n      </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-start\" (click)=\"openInsta()\">\n            <img src=\"assets/ic_insta.png\" >\n        </ion-col>\n    </ion-row>\n</ion-footer>\n  <ion-item lines=\"none\" *ngIf=\"shared.customerData.id!=null\">\n    <ion-button color=\"secondary\" (click)=\"logOut()\">{{'Log Out' | translate }}</ion-button>\n  </ion-item>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/settings/settings.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.module.ts ***!
    \*********************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/settings/settings.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }];

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/settings/settings.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".setting-page ion-grid {\n  position: relative;\n  background-image: url(\"/assets/icons_stripe.svg\");\n  background-color: var(--ion-color-primary);\n  background-position: center;\n  color: var(--ion-color-light);\n  z-index: 10;\n}\n.setting-page ion-grid .opacity-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--ion-color-primary-shade);\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.setting-page ion-grid ion-row {\n  text-align: center;\n}\n.setting-page ion-grid ion-row ion-avatar {\n  margin: auto;\n}\n.setting-page ion-grid ion-row h2 {\n  color: var(--ion-color-primary-contrast);\n  margin-top: 10px;\n  font-weight: bold;\n}\n.setting-page ion-grid ion-row p {\n  color: var(--ion-color-primary-contrast);\n  margin-top: 10px;\n  margin-bottom: 8px;\n}\n.setting-page ion-grid ion-row ion-button {\n  height: 30px;\n  --background: var(--ion-color-light);\n  color: var(--ion-color-primary-shade);\n}\n.setting-page ion-list {\n  padding-bottom: 0;\n}\n.setting-page ion-list ion-item {\n  padding-bottom: 0;\n}\n.setting-page ion-list ion-item ion-toggle {\n  padding-right: 0;\n  --background-checked: var(--ion-color-primary-tint);\n  --handle-background-checked: var(--ion-color-primary);\n}\n.setting-page ion-list ion-item ion-icon {\n  color: var(--ion-text-color);\n}\n.setting-page ion-list ion-item p {\n  font-size: 16px;\n  color: var(--ion-text-color);\n}\n.setting-page ion-list:last-child {\n  padding-top: 0;\n}\n.setting-page ion-item ion-button {\n  width: 100%;\n  margin: 0;\n  height: 30px;\n}\n.ion-no-border {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#nametxt {\n  width: 100%;\n  height: 100%;\n  font-size: 25px;\n  text-transform: capitalize;\n}\n.avatar-icon {\n  font-size: 64px !important;\n  color: var(--ion-color-light-shade);\n}\n.row-img {\n  opacity: 0.1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBYUUsa0JBQUE7RUFDQSxpREFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNaSjtBRExJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ09OO0FER0k7RUFDRSxrQkFBQTtBQ0ROO0FERU07RUFDRSxZQUFBO0FDQVI7QURFTTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERU07RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUNBUjtBRElFO0VBQ0UsaUJBQUE7QUNGSjtBREdJO0VBQ0UsaUJBQUE7QUNETjtBREVNO0VBQ0UsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLHFEQUFBO0FDQVI7QURFTTtFQUNFLDRCQUFBO0FDQVI7QURFTTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQ0FSO0FER0k7RUFDRSxjQUFBO0FDRE47QURLSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0hOO0FEUUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0pGO0FETUE7RUFDRSwwQkFBQTtFQUNBLG1DQUFBO0FDSEY7QURLQTtFQUNFLHVCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZy1wYWdlIHtcbiAgaW9uLWdyaWQge1xuICAgIC5vcGFjaXR5LWJhY2tncm91bmQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIFxuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbnNfc3RyaXBlLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGlvbi1yb3cge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbi5pb24tbm8tYm9yZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNuYW1ldHh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5hdmF0YXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5yb3ctaW1nIHtcbiAgb3BhY2l0eTogMC4xICFpbXBvcnRhbnQ7XG59XG4iLCIuc2V0dGluZy1wYWdlIGlvbi1ncmlkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zX3N0cmlwZS5zdmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgei1pbmRleDogMTA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1ncmlkIC5vcGFjaXR5LWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCBpb24tcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCBpb24tcm93IGlvbi1hdmF0YXIge1xuICBtYXJnaW46IGF1dG87XG59XG4uc2V0dGluZy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgaDIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCBpb24tcm93IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRvZ2dsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWxpc3Q6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnNldHRpbmctcGFnZSBpb24taXRlbSBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW9uLW5vLWJvcmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbmFtZXR4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hdmF0YXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLnJvdy1pbWcge1xuICBvcGFjaXR5OiAwLjEgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/settings.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/settings/settings.page.ts ***!
    \*******************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../modals/login/login.page */
    "./src/app/modals/login/login.page.ts");
    /* harmony import */


    var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../modals/privacy-policy/privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../modals/term-services/term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../modals/refund-policy/refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var _modals_language_language_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../modals/language/language.page */
    "./src/app/modals/language/language.page.ts");
    /* harmony import */


    var _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../modals/currency-list/currency-list.page */
    "./src/app/modals/currency-list/currency-list.page.ts");
    /* harmony import */


    var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/providers/app-events/app-events.service */
    "./src/providers/app-events/app-events.service.ts");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(navCtrl, modalCtrl, config, storage, loading, http, appEventsService, shared, iab, socialSharing, plt, appVersion, oneSignal, alertController) {
        _classCallCheck(this, SettingsPage);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.oneSignal = oneSignal;
        this.alertController = alertController;
        this.setting = {};
      }

      _createClass(SettingsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "updateSetting",
        value: function updateSetting() {
          console.log(this.setting);
          this.storage.set('setting', this.setting);
        }
      }, {
        key: "openLoginPage",
        value: function openLoginPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"],
                      componentProps: {
                        'hideGuestLogin': true
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.shared.logOut();
          this.openLoginPage();
        }
      }, {
        key: "openAccountPage",
        value: function openAccountPage() {
          this.navCtrl.navigateForward("tabs/settings/my-account");
        }
      }, {
        key: "openSite",
        value: function openSite() {
          this.loading.autoHide(2000);
          this.iab.create(this.config.site, "blank");
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Versione App: 1.1',
                      subHeader: '',
                      message: 'Sviluppatore: <br/> Alessandro Montebello <br/>',
                      buttons: ['OK'],
                      cssClass: 'secondary'
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    _context2.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context2.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //============================================================================================
        //turning on off local  notification

      }, {
        key: "onOffPushNotification",
        value: function onOffPushNotification(value) {
          if (value == false) {
            this.oneSignal.setSubscription(false);
          } else {
            this.oneSignal.setSubscription(true);
          }

          this.updateSetting();
        }
      }, {
        key: "hideShowFooterMenu",
        value: function hideShowFooterMenu() {
          this.appEventsService.publish('setting', this.setting);
          this.updateSetting();
        }
      }, {
        key: "hideShowCartButton",
        value: function hideShowCartButton() {
          this.appEventsService.publish('setting', this.setting);
          this.updateSetting();
        }
      }, {
        key: "showModal",
        value: function showModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal, _modal, _modal2;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(value == 'privacyPolicy')) {
                      _context3.next = 9;
                      break;
                    }

                    _context3.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyPage"]
                    });

                  case 3:
                    modal = _context3.sent;
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 9:
                    if (!(value == 'termServices')) {
                      _context3.next = 18;
                      break;
                    }

                    _context3.next = 12;
                    return this.modalCtrl.create({
                      component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_14__["TermServicesPage"]
                    });

                  case 12:
                    _modal = _context3.sent;
                    _context3.next = 15;
                    return _modal.present();

                  case 15:
                    return _context3.abrupt("return", _context3.sent);

                  case 18:
                    _context3.next = 20;
                    return this.modalCtrl.create({
                      component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_15__["RefundPolicyPage"]
                    });

                  case 20:
                    _modal2 = _context3.sent;
                    _context3.next = 23;
                    return _modal2.present();

                  case 23:
                    return _context3.abrupt("return", _context3.sent);

                  case 24:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openLanguagePage",
        value: function openLanguagePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_language_language_page__WEBPACK_IMPORTED_MODULE_16__["LanguagePage"]
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openCurrencyPage",
        value: function openCurrencyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_17__["CurrencyListPage"]
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
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          var _this = this;

          this.storage.get('setting').then(function (val) {
            if (val != null || val != undefined) {
              _this.setting = val;
            } else {
              _this.setting.localNotification = true;
              _this.setting.notification = true;
              _this.setting.cartButton = true;
              _this.setting.footer = true;
            }
          });
        }
      }, {
        key: "rateUs",
        value: function rateUs() {
          var _this2 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this2.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
          }
        }
      }, {
        key: "share",
        value: function share() {
          var _this3 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString());
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this3.socialSharing.share(_this3.config.appName, _this3.config.appName, "", "https://play.google.com/store/apps/details?id=" + val);
            });
          }
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
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showOption",
        value: function showOption(value) {
          if (this.config.wishListPage && value == "wishListPage" && this.shared.customerData.id != null) {
            return true;
          } else if (this.config.editProfilePage && value == "editPage" && this.shared.customerData.id != null) {
            return true;
          } else if (value == "address" && this.shared.customerData.id != null) {
            return true;
          } else if (this.config.myOrdersPage && value == "myOrdersPage" && this.shared.customerData.id != null) {
            return true;
          } else if (this.config.contactUsPage && value == "contactPage") {
            return true;
          } else if (this.config.aboutUsPage && value == "aboutUsPage") {
            return true;
          } else if (this.config.newsPage && value == "newsPage") {
            return true;
          } else if (this.config.introPage && value == "introPage") {
            return true;
          } else if (this.config.shareApp && value == "sharePage") {
            return true;
          } else if (this.config.rateApp && value == "ratePage") {
            return true;
          } else if (this.config.settingPage && value == "settingsPage") {
            return true;
          } else if (this.config.enableWpPointReward && value == "rewardPointsPage" && this.shared.customerData.id != null) {
            return true;
          } else if (this.config.downloadPage && value == "downloadPage" && this.shared.customerData.id != null) {
            return true;
          } else if (value == "scratchCardPage" && this.shared.customerData.id != null) {
            return false;
          } else return false;
        }
      }, {
        key: "openPage",
        value: function openPage(value) {
          this.navCtrl.navigateForward("tabs/settings/" + value);
        }
      }, {
        key: "openFace",
        value: function openFace() {
          this.loading.autoHide(2000);
          this.iab.create(this.config.face, "blank");
        }
      }, {
        key: "openInsta",
        value: function openInsta() {
          this.loading.autoHide(2000);
          this.iab.create(this.config.insta, "blank");
        }
      }, {
        key: "openYou",
        value: function openYou() {
          this.loading.autoHide(2000);
          this.iab.create(this.config.you, "blank");
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }, {
        type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_18__["AppEventsService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/settings/settings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_18__["AppEventsService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map