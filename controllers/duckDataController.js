const fs = require("fs");

const DataInput = require("../models/DBmodel");
const csvStringifier = require("../models/csvModel");

// =========== Inserts one entry to the database ===========
exports.postEntryDB = async (req, res) => {
  try {
    const newEntry = await new DataInput(req.body);
    await newEntry.save();
    res.status(201).json({
      status: "success",
      message: "Entry successfully posted and saved.",
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "Failed to save new entry." });
  }
};

// =========== Retrieve all entries from the database ===========
exports.getDBEntries = async (req, res) => {
  try {
    const allEntries = await DataInput.find({});
    res.status(200).json({
      status: "success",
      message: "Entries were successfully retrieved.",
      data: { entries: allEntries },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Entries required could not be found.",
    });
  }
};

// =========== Create CSV string with all entries ===========

function createCSVString(allEntry) {
  const headers = csvStringifier.getHeaderString();
  const content = csvStringifier.stringifyRecords(allEntry);
  const csvString = `${headers}${content}`;
  return csvString;
}

// =========== Create CSV file with all entries ===========

exports.createCSVFile = async (req, res) => {
  try {
    const allEntries = await DataInput.find({});
    const csvString = createCSVString(allEntries);
    fs.writeFile(
      `./CSV/duck_feeding_data_${req.params.id}.csv`,
      csvString,
      (err) => {
        if (!err) {
          res
            .status(200)
            .header("Content-type: text/csv")
            .download(
              `./CSV/duck_feeding_data_${req.params.id}.csv`,
              `duck_feeding_data_${req.params.id}`
            );
        } else {
          console.log(err);
          res.status(500).json({
            status: "failed",
            message: "File could not be created.",
          });
        }
      }
    );
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Could not find entries required.",
    });
  }
};

// =========== Delete specific CSV file ===========

exports.deleteCSV = async (req, res) => {
  fs.unlink(`./CSV/duck_feeding_data_${req.params.id}.csv`, (err) => {
    if (!err) {
      res.status(210).json({
        status: "success",
        message: "File successfully deleted from server.",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: "File could not be deleted.",
      });
    }
  });
};
