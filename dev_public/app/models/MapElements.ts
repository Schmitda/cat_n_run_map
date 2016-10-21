export class MapElements extends Element{
    private _speed:number;
    private _slideable:number;


    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get slideable(): number {
        return this._slideable;
    }

    set slideable(value: number) {
        this._slideable = value;
    }
}
