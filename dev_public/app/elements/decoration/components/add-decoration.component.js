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
var form_generator_service_1 = require("../../../shared/form-generator.service");
var AddDecorationComponent = (function () {
    function AddDecorationComponent(formGenerator) {
        this.formGenerator = formGenerator;
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('zcoord', new forms_1.FormControl(100, forms_1.Validators.required));
    }
    AddDecorationComponent.prototype.ngOnInit = function () {
    };
    AddDecorationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            templateUrl: '../templates/add-decoration.component.html',
            styleUrls: ['../css/add-decoration.component.min.scss'],
        }), 
        __metadata('design:paramtypes', [form_generator_service_1.FormGenerator])
    ], AddDecorationComponent);
    return AddDecorationComponent;
}());
exports.AddDecorationComponent = AddDecorationComponent;
//# sourceMappingURL=add-decoration.component.js.map