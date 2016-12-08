import { Injectable } from '@angular/core';
import {ElementContextMenuModalComponent} from "../components/element-context-menu-modal.component";
import {OverlayService} from "./overlay.service";
import {MapSaveModalComponent} from "../components/map-save-modal.component";
import {MapLoadModalComponent} from "../components/map-load-modal.component";

@Injectable()
export class ModalService {
    private _elementContextMenuModal: ElementContextMenuModalComponent;
    private _mapSaveModal: MapSaveModalComponent;
    private _mapLoadModal: MapLoadModalComponent;

    constructor(private overlayService: OverlayService) {
        this.overlayService.backgroundChanged.subscribe((value) => {
            if(value === false){
                this.elementContextMenuModal.isVisible = false;
                this._mapSaveModal.isVisible = false;
                this.mapLoadModal.isVisible = false;
            }
        })
    }


    get elementContextMenuModal(): ElementContextMenuModalComponent {
        return this._elementContextMenuModal;
    }

    set elementContextMenuModal(value: ElementContextMenuModalComponent) {
        this._elementContextMenuModal = value;
    }


    get mapSaveModal(): MapSaveModalComponent {
        return this._mapSaveModal;
    }

    set mapSaveModal(value: MapSaveModalComponent) {
        this._mapSaveModal = value;
    }

    get mapLoadModal(): MapLoadModalComponent {
        return this._mapLoadModal;
    }

    set mapLoadModal(value: MapLoadModalComponent) {
        this._mapLoadModal = value;
    }
}