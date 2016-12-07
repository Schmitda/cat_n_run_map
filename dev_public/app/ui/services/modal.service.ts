import { Injectable } from '@angular/core';
import {ElementContextMenuModalComponent} from "../components/element-context-menu-modal.component";
import {OverlayService} from "./overlay.service";

@Injectable()
export class ModalService {
    private _elementContextMenuModal: ElementContextMenuModalComponent;

    constructor(private overlayService: OverlayService) {
        this.overlayService.backgroundChanged.subscribe((value) => {
            if(value === false){
                this.elementContextMenuModal.isVisible = false;
            }
        })
    }


    get elementContextMenuModal(): ElementContextMenuModalComponent {
        return this._elementContextMenuModal;
    }

    set elementContextMenuModal(value: ElementContextMenuModalComponent) {
        this._elementContextMenuModal = value;
    }
}