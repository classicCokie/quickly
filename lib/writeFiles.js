const fs = require("fs");
const toPascalCase = require("./toPascalCase");

function writeFiles(files, type, name) {
  const baseDir = "./packages/catrice-pattern-library/src/";

  const targetDir =
    files.type === "module" ? "modules/" : `interface-elements/${files.type}s/`;

  const fullDir = `${baseDir}${targetDir}${files.folderName}`;

  if (fs.existsSync(fullDir)) {
    throw "FolderAlreadyExists";
  }

  fs.mkdirSync(fullDir);

  files.files.forEach((file) => {
    fs.writeFileSync(`${fullDir}/${file.name}`, file.content);
  });
  const pascalCaseName = toPascalCase(name);

  // Export File to Storybook
  const exportLine = `export { ${pascalCaseName} } from './${name}'`;
  fs.appendFileSync(`${baseDir}${targetDir}/index.ts`, exportLine);
}

module.exports = writeFiles;
