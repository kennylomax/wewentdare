(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gareth\Documents\GitHub\CX\CCv2\js-storefront\spartacusstore\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/storefront */ "52YI");



class AppComponent {
    constructor() {
        this.title = 'spartacusstore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cx-storefront");
    } }, directives: [_spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__["StorefrontComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _spartacus_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/assets */ "siwP");
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/core */ "oPwp");
/* harmony import */ var _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @spartacus/storefinder/assets */ "PnmK");
/* harmony import */ var _spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @spartacus/storefinder/root */ "V5Mr");
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @spartacus/storefront */ "52YI");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _spartacus_cdc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @spartacus/cdc */ "mH8G");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_3__["provideConfig"])({
            i18n: {
                resources: _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_4__["storeFinderTranslations"],
                chunks: _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_4__["storeFinderTranslationChunksConfig"],
            },
        }),
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _spartacus_storefront__WEBPACK_IMPORTED_MODULE_6__["B2cStorefrontModule"].withConfig({
                featureModules: {
                    storeFinder: {
                        module: () => __webpack_require__.e(/*! import() | spartacus-storefinder */ "spartacus-storefinder").then(__webpack_require__.bind(null, /*! @spartacus/storefinder */ "lUe6")).then((m) => m.StoreFinderModule),
                    },
                },
                backend: {
                    occ: {
                        // baseUrl: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002',
                        baseUrl: 'https://api.cu2qdtboy0-presalesm1-d1-public.model-t.cc.commerce.ondemand.com',
                        prefix: '/occ/v2/'
                    },
                },
                context: {
                    urlParameters: ['baseSite', 'language', 'currency'],
                    //baseSite: ['electronics-spa', 'apparel-uk-spa']
                    //baseSite: ['powertools-spa']
                    baseSite: ['electronics-spa']
                },
                i18n: {
                    resources: _spartacus_assets__WEBPACK_IMPORTED_MODULE_2__["translations"],
                    chunks: _spartacus_assets__WEBPACK_IMPORTED_MODULE_2__["translationChunksConfig"],
                    fallbackLang: 'en',
                },
                features: {
                    level: '3.0',
                },
                checkout: {
                    guest: true,
                    express: true,
                    defaultDeliveryMode: [_spartacus_storefront__WEBPACK_IMPORTED_MODULE_6__["DeliveryModePreferences"].LEAST_EXPENSIVE],
                },
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
            _spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_5__["StoreFinderRootModule"],
            _spartacus_cdc__WEBPACK_IMPORTED_MODULE_8__["CdcModule"].forRoot({
                cdc: [
                    {
                        baseSite: 'electronics-spa',
                        javascriptUrl: 'https://cdns.eu1.gigya.com/JS/gigya.js?apikey=3_U_SKRenPGZpDAag91CiCxh1iecSXqe8rcAF1wtNMIoNKNP9Bk8UY57oE0ZmI09fp',
                        sessionExpiration: 120,
                    },
                ],
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_6__["B2cStorefrontModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
        _spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_5__["StoreFinderRootModule"], _spartacus_cdc__WEBPACK_IMPORTED_MODULE_8__["CdcModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _spartacus_storefront__WEBPACK_IMPORTED_MODULE_6__["B2cStorefrontModule"].withConfig({
                        featureModules: {
                            storeFinder: {
                                module: () => __webpack_require__.e(/*! import() | spartacus-storefinder */ "spartacus-storefinder").then(__webpack_require__.bind(null, /*! @spartacus/storefinder */ "lUe6")).then((m) => m.StoreFinderModule),
                            },
                        },
                        backend: {
                            occ: {
                                // baseUrl: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002',
                                baseUrl: 'https://api.cu2qdtboy0-presalesm1-d1-public.model-t.cc.commerce.ondemand.com',
                                prefix: '/occ/v2/'
                            },
                        },
                        context: {
                            urlParameters: ['baseSite', 'language', 'currency'],
                            //baseSite: ['electronics-spa', 'apparel-uk-spa']
                            //baseSite: ['powertools-spa']
                            baseSite: ['electronics-spa']
                        },
                        i18n: {
                            resources: _spartacus_assets__WEBPACK_IMPORTED_MODULE_2__["translations"],
                            chunks: _spartacus_assets__WEBPACK_IMPORTED_MODULE_2__["translationChunksConfig"],
                            fallbackLang: 'en',
                        },
                        features: {
                            level: '3.0',
                        },
                        checkout: {
                            guest: true,
                            express: true,
                            defaultDeliveryMode: [_spartacus_storefront__WEBPACK_IMPORTED_MODULE_6__["DeliveryModePreferences"].LEAST_EXPENSIVE],
                        },
                    }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                    _spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_5__["StoreFinderRootModule"],
                    _spartacus_cdc__WEBPACK_IMPORTED_MODULE_8__["CdcModule"].forRoot({
                        cdc: [
                            {
                                baseSite: 'electronics-spa',
                                javascriptUrl: 'https://cdns.eu1.gigya.com/JS/gigya.js?apikey=3_U_SKRenPGZpDAag91CiCxh1iecSXqe8rcAF1wtNMIoNKNP9Bk8UY57oE0ZmI09fp',
                                sessionExpiration: 120,
                            },
                        ],
                    }),
                ],
                providers: [
                    Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_3__["provideConfig"])({
                        i18n: {
                            resources: _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_4__["storeFinderTranslations"],
                            chunks: _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_4__["storeFinderTranslationChunksConfig"],
                        },
                    }),
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map