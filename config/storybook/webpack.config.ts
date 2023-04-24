import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
        buildLocales: path.resolve(__dirname, '..', '..', 'storybook-static', 'locales'),
    };
    config!.resolve!.modules!.unshift(paths.src);
    config!.resolve!.modules!.push('node_modules');
    config!.resolve!.extensions!.push('.js', '.ts', '.tsx');
    config!.resolve!.alias = {
        ...config?.resolve?.alias,
        '@': paths.src,
    };

    const rules = config?.module?.rules;
    if (rules) {
        config!.module!.rules = rules.map((rule: RuleSetRule | '...') => {
            if (rule !== '...' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }
    config!.module!.rules!.push(buildSVGLoader());
    config!.module!.rules!.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://testapi.org'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    return config;
};
