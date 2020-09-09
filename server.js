const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// const routes = require("./controllers/routeContrllers.js");
// app.use(routes);

app.listen(PORT, function(){
    console.log(`listening on port: ${PORT}`);
});