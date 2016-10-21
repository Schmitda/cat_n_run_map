import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'accordion-child',
    templateUrl: '../templates/accordion-child.component.html',
    styleUrls: ['../css/accordion-child.component.min.css']
})
export class AccordionChildComponent implements OnInit {
    @Input() title:string;

    constructor() { }

    ngOnInit() { }

}