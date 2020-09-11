const express = require('express');
const blogmod = require('../models/blogmod.js');
const router = express.Router();

router.get('/', function(req,res){
    res.render('login');
});

router.get('/api/users', function(req,res){

    blogmod.all(function(data){
        console.log(data);
        
        const hbsObj = {
            user: data
        }
        res.render('user', hbsObj);
    });

});

module.exports = router;