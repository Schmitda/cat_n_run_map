import {NgModule} from "@angular/core";
import {AccordionComponent} from "./components/accordion.component";
import {AccordionChildComponent} from "./components/accordion-child.component";
import {SharedModule} from "../shared/shared.module";
import {AccordionItemComponent} from "./components/accordion-item.component";
@NgModule({
    exports: [AccordionComponent, AccordionChildComponent, AccordionItemComponent],
    imports: [SharedModule],
    declarations: [AccordionComponent, AccordionChildComponent, AccordionItemComponent ],
})

export class UIModule{}