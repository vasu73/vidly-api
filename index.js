const mongoose = require("mongoose");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const express = require("express");

const app = express();

//connect to db
mongoose
  .connect("mongodb://localhost/mongo-exercises", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongo db"))
  .catch(err => console.log("Error connecting to Mongo DB", err));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
