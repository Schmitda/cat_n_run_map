import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";
import {FormGenerator} from "../../../shared/form-generator.service";
import {CollectibleService} from "../services/collectible.service";
import {Router} from "@angular/router";
import {SelectStructure} from "../../../shared/SelectStructure";
import {SelectElement} from "../../../shared/SelectElement";
import {FileService} from "../../../core/services/file.service";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/add-collectible.component.html',
    styleUrls: ['../css/add-collectible.component.min.scss'],
})
export class AddCollectibleComponent implements OnInit {
    private form: FormGroup;
    private file: File;
    private collectibleStructure: SelectStructure;

    constructor(private fb: FormBuilder, private formGenerator: FormGenerator, private collectibleService: CollectibleService, private router: Router,private fileService: FileService) {
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('reward', new FormControl('',Validators.required));
        this.form.controls.touchable.setValue(true);
        this.collectibleStructure = new SelectStructure();
        this.collectibleStructure.addSelectElement(new SelectElement('Speed', 'speed'));
        this.collectibleStructure.addSelectElement(new SelectElement('Life', 'life'));
        this.collectibleStructure.addSelectElement(new SelectElement('Invulnerable', 'invulnerable'));
    }

    private setFile(event){
        this.file = event.srcElement.files[0];
        this.fileService.calculateImageSize(this.file, this.form);
    }

    private submit(){
        if(this.form.valid){
            let collectible = this.form.value;
            collectible.source = this.file;
            this.collectibleService.save(collectible)
                .subscribe(() => {
                    this.router.navigate(['/map']);
                });
        }
    }

    ngOnInit() {

    }

}


