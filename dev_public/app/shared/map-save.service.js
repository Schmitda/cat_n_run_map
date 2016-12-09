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
var map_creator_service_1 = require("./map-creator.service");
var MapSaveService = (function () {
    function MapSaveService(http, mapCreator) {
        this.http = http;
        this.mapCreator = mapCreator;
    }
    MapSaveService.prototype.save = function (name) {
        var map = this.mapCreator.generateMap();
        map.map.name = name;
        if (map._id !== undefined) {
            return this.update(map);
        }
        else {
            return this.http.post('/api/map', map)
                .map(this.extractData);
        }
    };
    MapSaveService.prototype.getAll = function () {
        return this.http.get('/api/map')
            .map(this.extractData);
    };
    MapSaveService.prototype.getById = function (id) {
        return this.http.get('/api/map/' + id)
            .map(this.extractData);
    };
    MapSaveService.prototype.update = function (mapsave) {
        return this.http.put('/api/map/' + mapsave._id, mapsave)
            .map(this.extractData);
    };
    MapSaveService.prototype.delete = function (id) {
        return this.http.delete('/api/map/' + id)
            .map(this.extractData);
    };
    MapSaveService.prototype.downloadCurrentMap = function (fileName) {
        var map = this.mapCreator.generateMap();
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        month = month > 9 ? month : "0" + month;
        day = day > 9 ? day : "0" + day;
        MapSaveService.download(fileName + year + "" + month + "" + day + ".json", map);
    };
    MapSaveService.download = function (filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(text)));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    MapSaveService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MapSaveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, map_creator_service_1.MapCreator])
    ], MapSaveService);
    return MapSaveService;
}());
exports.MapSaveService = MapSaveService;
//# sourceMappingURL=map-save.service.js.map