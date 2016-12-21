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
var accordion_component_1 = require("./components/accordion.component");
var accordion_child_component_1 = require("./components/accordion-child.component");
var shared_module_1 = require("../shared/shared.module");
var accordion_item_component_1 = require("./components/accordion-item.component");
var UIModule = (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            exports: [accordion_component_1.AccordionComponent, accordion_child_component_1.AccordionChildComponent, accordion_item_component_1.AccordionItemComponent],
            imports: [shared_module_1.SharedModule],
            declarations: [accordion_component_1.AccordionComponent, accordion_child_component_1.AccordionChildComponent, accordion_item_component_1.AccordionItemComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;
//# sourceMappingURL=ui.module.js.map