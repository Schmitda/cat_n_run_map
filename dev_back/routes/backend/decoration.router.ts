import express = require("express");
import Decoration = require('../../models/DecorationMongoose');
import IDecoration = require("../../models/IDecoration");


let decorationRouter = express.Router();
decorationRouter.get('/', (req: express.Request, res: express.Response) => {
    Decoration.find().exec()
        .then(function (result: IDecoration[]) {
            res.json(result)
        })
});

decorationRouter.get('/:id', (req: express.Request, res: express.Response) => {
    Decoration.findById(req.params.id).exec()
        .then(function (result: IDecoration[]) {
            res.json(result)
        })
});

decorationRouter.post('/', (req: express.Request, res: express.Response) => {
    let decoration = new Decoration(req.body);
    Decoration.createdBy = req.session.user;
    decoration.save()
        .then((decoration: IDecoration) => {
            res.json(decoration);
        });
});

decorationRouter.delete('/:id', (req: express.Request, res: express.Response) => {
    Decoration.findByIdAndRemove(req.params.id, function(err, decoration){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

decorationRouter.put('/:id', (req: express.Request, res: express.Response) => {
    Decoration.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, decoration){
        if(err)
            res.status(400).json(err)
        res.json(decoration);
    });
});

export = decorationRouter;
