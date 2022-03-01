const DataShema = require("./../dataModel");
const passport = require("passport");
var GitHubStrategy = require("passport-github2").Strategy;
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
  new GitHubStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "http://localhost:8080/data/auth/github/callback",
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      DataShema.GithubAccessToken = accessToken;
      DataShema.GithubProfile = profile;
      console.log("PROFILE GITHUB = " + DataShema.GithubProfile),
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

module.exports = passport;
