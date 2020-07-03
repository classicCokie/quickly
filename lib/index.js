const getUserInput = require("./getUserInput");
const getFileMetaData = require("./getFileMetaData");
const handleError = require("./handleError");
const toPascalCase = require("./toPascalCase");
const normalizeName = require("./normalizeName");
const validateUserInput = require("./validateUserInput");

module.exports = {
  getUserInput,
  getFileMetaData,
  handleError,
  toPascalCase,
  normalizeName,
  validateUserInput,
};
