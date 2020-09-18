const express = require('express');
const axios = require("axios");
const db = require("../models");
const passport = require("../config/middleware/passport");
//const { JSON } = require('sequelize/types');

const router = express.Router();

const blogObj = [{
    title:"test",
    author:"test",
    bloginput:"input"
},
{
    title:"test",
    author:"test",
    bloginput:"input"
},
{
    title:"test",
    author:"test",
    bloginput:"input"
}
]

router.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

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


//this route finds all the blogs and displays the json structure from data base
router.get("/api/allblogsstached", function (req, res) {

    db.blog.findAll({}).then(function (dbBlogs) {
        res.json(dbBlogs);
    });
});

router.get("/daily", function(req, res){
    //console.log(req.body);
    let blogs;
    db.blog.findAll({}).then(function(data){
       // const newData = JSON.stringify(data);

      const newObj =  data.map(function(blog){
         return {...blog.dataValues}
       })
       //console.log('Blogs object',obj);
       console.log('the object shoudl be here', newObj);

      // console.log({data:data});
       res.render('daily', {blog:newObj});
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
//const URL = "https://control.predicthq.com/search/events?category=festivals,performing-arts,community,sports,concerts&place.scope=5313457,5308655,4128894,4948899,5318313,5289282,6252001&label=automotive,attraction&label.op=any&state=active,deleted&deleted_reason=cancelled&sort=rank";
       axios
         .get("https://api.predicthq.com/v1/events?category=festivals", {
             "Accept" : "application/json",
             "Authorization":"Bearer tI-WQnMIu8QubhZX9zfAxa2uj8Dr96J3JwpXeLph"
         })
         .then(function(res) {
           console.log(res);
         });
    });




module.exports = router;