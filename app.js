const express = require("express");
const cors = require("cors");

const router = require("./routers/duckDataRouter");

// =========== Start express application ===========
const app = express();

// =========== Bodyparser ===========
app.use(express.json());

// =========== Implement CORS ===========
// Allowing the frontend application to access the backend.
app.use(cors({ origin: "*" }));

// =========== Routes ===========
app.use("/duckdata", router);

module.exports = app;
