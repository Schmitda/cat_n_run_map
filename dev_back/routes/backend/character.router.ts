import express = require("express");
import Character = require('../../models/CharacterMongoose');
import ICharacter = require("../../models/ICharacter");


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
    let character = new Character(req.body);
    Character.createdBy = req.session.user;
    character.save()
        .then((character: ICharacter) => {
            res.json(character);
        });
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
