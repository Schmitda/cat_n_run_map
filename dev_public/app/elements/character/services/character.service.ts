import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Character} from "../../../models/Character";
import {FileService} from "../../../core/services/file.service";
@Injectable()

export class CharacterService{
    constructor(private http: Http, private fileService: FileService) {
    }


    public save(character:Character):Observable<Character>{
        if(name._id){
            delete name._id;
        }
        let form = this.fileService.jsonToFormData(character);
        console.log(form);
        return this.http.post('/api/character', form)
            .map(this.extractData);
    }

    public getAll():Observable<Character[]>{
        return this.http.get('/api/character')
            .map(this.extractData);
    }

    public getById(id:string):Observable<Character[]>{
        return this.http.get('/api/character/' + id)
            .map(this.extractData);
    }

    public update(character:Character):Observable<Character>{
        return this.http.put('/api/character/' + character._id, character)
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('/api/character/' + id)
            .map(this.extractData);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}
