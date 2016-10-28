import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MapComponent} from "./components/map.component";
import {LoginComponent} from "./components/login.component";
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: LoginComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class LoginRouting{}