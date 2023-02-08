const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ruralschema = new Schema({
    img1:{
        type: String,
        required: true
    },
    img2:{
        type: String,
        required: true
    },
    img3:{
        type: String,
        required: true
    },
    head:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('rural',ruralschema,'rural');