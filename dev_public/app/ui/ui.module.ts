import {NgModule} from "@angular/core";
import {AccordionComponent} from "./components/accordion.component";
import {AccordionChildComponent} from "./components/accordion-child.component";
import {SharedModule} from "../shared/shared.module";
@NgModule({
    exports: [AccordionComponent, AccordionChildComponent],
    imports: [SharedModule],
    declarations: [AccordionComponent, AccordionChildComponent, ],
})

export class UIModule{}