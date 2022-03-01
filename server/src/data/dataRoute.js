const DataShema = require("./dataModel");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const SpotifyAuth = require("./passport/SpotifyAuth");
const GithubAuth = require("./passport/GithubAuth");
const DiscordAuth = require("./passport/DiscordAuth");
const GoogleAuth = require("./passport/GoogleAuth");
var SpotifyWebApi = require("spotify-web-api-node");
var GitHub = require("github-api");
var spotifyApi = new SpotifyWebApi();
let test;

function spotify_artist_info() {
  spotifyApi.setAccessToken(DataShema.SpotifyAccessToken);
  spotifyApi.getArtist(DataShema.SpotifyArtistId).then(
    function (data) {
      DataShema.SpotifyArtistInfo = data.body;
      console.log("SPOTIFY ARTIST INFOS: " + DataShema.SpotifyArtistInfo);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
}

function seek_spotify_artist_id() {
    spotifyApi.setAccessToken(DataShema.SpotifyAccessToken);
    console.log(DataShema.SpotifyAccessToken);
    spotifyApi.searchArtists("artist:" + DataShema.SpotifyArtistName).then(
      function (data) {
        DataShema.SpotifyArtistId = data.body.artists.items[0].id;
        spotify_artist_info();
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
}

async function getGitHubData() {
  let gh = new GitHub({ token: DataShema.GithubAccessToken });
  let me = gh.getUser(DataShema.GithubNameFetched);
  console.log(DataShema.GithubNameFetched);
  test = me.listStarredRepos();
}

///ROUTER SPOTIFY
router.get("/auth/spotify", SpotifyAuth.authenticate("spotify", { successRedirect: "http://localhost:4200/", failureRedirect: "http://localhost:8080/", failureMessage: true, }), function (req, res) { res.redirect("http://localhost:4200/"); });
router.get("/spotifyprofile", (req, res) => { res.json(DataShema.SpotifyProfile); });
router.get("/auth/spotify/callback", passport.authenticate("spotify", { failureRedirect: "http://localhost:8080/"}), function (req, res) { res.redirect("http://localhost:4200/"); });
router.get("/spotify_artist_info", (req, res, next) => { DataShema.SpotifyArtistName = req.query.searchKey; seek_spotify_artist_id(); });
router.get("/spotify/playlist", (req, res) => { res.json(DataShema.SpotifyArtistInfo); });
///ROUTER GITHUB
router.get("/auth/github", GithubAuth.authenticate("github", { successRedirect: "http://localhost:4200/", failureRedirect: "http://localhost:8080/", failureMessage: true, }), function (req, res) { res.redirect("http://localhost:4200/"); });
router.get("/auth/github/callback", passport.authenticate("github", { failureRedirect: "http://localhost:8080/", }), function (req, res) {res.redirect("http://localhost:4200/");});
router.get("/github_user_fetched", (req, res, next) => { DataShema.GithubNameFetched = req.query.searchKey; getGitHubData(); });
router.get("/github/fetched-profile", (req, res) => {res.json(DataShema.GithubUserFetched);});
router.get("/githubprofile", (req, res) => { res.json(DataShema.GithubProfile); });
///ROUTER DISCORD
router.get("/auth/discord", DiscordAuth.authenticate("discord", { successRedirect: "http://localhost:4200/", failureRedirect: "http://localhost:8080/", failureMessage: true, }), function (req, res) {res.redirect("http://localhost:4200/"); });
router.get("/auth/discord/callback", passport.authenticate("discord", { failureRedirect: "http://localhost:8080/", }), function (req, res) { res.redirect("http://localhost:4200/");});
router.get("/discordprofile", (req, res) => { res.json(DataShema.DiscordProfile); });
///ROUTER GOOGLE
router.get("/auth/google", GoogleAuth.authenticate("google", { scope: ["profile", "email"],  successRedirect: "http://localhost:4200/", failureRedirect: "http://localhost:8080/", failureMessage: true, }), function (req, res) {res.redirect("http://localhost:4200/"); });
router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "http://localhost:8080/", }), function (req, res) { res.redirect("http://localhost:4200/"); } );
//router.get("/discordprofile", (req, res) => { res.json(DataShema.DiscordProfile); });
module.exports = router;