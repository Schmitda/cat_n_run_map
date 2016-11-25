import express = require("express");
import MapElement = require('../../models/MapElement');


let mapelementRouter = express.Router();
mapelementRouter.get('/', (req: express.Request, res: express.Response) => {
    MapElement.find().exec()
        .then(function (result: IMapElement[]) {
            res.json(result)
        })
});

mapelementRouter.get('/:id', (req: express.Request, res: express.Response) => {
    MapElement.findById(req.params.id).exec()
        .then(function (result: IMapElement[]) {
            res.json(result)
        })
});

mapelementRouter.post('/', (req: express.Request, res: express.Response) => {
    let mapelement = new MapElement(req.body);
    MapElement.createdBy = req.session.user;
    mapelement.save()
        .then((mapelement: IMapElement) => {
            res.json(mapelement);
        });
});

mapelementRouter.delete('/:id', (req: express.Request, res: express.Response) => {
    MapElement.findByIdAndRemove(req.params.id, function(err, mapelement){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

mapelementRouter.put('/:id', (req: express.Request, res: express.Response) => {
    MapElement.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, mapelement){
        if(err)
            res.status(400).json(err)
        res.json(mapelement);
    });
});

export = mapelementRouter;
