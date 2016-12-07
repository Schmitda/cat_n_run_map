import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from "../ui/components/modal.component";
import {OverlayComponent} from "../ui/components/overlay.component";
@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    declarations: [],
    exports:[CommonModule, FormsModule, ReactiveFormsModule],

})

export class SharedModule{}