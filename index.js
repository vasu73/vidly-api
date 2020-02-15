require("express-async-errors");
const winston = require("winston");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const express = require("express");
const mongoose = require("mongoose");
const error = require("./middleware/error");

const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");

const app = express();

//winston.add(winston.transports.Console);

// winston.add(winston.transports.MongoDB, {
//   db: "mongodb://localhost/vidly",
//   level: "info"
// });

//connect to db
mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongo db"))
  .catch(err => console.log("Error connecting to Mongo DB", err));

app.use(express.json());

//register routes
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);

//register after all middleware functions
app.use(error); //error is a reference to the error function

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
