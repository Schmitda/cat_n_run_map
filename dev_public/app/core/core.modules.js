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
var common_1 = require('@angular/common');
var user_service_service_1 = require("./services/user-service.service");
var my_nav_component_1 = require("./my-nav.component");
var auth_service_1 = require("../auth/auth.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var background_service_1 = require("../elements/background/services/background.service");
var forms_1 = require("@angular/forms");
var file_service_1 = require("./services/file.service");
var form_generator_service_1 = require("../shared/form-generator.service");
var collectible_service_1 = require("../elements/collectible/services/collectible.service");
var decoration_service_1 = require("../elements/decoration/services/decoration.service");
var character_service_1 = require("../elements/character/services/character.service");
var map_element_service_1 = require("../elements/map-element/services/map-element.service");
var map_service_1 = require("../shared/map.service");
var map_creator_service_1 = require("../shared/map-creator.service");
var overlay_component_1 = require("../ui/components/overlay.component");
var overlay_service_1 = require("../ui/services/overlay.service");
var element_context_menu_modal_component_1 = require("../ui/components/element-context-menu-modal.component");
var modal_service_1 = require("../ui/services/modal.service");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule],
            declarations: [my_nav_component_1.MyNavComponent, element_context_menu_modal_component_1.ElementContextMenuModalComponent, overlay_component_1.OverlayComponent],
            exports: [my_nav_component_1.MyNavComponent, common_1.CommonModule, platform_browser_1.BrowserModule, http_1.HttpModule, element_context_menu_modal_component_1.ElementContextMenuModalComponent, overlay_component_1.OverlayComponent],
            providers: [
                user_service_service_1.UserService,
                auth_service_1.AuthGuard,
                background_service_1.BackgroundService,
                file_service_1.FileService,
                form_generator_service_1.FormGenerator,
                collectible_service_1.CollectibleService,
                decoration_service_1.DecorationService,
                character_service_1.CharacterService,
                map_element_service_1.MapElementService,
                map_service_1.MapService,
                map_creator_service_1.MapCreator,
                overlay_service_1.OverlayService,
                modal_service_1.ModalService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.modules.js.map