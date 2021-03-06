const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const routes = require("./routes/routeControllers.js");


const db = require("./models");


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers:{
    section: function(name, options) { 
      if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this); 
        return null;
      }
  }
}));
app.set('view engine', 'handlebars');

app.use(routes);
require("./routes/htmlroutes.js")(app);
app.use(express.static('public'));






db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


