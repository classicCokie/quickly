const yargs = require("yargs");

function getUserInput() {
  return yargs
    .usage(
      `Usage:
  \n -t <interface element type> 
  \n -n <interface element name>`
    )
    .option("t", {
      alias: "type",
      describe: "Interface Element Type",
      type: "string",
      demandOption: true
    })
    .option("n", {
      alias: "name",
      describe: "Interface Element Name",
      type: "string",
      demandOption: true
    }).argv;
}

module.exports = getUserInput;
