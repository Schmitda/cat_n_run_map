import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class {{Name}}Service{
    constructor(private http: Http) {
    }


    public save({{name}}:{{Name}}):Observable<{{Name}}>{
        return this.http.post('{{url}}', {{Name.lower}})
            .map(this.extractData);
    }

    public getAll{{Name.multi}}():Observable<{{Name}}[]>{
        return this.http.get('{{url}}')
            .map(this.extractData);
    }

    public getById{{Name.multi}}():Observable<{{Name}}[]>{
        return this.http.get('{{url}}/' + {{Name.lower}}._id)
            .map(this.extractData);
    }

    public update({{Name.lower}}:{{Name}}):Observable<{{Name}}>{
        return this.http.put('{{url}}/' + {{Name.lower}}._id, {{Name.lower}})
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('{{url}}/' + id)
            .map(this.extractData);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}