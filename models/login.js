const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginschema = new Schema({
    fname:{
        type: String,
        required : true
    },
    lname:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    }
})

module.exports = mongoose.model('signups',loginschema,'signups');

