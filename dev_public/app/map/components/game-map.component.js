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
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var map_service_1 = require("../../shared/map.service");
var GameMapComponent = (function () {
    function GameMapComponent(backgroundService, characterService, mapElementService, decorationService, collectibleService, mapService) {
        this.backgroundService = backgroundService;
        this.characterService = characterService;
        this.mapElementService = mapElementService;
        this.decorationService = decorationService;
        this.collectibleService = collectibleService;
        this.mapService = mapService;
        this.backgroundImage = '';
        this.img = document.createElement('img');
        this.img.style.zIndex = "99";
        this.img.style.position = "fixed";
        this.setListener();
    }
    GameMapComponent.prototype.onMousemove = function (event) {
        event.stopPropagation();
        if (this.selectedElement) {
            this.img.style.display = "block";
            this.img.setAttribute('height', this.selectedElement.height);
            this.img.setAttribute('width', this.selectedElement.width);
            this.img.style.top = event.clientY - this.selectedElement.height / 2 + "px";
            this.img.style.left = event.clientX - this.selectedElement.width / 2 + "px";
        }
    };
    GameMapComponent.prototype.ngAfterViewInit = function () {
        document.querySelector("map").append(this.img);
    };
    GameMapComponent.prototype.hideImg = function () {
        this.img.style.display = "none";
    };
    GameMapComponent.prototype.onMousemoveOnImage = function (event) {
        event.stopPropagation();
        this.img = event.target;
        this.img.style.position = "fixed";
        this.img.style.top = event.clientY - this.img.getAttribute("height") / 2 + "px";
        this.img.style.left = event.clientX - this.img.getAttribute("width") / 2 + "px";
    };
    GameMapComponent.prototype.setListener = function () {
        var _this = this;
        this.mapService.notifySelected.subscribe(function (obj) {
            if (obj === void 0) { obj = null; }
            if (obj === null) {
                _this.img.src = "";
                _this.selectedElement = null;
            }
            else {
                if (obj.source) {
                    _this.img.src = obj.source;
                }
                else {
                    _this.img.src = obj.walkAnimation[0];
                }
                _this.img.addEventListener('mousemove', _this.onMousemoveOnImage);
                _this.selectedElement = obj;
            }
        });
    };
    GameMapComponent.prototype.setBackground = function (background) {
        this.background = background;
        this.backgroundImage = 'url(' + this.background.source + ')';
    };
    GameMapComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_3.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], GameMapComponent.prototype, "onMousemove", null);
    __decorate([
        core_2.HostBinding('style.background-image'), 
        __metadata('design:type', String)
    ], GameMapComponent.prototype, "backgroundImage", void 0);
    GameMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game-map',
            templateUrl: '../templates/game-map.component.html',
            styleUrls: ['../css/game-map.component.min.css'],
        }), 
        __metadata('design:paramtypes', [background_service_1.BackgroundService, character_service_1.CharacterService, map_element_service_1.MapElementService, decoration_service_1.DecorationService, collectible_service_1.CollectibleService, map_service_1.MapService])
    ], GameMapComponent);
    return GameMapComponent;
}());
exports.GameMapComponent = GameMapComponent;
//# sourceMappingURL=game-map.component.js.map