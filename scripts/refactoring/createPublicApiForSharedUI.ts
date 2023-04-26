import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDir = sharedUiDirectory?.getDirectories();

componentsDir?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}';
`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layer) => value.startsWith(`${layer}/`));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const specifierValue = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = specifierValue.replace('@/', '');

        const partsPath = valueWithoutAlias.split('/');
        const isSharedLayer = partsPath?.[0] === 'shared';
        const isUiSlice = partsPath?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');

            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
