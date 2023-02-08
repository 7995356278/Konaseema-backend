const Login = require('../models/login');

exports.login = (req,res) =>{
    Login.find().then(result => {
        res.status(200).json({
            message: "login details fetched",
            login : result
        })
    }).catch(err => {
        res.status(500).json({
            message: "error in the db",
            error :err
        })
    })
}