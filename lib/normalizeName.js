function normalizeName(word) {
  return word
    .match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toLowerCase() + word.substr(1);
    })
    .join("");
}

module.exports = normalizeName;
