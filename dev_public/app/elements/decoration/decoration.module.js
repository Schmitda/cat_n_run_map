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
var add_decoration_component_1 = require("./components/add-decoration.component");
var decoration_routing_1 = require("./decoration.routing");
var shared_module_1 = require("../../shared/shared.module");
var DecorationModule = (function () {
    function DecorationModule() {
    }
    DecorationModule = __decorate([
        core_1.NgModule({
            imports: [decoration_routing_1.DecorationRouting, shared_module_1.SharedModule],
            exports: [],
            declarations: [add_decoration_component_1.AddDecorationComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DecorationModule);
    return DecorationModule;
}());
exports.DecorationModule = DecorationModule;
//# sourceMappingURL=decoration.module.js.map