
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwGenericError() {
  throw new Error("Generic error");
}

function throwCustomError() {
  throw new CustomError("Custom error");
}

// Handling a generic error
try {
  console.log("Before throwing generic error");
  throwGenericError();
  console.log("After throwing generic error");
} catch (error) {
  console.log("Caught generic error:", error);
} finally {
  console.log("Finally block for generic error");
}

// Handling a custom error
try {
  console.log("Before throwing custom error");
  throwCustomError();
  console.log("After throwing custom error");
} catch (error) {
  console.log("Caught custom error:", error);
} finally {
  console.log("Finally block for custom error");
}