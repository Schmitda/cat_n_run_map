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
var collectible_service_1 = require("../services/collectible.service");
var router_1 = require("@angular/router");
var SelectStructure_1 = require("../../../shared/SelectStructure");
var SelectElement_1 = require("../../../shared/SelectElement");
var file_service_1 = require("../../../core/services/file.service");
var AddCollectibleComponent = (function () {
    function AddCollectibleComponent(fb, formGenerator, collectibleService, router, fileService) {
        this.fb = fb;
        this.formGenerator = formGenerator;
        this.collectibleService = collectibleService;
        this.router = router;
        this.fileService = fileService;
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('reward', new forms_1.FormControl('', forms_1.Validators.required));
        this.form.controls.touchable.setValue(true);
        this.collectibleStructure = new SelectStructure_1.SelectStructure();
        this.collectibleStructure.addSelectElement(new SelectElement_1.SelectElement('Speed', 'speed'));
        this.collectibleStructure.addSelectElement(new SelectElement_1.SelectElement('Life', 'life'));
        this.collectibleStructure.addSelectElement(new SelectElement_1.SelectElement('Invulnerable', 'invulnerable'));
        this.collectibleStructure.addSelectElement(new SelectElement_1.SelectElement('WinningPoint', 'winningPoint'));
    }
    AddCollectibleComponent.prototype.setFile = function (event) {
        this.file = event.srcElement.files[0];
        this.fileService.calculateImageSize(this.file, this.form);
    };
    AddCollectibleComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            var collectible = this.form.value;
            collectible.source = this.file;
            this.collectibleService.save(collectible)
                .subscribe(function () {
                _this.router.navigate(['/map']);
            });
        }
    };
    AddCollectibleComponent.prototype.ngOnInit = function () {
    };
    AddCollectibleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            templateUrl: '../templates/add-collectible.component.html',
            styleUrls: ['../css/add-collectible.component.min.scss'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_generator_service_1.FormGenerator, collectible_service_1.CollectibleService, router_1.Router, file_service_1.FileService])
    ], AddCollectibleComponent);
    return AddCollectibleComponent;
}());
exports.AddCollectibleComponent = AddCollectibleComponent;
//# sourceMappingURL=add-collectible.component.js.map