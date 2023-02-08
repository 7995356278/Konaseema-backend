

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placesSchema = new Schema({
    place:{
        type: String,
        required : true
    },
    text: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('places',placesSchema,'places');