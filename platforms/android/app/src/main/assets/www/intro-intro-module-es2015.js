(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-slides pager=\"true\" #IonSlides loop=\"true\" class=\"ion-no-padding\">\n    <ion-slide #IonSlides *ngFor=\"let slide of slides; let i=index\" class=\"ion-no-padding\">\n      <span class=\"ion-no-padding\">\n        <ion-row class=\"ion-justify-content-center\">\n          <img src=\"{{slide.image}}\" alt=\"Slide Images\">\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-icon name=\"{{slide.icon}}\"></ion-icon>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <h2>{{slide.title|translate}}</h2>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col>\n            <p>{{slide.text}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-button *ngIf=\"slides.length!=i+1\" fill=\"outline\" (click)=\"openHomePage()\">\n            {{ 'Skip' | translate }}\n          </ion-button>\n          <ion-button *ngIf=\"slides.length==i+1\" fill=\"outline\" (click)=\"openHomePage()\">\n            {{ 'Done' | translate }}\n          </ion-button>\n        </ion-row>\n      </span>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]
    }
];
let IntroPageModule = class IntroPageModule {
};
IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none !important;\n  background: url(\"/assets/intro/intro_top_bg.png\");\n  background-position: top center;\n  background-size: auto 80%;\n  background-repeat: no-repeat;\n}\nion-content ion-slides {\n  height: 99%;\n  --bullet-background: black !important;\n  --bullet-background-active: var(--ion-color-secondary) !important;\n}\nion-content ion-slides span {\n  margin-top: -10px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\nion-content ion-slides span ion-row {\n  border-top: none !important;\n  margin-top: 2%;\n}\nion-content ion-slides span ion-row ion-icon {\n  zoom: 2.2;\n  color: var(--ion-color-primary);\n}\nion-content ion-slides span ion-row h2 {\n  margin-top: 8px;\n  font-size: 20px;\n}\nion-content ion-slides span ion-row p {\n  margin-top: 2px;\n  font-size: 16px;\n  margin-bottom: 16px;\n}\nion-content ion-slides span ion-row ion-button {\n  margin-left: auto;\n  margin-right: auto;\n  --border-color: var(--ion-color-secondary);\n  height: 30px;\n}\nion-content ion-slides span ion-row:first-child {\n  width: auto;\n  height: 350px;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vQzpcXFVzZXJzXFxBbGVzc2FuZHJvXFxEZXNrdG9wXFxyaXRtb2FwcC9zcmNcXGFwcFxcaW50cm9cXGludHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxpREFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxpRUFBQTtBQ0VKO0FEREk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR047QURGTTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQ0lSO0FESFE7RUFDRSxTQUFBO0VBQ0EsK0JBQUE7QUNLVjtBREhRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNLVjtBREhRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0tWO0FESFE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FDS1Y7QURIUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNLViIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW50cm8vaW50cm9fdG9wX2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDgwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA5OSU7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGlvbi1yb3cge1xuICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgem9vbTogMi4yO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbnRyby9pbnRyb190b3BfYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gODAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogOTklO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgc3BhbiB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgc3BhbiBpb24tcm93IHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgc3BhbiBpb24tcm93IGlvbi1pY29uIHtcbiAgem9vbTogMi4yO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBzcGFuIGlvbi1yb3cgaDIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgc3BhbiBpb24tcm93IHAge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgc3BhbiBpb24tcm93IGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgc3BhbiBpb24tcm93OmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/app-events/app-events.service */ "./src/providers/app-events/app-events.service.ts");






let IntroPage = class IntroPage {
    constructor(navCtrl, shared, config, appEventsService) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.appEventsService = appEventsService;
        this.slides = [
            { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/2.gif", title: "Category Page", icon: "apps", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/4.gif", title: "Cart Page", icon: "basket", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/5.gif", title: "Order Page", icon: "calendar", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." }
        ];
    }
    openHomePage() {
        this.appEventsService.publish("openHomePage", "");
        this.config.checkingNewSettingsFromServer();
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
    ngOnInit() {
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"] }
];
IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        src_providers_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__["AppEventsService"]])
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map