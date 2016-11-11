import {NgModule} from "@angular/core";
import {BackgroundComponent} from "./components/background.component";
import {RouterModule} from "@angular/router";
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'add'},
            {path: 'add', component: BackgroundComponent}
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})

export class BackgroundRouting{}
