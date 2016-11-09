import {Component, OnInit, Input, forwardRef, Inject, trigger, state, style, transition, animate} from '@angular/core';
import {AccordionComponent} from "./accordion.component";

@Component({
    moduleId: module.id,
    selector: 'accordion-item',
    templateUrl: '../templates/accordion-item.component.html',
    styleUrls: ['../css/accordion-item.component.min.css'],
})
export class AccordionItemComponent implements OnInit {

}