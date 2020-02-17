const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = process.env.vidly_db || config.get("db");
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to " + config.get("db")));
};
