const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const session = require("express-session");
const routes = require("./routes/routeControllers.js");
const passport = require("passport");

const db = require("./models");


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(routes);
require("./routes/htmlroutes.js")(app);
app.use(express.static('public'));

// Creating express app and configuring middleware needed for authentication
// const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


