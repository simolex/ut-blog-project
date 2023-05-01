import { type Configuration } from 'webpack';

import { type BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },

        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),

        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
