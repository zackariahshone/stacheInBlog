const express = require('express');
const phq = require('predicthq');
const nodeFetch = require('node-fetch');
const db = require("../models");

//const { JSON } = require('sequelize/types');

const router = express.Router();



router.post("/api/login", function (req, res) {
    res.json(req.user);
});

router.get("/api/allusers", function (req, res) {

    db.users.findAll({}).then(function (dbUsers) {
        res.json(dbUsers);
    })
});

router.post('/api/users', function (req, res) {

    console.log('from api route',
        req.body.f_name,
        req.body.l_name,
        req.body.user_name,
        req.body.email,
        req.body.phone);

    db.users.create(req.body).then(function (users) {

        res.json(users);
    });
});


//this route finds all the blogs and displays the json structure from data base
router.get("/api/allblogsstached", function (req, res) {

    db.blog.findAll({}).then(function (dbBlogs) {
        res.json(dbBlogs);
    });
});

router.get("/daily", function (req, res) {

    let blogs;
    db.blog.findAll({}).then(function (data) {


        const newObj = data.map(function (blog) {
            return {
                ...blog.dataValues
            }
        })

        console.log('the object shoudl be here', newObj);
        res.render('daily', {
            blog: newObj
        });
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
    // const phq = require('predicthq');
    const client = new phq.Client({
        access_token: 'w0fw-tkfu6Ztt6PllXl8E9gmp2VanyfnpGpH6bvm',
        fetch: nodeFetch
    });
    //const URL = "https://control.predicthq.com/search/events?category=festivals,performing-arts,community,sports,concerts&place.scope=5313457,5308655,4128894,4948899,5318313,5289282,6252001&label=automotive,attraction&label.op=any&state=active,deleted&deleted_reason=cancelled&sort=rank";


    client.events.search()
        .then(
            (results) => {
                for (const event of results) {
                    res.send(event);
                }
            }
        ).catch(
            err => console.error(err)
        );
});




module.exports = router;