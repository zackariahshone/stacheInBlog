const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const routes = require("./routes/routeControllers.js");

const db = require("./models");


app.use(express.static('public'));
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
//app.use(express.static("public"));


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});