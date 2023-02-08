const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const mainSchema = new Schema({
    image:{
        type: String,
        required : true
    }
   
    
})

module.exports = mongoose.model('main',mainSchema,'main');