import {Component, OnInit, ViewChild} from '@angular/core';
import {Collectible} from "../../models/Collectible";
import {Character} from "../../models/Character";
import {MapElement} from "../../models/MapElement";
import {Decoration} from "../../models/Decoration";
import {Background} from "../../models/Background";
import {BackgroundService} from "../../elements/background/services/background.service";
import {CharacterService} from "../../elements/character/services/character.service";
import {MapElementService} from "../../elements/map-element/services/map-element.service";
import {DecorationService} from "../../elements/decoration/services/decoration.service";
import {CollectibleService} from "../../elements/collectible/services/collectible.service";
import {GameMapComponent} from "./game-map.component";
import {MapService} from "../../shared/map.service";
import {HostListener} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: '../templates/map.component.html',
    styleUrls: ['../css/map.component.min.css']
})
export class MapComponent implements OnInit {
    private collectibles: Collectible[];
    private characters: Character[];
    private mapElements: MapElement[];
    private decorations: Decoration[];
    private backgrounds: Background[];
    private height: Number;
    private width: Number;


    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        if(this.mapService.selected){

        }
    }

    // ViewChild is used to load a child component element. For that reason enter the child-component-type (GameMapComponent). Give it a name game map and
    // make it strongly typed GameMapComponent
    @ViewChild(GameMapComponent) gameMap: GameMapComponent;

    // Crawles through the template and looks for a #myChild element. Fetches this element. Native browser functionality can be called on it.
    // @ViewChild('myChild') input: Form

    constructor(private backgroundService: BackgroundService, private characterService: CharacterService, private mapElementService: MapElementService, private decorationService: DecorationService, private collectibleService: CollectibleService, private mapService: MapService) {
        this.loadAll();
    }

    private stopPropagation(event){
        if(event !== undefined){
            event.stopPropagation();
        }
    }

    private selectBackground(background:Background){
        this.mapService.selectedType = 'background';
        this.gameMap.setBackground(background);
    }

    private selectDecoration(decoration:Decoration){
        this.mapService.selectedType = 'decoration';
        this.mapService.selectElement(decoration);
    }

    private selectCollectible(collectible:Collectible){
        this.mapService.selectElement(collectible);
        this.mapService.selectedType = 'collectible';
    }

    private selectCharacter(character: Character){
        this.mapService.selectElement(character);
        this.mapService.selectedType = 'character';
    }

    private selectMapElement(mapElement: MapElement){
        this.mapService.selectElement(mapElement);
        this.mapService.selectedType = 'mapElement';
    }

    private loadAll(){
        this.loadCharacter();
        this.loadDecoration();
        this.loadMapElement();
        this.loadBackground();
        this.loadCollectible();
    }

    private loadCharacter(){
        this.characterService.getAll().subscribe((response) => {this.characters = response});
    }

    private loadDecoration(){
        this.decorationService.getAll().subscribe((response) => {this.decorations = response});
    }

    private loadBackground(){
        this.backgroundService.getAll().subscribe((response) => {this.backgrounds = response});
    }

    private loadCollectible(){
        this.collectibleService.getAll().subscribe((response) => {this.collectibles = response});
    }

    private loadMapElement(){
        this.mapElementService.getAll().subscribe((response) => {this.mapElements = response});
    }

    ngOnInit() { }


}