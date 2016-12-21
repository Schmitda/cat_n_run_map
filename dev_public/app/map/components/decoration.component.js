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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var map_service_1 = require("../../shared/map.service");
var game_map_component_1 = require("./game-map.component");
var element_1 = require("./element");
var modal_service_1 = require("../../ui/services/modal.service");
var DecorationComponent = (function (_super) {
    __extends(DecorationComponent, _super);
    function DecorationComponent(mapService, gameMap, modalService) {
        _super.call(this);
        this.mapService = mapService;
        this.gameMap = gameMap;
        this.modalService = modalService;
    }
    DecorationComponent.prototype.setSelectedType = function () {
        this.mapService.selectedType = "decoration";
    };
    DecorationComponent.prototype.ngOnInit = function () { };
    DecorationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'decoration',
            templateUrl: '../templates/decoration.component.html',
        }),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return game_map_component_1.GameMapComponent; }))), 
        __metadata('design:paramtypes', [map_service_1.MapService, game_map_component_1.GameMapComponent, modal_service_1.ModalService])
    ], DecorationComponent);
    return DecorationComponent;
}(element_1.BaseElement));
exports.DecorationComponent = DecorationComponent;
//# sourceMappingURL=decoration.component.js.map