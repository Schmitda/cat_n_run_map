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
var MapCreator = (function () {
    function MapCreator() {
        this._decorations = [];
        this._collectibles = [];
        this._mapElements = [];
        this._characters = [];
    }
    MapCreator.prototype.addDecoration = function (decoration, yCoord, xCoord) {
        var _this = this;
        var doesAlreadyExist = false;
        this._decorations.forEach(function (decorationObj, index) {
            if (decorationObj.decoration === decoration) {
                doesAlreadyExist = true;
                _this._decorations[index].xCoord = xCoord;
                _this._decorations[index].yCoord = yCoord;
                return;
            }
        });
        if (!doesAlreadyExist) {
            this._decorations.push({
                decoration: Object.assign({}, decoration),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
    };
    MapCreator.prototype.addCharacter = function (element, yCoord, xCoord) {
        var _this = this;
        var doesAlreadyExist = false;
        this._characters.forEach(function (item, index) {
            if (item.character === element) {
                doesAlreadyExist = true;
                _this._characters[index].xCoord = xCoord;
                _this._characters[index].yCoord = yCoord;
                return;
            }
        });
        if (!doesAlreadyExist) {
            this._characters.push({
                character: Object.assign({}, element),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
    };
    MapCreator.prototype.addCollectible = function (element, yCoord, xCoord) {
        var _this = this;
        var doesAlreadyExist = false;
        this._collectibles.forEach(function (item, index) {
            if (item.collectible === element) {
                doesAlreadyExist = true;
                _this._collectibles[index].xCoord = xCoord;
                _this._collectibles[index].yCoord = yCoord;
                return;
            }
        });
        if (!doesAlreadyExist) {
            this._collectibles.push({
                collectible: Object.assign({}, element),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
    };
    MapCreator.prototype.addMapElement = function (element, yCoord, xCoord) {
        var _this = this;
        var doesAlreadyExist = false;
        this._mapElements.forEach(function (item, index) {
            if (item.mapElement === element) {
                doesAlreadyExist = true;
                _this._mapElements[index].xCoord = xCoord;
                _this._mapElements[index].yCoord = yCoord;
                return;
            }
        });
        if (!doesAlreadyExist) {
            this._mapElements.push({
                mapElement: Object.assign({}, element),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
        console.log(this._mapElements);
    };
    Object.defineProperty(MapCreator.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapCreator.prototype, "decorations", {
        get: function () {
            return this._decorations;
        },
        set: function (value) {
            this._decorations = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapCreator.prototype, "collectibles", {
        get: function () {
            return this._collectibles;
        },
        set: function (value) {
            this._collectibles = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapCreator.prototype, "mapElements", {
        get: function () {
            return this._mapElements;
        },
        set: function (value) {
            this._mapElements = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapCreator.prototype, "characters", {
        get: function () {
            return this._characters;
        },
        set: function (value) {
            this._characters = value;
        },
        enumerable: true,
        configurable: true
    });
    MapCreator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapCreator);
    return MapCreator;
}());
exports.MapCreator = MapCreator;
//# sourceMappingURL=map-creator.service.js.map