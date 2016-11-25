import {BaseElement} from "./BaseElement";

export class MapElement extends BaseElement{
    private _sliding: boolean;
    private _speedModifier: number;


    get sliding(): boolean {
        return this._sliding;
    }

    set sliding(value: boolean) {
        this._sliding = value;
    }

    get speedModifier(): number {
        return this._speedModifier;
    }

    set speedModifier(value: number) {
        this._speedModifier = value;
    }
}
