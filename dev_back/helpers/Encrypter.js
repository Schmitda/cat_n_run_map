"use strict";
var Rx = require('rx');
var bcrypt = require('bcryptjs');
var Encrypter = (function () {
    function Encrypter() {
    }
    Encrypter.prototype.generateRandom = function (length) {
        return Rx.Observable.create(function (observer) {
            bcrypt.genSalt(length, function (err, code) {
                observer.onNext(code);
                observer.onCompleted();
            });
        });
    };
    ;
    Encrypter.prototype.encryptPassword = function (password) {
        return Rx.Observable.create(function (o) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    o.onNext(hash);
                    o.onCompleted();
                });
            });
        });
    };
    ;
    Encrypter.prototype.verifyPassword = function (password, hash) {
        return Rx.Observable.create(function (o) {
            bcrypt.compare(password, hash, function (err, res) {
                console.log(password);
                console.log(hash);
                console.log(err);
                console.log(res);
                o.onNext(res);
                o.onCompleted();
            });
        });
    };
    ;
    return Encrypter;
}());
exports.Encrypter = Encrypter;
//# sourceMappingURL=Encrypter.js.map