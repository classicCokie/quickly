#!/usr/bin/env node
const {
  getUserInput,
  getFileMetaData,
  handleError,
  writeFiles,
  validateUserInput,
  normalizeName,
} = require("../lib");

try {
  let { type, name } = getUserInput();

  name = normalizeName(name);

  validateUserInput(type, name); // Throws if user Input is not valid

  const fileMetaData = getFileMetaData(type, name);

  writeFiles(fileMetaData, type, name);

  console.log(`Sucessfully added ${type} with name ${name}`);
} catch (error) {
  handleError(error);
}
