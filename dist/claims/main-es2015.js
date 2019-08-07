(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"left-sidebar\"></div>\n  <div class=\"fnol-form\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"right-sidebar\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/claim-status/claim-status.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/claim-status/claim-status.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <app-progress-bar [claimsCounts]=\"claimsCounts\"></app-progress-bar>\n</div>\n\n<div class=\"fnol-form__section\">\n  <h2 class=\"fnol-form__title\">Your claim status</h2>\n\n  <p>If you're looking to make a claim you can <a [routerLink]=\"['/make-a-claim']\">make a claim here</a>.</p>\n\n  <dlg-field [config]=\"formData.emailAddress\" [formGroup]=\"form\">\n    <dlg-input></dlg-input>\n  </dlg-field>\n\n  <button dlg-button (click)=\"findClaims()\" [disabled]=\"!validEmail()\">Find my claims</button>\n</div>\n\n<ng-container *ngIf=\"claimsFound()\">\n  <p>Your claim history is listed below, most recent first</p>\n  \n  <table class=\"fnol-form__item-table zebra\">\n    <tr>\n      <th class=\"fnol-form__list-heading\">Policy number</th>\n      <th class=\"fnol-form__list-heading\">Claim description</th>\n      <th class=\"fnol-form__list-heading\">Current status</th>\n    </tr>\n    <tr *ngFor=\"let claim of claims\">\n      <td class=\"fnol-form__list-item\">{{ claim.policyNumber }}</td>\n      <td class=\"fnol-form__list-item\">{{ claim.whatHappened | slice:0:20 }}...</td>\n      <td class=\"fnol-form__list-item bold\" *ngIf=\"claim.status\">{{ claim.status }}</td>\n      <td class=\"fnol-form__list-item bold\" *ngIf=\"!claim.status\">Logged</td>\n    </tr>\n  </table>\n</ng-container>\n\n<ng-container *ngIf=\"!claimsExist\">\n  <p>We haven't found any claims for email address <span class=\"bold\">{{ form.get('emailAddress').value }}</span>. You might have used a different email address when you made the claim. If you haven't made a claim yet, please <a [routerLink]=\"['/make-a-claim']\">make a claim here</a> or contact us</p>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fnol/claim-details/claim-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fnol/claim-details/claim-details.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fnol-form__section\">\n  <h2 class=\"fnol-form__title\">Claim Details</h2>\n\n  <dlg-field [config]=\"formData.damage\" [formGroup]=\"form\">\n    <dlg-radio></dlg-radio>\n  </dlg-field>\n\n  <div class=\"fnol-form__items\" *ngIf=\"showDamagedItems\">\n    <h3 class=\"fnol-form__subtitle\">Damaged Items</h3>\n\n    <dlg-field [config]=\"formData.itemType\" [formGroup]=\"form\">\n      <dlg-input></dlg-input>\n    </dlg-field>\n  \n    <dlg-field [config]=\"formData.itemMakeModel\" [formGroup]=\"form\">\n      <dlg-input></dlg-input>\n    </dlg-field>\n  \n    <dlg-field [config]=\"formData.itemPrice\" [formGroup]=\"form\">\n      <dlg-input></dlg-input>\n    </dlg-field>\n\n    <div class=\"dlg-field__error item-list\" *ngIf=\"damagedItemList && damagedItemList.length == 0\">\n      As you have selected \"Contents\" / \"Both\", please add at least one item\n    </div>\n\n    <button dlg-button (click)=\"addItem()\" theme=\"primary\" size=\"toolbar\" [disabled]=\"disableAddItem\">Add Item</button>\n\n    <table class=\"fnol-form__item-table\" *ngIf=\"damagedItemList && damagedItemList.length > 0\">\n      <thead>\n        <th class=\"fnol-form__list-heading\">Item</th>\n        <th class=\"fnol-form__list-heading\">Make/Model</th>\n        <th class=\"fnol-form__list-heading\">Price</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of damagedItemList; let i = index\">\n          <td class=\"fnol-form__list-item\">{{ item.type }}</td>\n          <td class=\"fnol-form__list-item\">{{ item.make }}</td>\n          <td class=\"fnol-form__list-item\">{{ item.price }}</td>\n          <td class=\"fnol-form__list-button\">\n            <button dlg-button (click)=\"removeItem(i, 'damagedItemList')\" theme=\"primary\" size=\"toolbar\">\n              <img src=\"../../assets/images/delete.png\" alt=\"Personal Details\">\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <h3 class=\"fnol-form__subtitle\">Supporting Documents</h3>\n  <div class=\"dlg-hint__text\">{{ formData.fileUploads.hint.text }}</div>\n\n  <dlg-field [config]=\"formData.fileUploads\" [formGroup]=\"form\" class=\"fnol-form__uploads\">\n    <input type=\"file\" [id]=\"formData.fileUploads.name\" [formControlName]=\"formData.fileUploads.name\" class=\"dlg-file-upload\" (change)=\"onFileUpload($event)\">\n  </dlg-field>\n\n  <table class=\"fnol-form__item-table\" *ngIf=\"fileUploadList && fileUploadList.length > 0\">\n    <thead>\n      <th class=\"fnol-form__list-heading\">File name</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of fileUploadList; let i = index\">\n        <td class=\"fnol-form__list-item\">{{ item }}</td>\n        <td class=\"fnol-form__list-button\">\n          <button dlg-button (click)=\"removeItem(i, 'fileUploadList')\" theme=\"primary\" size=\"toolbar\">\n            <img src=\"../../assets/images/delete.png\" alt=\"Personal Details\">\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- {{ formData.fileUploads | json }} -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fnol/claim-overview/claim-overview.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fnol/claim-overview/claim-overview.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fnol-form__section\">\n  <h2 class=\"fnol-form__title\">Your Claim</h2>\n\n  <dlg-field [config]=\"formData.incidentDate\" [formGroup]=\"form\">\n    <dlg-datepicker type=\"select\" [format]=\"formData.incidentDate.format\" ></dlg-datepicker>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.whatHappened\" [formGroup]=\"form\">\n    <textarea [placeholder]=\"formData.whatHappened.placeholder\" [id]=\"formData.whatHappened.name\" [formControlName]=\"formData.whatHappened.name\" class=\"dlg-textarea\"></textarea>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.claimLocation\" [formGroup]=\"form\">\n    <dlg-radio></dlg-radio>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.occupied\" [formGroup]=\"form\" *ngIf=\"showOccupied\">\n    <dlg-radio></dlg-radio>\n  </dlg-field>\n\n  <!-- {{ formData | json }} -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fnol/confirmation/confirmation.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fnol/confirmation/confirmation.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fnol-form__section\">\n  <h2 class=\"fnol-form__title\">Confirmation</h2>\n\n  <dlg-field [config]=\"formData.callbackSlot\" [formGroup]=\"form\">\n    <dlg-radio></dlg-radio>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.convictions\" [formGroup]=\"form\">\n    <dlg-radio></dlg-radio>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.awareExcess\" [formGroup]=\"form\">\n    <dlg-checkboxes></dlg-checkboxes>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.termsConditions\" [formGroup]=\"form\">\n    <dlg-checkboxes></dlg-checkboxes>\n  </dlg-field>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fnol/fnol.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fnol/fnol.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <app-progress-bar></app-progress-bar>\n</div>\n<h2 class=\"fnol-form__subtitle fnol-form__emergency\">For emergencies call us on: <strong>0123456789</strong></h2>\n<p>Already made a claim? You can <a [routerLink]=\"['/claim-status']\">check its status here</a>.</p>\n<form id=\"fnol-form\" data-di-form-track data-di-form-id=\"fnol-form\" [formGroup]=\"form\">\n  <app-personal-details (validPersonalDetails)='retrievePersonalDetails($event)'></app-personal-details>\n  <app-claim-overview (validClaimOverview)='retrieveClaimOverview($event)'></app-claim-overview>\n  <app-claim-details (validClaimDetails)='retrieveClaimDetails($event)'></app-claim-details>\n  <app-confirmation (validConfirmation)='retrieveConfirmation($event)'></app-confirmation>\n</form>\n<button dlg-button [disabled]=\"!isFormValid()\" (click)=\"submitClaim()\" class=\"fnol-submit\">\n  <span *ngIf=\"!isFormValid()\">Please complete the form</span>\n  <span *ngIf=\"isFormValid()\">Make a claim</span>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fnol/personal-details/personal-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fnol/personal-details/personal-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fnol-form__section\">\n  <h2 class=\"fnol-form__title\">Personal Details</h2>\n\n  <dlg-field [config]=\"formData.fullName\" [formGroup]=\"form\">\n    <dlg-input></dlg-input>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.postCode\" [formGroup]=\"form\" class=\"last-field\">\n    <dlg-input></dlg-input>\n  </dlg-field>\n\n  <button dlg-button [disabled]=\"!isAutofillable()\" (click)=\"getPolicyHolder()\" class=\"fnol-autofill\">Find my details</button>\n\n  <dlg-field [config]=\"formData.phoneNumber\" [formGroup]=\"form\">\n    <dlg-input></dlg-input>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.emailAddress\" [formGroup]=\"form\">\n    <dlg-input></dlg-input>\n  </dlg-field>\n\n  <dlg-field [config]=\"formData.addressLine\" [formGroup]=\"form\">\n    <dlg-input></dlg-input>\n  </dlg-field>\n\n  <h3 class=\"fnol-form__subtitle\" *ngIf=\"policyNumber\">\n    Your policy number: {{ policyNumber }} \n    <span *ngIf=\"excess\"><br>Your excess: £{{ excess }}</span>\n  </h3>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fnol/submit-modal.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fnol/submit-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"fnol-form__subtitle\">{{ data.title }}</h2>\n<p class=\"modal-confirmation__message\">{{ data.message1 }}</p>\n<p class=\"modal-confirmation__message\">{{ data.message2 }}</p>\n<dlg-modal-actions>\n  <button dlg-button (click)=\"onClose()\" class=\"modal-confirmation__button\">\n    {{ data.button }}\n  </button>\n</dlg-modal-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <app-progress-bar></app-progress-bar>\n</div>\n<div class=\"fnol-form__section\">\n  <h2 class=\"fnol-form__title\">Your Claim</h2>\n  <p>To make a claim, simply fill in <a [routerLink]=\"['make-a-claim']\">this online form</a>. After you’ve made your claim, you can <a [routerLink]=\"['claim-status']\">check its status here</a>. We might call you back for more details or to arrange a visit from an assessor.</p>\n  <button dlg-button [routerLink]=\"['make-a-claim']\">Make a claim</button>&nbsp;\n  <button dlg-button [routerLink]=\"['claim-status']\">Claim status</button>\n  <p>You will have the option to upload files or images to support your claim. Please have these saved on your computer or device.</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progress-bar/progress-bar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progress-bar/progress-bar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/images/logo.png\" alt=\"Direct Line\" class=\"progress__logo\" [routerLink]=\"['']\">\n<div class=\"progress__steps\" *ngIf = \"router.url === '/make-a-claim'\">\n  <div class=\"progress__step progress__step1 progress__active-step\">\n    <img src=\"../../assets/images/personal.png\" alt=\"Personal Details\" class=\"progress__step-image\">\n  </div>\n  <div class=\"progress__step progress__step2\">\n    <img src=\"../../assets/images/what.png\" alt=\"What happened\" class=\"progress__step-image\">\n  </div>\n  <div class=\"progress__step progress__step3\">\n    <img src=\"../../assets/images/details.png\" alt=\"Claim details\" class=\"progress__step-image\">\n  </div>\n  <div class=\"progress__step progress__step4\">\n    <img src=\"../../assets/images/confirm.png\" alt=\"Confirmation\" class=\"progress__step-image\">\n  </div>\n</div>\n<div class=\"progress__claim-status\" *ngIf = \"router.url === '/claim-status'\">\n  <ng-container *ngFor=\"let status of claimStatuses\">\n    <div class=\"progress__claim-stage progress__active-stage\">\n      <span *ngIf=\"claimsCounts[status]\" class=\"active-status\">{{ status }}</span>\n      <span *ngIf=\"!claimsCounts[status]\" class=\"inactive-status\">{{ status }}</span>\n      <ng-container *ngIf=\"claimsCounts[status]\">\n        <span class=\"badge\">{{ claimsCounts[status] }}</span>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fnol_fnol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fnol/fnol.component */ "./src/app/fnol/fnol.component.ts");
/* harmony import */ var _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-status/claim-status.component */ "./src/app/claim-status/claim-status.component.ts");






const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'claim-status',
        component: _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_5__["ClaimStatusComponent"]
    },
    {
        path: 'make-a-claim',
        component: _fnol_fnol_component__WEBPACK_IMPORTED_MODULE_4__["FnolComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'claims';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/claim-status/claim-status.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/claim-status/claim-status.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltLXN0YXR1cy9jbGFpbS1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/claim-status/claim-status.component.ts":
/*!********************************************************!*\
  !*** ./src/app/claim-status/claim-status.component.ts ***!
  \********************************************************/
/*! exports provided: ClaimStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimStatusComponent", function() { return ClaimStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var dlg_angular_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dlg-angular-components */ "./node_modules/dlg-angular-components/dist/dlg-walrus/fesm2015/dlg-walrus.js");
/* harmony import */ var _shared_data_claim_statuses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data/claim-statuses */ "./src/app/shared/data/claim-statuses.ts");
/* harmony import */ var _shared_validators_personal_details_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validators/personal-details.validator */ "./src/app/shared/validators/personal-details.validator.ts");
/* harmony import */ var _shared_services_static_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/static-data.service */ "./src/app/shared/services/static-data.service.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _fnol_submit_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fnol/submit-modal.component */ "./src/app/fnol/submit-modal.component.ts");









let ClaimStatusComponent = class ClaimStatusComponent {
    constructor(fb, dataService, storage, modal) {
        this.fb = fb;
        this.dataService = dataService;
        this.storage = storage;
        this.modal = modal;
        this.claimStatuses = _shared_data_claim_statuses__WEBPACK_IMPORTED_MODULE_4__["CLAIMSTATUSES"];
        this.claimsCounts = {};
        this.claimsExist = true;
        this.formData = {
            emailAddress: {
                name: 'emailAddress',
                label: 'Email address',
                placeholder: 'example@abc.com',
                hint: { text: 'Please enter your email address so we can retrieve your claims' },
                validation: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _shared_validators_personal_details_validator__WEBPACK_IMPORTED_MODULE_5__["PersonalDetailsValidator"].ValidEmail
                ],
                validationMessages: {
                    required: 'Please enter your email address',
                    invalidEmail: 'Please enter a valid email address'
                }
            }
        };
    }
    findClaims() {
        this.initialiseClaimsCounts();
        this.dataService.getClaims(this.form.get('emailAddress').value).subscribe(claims => {
            this.claims = claims;
            this.claimsExist = (this.claims && this.claims.length > 0) ? true : false;
            for (const claim of claims) {
                const status = (claim.status) ? claim.status : 'Logged';
                this.claimsCounts[status]++;
            }
        }, error => {
            const confirmationTitle = 'Unable to find your claim.';
            const confirmationMessage1 = `
          Sorry, we could not find your claim. Please try again later.`;
            const confirmationMessage2 = `
          Please contact us if you continue to experience issues.`;
            const modal = this.modal.open(_fnol_submit_modal_component__WEBPACK_IMPORTED_MODULE_8__["SubmitModalComponent"], { title: confirmationTitle,
                message1: confirmationMessage1,
                message2: confirmationMessage2,
                button: 'Try again' });
        });
    }
    claimsFound() {
        return (this.claims && this.claims.length > 0) ? true : false;
    }
    validEmail() {
        return this.form.get('emailAddress').valid;
    }
    initialiseClaimsCounts() {
        for (status of this.claimStatuses) {
            this.claimsCounts[status] = 0;
        }
    }
    ngOnInit() {
        const emailAddress = this.storage.retrieveSectionValues('personalSectionValues').emailAddress ||
            this.dataService.claimEmail;
        this.form = this.fb.group({
            emailAddress: [emailAddress, this.formData.emailAddress.validation],
        });
        if (emailAddress) {
            this.findClaims();
        }
        this.initialiseClaimsCounts();
        this.formSubscription = this.form.valueChanges.subscribe(emailChange => {
            this.claimsExist = true;
            this.claims = [];
            this.claimsCounts = {};
            this.dataService.claimEmail = emailChange.emailAddress;
        });
    }
    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }
};
ClaimStatusComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_static_data_service__WEBPACK_IMPORTED_MODULE_6__["StaticDataService"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: dlg_angular_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }
];
ClaimStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim-status',
        template: __webpack_require__(/*! raw-loader!./claim-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/claim-status/claim-status.component.html"),
        styles: [__webpack_require__(/*! ./claim-status.component.scss */ "./src/app/claim-status/claim-status.component.scss")]
    })
], ClaimStatusComponent);



/***/ }),

/***/ "./src/app/fnol/claim-details/claim-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/fnol/claim-details/claim-details.component.ts ***!
  \***************************************************************/
/*! exports provided: ClaimDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDetailsComponent", function() { return ClaimDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-fields */ "./src/app/fnol/claim-details/form-fields.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/decibel.service */ "./src/app/shared/services/decibel.service.ts");






let ClaimDetailsComponent = class ClaimDetailsComponent {
    constructor(fb, storage, decibel) {
        this.fb = fb;
        this.storage = storage;
        this.decibel = decibel;
        this.validClaimDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formData = _form_fields__WEBPACK_IMPORTED_MODULE_3__["FORMFIELDS"];
        this.sectionName = 'claimDetailSectionValues';
        this.disableAddItem = !this.showDamagedItems;
        this.damagedItemList = JSON.parse(localStorage.getItem('damagedItems')) || [];
        this.fileUploadList = JSON.parse(localStorage.getItem('fileUploads')) || [];
    }
    addItem() {
        if (!this.disableAddItem) {
            this.damagedItemList.push(this.damagedItems);
            localStorage.setItem('damagedItems', JSON.stringify(this.damagedItemList));
            this.form.get('itemType').markAsPristine();
            this.form.get('itemMakeModel').markAsPristine();
            this.form.get('itemPrice').markAsPristine();
            this.form.controls.itemType.setValue('');
            this.form.controls.itemMakeModel.setValue('');
            this.form.controls.itemPrice.setValue('');
        }
    }
    removeItem(index, arrayName) {
        if (arrayName === 'damagedItemList') {
            this.damagedItemList.splice(index, 1);
            localStorage.setItem('damagedItems', JSON.stringify(this.damagedItemList));
        }
        else if (arrayName === 'fileUploadList') {
            this.fileUploadList.splice(index, 1);
            localStorage.setItem('fileUploads', JSON.stringify(this.fileUploadList));
        }
        // Force a form change to re-trigger section validity check
        this.form.controls.itemType.setValue('');
        this.form.get('itemType').markAsPristine();
    }
    onFileUpload(event) {
        const uploadFileName = event.target.files[0].name;
        if (!this.fileUploadList.includes(uploadFileName)) {
            this.fileUploadList.push(uploadFileName);
            localStorage.setItem('fileUploads', JSON.stringify(this.fileUploadList));
        }
    }
    buildForm() {
        this.form = this.fb.group({
            damage: [this.storage.retrieveSectionValue(this.sectionName, 'damage'), this.formData.damage.validation],
            itemType: ['', this.formData.itemType.validation],
            itemMakeModel: ['', this.formData.itemMakeModel.validation],
            itemPrice: ['', this.formData.itemPrice.validation],
            fileUploads: [''],
        });
    }
    isSectionValid() {
        let validDamage = false;
        const damageValue = this.form.get('damage').value;
        if ((damageValue === 'Contents' || damageValue === 'Both') &&
            this.damagedItemList.length > 0) {
            validDamage = true;
        }
        else if (damageValue === 'Building') {
            validDamage = true;
        }
        const storedValues = JSON.parse(sessionStorage.getItem(this.sectionName));
        if (storedValues) {
            storedValues.sectionValid = damageValue && validDamage;
            sessionStorage.setItem(this.sectionName, JSON.stringify(storedValues));
        }
        return damageValue && validDamage;
    }
    ngAfterViewInit() {
        this.progressStep = document.querySelector('.progress__step3');
        this.decibel.setTrackingAttributes(this.formData);
    }
    ngOnInit() {
        this.buildForm();
        this.showDamagedItems = (this.storage.retrieveSectionValue(this.sectionName, 'damage') !== 'Building' &&
            this.storage.retrieveSectionValue(this.sectionName, 'damage')) ? true : false;
        this.form.valueChanges.subscribe(values => {
            values.sectionValid = this.isSectionValid();
            values.items = this.damagedItemList;
            values.uploads = this.fileUploadList;
            this.validClaimDetails.emit(values);
            this.showDamagedItems = (values.damage !== 'Building') ? true : false;
            this.disableAddItem = (values.itemType === '' ||
                values.itemMakeModel === '' ||
                values.itemPrice === '' ||
                !this.form.get('itemPrice').valid) ? true : false;
            if (!this.disableAddItem) {
                this.damagedItems = { type: values.itemType,
                    make: values.itemMakeModel,
                    price: values.itemPrice };
            }
            this.storage.saveSectionValues(this.sectionName, this.form.value);
            if (values.sectionValid) {
                this.progressStep.classList.add('progress__valid-step');
            }
            else {
                this.progressStep.classList.remove('progress__valid-step');
            }
        });
    }
};
ClaimDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_5__["DecibelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClaimDetailsComponent.prototype, "validClaimDetails", void 0);
ClaimDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim-details',
        template: __webpack_require__(/*! raw-loader!./claim-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/fnol/claim-details/claim-details.component.html"),
    })
], ClaimDetailsComponent);



/***/ }),

/***/ "./src/app/fnol/claim-details/form-fields.ts":
/*!***************************************************!*\
  !*** ./src/app/fnol/claim-details/form-fields.ts ***!
  \***************************************************/
/*! exports provided: FORMFIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMFIELDS", function() { return FORMFIELDS; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_validators_common_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/validators/common.validator */ "./src/app/shared/validators/common.validator.ts");


const FORMFIELDS = {
    damage: {
        name: 'damage',
        label: 'Damage',
        hint: { text: 'Contents are portable items you would take with you if you moved home, including carpets and curtains' },
        options: ['Building', 'Contents', 'Both'],
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please specify what the damage applies to'
        }
    },
    itemType: {
        name: 'itemType',
        label: 'Damaged item',
        placeholder: 'Cycle',
        hint: { text: 'What is the damaged item? (Cycle, tv, computer)' },
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please specify the damaged item'
        }
    },
    itemMakeModel: {
        name: 'itemMakeModel',
        label: 'Make/Model?',
        placeholder: 'Sony Playstation 4',
        hint: { text: 'For example, Sony Playstation 4' },
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please detail the make/model of the damaged item'
        }
    },
    itemPrice: {
        name: 'itemPrice',
        label: 'Purchase price',
        placeholder: '£30',
        hint: { text: 'Purchase price of the damaged item' },
        validation: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            src_app_shared_validators_common_validator__WEBPACK_IMPORTED_MODULE_1__["CommonValidator"].ValidNumber
        ],
        validationMessages: {
            required: 'Please indicate the price',
            invalidNumber: 'Please enter a number'
        }
    },
    fileUploads: {
        name: 'fileUploads',
        label: 'Upload a file',
        hint: { text: 'Images that show the damage, receipts, or other proof of ownership that will help us validate your claim.' }
    }
};


/***/ }),

/***/ "./src/app/fnol/claim-overview/claim-overview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/fnol/claim-overview/claim-overview.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClaimOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimOverviewComponent", function() { return ClaimOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-fields */ "./src/app/fnol/claim-overview/form-fields.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/decibel.service */ "./src/app/shared/services/decibel.service.ts");






let ClaimOverviewComponent = class ClaimOverviewComponent {
    constructor(fb, storage, decibel) {
        this.fb = fb;
        this.storage = storage;
        this.decibel = decibel;
        this.validClaimOverview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formData = _form_fields__WEBPACK_IMPORTED_MODULE_3__["FORMFIELDS"];
        this.sectionName = 'claimSectionValues';
        this.showOccupied = (this.storage.retrieveSectionValue(this.sectionName, 'claimLocation') === 'At home') ? true : false;
    }
    buildForm() {
        const incDate = this.storage.retrieveSectionValue(this.sectionName, 'incidentDate');
        this.form = this.fb.group({
            whatHappened: [this.storage.retrieveSectionValue(this.sectionName, 'whatHappened'), this.formData.whatHappened.validation],
            claimLocation: [this.storage.retrieveSectionValue(this.sectionName, 'claimLocation'), this.formData.claimLocation.validation],
            occupied: [this.storage.retrieveSectionValue(this.sectionName, 'occupied'), this.formData.occupied.validation],
            incidentDate: this.fb.array((incDate === '' ? [] : incDate), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose(this.formData.incidentDate.validation))
        });
    }
    isSectionValid() {
        let validLocation = false;
        if (this.form.get('claimLocation').value === 'At home' &&
            (this.form.get('occupied').value === 'Yes' ||
                this.form.get('occupied').value === 'No')) {
            validLocation = true;
        }
        else if (this.form.get('claimLocation').value !== 'At home') {
            validLocation = true;
        }
        return this.form.get('whatHappened').valid &&
            this.form.get('claimLocation').valid &&
            this.form.get('incidentDate').valid &&
            validLocation;
    }
    ngAfterViewInit() {
        this.progressStep = document.querySelector('.progress__step2');
        this.decibel.setTrackingAttributes(this.formData);
    }
    ngOnInit() {
        this.buildForm();
        if (this.form.controls.incidentDate.value.length > 0 &&
            this.form.controls.incidentDate.value.join('') !== '') {
            this.form.controls.incidentDate.markAsDirty();
        }
        if (this.form.controls.whatHappened.value !== '') {
            this.form.controls.whatHappened.markAsDirty();
        }
        if (this.form.controls.claimLocation.value !== '') {
            this.form.controls.claimLocation.markAsDirty();
        }
        this.form.valueChanges.subscribe(values => {
            values.sectionValid = this.isSectionValid();
            this.validClaimOverview.emit(values);
            this.showOccupied = (values.claimLocation === 'At home') ? true : false;
            this.storage.setSectionValue(this.sectionName, 'sectionValid', values.sectionValid);
            this.storage.saveSectionValues(this.sectionName, this.form.value);
            if (this.progressStep) {
                if (values.sectionValid) {
                    this.progressStep.classList.add('progress__valid-step');
                }
                else {
                    this.progressStep.classList.remove('progress__valid-step');
                }
            }
        });
    }
};
ClaimOverviewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_5__["DecibelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClaimOverviewComponent.prototype, "validClaimOverview", void 0);
ClaimOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim-overview',
        template: __webpack_require__(/*! raw-loader!./claim-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/fnol/claim-overview/claim-overview.component.html"),
    })
], ClaimOverviewComponent);



/***/ }),

/***/ "./src/app/fnol/claim-overview/form-fields.ts":
/*!****************************************************!*\
  !*** ./src/app/fnol/claim-overview/form-fields.ts ***!
  \****************************************************/
/*! exports provided: FORMFIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMFIELDS", function() { return FORMFIELDS; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_validators_common_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/validators/common.validator */ "./src/app/shared/validators/common.validator.ts");


const FORMFIELDS = {
    incidentDate: {
        name: 'incidentDate',
        label: 'Date of incident',
        hint: { text: 'When this happened or date you became aware of the issue. Must be within the last 12 months' },
        validation: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _shared_validators_common_validator__WEBPACK_IMPORTED_MODULE_1__["CommonValidator"].ValidDate
        ],
        validationMessages: {
            required: 'Please specify when the incident happened',
            invalidDate: 'Please enter a valid date',
            invalidDateRange: 'The date should be between 12 months ago and today'
        },
        format: {
            years: {
                min: new Date().getFullYear() - 1,
                max: new Date().getFullYear()
            }
        }
    },
    whatHappened: {
        name: 'whatHappened',
        label: 'What happened?',
        placeholder: '',
        hint: { text: 'Please provide as much detail as possible about your claim' },
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please tell us what happened'
        }
    },
    claimLocation: {
        name: 'claimLocation',
        label: 'Where did it happen?',
        options: ['At home', 'UK', 'Abroad'],
        hint: { text: 'Was the incident at home/abroad' },
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please indicate where it happened'
        }
    },
    occupied: {
        name: 'occupied',
        label: 'Home occupied in last 60 days?',
        options: ['Yes', 'No'],
        hint: { text: 'Any occupants living in your home for the last 60 days' },
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please indicate occupation status'
        }
    },
};


/***/ }),

/***/ "./src/app/fnol/confirmation/confirmation.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/fnol/confirmation/confirmation.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-fields */ "./src/app/fnol/confirmation/form-fields.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/decibel.service */ "./src/app/shared/services/decibel.service.ts");






let ConfirmationComponent = class ConfirmationComponent {
    constructor(fb, storage, decibel) {
        this.fb = fb;
        this.storage = storage;
        this.decibel = decibel;
        this.validConfirmation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formData = _form_fields__WEBPACK_IMPORTED_MODULE_3__["FORMFIELDS"];
        this.sectionName = 'confirmationSectionValues';
    }
    buildForm() {
        this.form = this.fb.group({
            callbackSlot: [this.storage.retrieveSectionValue(this.sectionName, 'callbackSlot'), this.formData.callbackSlot.validation],
            awareExcess: [this.storage.retrieveSectionValue(this.sectionName, 'awareExcess'), this.formData.awareExcess.validation],
            termsConditions: [this.storage.retrieveSectionValue(this.sectionName, 'termsConditions'), this.formData.termsConditions.validation],
            convictions: [this.storage.retrieveSectionValue(this.sectionName, 'convictions'), this.formData.convictions.validation],
        });
    }
    isSectionValid() {
        return this.form.get('callbackSlot').valid &&
            this.form.get('termsConditions').value &&
            this.form.get('awareExcess').value &&
            this.form.get('convictions').valid;
    }
    ngAfterViewInit() {
        this.progressStep = document.querySelector('.progress__step4');
        this.decibel.setTrackingAttributes(this.formData);
    }
    ngOnInit() {
        this.buildForm();
        this.form.valueChanges.subscribe(values => {
            values.sectionValid = this.isSectionValid();
            this.storage.setSectionValue(this.sectionName, 'sectionValid', values.sectionValid);
            this.storage.saveSectionValues(this.sectionName, this.form.value);
            this.validConfirmation.emit(values);
            if (values.sectionValid) {
                this.progressStep.classList.add('progress__valid-step');
            }
            else {
                this.progressStep.classList.remove('progress__valid-step');
            }
        });
    }
};
ConfirmationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_5__["DecibelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConfirmationComponent.prototype, "validConfirmation", void 0);
ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation',
        template: __webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/fnol/confirmation/confirmation.component.html"),
    })
], ConfirmationComponent);



/***/ }),

/***/ "./src/app/fnol/confirmation/form-fields.ts":
/*!**************************************************!*\
  !*** ./src/app/fnol/confirmation/form-fields.ts ***!
  \**************************************************/
/*! exports provided: FORMFIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMFIELDS", function() { return FORMFIELDS; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

const FORMFIELDS = {
    callbackSlot: {
        name: 'callbackSlot',
        label: 'Callback slot',
        hint: { text: 'When should we call you back to confirm and submit your claim details' },
        options: ['Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)'],
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please choose a callback slot'
        }
    },
    termsConditions: {
        name: 'termsConditions',
        label: 'Terms & conditions',
        hint: { text: 'Please confirm all details above are correct. Incorrect or incomplete information could affect your claim.' },
        options: ['I confirm that the above statements are true'],
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please accept our terms and conditions'
        }
    },
    awareExcess: {
        name: 'awareExcess',
        label: 'Aware of excess',
        hint: { text: 'You may have to pay an excess on this claim. Details can be found in your policy summary.' },
        options: ['I am aware of the excess amount I will have to pay.'],
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please confirm excess awareness'
        }
    },
    convictions: {
        name: 'convictions',
        label: 'Criminal convictions',
        hint: { text: 'Has anyone at the address been convicted of criminal offences or have prosecutions pending (except motoring)' },
        options: ['Yes', 'No'],
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please answer yes/no to criminal convictions'
        }
    },
};


/***/ }),

/***/ "./src/app/fnol/fnol.component.scss":
/*!******************************************!*\
  !*** ./src/app/fnol/fnol.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zub2wvZm5vbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/fnol/fnol.component.ts":
/*!****************************************!*\
  !*** ./src/app/fnol/fnol.component.ts ***!
  \****************************************/
/*! exports provided: FnolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FnolComponent", function() { return FnolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_static_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/static-data.service */ "./src/app/shared/services/static-data.service.ts");
/* harmony import */ var dlg_angular_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dlg-angular-components */ "./node_modules/dlg-angular-components/dist/dlg-walrus/fesm2015/dlg-walrus.js");
/* harmony import */ var _submit_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-modal.component */ "./src/app/fnol/submit-modal.component.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");








let FnolComponent = class FnolComponent {
    constructor(dataService, router, modal, storage, fb) {
        this.dataService = dataService;
        this.router = router;
        this.modal = modal;
        this.storage = storage;
        this.fb = fb;
        this.formData = {};
    }
    ngOnInit() {
        this.form = this.fb.group({});
    }
    retrievePersonalDetails(formValues) {
        this.validPersonalSection = formValues.sectionValid;
        this.personalData = formValues;
    }
    retrieveConfirmation(formValues) {
        this.validConfirmationSection = formValues.sectionValid;
        this.confirmationData = formValues;
    }
    retrieveClaimOverview(formValues) {
        this.validClaimOverviewSection = formValues.sectionValid;
        this.claimOverviewData = formValues;
    }
    retrieveClaimDetails(formValues) {
        this.validClaimDetailsSection = formValues.sectionValid;
        this.claimDetailsData = formValues;
    }
    isFormValid() {
        this.storedPersonalData = this.storage.retrieveSectionValues('personalSectionValues');
        this.storedPersonalData['policyNumber'] = this.storage.retrieveSectionValue('policyNumberExcess', 'policyNumber');
        this.storedclaimOverviewData = this.storage.retrieveSectionValues('claimSectionValues');
        this.storedclaimDetailsData = this.storage.retrieveSectionValues('claimDetailSectionValues');
        this.storedconfirmationData = this.storage.retrieveSectionValues('confirmationSectionValues');
        return ((this.validPersonalSection &&
            this.validConfirmationSection &&
            this.validClaimOverviewSection &&
            this.validClaimDetailsSection) ||
            (this.storedPersonalData['sectionValid'] &&
                this.storedclaimOverviewData['sectionValid'] &&
                this.storedclaimDetailsData['sectionValid'] &&
                this.storedconfirmationData['sectionValid']));
    }
    submitClaim() {
        if (this.personalData) {
            this.formData.personalDetails = this.personalData;
        }
        else {
            this.formData.personalDetails = this.storedPersonalData;
        }
        if (this.claimOverviewData) {
            this.formData.claimOverview = this.claimOverviewData;
        }
        else {
            this.formData.claimOverview = this.storedclaimOverviewData;
        }
        if (this.claimDetailsData) {
            this.formData.claimDetailsData = this.claimDetailsData;
        }
        else {
            this.formData.claimDetailsData = this.storedclaimDetailsData;
        }
        if (this.confirmationData) {
            this.formData.confirmationData = this.confirmationData;
        }
        else {
            this.formData.confirmationData = this.storedconfirmationData;
        }
        const postClaim = {
            policyNumber: this.formData.personalDetails.policyNumber,
            fullName: this.formData.personalDetails.fullName,
            phoneNumber: this.formData.personalDetails.phoneNumber,
            emailAddress: this.formData.personalDetails.emailAddress,
            addressLine: this.formData.personalDetails.addressLine,
            postCode: this.formData.personalDetails.postCode,
            incidentDate: this.formData.claimOverview.incidentDate,
            whatHappened: this.formData.claimOverview.whatHappened,
            claimLocation: this.formData.claimOverview.claimLocation,
            occupied: this.formData.claimOverview.occupied,
            damage: this.formData.claimDetailsData.damage,
            damagedItems: this.formData.claimDetailsData.items,
            fileUploads: this.formData.claimDetailsData.uploads,
            callbackSlot: this.formData.confirmationData.callbackSlot,
            termsConditions: this.formData.confirmationData.termsConditions,
            awareExcess: this.formData.confirmationData.awareExcess,
            convictions: this.formData.confirmationData.convictions,
            status: 'Logged'
        };
        this.dataService.postClaimData(postClaim)
            .subscribe(post => {
            if (post) {
                this.dataService.claimEmail = postClaim.emailAddress;
                this.storage.clearStoredVariables();
                const confirmationTitle = 'Thank You, your claim has been logged.';
                const confirmationMessage1 = `
              For your reference, your claim number is: ${post['id']}.
              A claims handler will assess your claim
              and will call you back to confirm details.`;
                const confirmationMessage2 = `
              We have emailed you details of your claim for future reference. Click below to see your current claim status and next steps.`;
                const modal = this.modal.open(_submit_modal_component__WEBPACK_IMPORTED_MODULE_6__["SubmitModalComponent"], { title: confirmationTitle,
                    message1: confirmationMessage1,
                    message2: confirmationMessage2,
                    button: 'Claim Status' });
                modal.closed$.subscribe(result => {
                    if (result === 'Closing') {
                        this.router.navigate(['claim-status']);
                    }
                    else {
                        this.router.navigate(['']);
                    }
                });
                console.log(post);
            }
        }, error => {
            this.modal.open(_submit_modal_component__WEBPACK_IMPORTED_MODULE_6__["SubmitModalComponent"], { title: `Sorry, we were unable to submit your claim`,
                message1: 'Please check your connection and try again',
                message2: 'If you continue to experience issues, call us on 0123456789',
                button: 'Back to my claim' });
        });
    }
};
FnolComponent.ctorParameters = () => [
    { type: _shared_services_static_data_service__WEBPACK_IMPORTED_MODULE_4__["StaticDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: dlg_angular_components__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FnolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fnol',
        template: __webpack_require__(/*! raw-loader!./fnol.component.html */ "./node_modules/raw-loader/index.js!./src/app/fnol/fnol.component.html"),
        styles: [__webpack_require__(/*! ./fnol.component.scss */ "./src/app/fnol/fnol.component.scss")]
    })
], FnolComponent);



/***/ }),

/***/ "./src/app/fnol/personal-details/form-fields.ts":
/*!******************************************************!*\
  !*** ./src/app/fnol/personal-details/form-fields.ts ***!
  \******************************************************/
/*! exports provided: FORMFIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMFIELDS", function() { return FORMFIELDS; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_validators_personal_details_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/validators/personal-details.validator */ "./src/app/shared/validators/personal-details.validator.ts");


const FORMFIELDS = {
    fullName: {
        name: 'fullName',
        label: 'Your name',
        placeholder: 'First and last name',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please enter your name'
        }
    },
    phoneNumber: {
        name: 'phoneNumber',
        label: 'Phone number',
        placeholder: '020 1122 3344 / 07123 456 789',
        hint: { text: 'Should be at least 11 digits' },
        validation: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _shared_validators_personal_details_validator__WEBPACK_IMPORTED_MODULE_1__["PersonalDetailsValidator"].ValidPhone
        ],
        validationMessages: {
            required: 'Please enter your phone number',
            invalidPhone: 'Please enter a valid phone number'
        }
    },
    emailAddress: {
        name: 'emailAddress',
        label: 'Email address',
        placeholder: 'example@abc.com',
        validation: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _shared_validators_personal_details_validator__WEBPACK_IMPORTED_MODULE_1__["PersonalDetailsValidator"].ValidEmail
        ],
        validationMessages: {
            required: 'Please enter your email address',
            invalidEmail: 'Please enter a valid email address'
        }
    },
    addressLine: {
        name: 'addressLine',
        label: 'Address',
        placeholder: '123 Road Name / Flat 2, Road Name',
        hint: { text: 'First line of your address' },
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        validationMessages: {
            required: 'Please enter your address'
        }
    },
    postCode: {
        name: 'postCode',
        label: 'Post code',
        placeholder: 'ZZ1 1ZZ',
        validation: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _shared_validators_personal_details_validator__WEBPACK_IMPORTED_MODULE_1__["PersonalDetailsValidator"].ValidPostcode
        ],
        validationMessages: {
            required: 'Please enter your post code',
            invalidPostcode: 'Please enter a valid UK post code'
        }
    },
};


/***/ }),

/***/ "./src/app/fnol/personal-details/personal-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/fnol/personal-details/personal-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-fields */ "./src/app/fnol/personal-details/form-fields.ts");
/* harmony import */ var dlg_angular_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dlg-angular-components */ "./node_modules/dlg-angular-components/dist/dlg-walrus/fesm2015/dlg-walrus.js");
/* harmony import */ var _submit_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../submit-modal.component */ "./src/app/fnol/submit-modal.component.ts");
/* harmony import */ var _shared_services_static_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/static-data.service */ "./src/app/shared/services/static-data.service.ts");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/decibel.service */ "./src/app/shared/services/decibel.service.ts");









let PersonalDetailsComponent = class PersonalDetailsComponent {
    constructor(fb, dataService, modal, storage, decibel) {
        this.fb = fb;
        this.dataService = dataService;
        this.modal = modal;
        this.storage = storage;
        this.decibel = decibel;
        this.validPersonalDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formData = _form_fields__WEBPACK_IMPORTED_MODULE_3__["FORMFIELDS"];
        this.sectionName = 'personalSectionValues';
    }
    isSectionValid() {
        return this.form.get('fullName').valid &&
            this.form.get('postCode').valid &&
            this.form.get('addressLine').valid &&
            this.form.get('phoneNumber').valid &&
            this.form.get('emailAddress').valid;
    }
    isAutofillable() {
        return this.form.get('fullName').valid &&
            this.form.get('postCode').valid;
    }
    getPolicyHolder() {
        const name = this.form.get('fullName').value;
        const pcode = this.form.get('postCode').value;
        this.dataService.getPolicyHolderData(name, pcode)
            .subscribe(res => {
            if (res[0] && res[0].name.replace(' ', '').length === name.replace(' ', '').length) {
                this.form.controls.fullName.setValue(res[0].name);
                this.form.controls.postCode.setValue(res[0].postCode);
                this.form.controls.addressLine.setValue(res[0].address);
                this.form.controls.emailAddress.setValue(res[0].emailAddress);
                this.form.controls.phoneNumber.setValue(res[0].phoneNumber);
                this.policyNumber = res[0].policyNumber;
                this.excess = res[0].excess;
                this.formValues.policyNumber = this.policyNumber;
                document.getElementById('incidentDate-day').focus();
                sessionStorage.setItem('policyNumberExcess', JSON.stringify({ policyNumber: this.policyNumber, excess: this.excess }));
            }
            else {
                this.clearAutofillSection();
                const modal = this.modal.open(_submit_modal_component__WEBPACK_IMPORTED_MODULE_5__["SubmitModalComponent"], { title: `Sorry - we couldn't find your details`,
                    message1: 'Please enter your address, phone number and email address below',
                    message2: 'Thank you',
                    button: 'Fill in my details' });
                modal.closed$.subscribe(result => {
                    document.getElementById('phoneNumber').focus();
                });
            }
        }, error => {
            const modal = this.modal.open(_submit_modal_component__WEBPACK_IMPORTED_MODULE_5__["SubmitModalComponent"], { title: `Sorry, we were unable to look up your details at this time`,
                message1: 'Please enter your address, phone number and email address below',
                message2: 'Thank you',
                button: 'Fill in my details' });
            modal.closed$.subscribe(result => {
                document.getElementById('phoneNumber').focus();
            });
        });
    }
    clearAutofillSection() {
        this.form.controls.addressLine.setValue('');
        this.form.controls.addressLine.markAsPristine();
        this.form.controls.addressLine.markAsUntouched();
        this.form.controls.addressLine.updateValueAndValidity();
        this.form.controls.emailAddress.setValue('');
        this.form.controls.emailAddress.markAsPristine();
        this.form.controls.emailAddress.markAsUntouched();
        this.form.controls.emailAddress.updateValueAndValidity();
        this.form.controls.phoneNumber.setValue('');
        this.form.controls.phoneNumber.markAsPristine();
        this.form.controls.phoneNumber.markAsUntouched();
        this.form.controls.phoneNumber.updateValueAndValidity();
        this.policyNumber = '';
    }
    ngAfterViewInit() {
        this.progressStep = document.querySelector('.progress__step1');
        this.decibel.setTrackingAttributes(this.formData);
        document.getElementById('fullName').focus();
    }
    ngOnInit() {
        this.buildForm();
        if (this.form.controls.fullName.value !== '') {
            this.form.controls.fullName.markAsDirty();
        }
        if (this.form.controls.postCode.value !== '') {
            this.form.controls.postCode.markAsDirty();
        }
        if (this.form.controls.phoneNumber.value !== '') {
            this.form.controls.phoneNumber.markAsDirty();
        }
        if (this.form.controls.emailAddress.value !== '') {
            this.form.controls.emailAddress.markAsDirty();
        }
        if (this.form.controls.addressLine.value !== '') {
            this.form.controls.addressLine.markAsDirty();
        }
        if (this.isSectionValid()) {
            const policyNumberExcess = sessionStorage.getItem('policyNumberExcess');
            if (policyNumberExcess) {
                this.policyNumber = JSON.parse(policyNumberExcess).policyNumber;
                this.excess = JSON.parse(policyNumberExcess).excess;
            }
        }
        this.formNameSubscription = this.form.controls.fullName.valueChanges
            .subscribe(value => { this.clearAutofillSection(); });
        this.formPostcodeSubscription = this.form.controls.postCode.valueChanges
            .subscribe(value => { this.clearAutofillSection(); });
        this.formSubscription = this.form.valueChanges.subscribe(values => {
            values.sectionValid = this.isSectionValid();
            this.storage.setSectionValue(this.sectionName, 'sectionValid', values.sectionValid);
            this.storage.saveSectionValues(this.sectionName, this.form.value);
            if (values.sectionValid) {
                values.policyNumber = this.policyNumber;
                this.progressStep.classList.add('progress__valid-step');
            }
            else {
                this.progressStep.classList.remove('progress__valid-step');
            }
            this.formValues = values;
            this.validPersonalDetails.emit(this.formValues);
        });
    }
    ngOnDestroy() {
        this.formSubscription.unsubscribe();
        this.formNameSubscription.unsubscribe();
        this.formPostcodeSubscription.unsubscribe();
    }
    buildForm() {
        this.form = this.fb.group({
            fullName: [this.storage.retrieveSectionValue(this.sectionName, 'fullName'), this.formData.fullName.validation],
            phoneNumber: [this.storage.retrieveSectionValue(this.sectionName, 'phoneNumber'), this.formData.phoneNumber.validation],
            emailAddress: [this.storage.retrieveSectionValue(this.sectionName, 'emailAddress'), this.formData.emailAddress.validation],
            addressLine: [this.storage.retrieveSectionValue(this.sectionName, 'addressLine'), this.formData.addressLine.validation],
            postCode: [this.storage.retrieveSectionValue(this.sectionName, 'postCode'), this.formData.postCode.validation],
        });
    }
};
PersonalDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_static_data_service__WEBPACK_IMPORTED_MODULE_6__["StaticDataService"] },
    { type: dlg_angular_components__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _shared_services_decibel_service__WEBPACK_IMPORTED_MODULE_8__["DecibelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PersonalDetailsComponent.prototype, "validPersonalDetails", void 0);
PersonalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-details',
        template: __webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/fnol/personal-details/personal-details.component.html"),
    })
], PersonalDetailsComponent);



/***/ }),

/***/ "./src/app/fnol/submit-modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/fnol/submit-modal.component.ts ***!
  \************************************************/
/*! exports provided: SubmitModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitModalComponent", function() { return SubmitModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var dlg_angular_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dlg-angular-components */ "./node_modules/dlg-angular-components/dist/dlg-walrus/fesm2015/dlg-walrus.js");



let SubmitModalComponent = class SubmitModalComponent {
    constructor(data, modalRef) {
        this.data = data;
        this.modalRef = modalRef;
    }
    onClose() {
        this.modalRef.close('Closing');
    }
};
SubmitModalComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [dlg_angular_components__WEBPACK_IMPORTED_MODULE_2__["MODAL_DATA"],] }] },
    { type: dlg_angular_components__WEBPACK_IMPORTED_MODULE_2__["ModalRef"] }
];
SubmitModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submit-modal-content',
        template: __webpack_require__(/*! raw-loader!./submit-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/fnol/submit-modal.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(dlg_angular_components__WEBPACK_IMPORTED_MODULE_2__["MODAL_DATA"]))
], SubmitModalComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_claim_statuses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data/claim-statuses */ "./src/app/shared/data/claim-statuses.ts");





let ProgressBarComponent = class ProgressBarComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.claimStatuses = _shared_data_claim_statuses__WEBPACK_IMPORTED_MODULE_4__["CLAIMSTATUSES"];
        this.scroll = (e) => {
            const scrollPosition = e.target.scrollingElement.scrollTop;
            if (scrollPosition >= 1700) {
                this.step1Classes.remove('progress__active-step');
                this.step2Classes.remove('progress__active-step');
                this.step3Classes.remove('progress__active-step');
                this.step4Classes.add('progress__active-step');
            }
            else if (scrollPosition >= 1200) {
                this.step1Classes.remove('progress__active-step');
                this.step2Classes.remove('progress__active-step');
                this.step3Classes.add('progress__active-step');
                this.step4Classes.remove('progress__active-step');
            }
            else if (scrollPosition >= 600) {
                this.step1Classes.remove('progress__active-step');
                this.step2Classes.add('progress__active-step');
                this.step3Classes.remove('progress__active-step');
                this.step4Classes.remove('progress__active-step');
            }
            else {
                this.step1Classes.add('progress__active-step');
                this.step2Classes.remove('progress__active-step');
                this.step3Classes.remove('progress__active-step');
                this.step4Classes.remove('progress__active-step');
            }
        };
    }
    checkSectionValidity(sectionName, classList) {
        if (this.storage.retrieveSectionValue(sectionName, 'sectionValid') === true) {
            classList.add('progress__valid-step');
        }
        else {
            classList.remove('progress__valid-step');
        }
    }
    ngAfterViewInit() {
        if (this.router.url === '/make-a-claim') {
            const progressSteps = document.querySelectorAll('.progress__step');
            this.step1Classes = progressSteps[0].classList;
            this.step2Classes = progressSteps[1].classList;
            this.step3Classes = progressSteps[2].classList;
            this.step4Classes = progressSteps[3].classList;
            this.checkSectionValidity('personalSectionValues', this.step1Classes);
            this.checkSectionValidity('claimSectionValues', this.step2Classes);
            this.checkSectionValidity('claimDetailSectionValues', this.step3Classes);
            this.checkSectionValidity('confirmationSectionValues', this.step4Classes);
            window.addEventListener('scroll', this.scroll, true);
        }
    }
    ngOnInit() { }
    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
};
ProgressBarComponent.ctorParameters = () => [
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressBarComponent.prototype, "claimsCounts", void 0);
ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-bar',
        template: __webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/progress-bar/progress-bar.component.html"),
        styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/progress-bar/progress-bar.component.scss")]
    })
], ProgressBarComponent);



/***/ }),

/***/ "./src/app/shared/data/claim-statuses.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/data/claim-statuses.ts ***!
  \***********************************************/
/*! exports provided: CLAIMSTATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLAIMSTATUSES", function() { return CLAIMSTATUSES; });
const CLAIMSTATUSES = [
    'Submitted',
    'Logged',
    'In Progress',
    'With Assessor',
    'Approved',
    'Declined',
    'Complete',
    'Feedback'
];


/***/ }),

/***/ "./src/app/shared/services/decibel.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/decibel.service.ts ***!
  \****************************************************/
/*! exports provided: DecibelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecibelService", function() { return DecibelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DecibelService = class DecibelService {
    constructor() { }
    setTrackingAttributes(formData) {
        document.querySelectorAll(`.dlg-input input,
                               .dlg-radio input,
                               .dlg-checkbox input,
                               .dlg-datepicker,
                               .dlg-textarea`).forEach(input => {
            const nameAttribute = input.getAttribute('ng-reflect-name');
            const formDataAttribute = formData[nameAttribute];
            if (nameAttribute && formDataAttribute) {
                if (input.classList.contains('dlg-datepicker')) {
                    input.querySelectorAll('.dlg-select').forEach(datePart => {
                        datePart.setAttribute('data-di-id', '#' + datePart.id);
                        datePart.setAttribute('data-di-field-id', datePart.id);
                        datePart.setAttribute('data-di-field-error', formDataAttribute.validationMessages.required);
                    });
                }
                else {
                    input.setAttribute('data-di-id', '#' + formDataAttribute.name);
                    input.setAttribute('data-di-field-id', formDataAttribute.name);
                    input.setAttribute('data-di-field-error', formDataAttribute.validationMessages.required);
                }
            }
        });
    }
};
DecibelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DecibelService);



/***/ }),

/***/ "./src/app/shared/services/static-data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/static-data.service.ts ***!
  \********************************************************/
/*! exports provided: StaticDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataService", function() { return StaticDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StaticDataService = class StaticDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.urlPolicies = 'http://localhost:3000/policyholders';
        this.urlClaims = 'http://localhost:3004/claims';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getPolicyHolderData(name, pcode) {
        const pcodeRegEx = pcode.replace(' ', '').split('').join('\\s*');
        return this.httpClient.get(`${this.urlPolicies}?name_like=${name}&postCode_like=^${pcodeRegEx}$`);
    }
    postClaimData(claim) {
        return this.httpClient.post(`${this.urlClaims}`, claim, this.httpOptions);
    }
    getClaims(email) {
        return this.httpClient.get(`${this.urlClaims}?emailAddress=${email}`);
    }
};
StaticDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StaticDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StaticDataService);



/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StorageService = class StorageService {
    constructor() { }
    saveSectionValues(sectionName, allFormValues) {
        sessionStorage.removeItem(sectionName);
        sessionStorage.setItem(sectionName, JSON.stringify(allFormValues));
    }
    retrieveSectionValue(sectionName, field) {
        const sectionValues = JSON.parse(sessionStorage.getItem(sectionName));
        return (sectionValues) ? sectionValues[field] : '';
    }
    setSectionValue(sectionName, field, value) {
        const sectionValues = JSON.parse(sessionStorage.getItem(sectionName));
        if (sectionValues) {
            sectionValues[field] = value;
            sessionStorage.setItem(sectionName, JSON.stringify(sectionValues));
        }
    }
    retrieveSectionValues(sectionName) {
        const sectionValues = JSON.parse(sessionStorage.getItem(sectionName));
        return (sectionValues) ? sectionValues : {};
    }
    clearStoredVariables() {
        localStorage.removeItem('damagedItems');
        localStorage.removeItem('fileUploads');
        sessionStorage.removeItem('personalSectionValues');
        sessionStorage.removeItem('claimSectionValues');
        sessionStorage.removeItem('claimDetailSectionValues');
        sessionStorage.removeItem('confirmationSectionValues');
        sessionStorage.removeItem('policyNumberExcess');
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var dlg_angular_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dlg-angular-components */ "./node_modules/dlg-angular-components/dist/dlg-walrus/fesm2015/dlg-walrus.js");
/* harmony import */ var _fnol_fnol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fnol/fnol.component */ "./src/app/fnol/fnol.component.ts");
/* harmony import */ var _fnol_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fnol/personal-details/personal-details.component */ "./src/app/fnol/personal-details/personal-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ "./src/app/progress-bar/progress-bar.component.ts");
/* harmony import */ var _fnol_claim_overview_claim_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fnol/claim-overview/claim-overview.component */ "./src/app/fnol/claim-overview/claim-overview.component.ts");
/* harmony import */ var _fnol_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fnol/claim-details/claim-details.component */ "./src/app/fnol/claim-details/claim-details.component.ts");
/* harmony import */ var _fnol_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../fnol/confirmation/confirmation.component */ "./src/app/fnol/confirmation/confirmation.component.ts");
/* harmony import */ var _fnol_submit_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fnol/submit-modal.component */ "./src/app/fnol/submit-modal.component.ts");
/* harmony import */ var _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../claim-status/claim-status.component */ "./src/app/claim-status/claim-status.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _fnol_fnol_component__WEBPACK_IMPORTED_MODULE_4__["FnolComponent"],
            _fnol_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["PersonalDetailsComponent"],
            _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__["ProgressBarComponent"],
            _fnol_claim_overview_claim_overview_component__WEBPACK_IMPORTED_MODULE_9__["ClaimOverviewComponent"],
            _fnol_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_10__["ClaimDetailsComponent"],
            _fnol_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationComponent"],
            _fnol_submit_modal_component__WEBPACK_IMPORTED_MODULE_12__["SubmitModalComponent"],
            _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_13__["ClaimStatusComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            dlg_angular_components__WEBPACK_IMPORTED_MODULE_3__["DlgWalrusModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
        ],
        exports: [
            _fnol_fnol_component__WEBPACK_IMPORTED_MODULE_4__["FnolComponent"],
            _fnol_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["PersonalDetailsComponent"],
            _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__["ProgressBarComponent"],
            _fnol_claim_overview_claim_overview_component__WEBPACK_IMPORTED_MODULE_9__["ClaimOverviewComponent"],
            _fnol_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_10__["ClaimDetailsComponent"],
            _fnol_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationComponent"],
            _fnol_submit_modal_component__WEBPACK_IMPORTED_MODULE_12__["SubmitModalComponent"],
            dlg_angular_components__WEBPACK_IMPORTED_MODULE_3__["DlgWalrusModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        entryComponents: [
            _fnol_submit_modal_component__WEBPACK_IMPORTED_MODULE_12__["SubmitModalComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/validators/common.validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/validators/common.validator.ts ***!
  \*******************************************************/
/*! exports provided: CommonValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonValidator", function() { return CommonValidator; });
class CommonValidator {
    static ValidDate(control) {
        let invalidDay = false;
        let invalidMonth = false;
        let invalidYear = false;
        let inDate;
        const yearRegEx = /^\d{4}$/;
        const dayMonthRegEx = /^\d{1,2}$/;
        const dayField = control.value[0];
        const monthField = control.value[1];
        const yearField = control.value[2];
        const dateNow = new Date();
        const minDate = new Date().setMonth(dateNow.getMonth() - 12);
        if (!(dayMonthRegEx.test(dayField) &&
            dayField >= 1 &&
            dayField <= 31)) {
            invalidDay = true;
        }
        if (!(dayMonthRegEx.test(monthField) &&
            monthField >= 1 &&
            monthField <= 12)) {
            invalidMonth = true;
        }
        if (!yearRegEx.test(yearField)) {
            invalidYear = true;
        }
        if (invalidDay || invalidMonth || invalidYear) {
            return { invalidDate: true };
        }
        else {
            inDate = new Date(parseInt(yearField), parseInt(monthField) - 1, parseInt(dayField));
            if (inDate > dateNow || inDate < minDate) {
                return { invalidDateRange: true };
            }
        }
    }
    static ValidNumber(control) {
        const numberEx = /^\d{1,}$/g;
        if (!numberEx.test(control.value)) {
            return { invalidNumber: true };
        }
    }
}


/***/ }),

/***/ "./src/app/shared/validators/personal-details.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/validators/personal-details.validator.ts ***!
  \*****************************************************************/
/*! exports provided: PersonalDetailsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsValidator", function() { return PersonalDetailsValidator; });
class PersonalDetailsValidator {
    static ValidPostcode(control) {
        const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2}?[0-9][A-Z]{2}/i;
        if (!postcodeRegEx.test(control.value.replace(' ', ''))) {
            return { invalidPostcode: true };
        }
    }
    static ValidPhone(control) {
        const phoneRegEx = /^\d{10,}$|^[+]\d{10,}$/;
        if (!phoneRegEx.test(control.value.replace(/\s|[-]|[(]|[)]/g, ''))) {
            return { invalidPhone: true };
        }
    }
    static ValidEmail(control) {
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegEx.test(control.value)) {
            return { invalidEmail: true };
        }
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gajm/Sites/claims/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map