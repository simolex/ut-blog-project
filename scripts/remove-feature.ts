import { Node, Project, SyntaxKind } from 'ts-morph';
import path from 'node:path';

const utilName = process.argv[1];
const removedFeatureName = process.argv[2];
const selectedFeatureState = process.argv[3];

const project = new Project({});
if (!removedFeatureName) {
    console.error('\r\nУкажите название фича-флага:');
    console.error(`${path.basename(utilName)} <фича-флаг> <on|off>`);
    console.error('^'.padStart(path.basename(utilName).length + 3, ' '));

    console.log('\r\nПример:');
    console.log(`${path.basename(utilName)} isFeatureEnabled off`);
    process.exit();
}

if (!selectedFeatureState) {
    console.error('\r\nУкажите выбранное состояние фичи (on или off):');
    console.error(`${path.basename(utilName)} <фича-флаг> <on|off>`);
    console.error('^'.padStart(path.basename(utilName).length + 15, ' '));

    console.log('\r\nПример:');
    console.log(`${path.basename(utilName)} isFeatureEnabled on`);
    process.exit();
}

if (selectedFeatureState !== 'on' && selectedFeatureState !== 'off') {
    console.error('\r\nВыбранное состояние фичи должно быть: on или off');
}

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');
// TODO
// project.addSourceFilesAtPaths('src/**/*.ts');
// project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    // eslint-disable-next-line consistent-return
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true;
            return isToggleFeatures;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

            if (!objectOptions) {
                return;
            }
            const onFunctionProperty = objectOptions.getProperty('on');
            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const offFunctionProperty = objectOptions.getProperty('off');
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const nameFeatureProperty = objectOptions.getProperty('name');
            const nameFeature = nameFeatureProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getLiteralValue();

            if (nameFeature !== removedFeatureName) process.exit();

            if (selectedFeatureState === 'on') {
                node.replaceWithText(onFunction?.getBodyText() ?? '');
            }

            if (selectedFeatureState === 'off') {
                node.replaceWithText(offFunction?.getBodyText() ?? '');
            }
        }
    });
});

project.save();
