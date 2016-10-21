import {NgModule} from "@angular/core";
import {MapRouting} from "./map.routing";
import {MapComponent} from "./components/map.component";
import {GameMapComponent} from "./components/game-map.component";
import {UIModule} from "../ui/ui.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    exports: [],
    imports: [MapRouting, UIModule, SharedModule],
    providers: [],
    declarations: [MapComponent, GameMapComponent]
})

export class MapModule{}