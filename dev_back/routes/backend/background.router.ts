import express = require("express");
import Background = require('../../models/backgroundMongoose');
import IBackground = require("../../models/IBackground");
var multer  =   require('multer');
var storageBackground =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/background');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/background/" + filename;
        callback(null, filename);
    }
});

var uploadBackground = multer({ storage : storageBackground}).single('source');

let backgroundRouter = express.Router();
backgroundRouter.get('/', (req: express.Request, res: express.Response) => {
    Background.find().exec()
        .then(function (result: IBackground[]) {
            res.json(result)
        })
});

backgroundRouter.get('/first', (req: express.Request, res: express.Response) => {
    Background.findOne().exec()
        .then(function(result: IBackground){
            res.json(result);
        });
});



backgroundRouter.get('/:id', (req: express.Request, res: express.Response) => {
    Background.findById(req.params.id).exec()
        .then(function (result: IBackground[]) {
            res.json(result)
        })
});


backgroundRouter.post('/', (req: express.Request, res: express.Response) => {
    uploadBackground(req,res, function(err){
        if(err){
            console.log(err);
            return;
        }
        let background = new Background(req.body);
        background.createdBy = req.session.user;
        background.save()
            .then((background: IBackground) => {
                res.json(background);
            });
    });
});

backgroundRouter.delete('/:id', (req: express.Request, res: express.Response) => {
    Background.findByIdAndRemove(req.params.id, function(err, background){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

backgroundRouter.put('/:id', (req: express.Request, res: express.Response) => {
    Background.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, background){
        if(err)
            res.status(400).json(err)
        res.json(background);
    });
});

export = backgroundRouter;
