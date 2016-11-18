import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BackgroundComponent} from "./components/background.component";
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
