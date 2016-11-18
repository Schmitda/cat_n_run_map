import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class CharacterService{
    constructor(private http: Http) {
    }


    public save(character:Character):Observable<Character>{
        return this.http.post('/api/character', character)
            .map(this.extractData);
    }

    public getAllCharacters():Observable<Character[]>{
        return this.http.get('/api/character')
            .map(this.extractData);
    }

    public getByIdCharacters():Observable<Character[]>{
        return this.http.get('/api/character/' + character._id)
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
