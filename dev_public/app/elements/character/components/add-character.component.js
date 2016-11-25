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
var AddCharacterComponent = (function () {
    function AddCharacterComponent(fb, formGenerator, characterService, router) {
        this.fb = fb;
        this.formGenerator = formGenerator;
        this.characterService = characterService;
        this.router = router;
        this.walkAnimationFiles = [];
        this.jumpAnimationFiles = [];
        this.hurtAnimationFiles = [];
        this.dieAnimationFiles = [];
        this.standAnimationFiles = [];
        this.shootAnimationFiles = [];
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
        for (var $i = 0; $i < event.srcElement.files.length; $i++) {
            this.walkAnimationFiles.push(event.srcElement.files[$i]);
        }
    };
    AddCharacterComponent.prototype.onJumpAnimationFileUpload = function (event) {
        this.jumpAnimationFiles = event.srcElement.files;
        this.character.jumpAnimation = this.jumpAnimationFiles;
    };
    AddCharacterComponent.prototype.onHurtAnimationFileUpload = function (event) {
        this.hurtAnimationFiles = event.srcElement.files;
        this.character.hurtAnimation = this.hurtAnimationFiles;
    };
    AddCharacterComponent.prototype.onDieAnimationFileUpload = function (event) {
        this.dieAnimationFiles = event.srcElement.files;
        this.character.dieAnimation = this.dieAnimationFiles;
    };
    AddCharacterComponent.prototype.onStandAnimationFileUpload = function (event) {
        this.standAnimationFiles = event.srcElement.files;
        this.character.standAnimation = this.standAnimationFiles;
    };
    AddCharacterComponent.prototype.onShootAnimationFileUpload = function (event) {
        this.shootAnimationFiles = event.srcElement.files;
        this.character.shootAnimation = this.shootAnimationFiles;
    };
    AddCharacterComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.character = this.form.value;
            console.log(this.walkAnimationFiles);
            this.character.walkAnimation = this.walkAnimationFiles;
            console.log(this.character);
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
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_generator_service_1.FormGenerator, character_service_1.CharacterService, router_1.Router])
    ], AddCharacterComponent);
    return AddCharacterComponent;
}());
exports.AddCharacterComponent = AddCharacterComponent;
//# sourceMappingURL=add-character.component.js.map