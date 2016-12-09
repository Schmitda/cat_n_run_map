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
var overlay_service_1 = require("../services/overlay.service");
var OverlayComponent = (function () {
    function OverlayComponent(overlayService) {
        var _this = this;
        this.overlayService = overlayService;
        this._isVisible = false;
        this.overlayService.backgroundChanged.subscribe(function (bool) {
            if (bool) {
                _this._isVisible = true;
            }
            else {
                _this._isVisible = false;
            }
        });
    }
    OverlayComponent.prototype.onClick = function (event) {
        this.overlayService.backgroundChanged.next(false);
        this._isVisible = false;
    };
    Object.defineProperty(OverlayComponent.prototype, "isVisible", {
        get: function () {
            return !this._isVisible;
        },
        set: function (value) {
            this._isVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    OverlayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], OverlayComponent.prototype, "onClick", null);
    __decorate([
        core_1.HostBinding('class.hidden'), 
        __metadata('design:type', Object)
    ], OverlayComponent.prototype, "isVisible", null);
    OverlayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overlay-component',
            templateUrl: '../templates/overlay.component.html',
            styleUrls: ['../css/overlay.component.min.css'],
        }), 
        __metadata('design:paramtypes', [overlay_service_1.OverlayService])
    ], OverlayComponent);
    return OverlayComponent;
}());
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlay.component.js.map