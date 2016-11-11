import {NgModule} from "@angular/core";
import {BackgroundComponent} from "./components/background.component";
import {RouterModule} from "@angular/router";
import {BackgroundRouting} from "./background.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
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
