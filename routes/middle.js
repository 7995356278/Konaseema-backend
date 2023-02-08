const express = require('express');

const router = express.Router();

const aboutcontroller = require('../controllers/about');

const Placescontroller = require('../controllers/places');

const Maincontroller = require('../controllers/main');

const Middlecontroller = require('../controllers/middle');

const Godavricontroller = require('../controllers/godavari');

const Konacontroller = require('../controllers/kona');

const Ruralcontroller = require('../controllers/rural');

const Signup = require('../models/signup');

const Query = require('../models/query');

const Logincontroller = require('../controllers/login');

router.get('/about',aboutcontroller.about);
router.get('/places',Placescontroller.places);
router.get('/main',Maincontroller.main);
router.get('/middle',Middlecontroller.middle);
router.get('/godavari',Godavricontroller.godavari);
router.get('/kona',Konacontroller.kona);
router.get('/rural',Ruralcontroller.rural);
router.get('/login',Logincontroller.login);

router.post('/signup',async(req,res) => {
    console.log("post section")
    const data = new Signup({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile
    });
    const val =await data.save();
    res.send("user thankyou for your details");
    console.log(val);
})

router.post('/query',async(req,res) => {
    console.log("post section")
    const data = new Query({
        recomend: req.body.recomend,
        about: req.body.about
        
    });
    const hal =await data.save();
    res.send("user thankyou for your query now go back and enter your user details");
    console.log(hal);
})


module.exports = router;