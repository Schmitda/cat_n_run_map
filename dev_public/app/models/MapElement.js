"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseElement_1 = require("./BaseElement");
var MapElement = (function (_super) {
    __extends(MapElement, _super);
    function MapElement() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(MapElement.prototype, "sliding", {
        get: function () {
            return this._sliding;
        },
        set: function (value) {
            this._sliding = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapElement.prototype, "speedModifier", {
        get: function () {
            return this._speedModifier;
        },
        set: function (value) {
            this._speedModifier = value;
        },
        enumerable: true,
        configurable: true
    });
    return MapElement;
}(BaseElement_1.BaseElement));
exports.MapElement = MapElement;
//# sourceMappingURL=MapElement.js.map