import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Collectible} from "../../../models/Collectible";
import {FileService} from "../../../core/services/file.service";
@Injectable()

export class CollectibleService{
    constructor(private http: Http, private fileService: FileService) {
    }


    public save(collectible:Collectible):Observable<Collectible>{
        delete collectible._id;
        let form = this.fileService.jsonToFormData(collectible);
        return this.http.post('/api/collectible', form)
            .map(this.extractData);
    }

    public getAll():Observable<Collectible[]>{
        return this.http.get('/api/collectible')
            .map(this.extractData);
    }

    public getById(id: string):Observable<Collectible[]>{
        return this.http.get('/api/collectible/' + id)
            .map(this.extractData);
    }

    public update(collectible:Collectible):Observable<Collectible>{
        return this.http.put('/api/collectible/' + collectible._id, collectible)
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('/api/collectible/' + id)
            .map(this.extractData);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}
