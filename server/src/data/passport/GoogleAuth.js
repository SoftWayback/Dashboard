const User = require("../../account/userController");
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
//const { init } = require("./dataModel");

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    done(null, user);
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "",
      clientSecret: "",
      callbackURL: "http://localhost:8080/data/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

module.exports = passport;
