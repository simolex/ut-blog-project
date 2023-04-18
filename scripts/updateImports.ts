import { Project } from 'ts-morph';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layer) => value.startsWith(`${layer}/`));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const specifierValue = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(specifierValue)) {
            importDeclaration.setModuleSpecifier(`@/${specifierValue}`);
        }
    });
});

project.save();
