import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {FormGenerator} from "../../../shared/form-generator.service";
import {MapElementService} from "../services/map-element.service";
import {Router} from "@angular/router";
import {FileService} from "../../../core/services/file.service";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/add-map-element.component.html',
    styleUrls: ['../css/add-map-element.component.min.scss'],
})
export class AddMapElementComponent implements OnInit {
    private form: FormGroup;
    private file: File;

    constructor(private formGenerator: FormGenerator, private mapElementService: MapElementService, private router: Router, private fileService:FileService) {
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('zcoord', new FormControl(500));
    }

    private setFile(event){
        this.file = event.srcElement.files[0];
        this.fileService.calculateImageSize(this.file, this.form);
    }

    private submit(){
        if(this.form.valid){
            let mapElement = this.form.value;
            mapElement.source = this.file;
            this.mapElementService.save(mapElement)
                .subscribe(()=>{
                    this.router.navigate(['/map']);
                })
        }
    }


    ngOnInit() {

    }

}


