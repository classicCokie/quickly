const toPascalCase = require("../../toPascalCase");

function componentTemplate(name, type) {
  const pascalCaseName = toPascalCase(name);

  return `
    import React from 'react'
    
    const ${pascalCaseName} = ({ title }: ${pascalCaseName}Props): React.ReactElement => {
    return (
        <View>
          <Text> I'm a Component </Text>
        </View>
    )
    }

    export default ${pascalCaseName}
`;
}

module.exports = componentTemplate;
