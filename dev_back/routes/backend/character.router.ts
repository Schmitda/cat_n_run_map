import express = require("express");
import Character = require('../../models/Character');
var multer = require('multer');
/*
var walkAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/walkAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/walkAnimation/" + filename;
        callback(null, filename);
    }
});

var jumpAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/jumpAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/jumpAnimation/" + filename;
        callback(null, filename);
    }
});

var hurtAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/hurtAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/hurtAnimation/" + filename;
        callback(null, filename);
    }
});

var dieAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/dieAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/dieAnimation/" + filename;
        callback(null, filename);
    }
});

var runAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/runAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/runAnimation/" + filename;
        callback(null, filename);
    }
});

var standAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/standAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/standAnimation/" + filename;
        callback(null, filename);
    }
});

var shootAnimation =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/character/shootAnimation');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/character/shootAnimation/" + filename;
        callback(null, filename);
    }
});
*/

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        //var code = JSON.parse(req.body.model).empCode;
        var dest = './dev_public/assets//uploads/';
      /*  mkdirp(dest, function (err) {
            if (err) cb(err, dest);
            else cb(null, dest);
        });*/
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, Date.now()+'-'+file.originalname);
    }
});

var walkAnimation = multer({ dest: './dev_public/assets/uploads/character/walkAnimation'});

let characterRouter = express.Router();
characterRouter.get('/', (req: express.Request, res: express.Response) => {
    Character.find().exec()
        .then(function (result: ICharacter[]) {
            res.json(result)
        })
});

characterRouter.get('/:id', (req: express.Request, res: express.Response) => {
    Character.findById(req.params.id).exec()
        .then(function (result: ICharacter[]) {
            res.json(result)
        })
});

var upload = multer({storage: storage});

characterRouter.post('/', walkAnimation.array('walkAnimation'), (req: express.Request, res: express.Response) => {
   /* let character = new Character(req.body);
    Character.createdBy = req.session.user;
    character.save()
        .then((character: ICharacter) => {
            res.json(character);
        });*/
});

characterRouter.delete('/:id', (req: express.Request, res: express.Response) => {
    Character.findByIdAndRemove(req.params.id, function(err, character){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

characterRouter.put('/:id', (req: express.Request, res: express.Response) => {
    Character.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, character){
        if(err)
            res.status(400).json(err)
        res.json(character);
    });
});

export = characterRouter;
