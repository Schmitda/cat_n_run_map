export class Decoration extends Element{

    private _zcoord:number;


    get zcoord(): number {
        return this._zcoord;
    }

    set zcoord(value: number) {
        this._zcoord = value;
    }
}
