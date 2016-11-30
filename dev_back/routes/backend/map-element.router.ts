import express = require("express");
import MapElement = require('../../models/MapElement');

var multer = require('multer');
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/mapElement');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/mapElement/" + filename;
        callback(null, filename);
    }
});

var upload = multer({ storage : storage}).single('source');


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
    upload(req, res, function(err){
        if(err){
            console.log(err);
        }
        let mapElement = new MapElement(req.body);
        mapElement.createdBy = req.session.user;
        mapElement.save()
            .then((mapElement) => {
                res.json(mapElement);
            })
            .catch(err=> {
                console.log(err);
            });
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
