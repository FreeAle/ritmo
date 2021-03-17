function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'News'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!config.appNavigationTabs\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"news-page\">\n  <!-- *ngIf=\"post.image\" -->\n  <ion-slides pager=true paginationType=\"bullets\" class=\"animated slideIn\">\n    <ion-slide *ngFor=\"let post of featuredPosts\" (click)=\"showPostDetail(post)\">\n      <ion-spinner *ngIf=\"!post.image\"></ion-spinner>\n      <ion-img src=\"{{post.featured_url}}\" class=\"animated fadeIn\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n  <!-- top Segments  -->\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"newest\">{{'Newest' |translate}}</ion-segment-button>\n    <ion-segment-button value=\"categories\">{{ 'Categories' | translate }} </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"segments\">\n\n    <div *ngSwitchCase=\"'newest'\">\n      <ion-list>\n        <ion-item lines=\"full\" *ngFor=\"let post of posts\" (click)=\"showPostDetail(post)\" class=\"animated fadeIn\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img src=\"{{post.featured_url}}\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            <h2 [innerHTML]=\"post.title.rendered | sainitizeHtml\"></h2>\n            <p>Categoria: {{post.m_categories[0].name}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-infinite-scroll #infinite (ionInfinite)=\"getPosts3()\" (ionInfinite)=\"getPosts2()\" (ionInfinite)=\"getPosts1()\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n    </div>\n    <!--Bonus -->\n    <div *ngSwitchCase=\"'categories'\">\n      <ion-grid class=\"ion-no-padding\" class=\"animated fadeIn\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"6\" *ngIf=\"abilitato2\"\n            (click)=\"openPostsPage(categories.name,categories.id)\">\n            <ion-card>\n              <ion-card-header>\n                <ion-img src=\"http://porto.amserver.it/wp-content/uploads/2021/03/BONUS.png\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  {{categories.name}}\n                </ion-card-title>\n                <ion-card-subtitle>\n                  {{categories.count}} {{'Video'|translate}}\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <!--Aggiornamenti 2020 -->\n          <ion-col class=\"ion-no-padding\" size=\"6\" *ngIf=\"abilitato2\"\n            (click)=\"openPostsPage(categories11.name,categories11.id)\">\n            <ion-card>\n              <ion-card-header>\n                <ion-img src=\"http://porto.amserver.it/wp-content/uploads/2021/03/AGGIORNAMENTI-2020.png\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  {{categories11.name}}\n                </ion-card-title>\n                <ion-card-subtitle>\n                  {{categories11.count}} {{'Video'|translate}}\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <!--Aggiornamenti 2021 -->\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"6\" *ngIf=\"abilitato2\"\n            (click)=\"openPostsPage(categories111.name,categories111.id)\">\n            <ion-card>\n              <ion-card-header>\n                <ion-img src=\"http://porto.amserver.it/wp-content/uploads/2021/03/AGGIORNAMENTI-2021.png\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  {{categories111.name}}\n                </ion-card-title>\n                <ion-card-subtitle>\n                  {{categories111.count}} {{'Video'|translate}}\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <!--Maculele -->\n          <ion-col class=\"ion-no-padding\" size=\"6\"   *ngIf=\"abilitato2\"\n            (click)=\"openPostsPage(categories1111.name,categories1111.id)\">\n            <ion-card>\n              <ion-card-header>\n                <ion-img src=\"http://porto.amserver.it/wp-content/uploads/2021/03/MACULELE.png\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  {{categories1111.name}}\n                </ion-card-title>\n                <ion-card-subtitle>\n                  {{categories1111.count}} {{'Video'|translate}}\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <!--Jump -->\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"6\"  *ngIf=\"abilitato\"\n          (click)=\"openPostsPage(categories2.name,categories2.id)\">\n          <ion-card>\n            <ion-card-header>\n              <ion-img src=\"http://porto.amserver.it/wp-content/uploads/2021/03/JUMP.png\"></ion-img>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-card-title>\n                {{categories2.name}}\n              </ion-card-title>\n              <ion-card-subtitle>\n                {{categories2.count}} {{'Video'|translate}}\n              </ion-card-subtitle>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/news/news.module.ts":
  /*!*************************************!*\
    !*** ./src/app/news/news.module.ts ***!
    \*************************************/

  /*! exports provided: NewsPageModule */

  /***/
  function srcAppNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
      return NewsPageModule;
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


    var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/news/news.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }];

    var NewsPageModule = function NewsPageModule() {
      _classCallCheck(this, NewsPageModule);
    };

    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })], NewsPageModule);
    /***/
  },

  /***/
  "./src/app/news/news.page.scss":
  /*!*************************************!*\
    !*** ./src/app/news/news.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".news-page ion-segment {\n  border-bottom: 1px solid #dedede;\n}\n.news-page ion-segment ion-segment-button {\n  --indicator-color-checked: var(--ion-color-primary) !important;\n  --color-checked: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\n.news-page ion-list ion-item ion-thumbnail {\n  margin-bottom: auto;\n}\n.news-page ion-list ion-item ion-label {\n  margin-top: 4px;\n}\n.news-page ion-list ion-item ion-label h2 {\n  font-size: 16px;\n  font-weight: bold;\n  white-space: normal;\n}\n.news-page ion-list ion-item ion-label h2 small {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #747474;\n  font-weight: normal;\n  margin-top: 5px;\n}\n.news-page ion-list ion-item ion-label h2 small ion-label {\n  padding-left: 4px;\n}\n.news-page ion-list ion-item ion-label p p:not(:first-child) {\n  display: none;\n}\n.news-page ion-list ion-item ion-label p p:first-child {\n  white-space: normal;\n  line-height: 1.4;\n  -webkit-line-clamp: 4;\n  display: -webkit-box;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n}\n.news-page ion-grid ion-row ion-col ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  text-align: center;\n  margin: 0;\n  box-shadow: inset 0px 0.1px lightgrey;\n}\n.news-page ion-grid ion-row ion-col ion-card ion-card-header ion-img {\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.news-page ion-grid ion-row ion-col ion-card ion-card-content ion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n}\n.news-page ion-grid ion-row ion-col ion-card ion-card-content ion-card-subtitle {\n  font-size: 14px;\n  color: #747474;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXEFsZXNzYW5kcm9cXERlc2t0b3BcXHJpdG1vYXBwL3NyY1xcYXBwXFxuZXdzXFxuZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdDQUFBO0FDQUo7QURDSTtFQUNFLDhEQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtBQ0NOO0FES007RUFDRSxtQkFBQTtBQ0hSO0FES007RUFDRSxlQUFBO0FDSFI7QURJUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRlY7QURHVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFo7QURFWTtFQUNFLGlCQUFBO0FDQWQ7QURLVTtFQUNFLGFBQUE7QUNIWjtBREtVO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDSFo7QURhUTtFQVFFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtBQ2xCVjtBRFFZO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNOZDtBRGVZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2JkO0FEZVk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2JkIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLXBhZ2Uge1xuICBpb24tc2VnbWVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgfVxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc0NzQ3NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgcDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDAuMXB4IGxpZ2h0Z3JleTtcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM3NDc0NzQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubmV3cy1wYWdlIGlvbi1zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG59XG4ubmV3cy1wYWdlIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm5ld3MtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5uZXdzLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLm5ld3MtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLm5ld3MtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDIgc21hbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubmV3cy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiBzbWFsbCBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5uZXdzLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHAgcDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmV3cy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHA6Zmlyc3QtY2hpbGQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuLm5ld3MtcGFnZSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDAuMXB4IGxpZ2h0Z3JleTtcbn1cbi5uZXdzLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24taW1nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uZXdzLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbi5uZXdzLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/news/news.page.ts":
  /*!***********************************!*\
    !*** ./src/app/news/news.page.ts ***!
    \***********************************/

  /*! exports provided: NewsPage */

  /***/
  function srcAppNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
      return NewsPage;
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


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var NewsPage = /*#__PURE__*/function () {
      function NewsPage(navCtrl, http, config, loading, shared, alertCtrl) {
        var _this = this;

        _classCallCheck(this, NewsPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.alertCtrl = alertCtrl;
        this.featuredPosts = new Array();
        this.segments = 'newest';
        this.editore = 'on';
        this.items = []; //WordPress intergation

        this.categories = new Array();
        this.categories11 = new Array();
        this.categories111 = new Array();
        this.categories1111 = new Array();
        this.categories2 = new Array(); //page varible

        this.abilitato = false;
        this.abilitato2 = false;
        this.page = 1; //WordPress intergation

        this.posts = new Array(); //page varible

        this.page2 = 1;
        this.loadingServerDataPosts = true;
        var dat = {};
        dat.language_id = this.config.langId;
        dat.is_feature = 1;
        this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?sticky=true&page=' + this.page2 + "&" + this.config.productsArguments).then(function (data) {
          data.forEach(function (value, index) {
            _this.getImagePost(value);
          });
          _this.featuredPosts = data;
        });
      }

      _createClass(NewsPage, [{
        key: "getImagePost",
        value: function getImagePost(post) {
          post.image = "assets/placeholder.png";
          if (post._links["wp:featuredmedia"]) this.config.getWithUrl(post._links["wp:featuredmedia"][0].href).then(function (data) {
            post.image = data.source_url;
          });
        } //========================================= tab newest categories ===============================================================================
        //Bonus

      }, {
        key: "getCategories3",
        value: function getCategories3() {
          var _this2 = this;

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/19').then(function (data) {
            if (_this2.page2 == 1) {
              _this2.categories = [];
            }

            _this2.categories = data; // console.log(data.data.length);

            if (data.length == 0) {
              // if we get less than 10 products then infinite scroll will de disabled
              //this.shared.toast("All Categories Loaded!");
              _this2.getRandomImage();
            } else _this2.getCategories3();
          }, function (response) {// console.log("Error while loading categories from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getCategories11",
        //Aggiornamenti 2020
        value: function getCategories11() {
          var _this3 = this;

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/20').then(function (data) {
            if (_this3.page2 == 1) {
              _this3.categories11 = [];
            }

            _this3.categories11 = data; // console.log(data.data.length);

            if (data.length == 0) {
              // if we get less than 10 products then infinite scroll will de disabled
              //this.shared.toast("All Categories Loaded!");
              _this3.getRandomImage();
            } else _this3.getCategories11();
          }, function (response) {// console.log("Error while loading categories from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getCategories111",
        //Aggiornamenti 2021
        value: function getCategories111() {
          var _this4 = this;

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/21').then(function (data) {
            if (_this4.page2 == 1) {
              _this4.categories111 = [];
            }

            _this4.categories111 = data; // console.log(data.data.length);

            if (data.length == 0) {
              // if we get less than 10 products then infinite scroll will de disabled
              //this.shared.toast("All Categories Loaded!");
              _this4.getRandomImage();
            } else _this4.getCategories111();
          }, function (response) {// console.log("Error while loading categories from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getCategories1111",
        //Maculele
        value: function getCategories1111() {
          var _this5 = this;

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/22').then(function (data) {
            if (_this5.page2 == 1) {
              _this5.categories1111 = [];
            }

            _this5.categories1111 = data; // console.log(data.data.length);

            if (data.length == 0) {
              // if we get less than 10 products then infinite scroll will de disabled
              //this.shared.toast("All Categories Loaded!");
              _this5.getRandomImage();
            } else _this5.getCategories1111();
          }, function (response) {// console.log("Error while loading categories from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getCategories2",
        //Jump
        value: function getCategories2() {
          var _this6 = this;

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/3').then(function (data) {
            if (_this6.page2 == 1) {
              _this6.categories2 = [];
            }

            _this6.categories2 = data; // console.log(data.data.length);

            if (data.length == 0) {
              // if we get less than 10 products then infinite scroll will de disabled
              //this.shared.toast("All Categories Loaded!");
              _this6.getRandomImage();
            } else _this6.getCategories2();
          }, function (response) {// console.log("Error while loading categories from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getPosts3",
        //============================================================================================  
        //getting list of posts
        value: function getPosts3() {
          var _this7 = this;

          if (this.page == 1) {
            this.loading.show();
            this.loadingServerDataPosts = false;
          }

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&" + this.config.productsArguments).then(function (data) {
            _this7.infinite.complete(); //stopping infinite scroll loader


            if (_this7.page == 1) {
              _this7.posts = [];
              _this7.infinite.disabled = false;

              _this7.loading.hide();

              _this7.getCategories11();
            }

            _this7.page++;
            data.forEach(function (value, index) {
              _this7.getImagePost(value);

              _this7.posts.push(value);
            });

            if (data.length < 9) {
              // if we get less than 10 products then infinite scroll will de disabled
              _this7.infinite.disabled = true; //disabling infinite scroll

              if (_this7.posts.length != 0) {//this.shared.toast("All Posts Loaded!");
              }
            }

            _this7.loadingServerDataPosts = true;
          }, function (err) {
            _this7.infinite.disabled = true; // console.log("Error while loading posts from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getPosts1",
        value: function getPosts1() {
          var _this8 = this;

          if (this.page == 1) {
            this.loading.show();
            this.loadingServerDataPosts = false;
          }

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + "2" + "&" + this.config.productsArguments).then(function (data) {
            _this8.infinite.complete(); //stopping infinite scroll loader


            if (_this8.page == 1) {
              _this8.posts = [];
              _this8.infinite.disabled = false;

              _this8.loading.hide();

              _this8.getCategories111();
            }

            _this8.page++;
            data.forEach(function (value, index) {
              _this8.getImagePost(value);

              _this8.posts.push(value);
            });

            if (data.length < 9) {
              // if we get less than 10 products then infinite scroll will de disabled
              _this8.infinite.disabled = true; //disabling infinite scroll

              if (_this8.posts.length != 0) {//this.shared.toast("All Posts Loaded!");
              }
            }

            _this8.loadingServerDataPosts = true;
          }, function (err) {
            _this8.infinite.disabled = true; // console.log("Error while loading posts from the server");
            // console.log(response);
          });
        }
      }, {
        key: "getPosts2",
        value: function getPosts2() {
          var _this9 = this;

          if (this.page == 1) {
            this.loading.show();
            this.loadingServerDataPosts = false;
          }

          this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + "3" + "&" + this.config.productsArguments).then(function (data) {
            _this9.infinite.complete(); //stopping infinite scroll loader


            if (_this9.page == 1) {
              _this9.posts = [];
              _this9.infinite.disabled = false;

              _this9.loading.hide();

              _this9.getCategories1111();
            }

            _this9.page++;
            data.forEach(function (value, index) {
              _this9.getImagePost(value);

              _this9.posts.push(value);
            });

            _this9.posts.concat(data);

            if (data.length < 9) {
              // if we get less than 10 products then infinite scroll will de disabled
              _this9.infinite.disabled = true; //disabling infinite scroll

              if (_this9.posts.length != 0) {//this.shared.toast("All Posts Loaded!");
              }
            }

            _this9.loadingServerDataPosts = true;
          }, function (err) {
            _this9.infinite.disabled = true; // console.log("Error while loading posts from the server");
            // console.log(response);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    alert = this.alertCtrl.create({
                      message: 'Low battery',
                      buttons: ['Dismiss']
                    });
                    _context.next = 3;
                    return alert;

                  case 3:
                    _context.sent.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //============================================================================================  
        //getting list of sub categories from the server

      }, {
        key: "showPostDetail",
        value: function showPostDetail(post) {
          this.shared.singlePostData = post;
          console.log(post);
          if (this.config.appNavigationTabs) this.navCtrl.navigateForward(this.config.currentRoute + "/news-detail");else this.navCtrl.navigateForward("/news-detail");
        }
      }, {
        key: "openPostsPage",
        value: function openPostsPage(name, id) {
          if (this.config.appNavigationTabs) this.navCtrl.navigateForward(this.config.currentRoute + "/news-list/" + id + "/" + name);else this.navCtrl.navigateForward("/news-list/" + id + "/" + name);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.config.admob == 1) this.shared.showAd();
        } // <!-- 2.0 updates -->

      }, {
        key: "getRandomImage",
        value: function getRandomImage() {
          var _this10 = this;

          try {
            this.categories.forEach(function (value, index) {
              value.image = "assets/placeholder.png";

              var rand = _this10.getRandomPost();

              if (rand._links["wp:featuredmedia"]) _this10.config.getWithUrl(rand._links["wp:featuredmedia"][0].href).then(function (data) {
                value.image = data.source_url;
                console.log(value.image);
              });
            });
          } catch (error) {}
        }
      }, {
        key: "getRandomPost",
        value: function getRandomPost() {
          var rand = this.posts[Math.floor(Math.random() * this.posts.length)];
          if (rand.sticky == false) return rand;else this.getRandomPost();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Jump
          if (this.shared.customerData.role == 'editor') {
            this.getPosts2();
            this.getCategories2();
            this.abilitato = true;
            this.abilitato2 = false;
            console.log('sei jump');
          } else {
            console.log('non sei jump');
          } //solo Ritmo


          if (this.shared.customerData.role == 'author') {
            this.getPosts1();
            this.getCategories3();
            this.getCategories11();
            this.getCategories111();
            this.getCategories1111();
            console.log('sei sambafit');
            this.abilitato = false;
            this.abilitato2 = true;
          } else {
            console.log('non sei sambafit');
          } //


          if (this.shared.customerData.role == 'contributor') {
            this.getPosts3();
            this.getCategories3();
            this.getCategories11();
            this.getCategories111();
            this.getCategories1111();
            this.getCategories2();
            this.abilitato = true;
            this.abilitato2 = true;
          } else {
            console.log('non sei contributor');
          }
        }
      }]);

      return NewsPage;
    }();

    NewsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], NewsPage.prototype, "infinite", void 0);
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news.page.scss */
      "./src/app/news/news.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], NewsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map