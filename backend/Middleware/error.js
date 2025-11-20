module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500; //&& Number.isInteger(err.statusCode) ? err.statusCode : 500
  // err.message = err.message || "Internal Server Error"

  // Development mode - show everything
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      success: false,
      status: err.statusCode,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  // Production mode - limited show
  if (process.env.NODE_ENV === "production") {
    let message = err.message;
    let error = new Error(message);

    if (err.name === "ValidatorError") {
      message = Object.values(err.errors).map((value) => value.message);
      error = new Error(message);
      err.statusCode = 400;
    }

    // variable can't find
    if (err.name === "ReferenceError") {
      const missingVariable = err.message.split(" ")[0]; // Extract the variable name
      message = `Can't find variable: ${missingVariable}`;
      error = new Error(message);
      err.statusCode = 400;
    }

    // String or number or NaN validation error
    if (err.name === "CastError") {
        message = `Resource not found: ${err.path}`;
        error = new Error(message);
        err.statusCode = 400;
    }

    res.status(err.statusCode).json({
      status: "Fail",
      message: error.message || "Internal server error",
    });
  }
};
