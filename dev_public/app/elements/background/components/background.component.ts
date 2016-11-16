import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Background} from "../../models/Background";
import {BackgroundService} from "../services/background.service";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs";
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/background.component.html',
    styleUrls: ['../css/background.component.min.scss'],
})
export class BackgroundComponent implements OnInit {
    private form: FormGroup;
    private file: File;

    constructor(private fb: FormBuilder, private backgroundService: BackgroundService) {
        this.form = fb.group({
            'name': ['',Validators.required],
            'source': ['', ]//TODO FileValidator
        });
    }

    private submit(){
        console.log(this.form)
        if(this.form.valid){
            let background = this.form.value;
            this.backgroundService.uploadImageAndSave(background, this.file).subscribe( () => {});
        }
    }

    private uploadFileTest(event){
        this.file = event.srcElement.files[0];
    }

    ngOnInit() {

    }

}


