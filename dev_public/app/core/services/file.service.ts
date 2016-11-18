import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
@Injectable()

export class FileService {

    public jsonToFormData(obj:Object, form?:FormData, namespace?:any) {
        var fd = form || new FormData();
        var formKey;
        for(var property in obj) {
            if(obj.hasOwnProperty(property)) {
                if(namespace) {
                    formKey = namespace + '[' + property + ']';
                } else {
                    formKey = property;
                }
                // if the property is an object, but not a File,
                // use recursivity.
                if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                    this.jsonToFormData(obj[property], fd, property);
                } else {
                    // if it's a string or a File object
                    fd.append(formKey, obj[property]);
                }
            }
        }
        return fd;
    };


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