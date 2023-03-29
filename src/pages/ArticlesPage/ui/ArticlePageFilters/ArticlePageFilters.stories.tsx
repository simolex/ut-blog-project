import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'pages/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (props) => (
    <ArticlePageFilters {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            _mounted: true,
        },
    }),
];

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [
    StoreDecorator({
        articlesPage: {
            _mounted: true,
        },
    }),
    ThemeDecorator(Theme.DARK),
];
