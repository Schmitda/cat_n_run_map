import { Component, OnInit } from '@angular/core';
import {AccordionChildComponent} from "./accordion-child.component";

@Component({
    moduleId: module.id,
    selector: 'accordion',
    templateUrl: '../templates/accordion.component.html',
    styleUrls: ['../css/accordion.component.min.css']
})
export class AccordionComponent implements OnInit {
    private accordionChildren: AccordionChildComponent[] = [];

    public addAccordion(accordionChild: AccordionChildComponent){
        this.accordionChildren.push(accordionChild);
    }

    constructor() { }

    ngOnInit() { }

    public openChanged(accordionChild: AccordionChildComponent){
        for(let ac of this.accordionChildren){
            if(ac !== accordionChild){
                ac.close();
            }
        }
    }

}