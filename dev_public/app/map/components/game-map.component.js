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
var map_creator_service_1 = require("../../shared/map-creator.service");
var decoration_component_1 = require("./decoration.component");
var core_4 = require("@angular/core");
var modal_component_1 = require("../../ui/components/modal.component");
var character_component_1 = require("./character.component");
var map_element_component_1 = require("./map-element.component");
var GameMapComponent = (function () {
    function GameMapComponent(backgroundService, characterService, mapElementService, decorationService, collectibleService, mapService, mapCreator, gameMap) {
        var _this = this;
        this.backgroundService = backgroundService;
        this.characterService = characterService;
        this.mapElementService = mapElementService;
        this.decorationService = decorationService;
        this.collectibleService = collectibleService;
        this.mapService = mapService;
        this.mapCreator = mapCreator;
        this.gameMap = gameMap;
        this.selectedElement = {};
        this._moveingComponent = null;
        this.backgroundImage = '';
        this.backgroundService.getFirst().subscribe(function (result) {
            _this.setBackground(result);
        });
    }
    GameMapComponent.prototype.onMouseMove = function (event) {
        if (this.selectedElement) {
            this.image.nativeElement.style.top = (event.clientY - this.selectedElement.height / 2) + "px";
            this.image.nativeElement.style.left = (event.clientX - this.selectedElement.width / 2) + "px";
        }
    };
    GameMapComponent.prototype.contextMenu = function (event) {
        if (this.selectedElement) {
            this.mapService.selectElement(null);
            this.mapCreator.deleteComponent(this._moveingComponent.element);
            this.moveingComponent = null;
        }
    };
    GameMapComponent.prototype.onMouseDown = function (event) {
        if (event.which === 1) {
            console.log("here");
            if (this.selectedElement !== null) {
                switch (this.mapService.selectedType) {
                    case 'decoration':
                        this.mapCreator.addDecoration(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                    case 'character':
                        this.mapCreator.addCharacter(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                    case 'collectible':
                        this.mapCreator.addCollectible(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                    case 'mapElement':
                        this.mapCreator.addMapElement(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                }
                if (this._moveingComponent !== null) {
                    this._moveingComponent.setVisible();
                    this._moveingComponent = null;
                    this.mapService.selectElement(null);
                }
            }
        }
    };
    GameMapComponent.prototype.getYCoord = function (event) {
        return (event.pageY - this.gameMap.nativeElement.offsetTop - this.selectedElement.height / 2);
    };
    GameMapComponent.prototype.getXCoord = function (event) {
        var clientRect = this.gameMap.nativeElement.getBoundingClientRect();
        var scrolledLeft = -1 * clientRect.left;
        return event.clientX + scrolledLeft - this.selectedElement.width / 2;
    };
    GameMapComponent.prototype.changeDecorationVisibility = function () {
        this.decorationComponents.forEach(function (decorationComponent) {
            decorationComponent.hidden = !decorationComponent.hidden;
        });
    };
    GameMapComponent.prototype.changeMapElementVisibility = function () {
        this.mapElementComponents.forEach(function (mapElementComponent) {
            mapElementComponent.hidden = !mapElementComponent.hidden;
        });
    };
    GameMapComponent.prototype.changeCharacterVisibility = function () {
        this.characterComponents.forEach(function (characterComponent) {
            characterComponent.hidden = !characterComponent.hidden;
        });
    };
    GameMapComponent.prototype.getSource = function () {
        if (this.selectedElement && this.selectedElement.source) {
            return this.selectedElement.source;
        }
        else if (this.selectedElement && this.selectedElement.walkAnimation) {
            return this.selectedElement.walkAnimation[0];
        }
    };
    GameMapComponent.prototype.ngAfterViewInit = function () {
        this.setListener();
    };
    GameMapComponent.prototype.setListener = function () {
        var _this = this;
        this.mapService.notifySelected.subscribe(function (obj) {
            if (obj === void 0) { obj = null; }
            if (obj != null) {
                _this.selectedElement = obj;
                _this.image.nativeElement.style.top = (parseInt(_this.image.nativeElement.style.top) - _this.selectedElement.height / 2) + "px";
                _this.image.nativeElement.style.left = (parseInt(_this.image.nativeElement.style.left) - _this.selectedElement.width / 2) + "px";
            }
            else {
                _this.selectedElement = null;
                _this.image.nativeElement.style.top = "0";
                _this.image.nativeElement.style.left = "0";
            }
        });
    };
    GameMapComponent.prototype.setBackground = function (background) {
        this.background = background;
        this.mapCreator.background = background;
        console.log(background);
        this.backgroundImage = 'url(' + this.background.source + ')';
        //TODO: this.mapCreator.setwidth
        //this.mapCreator.width =
        //this.mapService
    };
    GameMapComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GameMapComponent.prototype, "moveingComponent", {
        set: function (value) {
            this._moveingComponent = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_4.ViewChild('image'), 
        __metadata('design:type', Object)
    ], GameMapComponent.prototype, "image", void 0);
    __decorate([
        core_1.ViewChildren(decoration_component_1.DecorationComponent), 
        __metadata('design:type', core_1.QueryList)
    ], GameMapComponent.prototype, "decorationComponents", void 0);
    __decorate([
        core_1.ViewChildren(map_element_component_1.MapElementComponent), 
        __metadata('design:type', core_1.QueryList)
    ], GameMapComponent.prototype, "mapElementComponents", void 0);
    __decorate([
        core_1.ViewChildren(character_component_1.CharacterComponent), 
        __metadata('design:type', core_1.QueryList)
    ], GameMapComponent.prototype, "characterComponents", void 0);
    __decorate([
        core_4.ViewChild(modal_component_1.ModalComponent), 
        __metadata('design:type', modal_component_1.ModalComponent)
    ], GameMapComponent.prototype, "modal", void 0);
    __decorate([
        core_3.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], GameMapComponent.prototype, "onMouseMove", null);
    __decorate([
        core_3.HostListener('contextmenu', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], GameMapComponent.prototype, "contextMenu", null);
    __decorate([
        core_3.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], GameMapComponent.prototype, "onMouseDown", null);
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
            entryComponents: [decoration_component_1.DecorationComponent]
        }), 
        __metadata('design:paramtypes', [background_service_1.BackgroundService, character_service_1.CharacterService, map_element_service_1.MapElementService, decoration_service_1.DecorationService, collectible_service_1.CollectibleService, map_service_1.MapService, map_creator_service_1.MapCreator, core_1.ElementRef])
    ], GameMapComponent);
    return GameMapComponent;
}());
exports.GameMapComponent = GameMapComponent;
//# sourceMappingURL=game-map.component.js.map