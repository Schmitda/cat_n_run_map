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
var background_component_1 = require("./components/background.component");
var shared_module_1 = require("../../shared/shared.module");
var background_routing_1 = require("./background.routing");
var core_1 = require("@angular/core");
var BackgroundModule = (function () {
    function BackgroundModule() {
    }
    BackgroundModule = __decorate([
        core_1.NgModule({
            imports: [
                background_routing_1.BackgroundRouting,
                shared_module_1.SharedModule
            ],
            exports: [],
            declarations: [
                background_component_1.BackgroundComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], BackgroundModule);
    return BackgroundModule;
}());
exports.BackgroundModule = BackgroundModule;
//# sourceMappingURL=background.module.js.map