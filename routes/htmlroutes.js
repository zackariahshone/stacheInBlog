const path = require("path");


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

};