import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {AddMapElementComponent} from "./components/add-map-element.component";
import {MapElementRouting} from "./map-element.routing";

@NgModule({
    imports: [MapElementRouting, SharedModule],
    exports: [],
    declarations: [AddMapElementComponent],
    providers: []
})

export class MapElementModule{}
