"use strict";
var SelectStructure = (function () {
    function SelectStructure() {
        this._selectArray = [];
    }
    SelectStructure.prototype.addObj = function (obj) {
        this._selectArray.push(obj);
    };
    SelectStructure.prototype.addSelectElement = function (selectElement) {
        this._selectArray.push(selectElement);
    };
    Object.defineProperty(SelectStructure.prototype, "selectArray", {
        get: function () {
            return this._selectArray;
        },
        enumerable: true,
        configurable: true
    });
    return SelectStructure;
}());
exports.SelectStructure = SelectStructure;
//# sourceMappingURL=SelectStructure.js.map