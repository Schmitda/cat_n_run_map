"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Decoration = (function (_super) {
    __extends(Decoration, _super);
    function Decoration() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Decoration.prototype, "zcoord", {
        get: function () {
            return this._zcoord;
        },
        set: function (value) {
            this._zcoord = value;
        },
        enumerable: true,
        configurable: true
    });
    return Decoration;
}(Element));
exports.Decoration = Decoration;
//# sourceMappingURL=Decoration.js.map