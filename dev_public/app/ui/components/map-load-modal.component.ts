import {Component, OnInit, HostBinding} from '@angular/core';
import {MapCreator} from "../../shared/map-creator.service";
import {FormBuilder} from "@angular/forms";
import {MapSaveService} from "../../shared/map-save.service";
import {ModalService} from "../services/modal.service";
import {OverlayService} from "../services/overlay.service";
import {ModalComponent} from "./modal.component";

@Component({
    moduleId: module.id,
    selector: 'map-load-modal',
    templateUrl: '../templates/map-load-modal.component.html',
    styleUrls: ['../css/map-load-modal.component.min.css'],
})
export class MapLoadModalComponent extends ModalComponent implements OnInit {
    private _isVisible: boolean = false;
    private maps: any[];

    @HostBinding('class.hidden') get isVisible(): boolean {
        return !this._isVisible;
    }

    constructor(protected overlayService: OverlayService, private modalService: ModalService, private mapSaveService: MapSaveService, private mapCreator: MapCreator) {
        super();
        this.mapSaveService.getAll().subscribe((results) => {
            this.maps = results;
        });
        this.modalService.mapLoadModal = this;
    }

    private loadMap(map){
        this.mapCreator.loadMap(map);
        this.hide();
    }

    ngOnInit() {

    }

    set isVisible(value: boolean) {
        this._isVisible = value;
    }
}


