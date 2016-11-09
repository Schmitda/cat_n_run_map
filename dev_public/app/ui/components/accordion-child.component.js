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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var accordion_component_1 = require("./accordion.component");
var core_2 = require("@angular/core");
var AccordionChildComponent = (function () {
    function AccordionChildComponent(accordion) {
        this.accordion = accordion;
        this.isOpen = false;
        this.accordion.addAccordion(this);
    }
    AccordionChildComponent.prototype.onClick = function () {
        this.open();
    };
    AccordionChildComponent.prototype.open = function () {
        this.accordion.openChanged(this);
        this.isOpen = !this.isOpen;
    };
    AccordionChildComponent.prototype.close = function () {
        this.isOpen = false;
    };
    AccordionChildComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionChildComponent.prototype, "title", void 0);
    __decorate([
        core_2.HostListener('click', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AccordionChildComponent.prototype, "onClick", null);
    AccordionChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'accordion-child',
            templateUrl: '../templates/accordion-child.component.html',
            styleUrls: ['../css/accordion-child.component.min.css'],
            animations: [
                core_1.trigger('openChanged', [
                    core_1.state('false', core_1.style({
                        height: '33px'
                    })),
                    core_1.state('true', core_1.style({
                        height: '*'
                    })),
                    core_1.transition('0 <=> 1', core_1.animate('100ms ease-out'))
                ])
            ]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return accordion_component_1.AccordionComponent; }))), 
        __metadata('design:paramtypes', [accordion_component_1.AccordionComponent])
    ], AccordionChildComponent);
    return AccordionChildComponent;
}());
exports.AccordionChildComponent = AccordionChildComponent;
//# sourceMappingURL=accordion-child.component.js.map