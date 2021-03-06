"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Element_1 = require("./Element");
var Decoration = (function (_super) {
    __extends(Decoration, _super);
    function Decoration() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Decoration.prototype, "zCoord", {
        get: function () {
            return this._zCoord;
        },
        set: function (value) {
            this._zCoord = value;
        },
        enumerable: true,
        configurable: true
    });
    return Decoration;
}(Element_1.Element));
exports.Decoration = Decoration;
//# sourceMappingURL=Decoration.js.map