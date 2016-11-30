import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddMapElementComponent} from "./components/add-map-element.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '',  redirectTo: 'add' },
            { path: 'add',  component:AddMapElementComponent },
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})

export class MapElementRouting{}