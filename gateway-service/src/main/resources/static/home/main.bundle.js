webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(addressId, addressLine1, addressLine2, postCode, city, state, country, location) {
        this.addressId = addressId;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.postCode = postCode;
        this.city = city;
        this.state = state;
        this.country = country;
        this.location = location;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"index.html\">JP Property Manager</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <button *ngIf=\"principal.authenticated\" type=\"button\" style=\"cursor: pointer;\" class=\"btn btn-link\" (click)=\"onLogout()\">\n      Logout\n    </button>\n  </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>Property Manager App</h1>\n    <p *ngIf=\"!principal.authenticated\" class=\"lead\"></p>\n    <p *ngIf=\"principal.isAuthenticated()\" class=\"lead\">The property manager allows a user to add/remove/modify a property\n      and its attributes. </p>\n  </div>\n</div>\n\n<section class=\"properties\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <app-property-list [principal]=\"principal\"\n                               (onPropertySelected)=\"selectProperty($event)\"></app-property-list>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"selectedProperty != null\" class=\"col-md-3\">\n        <app-property-detail [selectedProperty]=\"selectedProperty\" [principal]=\"principal\"\n                             (closeProperty)=\"closePropertyDetail()\"></app-property-detail>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__principal__ = __webpack_require__("./src/app/principal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.selectedProperty = null;
        this.principal = new __WEBPACK_IMPORTED_MODULE_1__principal__["a" /* Principal */](false, []);
        this.loginFailed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.me()
            .subscribe(function (response) {
            var principalJson = response.json();
            _this.principal = new __WEBPACK_IMPORTED_MODULE_1__principal__["a" /* Principal */](principalJson.authenticated, principalJson.authorities);
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.httpService.logout()
            .subscribe(function (response) {
            if (response.status === 200) {
                _this.loginFailed = false;
                _this.principal = new __WEBPACK_IMPORTED_MODULE_1__principal__["a" /* Principal */](false, []);
                window.location.replace("/");
            }
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.closePropertyDetail = function () {
        this.selectedProperty = null;
    };
    AppComponent.prototype.selectProperty = function (property) {
        this.selectedProperty = property;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__click_stop_propagation_directive__ = __webpack_require__("./src/app/click-stop-propagation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__property_property_detail_property_detail_component__ = __webpack_require__("./src/app/property/property-detail/property-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__property_property_list_property_list_component__ = __webpack_require__("./src/app/property/property-list/property-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__click_stop_propagation_directive__["a" /* ClickStopPropagationDirective */],
                __WEBPACK_IMPORTED_MODULE_6__property_property_detail_property_detail_component__["a" /* PropertyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__property_property_list_property_list_component__["a" /* PropertyListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/click-stop-propagation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickStopPropagationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickStopPropagationDirective = /** @class */ (function () {
    function ClickStopPropagationDirective() {
    }
    ClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickStopPropagationDirective.prototype, "onClick", null);
    ClickStopPropagationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appClickStopPropagation]'
        })
    ], ClickStopPropagationDirective);
    return ClickStopPropagationDirective;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.me = function () {
        return this.http.get("/me", this.makeOptions());
    };
    HttpService.prototype.logout = function () {
        return this.http.post("/logout", '', this.makeOptions());
    };
    HttpService.prototype.getProperties = function () {
        return this.http.get("/propertyservice/v1/property/all", this.makeOptions());
    };
    HttpService.prototype.getProperty = function (property) {
        return this.http.get("/propertyservice/v1/property/" + property.propertyId, this.makeOptions());
    };
    HttpService.prototype.createProperty = function (newProperty) {
        return this.http.post("/propertyservice/v1/property/", newProperty, this.makeOptions());
    };
    HttpService.prototype.updateProperty = function (newProperty) {
        return this.http.put("/propertyservice/v1/property/" + newProperty.propertyId, newProperty, this.makeOptions());
    };
    HttpService.prototype.deleteProperty = function (property) {
        return this.http.delete("/propertyservice/v1/property/" + property.propertyId, this.makeOptions());
    };
    HttpService.prototype.makeOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = /** @class */ (function () {
    function Location(locationId, latitude, longitude) {
        this.locationId = locationId;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/price.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Price; });
var Price = /** @class */ (function () {
    function Price(priceId, date, amount) {
        this.priceId = priceId;
        this.date = date;
        this.amount = amount;
    }
    return Price;
}());



/***/ }),

/***/ "./src/app/principal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Principal; });
/* unused harmony export Authority */
var Principal = /** @class */ (function () {
    function Principal(authenticated, authorities) {
        var _this = this;
        this.authorities = [];
        this.authenticated = authenticated;
        authorities.map(function (auth) { return _this.authorities.push(new Authority(auth.authority)); });
    }
    Principal.prototype.isAuthenticated = function () {
        return this.authorities.some(function (auth) { return auth.authority.indexOf('USER') > -1; });
    };
    return Principal;
}());

var Authority = /** @class */ (function () {
    function Authority(authority) {
        this.authority = authority;
    }
    return Authority;
}());



/***/ }),

/***/ "./src/app/property.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Property; });
var Property = /** @class */ (function () {
    function Property(propertyId, surface, bedroomCount, address, prices) {
        this.propertyId = propertyId;
        this.surface = surface;
        this.bedroomCount = bedroomCount;
        this.address = address;
        this.prices = prices;
    }
    return Property;
}());



/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePropertyDetail()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <img src=\"assets/ico/house.png\" class=\"rounded float-left\" alt=\"Property\" height=\"45\" width=\"45\">\n    <h5 class=\"card-subtitle mb-2 text-muted\">Postcode: {{selectedProperty.address.postCode}}</h5>\n    <h5 class=\"card-subtitle mb-2 text-muted\">City: {{selectedProperty.address.city}}</h5>\n    <h5 class=\"card-subtitle mb-2 text-muted\">Surface: {{selectedProperty.surface}} sq.m.</h5>\n    <h5 class=\"card-subtitle mb-2 text-muted\">Price: {{selectedProperty.prices[selectedProperty.prices.length - 1].amount}} €</h5>\n    <p class=\"card-text\">A quick summary of the property</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property__ = __webpack_require__("./src/app/property.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal__ = __webpack_require__("./src/app/principal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyDetailComponent = /** @class */ (function () {
    function PropertyDetailComponent() {
        this.selectedProperty = null;
        this.principal = null;
        this.closeProperty = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    PropertyDetailComponent.prototype.ngOnInit = function () {
    };
    PropertyDetailComponent.prototype.closePropertyDetail = function () {
        this.closeProperty.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__property__["a" /* Property */])
    ], PropertyDetailComponent.prototype, "selectedProperty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* Principal */])
    ], PropertyDetailComponent.prototype, "principal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PropertyDetailComponent.prototype, "closeProperty", void 0);
    PropertyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-property-detail',
            template: __webpack_require__("./src/app/property/property-detail/property-detail.component.html"),
            styles: [__webpack_require__("./src/app/property/property-detail/property-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyDetailComponent);
    return PropertyDetailComponent;
}());



/***/ }),

/***/ "./src/app/property/property-list/property-list.component.css":
/***/ (function(module, exports) {

module.exports = ".custom-close {\n  float:right;\n}\n"

/***/ }),

/***/ "./src/app/property/property-list/property-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-14\" *ngFor=\"let property of properties; let i = index;\" (click)=\"selectProperty(property)\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div *ngIf=\"propertiesToEdit.indexOf(i) === -1 ; then propertyView else propertyEdit\"></div>\n      <ng-template #propertyView>\n        <button appClickStopPropagation *ngIf=\"principal.isAuthenticated()\" type=\"button\" style=\"cursor: pointer;\" class=\"btn btn-danger custom-close\" (click)=\"delete(i)\">Delete</button>\n        <button appClickStopPropagation *ngIf=\"principal.isAuthenticated()\" type=\"button\" style=\"cursor: pointer;\" class=\"btn btn-warning custom-close\" (click)=\"editProperty(i)\">Edit</button>\n        <h4 class=\"card-title\">Property</h4>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Postcode: {{property.address.postCode}}</h6>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Price: {{property.prices[property.prices.length - 1].amount}} €</h6>\n      </ng-template>\n      <ng-template #propertyEdit>\n        <form appClickStopPropagation (ngSubmit)=\"saveProperty(i, newProperties[i])\" class=\"mt-2 mt-md-0\" #f1=\"ngForm\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n            <label for=\"addressLine1EditProperty\">Address</label>\n            <input id=\"addressLine1EditProperty\" name=\"addressLine1\" [(ngModel)]=\"newProperties[i].address.addressLine1\" required class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n            <label for=\"addressLine2EditProperty\">Address 2</label>\n            <input id=\"addressLine2EditProperty\" name=\"addressLine2\" [(ngModel)]=\"newProperties[i].address.addressLine2\" required class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"postCodeEditProperty\">Postcode</label>\n              <input id=\"postCodeEditProperty\" name=\"postcode\" [(ngModel)]=\"newProperties[i].address.postCode\" required class=\"form-control\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"cityEditProperty\">City</label>\n              <input id=\"cityEditProperty\" name=\"city\" [(ngModel)]=\"newProperties[i].address.city\" required class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"stateEditProperty\">State</label>\n              <input id=\"stateEditProperty\" name=\"state\" [(ngModel)]=\"newProperties[i].address.state\" required class=\"form-control\" type=\"text\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"countryEditProperty\">Country</label>\n              <input id=\"countryEditProperty\" name=\"country\" [(ngModel)]=\"newProperties[i].address.country\" required class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"latitudeEditProperty\">Latitude</label>\n              <input id=\"latitudeEditProperty\" name=\"latitude\" [(ngModel)]=\"newProperties[i].address.location.latitude\" required class=\"form-control\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"longitudeEditProperty\">Longitude</label>\n              <input id=\"longitudeEditProperty\" name=\"longitude\" [(ngModel)]=\"newProperties[i].address.location.longitude\" required class=\"form-control\" type=\"number\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"surfaceEditProperty\">Surface</label>\n              <input id=\"surfaceEditProperty\" name=\"surface\" [(ngModel)]=\"newProperties[i].surface\" required class=\"form-control\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"bedroomCountEditProperty\">Bedroom count</label>\n              <input id=\"bedroomCountEditProperty\" name=\"bedroomCount\" [(ngModel)]=\"newProperties[i].bedroomCount\" required class=\"form-control\" type=\"number\">\n            </div>\n          </div>\n          <div class=\"form-row\" *ngFor=\"let price of newProperties[i].prices; trackBy:customTrackBy\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"{{'priceEditProperty' + price.priceId}}\">Price</label>\n              <input id=\"{{'priceEditProperty' + price.priceId}}\" name=\"{{'priceEditProperty' + price.priceId}}\" [(ngModel)]=\"price.amount\" required class=\"form-control\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"{{'priceDateEditProperty' + price.priceId}}\">Date</label>\n              <input id=\"{{'priceDateEditProperty' + price.priceId}}\" name=\"{{'priceDateEditProperty' + price.priceId}}\" type=\"text\" date='dd.MM.yyyy' [(ngModel)]=\"price.date\" required class=\"form-control\" placeholder=\"04.07.2018\">\n            </div>\n          </div>\n          <button style=\"cursor: pointer;\" class=\"btn btn-outline-success my-2 my-sm-0 custom-close\" type=\"submit\" [disabled]=\"!f1.valid\">Save</button>\n          <button appClickStopPropagation type=\"button\" style=\"cursor: pointer;\" class=\"btn btn-secondary custom-close\" (click)=\"cancelEditProperty(i)\">Cancel</button>\n        </form>\n        <h4 class=\"card-title center-block\">Add New Price</h4>\n        <form appClickStopPropagation (ngSubmit)=\"addPriceToProperty(newPrice, i, newProperties[i])\" class=\"mt-2 mt-md-0\" #f3=\"ngForm\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"priceAddProperty\">Price</label>\n              <input id=\"priceAddProperty\" name=\"amount\" [(ngModel)]=\"newPrice.amount\" required class=\"form-control\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"priceDateAddProperty\">Date</label>\n              <input id=\"priceDateAddProperty\" name=\"priceDate\" type=\"text\" date='dd.MM.yyyy' [(ngModel)]=\"newPrice.date\" required class=\"form-control\" placeholder=\"04.07.2018\">\n            </div>\n          </div>\n          <button style=\"cursor: pointer;\" class=\"btn btn-outline-success my-2 my-sm-0 custom-close\" type=\"submit\" [disabled]=\"!f3.valid\">Add</button>\n        </form>\n      </ng-template>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"principal.isAuthenticated()\" class=\"col-md-14\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div *ngIf=\"!isAddNewProperty; then propertyPlaceHolder else propertyAdd\"></div>\n      <ng-template #propertyPlaceHolder>\n        <h4 (click)=\"activateAddNewProperty()\" style=\"cursor: pointer;\" class=\"card-title center-block\">Add New Property</h4>\n      </ng-template>\n      <ng-template #propertyAdd>\n        <form appClickStopPropagation (ngSubmit)=\"addNewProperty(newProperty, addressLine1NewProperty)\" class=\"mt-2 mt-md-0\" #f2=\"ngForm\">\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-12\">\n            <label for=\"addressLine1NewProperty\">Address</label>\n            <input id=\"addressLine1NewProperty\" name=\"addressLine1\" [(ngModel)]=\"newProperty.address.addressLine1\" required class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"1234 Main St\" #addressLine1NewProperty>\n             </div>\n          </div>\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-12\">\n            <label for=\"addressLine2NewProperty\">Address 2</label>\n            <input id=\"addressLine2NewProperty\" name=\"addressLine2\" [(ngModel)]=\"newProperty.address.addressLine2\" required class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Apartment, studio, or floor\">\n            </div>\n          </div>\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-6\">\n            <label for=\"postCodeNewProperty\">Postcode</label>\n            <input id=\"postCodeNewProperty\" name=\"postCode\" [(ngModel)]=\"newProperty.address.postCode\" required class=\"form-control mr-sm-2\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n            <label for=\"cityNewProperty\">City</label>\n            <input id=\"cityNewProperty\" name=\"city\" [(ngModel)]=\"newProperty.address.city\" required class=\"form-control mr-sm-2\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-6\">\n            <label for=\"stateNewProperty\">State</label>\n            <input id=\"stateNewProperty\" name=\"state\" [(ngModel)]=\"newProperty.address.state\" required class=\"form-control mr-sm-2\" type=\"text\">\n            </div>\n            <div class=\"form-group col-md-6\">\n            <label for=\"countryNewProperty\">Country</label>\n            <input id=\"countryNewProperty\" name=\"country\" [(ngModel)]=\"newProperty.address.country\" required class=\"form-control mr-sm-2\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-6\">\n            <label for=\"latitudeNewProperty\">Latitude</label>\n            <input id=\"latitudeNewProperty\" name=\"latitude\" [(ngModel)]=\"newProperty.address.location.latitude\" required class=\"form-control mr-sm-2\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n            <label for=\"longitudeNewProperty\">Longitude</label>\n            <input id=\"longitudeNewProperty\" name=\"longitude\" [(ngModel)]=\"newProperty.address.location.longitude\" required class=\"form-control mr-sm-2\" type=\"number\">\n            </div>\n          </div>\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-6\">\n            <label for=\"surfaceNewProperty\">Surface</label>\n            <input id=\"surfaceNewProperty\" name=\"surface\" [(ngModel)]=\"newProperty.surface\" required class=\"form-control mr-sm-2\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n            <label for=\"bedroomCountNewProperty\">Bedroom count</label>\n            <input id=\"bedroomCountNewProperty\" name=\"bedroomCount\" [(ngModel)]=\"newProperty.bedroomCount\" required class=\"form-control mr-sm-2\" type=\"number\">\n            </div>\n          </div>\n          <div class=\"form-row col-md-12\">\n            <div class=\"form-group col-md-6\">\n            <label for=\"priceNewProperty\">Price</label>\n            <input id=\"priceNewProperty\" name=\"amount\" [(ngModel)]=\"newProperty.prices[0].amount\" required class=\"form-control mr-sm-2\" type=\"number\">\n            </div>\n            <div class=\"form-group col-md-6\">\n            <label for=\"priceDateNewProperty\">Date</label>\n            <input id=\"priceDateNewProperty\" name=\"priceDate\" type=\"text\" date='dd.MM.yyyy'  [(ngModel)]=\"newProperty.prices[0].date\" required class=\"form-control mr-sm-2\">\n            </div>\n          </div>\n          <button style=\"cursor: pointer;\" class=\"btn btn-outline-success my-2 my-sm-0 custom-close\" type=\"submit\" [disabled]=\"!f2.valid\">Save</button>\n          <button appClickStopPropagation type=\"button\" style=\"cursor: pointer;\" class=\"btn btn-secondary custom-close\" (click)=\"cancelAddProperty()\">Cancel</button>\n        </form>\n      </ng-template>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/property/property-list/property-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__principal__ = __webpack_require__("./src/app/principal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property__ = __webpack_require__("./src/app/property.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location__ = __webpack_require__("./src/app/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address__ = __webpack_require__("./src/app/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__price__ = __webpack_require__("./src/app/price.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PropertyListComponent = /** @class */ (function () {
    function PropertyListComponent(httpService) {
        this.httpService = httpService;
        this.principal = null;
        this.onPropertySelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.properties = [];
        this.newProperties = [];
        this.price = new __WEBPACK_IMPORTED_MODULE_6__price__["a" /* Price */](0, null, 0);
        this.prices = [
            this.price
        ];
        this.address = new __WEBPACK_IMPORTED_MODULE_5__address__["a" /* Address */](0, "", "", "", "", "", "", new __WEBPACK_IMPORTED_MODULE_4__location__["a" /* Location */](0, 0, 0));
        this.newProperty = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */]("", 0, 0, this.address, this.prices);
        this.newPrice = new __WEBPACK_IMPORTED_MODULE_6__price__["a" /* Price */](0, null, 0);
        this.propertiesToEdit = [];
        this.isAddNewProperty = false;
        this.selectedProperty = null;
    }
    PropertyListComponent.prototype.ngOnInit = function () {
        this.loadProperties();
    };
    PropertyListComponent.prototype.loadProperties = function () {
        var _this = this;
        this.httpService.getProperties()
            .subscribe(function (response) {
            var propertiesJson = response.json();
            propertiesJson.forEach(function (property) {
                _this.properties.push(new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */](property.propertyId, property.surface, property.bedroomCount, property.address, property.prices));
                _this.newProperties.push(new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */](property.propertyId, property.surface, property.bedroomCount, property.address, property.prices));
            });
        }, function (error) {
            console.log(error);
        });
    };
    PropertyListComponent.prototype.cancelEditProperty = function (propertyIndex) {
        if (this.propertiesToEdit.indexOf(propertyIndex) !== -1) {
            this.propertiesToEdit.splice(this.propertiesToEdit.indexOf(propertyIndex), 1); //remove the index of the property to edit
            //get the original property
            var propertyCopy = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */](this.properties[propertyIndex].propertyId, this.properties[propertyIndex].surface, this.properties[propertyIndex].bedroomCount, this.properties[propertyIndex].address, this.properties[propertyIndex].prices);
            this.newProperties.splice(propertyIndex, 1, propertyCopy); //replace the edited property with the old property
        }
    };
    PropertyListComponent.prototype.editProperty = function (propertyIndex) {
        this.propertiesToEdit.push(propertyIndex);
    };
    PropertyListComponent.prototype.saveProperty = function (propertyIndex, newProperty) {
        var _this = this;
        console.log(newProperty);
        //save the property to the database
        this.httpService.updateProperty(newProperty)
            .subscribe(function (response) {
            var propertyJson = response.json();
            var property = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */](propertyJson.propertyId, propertyJson.surface, propertyJson.bedroomCount, propertyJson.address, propertyJson.prices);
            //update the current array of properties
            var propertyArr = _this.properties.find(function (b) { return b.propertyId === property.propertyId; });
            propertyArr.bedroomCount = property.bedroomCount;
            propertyArr.surface = property.surface;
            propertyArr.address = property.address;
            propertyArr.prices = property.prices;
            var propertyArrN = _this.newProperties.find(function (b) { return b.propertyId === property.propertyId; });
            propertyArrN.bedroomCount = property.bedroomCount;
            propertyArrN.surface = property.surface;
            propertyArrN.address = property.address;
            propertyArrN.prices = property.prices;
            _this.selectProperty(propertyArr);
            _this.propertiesToEdit.splice(_this.propertiesToEdit.indexOf(propertyIndex), 1); //remove the index of the property to edit
            console.log(_this.newProperties);
            console.log(_this.properties);
        }, function (error) {
            console.log(error);
        });
    };
    PropertyListComponent.prototype.delete = function (propertyIndex) {
        var _this = this;
        var property = this.properties[propertyIndex];
        this.httpService.deleteProperty(property)
            .subscribe(function () {
            if (_this.selectedProperty !== null && _this.properties[propertyIndex].propertyId === _this.selectedProperty.propertyId) {
                _this.selectedProperty = null;
                _this.onPropertySelected.emit(_this.selectedProperty);
            }
            _this.properties.splice(propertyIndex, 1); //remove the property at this index;
            _this.newProperties.splice(propertyIndex, 1); //remove the editing property at this index
        }, function (error) {
            console.log(error);
        });
    };
    PropertyListComponent.prototype.activateAddNewProperty = function () {
        this.isAddNewProperty = true;
        this.newProperty = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */]("", 0, 0, this.address, this.prices);
        this.propertiesToEdit.fill(-1);
    };
    PropertyListComponent.prototype.addNewProperty = function (newProperty, element) {
        var _this = this;
        //write new property to db
        console.log(newProperty);
        this.httpService.createProperty(newProperty)
            .subscribe(function (response) {
            var propertyJson = response.json();
            var property = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */](propertyJson.propertyId, propertyJson.surface, propertyJson.bedroomCount, propertyJson.address, propertyJson.prices);
            console.log(property);
            _this.properties.push(property);
            _this.newProperties.push(property);
            _this.selectProperty(property);
            _this.cancelAddProperty();
            _this.newProperty = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* Property */]("", 0, 0, _this.address, _this.prices);
            element.focus();
        }, function (error) {
            console.log(error);
        });
    };
    PropertyListComponent.prototype.addPriceToProperty = function (price, propertyIndex, property) {
        console.log(property);
        property.prices.push(price);
        console.log(property);
        this.newPrice = new __WEBPACK_IMPORTED_MODULE_6__price__["a" /* Price */](0, null, 0);
        this.saveProperty(propertyIndex, property);
    };
    PropertyListComponent.prototype.cancelAddProperty = function () {
        this.isAddNewProperty = false;
    };
    PropertyListComponent.prototype.selectProperty = function (property) {
        this.selectedProperty = property;
        this.onPropertySelected.emit(property);
    };
    PropertyListComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__principal__["a" /* Principal */])
    ], PropertyListComponent.prototype, "principal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PropertyListComponent.prototype, "onPropertySelected", void 0);
    PropertyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-property-list',
            template: __webpack_require__("./src/app/property/property-list/property-list.component.html"),
            styles: [__webpack_require__("./src/app/property/property-list/property-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]])
    ], PropertyListComponent);
    return PropertyListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map