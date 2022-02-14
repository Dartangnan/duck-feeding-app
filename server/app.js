const express = require("express");
const cors = require("cors");

// =========== Start express application ===========
const app = express();

// =========== Bodyparser ===========
app.use(express.json());

// =========== Implement CORS ===========
// Allowing the frontend application to access the backend.
app.use(cors({ origin: "*" }));

module.exports = app;
