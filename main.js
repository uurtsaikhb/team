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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./app/app.component.scss":
/*!********************************!*\
  !*** ./app/app.component.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "../node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./app/pages/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./app/components/header/header.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/team/team.component */ "./app/components/team/team.component.ts");
/* harmony import */ var _pages_member_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/member/member.component */ "./app/pages/member/member.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./app/components/contact-us/contact-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'member',
        component: _pages_member_member_component__WEBPACK_IMPORTED_MODULE_8__["MemberComponent"]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"],
                _pages_member_member_component__WEBPACK_IMPORTED_MODULE_8__["MemberComponent"],
                _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBFysY2S59MOxj6s7bTi9jPsiHbUJ15yO8'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/components/contact-us/contact-us.component.html":
/*!*************************************************************!*\
  !*** ./app/components/contact-us/contact-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-contact-us\"\n     id=\"contact\">\n  <div class=\"contact-detail\">\n    <span class=\"contact-header\">DREAM TEAM HQ</span>\n    <span class=\"contact-address\">\n      2021 7TH AVE\n      <br> SEATTLE, WA 98121\n    </span>\n    <span class=\"contact-phone item\">Let's talk\n      <br>\n      <strong>(469) 955-8225</strong>\n    </span>\n    <span class=\"contact-email item\"> You can email us too!\n      <br>\n      <strong>contact@dream.team</strong>\n    </span>\n  </div>\n  <div class=\"map\">\n    <agm-map class=\"z-depth-1-half map-container\"\n             style=\"height: 400px;\"\n             [latitude]=\"lat\"\n             [longitude]=\"lng\"\n             [zoom]='zoom'\n             [styles]='style'>\n      <agm-marker [latitude]=\"lat\"\n                  [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./app/components/contact-us/contact-us.component.scss":
/*!*************************************************************!*\
  !*** ./app/components/contact-us/contact-us.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-contact-us {\n  display: flex;\n  padding: 4vmin;\n  background-color: #c9c9c9; }\n  .section-contact-us .contact-detail {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: right;\n    padding-right: 30px;\n    font-size: 1.9vmin;\n    line-height: 2em;\n    font-weight: 300;\n    color: #717171;\n    word-spacing: 1px; }\n  .section-contact-us .contact-detail .item {\n      margin-top: 20px; }\n  .section-contact-us .contact-detail .contact-header {\n      font-weight: 300;\n      font-size: 2.3vmin; }\n  .section-contact-us .contact-detail .contact-address {\n      line-height: 1.4em;\n      font-weight: 600; }\n  .section-contact-us .contact-detail span {\n      margin-right: 3vw; }\n  .section-contact-us .map {\n    flex: 4;\n    box-shadow: 1px 1px 10px #a8a6a6; }\n"

/***/ }),

/***/ "./app/components/contact-us/contact-us.component.ts":
/*!***********************************************************!*\
  !*** ./app/components/contact-us/contact-us.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.zoom = 13;
        this.lat = 47.61582;
        this.lng = -122.338421;
        this.style = [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f5f5'
                    }
                ]
            },
            {
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161'
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#f5f5f5'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#bdbdbd'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#eeeeee'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e5e5e5'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ffffff'
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dadada'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161'
                    }
                ]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e'
                    }
                ]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e5e5e5'
                    }
                ]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#eeeeee'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#c9c9c9'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e'
                    }
                ]
            }
        ];
    }
    ContactUsComponent.prototype.ngOnInit = function () { };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./app/components/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./app/components/header/header.component.html":
/*!*****************************************************!*\
  !*** ./app/components/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"logo\">\n    <img class=\"image\"\n         src=\"http://via.placeholder.com/50x50\"\n         alt=\"Company logo\">\n    <span class=\"name\">Dream Team</span>\n  </div>\n\n  <div class=\"menu\">\n    <ul>\n      <li (click)=\"onClickHome()\">Home</li>\n      <li>Project</li>\n      <li>Technologies</li>\n      <li (click)='onClickTeam()'>Team</li>\n      <li (click)='onClickContactUs()'>Contact Us</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./app/components/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #515151;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1; }\n  .header .logo {\n    display: flex; }\n  .header .logo .image {\n      width: 40px;\n      height: 40px;\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin: 0 10px; }\n  .header .logo .name {\n      -ms-grid-row-align: center;\n          align-self: center;\n      font-size: 20px;\n      color: #fff; }\n  .header .menu ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden; }\n  .header .menu li {\n    float: left;\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none; }\n  .header .menu li:hover {\n    background-color: #111;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./app/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./app/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onClickHome = function () {
        this.router.navigate(['home']);
    };
    HeaderComponent.prototype.onClickTeam = function () {
        this.router.navigate(['home'], { queryParams: { segment: 'team' } });
        if (document.getElementById('team')) {
            document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
        }
    };
    HeaderComponent.prototype.onClickContactUs = function () {
        this.router.navigate(['home'], { queryParams: { segment: 'contact' } });
        if (document.getElementById('contact')) {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./app/components/team/team.component.html":
/*!*************************************************!*\
  !*** ./app/components/team/team.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"team-section\"\n         id=\"team\">\n  <h2 class=\"section-title\">MEET OUR TEAM</h2>\n  <div class=\"team\">\n    <div class=\"member\"\n         *ngFor=\"let member of members\"\n         (click)=\"onClick(member)\">\n      <img class=\"avatar\"\n           [src]=\"member.profile.avatar\">\n      <div class=\"detail\">\n        <span class=\"name\">{{ member.profile.firstname }} {{ member.profile.lastname }}</span>\n        <span> {{ member.profile.title }} </span>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./app/components/team/team.component.scss":
/*!*************************************************!*\
  !*** ./app/components/team/team.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-section {\n  text-align: center;\n  background-color: #191818;\n  color: #999;\n  padding: 50px 10px 100px 10px; }\n\n.section-title {\n  font-weight: 300;\n  font-size: 5vmin;\n  margin-top: 0;\n  margin-bottom: 2em;\n  color: #dddddd; }\n\n.team {\n  display: flex;\n  flex-direction: row;\n  min-height: 260px; }\n\n.team .member {\n    display: flex;\n    flex-direction: column;\n    flex: 4;\n    justify-content: space-between;\n    align-items: center; }\n\n.team .member .avatar {\n      width: 160px;\n      height: 160px;\n      margin-top: 10px;\n      transition: 0.3s ease; }\n\n.team .member .detail span {\n      display: block;\n      font-weight: 300; }\n\n.team .member .detail .name {\n      font-weight: 400;\n      font-size: 20px;\n      color: #dddddd; }\n\n.team .member:hover {\n      cursor: pointer; }\n\n.team .member:hover .avatar {\n        -webkit-transform: scale(1.07);\n                transform: scale(1.07); }\n\n.team .member:hover .name {\n        color: red; }\n"

/***/ }),

/***/ "./app/components/team/team.component.ts":
/*!***********************************************!*\
  !*** ./app/components/team/team.component.ts ***!
  \***********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/data.service */ "./app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_members_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/members.js */ "./app/data/members.js");
/* harmony import */ var _data_members_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_members_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamComponent = /** @class */ (function () {
    function TeamComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.members = _data_members_js__WEBPACK_IMPORTED_MODULE_2__;
    }
    TeamComponent.prototype.ngOnInit = function () { };
    TeamComponent.prototype.onClick = function (member) {
        this.dataService.setMember(member);
        this.router.navigate(['/member']);
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./app/components/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./app/data/members.js":
/*!*****************************!*\
  !*** ./app/data/members.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  {
    profile: {
      firstname: 'Shagai',
      lastname: 'Nyamdorj',
      email: 'shagai.nyamdorj@gmail.com',
      phone: '(708)465-2911',
      linkedin: 'https://www.linkedin.com/in/shagainyamdorj',
      website: 'shagai.nyamdorj.com',
      avatar: '../../../assets/images/members/shagai.png',
      image: '../../../assets/images/shagai.jpg',
      title: 'Software Engineer'
    },
    style: {
      backgroundColor: '#203655',
      textColor: '#DDDDDD'
    },
    careers: [
      {
        company: 'Amazon',
        position: 'Software Developer Engineer',
        date: 'Nov 2015 - Present',
        location: 'Seattle WA, USA'
      },
      {
        company: 'ITS Inc',
        position: 'Web Developer',
        date: 'Mar 2012 - Nov 2015',
        location: 'Des Moines IA, USA'
      },
      {
        company: 'INI FUJI INFOX',
        position: 'Software Engineer',
        date: 'Feb 2009 - Oct 2011',
        location: 'Tokyo, Japan'
      },
      {
        company: 'INI FUJI INFOX',
        position: 'Intern Software Engineer',
        date: 'Jul 2008 - Feb 2009',
        location: 'Tokyo, Japan'
      }
    ]
  },
  {
    profile: {
      firstname: 'Luvsansharav',
      lastname: 'Altangerel',
      email: 'luvsansharav.a@gmail.com',
      phone: '(919)244-7825',
      linkedin: 'https:/www.linkedin.com/in/luvsansharav',
      avatar: '../../../assets/images/members/luvsansharav.png',
      image: '../../../assets/images/luvsansharav.jpg',
      title: 'Software Engineer'
    },
    style: {
      backgroundColor: '#F0F0F0',
      textColor: '#656565'
    },
    careers: [
      {
        company: 'Amazon',
        position: 'DevOps Engineer',
        date: 'Jul 2017 - Present',
        location: 'Seattle WA, USA'
      },
      {
        company: 'Caterpillar, Inc',
        position: 'Vendor Consultant',
        date: 'Oct 2016 - Jul 2017',
        location: 'Peoria IL, USA'
      },
      {
        company: 'Capital Group Company',
        position: 'Tech Analyst',
        date: 'Sep 2015 - Oct 2017',
        location: 'Cary NC, USA'
      },
      {
        company: 'The Central Bank of Mongolia',
        position: 'Software Engineer',
        date: 'Sep 2012 - Oct 2014',
        location: 'Ulaanbaatar Mongolia'
      },
      {
        company: 'Interactive LLC',
        position: 'Software Developer',
        date: 'Jan 2010 - Sep 2012',
        location: 'Ulaanbaatar Mongolia'
      }
    ]
  },
  {
    profile: {
      firstname: 'Mandal',
      lastname: 'Tsaschikher',
      email: 'mandal.ts@gmail.com',
      phone: '(415)465-9630',
      linkedin: 'https://www.linkedin.com/in/mandalts',
      website: 'www.mandal.com',
      avatar: '../../../assets/images/members/mandal.png',
      image: '../../../assets/images/mandal.jpg',
      title: 'Software Engineer'
    },
    style: {
      backgroundColor: '#DB7D25',
      textColor: '#505050'
    },
    careers: [
      {
        company: 'Amazon',
        position: 'DevOps Engineer',
        date: 'May 2018 - Present',
        location: 'Seattle WA, USA'
      },
      {
        company: 'Corpa Inc',
        position: 'Software Development Engineer',
        date: 'Oct 2015 - Mar 2018',
        location: 'San Francisco CA, USA'
      },
      {
        company: 'Singleton LLC',
        position: 'Software Development Engineer',
        date: 'July 2011 - May 2014',
        location: 'Ulaanbaatar TUV, MNG'
      }
    ]
  },
  {
    profile: {
      firstname: 'Uurtsaikh',
      lastname: 'Batbileg',
      email: 'uurtsaikh.ba@gmail.com',
      phone: '(469)955-8225',
      linkedin: 'https:/www.linkedin.com/in/uurtsaikh',
      website: 'www.uurtsaikh.com',
      avatar: '../../../assets/images/members/uurtsaikh.png',
      image: '../../../assets/images/uurtsaikh.jpg',
      title: 'Software Engineer'
    },
    style: {
      backgroundColor: '#1F1F1F',
      textColor: '#DDDDDD'
    },
    careers: [
      {
        company: 'Amazon',
        position: 'Web Developer',
        date: 'Oct 2017 - Present',
        location: 'Seattle WA, USA'
      },
      {
        company: 'The Walt Disney',
        position: 'Web Developer',
        date: 'Mar 2016 - Sep 2017',
        location: 'Seattle WA, USA'
      },
      {
        company: 'Fidelity Investments',
        position: 'Web Developer',
        date: 'June 2015 - Mar 2016',
        location: 'Cary NC, USA'
      },
      {
        company: 'Civil Aviation Authority of Mongolia',
        position: 'Software Engineer',
        date: 'April 2011 - May 2014',
        location: 'Ulaanbaatar Mongolia'
      }
    ]
  }
];


/***/ }),

/***/ "./app/pages/home/home.component.html":
/*!********************************************!*\
  !*** ./app/pages/home/home.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-image1\">\n  <div class=\"p-text\">\n    <span class=\"border\">\n      Dream Team\n    </span>\n  </div>\n</div>\n\n<section class=\"section section-light\">\n  <h2>Section one</h2>\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur veniam cum qui mollitia aperiam quam nostrum\n  fugit et illo at nisi, ipsa porro libero nihil, voluptas non dicta nemo. Reiciendis molestiae deleniti sapiente voluptatibus\n  possimus ipsum quis accusamus provident nostrum distinctio officiis enim voluptas minus, dolore fugiat expedita quidem\n  minima. Officia, sit mollitia corporis, quasi dicta illum, incidunt optio ratione libero aut dolorem eveniet quae aliquid\n  nostrum quam facere officiis rem! Iure in et magni aspernatur quo voluptatibus nisi esse eveniet, facere incidunt amet.\n  Excepturi reiciendis facilis distinctio minus doloremque recusandae? Fugiat. Repellat sed dolore, quae voluptatum veniam\n  atque!\n</section>\n\n\n<div class=\"p-image2\">\n  <div class=\"p-text\">\n    <span class=\"border trans\">\n      Team introduction\n    </span>\n  </div>\n</div>\n\n<section class=\"section section-dark\">\n  <h2>Team introduction</h2>\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur veniam cum qui mollitia aperiam quam nostrum\n  fugit et illo at nisi, ipsa porro libero nihil, voluptas non dicta nemo. Reiciendis molestiae deleniti sapiente voluptatibus\n  possimus ipsum quis accusamus provident nostrum distinctio officiis enim voluptas minus, dolore fugiat expedita quidem\n  minima. Officia, sit mollitia corporis, quasi dicta illum, incidunt oiis. Natus harum distinctio dolore repudiandae, reprehenderit\n  adipisci at recusandae beatae mollitia iste nisi quis magnam, delectus dolorem totam asperiores eligendi ullam nam laboriosam\n  placeat\n</section>\n\n<div class=\"p-image3\">\n  <div class=\"p-text\">\n    <span class=\"border trans\">\n      Team introduction\n    </span>\n  </div>\n</div>\n\n<app-team></app-team>\n\n\n<div class=\"contact-us-image\">\n  <div class=\"p-text\">\n    <span class=\"border\">\n      CONTACT US\n    </span>\n  </div>\n</div>\n\n<app-contact-us></app-contact-us>\n\n<div class=\"p-image1\">\n  <div class=\"p-text\">\n    <span class=\"border\">\n      Dream Team\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/pages/home/home.component.scss":
/*!********************************************!*\
  !*** ./app/pages/home/home.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-image1 {\n  background-image: url('seattle.jpg');\n  min-height: 100%;\n  background-repeat: no-repeat; }\n\n.p-image2 {\n  background-image: url('coding.jpg');\n  min-height: 400px; }\n\n.p-image3 {\n  background-image: url('desk.jpg');\n  min-height: 400px; }\n\n.contact-us-image {\n  background-image: url('contactus.jpg');\n  min-height: 400px; }\n\n.p-image1,\n.p-image2,\n.p-image3,\n.contact-us-image {\n  position: relative;\n  opacity: 0.7;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.section {\n  text-align: center;\n  padding: 15px 18px; }\n\n.section-light {\n  background-color: #f4f4f4;\n  color: #666; }\n\n.section-dark {\n  background-color: #282e34;\n  color: #ddd; }\n\n.p-text {\n  position: absolute;\n  top: 50%;\n  text-align: center;\n  width: 100%;\n  color: #000;\n  font-size: 27px;\n  letter-spacing: 8px;\n  text-transform: uppercase; }\n\n.p-text .border {\n    background-color: #111;\n    color: #fff;\n    padding: 20px; }\n\n@media (max-width: 568px) {\n  .p-image1,\n  .p-image2,\n  .p-image3 {\n    background-attachment: scroll; } }\n"

/***/ }),

/***/ "./app/pages/home/home.component.ts":
/*!******************************************!*\
  !*** ./app/pages/home/home.component.ts ***!
  \******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.activatedRoute.queryParams.subscribe(function (params) {
            switch (params.segment) {
                case 'team':
                    document
                        .getElementById('team')
                        .scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'contact':
                    document
                        .getElementById('contact')
                        .scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/pages/member/member.component.html":
/*!************************************************!*\
  !*** ./app/pages/member/member.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"member\">\n\n  <div class=\"avatar\"\n       id=\"avatar\">\n  </div>\n\n  <div class=\"detail\"\n       id=\"detail\">\n    <h3 class=\"name\">\n      <span class=\"firstname\">{{ member.profile.firstname }}</span> {{ member.profile.lastname }}</h3>\n    <div class=\"experiences\">\n      <div class=\"career\"\n           *ngFor=\"let career of member.careers\">\n        <span class=\"position\">{{ career.position}}</span>\n        <span class=\"company\">{{ career.company }}</span>\n        <span class=\"date\">{{ career.date }}</span>\n        <span class=\"location\">{{ career.location}} </span>\n      </div>\n    </div>\n    <div class=\"contact\">\n      <span> {{ member.profile.email }} | {{ member.profile.phone }} | {{ member.profile.linkedin }} | {{ member.profile.website}}</span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./app/pages/member/member.component.scss":
/*!************************************************!*\
  !*** ./app/pages/member/member.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".member {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  height: 100%;\n  font-size: 2vh; }\n  .member .avatar {\n    display: flex;\n    flex: 2;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n  .member .detail {\n    flex: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: 'Helvetica Nueue', sans-serif; }\n  .member .detail .experiences {\n      margin-left: 50px;\n      margin-top: 30px;\n      margin-bottom: 30px;\n      font-size: 1.5vh; }\n  .member .detail .firstname {\n      font-weight: 600; }\n  .member .detail .name {\n      font-weight: 400;\n      text-transform: uppercase;\n      margin: 0;\n      font-size: 5vmin;\n      margin-left: 40px;\n      line-height: 1em; }\n  .member .detail .position,\n    .member .detail .company {\n      text-transform: uppercase;\n      font-size: 1.8vh; }\n  .member .detail .company {\n      font-weight: 600; }\n  .member .detail .career {\n      margin: 20px 0; }\n  .member .detail .career span {\n        display: block;\n        line-height: 1.3em; }\n  .member .detail .contact {\n      margin-left: 50px;\n      font-size: 1.5vh; }\n"

/***/ }),

/***/ "./app/pages/member/member.component.ts":
/*!**********************************************!*\
  !*** ./app/pages/member/member.component.ts ***!
  \**********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/data.service */ "./app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberComponent = /** @class */ (function () {
    function MemberComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.member = null;
    }
    MemberComponent.prototype.ngOnInit = function () {
        this.member = this.dataService.getMember();
        if (!this.member) {
            this.router.navigate(['/home']);
        }
        else {
            document.getElementById('avatar').style.backgroundImage =
                'url(' + this.member.profile.image + ')';
            document.getElementById('detail').style.backgroundColor = this.member.style.backgroundColor;
            document.getElementById('detail').style.color = this.member.style.textColor;
        }
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./app/pages/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.scss */ "./app/pages/member/member.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./app/services/data.service.ts":
/*!**************************************!*\
  !*** ./app/services/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_members_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/members.js */ "./app/data/members.js");
/* harmony import */ var _data_members_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_members_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.member = null;
        this.member = _data_members_js__WEBPACK_IMPORTED_MODULE_1__["0"];
    }
    DataService.prototype.setMember = function (member) {
        this.member = member;
    };
    DataService.prototype.getMember = function () {
        return this.member;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/uurtsaikh/workspace/dream.team/website/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map