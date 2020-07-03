function validateUserInput(type, name) {
  validateName(name);
  validateType(type);
}

const possbibleTypes = ["component", "screen"];

function validateType(type) {
  if (!possbibleTypes.includes(type)) {
    throw "NonValidIFEType";
  }
}

function validateName(name) {
  var numbers = /^[0-9]+$/;

  if (name.match(numbers)) {
    throw "NumbersInName";
  }
}

module.exports = validateUserInput;
