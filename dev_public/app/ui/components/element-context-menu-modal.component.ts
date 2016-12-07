import {Component, OnInit, HostBinding} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {OverlayService} from "../services/overlay.service";
import {ModalService} from "../services/modal.service";
import {MapService} from "../../shared/map.service";
import {BaseElement} from "../../map/components/element";

@Component({
    moduleId: module.id,
    selector: 'element-context-menu-modal',
    templateUrl: '../templates/element-context-menu-modal.component.html',
    styleUrls: ['../css/element-context-menu-modal.component.min.css'],
})
export class ElementContextMenuModalComponent extends ModalComponent implements OnInit {
    private _isVisible: boolean = false;
    private _baseElement: BaseElement;

    @HostBinding('class.hidden') get isVisible():boolean{
        return !this._isVisible;
    }

    constructor(protected overlayService: OverlayService, private modalService: ModalService, private mapService: MapService) {
        super();
        this.modalService.elementContextMenuModal = this;
    }

    ngOnInit() {

    }

    private moveElement(){
        this.baseElement.onMouseDblClick();
        this.hide();
    }


    set isVisible(value: boolean) {
        this._isVisible = value;
    }


    get baseElement(): BaseElement {
        return this._baseElement;
    }

    set baseElement(value: BaseElement) {
        this._baseElement = value;
    }
}


