function toPascalCase(word) {
  return word
    .match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join("");
}

module.exports = toPascalCase;
