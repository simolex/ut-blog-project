import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: 'file-loader',
    };

    const scssLoader = {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
            {
                loader: 'css-loader', // Translates CSS into CommonJS
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            {
                loader: 'sass-loader', // Compiles Sass to CSS
                options: {
                    sassOptions: {
                        includePaths: ['./node_modules/normalize.css'],
                    },
                },
            },
        ],
    };

    // для js  нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader, scssLoader, svgLoader, fileLoader];
}
