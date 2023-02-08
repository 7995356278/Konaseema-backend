const Godavari = require('../models/godavari');

exports.godavari = (req,res) => {
    Godavari.find().then(
        result=>{
            res.status(200).json({
                message : "godavri details fetched",
                godavari : result
            })
        }
    ).catch(err => {
        res.status(500).json({
          message: "error somewhere",
          error : err
        })   
     })
}