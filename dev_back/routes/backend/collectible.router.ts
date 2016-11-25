import express = require("express");
import Collectible = require('../../models/Collectible');
var multer  =   require('multer');
var storageCollectible =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/collectible');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/collectible/" + filename;
        callback(null, filename);
    }
});

var upload = multer({ storage : storageCollectible}).single('source');

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
    upload(req, res, function(err){
        if(err){
            console.log(err);
            return;
        }
        let collectible = new Collectible(req.body);
        collectible.createdBy = req.session.user;
        collectible.save()
            .then((collectible: Collectible) => {
                res.json(collectible);
            }).catch(err=>{
                console.log(err);
        });
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
