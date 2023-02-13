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
    return [
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

        ...(isDev
            ? [new ReactRefreshWebpackPlugin({ overlay: false }), new HotModuleReplacementPlugin()]
            : []),

        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ];
}
