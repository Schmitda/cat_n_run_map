import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Decoration} from "../../../models/Decoration";
import {FileService} from "../../../core/services/file.service";
@Injectable()

export class DecorationService{
    constructor(private http: Http, private fileService: FileService) {
    }


    public save(decoration:Decoration):Observable<Decoration>{
        let form = this.fileService.jsonToFormData(decoration);
        return this.http.post('/api/decoration', form)
            .map(this.extractData);
    }

    public getAll():Observable<Decoration[]>{
        return this.http.get('/api/decoration')
            .map(this.extractData);
    }

    public getById(decoration: Decoration):Observable<Decoration[]>{
        return this.http.get('/api/decoration/' + decoration._id)
            .map(this.extractData);
    }

    public update(decoration:Decoration):Observable<Decoration>{
        return this.http.put('/api/decoration/' + decoration._id, decoration)
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('/api/decoration/' + id)
            .map(this.extractData);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}
