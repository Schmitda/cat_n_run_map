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
var file_service_1 = require("../../../core/services/file.service");
var MapElementService = (function () {
    function MapElementService(http, fileService) {
        this.http = http;
        this.fileService = fileService;
    }
    MapElementService.prototype.save = function (mapElement) {
        delete mapElement._id;
        var form = this.fileService.jsonToFormData(mapElement);
        return this.http.post('/api/mapElement', form)
            .map(this.extractData);
    };
    MapElementService.prototype.getAll = function () {
        return this.http.get('/api/mapElement')
            .map(this.extractData);
    };
    MapElementService.prototype.getById = function (id) {
        return this.http.get('/api/mapElement/' + id)
            .map(this.extractData);
    };
    MapElementService.prototype.update = function (mapElement) {
        return this.http.put('/api/mapElement/' + mapElement._id, mapElement)
            .map(this.extractData);
    };
    MapElementService.prototype.delete = function (id) {
        return this.http.delete('/api/mapElement/' + id)
            .map(this.extractData);
    };
    MapElementService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MapElementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, file_service_1.FileService])
    ], MapElementService);
    return MapElementService;
}());
exports.MapElementService = MapElementService;
//# sourceMappingURL=map-element.service.js.map