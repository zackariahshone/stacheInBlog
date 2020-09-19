const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");


// Routes
// =============================================================
module.exports = function(app) {

 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

 
  app.get("/crossroads", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/crossroads.html"));
  });

  
  app.get("/stacheablog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/stacheablog.html"));
  });
  
// Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/stacheup",  function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  });
  
 
// app.get("/daily", function(req, res){
//   res.sendFile(path.join(__dirname, "../public/html/daily.html"));
// });


};