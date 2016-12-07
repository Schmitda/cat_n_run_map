import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
}       from '@angular/core';
import {CommonModule}      from '@angular/common';
import {UserService} from "./services/user-service.service";
import {MyNavComponent} from "./my-nav.component";
import {AuthGuard} from "../auth/auth.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {BackgroundService} from "../elements/background/services/background.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileService} from "./services/file.service";
import {FormGenerator} from "../shared/form-generator.service";
import {CollectibleService} from "../elements/collectible/services/collectible.service";
import {DecorationService} from "../elements/decoration/services/decoration.service";
import {CharacterService} from "../elements/character/services/character.service";
import {MapElementService} from "../elements/map-element/services/map-element.service";
import {MapService} from "../shared/map.service";
import {MapCreator} from "../shared/map-creator.service";
import {OverlayComponent} from "../ui/components/overlay.component";
import {OverlayService}  from "../ui/services/overlay.service";
import {ElementContextMenuModalComponent} from "../ui/components/element-context-menu-modal.component";
import {ModalService} from "../ui/services/modal.service";
import {ModalComponent} from "../ui/components/modal.component";

@NgModule({
    imports: [CommonModule, BrowserModule, HttpModule, ReactiveFormsModule],
    declarations: [MyNavComponent, ElementContextMenuModalComponent, OverlayComponent],
    exports: [MyNavComponent, CommonModule, BrowserModule, HttpModule, ElementContextMenuModalComponent, OverlayComponent],
    providers: [
        UserService,
        AuthGuard,
        BackgroundService,
        FileService,
        FormGenerator,
        CollectibleService,
        DecorationService,
        CharacterService,
        MapElementService,
        MapService,
        MapCreator,
        OverlayService,
        ModalService
    ]
})
export class CoreModule {
}