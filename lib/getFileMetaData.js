const { button, standard } = require("./templates/components");

function getFileMetaData(type, name) {
  return {
    type,
    folderName: name,
    files: [
      {
        name: `index.ts`,
        content: indexTemplate(name),
      },
      {
        name: `${name}.styled.tsx`,
        content: styledTemplate(type),
      },
      {
        name: `${name}.tsx`,
        content: ifeTemplate(name, type),
      },
      {
        name: `${name}.types.ts`,
        content: typesTemplate(name),
      },
    ],
  };
}

module.exports = getFileMetaData;
