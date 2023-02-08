const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const konaschema = new Schema({
    head:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('kona',konaschema,'kona');