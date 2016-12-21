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
var router_1 = require("@angular/router");
var character_service_1 = require("../services/character.service");
var file_service_1 = require("../../../core/services/file.service");
var AddCharacterComponent = (function () {
    function AddCharacterComponent(fb, formGenerator, characterService, router, fileService) {
        this.fb = fb;
        this.formGenerator = formGenerator;
        this.characterService = characterService;
        this.router = router;
        this.fileService = fileService;
        this.character = {};
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('walkAnimation', new forms_1.FormControl(''));
        this.form.addControl('jumpAnimation', new forms_1.FormControl(''));
        this.form.addControl('hurtAnimation', new forms_1.FormControl(''));
        this.form.addControl('dieAnimation', new forms_1.FormControl(''));
        this.form.addControl('standAnimation', new forms_1.FormControl(''));
        this.form.addControl('shootAnimation', new forms_1.FormControl(''));
        this.form.addControl('canShoot', new forms_1.FormControl(false));
        this.form.addControl('speed', new forms_1.FormControl(1));
        this.form.addControl('health', new forms_1.FormControl(1));
    }
    AddCharacterComponent.prototype.onWalkAnimationFileUpload = function (event) {
        this.fileService.calculateImageSize(event.srcElement.files[0], this.form);
        this.walkAnimationFiles = event.srcElement.files;
    };
    AddCharacterComponent.prototype.onJumpAnimationFileUpload = function (event) {
        this.jumpAnimationFiles = event.srcElement.files;
    };
    AddCharacterComponent.prototype.onHurtAnimationFileUpload = function (event) {
        this.hurtAnimationFiles = event.srcElement.files;
    };
    AddCharacterComponent.prototype.onDieAnimationFileUpload = function (event) {
        this.dieAnimationFiles = event.srcElement.files;
    };
    AddCharacterComponent.prototype.onStandAnimationFileUpload = function (event) {
        this.standAnimationFiles = event.srcElement.files;
    };
    AddCharacterComponent.prototype.onShootAnimationFileUpload = function (event) {
        this.shootAnimationFiles = event.srcElement.files;
    };
    AddCharacterComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.character = this.form.value;
            this.character.walkAnimation = this.walkAnimationFiles;
            this.character.shootAnimation = this.shootAnimationFiles;
            this.character.standAnimation = this.standAnimationFiles;
            this.character.dieAnimation = this.dieAnimationFiles;
            this.character.jumpAnimation = this.jumpAnimationFiles;
            this.character.hurtAnimation = this.hurtAnimationFiles;
            this.characterService.save(this.character)
                .subscribe(function () {
                _this.router.navigate(['/map']);
            });
        }
    };
    AddCharacterComponent.prototype.ngOnInit = function () {
    };
    AddCharacterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            templateUrl: '../templates/add-character.component.html',
            styleUrls: ['../css/add-character.component.min.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_generator_service_1.FormGenerator, character_service_1.CharacterService, router_1.Router, file_service_1.FileService])
    ], AddCharacterComponent);
    return AddCharacterComponent;
}());
exports.AddCharacterComponent = AddCharacterComponent;
//# sourceMappingURL=add-character.component.js.map