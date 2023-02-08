const Middle = require('../models/middle')

exports.middle = (req,res) => {
    Middle.find().then(
        result=>{
            res.status(200).json({
                message: "middle details fetched",
                middle : result
            })
        }
    ).catch(err => {
        res.status(500).json({
            message: "error in db",
            error : err
        })
    })
}