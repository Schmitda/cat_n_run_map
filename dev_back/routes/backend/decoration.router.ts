import express = require("express");
import Decoration = require('../../models/DecorationMongoose');
var multer = require('multer');
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/decoration');
    },
    filename: function (req, file, callback) {
        let filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/decoration/" + filename;
        callback(null, filename);
    }
});

var upload = multer({ storage : storage}).single('source');

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
    upload(req, res, function(err){
        if(err){
            console.log(err);
        }
        let decoration = new Decoration(req.body);
        decoration.createdBy = req.session.user;
        decoration.save()
            .then((decoration: IDecoration) => {
                res.json(decoration);
            })
            .catch(err=> {
                console.log(err);
            });
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
