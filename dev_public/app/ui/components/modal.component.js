"use strict";
var ModalComponent = (function () {
    function ModalComponent() {
        this.isVisible = false;
    }
    ModalComponent.prototype.show = function () {
        this.overlayService.backgroundChanged.next(true);
        this.isVisible = true;
    };
    ModalComponent.prototype.hide = function () {
        this.isVisible = false;
        this.overlayService.backgroundChanged.next(false);
    };
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map