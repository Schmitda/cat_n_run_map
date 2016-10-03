var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
    name:{
        type: String
    },
    street:{
        type: String
    },
    country:{
        type: String,
        enum: ['ch', 'de', 'au']
    },
    plz:{
        type: String,
        max: [12, 'Sie haben die maximallänge überschritten']
    },
    location:{
        type: String
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    costs: {
        type: Number
    },
    license: {
        type: String,
        enum: ['free', 'freelancer', 'professional']
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }],
    teams:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        unique: true
    }],
    joinKeys: [{
        type: String
    }],
    generalKey: String
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
