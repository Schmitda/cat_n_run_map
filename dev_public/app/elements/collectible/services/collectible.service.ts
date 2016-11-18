import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class CollectibleService{
    constructor(private http: Http) {
    }


    public save(collectible:Collectible):Observable<Collectible>{
        return this.http.post('/api/collectible', collectible)
            .map(this.extractData);
    }

    public getAllCollectibles():Observable<Collectible[]>{
        return this.http.get('/api/collectible')
            .map(this.extractData);
    }

    public getByIdCollectibles():Observable<Collectible[]>{
        return this.http.get('/api/collectible/' + collectible._id)
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
