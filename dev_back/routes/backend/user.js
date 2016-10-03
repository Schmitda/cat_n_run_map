var User = require('./../../models/user');
var Company = require('./../../models/company');
var Encrypter = require('./../../helpers/Encrypter');
var Messager = require('./../../helpers/Messager');

module.exports = function(app, router){
    router.post('/user', function(req, res){
        user = new User(req.body);
        user.save(function(err, user){
            if(err)
                res.status(400).json(err);
            res.json(user);
        });
    });

    router.post('/user/usernameTaken', function(req, res){
        var regEx = new RegExp(req.body.toCheck, 'i');
        User.findOne({username: regEx}).exec(function(err, user){
            if(err)
                res.status(400).json(err);
            if(user === null){
                res.json({taken: false});
            }else{
                res.json({taken: true, error: "usernameTaken"});
            }
        })
    });

    router.post('/user/login', function(req, res){
        var regEx = new RegExp(req.body.email, 'i');
        query = User.findOne({email: regEx}).select("+password").exec(function(err, user){
            Encrypter.verifyPassword(req.body.password, user.password).subscribe(
                function(boolean){
                    if(boolean === true){
                        req.session.user = user;
                        user.logins++;
                        res.json(user);
                        user.save();
                    }else{
                        //TODO Messager.sendError(res, "Passwort oder Benutzernahme fehlerhaft. Verwenden Sie ggf. die Passwort vergessen funktionalität");
                    }
                }
            );
        })
    });

    router.put('/user/:id', function(req, res){
        //TODO Security delete password injection and stuff

        if(req.params.id == req.session.user._id){
            User.findByIdAndUpdate(req.params.id, {lastCompany: req.body._id}, {new: true}, function(err, user){
                if(err)
                    res.status(400).send(err);
                res.json(user);
            })
        }else{
            //TODO
            res.status(400).send("Nicht genügend Berechtigung")
        }
    });

    router.get('/user/session', function(req, res){
        res.json(req.session.user || {});
    });

    router.post('/user/emailTaken', function(req, res){
        var regEx = new RegExp(req.body.toCheck, 'i');
        User.findOne({email: regEx}).exec(function(err, user){
            if(err)
                res.status(400).json(err);
            if(user === null){
                res.json({taken: false});
            }else{
                res.json({taken: true, error: "emailTaken"});
            }
        })
    });

    router.put('/user/:_id', function(req, res){

    });

    router.get('/user', function(req, res){
        res.send({"test": "test"});
    })
};