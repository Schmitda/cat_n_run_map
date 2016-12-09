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
var CharacterService = (function () {
    function CharacterService(http, fileService) {
        this.http = http;
        this.fileService = fileService;
    }
    CharacterService.prototype.save = function (character) {
        if (name._id) {
            delete name._id;
        }
        var form = this.fileService.jsonToFormData(character);
        console.log(form);
        return this.http.post('/api/character', form)
            .map(this.extractData);
    };
    CharacterService.prototype.getAll = function () {
        return this.http.get('/api/character')
            .map(this.extractData);
    };
    CharacterService.prototype.getById = function (id) {
        return this.http.get('/api/character/' + id)
            .map(this.extractData);
    };
    CharacterService.prototype.update = function (character) {
        return this.http.put('/api/character/' + character._id, character)
            .map(this.extractData);
    };
    CharacterService.prototype.delete = function (id) {
        return this.http.delete('/api/character/' + id)
            .map(this.extractData);
    };
    CharacterService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    CharacterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, file_service_1.FileService])
    ], CharacterService);
    return CharacterService;
}());
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map