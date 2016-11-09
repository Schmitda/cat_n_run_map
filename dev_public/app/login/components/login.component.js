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
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var user_service_service_1 = require("../../core/user-service.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.isSuccessFull = false;
        this.form = fb.group({
            'username': ['', forms_1.Validators.required],
            'password': ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.userService.login(this.form.controls.username.value, this.form.controls.password.value)
                .subscribe(function (value) {
                if (value) {
                    _this.router.navigate(['/map']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: '../templates/login.component.html',
            styleUrls: ['../css/login.component.min.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map