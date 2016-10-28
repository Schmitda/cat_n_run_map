import {NgModule} from "@angular/core";
import {MapRouting} from "./map.routing";
import {MapComponent} from "./components/map.component";
import {GameMapComponent} from "./components/game-map.component";
import {UIModule} from "../ui/ui.module";
import {SharedModule} from "../shared/shared.module";
import {LoginComponent} from "./components/login.component";
import {LoginRouting} from "./login.routing";


@NgModule({
    exports: [],
    imports: [LoginRouting, SharedModule],
    providers: [],
    declarations: [LoginComponent]
})

export class LoginModule{}