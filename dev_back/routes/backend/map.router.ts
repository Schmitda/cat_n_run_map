import express = require("express");
import Map = require('../../models/Map');

let mapRouter = express.Router();


mapRouter.post('/nameTaken', (req:express.Request, res:express.Response) => {
    var regEx = new RegExp(req.body.toCheck, 'i');
    Map.findOne({name: regEx}).exec(function(err, map){
        if(err)
            res.status(400).json(err);
        if(map === null){
            res.json({taken: false});
        }else{
            if(map._id == req.body.id){
                res.json({taken: false});
            }else{
                res.json({taken: true, error: "nameTaken"});
            }
        }
    }).catch((err) => {
        res.json(err);
    })
});


mapRouter.get('/', (req: express.Request, res: express.Response) => {
    Map.find().populate('createdBy').exec()
        .then(function (result: IMap[]) {
            res.json(result)
        })
});

mapRouter.get('/:id', (req: express.Request, res: express.Response) => {
    Map.findById(req.params.id).populate('createdBy').exec()
        .then(function (result: IMap[]) {
            res.json(result)
        })
});

mapRouter.post('/', (req: express.Request, res: express.Response) => {
    let map = new Map(req.body);
    map.createdBy = req.session.user;
    map.save()
        .then((map: IMap) => {
            res.json(map);
        });
});

mapRouter.delete('/:id', (req: express.Request, res: express.Response) => {
    Map.findByIdAndRemove(req.params.id, function(err, map){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

mapRouter.put('/:id', (req: express.Request, res: express.Response) => {
    Map.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, map){
        if(err)
            res.status(400).json(err)
        res.json(map);
    });
});

export = mapRouter;
