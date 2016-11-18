import {Injectable} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
@Injectable()

export class FormGenerator{

    constructor(private fb: FormBuilder) {

    }

    public generateElementForm(){
        return this.fb.group({
            width: ['', Validators.required],
            height: ['', Validators.required],
            name: ['', Validators.required],
            touchable: [false],
        })
    }

}