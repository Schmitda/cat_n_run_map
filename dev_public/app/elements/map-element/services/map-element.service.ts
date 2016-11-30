import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {MapElement} from "../../../models/MapElement";
import {FileService} from "../../../core/services/file.service";
@Injectable()

export class MapElementService{
    constructor(private http: Http, private fileService: FileService) {
    }


    public save(mapElement:MapElement):Observable<MapElement>{
        delete mapElement._id;
        let form = this.fileService.jsonToFormData(mapElement);
        return this.http.post('/api/mapElement', form)
            .map(this.extractData);
    }

    public getAll():Observable<MapElement[]>{
        return this.http.get('/api/mapElement')
            .map(this.extractData);
    }

    public getById(id:string):Observable<MapElement[]>{
        return this.http.get('/api/mapElement/' + id)
            .map(this.extractData);
    }

    public update(mapElement:MapElement):Observable<MapElement>{
        return this.http.put('/api/mapElement/' + mapElement._id, mapElement)
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('/api/mapElement/' + id)
            .map(this.extractData);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}
