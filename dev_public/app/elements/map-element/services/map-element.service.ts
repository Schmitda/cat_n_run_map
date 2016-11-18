import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class MapElementService{
    constructor(private http: Http) {
    }


    public save(mapelement:MapElement):Observable<MapElement>{
        return this.http.post('/api/collectible', mapelement)
            .map(this.extractData);
    }

    public getAllMapElements():Observable<MapElement[]>{
        return this.http.get('/api/collectible')
            .map(this.extractData);
    }

    public getByIdMapElements():Observable<MapElement[]>{
        return this.http.get('/api/collectible/' + mapelement._id)
            .map(this.extractData);
    }

    public update(mapelement:MapElement):Observable<MapElement>{
        return this.http.put('/api/collectible/' + mapelement._id, mapelement)
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
