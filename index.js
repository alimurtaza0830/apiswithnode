const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const courses = require("./routes/courses");
const logger = require("./logger");
const authenticator = require("./authenticator");
const express = require("express");
const app = express();

app.set("view engine", "pug");
// app.set('views', './views');

app.use(express.json());
app.use("./api/courses");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

// configuration
console.log(`Application Name: ${config.get("name")}`);
console.log(`Application Host: ${config.get("mail.host")}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("morgan enabled");
}
app.use(logger);
app.use(authenticator);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Express Application",
    Message: "Welcome to the Express Application",
  });
  //   res.send("Basic API in Express/Node");
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port ${port}, open http://localhost:${port}`)
);
