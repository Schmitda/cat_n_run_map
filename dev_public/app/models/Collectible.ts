import {Element} from "./Element";
export class Collectible extends Element{
    private _reward: string;

    get reward(): string {
        return this._reward;
    }

    set reward(value: string) {
        this._reward = value;
    }
}
