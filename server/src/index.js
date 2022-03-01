const express = require("express");
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const app = express();
const fs = require('fs')

app.get("/about.json", (req, res) => {
  let txtData = fs.readFileSync('./about.json');
  let about = JSON.parse(txtData);
  about.client.host = req.connection.remoteAddress.substring(7);
  var d = new Date();
  var sec = Math.floor(d / 1000);
  about.server.current_time = sec;
  res.json(about)
});

app.use(cors());
app.use(session({ secret: "SECRET", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
require("./config/db")(app);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(morgan("dev"));

const userRoutes = require("./account/userRoute");
const dataRoutes = require("./data/dataRoute");
app.use("/user", userRoutes);
app.use("/data", dataRoutes);

// this looks cool
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});