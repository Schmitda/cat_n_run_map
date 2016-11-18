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
var DecorationService = (function () {
    function DecorationService(http) {
        this.http = http;
    }
    DecorationService.prototype.save = function (decoration) {
        return this.http.post('/api/decoration', decoration)
            .map(this.extractData);
    };
    DecorationService.prototype.getAll = function () {
        return this.http.get('/api/decoration')
            .map(this.extractData);
    };
    DecorationService.prototype.getById = function (decoration) {
        return this.http.get('/api/decoration/' + decoration._id)
            .map(this.extractData);
    };
    DecorationService.prototype.update = function (decoration) {
        return this.http.put('/api/decoration/' + decoration._id, decoration)
            .map(this.extractData);
    };
    DecorationService.prototype.delete = function (id) {
        return this.http.delete('/api/decoration/' + id)
            .map(this.extractData);
    };
    DecorationService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    DecorationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DecorationService);
    return DecorationService;
}());
exports.DecorationService = DecorationService;
//# sourceMappingURL=decoration.service.js.map