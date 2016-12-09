import {Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ElementRef, NgZone, ViewChildren, QueryList} from '@angular/core';
import {BackgroundService} from "../../elements/background/services/background.service";
import {CharacterService} from "../../elements/character/services/character.service";
import {MapElementService} from "../../elements/map-element/services/map-element.service";
import {DecorationService} from "../../elements/decoration/services/decoration.service";
import {CollectibleService} from "../../elements/collectible/services/collectible.service";
import {Decoration} from "../../models/Decoration";
import {Background} from "../../models/Background";
import {HostBinding} from "@angular/core";
import {HostListener} from "@angular/core";
import {MapService} from "../../shared/map.service";
import {Element} from "../../models/Element";
import {MapCreator} from "../../shared/map-creator.service";
import {DecorationComponent} from "./decoration.component";
import {ViewChild} from "@angular/core";
import {ModalComponent} from "../../ui/components/modal.component";
import {CharacterComponent} from "./character.component";
import {MapElementComponent} from "./map-element.component";

@Component({
    moduleId: module.id,
    selector: 'game-map',
    templateUrl: '../templates/game-map.component.html',
    styleUrls: ['../css/game-map.component.min.css'],
    entryComponents: [DecorationComponent]
})
export class GameMapComponent implements OnInit, AfterViewInit {
    private background: Background;
    private selectedElement: Element = {};
    private _moveingComponent: any = null;
    @ViewChild('image') image;
    @ViewChildren(DecorationComponent) decorationComponents: QueryList<DecorationComponent>;
    @ViewChildren(MapElementComponent) mapElementComponents: QueryList<MapElementComponent>;
    @ViewChildren(CharacterComponent) characterComponents: QueryList<CharacterComponent>;
    @ViewChild(ModalComponent) modal: ModalComponent;


    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (this.selectedElement) {
            this.image.nativeElement.style.top = (event.clientY - this.selectedElement.height / 2) + "px";
            this.image.nativeElement.style.left = (event.clientX - this.selectedElement.width / 2) + "px";
        }
    }

    @HostListener('contextmenu', ['$event'])
    contextMenu(event){
        if(this.selectedElement){
            this.mapService.selectElement(null);
            this.mapCreator.deleteComponent(this._moveingComponent.element);
            this.moveingComponent = null;
        }
    }

    @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
        if (event.which === 1) {
            console.log("here");
            if (this.selectedElement !== null) {
                switch (this.mapService.selectedType) {
                    case 'decoration':
                        this.mapCreator.addDecoration(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                    case 'character':
                        this.mapCreator.addCharacter(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                    case 'collectible':
                        this.mapCreator.addCollectible(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                    case 'mapElement':
                        this.mapCreator.addMapElement(this.selectedElement, this.getYCoord(event), this.getXCoord(event));
                        break;
                }
                if(this._moveingComponent !== null){
                    this._moveingComponent.setVisible();
                    this._moveingComponent = null;
                    this.mapService.selectElement(null);
                }
            }
        }
    }

    @HostBinding('style.background-image') backgroundImage: string = '';


    private getYCoord(event: MouseEvent): number {
        return (event.pageY - this.gameMap.nativeElement.offsetTop - this.selectedElement.height / 2);
    }

    private getXCoord(event: MouseEvent): number {
        let clientRect = this.gameMap.nativeElement.getBoundingClientRect();
        let scrolledLeft = -1 * clientRect.left;
        return event.clientX + scrolledLeft - this.selectedElement.width / 2;
    }

    private changeDecorationVisibility(){
        this.decorationComponents.forEach((decorationComponent: DecorationComponent) => {
            decorationComponent.hidden = !decorationComponent.hidden;
        })
    }

    private changeMapElementVisibility(){
        this.mapElementComponents.forEach((mapElementComponent: MapElementComponent) => {
            mapElementComponent.hidden = !mapElementComponent.hidden;
        })
    }

    private changeCharacterVisibility(){
        this.characterComponents.forEach((characterComponent: CharacterComponent) => {
            characterComponent.hidden = !characterComponent.hidden;
        })
    }

    constructor(private backgroundService: BackgroundService, private characterService: CharacterService, private mapElementService: MapElementService, private decorationService: DecorationService, private collectibleService: CollectibleService, private mapService: MapService, private mapCreator: MapCreator, private gameMap: ElementRef) {
        this.backgroundService.getFirst().subscribe((result) => {
            this.setBackground(result);
        })
    }

    private getSource() {
        if (this.selectedElement && this.selectedElement.source) {
            return this.selectedElement.source
        } else if (this.selectedElement && this.selectedElement.walkAnimation) {
            return this.selectedElement.walkAnimation[0];
        }
    }

    ngAfterViewInit(): void {
        this.setListener();
    }

    private setListener() {
        this.mapService.notifySelected.subscribe((obj: Element|null) => {
            if (obj != null) {
                this.selectedElement = obj;
                this.image.nativeElement.style.top = (parseInt(this.image.nativeElement.style.top) - this.selectedElement.height / 2) + "px";
                this.image.nativeElement.style.left = (parseInt(this.image.nativeElement.style.left) - this.selectedElement.width / 2) + "px";
            } else {
                this.selectedElement = null;
                this.image.nativeElement.style.top = "0";
                this.image.nativeElement.style.left = "0";
            }
        });
    }

    public setBackground(background: Background) {
        this.background = background;
        this.mapCreator.background = background;
        console.log(background);
        this.backgroundImage = 'url(' + this.background.source + ')';
        //TODO: this.mapCreator.setwidth
        //this.mapCreator.width =
        //this.mapService
    }

    ngOnInit() {
    }


    set moveingComponent(value: any) {
        this._moveingComponent = value;
    }


}