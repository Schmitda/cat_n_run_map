import express = require("express");
import {{Name}} = require('../../models/{{Name}}Mongoose');
import I{{Name}} = require("../../models/I{{Name}}");


let {{name}}Router = express.Router();
{{name}}Router.get('/', (req: express.Request, res: express.Response) => {
    {{Name}}.find().exec()
        .then(function (result: I{{Name}}[]) {
        res.json(result)
    })
});

{{name}}Router.get('/:id', (req: express.Request, res: express.Response) => {
    {{Name}}.findById(req.params.id).exec()
        .then(function (result: I{{Name}}[]) {
        res.json(result)
    })
});

{{name}}Router.post('/', (req: express.Request, res: express.Response) => {
    let {{name}} = new {{Name}}(request.body);
    {{name}}.createdBy = request.session.user;
    {{name}}.save()
        .then(({{name}}: I{{Name}}) => {
        res.json({{name}});
    });
});

{{name}}Router.delete('/:id', (req: express.Request, res: express.Response) => {
    {{Name}}.findByIdAndRemove(req.params.id, function(err, {{name}}){
        if(err)
            res.status(400).json(err)
        res.json(true);
    });
});

{{name}}Router.put('/:id', (req: express.Request, res: express.Response) => {
    {{Name}}.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function(err, {{name}}){
        if(err)
            res.status(400).json(err)
        res.json({{name}});
    });
});

export = {{name}}Router;