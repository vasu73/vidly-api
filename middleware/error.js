// express error logging
module.exports = function(err, req, res, next) {
  //log exception
  console.log(err.message, err);
  res.status(500).send("internal server error");
};
