const express = require("express");

const {
  postEntryDB,
  getDBEntries,
  createCSVFile,
  deleteCSV,
} = require("../controllers/duckDataController");

const dataValidation = require("../controllers/validationController");

const router = express.Router();

router
  .post("/api/v1", dataValidation, postEntryDB)
  .get("/api/v1", getDBEntries)
  .get("/csvFile/:id", createCSVFile)
  .delete("/csvFile/:id", deleteCSV);
module.exports = router;
