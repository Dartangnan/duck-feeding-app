const DataInput = require("../models/DBmodel");

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
