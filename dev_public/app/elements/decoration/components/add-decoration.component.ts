import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {FormGenerator} from "../../../shared/form-generator.service";
import {DecorationService} from "../services/decoration.service";
import {Router} from "@angular/router";
import {FileService} from "../../../core/services/file.service";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/add-decoration.component.html',
})
export class AddDecorationComponent implements OnInit {
    private form: FormGroup;
    private file: File;

    constructor(private formGenerator: FormGenerator, private decorationService: DecorationService, private router: Router, private fileService:FileService) {
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('zCoord', new FormControl(500));
    }

    private setFile(event){
        this.file = event.srcElement.files[0];
        this.fileService.calculateImageSize(this.file, this.form);
    }

    private submit(){
        if(this.form.valid){
            let decoration = this.form.value;
            decoration.source = this.file;
            this.decorationService.save(decoration)
                .subscribe(()=>{
                    this.router.navigate(['/map']);
                })
        }
    }

    ngOnInit() {

    }

}


