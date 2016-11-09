import {Component, OnInit, Input, forwardRef, Inject, trigger, state, style, transition, animate} from '@angular/core';
import {AccordionComponent} from "./accordion.component";
import {HostListener} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'accordion-child',
    templateUrl: '../templates/accordion-child.component.html',
    styleUrls: ['../css/accordion-child.component.min.css'],
    animations: [
        trigger('openChanged', [
            state('false', style({
                height: '33px'
            })),
            state('true', style({
                height: '*'
            })),
            transition('0 <=> 1', animate('100ms ease-out'))
        ])
    ]
})
export class AccordionChildComponent implements OnInit {
    @Input() title:string;
    private isOpen:boolean = false;
    @HostListener('click', ['$event.target']) onClick() {
        this.open();
    }

    constructor(@Inject(forwardRef(() => AccordionComponent)) private accordion:AccordionComponent) {
        this.accordion.addAccordion(this);
    }


    private open(){
        this.accordion.openChanged(this);
        this.isOpen = !this.isOpen;
    }

    public close(){
        this.isOpen = false;
    }

    ngOnInit() { }

}