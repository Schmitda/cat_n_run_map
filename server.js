/****** MODULES ******/
var express = require("express");
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var db = require("./config/config");
global = require("./config/globals");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressSession = require('express-session');
var FileStore = require('session-file-store')(expressSession);
var cookieParser = require('cookie-parser');

/****** PORT ******/
var port = null;

if(app.get('env')  == "development"){
    port = process.env.PORT || 55;
}else{
    port = process.env.PORT || 80;
}

/****** SETUP-DEV & PRODUCTION ******/
app.use(methodOverride('X-HTTP-Method-Override'));

//SETTING UP BODY-PARSER
app.use(bodyParser.json());
app.use((bodyParser.json({
    tye: "application/vnd.api+json"
})));

//SETTING UP DB
mongoose.connect(db.url);

//SETTING UP COOKIES
app.use(cookieParser());

//SETTING UP SESSSIONS
app.use(expressSession({
    store: new FileStore(db.filestoreSessionOptions),
    secret: db.salt,
    resave: true,
    saveUninitialized: false
}));

// PARSE x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

/****** Switch ******/
if(app.get('env')  == "development") {
    //app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    require('./dev_back/routes/backend/backend')(app, router); // configure our routes
    app.use(express.static(__dirname + '/dev_public'));
    app.use('/nm',express.static(__dirname + '/node_modules'));
    require('./dev_back/routes/frontend/frontend')(app); // configure our routes
}

if(app.get('env')  == "production") {
    require('./app/routes/frontend')(app); // configure our routes
}

// start app ===============================================
// startup our app at http://localhost:8080
//app.listen(port);
app.listen(port);


console.log('Magic happens on port ' + port);
// expose app
exports = module.exports = app;