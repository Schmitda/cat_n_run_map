import {Component, OnInit, HostListener, Inject, forwardRef, Optional} from '@angular/core';
import {Input} from "@angular/core";
import {Decoration} from "../../models/Decoration";
import {MapService} from "../../shared/map.service";
import {GameMapComponent} from "./game-map.component";
import {BaseElement} from "./element";
import {ModalService} from "../../ui/services/modal.service";

@Component({
    moduleId: module.id,
    selector: 'decoration',
    templateUrl: '../templates/decoration.component.html',
})
export class DecorationComponent extends BaseElement implements OnInit {

    constructor(protected mapService: MapService, @Optional() @Inject(forwardRef(() =>  GameMapComponent)) protected gameMap: GameMapComponent, private modalService: ModalService) {
        super();
    }

    setSelectedType() {
        this.mapService.selectedType = "decoration";
    }

    ngOnInit() { }


}