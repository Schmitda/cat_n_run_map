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


    public addDecoration(decoration: Decoration, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        this._decorations.forEach((decorationObj, index:number) => {
            if(decorationObj.decoration === decoration){
                doesAlreadyExist = true;
                this._decorations[index].xCoord = xCoord;
                this._decorations[index].yCoord = yCoord;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._decorations.push({
                decoration: Object.assign({},decoration),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
    }

    public addCharacter(element: Character, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        this._characters.forEach((item, index:number) => {
            if(item.character === element){
                doesAlreadyExist = true;
                this._characters[index].xCoord = xCoord;
                this._characters[index].yCoord = yCoord;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._characters.push({
                character: Object.assign({},element),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
    }

    public addCollectible(element: Character, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        this._collectibles.forEach((item, index:number) => {
            if(item.collectible === element){
                doesAlreadyExist = true;
                this._collectibles[index].xCoord = xCoord;
                this._collectibles[index].yCoord = yCoord;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._collectibles.push({
                collectible: Object.assign({},element),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
    }

    public addMapElement(element: Character, yCoord: number, xCoord: number){
        let doesAlreadyExist = false;
        this._mapElements.forEach((item, index:number) => {
            if(item.mapElement === element){
                doesAlreadyExist = true;
                this._mapElements[index].xCoord = xCoord;
                this._mapElements[index].yCoord = yCoord;
                return;
            }
        });
        if(!doesAlreadyExist){
            this._mapElements.push({
                mapElement: Object.assign({},element),
                yCoord: yCoord,
                xCoord: xCoord
            });
        }
        console.log(this._mapElements);
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
}