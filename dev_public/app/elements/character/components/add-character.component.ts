import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, Validators} from "@angular/forms";
import {FormGenerator} from "../../../shared/form-generator.service";
import {Character} from "../../../models/Character";
import {Router} from "@angular/router";
import {CharacterService} from "../services/character.service";

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '../templates/add-character.component.html',
    styleUrls: ['../css/add-character.component.min.css'],
})
export class AddCharacterComponent implements OnInit {
    private form: Form;
    private walkAnimationFiles: File[] = [];
    private jumpAnimationFiles: File[] = [];
    private hurtAnimationFiles: File[] = [];
    private dieAnimationFiles: File[] = [];
    private standAnimationFiles: File[] = [];
    private shootAnimationFiles: File[] = [];
    private character: Character = {};



    constructor(private fb: FormBuilder, private formGenerator: FormGenerator, private characterService: CharacterService, private router:Router) {
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
        for(let $i = 0; $i < event.srcElement.files.length; $i++){
           this.walkAnimationFiles.push(event.srcElement.files[$i]);
        }
    }

    private onJumpAnimationFileUpload(event){
        this.jumpAnimationFiles = event.srcElement.files;
        this.character.jumpAnimation = this.jumpAnimationFiles;
    }

    private onHurtAnimationFileUpload(event){
        this.hurtAnimationFiles = event.srcElement.files;
        this.character.hurtAnimation = this.hurtAnimationFiles;
    }

    private onDieAnimationFileUpload(event){
        this.dieAnimationFiles = event.srcElement.files;
        this.character.dieAnimation = this.dieAnimationFiles;
    }

    private onStandAnimationFileUpload(event){
        this.standAnimationFiles = event.srcElement.files;
        this.character.standAnimation = this.standAnimationFiles;
    }

    private onShootAnimationFileUpload(event){
        this.shootAnimationFiles = event.srcElement.files;
        this.character.shootAnimation = this.shootAnimationFiles;
    }

    private submit(){
        if(this.form.valid){
            this.character = this.form.value;
            console.log(this.walkAnimationFiles);
            this.character.walkAnimation = this.walkAnimationFiles;
            console.log(this.character);
            this.characterService.save(this.character)
                .subscribe(()=> {
                    this.router.navigate(['/map']);
                })
        }
    }

    ngOnInit() {

    }

}


