const mongoose = require('../db/db');

const likes = new mongoose.Schema({
    ideaID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ideas',
        require : true
    }, 

    studentID:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'student',
        require : true
    }]
});

module.exports = mongoose.model('likes', likes);