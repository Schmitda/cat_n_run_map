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
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var MapService = (function () {
    function MapService() {
        this._notifySelected = new BehaviorSubject_1.BehaviorSubject(undefined);
    }
    MapService.prototype.selectElement = function (obj) {
        if (this._selected && this._selected._id == obj._id) {
            this._selected = null;
            this._notifySelected.next(null);
        }
        else {
            this._selected = obj;
            this._notifySelected.next(this._selected);
        }
    };
    Object.defineProperty(MapService.prototype, "notifySelected", {
        get: function () {
            return this._notifySelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    MapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map