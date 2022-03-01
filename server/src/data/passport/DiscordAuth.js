const DataShema = require("./../dataModel");
const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;
var scopes = ["identify", "email", "guilds", "guilds.join"];
let profile_discord;
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
  new DiscordStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "http://localhost:8080/data/auth/discord/callback",
      scope: scopes,
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      DataShema.DiscordProfile = profile;
      console.log(DataShema.DiscordProfile);
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

module.exports = passport;
