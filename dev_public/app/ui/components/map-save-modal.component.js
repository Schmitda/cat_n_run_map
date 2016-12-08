"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var modal_component_1 = require("./modal.component");
var modal_service_1 = require("../services/modal.service");
var overlay_service_1 = require("../services/overlay.service");
var map_save_service_1 = require("../../shared/map-save.service");
var forms_1 = require("@angular/forms");
var map_creator_service_1 = require("../../shared/map-creator.service");
var MapSaveModalComponent = (function (_super) {
    __extends(MapSaveModalComponent, _super);
    function MapSaveModalComponent(overlayService, modalService, mapSaveService, formBuilder, mapCreator) {
        _super.call(this);
        this.overlayService = overlayService;
        this.modalService = modalService;
        this.mapSaveService = mapSaveService;
        this.formBuilder = formBuilder;
        this.mapCreator = mapCreator;
        this._isVisible = false;
        this._generateJson = false;
        this.form = formBuilder.group({
            name: []
        });
        this.modalService.mapSaveModal = this;
    }
    Object.defineProperty(MapSaveModalComponent.prototype, "isVisible", {
        get: function () {
            return !this._isVisible;
        },
        set: function (value) {
            this._isVisible = value;
            if (this.form) {
                console.log(this.mapCreator);
                this.form.controls.name.patchValue(this.mapCreator.name);
            }
        },
        enumerable: true,
        configurable: true
    });
    MapSaveModalComponent.prototype.ngOnInit = function () {
    };
    MapSaveModalComponent.prototype.save = function () {
        var _this = this;
        if (this._generateJson == false) {
            this.mapSaveService.save(this.form.controls.name.value).subscribe(function (result) {
                _this.mapCreator.setId(result._id);
                _this.mapCreator.setName(result.map.name);
                _this.hide();
            });
        }
        else {
            this.mapSaveService.downloadCurrentMap(this.form.controls.name.value);
            this.hide();
        }
    };
    Object.defineProperty(MapSaveModalComponent.prototype, "generateJson", {
        get: function () {
            return this._generateJson;
        },
        set: function (value) {
            this._generateJson = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class.hidden'), 
        __metadata('design:type', Boolean)
    ], MapSaveModalComponent.prototype, "isVisible", null);
    MapSaveModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-save-modal',
            templateUrl: '../templates/map-save-modal.component.html',
            styleUrls: ['../css/map-save-modal.component.min.css'],
        }), 
        __metadata('design:paramtypes', [overlay_service_1.OverlayService, modal_service_1.ModalService, map_save_service_1.MapSaveService, forms_1.FormBuilder, map_creator_service_1.MapCreator])
    ], MapSaveModalComponent);
    return MapSaveModalComponent;
}(modal_component_1.ModalComponent));
exports.MapSaveModalComponent = MapSaveModalComponent;
//# sourceMappingURL=map-save-modal.component.js.map