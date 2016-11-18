"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var FileService = (function () {
    function FileService() {
    }
    FileService.prototype.jsonToFormData = function (obj, form, namespace) {
        var fd = form || new FormData();
        var formKey;
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (namespace) {
                    formKey = namespace + '[' + property + ']';
                }
                else {
                    formKey = property;
                }
                // if the property is an object, but not a File,
                // use recursivity.
                if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                    this.jsonToFormData(obj[property], fd, property);
                }
                else {
                    // if it's a string or a File object
                    fd.append(formKey, obj[property]);
                }
            }
        }
        return fd;
    };
    ;
    FileService.prototype.makeFileRequest = function (url, files) {
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            if (files instanceof Array) {
                for (var $i = 0; $i < files.length; $i++) {
                    formData.append("source[]", files[$i], files[$i].name);
                }
            }
            else {
                formData.append("source", files, files.name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.response);
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
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
    };
    FileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map