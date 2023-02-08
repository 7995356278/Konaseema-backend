const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const godvariSchema = new Schema({
   head:{
    type: String,
    required: true
   },
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
   text:{
    type: String,
    required: true
   }
})

module.exports = mongoose.model('godavri',godvariSchema,'godavari');