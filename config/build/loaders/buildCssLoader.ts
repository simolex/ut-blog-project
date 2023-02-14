import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
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
}
