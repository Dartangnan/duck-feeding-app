const express = require("express");

const {
  postEntryDB,
  getDBEntries,
} = require("../controllers/duckDataController");

const dataValidation = require("../controllers/validationController");

const router = express.Router();

router
  .post("/api/v1", dataValidation, postEntryDB)
  .get("/api/v1", getDBEntries);

module.exports = router;
