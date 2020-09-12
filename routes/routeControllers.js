const express = require('express');
const db = require("../models");

const router = express.Router();

router.get('/', function(req,res){
    res.render('login');
});



router.post('/api/users', function(req,res){

    db.users.create({
        text: req.body.text,
        complete: req.body.complete,
        //f_name: 
      }).then(function(dbTodo) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbTodo);
      });
    });


    


module.exports = router;