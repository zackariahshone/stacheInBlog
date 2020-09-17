const express = require('express');
const db = require("../models");

const router = express.Router();

// router.get('/', function(req,res){
//     res.render('login');
// });

router.get("/api/allusers", function (req, res) {

    db.users.findAll({}).then(function (dbUsers) {
        res.json(dbUsers);
    })
});
// router.get("/api/allblogs", function(req,res){

//   db.users.findAll({}).then(function(blogs){
//       res.json(blogs);
//   })    
// });

router.post('/api/users', function (req, res) {

    console.log('from api route',
        req.body.f_name,
        req.body.l_name,
        req.body.user_name,
        req.body.email,
        req.body.phone);

    db.users.create(req.body).then(function (users) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(users);
    });
});

router.get("/api/allblogsstached", function (req, res) {

    db.blog.findAll({}).then(function (dbBlogs) {
        res.json(dbBlogs);
    });
});

router.post("/api/stacheposts", function (req, res) {
    console.log('response from route');
    console.log(`Title: ${req.body.title} Author: ${req.body.author} Blog: ${req.body.blog}`);

    db.blog.create({
        author: req.body.author,
        bloginput: req.body.blog,
        title: req.body.title
        //f_name: 
    }).then(function (blog) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(blog);
    });
});

router.get("/api/test", function (req, res) {
    
       // '(use axios)'

    });




module.exports = router;