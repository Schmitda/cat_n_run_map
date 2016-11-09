import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../core/user-service.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: '../templates/login.component.html',
    styleUrls: ['../css/login.component.min.css']
})
export class LoginComponent implements OnInit {

    private form: FormGroup;
    private isSuccessFull: boolean = false;

    constructor(private fb: FormBuilder,private userService: UserService, private router: Router) {
        this.form = fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() { }


    private submit(){
        if(this.form.valid){
            this.userService.login(this.form.controls.username.value, this.form.controls.password.value)
                .subscribe((value)=>{
                    if(value){
                        this.router.navigate(['/map'])
                    }
                });
        }
    }

}