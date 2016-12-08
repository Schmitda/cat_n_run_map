import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user-service.service";
import {MapCreator} from "../../shared/map-creator.service";
import {MapSaveService} from "../../shared/map-save.service";
import {ModalService} from "../../ui/services/modal.service";

@Component({
    moduleId: module.id,
    selector: 'my-nav',
    templateUrl: '../templates/my-nav.component.html',
    styleUrls: ['../css/my-nav.component.min.css']
})
export class MyNavComponent implements OnInit {
    constructor(private router: Router,private userService: UserService, private mapCreator: MapCreator, private mapSaveService: MapSaveService, private modalService: ModalService) {
        this.userService.currentUser.
        subscribe((value) => {
            if(value == null){
                this.router.navigate(['/login']);
            }
        })
    }



    private saveMap(){
        this.modalService.mapSaveModal.generateJson = false;
        this.modalService.mapSaveModal.show();
    }

    private createJson(){
        this.modalService.mapSaveModal.generateJson = true;
        this.modalService.mapSaveModal.show();
    }

    private loadMap(){
        this.modalService.mapLoadModal.show();
    }

    ngOnInit() { }

    private goToMap(){
        this.router.navigate(['/map']);
    }

    private logout(){
        this.userService.logoff();
    }

}