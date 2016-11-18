import express = require("express");
import Collectible = require('../../models/CollectibleMongoose');
import ICollectible = require("../../models/ICollectible");


let collectibleRouter = express.Router();
collectibleRouter.get('/', (req: express.Request, res: express.Response) => {
    Collectible.find().exec()
        .then(function (result: ICollectible[]) {
            res.json(result)
        })
});

collectibleRouter.get('/:id', (req: express.Request, res: express.Response) => {
    Collectible.findById(req.params.id).exec()
        .then(function (result: ICollectible[]) {
            res.json(result)
        })
});

collectibleRouter.post('/', (req: express.Request, res: express.Response) => {
    let collectible = new Collectible(req.body);
    Collectible.createdBy = req.session.user;
    collectible.save()
        .then((collectible: ICollectible) => {
            res.json(collectible);
        });
});

collectibleRouter.delete('/:id', (req: express.Request, res: express.Response) => {
    Collectible.findByIdAndRemove(req.params.id, function(err, collectible){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

collectibleRouter.put('/:id', (req: express.Request, res: express.Response) => {
    Collectible.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, collectible){
        if(err)
            res.status(400).json(err)
        res.json(collectible);
    });
});

export = collectibleRouter;
