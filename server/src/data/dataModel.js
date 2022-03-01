const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const DataShema = new Schema(
  {
    SpotifyArtistName: {
      type: String,
    },
    GithubNameFetched: {
      type: String,
    },
    GithubUserFetched: {
      type: Object,
    },
    SpotifyArtistId: {
      type: String,
    },
    SpotifyAccessToken: {
      type: String,
    },
    SpotifyArtistInfo: {
      type: Object,
    },
    GithubAccessToken: {
      type: String,
    },
    DiscordAccessToken: {
      type: String,
    },
    DiscordProfile: {
      type: Object,
    },
    SpotifyProfile: {
      type: Object,
    },
    GithubProfile: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Data", DataShema);
DataShema.plugin(uniqueValidator, {
  message: "{PATH} Already in use",
});
