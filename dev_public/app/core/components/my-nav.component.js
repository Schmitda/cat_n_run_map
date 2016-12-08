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
var router_1 = require("@angular/router");
var user_service_service_1 = require("../services/user-service.service");
var map_creator_service_1 = require("../../shared/map-creator.service");
var map_save_service_1 = require("../../shared/map-save.service");
var modal_service_1 = require("../../ui/services/modal.service");
var MyNavComponent = (function () {
    function MyNavComponent(router, userService, mapCreator, mapSaveService, modalService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.mapCreator = mapCreator;
        this.mapSaveService = mapSaveService;
        this.modalService = modalService;
        this.userService.currentUser.
            subscribe(function (value) {
            if (value == null) {
                _this.router.navigate(['/login']);
            }
        });
    }
    MyNavComponent.prototype.saveMap = function () {
        this.modalService.mapSaveModal.generateJson = false;
        this.modalService.mapSaveModal.show();
    };
    MyNavComponent.prototype.createJson = function () {
        this.modalService.mapSaveModal.generateJson = true;
        this.modalService.mapSaveModal.show();
    };
    MyNavComponent.prototype.loadMap = function () {
        this.modalService.mapLoadModal.show();
    };
    MyNavComponent.prototype.ngOnInit = function () { };
    MyNavComponent.prototype.goToMap = function () {
        this.router.navigate(['/map']);
    };
    MyNavComponent.prototype.logout = function () {
        this.userService.logoff();
    };
    MyNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-nav',
            templateUrl: '../templates/my-nav.component.html',
            styleUrls: ['../css/my-nav.component.min.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_service_1.UserService, map_creator_service_1.MapCreator, map_save_service_1.MapSaveService, modal_service_1.ModalService])
    ], MyNavComponent);
    return MyNavComponent;
}());
exports.MyNavComponent = MyNavComponent;
//# sourceMappingURL=my-nav.component.js.map