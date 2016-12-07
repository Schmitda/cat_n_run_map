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
var element_1 = require("./element");
var game_map_component_1 = require("./game-map.component");
var map_service_1 = require("../../shared/map.service");
var CharacterComponent = (function (_super) {
    __extends(CharacterComponent, _super);
    function CharacterComponent(mapService, gameMap) {
        _super.call(this);
        this.mapService = mapService;
        this.gameMap = gameMap;
    }
    CharacterComponent.prototype.setSelectedType = function () {
        this.mapService.selectedType = "character";
    };
    CharacterComponent.prototype.ngOnInit = function () {
    };
    CharacterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'character',
            templateUrl: '../templates/character.component.html',
            styleUrls: ['../css/character.component.min.css'],
        }),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return game_map_component_1.GameMapComponent; }))), 
        __metadata('design:paramtypes', [map_service_1.MapService, game_map_component_1.GameMapComponent])
    ], CharacterComponent);
    return CharacterComponent;
}(element_1.BaseElement));
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map