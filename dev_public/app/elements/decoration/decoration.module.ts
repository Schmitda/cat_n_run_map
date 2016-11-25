import {NgModule} from "@angular/core";
import {AddDecorationComponent} from "./components/add-decoration.component";
import {DecorationComponent} from "./components/decoration.component";
import {DecorationRouting} from "./decoration.routing";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [DecorationRouting, SharedModule],
    exports: [],
    declarations: [AddDecorationComponent],
    providers: []
})

export class DecorationModule{}
