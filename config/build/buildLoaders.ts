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

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: [/\.stories\.tsx?$/, /node_modules/],

        use: {
            loader: 'babel-loader',
            options: {
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    };

    const scssLoader = buildCssLoader(isDev);

    // для js  нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/\.stories\.tsx?$/, /node_modules/],
        // exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
}
