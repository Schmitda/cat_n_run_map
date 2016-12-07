import {Element} from "./Element";
export class Decoration extends Element{

    private _zCoord:number;


    get zCoord(): number {
        return this._zCoord;
    }

    set zCoord(value: number) {
        this._zCoord = value;
    }
}
