import {BackgroundComponent} from "./components/background.component";
import {SharedModule} from "../../shared/shared.module";
import {BackgroundRouting} from "./background.routing";
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        BackgroundRouting,
        SharedModule
    ],
    exports: [],
    declarations: [
        BackgroundComponent
    ],
    providers: []
})

export class BackgroundModule{}
