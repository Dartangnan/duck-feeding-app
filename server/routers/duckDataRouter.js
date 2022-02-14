const express = require("express");

const {
  postEntryDB,
  getDBEntries,
} = require("../controllers/duckDataController");

const router = express.Router();

router.post("/api/v1", postEntryDB).get("/api/v1", getDBEntries);

module.exports = router;
