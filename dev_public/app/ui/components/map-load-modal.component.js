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
var map_creator_service_1 = require("../../shared/map-creator.service");
var map_save_service_1 = require("../../shared/map-save.service");
var modal_service_1 = require("../services/modal.service");
var overlay_service_1 = require("../services/overlay.service");
var modal_component_1 = require("./modal.component");
var MapLoadModalComponent = (function (_super) {
    __extends(MapLoadModalComponent, _super);
    function MapLoadModalComponent(overlayService, modalService, mapSaveService, mapCreator) {
        var _this = this;
        _super.call(this);
        this.overlayService = overlayService;
        this.modalService = modalService;
        this.mapSaveService = mapSaveService;
        this.mapCreator = mapCreator;
        this._isVisible = false;
        this.mapSaveService.getAll().subscribe(function (results) {
            _this.maps = results;
        });
        this.modalService.mapLoadModal = this;
    }
    Object.defineProperty(MapLoadModalComponent.prototype, "isVisible", {
        get: function () {
            return !this._isVisible;
        },
        set: function (value) {
            this._isVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    MapLoadModalComponent.prototype.loadMap = function (map) {
        this.mapCreator.loadMap(map);
        this.hide();
    };
    MapLoadModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostBinding('class.hidden'), 
        __metadata('design:type', Boolean)
    ], MapLoadModalComponent.prototype, "isVisible", null);
    MapLoadModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-load-modal',
            templateUrl: '../templates/map-load-modal.component.html',
            styleUrls: ['../css/map-load-modal.component.min.css'],
        }), 
        __metadata('design:paramtypes', [overlay_service_1.OverlayService, modal_service_1.ModalService, map_save_service_1.MapSaveService, map_creator_service_1.MapCreator])
    ], MapLoadModalComponent);
    return MapLoadModalComponent;
}(modal_component_1.ModalComponent));
exports.MapLoadModalComponent = MapLoadModalComponent;
//# sourceMappingURL=map-load-modal.component.js.map