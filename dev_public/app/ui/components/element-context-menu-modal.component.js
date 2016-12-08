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
var overlay_service_1 = require("../services/overlay.service");
var modal_service_1 = require("../services/modal.service");
var map_service_1 = require("../../shared/map.service");
var map_creator_service_1 = require("../../shared/map-creator.service");
var ElementContextMenuModalComponent = (function (_super) {
    __extends(ElementContextMenuModalComponent, _super);
    function ElementContextMenuModalComponent(overlayService, modalService, mapService, mapCreator) {
        _super.call(this);
        this.overlayService = overlayService;
        this.modalService = modalService;
        this.mapService = mapService;
        this.mapCreator = mapCreator;
        this._isVisible = false;
        this.modalService.elementContextMenuModal = this;
    }
    Object.defineProperty(ElementContextMenuModalComponent.prototype, "isVisible", {
        get: function () {
            return !this._isVisible;
        },
        set: function (value) {
            this._isVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    ElementContextMenuModalComponent.prototype.ngOnInit = function () {
    };
    ElementContextMenuModalComponent.prototype.deleteElement = function () {
        this.mapCreator.deleteComponent(this.baseElement.element);
        this.hide();
    };
    ElementContextMenuModalComponent.prototype.moveElement = function () {
        this.baseElement.onMouseDblClick();
        this.hide();
    };
    Object.defineProperty(ElementContextMenuModalComponent.prototype, "baseElement", {
        get: function () {
            return this._baseElement;
        },
        set: function (value) {
            this._baseElement = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class.hidden'), 
        __metadata('design:type', Boolean)
    ], ElementContextMenuModalComponent.prototype, "isVisible", null);
    ElementContextMenuModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'element-context-menu-modal',
            templateUrl: '../templates/element-context-menu-modal.component.html',
            styleUrls: ['../css/element-context-menu-modal.component.min.css'],
        }), 
        __metadata('design:paramtypes', [overlay_service_1.OverlayService, modal_service_1.ModalService, map_service_1.MapService, map_creator_service_1.MapCreator])
    ], ElementContextMenuModalComponent);
    return ElementContextMenuModalComponent;
}(modal_component_1.ModalComponent));
exports.ElementContextMenuModalComponent = ElementContextMenuModalComponent;
//# sourceMappingURL=element-context-menu-modal.component.js.map