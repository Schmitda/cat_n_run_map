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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require('rxjs/add/operator/map');
var http_1 = require("@angular/http");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._isLoggedIn = false;
        this._currentUser = new BehaviorSubject_1.BehaviorSubject(undefined);
    }
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.checkIfSessionExists = function () {
        var _this = this;
        var observable = this.http.get('/api/user/session')
            .map(function (res) {
            var body = res.json() || {};
            return body;
        });
        observable.subscribe(function (user) {
            if (user._id !== undefined) {
                console.log(_this);
                _this._currentUser.next(user);
                _this._isLoggedIn = true;
            }
            else {
                _this._isLoggedIn = false;
            }
        });
        return observable;
    };
    UserService.prototype.logoff = function () {
        var _this = this;
        this.http.get('/api/user/logoff')
            .map(this.extractData)
            .subscribe(function (successfull) {
            _this._currentUser.next(null);
            _this._isLoggedIn = false;
        });
    };
    UserService.prototype.save = function (user) {
        return this.http.post('/api/user/', user)
            .map(this.extractData);
    };
    UserService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get('/api/user/')
            .map(this.extractData);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get('/api/user/' + id)
            .map(this.extractData);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/user/' + user._id, user)
            .map(this.extractData);
    };
    UserService.prototype.saveUserAndSetCurrentUser = function (user) {
        var _this = this;
        this.save(user)
            .subscribe(function (user) {
            _this._currentUser.next(user);
        });
    };
    Object.defineProperty(UserService.prototype, "currentUser", {
        get: function () {
            return this._currentUser;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var observable = this.http.post('/api/user/login', {
            username: username,
            password: password
        })
            .map(this.verifyLoginAndExtract);
        observable.subscribe(function (user) {
            if (user._id !== undefined) {
                console.log(_this);
                _this._currentUser.next(user);
                _this._isLoggedIn = true;
            }
            else {
                _this._isLoggedIn = false;
            }
        });
        return observable;
    };
    UserService.prototype.verifyLoginAndExtract = function (res) {
        var user = res.json() || {};
        return user;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user-service.service.js.map