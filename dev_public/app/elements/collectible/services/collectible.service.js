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
var CollectibleService = (function () {
    function CollectibleService(http, fileService) {
        this.http = http;
        this.fileService = fileService;
    }
    CollectibleService.prototype.save = function (collectible) {
        delete collectible._id;
        var form = this.fileService.jsonToFormData(collectible);
        return this.http.post('/api/collectible', form)
            .map(this.extractData);
    };
    CollectibleService.prototype.getAll = function () {
        return this.http.get('/api/collectible')
            .map(this.extractData);
    };
    CollectibleService.prototype.getById = function (id) {
        return this.http.get('/api/collectible/' + id)
            .map(this.extractData);
    };
    CollectibleService.prototype.update = function (collectible) {
        return this.http.put('/api/collectible/' + collectible._id, collectible)
            .map(this.extractData);
    };
    CollectibleService.prototype.delete = function (id) {
        return this.http.delete('/api/collectible/' + id)
            .map(this.extractData);
    };
    CollectibleService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    CollectibleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, file_service_1.FileService])
    ], CollectibleService);
    return CollectibleService;
}());
exports.CollectibleService = CollectibleService;
//# sourceMappingURL=collectible.service.js.map