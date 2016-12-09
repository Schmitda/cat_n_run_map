"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/observable/of');
var user_service_service_1 = require("../core/services/user-service.service");
var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (this.userService.isLoggedIn) {
            return Observable_1.Observable.of(true);
        }
        return Observable_1.Observable.create(function (observer) {
            _this.userService.checkIfSessionExists().
                subscribe(function () {
                if (_this.userService.isLoggedIn) {
                    observer.next(true);
                    observer.complete();
                }
                else {
                    // Store the attempted URL for redirecting
                    var redirectUrl = state.url;
                    // Navigate to the login page
                    _this.router.navigate(['/login']);
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_service_1.UserService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.service.js.map