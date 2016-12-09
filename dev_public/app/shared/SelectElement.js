"use strict";
var SelectElement = (function () {
    function SelectElement(label, value) {
        this.label = label;
        this.value = value;
        return {
            label: this.label,
            value: this.value
        };
    }
    return SelectElement;
}());
exports.SelectElement = SelectElement;
//# sourceMappingURL=SelectElement.js.map