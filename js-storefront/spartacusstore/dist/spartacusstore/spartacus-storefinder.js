(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spartacus-storefinder"],{

/***/ "7t/O":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@spartacus/storefinder/__ivy_ngcc__/fesm2015/spartacus-storefinder-core.js ***!
  \*************************************************************************************************/
/*! exports provided: GoogleMapRendererService, STORE_COUNT_NORMALIZER, STORE_FINDER_DATA, STORE_FINDER_FEATURE, STORE_FINDER_SEARCH_PAGE_NORMALIZER, StoreDataService, StoreFinderActions, StoreFinderAdapter, StoreFinderConfig, StoreFinderConnector, StoreFinderCoreModule, StoreFinderSelectors, StoreFinderService, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapRendererService", function() { return GoogleMapRendererService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_COUNT_NORMALIZER", function() { return STORE_COUNT_NORMALIZER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FINDER_DATA", function() { return STORE_FINDER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FINDER_FEATURE", function() { return STORE_FINDER_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FINDER_SEARCH_PAGE_NORMALIZER", function() { return STORE_FINDER_SEARCH_PAGE_NORMALIZER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDataService", function() { return StoreDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderActions", function() { return storeFinderGroup_actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderAdapter", function() { return StoreFinderAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderConfig", function() { return StoreFinderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderConnector", function() { return StoreFinderConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderCoreModule", function() { return StoreFinderCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderSelectors", function() { return storeFinderGroup_selectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderService", function() { return StoreFinderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return StoreFinderStoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return getReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return reducerToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return reducerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return effects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return FindStoresEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ViewAllStoresEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return defaultStoreFinderConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ "oPwp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");













class StoreFinderConfig {
}
StoreFinderConfig.ɵfac = function StoreFinderConfig_Factory(t) { return new (t || StoreFinderConfig)(); };
StoreFinderConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StoreFinderConfig_Factory() { return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["Config"]); }, token: StoreFinderConfig, providedIn: "root" });

class StoreFinderAdapter {
}

class StoreFinderConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    search(query, searchConfig, longitudeLatitude, radius) {
        return this.adapter.search(query, searchConfig, longitudeLatitude, radius);
    }
    getCounts() {
        return this.adapter.loadCounts();
    }
    get(storeId) {
        return this.adapter.load(storeId);
    }
}
StoreFinderConnector.ɵfac = function StoreFinderConnector_Factory(t) { return new (t || StoreFinderConnector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StoreFinderAdapter)); };
StoreFinderConnector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });
StoreFinderConnector.ctorParameters = () => [
    { type: StoreFinderAdapter }
];

const STORE_FINDER_SEARCH_PAGE_NORMALIZER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('StoreFinderSearchPageNormalizer');
const STORE_COUNT_NORMALIZER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('StoreCountNormalizer');

const STORE_FINDER_FEATURE = 'stores';
const STORE_FINDER_DATA = '[StoreFinder] Store Finder Data';

const FIND_STORES_ON_HOLD = '[StoreFinder] On Hold';
const FIND_STORES = '[StoreFinder] Find Stores';
const FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
const FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
const FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
const FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
const FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
class FindStoresOnHold extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = FIND_STORES_ON_HOLD;
    }
}
class FindStores extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderLoadAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES;
    }
}
class FindStoresFail extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderFailAction {
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORES_FAIL;
    }
}
class FindStoresSuccess extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderSuccessAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES_SUCCESS;
    }
}
class FindStoreById extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderLoadAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID;
    }
}
class FindStoreByIdFail extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderFailAction {
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_FAIL;
    }
}
class FindStoreByIdSuccess extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderSuccessAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_SUCCESS;
    }
}

const VIEW_ALL_STORES = '[StoreFinder] View All Stores';
const VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
const VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
class ViewAllStores extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = VIEW_ALL_STORES;
    }
}
class ViewAllStoresFail extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderFailAction {
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_FAIL;
    }
}
class ViewAllStoresSuccess extends _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].LoaderSuccessAction {
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_SUCCESS;
    }
}

var storeFinderGroup_actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FIND_STORES_ON_HOLD: FIND_STORES_ON_HOLD,
    FIND_STORES: FIND_STORES,
    FIND_STORES_FAIL: FIND_STORES_FAIL,
    FIND_STORES_SUCCESS: FIND_STORES_SUCCESS,
    FIND_STORE_BY_ID: FIND_STORE_BY_ID,
    FIND_STORE_BY_ID_FAIL: FIND_STORE_BY_ID_FAIL,
    FIND_STORE_BY_ID_SUCCESS: FIND_STORE_BY_ID_SUCCESS,
    FindStoresOnHold: FindStoresOnHold,
    FindStores: FindStores,
    FindStoresFail: FindStoresFail,
    FindStoresSuccess: FindStoresSuccess,
    FindStoreById: FindStoreById,
    FindStoreByIdFail: FindStoreByIdFail,
    FindStoreByIdSuccess: FindStoreByIdSuccess,
    VIEW_ALL_STORES: VIEW_ALL_STORES,
    VIEW_ALL_STORES_FAIL: VIEW_ALL_STORES_FAIL,
    VIEW_ALL_STORES_SUCCESS: VIEW_ALL_STORES_SUCCESS,
    ViewAllStores: ViewAllStores,
    ViewAllStoresFail: ViewAllStoresFail,
    ViewAllStoresSuccess: ViewAllStoresSuccess
});

const getStoreFinderState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])(STORE_FINDER_FEATURE);

const ɵ0 = (storesState) => storesState.findStores;
const getFindStoresState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getStoreFinderState, ɵ0);
const ɵ1 = (state) => _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].loaderValueSelector(state);
const getFindStoresEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getFindStoresState, ɵ1);
const ɵ2 = (state) => _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].loaderLoadingSelector(state);
const getStoresLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getFindStoresState, ɵ2);

const ɵ0$1 = (storesState) => storesState.viewAllStores;
const getViewAllStoresState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getStoreFinderState, ɵ0$1);
const ɵ1$1 = (state) => _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].loaderValueSelector(state);
const getViewAllStoresEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getViewAllStoresState, ɵ1$1);
const ɵ2$1 = (state) => _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].loaderLoadingSelector(state);
const getViewAllStoresLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getViewAllStoresState, ɵ2$1);

var storeFinderGroup_selectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getFindStoresState: getFindStoresState,
    getFindStoresEntities: getFindStoresEntities,
    getStoresLoading: getStoresLoading,
    ɵ0: ɵ0,
    ɵ1: ɵ1,
    ɵ2: ɵ2,
    getViewAllStoresState: getViewAllStoresState,
    getViewAllStoresEntities: getViewAllStoresEntities,
    getViewAllStoresLoading: getViewAllStoresLoading
});

class StoreFinderService {
    constructor(store, winRef, globalMessageService, routingService) {
        this.store = store;
        this.winRef = winRef;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     */
    getStoresLoading() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     */
    getFindStoresEntities() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     */
    getViewAllStoresLoading() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     */
    getViewAllStoresEntities() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(getViewAllStoresEntities));
    }
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param searchConfig search configuration
     * @param longitudeLatitude longitude and latitude coordinates
     * @param countryIsoCode country ISO code
     * @param useMyLocation current location coordinates
     * @param radius radius of the scope from the center point
     */
    findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation, radius) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new FindStoresOnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
                const position = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                this.clearWatchGeolocation(new FindStores({
                    queryText: queryText,
                    searchConfig: searchConfig,
                    longitudeLatitude: position,
                    countryIsoCode: countryIsoCode,
                    radius: radius,
                }));
            }, () => {
                this.globalMessageService.add({ key: 'storeFinder.geolocationNotEnabled' }, _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["GlobalMessageType"].MSG_TYPE_ERROR);
                this.routingService.go(['/store-finder']);
            });
        }
        else {
            this.clearWatchGeolocation(new FindStores({
                queryText: queryText,
                searchConfig: searchConfig,
                longitudeLatitude: longitudeLatitude,
                countryIsoCode: countryIsoCode,
                radius: radius,
            }));
        }
    }
    /**
     * View all stores
     */
    viewAllStores() {
        this.clearWatchGeolocation(new ViewAllStores());
    }
    /**
     * View all stores by id
     * @param storeId store id
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new FindStoreById({ storeId }));
    }
    clearWatchGeolocation(callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    }
}
StoreFinderService.ɵfac = function StoreFinderService_Factory(t) { return new (t || StoreFinderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["WindowRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["GlobalMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
StoreFinderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StoreFinderService_Factory() { return new StoreFinderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["WindowRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["GlobalMessageService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); }, token: StoreFinderService, providedIn: "root" });
StoreFinderService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["WindowRef"] },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["GlobalMessageService"] },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }
];

class StoreDataService {
    constructor() {
        this.weekDays = {
            0: 'Sun',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat',
        };
    }
    /**
     * Returns store latitude
     * @param location store location
     */
    getStoreLatitude(location) {
        return location.geoPoint.latitude;
    }
    /**
     * Returns store longitude
     * @param location store location
     */
    getStoreLongitude(location) {
        return location.geoPoint.longitude;
    }
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    getStoreClosingTime(location, date) {
        const requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.closingTime) {
                return requestedDaySchedule.closingTime.formattedHour;
            }
        }
    }
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    getStoreOpeningTime(location, date) {
        const requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.openingTime) {
                return requestedDaySchedule.openingTime.formattedHour;
            }
        }
    }
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    getSchedule(location, date) {
        const weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find((weekDayOpeningListItem) => weekDayOpeningListItem.weekDay === weekday);
    }
}
StoreDataService.ɵfac = function StoreDataService_Factory(t) { return new (t || StoreDataService)(); };
StoreDataService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StoreDataService_Factory() { return new StoreDataService(); }, token: StoreDataService, providedIn: "root" });

/// <reference types="@types/googlemaps" />
class GoogleMapRendererService {
    constructor(config, externalJsFileLoader, storeDataService) {
        this.config = config;
        this.externalJsFileLoader = externalJsFileLoader;
        this.storeDataService = storeDataService;
        this.googleMap = null;
    }
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param mapElement HTML element inside of which the map will be displayed
     * @param locations array containign geo data to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    renderMap(mapElement, locations, selectMarkerHandler) {
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, () => {
                this.drawMap(mapElement, locations, selectMarkerHandler);
            });
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    }
    /**
     * Centers the map to the given point
     * @param latitute latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    }
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    defineMapCenter(locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    }
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    initMap(mapElement, mapCenter) {
        const gestureOption = 'greedy';
        const mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: gestureOption,
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    }
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    createMarkers(locations, selectMarkerHandler) {
        this.markers = [];
        locations.forEach((element, index) => {
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.storeDataService.getStoreLatitude(element), this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            this.markers.push(marker);
            marker.setMap(this.googleMap);
            marker.addListener('mouseover', function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            });
            marker.addListener('mouseout', function () {
                marker.setAnimation(null);
            });
            if (selectMarkerHandler) {
                marker.addListener('click', function () {
                    selectMarkerHandler(index);
                });
            }
        });
    }
    /**
     * Initialize and draw the map
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    drawMap(mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    }
}
GoogleMapRendererService.ɵfac = function GoogleMapRendererService_Factory(t) { return new (t || GoogleMapRendererService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StoreFinderConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["ExternalJsFileLoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StoreDataService)); };
GoogleMapRendererService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function GoogleMapRendererService_Factory() { return new GoogleMapRendererService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StoreFinderConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["ExternalJsFileLoader"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StoreDataService)); }, token: GoogleMapRendererService, providedIn: "root" });
GoogleMapRendererService.ctorParameters = () => [
    { type: StoreFinderConfig },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["ExternalJsFileLoader"] },
    { type: StoreDataService }
];

const defaultStoreFinderConfig = {
    googleMaps: {
        apiUrl: 'https://maps.googleapis.com/maps/api/js',
        apiKey: '',
        scale: 5,
        selectedMarkerScale: 17,
        radius: 50000,
    },
};

function getReducers() {
    return {
        findStores: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].loaderReducer(STORE_FINDER_DATA),
        viewAllStores: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["StateUtils"].loaderReducer(STORE_FINDER_DATA),
    };
}
const reducerToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('StoreFinderReducers');
const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
const metaReducers = [];

class FindStoresEffect {
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(FIND_STORES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])((payload) => this.storeFinderConnector
            .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude, payload.radius)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => {
            if (payload.countryIsoCode) {
                data.stores = data.stores.filter((store) => store.address.country.isocode === payload.countryIsoCode);
                data.stores.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            }
            return new FindStoresSuccess(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new FindStoresFail(Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["normalizeHttpError"])(error)))))));
        this.findStoreById$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(FIND_STORE_BY_ID), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((payload) => this.storeFinderConnector.get(payload.storeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => new FindStoreByIdSuccess(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new FindStoreByIdFail(Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["normalizeHttpError"])(error)))))));
    }
}
FindStoresEffect.ɵfac = function FindStoresEffect_Factory(t) { return new (t || FindStoresEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StoreFinderConnector)); };
FindStoresEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FindStoresEffect, factory: FindStoresEffect.ɵfac });
FindStoresEffect.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: StoreFinderConnector }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], FindStoresEffect.prototype, "findStores$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], FindStoresEffect.prototype, "findStoreById$", void 0);

class ViewAllStoresEffect {
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(VIEW_ALL_STORES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => {
            return this.storeFinderConnector.getCounts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => {
                data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
                return new ViewAllStoresSuccess(data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new ViewAllStoresFail(Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["normalizeHttpError"])(error)))));
        }));
    }
}
ViewAllStoresEffect.ɵfac = function ViewAllStoresEffect_Factory(t) { return new (t || ViewAllStoresEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StoreFinderConnector)); };
ViewAllStoresEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewAllStoresEffect, factory: ViewAllStoresEffect.ɵfac });
ViewAllStoresEffect.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: StoreFinderConnector }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
                useExisting: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["Config"]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderConnector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: StoreFinderAdapter }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["WindowRef"] }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["GlobalMessageService"] }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapRendererService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: StoreFinderConfig }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_1__["ExternalJsFileLoader"] }, { type: StoreDataService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindStoresEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: StoreFinderConnector }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAllStoresEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: StoreFinderConnector }]; }, null); })();

const effects = [FindStoresEffect, ViewAllStoresEffect];

class StoreFinderStoreModule {
}
StoreFinderStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreFinderStoreModule });
StoreFinderStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreFinderStoreModule_Factory(t) { return new (t || StoreFinderStoreModule)(); }, providers: [reducerProvider], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(STORE_FINDER_FEATURE, reducerToken),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature(effects),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreFinderStoreModule, { imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(STORE_FINDER_FEATURE, reducerToken),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature(effects),
                ],
                providers: [reducerProvider]
            }]
    }], null, null); })();

class StoreFinderCoreModule {
}
StoreFinderCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreFinderCoreModule });
StoreFinderCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreFinderCoreModule_Factory(t) { return new (t || StoreFinderCoreModule)(); }, providers: [
        Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["provideDefaultConfig"])(defaultStoreFinderConfig),
        StoreFinderConnector,
    ], imports: [[StoreFinderStoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreFinderCoreModule, { imports: [StoreFinderStoreModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [StoreFinderStoreModule],
                providers: [
                    Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_1__["provideDefaultConfig"])(defaultStoreFinderConfig),
                    StoreFinderConnector,
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=spartacus-storefinder-core.js.map

/***/ }),

/***/ "OHD3":
/*!************************************************************************************************!*\
  !*** ./node_modules/@spartacus/storefinder/__ivy_ngcc__/fesm2015/spartacus-storefinder-occ.js ***!
  \************************************************************************************************/
/*! exports provided: OccStoreFinderAdapter, StoreFinderOccModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccStoreFinderAdapter", function() { return OccStoreFinderAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderOccModule", function() { return StoreFinderOccModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return defaultOccStoreFinderConfig; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/storefinder/core */ "7t/O");
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @spartacus/core */ "oPwp");









class OccStoreFinderAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    search(query, searchConfig, longitudeLatitude, radius) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude, radius).pipe(this.converterService.pipeable(_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_3__["STORE_FINDER_SEARCH_PAGE_NORMALIZER"]));
    }
    loadCounts() {
        return this.http
            .get(this.occEndpointsService.getUrl('storescounts'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount), this.converterService.pipeableMany(_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_3__["STORE_COUNT_NORMALIZER"]));
    }
    load(storeId) {
        return this.http
            .get(this.occEndpointsService.getUrl('store', { storeId }))
            .pipe(this.converterService.pipeable(_spartacus_core__WEBPACK_IMPORTED_MODULE_4__["POINT_OF_SERVICE_NORMALIZER"]));
    }
    callOccFindStores(query, searchConfig, longitudeLatitude, radius) {
        const params = {};
        if (longitudeLatitude) {
            params['longitude'] = String(longitudeLatitude.longitude);
            params['latitude'] = String(longitudeLatitude.latitude);
            params['radius'] = String(radius);
        }
        else {
            params['query'] = query;
        }
        if (searchConfig.pageSize) {
            params['pageSize'] = String(searchConfig.pageSize);
        }
        if (searchConfig.currentPage) {
            params['currentPage'] = String(searchConfig.currentPage);
        }
        if (searchConfig.sort) {
            params['sort'] = searchConfig.sort;
        }
        return this.http.get(this.occEndpointsService.getUrl('stores', undefined, params));
    }
}
OccStoreFinderAdapter.ɵfac = function OccStoreFinderAdapter_Factory(t) { return new (t || OccStoreFinderAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_4__["OccEndpointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_4__["ConverterService"])); };
OccStoreFinderAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OccStoreFinderAdapter, factory: OccStoreFinderAdapter.ɵfac });
OccStoreFinderAdapter.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_4__["OccEndpointsService"] },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_4__["ConverterService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OccStoreFinderAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_4__["OccEndpointsService"] }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_4__["ConverterService"] }]; }, null); })();

const defaultOccStoreFinderConfig = {
    backend: {
        occ: {
            endpoints: {
                store: 'stores/${storeId}?fields=FULL',
                stores: 'stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)',
                storescounts: 'stores/storescounts',
            },
        },
    },
};

class StoreFinderOccModule {
}
StoreFinderOccModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StoreFinderOccModule });
StoreFinderOccModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StoreFinderOccModule_Factory(t) { return new (t || StoreFinderOccModule)(); }, providers: [
        Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_4__["provideDefaultConfig"])(defaultOccStoreFinderConfig),
        { provide: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_3__["StoreFinderAdapter"], useClass: OccStoreFinderAdapter },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StoreFinderOccModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [
                    Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_4__["provideDefaultConfig"])(defaultOccStoreFinderConfig),
                    { provide: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_3__["StoreFinderAdapter"], useClass: OccStoreFinderAdapter },
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=spartacus-storefinder-occ.js.map

/***/ }),

/***/ "lUe6":
/*!********************************************************************************************!*\
  !*** ./node_modules/@spartacus/storefinder/__ivy_ngcc__/fesm2015/spartacus-storefinder.js ***!
  \********************************************************************************************/
/*! exports provided: StoreFinderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderModule", function() { return StoreFinderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/storefinder/core */ "7t/O");
/* harmony import */ var _spartacus_storefinder_occ__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/storefinder/occ */ "OHD3");
/* harmony import */ var _spartacus_storefinder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/storefinder/components */ "w47A");






class StoreFinderModule {
}
StoreFinderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreFinderModule });
StoreFinderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreFinderModule_Factory(t) { return new (t || StoreFinderModule)(); }, imports: [[
            _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderCoreModule"],
            _spartacus_storefinder_occ__WEBPACK_IMPORTED_MODULE_2__["StoreFinderOccModule"],
            _spartacus_storefinder_components__WEBPACK_IMPORTED_MODULE_3__["StoreFinderComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreFinderModule, { imports: function () { return [_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderCoreModule"],
        _spartacus_storefinder_occ__WEBPACK_IMPORTED_MODULE_2__["StoreFinderOccModule"],
        _spartacus_storefinder_components__WEBPACK_IMPORTED_MODULE_3__["StoreFinderComponentsModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderCoreModule"],
                    _spartacus_storefinder_occ__WEBPACK_IMPORTED_MODULE_2__["StoreFinderOccModule"],
                    _spartacus_storefinder_components__WEBPACK_IMPORTED_MODULE_3__["StoreFinderComponentsModule"],
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of storefinder
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=spartacus-storefinder.js.map

/***/ }),

/***/ "w47A":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@spartacus/storefinder/__ivy_ngcc__/fesm2015/spartacus-storefinder-components.js ***!
  \*******************************************************************************************************/
/*! exports provided: AbstractStoreItemComponent, ScheduleComponent, StoreFinderComponent, StoreFinderComponentsModule, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractStoreItemComponent", function() { return AbstractStoreItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderComponent", function() { return StoreFinderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderComponentsModule", function() { return StoreFinderComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderGridComponent", function() { return StoreFinderGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderHeaderComponent", function() { return StoreFinderHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderListComponent", function() { return StoreFinderListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderListItemComponent", function() { return StoreFinderListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderMapComponent", function() { return StoreFinderMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderPaginationDetailsComponent", function() { return StoreFinderPaginationDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderSearchComponent", function() { return StoreFinderSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderSearchResultComponent", function() { return StoreFinderSearchResultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderStoreComponent", function() { return StoreFinderStoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderStoreDescriptionComponent", function() { return StoreFinderStoreDescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFinderStoresCountComponent", function() { return StoreFinderStoresCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/storefinder/core */ "7t/O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @spartacus/storefront */ "52YI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @spartacus/core */ "oPwp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









// tslint:disable:directive-class-suffix









function ScheduleComponent_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.getStoreOpeningTime(day_r2), " - ", ctx_r3.getStoreClosingTime(day_r2), " ");
} }
function ScheduleComponent_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "storeFinder.closed"), " ");
} }
function ScheduleComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "cxDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScheduleComponent_div_1_div_1_div_4_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScheduleComponent_div_1_div_1_div_5_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, day_r2, "EEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getStoreOpeningTime(day_r2) !== "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getStoreOpeningTime(day_r2) === "closed");
} }
function ScheduleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScheduleComponent_div_1_div_1_Template, 6, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayDays);
} }
const _c0 = ["*"];
function StoreFinderGridComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-store-finder-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", location_r5);
} }
function StoreFinderGridComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderGridComponent_ng_container_0_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const locations_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", locations_r3 == null ? null : locations_r3.stores);
} }
function StoreFinderGridComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoreFinderListItemComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreFinderListItemComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleStoreItemClick(); })("keyup", function StoreFinderListItemComponent_button_5_Template_button_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onKey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.location.displayName || ctx_r0.location.name, " ");
} }
const _c1 = function (a0) { return [a0]; };
function StoreFinderListItemComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.location.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.location.displayName || ctx_r1.location.name);
} }
function StoreFinderListItemComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.location.formattedDistance, " ");
} }
const _c2 = function (a0, a1, a2) { return [a0, a1, a2]; };
function StoreFinderListItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreFinderListItemComponent_div_7_div_4_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.location.address.line1, " ", ctx_r2.location.address.line2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getFormattedStoreAddress(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c2, ctx_r2.location.address.town, ctx_r2.location.address.postalCode, ctx_r2.location.address.country.isocode)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.location.formattedDistance && ctx_r2.displayDistance);
} }
const _c3 = ["mapElement"];
const _c4 = function (a0) { return { count: a0 }; };
const _c5 = ["storeMap"];
function StoreFinderListComponent_ng_container_0_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreFinderListComponent_ng_container_0_div_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.hideStoreDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r5.iconTypes.CARET_LEFT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "storeFinder.clickBack"), " ");
} }
function StoreFinderListComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cx-store-finder-pagination-details", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreFinderListComponent_ng_container_0_div_2_button_4_Template, 4, 4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", ctx_r1.locations.pagination);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDetailsModeVisible);
} }
function StoreFinderListComponent_ng_container_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-store-finder-store-description", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", ctx_r8.storeDetails)("disableMap", true);
} }
const _c6 = function (a0) { return { "cx-selected-item": a0 }; };
function StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cx-store-finder-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("storeItemClick", function StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template_cx_store_finder_list_item_storeItemClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const location_r12 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r14.centerStoreOnMapByIndex($event, location_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "item-" + i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c6, ctx_r11.selectedStoreIndex === i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", location_r12)("locationIndex", i_r13)("displayDistance", ctx_r11.useMylocation)("useClickEvent", true)("listOrderLabel", i_r13 + ctx_r11.locations.pagination.currentPage * ctx_r11.locations.pagination.pageSize + 1);
} }
function StoreFinderListComponent_ng_container_0_div_3_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template, 2, 9, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.locations == null ? null : ctx_r9.locations.stores);
} }
function StoreFinderListComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreFinderListComponent_ng_container_0_div_3_div_2_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderListComponent_ng_container_0_div_3_ol_3_Template, 2, 1, "ol", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cx-store-finder-map", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedStoreItem", function StoreFinderListComponent_ng_container_0_div_3_Template_cx_store_finder_map_selectedStoreItem_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.selectStoreItemList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isDetailsModeVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isDetailsModeVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", ctx_r2.locations.stores);
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "cxTranslate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "storeFinder.listView"), " ");
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-store-finder-store-description", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", ctx_r22.storeDetails)("disableMap", true);
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_4_ol_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cx-store-finder-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("storeItemClick", function StoreFinderListComponent_ng_container_0_div_4_ng_template_4_ol_2_li_1_Template_cx_store_finder_list_item_storeItemClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const location_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r27.centerStoreOnMapByIndex($event, location_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "item-" + i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c6, ctx_r24.selectedStoreIndex === i_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", location_r25)("locationIndex", i_r26)("displayDistance", ctx_r24.useMylocation)("useClickEvent", true)("listOrderLabel", i_r26 + ctx_r24.locations.pagination.currentPage * ctx_r24.locations.pagination.pageSize + 1);
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_4_ol_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFinderListComponent_ng_container_0_div_4_ng_template_4_ol_2_li_1_Template, 2, 9, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.locations == null ? null : ctx_r23.locations.stores);
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFinderListComponent_ng_container_0_div_4_ng_template_4_div_1_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreFinderListComponent_ng_container_0_div_4_ng_template_4_ol_2_Template, 2, 1, "ol", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isDetailsModeVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.isDetailsModeVisible);
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "cxTranslate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "storeFinder.mapView"), " ");
} }
function StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cx-store-finder-map", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedStoreItem", function StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template_cx_store_finder_map_selectedStoreItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.selectStoreItemList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", ctx_r21.selectedStore ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r21.selectedStore) : ctx_r21.locations.stores);
} }
function StoreFinderListComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-tabset", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderListComponent_ng_container_0_div_4_ng_template_3_Template, 2, 3, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreFinderListComponent_ng_container_0_div_4_ng_template_4_Template, 3, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_Template, 2, 3, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template, 3, 3, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoreFinderListComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "storeFinder.noStoreFound"), " ");
} }
function StoreFinderListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreFinderListComponent_ng_container_0_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderListComponent_ng_container_0_div_3_Template, 7, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreFinderListComponent_ng_container_0_div_4_Template, 8, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoreFinderListComponent_ng_container_0_div_5_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.locations == null ? null : ctx_r0.locations.pagination);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.locations == null ? null : ctx_r0.locations.stores);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.locations == null ? null : ctx_r0.locations.stores);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.locations == null ? null : ctx_r0.locations.stores));
} }
function StoreFinderSearchResultComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cx-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewPageEvent", function StoreFinderSearchResultComponent_div_0_div_1_Template_cx_pagination_viewPageEvent_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.viewPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locations_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", locations_r3.pagination);
} }
function StoreFinderSearchResultComponent_div_0_cx_store_finder_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cx-store-finder-list", 7);
} if (rf & 2) {
    const locations_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", locations_r3)("useMylocation", ctx_r5.useMyLocation);
} }
function StoreFinderSearchResultComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "storeFinder.noStoresMessage"));
} }
function StoreFinderSearchResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFinderSearchResultComponent_div_0_div_1_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreFinderSearchResultComponent_div_0_cx_store_finder_list_2_Template, 1, 2, "cx-store-finder-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderSearchResultComponent_div_0_div_3_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locations_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", locations_r3 == null ? null : locations_r3.stores.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", locations_r3 == null ? null : locations_r3.stores.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(locations_r3 == null ? null : locations_r3.stores.length));
} }
function StoreFinderSearchResultComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c7 = function () { return ["/store-finder/find"]; };
const _c8 = function (a0) { return { query: a0 }; };
const _c9 = function (a0) { return { "disabled-action": a0 }; };
const _c10 = function () { return ["/store-finder/view-all"]; };
function StoreFinderStoreDescriptionComponent_ng_container_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.location.address.line1, " ", ctx_r1.location.address.line2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getFormattedStoreAddress(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c2, ctx_r1.location.address.town, ctx_r1.location.address.postalCode, ctx_r1.location.address.country.isocode)), " ");
} }
function StoreFinderStoreDescriptionComponent_ng_container_0_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "storeFinder.call"), " ", ctx_r2.location.address == null ? null : ctx_r2.location.address.phone, " ");
} }
function StoreFinderStoreDescriptionComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cx-schedule", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", ctx_r3.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "storeFinder.storeHours"));
} }
function StoreFinderStoreDescriptionComponent_ng_container_0_div_15_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r7.value);
} }
function StoreFinderStoreDescriptionComponent_ng_container_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoreFinderStoreDescriptionComponent_ng_container_0_div_15_div_7_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "storeFinder.storeFeatures"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.location.features == null ? null : ctx_r4.location.features.entry);
} }
function StoreFinderStoreDescriptionComponent_ng_container_0_article_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-store-finder-map", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r5.location));
} }
function StoreFinderStoreDescriptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoreFinderStoreDescriptionComponent_ng_container_0_p_6_Template, 4, 7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StoreFinderStoreDescriptionComponent_ng_container_0_li_13_Template, 3, 4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StoreFinderStoreDescriptionComponent_ng_container_0_div_14_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StoreFinderStoreDescriptionComponent_ng_container_0_div_15_Template, 8, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StoreFinderStoreDescriptionComponent_ng_container_0_article_17_Template, 2, 3, "article", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location.displayName || ctx_r0.location.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.location.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.getDirections(ctx_r0.location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "storeFinder.getDirections"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.location.address == null ? null : ctx_r0.location.address.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.location.openingHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx_r0.location.features) != "{}");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.disableMap);
} }
function StoreFinderStoresCountComponent_ng_container_0_div_2_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (country_r7 == null ? null : country_r7.storeCountDataList) ? "country-header" : "country-header-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", country_r7.count, ")");
} }
const _c11 = function (a1) { return ["../country", a1]; };
function StoreFinderStoresCountComponent_ng_container_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoreFinderStoresCountComponent_ng_container_0_div_2_div_1_span_5_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c11, country_r7.isoCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (country_r7 == null ? null : country_r7.storeCountDataList) ? "country-header" : "country-header-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(country_r7 == null ? null : country_r7.storeCountDataList));
} }
function StoreFinderStoresCountComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFinderStoresCountComponent_ng_container_0_div_2_div_1_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locations_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", locations_r3);
} }
function StoreFinderStoresCountComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "storeFinder.noStoresMessage"));
} }
function StoreFinderStoresCountComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreFinderStoresCountComponent_ng_container_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderStoresCountComponent_ng_container_0_div_3_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const locations_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", locations_r3 == null ? null : locations_r3.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(locations_r3 == null ? null : locations_r3.length));
} }
function StoreFinderStoresCountComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoreFinderStoreComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreFinderStoreComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cx-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "cxTranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "cx-store-finder-store-description", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.iconTypes.CARET_LEFT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "storeFinder.backToList"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableMap", ctx_r0.disableMap)("location", location_r3);
} }
function StoreFinderStoreComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AbstractStoreItemComponent {
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
    }
    getDirections(location) {
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        const latitude = this.storeDataService.getStoreLatitude(location);
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    getFormattedStoreAddress(addressParts) {
        return addressParts.filter(Boolean).join(', ');
    }
}
AbstractStoreItemComponent.ɵfac = function AbstractStoreItemComponent_Factory(t) { return new (t || AbstractStoreItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"])); };
AbstractStoreItemComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractStoreItemComponent, inputs: { location: "location" } });
AbstractStoreItemComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }
];
AbstractStoreItemComponent.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractStoreItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }]; }, { location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const WEEK_DAYS_NUMBER = 7;
class ScheduleComponent {
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    ngOnChanges(changes) {
        if (changes.location && this.location) {
            const initialDate = this.getInitialDate();
            this.displayDays = [];
            for (let i = 0; i < WEEK_DAYS_NUMBER; i++) {
                const date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    }
    /**
     * Returns the store's opening time for the given date
     * @param date date
     */
    getStoreOpeningTime(date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    }
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    getStoreClosingTime(date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    }
    /**
     * return initial (first) date to be displayed in the schedule
     */
    getInitialDate() {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    }
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"])); };
ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleComponent, selectors: [["cx-schedule"]], inputs: { location: "location" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["class", "container cx-store-hours", 4, "ngIf"], [1, "container", "cx-store-hours"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "cx-days", "col-4"], ["class", "cx-hours col-8", 4, "ngIf"], ["class", "cx-hours col-8 closed", 4, "ngIf"], [1, "cx-hours", "col-8"], [1, "cx-hours", "col-8", "closed"]], template: function ScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScheduleComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location.openingHours);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["CxDatePipe"], _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
ScheduleComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }
];
ScheduleComponent.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-schedule',
                template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }]; }, { location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StoreFinderGridComponent {
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
    }
    ngOnInit() {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
        }
    }
    ngOnDestroy() { }
}
StoreFinderGridComponent.ɵfac = function StoreFinderGridComponent_Factory(t) { return new (t || StoreFinderGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
StoreFinderGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderGridComponent, selectors: [["cx-store-finder-grid"]], decls: 5, vars: 6, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "container"], [1, "row"], ["class", "col-sm-4 col-md-4 col-lg-3 item", 4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-md-4", "col-lg-3", "item"], [3, "location"], [1, "cx-spinner"]], template: function StoreFinderGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreFinderGridComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderGridComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.isLoading$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.locations$))("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], StoreFinderListItemComponent, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]]; }, encapsulation: 2 });
StoreFinderGridComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-grid',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();

class StoreFinderHeaderComponent {
}
StoreFinderHeaderComponent.ɵfac = function StoreFinderHeaderComponent_Factory(t) { return new (t || StoreFinderHeaderComponent)(); };
StoreFinderHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderHeaderComponent, selectors: [["cx-store-finder-header"]], decls: 2, vars: 0, template: function StoreFinderHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cx-store-finder-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: function () { return [StoreFinderSearchComponent]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-header',
                template: "<ng-container>\n  <cx-store-finder-search></cx-store-finder-search>\n</ng-container>\n"
            }]
    }], null, null); })();

class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.locationIndex = null;
        this.storeItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.handleStoreItemClick();
        }
    }
}
StoreFinderListItemComponent.ɵfac = function StoreFinderListItemComponent_Factory(t) { return new (t || StoreFinderListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"])); };
StoreFinderListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderListItemComponent, selectors: [["cx-store-finder-list-item"]], inputs: { locationIndex: "locationIndex", listOrderLabel: "listOrderLabel", displayDistance: "displayDistance", useClickEvent: "useClickEvent" }, outputs: { storeItemClick: "storeItemClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 8, consts: [[1, "cx-store-list-order"], [1, "cx-store-name"], [3, "click", "keyup", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], ["class", "cx-store-address", 4, "ngIf"], ["target", "_blank", 1, "btn", "btn-sm", "btn-action", "btn-block", "cx-button", 3, "href", "click"], [3, "click", "keyup"], [3, "routerLink"], [1, "cx-store-address"], [1, "cx-store-address-street"], ["class", "cx-store-distance", 4, "ngIf"], [1, "cx-store-distance"]], template: function StoreFinderListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoreFinderListItemComponent_button_5_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoreFinderListItemComponent_a_6_Template, 2, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoreFinderListItemComponent_div_7_Template, 5, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreFinderListItemComponent_Template_a_click_8_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "cxTranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.listOrderLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.useClickEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.useClickEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.getDirections(ctx.location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "storeFinder.getDirections"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
StoreFinderListItemComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }
];
StoreFinderListItemComponent.propDecorators = {
    locationIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOrderLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useClickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    storeItemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-list-item',
                template: "<ng-container>\n  <div>\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      <button\n        *ngIf=\"useClickEvent\"\n        (click)=\"handleStoreItemClick()\"\n        (keyup)=\"onKey($event)\"\n      >\n        {{ location.displayName || location.name }}\n      </button>\n      <a *ngIf=\"!useClickEvent\" [routerLink]=\"[location.name]\">{{\n        location.displayName || location.name\n      }}</a>\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }]; }, { locationIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], storeItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], listOrderLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StoreFinderMapComponent {
    constructor(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            this.renderMap();
        }
    }
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    }
    renderMap() {
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (markerIndex) => {
            this.selectStoreItemClickHandle(markerIndex);
        });
    }
    selectStoreItemClickHandle(markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    }
}
StoreFinderMapComponent.ɵfac = function StoreFinderMapComponent_Factory(t) { return new (t || StoreFinderMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapRendererService"])); };
StoreFinderMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderMapComponent, selectors: [["cx-store-finder-map"]], viewQuery: function StoreFinderMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, inputs: { locations: "locations" }, outputs: { selectedStoreItem: "selectedStoreItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "cx-store-map"], ["mapElement", ""]], template: function StoreFinderMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StoreFinderMapComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapRendererService"] }
];
StoreFinderMapComponent.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mapElement', { static: true },] }],
    locations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedStoreItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-map',
                template: "<div #mapElement class=\"cx-store-map\"></div>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapRendererService"] }]; }, { selectedStoreItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapElement', { static: true }]
        }], locations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StoreFinderPaginationDetailsComponent {
    constructor() { }
    getResultsPerPage() {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            let resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return `${firstItem} - ${resultsPerPage}`;
        }
        else {
            return `1 - ${this.pagination.totalResults}`;
        }
    }
}
StoreFinderPaginationDetailsComponent.ɵfac = function StoreFinderPaginationDetailsComponent_Factory(t) { return new (t || StoreFinderPaginationDetailsComponent)(); };
StoreFinderPaginationDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderPaginationDetailsComponent, selectors: [["cx-store-finder-pagination-details"]], inputs: { pagination: "pagination" }, decls: 3, vars: 7, consts: [[1, "cx-pagination-details"]], template: function StoreFinderPaginationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "cxTranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.getResultsPerPage(), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "storeFinder.fromStoresFound", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx.pagination.totalResults)), "\n");
    } }, pipes: [_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
StoreFinderPaginationDetailsComponent.ctorParameters = () => [];
StoreFinderPaginationDetailsComponent.propDecorators = {
    pagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderPaginationDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-pagination-details',
                template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
            }]
    }], function () { return []; }, { pagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StoreFinderListComponent {
    constructor(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.iconTypes = _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["ICON_TYPE"];
        this.isDetailsModeVisible = false;
    }
    centerStoreOnMapByIndex(index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    selectStoreItemList(index) {
        this.selectedStoreIndex = index;
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
    showStoreDetails(location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    }
    hideStoreDetails() {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    }
}
StoreFinderListComponent.ɵfac = function StoreFinderListComponent_Factory(t) { return new (t || StoreFinderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
StoreFinderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderListComponent, selectors: [["cx-store-finder-list"]], viewQuery: function StoreFinderListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.storeMap = _t.first);
    } }, inputs: { locations: "locations", useMylocation: "useMylocation" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "container", "mb-2"], ["class", "row", 4, "ngIf"], ["class", "row cx-columns", 4, "ngIf"], ["class", "cx-columns-mobile", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [3, "pagination"], [1, "col-md-2", "text-left", "cx-back-wrapper"], ["class", "btn btn-block btn-action", 3, "click", 4, "ngIf"], [1, "btn", "btn-block", "btn-action", 3, "click"], [3, "type"], [1, "row", "cx-columns"], [1, "col-md-4", "cx-address-col"], ["class", "cx-store-details", 4, "ngIf"], ["class", "cx-list", 4, "ngIf"], [1, "col-md-8", "cx-map-col"], [3, "locations", "selectedStoreItem"], ["storeMap", ""], [1, "cx-store-details"], [3, "location", "disableMap"], [1, "cx-list"], ["class", "cx-list-items", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "cx-list-items", 3, "id", "ngClass"], [3, "location", "locationIndex", "displayDistance", "useClickEvent", "listOrderLabel", "storeItemClick"], [1, "cx-columns-mobile"], ["justify", "center"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "cx-address-col"], [1, "cx-map-col"], [1, "col-md-12", "cx-not-found"]], template: function StoreFinderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreFinderListComponent_ng_container_0_Template, 6, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.locations);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], StoreFinderPaginationDetailsComponent, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], StoreFinderMapComponent, StoreFinderStoreDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], StoreFinderListItemComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"]]; }, pipes: function () { return [_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]]; }, encapsulation: 2 });
StoreFinderListComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
StoreFinderListComponent.propDecorators = {
    locations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useMylocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    storeMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['storeMap',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-list',
                template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.clickBack' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              [useClickEvent]=\"true\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    [useClickEvent]=\"true\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, { locations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useMylocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], storeMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['storeMap']
        }] }); })();

class StoreFinderSearchResultComponent {
    constructor(storeFinderService, route, config) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.config = config;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe((params) => this.initialize(params));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    viewPage(pageNumber) {
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
    }
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: 0 });
        this.radius = this.config.googleMaps.radius;
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    }
    parseParameters(queryParams) {
        let searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    }
}
StoreFinderSearchResultComponent.ɵfac = function StoreFinderSearchResultComponent_Factory(t) { return new (t || StoreFinderSearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderConfig"])); };
StoreFinderSearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderSearchResultComponent, selectors: [["cx-store-finder-search-result"]], decls: 5, vars: 6, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], [3, "locations", "useMylocation", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "cx-pagination"], [3, "pagination", "viewPageEvent"], [3, "locations", "useMylocation"], [1, "container"], [1, "row"], [1, "cx-no-stores"], [1, "cx-spinner"]], template: function StoreFinderSearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreFinderSearchResultComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderSearchResultComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.isLoading$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.locations$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"], StoreFinderListComponent, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderConfig"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderSearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-search-result',
                template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderConfig"] }]; }, null); })();

class StoreFinderSearchComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.searchBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.iconTypes = _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["ICON_TYPE"];
    }
    findStores(address) {
        this.routingService.go(['store-finder/find'], { query: address });
    }
    viewStoresWithMyLoc() {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    }
    onKey(event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
}
StoreFinderSearchComponent.ɵfac = function StoreFinderSearchComponent_Factory(t) { return new (t || StoreFinderSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["RoutingService"])); };
StoreFinderSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderSearchComponent, selectors: [["cx-store-finder-search"]], decls: 18, vars: 21, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "col-lg-7"], [1, "form-group", "search-wrapper"], ["type", "text", 1, "form-control", 3, "formControl", "placeholder", "keyup"], ["queryInput", ""], ["aria-label", "search", 1, "search", 3, "type", "routerLink", "queryParams", "ngClass", "keyup"], [1, "col-md-12", "col-lg-5"], [1, "row", "cx-search-links", "mb-3"], [1, "col-6"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "btn", "btn-primary", "btn-block", 3, "routerLink"]], template: function StoreFinderSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StoreFinderSearchComponent_Template_input_keyup_4_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "cxTranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cx-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StoreFinderSearchComponent_Template_cx_icon_keyup_7_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreFinderSearchComponent_Template_button_click_11_listener() { return ctx.viewStoresWithMyLoc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "cxTranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "cxTranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "storeFinder.searchBox"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.iconTypes.SEARCH)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c8, _r0.value))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c9, !(_r0.value && _r0.value.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "storeFinder.useMyLocation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "storeFinder.viewAllStores"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
StoreFinderSearchComponent.ctorParameters = () => [
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["RoutingService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-search',
                template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          (keyup)=\"onKey($event)\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }]
    }], function () { return [{ type: _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["RoutingService"] }]; }, null); })();

class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
    }
}
StoreFinderStoreDescriptionComponent.ɵfac = function StoreFinderStoreDescriptionComponent_Factory(t) { return new (t || StoreFinderStoreDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"])); };
StoreFinderStoreDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderStoreDescriptionComponent, selectors: [["cx-store-finder-store-description"]], inputs: { location: "location", disableMap: "disableMap" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "container"], [1, "row"], [1, "cx-store", "col-md-4"], ["class", "cx-store-description-address", 4, "ngIf"], [1, "cx-contact"], [1, "cx-list"], [1, "cx-item"], ["target", "_blank", 1, "cx-link", 3, "href"], ["class", "cx-item", 4, "ngIf"], ["class", "cx-schedule", 4, "ngIf"], ["class", "cx-features", 4, "ngIf"], ["class", "cx-storeMap col-lg-8", 4, "ngIf"], [1, "cx-store-description-address"], [1, "cx-schedule"], [3, "location"], [1, "cx-features"], [1, "col-lg-12"], [1, "cx-features-header"], ["class", "col-lg-12 cx-feature-item", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "cx-feature-item"], [1, "cx-feature-value"], [1, "cx-storeMap", "col-lg-8"], [3, "locations"]], template: function StoreFinderStoreDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreFinderStoreDescriptionComponent_ng_container_0_Template, 18, 12, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ScheduleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], StoreFinderMapComponent], pipes: [_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], encapsulation: 2 });
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }
];
StoreFinderStoreDescriptionComponent.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderStoreDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-store-description',
                template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreDataService"] }]; }, { location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StoreFinderStoresCountComponent {
    constructor(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    ngOnInit() {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    }
}
StoreFinderStoresCountComponent.ɵfac = function StoreFinderStoresCountComponent_Factory(t) { return new (t || StoreFinderStoresCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"])); };
StoreFinderStoresCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderStoresCountComponent, selectors: [["cx-store-finder-stores-count"]], decls: 5, vars: 6, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "cx-count", "container"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3", 4, "ngFor", "ngForOf"], [1, "cx-set", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3"], [1, "btn-link", 3, "routerLink"], [1, "cx-title"], [1, "cx-name", 3, "ngClass"], ["class", "cx-country-count", 3, "ngClass", 4, "ngIf"], [1, "cx-country-count", 3, "ngClass"], [1, "cx-no-stores"], [1, "cx-count-spinner"]], template: function StoreFinderStoresCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreFinderStoresCountComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderStoresCountComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.isLoading$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.locations$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
StoreFinderStoresCountComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderStoresCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-stores-count',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div class=\"row\" *ngIf=\"locations?.length\">\n      <div\n        *ngFor=\"let country of locations\"\n        class=\"cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3\"\n      >\n        <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n          <div class=\"cx-title\">\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              class=\"cx-name\"\n              >{{ country.name }}</span\n            >\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              *ngIf=\"!country?.storeCountDataList\"\n              class=\"cx-country-count\"\n              >({{ country.count }})</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!locations?.length\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] }]; }, null); })();

class StoreFinderComponent {
}
StoreFinderComponent.ɵfac = function StoreFinderComponent_Factory(t) { return new (t || StoreFinderComponent)(); };
StoreFinderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderComponent, selectors: [["cx-store-finder"]], decls: 4, vars: 0, consts: [[1, "cx-store-finder-wrapper"]], template: function StoreFinderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cx-store-finder-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [StoreFinderHeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder',
                template: "<ng-container>\n  <div class=\"cx-store-finder-wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n"
            }]
    }], null, null); })();

class StoreFinderStoreComponent {
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["ICON_TYPE"];
    }
    ngOnInit() {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    }
    requestStoresData() {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    }
    goBack() {
        this.routingService.go([
            `store-finder/country/${this.route.snapshot.params.country}`,
        ]);
    }
}
StoreFinderStoreComponent.ɵfac = function StoreFinderStoreComponent_Factory(t) { return new (t || StoreFinderStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["RoutingService"])); };
StoreFinderStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFinderStoreComponent, selectors: [["cx-store-finder-store"]], inputs: { location: "location", disableMap: "disableMap" }, decls: 5, vars: 6, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "container"], [1, "row", "cx-store-actions"], [1, "col-md-4", "col-sm-6", "col-lg-2"], [1, "btn", "btn-block", "btn-action", 3, "click"], [3, "type"], [1, "row"], [1, "col-12", "p-0"], [3, "disableMap", "location"], [1, "cx-spinner"]], template: function StoreFinderStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreFinderStoreComponent_div_0_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFinderStoreComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.isLoading$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.location$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], StoreFinderStoreDescriptionComponent, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
StoreFinderStoreComponent.ctorParameters = () => [
    { type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["RoutingService"] }
];
StoreFinderStoreComponent.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cx-store-finder-store',
                template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }]
    }], function () { return [{ type: _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["RoutingService"] }]; }, { location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class StoreFinderComponentsModule {
}
StoreFinderComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreFinderComponentsModule });
StoreFinderComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreFinderComponentsModule_Factory(t) { return new (t || StoreFinderComponentsModule)(); }, providers: [
        Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["provideDefaultConfig"])({
            cmsComponents: {
                StoreFinderComponent: {
                    component: StoreFinderComponent,
                    childRoutes: [
                        {
                            path: 'find',
                            component: StoreFinderSearchResultComponent
                        },
                        {
                            path: 'view-all',
                            component: StoreFinderStoresCountComponent
                        },
                        {
                            path: 'country/:country',
                            component: StoreFinderGridComponent
                        },
                        {
                            path: 'country/:country/region/:region',
                            component: StoreFinderGridComponent
                        },
                        {
                            path: 'country/:country/region/:region/:store',
                            component: StoreFinderStoreComponent
                        },
                        {
                            path: 'country/:country/:store',
                            component: StoreFinderStoreComponent
                        },
                    ]
                }
            }
        }),
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["ListNavigationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"],
            _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerModule"],
            _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["UrlModule"],
            _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderCoreModule"],
            _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["I18nModule"],
            _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreFinderComponentsModule, { declarations: function () { return [StoreFinderSearchComponent, StoreFinderListComponent, StoreFinderMapComponent, StoreFinderListItemComponent, StoreFinderStoresCountComponent, StoreFinderGridComponent, StoreFinderStoreDescriptionComponent, ScheduleComponent, StoreFinderHeaderComponent, StoreFinderSearchResultComponent, StoreFinderComponent, StoreFinderPaginationDetailsComponent, StoreFinderStoreComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["ListNavigationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"],
        _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerModule"],
        _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["UrlModule"],
        _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderCoreModule"],
        _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["I18nModule"],
        _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["IconModule"]]; }, exports: function () { return [ScheduleComponent, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderListComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StoreFinderStoreComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFinderComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["ListNavigationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"],
                    _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["SpinnerModule"],
                    _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["UrlModule"],
                    _spartacus_storefinder_core__WEBPACK_IMPORTED_MODULE_1__["StoreFinderCoreModule"],
                    _spartacus_core__WEBPACK_IMPORTED_MODULE_6__["I18nModule"],
                    _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
                ],
                providers: [
                    Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_6__["provideDefaultConfig"])({
                        cmsComponents: {
                            StoreFinderComponent: {
                                component: StoreFinderComponent,
                                childRoutes: [
                                    {
                                        path: 'find',
                                        component: StoreFinderSearchResultComponent
                                    },
                                    {
                                        path: 'view-all',
                                        component: StoreFinderStoresCountComponent
                                    },
                                    {
                                        path: 'country/:country',
                                        component: StoreFinderGridComponent
                                    },
                                    {
                                        path: 'country/:country/region/:region',
                                        component: StoreFinderGridComponent
                                    },
                                    {
                                        path: 'country/:country/region/:region/:store',
                                        component: StoreFinderStoreComponent
                                    },
                                    {
                                        path: 'country/:country/:store',
                                        component: StoreFinderStoreComponent
                                    },
                                ]
                            }
                        }
                    }),
                ],
                declarations: [
                    StoreFinderSearchComponent,
                    StoreFinderListComponent,
                    StoreFinderMapComponent,
                    StoreFinderListItemComponent,
                    StoreFinderStoresCountComponent,
                    StoreFinderGridComponent,
                    StoreFinderStoreDescriptionComponent,
                    ScheduleComponent,
                    StoreFinderHeaderComponent,
                    StoreFinderSearchResultComponent,
                    StoreFinderComponent,
                    StoreFinderPaginationDetailsComponent,
                    StoreFinderStoreComponent,
                ],
                exports: [
                    ScheduleComponent,
                    StoreFinderComponent,
                    StoreFinderGridComponent,
                    StoreFinderHeaderComponent,
                    StoreFinderListItemComponent,
                    StoreFinderMapComponent,
                    StoreFinderPaginationDetailsComponent,
                    StoreFinderSearchComponent,
                    StoreFinderSearchResultComponent,
                    StoreFinderListComponent,
                    StoreFinderStoreDescriptionComponent,
                    StoreFinderStoresCountComponent,
                    StoreFinderStoreComponent,
                ],
                entryComponents: [
                    StoreFinderComponent,
                    StoreFinderSearchResultComponent,
                    StoreFinderStoresCountComponent,
                    StoreFinderGridComponent,
                    StoreFinderStoreComponent,
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=spartacus-storefinder-components.js.map

/***/ })

}]);
//# sourceMappingURL=spartacus-storefinder.js.map