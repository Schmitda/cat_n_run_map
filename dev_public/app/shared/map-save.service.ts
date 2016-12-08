import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {MapCreator} from "./map-creator.service";
@Injectable()

export class MapSaveService{
    constructor(private http: Http, private mapCreator: MapCreator) {
    }

    public save(name:string):Observable<any>{
        let map = this.mapCreator.generateMap();
        map.map.name = name;
        if(map._id !== undefined){
            return this.update(map)
        }else{
        return this.http.post('/api/map', map)
            .map(this.extractData);
        }
    }

    public getAll():Observable<any[]>{
        return this.http.get('/api/map')
            .map(this.extractData);
    }

    public getById(id:string):Observable<any[]>{
        return this.http.get('/api/map/' + id)
            .map(this.extractData);
    }

    public update(mapsave:any):Observable<any>{
        return this.http.put('/api/map/' + mapsave._id, mapsave)
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('/api/map/' + id)
            .map(this.extractData);
    }

    public downloadCurrentMap(fileName: string){
        let map = this.mapCreator.generateMap();
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month > 9 ? month : "0"+ month;
        day = day > 9 ? day : "0"+ day;
        MapSaveService.download(fileName+year+""+month+""+day+".json", map);
    }

    static download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(text)));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}
