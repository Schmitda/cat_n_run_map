import express = require("express");
import User = require('../../models/UserMongoose');
import {Encrypter} from "../../helpers/Encrypter";



let userRouter = express.Router();
userRouter.get('/createNatiiDaniel', (req: express.Request, res: express.Response) => {

    var daniel = new User({
        email: "dani.schmitz@live.de",
        username: 'Schmitda',
        firstname: 'Daniel',
        lastname: 'Schmitz',
        password: "Test123"
    });

    var natii = new User({
        email: "naadl.93@gmail.com",
        username: 'Muryoutaisuu',
        firstname: 'Natalie',
        lastname: 'Fioretti',
        password: "Test123"
    });

    daniel.save()
        .then((daniel) => {
            return natii.save();
        })
        .then((natii) => {
            res.json(true);
        }).catch((err) => {
            res.status(400).send(err);
    }) ;
});


userRouter.post('/login', (req: express.Request, res: exporess.Response) => {
    User.find({username: req.body.username}).exec((err, user) => {
        if(err)
            res.status(400).send(err);
        var encrypter = new Encrypter();
        encrypter.verifyPassword(req.body.password, user.password)
            .subscribe(
                (result)=>{
                    console.log(result);
                    req.session.user = user;
                    res.json(true);
                }
            )
    })
});

userRouter.get('/session', (request: express.Request, response: express.Response) => {
    response.json(request.session.user || {});
});

userRouter.get('/logoff', (req: express.Request, res: express.Response) => {
    req.session.destroy(() => {});
    res.json(true);
});


// add more route handlers here
// e.g. customerRouter.post('/', (req,res,next)=> {/*...*/})

export = userRouter;