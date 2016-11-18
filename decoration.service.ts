import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class DecorationService{
    constructor(private http: Http) {
    }


    public save(decoration:Decoration):Observable<Decoration>{
        return this.http.post('dev_public/app/elements/decoration/', decoration)
            .map(this.extractData);
    }

    public getAllDecorations():Observable<Decoration[]>{
        return this.http.get('dev_public/app/elements/decoration/')
            .map(this.extractData);
    }

    public getByIdDecorations():Observable<Decoration[]>{
        return this.http.get('dev_public/app/elements/decoration//' + decoration._id)
            .map(this.extractData);
    }

    public update(decoration:Decoration):Observable<Decoration>{
        return this.http.put('dev_public/app/elements/decoration//' + decoration._id, decoration)
            .map(this.extractData);
    }

    public delete(id:number):Observable<any>{
        return this.http.delete('dev_public/app/elements/decoration//' + id)
            .map(this.extractData);
    }


    private extractData(res:Response){
        return res.json() || {};
    }
}
