"use strict";
var express = require("express");
require('../../models/{{Name}}Mongoose');
{
    {
        Name;
    }
}
require("../../models/I{{Name}}");
var _a = { name: name };
Router = express.Router();
{
    {
        name;
    }
}
Router.get('/', function (req, res) {
    {
        {
            Name;
        }
    }
    find().exec()
        .then();
}, []);
{
    res.json(result);
}
;
{
    {
        name;
    }
}
Router.get('/:id', function (req, res) {
    {
        {
            Name;
        }
    }
    findById(req.params.id).exec()
        .then();
}, []);
{
    res.json(result);
}
;
{
    {
        name;
    }
}
Router.post('/', function (req, res) {
    var _a = { name: name };
}, new {}, { Name: Name }, (request.body));
{
    {
        name;
    }
}
createdBy = request.session.user;
{
    {
        name;
    }
}
save()
    .then(function (_a, _b, I, _c, _d) {
    var name = _a.name;
    var Name = _b.Name;
    res.json({}, { name: name });
});
;
;
{
    {
        name;
    }
}
Router.delete('/:id', function (req, res) {
    {
        {
            Name;
        }
    }
    findByIdAndRemove(req.params.id, );
});
{
    if (err)
        res.status(400).json(err);
    res.json(true);
}
;
;
{
    {
        name;
    }
}
Router.put('/:id', function (req, res) {
    {
        {
            Name;
        }
    }
    findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, );
});
{
    if (err)
        res.status(400).json(err);
    res.json({}, { name: name });
}
;
;
;
{
    name;
}
Router;
module.exports = {};
//# sourceMappingURL=RouterTemplate.js.map