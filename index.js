const config = require("./config.js");

const services = require("./services")(config);

const apiRouter = require("./routes/api")(services);

const morgan = require("morgan");

const bodyParser = require("body-parser");

const express = require("express");

const app = express();

// For every log.
app.use(morgan("dev"));

// Set headers for requests.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

// Parse request body json.
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

// API router.
app.use("/api", apiRouter);

// Start to listen.
app.listen(config.express.port, () => {
  services.logger.log(`Server up and listening on port ${config.express.port}`);
});
