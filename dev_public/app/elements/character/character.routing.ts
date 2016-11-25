import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddCharacterComponent} from "./components/add-character.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'add',  component: AddCharacterComponent },
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})

export class CharacterRouting{}

