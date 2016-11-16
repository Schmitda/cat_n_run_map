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
var background_service_1 = require("../services/background.service");
var BackgroundComponent = (function () {
    function BackgroundComponent(fb, backgroundService) {
        this.fb = fb;
        this.backgroundService = backgroundService;
        this.form = fb.group({
            'name': ['', forms_1.Validators.required],
            'source': ['',] //TODO FileValidator
        });
    }
    BackgroundComponent.prototype.submit = function () {
        console.log(this.form);
        if (this.form.valid) {
            var background = this.form.value;
            this.backgroundService.uploadImageAndSave(background, this.file).subscribe(function () { });
        }
    };
    BackgroundComponent.prototype.uploadFileTest = function (event) {
        this.file = event.srcElement.files[0];
    };
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    BackgroundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            templateUrl: '../templates/background.component.html',
            styleUrls: ['../css/background.component.min.scss'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, background_service_1.BackgroundService])
    ], BackgroundComponent);
    return BackgroundComponent;
}());
exports.BackgroundComponent = BackgroundComponent;
//# sourceMappingURL=background.component.js.map