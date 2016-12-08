import {Component, OnInit, HostBinding} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {ModalService} from "../services/modal.service";
import {OverlayService} from "../services/overlay.service";
import {MapSaveService} from "../../shared/map-save.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {MapCreator} from "../../shared/map-creator.service";

@Component({
    moduleId: module.id,
    selector: 'map-save-modal',
    templateUrl: '../templates/map-save-modal.component.html',
    styleUrls: ['../css/map-save-modal.component.min.css'],
})
export class MapSaveModalComponent extends ModalComponent implements OnInit {
    private _isVisible: boolean = false;
    private form: FormGroup;
    private _generateJson: boolean = false;

    @HostBinding('class.hidden') get isVisible(): boolean {
        return !this._isVisible;
    }

    constructor(protected overlayService: OverlayService, private modalService: ModalService, private mapSaveService: MapSaveService, private formBuilder: FormBuilder, private mapCreator: MapCreator) {
        super();
        this.form = formBuilder.group({
            name: []
        });
        this.modalService.mapSaveModal = this;
    }

    ngOnInit() {

    }

    private save() {
        if(this._generateJson == false){
            this.mapSaveService.save(this.form.controls.name.value).subscribe((result) => {
                this.mapCreator.setId(result._id);
                this.mapCreator.setName(result.map.name);
                this.hide();
            });
        }else{
            this.mapSaveService.downloadCurrentMap(this.form.controls.name.value);
            this.hide();
        }
    }

    set isVisible(value: boolean) {
        this._isVisible = value;
        if(this.form){
            console.log(this.mapCreator);
            this.form.controls.name.patchValue(this.mapCreator.name);
        }
    }

    get generateJson(): boolean {
        return this._generateJson;
    }

    set generateJson(value: boolean) {
        this._generateJson = value;
    }
}


