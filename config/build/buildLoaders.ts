import { type RuleSetRule } from 'webpack';

import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = buildSVGLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: 'file-loader',
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const scssLoader = buildCssLoader(isDev);

    // для js  нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: [/\.stories\.tsx?$/, /node_modules/],
    //     // exclude: /node_modules/,
    // };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        scssLoader,
    ];
}
