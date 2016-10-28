import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: '../templates/login.component.html',
    styleUrls: ['../css/login.component.min.css']
})
export class LoginComponent implements OnInit {

    private form: FormGroup;
    private isSuccessFull: boolean = false;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() { }


    private submit(){
        if(this.form.valid){

        }
    }

}