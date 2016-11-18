import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {FormGenerator} from "../../../shared/form-generator.service";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/add-decoration.component.html',
    styleUrls: ['../css/add-decoration.component.min.scss'],
})
export class AddDecorationComponent implements OnInit {
    private form: FormGroup;

    constructor(private formGenerator: FormGenerator) {
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('zcoord',new FormControl(100,Validators.required));
    }

    ngOnInit() {

    }

}


