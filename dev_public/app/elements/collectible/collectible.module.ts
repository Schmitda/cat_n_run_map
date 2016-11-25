import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {CollectibleRouting} from "./collectible.routing";
import {AddCollectibleComponent} from "./components/add-collectible.component";

@NgModule({
    imports: [
        SharedModule,
        CollectibleRouting
    ],
    exports: [],
    declarations: [
        AddCollectibleComponent
    ],
    providers: []
})

export class CollectibleModule{}
