import {SelectElement} from "./SelectElement";
export class SelectStructure{
    private _selectArray:[{key:string}] = [];

    constructor() {

    }

    public addObj(obj: {}){
        this._selectArray.push(obj);
    }

    public addSelectElement(selectElement: SelectElement){
        this._selectArray.push(selectElement);
    }


    get selectArray(): any {
        return this._selectArray;
    }
}