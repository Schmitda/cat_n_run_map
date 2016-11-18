import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddDecorationComponent} from "./components/add-decoration.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '',  redirectTo: 'add' },
            { path: 'add',  component:AddDecorationComponent },
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})

export class DecorationRouting{}

