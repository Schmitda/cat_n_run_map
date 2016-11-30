import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, Validators} from "@angular/forms";
import {FormGenerator} from "../../../shared/form-generator.service";
import {Character} from "../../../models/Character";
import {Router} from "@angular/router";
import {CharacterService} from "../services/character.service";
import {FileService} from "../../../core/services/file.service";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/add-character.component.html',
    styleUrls: ['../css/add-character.component.min.css'],
})
export class AddCharacterComponent implements OnInit {
    private form: Form;
    private walkAnimationFiles: FileList;
    private jumpAnimationFiles: FileList;
    private hurtAnimationFiles: FileList;
    private dieAnimationFiles: FileList;
    private standAnimationFiles: FileList;
    private shootAnimationFiles: FileList;
    private character: Character = {};



    constructor(private fb: FormBuilder, private formGenerator: FormGenerator, private characterService: CharacterService, private router:Router, private fileService: FileService) {
        this.form = this.formGenerator.generateElementForm();
        this.form.addControl('walkAnimation', new FormControl(''));
        this.form.addControl('jumpAnimation', new FormControl(''));
        this.form.addControl('hurtAnimation', new FormControl(''));
        this.form.addControl('dieAnimation', new FormControl(''));
        this.form.addControl('standAnimation', new FormControl(''));
        this.form.addControl('shootAnimation', new FormControl(''));
        this.form.addControl('canShoot', new FormControl(false));
        this.form.addControl('speed', new FormControl(1));
        this.form.addControl('health', new FormControl(1));
    }

    private onWalkAnimationFileUpload(event){
        this.fileService.calculateImageSize(event.srcElement.files[0], this.form);
        this.walkAnimationFiles = event.srcElement.files;
    }

    private onJumpAnimationFileUpload(event){
        this.jumpAnimationFiles = event.srcElement.files;
    }

    private onHurtAnimationFileUpload(event){
        this.hurtAnimationFiles = event.srcElement.files;
    }

    private onDieAnimationFileUpload(event){
        this.dieAnimationFiles = event.srcElement.files;
    }

    private onStandAnimationFileUpload(event){
        this.standAnimationFiles = event.srcElement.files;
    }

    private onShootAnimationFileUpload(event){
        this.shootAnimationFiles = event.srcElement.files;
    }

    private submit(){
        if(this.form.valid){
            this.character = this.form.value;
            this.character.walkAnimation = this.walkAnimationFiles;
            this.character.shootAnimation = this.shootAnimationFiles;
            this.character.standAnimation = this.standAnimationFiles;
            this.character.dieAnimation = this.dieAnimationFiles;
            this.character.jumpAnimation = this.jumpAnimationFiles;
            this.character.hurtAnimation = this.hurtAnimationFiles;
            this.characterService.save(this.character)
                .subscribe(()=> {
                    this.router.navigate(['/map']);
                })
        }
    }

    ngOnInit() {

    }

}


