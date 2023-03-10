import { type RuleSetRule } from 'webpack';

import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = buildSVGLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: 'file-loader',
    };

    const scssLoader = buildCssLoader(isDev);

    // для js  нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/\.stories\.tsx?$/, /node_modules/],
        // exclude: /node_modules/,
    };

    return [typescriptLoader, scssLoader, svgLoader, fileLoader];
}
