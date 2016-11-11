import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
@Injectable()

export class FileService {

    public makeFileRequest(url: string, files: File[]|File): Observable {
        return Observable.create((observer: Observer) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            if (files instanceof Array) {
                for (let $i = 0; $i < files.length; $i++) {
                    formData.append("source[]", files[$i], files[$i].name);
                }
            }else{
                formData.append("source", files, files.name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.response);
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

    /*        xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);
                this.progressObserver.next(this.progress);
            };*/

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }

}