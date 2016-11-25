"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Element_1 = require("./Element");
var Collectible = (function (_super) {
    __extends(Collectible, _super);
    function Collectible() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Collectible.prototype, "reward", {
        get: function () {
            return this._reward;
        },
        set: function (value) {
            this._reward = value;
        },
        enumerable: true,
        configurable: true
    });
    return Collectible;
}(Element_1.Element));
exports.Collectible = Collectible;
//# sourceMappingURL=Collectible.js.map