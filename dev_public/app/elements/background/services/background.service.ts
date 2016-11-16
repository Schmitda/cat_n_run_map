import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Background} from "../../models/Background";
import {FileService} from "../../../core/services/file.service";
@Injectable()

export class BackgroundService {
    constructor(private http: Http, private fileService: FileService) {
    }


    public save(background: Background): Observable<Background> {
        return this.http.post('/api/background', background)
            .map(this.extractData);
    }

    public uploadImageAndSave(background:Background, files: File[]|File): Observable<Background> {
        return Observable.create((observer:Observer) => {
            this.fileService.makeFileRequest('/api/background/file/'+background.name, files)
                .subscribe(
                    source => {
                        background.source = source.source;
                        this.save(background)
                            .subscribe(background => {
                                observer.next(background);
                                observer.complete();
                            });
                    }
                )
        })

    }

    public getAllBackgrounds(): Observable<Background[]> {
        return this.http.get('/api/background')
            .map(this.extractData);
    }

    public getByIdBackgrounds(background:Background): Observable<Background[]> {
        return this.http.get('/api/background/' + background._id)
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
}