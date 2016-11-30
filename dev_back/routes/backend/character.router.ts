import express = require("express");
import Character = require('../../models/Character');
var multer = require('multer');


function getSavePathForAnimation(file):string{
    var dest;
    switch (file.fieldname){
        case "walkAnimation[]":
            dest = './dev_public/assets/uploads/character/walkAnimation';
            break;
        case "jumpAnimation[]":
            dest = './dev_public/assets/uploads/character/jumpAnimation';
            break;
        case "hurtAnimation[]":
            dest = './dev_public/assets/uploads/character/hurtAnimation';
            break;
        case "dieAnimation[]":
            dest = './dev_public/assets/uploads/character/dieAnimation';
            break;
        case "shootAnimation[]":
            dest = './dev_public/assets/uploads/character/shootAnimation';
            break;
    }
    return dest;
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, getSavePathForAnimation(file));
    },
    filename: function (req, file, cb) {
        if(file.mimetype.indexOf("image") > -1){
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            month = month > 9 ? month : "0" + month;
            day = day > 9 ? day : "0" + day;

            var fileName = year + "" + month + "" + day + '_'+file.originalname;
            let tempArrayName = file.fieldname.replace("[]", "");
            if(!(req.body[tempArrayName] instanceof Array)){
                req.body[tempArrayName] =  [];
                req.body[tempArrayName].push(getSavePathForAnimation(file).replace('./dev_public/', '') + "/" + fileName);
            }else{
                req.body[tempArrayName].push(getSavePathForAnimation(file).replace('./dev_public/', '') + "/" + fileName);
            }
            cb(null, fileName);
        }
    }
});

var upload = multer({ storage: storage }).any();

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


characterRouter.post('/', (req: express.Request, res: express.Response) => {
    upload(req, res, function(err){
        console.log(req.body);
        let character = new Character(req.body);
        character.save((err, character) => {
            res.json(character);
        })
    });
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
