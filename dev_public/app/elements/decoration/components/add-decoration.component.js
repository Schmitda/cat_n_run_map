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
var decoration_service_1 = require("../services/decoration.service");
var router_1 = require("@angular/router");
var file_service_1 = require("../../../core/services/file.service");
var AddDecorationComponent = (function () {
    function AddDecorationComponent(formGenerator, decorationService, router, fileService) {
        this.formGenerator = formGenerator;
        this.decorationService = decorationService;
        this.router = router;
        this.fileService = fileService;
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('zCoord', new forms_1.FormControl(500));
    }
    AddDecorationComponent.prototype.setFile = function (event) {
        this.file = event.srcElement.files[0];
        this.fileService.calculateImageSize(this.file, this.form);
    };
    AddDecorationComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            var decoration = this.form.value;
            decoration.source = this.file;
            this.decorationService.save(decoration)
                .subscribe(function () {
                _this.router.navigate(['/map']);
            });
        }
    };
    AddDecorationComponent.prototype.ngOnInit = function () {
    };
    AddDecorationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            templateUrl: '../templates/add-decoration.component.html',
        }), 
        __metadata('design:paramtypes', [form_generator_service_1.FormGenerator, decoration_service_1.DecorationService, router_1.Router, file_service_1.FileService])
    ], AddDecorationComponent);
    return AddDecorationComponent;
}());
exports.AddDecorationComponent = AddDecorationComponent;
//# sourceMappingURL=add-decoration.component.js.map