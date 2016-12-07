import {NgModule} from "@angular/core";
import {MapRouting} from "./map.routing";
import {MapComponent} from "./components/map.component";
import {GameMapComponent} from "./components/game-map.component";
import {UIModule} from "../ui/ui.module";
import {SharedModule} from "../shared/shared.module";
import {DecorationComponent} from "./components/decoration.component";
import {MapElementComponent} from "./components/map-element.component";
import {CollectibleComponent} from "./components/collectible.component";
import {CharacterComponent} from "./components/character.component";


@NgModule({
    exports: [],
    imports: [MapRouting, UIModule, SharedModule],
    providers: [],
    declarations: [
        MapComponent,
        GameMapComponent,
        DecorationComponent,
        MapElementComponent,
        CollectibleComponent,
        CharacterComponent
    ],

})

export class MapModule{}