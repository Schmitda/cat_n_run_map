import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MapComponent} from "./components/map.component";
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MapComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class MapRouting{}