import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },

    layout: 'fullscreen',
    themes: {
        default: 'Light',
        list: [
            { name: 'Light', class: ['app', Theme.LIGHT], color: '#e8e8ea' },
            { name: 'Dark', class: ['app', Theme.DARK], color: '#0e0e75' },
            { name: 'Green', class: ['app', Theme.GREEN], color: '#0e9e32' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
