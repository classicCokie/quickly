function handleError(errorMsg) {
  switch (errorMsg) {
    case "NumbersInName":
      {
        console.error(
          "\x1b[31m",
          "Sorry, but you can not use Numbers in your IFE Name."
        );
      }
      break;
    case "NonValidIFEType": {
      console.error(
        "Sorry, but your IFE Type is not valid. Valid IFE Types are: module, atom, molecule, organism, form"
      );
      break;
    }
    case "FolderAlreadyExists": {
      console.error(
        "Sorry, but It seems a IFE Element by this name already exists! Be a little creative and pick another one"
      );
      break;
    }
    default: {
      console.error(errorMsg);
    }
  }
}

module.exports = handleError;
