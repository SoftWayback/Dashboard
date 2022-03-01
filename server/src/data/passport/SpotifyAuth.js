const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const DataShema = require("./../dataModel");
//var DiscordStrategy = require("passport-discord").Strategy;
//var GitHubStrategy = require("passport-github2").Strategy;
//var SpotifyWebApi = require("spotify-web-api-node");
//var GitHub = require("github-api");
//const TwitterStrategy = require("passport-twitter");
//var twitchStrategy = require("passport-twitchtv").Strategy;
//const { init } = require("./dataModel");

  passport.serializeUser(function (user, done) {
    process.nextTick(function () {
      done(null, user);
    });
  });

  passport.deserializeUser(function (user, done) {
    process.nextTick(function () {
      done(null, user);
    });
  });

  passport.use(
    new SpotifyStrategy(
      {
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:8080/data/auth/spotify/callback",
      },
      function (accessToken, refreshToken, expires_in, profile, done) {
        DataShema.SpotifyAccessToken = accessToken;
        DataShema.SpotifyProfile = profile;
        console.log(DataShema.SpotifyProfile);
          return done(null, profile);
      }
    )
  );


module.exports = passport;