export class Background {
    private _name:string;
    private __id:string;
    private _source:string;
    private _createdBy:string;

    get createdBy(): string {
        return this._createdBy;
    }

    set createdBy(value: string) {
        this._createdBy = value;
    }

    get _id(): string {
        return this.__id;
    }

    set _id(value: string) {
        this.__id = value;
    }

    get source(): string {
        return this._source;
    }

    set source(value: string) {
        this._source = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}