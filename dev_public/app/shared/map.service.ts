import {Injectable} from "@angular/core";
import {Element} from "../models/Element";
import {HostListener} from "@angular/core/src/metadata/directives";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class MapService{
    private _selected: Element;
    private _notifySelected:BehaviorSubject<Element>;

    constructor() {
        this._notifySelected = new BehaviorSubject(undefined);
    }

    public selectElement(obj: Element){
        if(this._selected && this._selected._id == obj._id){
            this._selected = null;
            this._notifySelected.next(null);
        }else{
            this._selected = obj;
            this._notifySelected.next(this._selected);
        }
    }

    get notifySelected(): BehaviorSubject<Element> {
        return this._notifySelected;
    }

    get selected(): Element {
        return this._selected;
    }
}