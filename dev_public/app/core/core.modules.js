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
var common_1 = require('@angular/common');
var user_service_service_1 = require("./user-service.service");
var my_nav_component_1 = require("./my-nav.component");
var auth_service_1 = require("../auth/auth.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var background_service_1 = require("../background/services/background.service");
var file_service_1 = require("./services/file.service");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [my_nav_component_1.MyNavComponent],
            exports: [my_nav_component_1.MyNavComponent, common_1.CommonModule, platform_browser_1.BrowserModule, http_1.HttpModule],
            providers: [user_service_service_1.UserService, auth_service_1.AuthGuard, background_service_1.BackgroundService, file_service_1.FileService]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.modules.js.map