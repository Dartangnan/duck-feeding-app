const mongoose = require("mongoose");

// =========== Creating database schema ===========
const inputSchema = new mongoose.Schema({
  time: { type: String, required: true },
  foodType: { type: String, required: true },
  location: { type: String, required: true },
  frequency: { type: String, required: true },
  nDucks: { type: Number, required: true },
  foodAmount: { type: Number, required: true },
  amountUnit: { type: String, required: true },
});

// =========== Creating a model to interact with the database ===========
const DataInput = mongoose.model("DataInput", inputSchema);

module.exports = DataInput;
