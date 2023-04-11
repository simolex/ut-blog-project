const toCamelCase = require('@neumatter/to-camel-case');
const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer.toLocaleLowerCase())) {
    throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
    throw new Error('Укажите название слайса');
}

const lowerLayer = layer.toLocaleLowerCase();
const camelSliceName = toCamelCase(sliceName);
createTemplate(lowerLayer, camelSliceName);
