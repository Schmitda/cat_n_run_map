var mongoose = require('mongoose');
var encrypter = require('./../helpers/Encrypter');
var Rx = require('rx');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/;
    return re.test(email)
};

var UserSchema = new mongoose.Schema({
    username:{
        type: String,
        default:'',
        unique: true
    },
    email: {
        type: String,
        default: '',
        unique: true,
        required: 'Email Adresse wird benötigt',
        validate: [validateEmail, 'E-Mail Format fehlerhaft'],
    },
    password: {
        type: String,
        select: false,
        required: 'Passwort wird benötigt',
        validate: [function(value){
            return(value.length >= 6);
        },'Passwort ist zu kurz. Mindestlänge 6 Zeichen']
    },
    firstname: {
        type: String,
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        unique: true
    }],
    lastCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    lastTeam:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    lastname: {
        type: String,
    },
    street: String,
    forgot_url:{
        type: String,
        default: undefined
    },
    forgot_requested_at:{
        type: Date
    },
    updated_at:{
        type: Date
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    last_login:{
        type: Date
    },
    verification_url: String,
    session_password: String,
    cookie_password: String,
    companies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }]
});

UserSchema.pre('update', function(next){
    if(this._update.$set !== undefined && this._update.$set.password){
        this._update.$set.password = cryptograph.encrypt(this._update.$set.password);
    }
    if(this.password !== undefined && this.password.isModified){
        this.password = cryptograph.encrypt(this.password);
    }
    next();
});

UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    var _this = this;
    if(this.isNew){
        obs1 = encrypter.encryptPassword(this.password);
        obs3 = encrypter.generateRandom(25);
        obs2 = encrypter.generateRandom(20);
        Rx.Observable.forkJoin(obs1, obs2, obs3)
            .subscribe(
                function(val1){
                    _this.password = val1[0];
                    _this.verification_url = val1[1] + (new Buffer(_this.email)).toString('base64');
                    _this.session_password = val1[2] + (new Buffer(_this.email)).toString('base64');
                    next();
                },
                function(err){},
                function(complete){}
            );
    }else{
        if(this.password !== undefined && this.password.isModified){
            this.password = cryptograph.encrypt(this.password);
            next();
        }
    }
    next();
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
