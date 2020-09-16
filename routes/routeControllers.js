const express = require('express');
const db = require("../models");
const passport = require("../config/middleware/passport");

const router = express.Router();

router.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

// router.get('/', function(req,res){
//     res.render('login');
// });

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
      }).then(function(users) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(users);
      });
    });

    router.get("/api/allblogsstached", function(req,res){

        db.blog.findAll({}).then(function(dbBlogs){
            res.json(dbBlogs);
        });    
    });
    
    router.post("/api/stacheposts", function(req, res){
        console.log('response from route');
        console.log(`Title: ${req.body.title} Author: ${req.body.author} Blog: ${req.body.blog}`);

        db.blog.create({
           author: req.body.author,
           bloginput: req.body.blog,
           title: req.body.title
            //f_name: 
          }).then(function(blog) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(blog);
          });
    });


module.exports = router;