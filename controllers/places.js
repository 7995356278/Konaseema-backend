const Place = require('../models/places');

exports.places = (req,res) => {
    Place.find().then(
        result => {
            res.status(200).json({
                message : "places fetched",
                places : result
            })

            
        }
    ).catch(err => {
        res.status(500).json({
            message : "error in fetching",
            error : err
        })
    })
}