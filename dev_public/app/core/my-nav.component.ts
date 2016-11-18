import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./services/user-service.service";

@Component({
    moduleId: module.id,
    selector: 'my-nav',
    templateUrl: 'templates/my-nav.component.html',
    styleUrls: ['css/my-nav.component.min.css']
})
export class MyNavComponent implements OnInit {
    constructor(private router: Router,private userService: UserService) {
        this.userService.currentUser.
        subscribe((value) => {
            if(value == null){
                this.router.navigate(['/login']);
            }
        })

    }

    ngOnInit() { }

    private goToMap(){
        this.router.navigate(['/map']);
    }

    private logout(){
        this.userService.logoff();
    }

}