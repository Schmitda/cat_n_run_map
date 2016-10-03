var Rx = require('Rx');
var User = require('./../models/user');

module.exports = {
    getCurrentUser: function(req){
        return Rx.Observable.create(function(observer){
            User.findById(req.session.user._id).exec(function(err, user){
                if(err){
                    observer.onError(err);
                    observer.onCompleted();
                }else{
                    observer.onNext(user);
                    observer.onCompleted();
                }
            })
        });
    }
};