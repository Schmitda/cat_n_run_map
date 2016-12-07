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
var background_service_1 = require("../../elements/background/services/background.service");
var character_service_1 = require("../../elements/character/services/character.service");
var map_element_service_1 = require("../../elements/map-element/services/map-element.service");
var decoration_service_1 = require("../../elements/decoration/services/decoration.service");
var collectible_service_1 = require("../../elements/collectible/services/collectible.service");
var game_map_component_1 = require("./game-map.component");
var map_service_1 = require("../../shared/map.service");
var core_2 = require("@angular/core");
var MapComponent = (function () {
    // Crawles through the template and looks for a #myChild element. Fetches this element. Native browser functionality can be called on it.
    // @ViewChild('myChild') input: Form
    function MapComponent(backgroundService, characterService, mapElementService, decorationService, collectibleService, mapService) {
        this.backgroundService = backgroundService;
        this.characterService = characterService;
        this.mapElementService = mapElementService;
        this.decorationService = decorationService;
        this.collectibleService = collectibleService;
        this.mapService = mapService;
        this.loadAll();
    }
    MapComponent.prototype.onMousemove = function (event) {
        if (this.mapService.selected) {
        }
    };
    MapComponent.prototype.stopPropagation = function (event) {
        if (event !== undefined) {
            event.stopPropagation();
        }
    };
    MapComponent.prototype.selectBackground = function (background) {
        this.mapService.selectedType = 'background';
        this.gameMap.setBackground(background);
    };
    MapComponent.prototype.selectDecoration = function (decoration) {
        this.mapService.selectedType = 'decoration';
        this.mapService.selectElement(decoration);
    };
    MapComponent.prototype.selectCollectible = function (collectible) {
        this.mapService.selectElement(collectible);
        this.mapService.selectedType = 'collectible';
    };
    MapComponent.prototype.selectCharacter = function (character) {
        this.mapService.selectElement(character);
        this.mapService.selectedType = 'character';
    };
    MapComponent.prototype.selectMapElement = function (mapElement) {
        this.mapService.selectElement(mapElement);
        this.mapService.selectedType = 'mapElement';
    };
    MapComponent.prototype.loadAll = function () {
        this.loadCharacter();
        this.loadDecoration();
        this.loadMapElement();
        this.loadBackground();
        this.loadCollectible();
    };
    MapComponent.prototype.loadCharacter = function () {
        var _this = this;
        this.characterService.getAll().subscribe(function (response) { _this.characters = response; });
    };
    MapComponent.prototype.loadDecoration = function () {
        var _this = this;
        this.decorationService.getAll().subscribe(function (response) { _this.decorations = response; });
    };
    MapComponent.prototype.loadBackground = function () {
        var _this = this;
        this.backgroundService.getAll().subscribe(function (response) { _this.backgrounds = response; });
    };
    MapComponent.prototype.loadCollectible = function () {
        var _this = this;
        this.collectibleService.getAll().subscribe(function (response) { _this.collectibles = response; });
    };
    MapComponent.prototype.loadMapElement = function () {
        var _this = this;
        this.mapElementService.getAll().subscribe(function (response) { _this.mapElements = response; });
    };
    MapComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_2.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], MapComponent.prototype, "onMousemove", null);
    __decorate([
        core_1.ViewChild(game_map_component_1.GameMapComponent), 
        __metadata('design:type', game_map_component_1.GameMapComponent)
    ], MapComponent.prototype, "gameMap", void 0);
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            templateUrl: '../templates/map.component.html',
            styleUrls: ['../css/map.component.min.css']
        }), 
        __metadata('design:paramtypes', [background_service_1.BackgroundService, character_service_1.CharacterService, map_element_service_1.MapElementService, decoration_service_1.DecorationService, collectible_service_1.CollectibleService, map_service_1.MapService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map