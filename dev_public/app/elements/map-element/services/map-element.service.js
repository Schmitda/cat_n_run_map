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
var MapElementService = (function () {
    function MapElementService(http) {
        this.http = http;
    }
    MapElementService.prototype.save = function (mapelement) {
        return this.http.post('/api/collectible', mapelement)
            .map(this.extractData);
    };
    MapElementService.prototype.getAllMapElements = function () {
        return this.http.get('/api/collectible')
            .map(this.extractData);
    };
    MapElementService.prototype.getByIdMapElements = function () {
        return this.http.get('/api/collectible/' + mapelement._id)
            .map(this.extractData);
    };
    MapElementService.prototype.update = function (mapelement) {
        return this.http.put('/api/collectible/' + mapelement._id, mapelement)
            .map(this.extractData);
    };
    MapElementService.prototype.delete = function (id) {
        return this.http.delete('/api/collectible/' + id)
            .map(this.extractData);
    };
    MapElementService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MapElementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MapElementService);
    return MapElementService;
}());
exports.MapElementService = MapElementService;
//# sourceMappingURL=map-element.service.js.map