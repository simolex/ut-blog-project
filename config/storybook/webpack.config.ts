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
    };
    config?.resolve?.modules?.unshift(paths.src);
    config?.resolve?.extensions?.push('.js', '.ts', '.tsx');

    // eslint-disable-next-line
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config?.module?.rules?.push(buildSVGLoader());
    config?.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
        }),
    );
    return config;
};
