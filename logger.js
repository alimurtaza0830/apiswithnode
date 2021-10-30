function log(req, res, next) {
    console.log("Hello from Logger service...");
    next();
  }
module.exports = log;
  