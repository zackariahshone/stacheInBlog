const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.render('login');
});

router.get('/api/users', function(req,res){

    blogmod.all(function(data){
        console.log(data);
        res.json(data);
    })
    
});



module.exports = router;