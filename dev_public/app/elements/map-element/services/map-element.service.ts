import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {MapElement} from "../../../models/MapElement";
@Injectable()

export class MapElementService{
    constructor(private http: Http) {
    }


    public save(mapElement:MapElement):Observable<MapElement>{
        delete mapElement._id;
        return this.http.post('/api/collectible', mapElement)
            .map(this.extractData);
    }

    public getAll():Observable<MapElement[]>{
        return this.http.get('/api/collectible')
            .map(this.extractData);
    }

    public getById(id:string):Observable<MapElement[]>{
        return this.http.get('/api/collectible/' + id)
            .map(this.extractData);
    }

    public update(mapElement:MapElement):Observable<MapElement>{
        return this.http.put('/api/collectible/' + mapElement._id, mapElement)
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
