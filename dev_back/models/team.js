var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

var Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
