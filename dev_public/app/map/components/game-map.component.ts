import {Component, OnInit, AfterViewInit} from '@angular/core';
import {BackgroundService} from "../../elements/background/services/background.service";
import {CharacterService} from "../../elements/character/services/character.service";
import {MapElementService} from "../../elements/map-element/services/map-element.service";
import {DecorationService} from "../../elements/decoration/services/decoration.service";
import {CollectibleService} from "../../elements/collectible/services/collectible.service";
import {Collectible} from "../../models/Collectible";
import {Character} from "../../models/Character";
import {MapElement} from "../../models/MapElement";
import {Decoration} from "../../models/Decoration";
import {Background} from "../../models/Background";
import {HostBinding} from "@angular/core";
import {HostListener} from "@angular/core";
import {MapService} from "../../shared/map.service";
import {Element} from "../../models/Element";

@Component({
    moduleId: module.id,
    selector: 'game-map',
    templateUrl: '../templates/game-map.component.html',
    styleUrls: ['../css/game-map.component.min.css'],

})
export class GameMapComponent implements OnInit, AfterViewInit {

    private background: Background;
    private selectedElement: Element;
    private img;

    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        event.stopPropagation();
        if(this.selectedElement){
            this.img.style.display = "block";
            this.img.setAttribute('height', this.selectedElement.height);
            this.img.setAttribute('width', this.selectedElement.width);
            this.img.style.top = event.clientY - this.selectedElement.height / 2 + "px";
            this.img.style.left = event.clientX - this.selectedElement.width / 2 + "px";
        }
    }

    @HostBinding('style.background-image') backgroundImage: string = '';

    ngAfterViewInit(): void {
        document.querySelector("map").append(this.img);
    }

    public hideImg(){
        this.img.style.display = "none";
    }

    constructor(private backgroundService: BackgroundService, private characterService: CharacterService, private mapElementService: MapElementService, private decorationService: DecorationService, private collectibleService: CollectibleService, private mapService: MapService) {
        this.img = document.createElement('img');
        this.img.style.zIndex = "99";
        this.img.style.position = "fixed";
        this.setListener();
    }

    private onMousemoveOnImage(event){
        event.stopPropagation();
        this.img = event.target;
        this.img.style.position = "fixed";
        this.img.style.top = event.clientY - this.img.getAttribute("height") / 2 + "px";
        this.img.style.left = event.clientX - this.img.getAttribute("width") / 2 + "px";
    }

    private setListener(){
        this.mapService.notifySelected.subscribe((obj:Element|null)=> {
            if(obj === null){
                this.img.src = "";
                this.selectedElement = null;
            }else{
                if(obj.source){
                    this.img.src = obj.source;
                }else{
                    this.img.src = obj.walkAnimation[0];
                }
                this.img.addEventListener('mousemove', this.onMousemoveOnImage);
                this.selectedElement = obj;
            }
        })
    }

    public setBackground(background: Background) {
        this.background = background;
        this.backgroundImage = 'url(' + this.background.source + ')';
    }

    ngOnInit() {
    }

}