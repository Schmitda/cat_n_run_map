import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs";
import {Http} from "@angular/http";
import {BackgroundService} from "../services/background.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/background.component.html',
    styleUrls: ['../css/background.component.min.scss'],
})
export class BackgroundComponent implements OnInit {
    private form: FormGroup;
    private file: File;

    constructor(private fb: FormBuilder, private backgroundService: BackgroundService, private router: Router) {
        this.form = fb.group({
            'name': ['',Validators.required],
            'source': ['', ]//TODO FileValidator
        });
    }

    private submit(){
        if(this.form.valid){
            let background = this.form.value;
            background.source = this.file;
            this.backgroundService.save(background).subscribe(() => {
                this.router.navigate(['/map'])
            });
        }
    }

    private uploadFileTest(event){
        this.file = event.srcElement.files[0];
    }

    ngOnInit() {

    }

}


