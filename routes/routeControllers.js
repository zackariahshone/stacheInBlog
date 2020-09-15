const express = require('express');
const db = require("../models");

const router = express.Router();

router.get('/', function(req,res){
    res.render('login');
});

router.get("/api/allusers", function(req,res){

    db.users.findAll({}).then(function(dbUsers){
        res.json(dbUsers);
    })    
});

router.post('/api/users', function(req,res){

    console.log('from api route', 
        req.body.f_name,
        req.body.l_name,
        req.body.user_name,
        req.body.email,
        req.body.phone);

    db.users.create({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        user_name: req.body.user_name,
        email: req.body.email,
        phone:req.body.phone
        //f_name: 
      }).then(function(dbTodo) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbTodo);
      });
    });


    


module.exports = router;