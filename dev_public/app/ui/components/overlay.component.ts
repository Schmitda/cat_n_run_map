import {Component, OnInit, HostListener, HostBinding} from '@angular/core';
import {OverlayService} from "../services/overlay.service";

@Component({
    moduleId: module.id,
    selector: 'overlay-component',
    templateUrl: '../templates/overlay.component.html',
    styleUrls: ['../css/overlay.component.min.css'],
})
export class OverlayComponent implements OnInit {
    private _isVisible : boolean = false;
    @HostListener('click', ['$event'])
    onClick(event:MouseEvent){
        this.overlayService.backgroundChanged.next(false);
        this._isVisible = false;
    }
    @HostBinding('class.hidden') get isVisible(){
        return !this._isVisible;
    };


    constructor(private overlayService: OverlayService) {
        this.overlayService.backgroundChanged.subscribe((bool: boolean)=>{
            if(bool){
                this._isVisible = true;
            }else{
                this._isVisible = false;
            }
        })
    }

    ngOnInit() {

    }


    set isVisible(value: boolean) {
        this._isVisible = value;
    }
}


