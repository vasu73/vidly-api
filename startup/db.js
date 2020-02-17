const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = process.env.vidly_db; //config.get("db")
  //console.log("connecting to db " + process.env.vidly_db);

  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to " + db));
};
