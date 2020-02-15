// express error logging

//const winston = require("winston");

module.exports = function(err, req, res, next) {
  //log exception
  //winston.error(err.message, err);
  console.log(err.message, err);
  res.status(500).send("internal server error");
};
