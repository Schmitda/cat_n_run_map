import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class OverlayService {
    public backgroundChanged = new EventEmitter(undefined);

    constructor() { }
}