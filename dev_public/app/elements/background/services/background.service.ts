import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {FileService} from "../../../core/services/file.service";
import {Background} from "../../../models/Background";
@Injectable()

export class BackgroundService {
    constructor(private http: Http, private fileService: FileService) {
    }


    public save(background: Background): Observable<Background> {
        delete background._id;
        let form = this.fileService.jsonToFormData(background);
        return this.http.post('/api/background', form)
            .map(this.extractData);
    }


    public getAll(): Observable<Background[]> {
        return this.http.get('/api/background')
            .map(this.extractData);
    }

    public getById(id:string): Observable<Background[]> {
        return this.http.get('/api/background/' + id)
            .map(this.extractData);
    }

    public update(background: Background): Observable<Background> {
        return this.http.put('/api/background/' + background._id, background)
            .map(this.extractData);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete('/api/background/' + id)
            .map(this.extractData);
    }


    private extractData(res: Response) {
        return res.json() || {};
    }

    public getFirst() {
        return this.http.get('/api/background/first')
            .map(this.extractData);
    }
}