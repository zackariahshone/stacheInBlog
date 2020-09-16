const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

 
  app.get("/crossroads", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/crossroads.html"));
  });

  
  app.get("/dailyblog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/daily.html"));
  });
  app.get("/stacheup", function(reg, res){
      res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  })
// Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/signup", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};