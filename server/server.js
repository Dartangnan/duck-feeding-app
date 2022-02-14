const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config();

// =========== Connect to the database ===========
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_KEY}@cluster0.olp8q.mongodb.net/${process.env.DB_NAME}`
  )
  .then((res) => {
    console.log("Successfully connected to the database.");
  })
  .catch((err) => console.error(err));

// =========== Set server to listen ===========
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
