const Main = require('../models/main')

const Middle = require('../models/middle')

exports.main = (req,res) => {
    Main.find().then(
        result => {
            res.status(200).json({
                message: "main details fetched",
                main: result
            })
        }
    ).catch(err => {
        res.status(500).json({
            message: "developer fucked up",
            error : err
        })
    })
}

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