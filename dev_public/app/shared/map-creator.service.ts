import {Decoration} from "../models/Decoration";
import {Collectible} from "../models/Collectible";
import {MapElement} from "../models/MapElement";
import {Character} from "../models/Character";
import {Background} from "../models/Background";
import {Injectable} from "@angular/core";


@Injectable()

export class MapCreator{
    private _background;
    private _decorations: [
        {
            decoration: Decoration,
            yCoord: number,
            xCoord: number
            xRatio: number,
            yRatio: number,
        }
        ]=[];
    private _collectibles: [
        {
            collectible: Collectible,
            yCoord: number,
            xCoord: number
        }
        ]=[];
    private _mapElements: [
        {
            mapElement: MapElement,
            yCoord: number,
            xCoord: number
        }
        ]=[];
    private _characters: [
        {
            character: Character,
            yCoord: number,
            xCoord: number
        }
        ]=[];
    private id;
    private _name;
    private _width = 0;
    private _height = 0;


    get name() {
        return this._name;
    }

    public addDecoration(decoration: Decoration, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        let xRatio = xCoord / this.width * 100;
        let yRatio = yCoord / this.height * 100;
        this._decorations.forEach((decorationObj, index:number) => {
            if(decorationObj.decoration === decoration){
                doesAlreadyExist = true;
                this._decorations[index].xCoord = xCoord;
                this._decorations[index].yCoord = yCoord;
                this._decorations[index].xRatio = xRatio;
                this._decorations[index].yRatio = yRatio;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._decorations.push({
                decoration: Object.assign({},decoration),
                xCoord: xCoord,
                yCoord: yCoord,
                xRatio: xRatio,
                yRatio: yRatio,
            });
        }
    }

    public addCharacter(element: Character, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        let xRatio = xCoord / this.width * 100;
        let yRatio = yCoord / this.height * 100;
        this._characters.forEach((item, index:number) => {
            if(item.character === element){
                doesAlreadyExist = true;
                this._characters[index].xCoord = xCoord;
                this._characters[index].yCoord = yCoord;
                this._decorations[index].xRatio = xRatio;
                this._decorations[index].yRatio = yRatio;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._characters.push({
                character: Object.assign({},element),
                yCoord: yCoord,
                xCoord: xCoord
                xRatio: xRatio,
                yRatio: yRatio,
            });
        }
    }

    public addCollectible(element: Character, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        let xRatio = xCoord / this.width * 100;
        let yRatio = yCoord / this.height * 100;
        this._collectibles.forEach((item, index:number) => {
            if(item.collectible === element){
                doesAlreadyExist = true;
                this._collectibles[index].xCoord = xCoord;
                this._collectibles[index].yCoord = yCoord;
                this._decorations[index].xRatio = xRatio;
                this._decorations[index].yRatio = yRatio;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._collectibles.push({
                collectible: Object.assign({},element),
                yCoord: yCoord,
                xCoord: xCoord
                xRatio: xRatio,
                yRatio: yRatio,
            });
        }
    }

    public setId(id:string){
        this.id = id;
    }

    setName(name:string) {
        this._name = name;
    }

    loadMap(map: any) {
        this._decorations = map.map.decorations;
        this._characters = map.map.characters;
        this._mapElements = map.map.mapElements;
        this._background = map.map.background;
        this._collectibles = map.map.collectibles;
        this.setName(map.map.name);
        this.setId(map._id);
    }

    public addMapElement(element: Character, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        let xRatio = xCoord / this.width * 100;
        let yRatio = yCoord / this.height * 100;
        this._mapElements.forEach((item, index:number) => {
            if(item.mapElement === element){
                doesAlreadyExist = true;
                this._mapElements[index].xCoord = xCoord;
                this._mapElements[index].yCoord = yCoord;
                this._decorations[index].xRatio = xRatio;
                this._decorations[index].yRatio = yRatio;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._mapElements.push({
                mapElement: Object.assign({},element),
                yCoord: yCoord,
                xCoord: xCoord
                xRatio: xRatio,
                yRatio: yRatio,
            });
        }
        console.log(this._mapElements);
    }

    public deleteComponent(componentToDelete: any) {
        this._decorations.forEach((decoration, index)=> {
            if(decoration.decoration == componentToDelete){
                this._decorations.splice(index,1);
                console.log("here");
            }
        });

        this._collectibles.forEach((collectible, index)=> {
            if(collectible.collectible == componentToDelete){
                this._collectibles.splice(index,1);
            }
        });

        this._mapElements.forEach((mapElement, index)=> {
            if(mapElement.mapElement == componentToDelete){
                this._mapElements.splice(index,1);
            }
        });

        this._characters.forEach((character, index)=> {
            if(character.character == componentToDelete){
                this._characters.splice(index,1);
            }
        });
    }

    public generateMap() {
        console.log(this);
        return {
            map: {
                name: this._name,
                background: this._background,
                decorations: this._decorations,
                mapElements: this._mapElements,
                collectibles: this._collectibles,
                characters: this._characters,
                width: this._width,
                height: this._height
            },
            _id: this.id
        };
    }


    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
    }

    get decorations(): any {
        return this._decorations;
    }

    set decorations(value: any) {
        this._decorations = value;
    }

    get collectibles(): any {
        return this._collectibles;
    }

    set collectibles(value: any) {
        this._collectibles = value;
    }

    get mapElements(): any {
        return this._mapElements;
    }

    set mapElements(value: any) {
        this._mapElements = value;
    }

    get characters(): any {
        return this._characters;
    }

    set characters(value: any) {
        this._characters = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }
}