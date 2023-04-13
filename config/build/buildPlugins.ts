import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import CircularDependencyPlugin from 'circular-dependency-plugin';
import {
    DefinePlugin,
    HotModuleReplacementPlugin,
    Module,
    ProgressPlugin,
    WebpackError,
} from 'webpack';

// Где импортируешь типы, я бы советовал дописывать `type` .
// Ускоряет обработку файла и выпиливает ненужные импорты.
import type { WebpackPluginInstance } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    needAnalize,
    apiUrl,
    project,
}: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new ProgressPlugin(),

        new HtmlWebpackPlugin({
            template: paths.html,
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),

        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            onDetected({ module, paths: pathsDetected, compilation }) {
                // compilation.errors.push(new WebpackError(`Module: ${module.identifier()}`));
                compilation.errors.push(new WebpackError(pathsDetected.join(' --> ')));
            },
        }),
    ];
    if (needAnalize) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new HotModuleReplacementPlugin());
    }

    return plugins;
}
