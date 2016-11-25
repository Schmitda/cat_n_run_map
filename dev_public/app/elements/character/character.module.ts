import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {CharacterRouting} from "./character.routing";
import {AddCharacterComponent} from "./components/add-character.component";

@NgModule({
    imports: [
        SharedModule,
        CharacterRouting
    ],
    exports: [],
    declarations: [
        AddCharacterComponent
    ],
    providers: []
})

export class CharacterModule{}
