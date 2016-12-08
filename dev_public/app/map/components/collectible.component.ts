import {Component, OnInit, forwardRef, Inject} from '@angular/core';
import {BaseElement} from "./element";
import {GameMapComponent} from "./game-map.component";
import {MapService} from "../../shared/map.service";
import {ModalService} from "../../ui/services/modal.service";

@Component({
    moduleId: module.id,
    selector: 'collectible',
    templateUrl: '../templates/collectible.component.html',
    styleUrls: ['../css/collectible.component.min.css'],
})
export class CollectibleComponent extends BaseElement implements OnInit {

    constructor(protected mapService: MapService, @Inject(forwardRef(() =>  GameMapComponent)) protected gameMap: GameMapComponent, private modalService: ModalService) {
        super();
    }

    setSelectedType() {
        this.mapService.selectedType = "collectible";
    }

    ngOnInit() {

    }

}


