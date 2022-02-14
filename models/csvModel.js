const createCsvStringifier = require("csv-writer").createObjectCsvStringifier;

// =========== Creating CSV schema ===========
const csvStringifier = createCsvStringifier({
  path: "./CSV/duck_feeding_data.csv",
  header: [
    { id: "time", title: "FEEDING_TIME" },
    { id: "foodType", title: "FOOD_TIME" },
    { id: "location", title: "LOCATION" },
    { id: "frequency", title: "FREQUENCY" },
    { id: "nDucks", title: "NUMBER_OF_DUCKS" },
    { id: "foodAmount", title: "AMOUNT_OF_FOOD" },
    { id: "amountUnit", title: "AMOUNT_UNIT" },
  ],
});

module.exports = csvStringifier;
