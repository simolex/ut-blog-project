import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);

const componentsDir = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layer) => value.startsWith(`${layer}/`));
}

componentsDir?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    // console.log(directory?.getBaseName(), indexFile?.getBaseName());
    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}';
        `;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});

// files.forEach((sourceFile) => {
//     const importDeclarations = sourceFile.getImportDeclarations();
//     importDeclarations.forEach((importDeclaration) => {
//         const specifierValue = importDeclaration.getModuleSpecifierValue();
//         if (isAbsolute(specifierValue)) {
//             importDeclaration.setModuleSpecifier(`@/${specifierValue}`);
//         }
//     });
// });

project.save();
