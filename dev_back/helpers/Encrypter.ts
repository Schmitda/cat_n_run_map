import Observable = Rx.Observable;
import Rx = require('rx');
var bcrypt  = require('bcryptjs');

export class Encrypter {
    public generateRandom(length:number):Observable<any> {
        return Rx.Observable.create(function (observer) {
            bcrypt.genSalt(length, function (err, code) {
                observer.onNext(code);
                observer.onCompleted();
            });
        })
    };

    public encryptPassword(password:string):Observable<any> {
        return Rx.Observable.create(function (o) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    o.onNext(hash);
                    o.onCompleted();
                });
            });
        });
    };

    public verifyPassword(password:string, hash:string):Observable<any> {
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
}