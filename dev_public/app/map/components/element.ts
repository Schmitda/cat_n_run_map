import {Component, OnInit, HostListener, Inject, forwardRef} from '@angular/core';
import {Input} from "@angular/core";
import {Decoration} from "../../models/Decoration";
import {MapService} from "../../shared/map.service";
import {GameMapComponent} from "./game-map.component";
import {MapElement} from "../../models/MapElement";
import {Element} from "../../models/Element";
import {ModalService} from "../../ui/services/modal.service";

@Component({
    moduleId: module.id,
    selector: 'decoration',
    templateUrl: '../templates/decoration.component.html',
})
export abstract class BaseElement implements OnInit {
    @Input() element: Element;
    @Input() xCoord: number;
    @Input() yCoord: number;
    protected gameMap: GameMapComponent;
    protected modalService: ModalService;
    protected mapService: MapService;
    protected hidden: boolean = false;

    @HostListener('dblclick', ['$event'])
    onMouseDblClick(event?:MouseEvent){
        this.mapService.selectElement(this.element);
        this.hidden = true;
        this.gameMap.moveingComponent = this;
        this.setSelectedType();
    }

    @HostListener('contextmenu', ['$event'])
    onContextMenu(event: MouseEvent){
        this.modalService.elementContextMenuModal.show();
        this.modalService.elementContextMenuModal.baseElement = this;
    }

    public setVisible(){
        this.hidden = false;
    }

    public abstract setSelectedType();


    constructor() {

    }

    ngOnInit() { }


}