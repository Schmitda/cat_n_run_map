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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var file_service_1 = require("../../core/services/file.service");
var BackgroundService = (function () {
    function BackgroundService(http, fileService) {
        this.http = http;
        this.fileService = fileService;
    }
    BackgroundService.prototype.save = function (background) {
        return this.http.post('/api/background', background)
            .map(this.extractData);
    };
    BackgroundService.prototype.uploadImageAndSave = function (background, files) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.fileService.makeFileRequest('/api/background/file/' + background.name, files)
                .subscribe(function (source) {
                background.source = source.source;
                _this.save(background)
                    .subscribe(function (background) {
                    observer.next(background);
                    observer.complete();
                });
            });
        });
    };
    BackgroundService.prototype.getAllBackgrounds = function () {
        return this.http.get('/api/background')
            .map(this.extractData);
    };
    BackgroundService.prototype.getByIdBackgrounds = function (background) {
        return this.http.get('/api/background/' + background._id)
            .map(this.extractData);
    };
    BackgroundService.prototype.update = function (background) {
        return this.http.put('/api/background/' + background._id, background)
            .map(this.extractData);
    };
    BackgroundService.prototype.delete = function (id) {
        return this.http.delete('/api/background/' + id)
            .map(this.extractData);
    };
    BackgroundService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    BackgroundService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, file_service_1.FileService])
    ], BackgroundService);
    return BackgroundService;
}());
exports.BackgroundService = BackgroundService;
//# sourceMappingURL=background.service.js.map