const Kona = require('../models/kona');

exports.kona= (req,res) => {
    Kona.find().then(
        result => {
            res.status(200).json({
                message: "Kona details fetched",
                kona : result
            })
        }
    ).catch(err => {
         res.status(500).json({
            message : "error in database",
            error : err
         })   
    })
}