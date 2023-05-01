import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface buildBabelLoaderOptions extends BuildOptions {
    isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderOptions) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: [/\.stories\.tsx?$/, /node_modules/],

        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    ['@babel/plugin-transform-runtime'],
                    isTsx && !isDev && [babelRemovePropsPlugin, { props: ['data-testid'] }],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
