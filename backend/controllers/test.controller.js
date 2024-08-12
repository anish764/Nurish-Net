const asyncHandler = require("express-async-handler");

const testRoute = asyncHandler(async (req, res) => {
  res.send("You made it");
});

module.exports = { testRoute };
