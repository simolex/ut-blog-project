const toCamelCase = require('@neumatter/to-camel-case');

module.exports = (componentName) => `.${toCamelCase(componentName)} {

}
`;
