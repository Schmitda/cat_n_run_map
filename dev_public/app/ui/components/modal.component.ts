import {Component, OnInit} from '@angular/core';
import {OverlayService} from "../services/overlay.service";


export class ModalComponent {
    protected isVisible : boolean = false;
    protected overlayService: OverlayService;

    public show(){
        this.overlayService.backgroundChanged.next(true);
        this.isVisible = true;
    }

    public hide(){
        this.isVisible = false;
        this.overlayService.backgroundChanged.next(false);
    }

}


