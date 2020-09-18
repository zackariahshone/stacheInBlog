const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  function(userName, password, done) {
    // When a user tries to sign in this code runs
    db.users.findOne({
      where: {
        user_name: userName
      }
    }).then(function(dbusers) {
      // If there's no user with the given email
      if (!dbusers) {
        return done(null, false, {
          message: "Incorrect Username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbusers.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbusers);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(users, cb) {
  cb(null, users);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
