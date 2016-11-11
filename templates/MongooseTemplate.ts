import mongoose = require("mongoose");
import I{{Name}} = require("./I{{Name}}");

interface I{{Name}}Model extends I{{Name}}, mongoose.Document { }

var {{name}}Schema = new mongoose.Schema({
    {{toReplace}}
});


var {{Name}} = mongoose.model<I{{Name}}Model>({{Name}}, {{name}}Schema);
export = {{Name}};