//Import modules
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Create server express
var app = express();

//Create connection database Mongo whit Mongoose
const connection = require("./services/connectionBD_Mongo");

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// General functions server setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//==================================================================
//Routes
//==================================================================
// Website routes
var indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Api routers
var advertisementRouter = require("./routes/api/v1/advertisement");
app.use("/api/v1/advertisement", advertisementRouter);

//==================================================================
//Errors
//==================================================================
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
const filter_isAPIRequest = require("./services/filter_isAPIRequest");
app.use(function (err, req, res, next) {
  //Filter errors in json for api routers or html website routes
  if (filter_isAPIRequest(req)) {
    res.json({ error: err.message });
    return;
  }

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

//==================================================================
//Export app
//==================================================================
module.exports = app;
