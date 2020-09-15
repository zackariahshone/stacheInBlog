const path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
    res.send('test');
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/crossroads", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/crossroads.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/dailyblog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/daily.html"));
  });
  app.get("/stacheup", function(reg, res){
      res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  })

};