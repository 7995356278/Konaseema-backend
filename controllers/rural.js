const Rural = require('../models/rural');

exports.rural= (req,res) => {
    Rural.find().then(
        result => {
            res.status(200).json({
                message: "rural details fetched",
                rural : result
            })
        }
    ).catch(err => {
         res.status(500).json({
            message : "error in database",
            error : err
         })   
    })
}