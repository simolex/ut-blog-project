import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin } from 'webpack';

// Где импортируешь типы, я бы советовал дописывать `type` .
// Ускоряет обработку файла и выпиливает ненужные импорты.
import type { WebpackPluginInstance } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
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
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }

    return plugins;
}
