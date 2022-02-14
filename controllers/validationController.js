const checkIfComplete = (keys, size) => {
  console.log(keys.length);
  if (keys.length !== size) {
    return false;
  }
  return true;
};

const checkIfEmptyOrNull = (data, keys) => {
  let result = true;

  for (const key of keys) {
    console.log(data[key]);
    if (!data[key] || data[key].toString().trim() === "") {
      result = false;
      break;
    }
  }
  return result;
};

const checkIfNumbersValid = (...entries) => {
  let result = true;
  entries.forEach((entry) => {
    if (typeof +entry !== "number" || +entry <= 0) {
      result = false;
    }
  });
  return result;
};

const dataValidation = (req, res, next) => {
  const data = req.body;
  const keys = Object.keys(data);

  const isComplete = checkIfComplete(keys, 7);
  const areValuesValid = checkIfEmptyOrNull(data, keys);
  const areNumbersValid = checkIfNumbersValid(
    data["nDucks"],
    data["foodAmount"]
  );

  if (!isComplete) {
    res.status(400).json({
      status: "failed",
      message: "Not all fields were filled.",
    });
  } else if (!areValuesValid) {
    res.status(400).json({
      status: "failed",
      message: "Not all fields were filled or have valid inputs.",
    });
  } else if (!areNumbersValid) {
    res.status(400).json({
      status: "failed",
      message: "Not all fields have valid inputs.",
    });
  } else {
    next();
  }
};

module.exports = dataValidation;
