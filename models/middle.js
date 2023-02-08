const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const middleSchema = new Schema({
   
    stitle:{
        type:String,
        required : true
    },
    s1:{
       type: String,
       required : true
    },
    s2: {
        type: String,
        required : true
    },
    ktitle:{
        type:String,
        required : true

    },
    kdata:{
        type:String,
        required : true
    }
    
})

module.exports = mongoose.model('middle',middleSchema,'middle');
