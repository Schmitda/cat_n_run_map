import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddCollectibleComponent} from "./components/add-collectible.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'add',  component: AddCollectibleComponent },
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})

export class CollectibleRouting{}

