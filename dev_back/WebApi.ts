import express = require('express');
import requestLogger = require("./middleware/request-logger");
import frontendRouter = require("./routes/frontend/frontend");
import bodyParser = require("body-parser");
import mongoose = require('mongoose');
import methodOverride = require('method-override');
import expressSession = require('express-session');
var FileStore = require('session-file-store')(expressSession);
import cookieParser = require('cookie-parser');
import {Config} from "../config/Config";
import userRouter = require("./routes/backend/user-router");
import backgroundRouter = require("./routes/backend/background.router");
import collectibleRouter = require("./routes/backend/collectible.router");
import decorationRouter = require("./routes/backend/decoration.router");
import characterRouter = require("./routes/backend/character.router");
import mapelementRouter = require("./routes/backend/map-element.router");
import mapRouter = require("./routes/backend/map.router");



export class WebApi{

    constructor(private app: express.Express, private port:number) {
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    private configureMiddleware(app:express.Express){
        let db = Config.getConfiguration();
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
        app.use('/nm',express.static(__dirname + '/../node_modules'));
    }

    private configureRoutes(app: express.Express){
        app.use('/api/background', backgroundRouter);
        app.use('/api/map', mapRouter);
        app.use('/api/decoration', decorationRouter);
        app.use('/api/collectible', collectibleRouter);
        app.use('/api/character', characterRouter);
        app.use('/api/mapElement', mapelementRouter);
        app.use('/api/user',userRouter);
        app.use('/', frontendRouter);
    }

    public run(){
        this.app.listen(this.port)
    }
}