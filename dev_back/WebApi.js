"use strict";
var express = require('express');
var requestLogger = require("./middleware/request-logger");
var frontendRouter = require("./routes/frontend/frontend");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var expressSession = require('express-session');
var FileStore = require('session-file-store')(expressSession);
var cookieParser = require('cookie-parser');
var Config_1 = require("../config/Config");
var userRouter = require("./routes/backend/user-router");
var backgroundRouter = require("./routes/backend/background.router");
var collectibleRouter = require("./routes/backend/collectible.router");
var decorationRouter = require("./routes/backend/decoration.router");
var characterRouter = require("./routes/backend/character.router");
var mapelementRouter = require("./routes/backend/map-element.router");
var mapRouter = require("./routes/backend/map.router");
var WebApi = (function () {
    function WebApi(app, port) {
        this.app = app;
        this.port = port;
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }
    WebApi.prototype.configureMiddleware = function (app) {
        var db = Config_1.Config.getConfiguration();
        app.use(requestLogger);
        console.log("executed");
        app.use(methodOverride('X-HTTP-Method-Override'));
        //SETTING UP BODY-PARSER
        app.use(bodyParser.json());
        app.use((bodyParser.json({
            type: "application/vnd.api+json"
        })));
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
        app.use(express.static(__dirname + '/../dev_public'));
        app.use('/nm', express.static(__dirname + '/../node_modules'));
    };
    WebApi.prototype.configureRoutes = function (app) {
        app.use('/api/background', backgroundRouter);
        app.use('/api/map', mapRouter);
        app.use('/api/decoration', decorationRouter);
        app.use('/api/collectible', collectibleRouter);
        app.use('/api/character', characterRouter);
        app.use('/api/mapElement', mapelementRouter);
        app.use('/api/user', userRouter);
        app.use('/', frontendRouter);
    };
    WebApi.prototype.run = function () {
        this.app.listen(this.port);
    };
    return WebApi;
}());
exports.WebApi = WebApi;
//# sourceMappingURL=WebApi.js.map