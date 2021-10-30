function authenticator(req, res, next) {
  console.log("Hello from Authenticator service...");
  next();
}
module.exports = authenticator;
