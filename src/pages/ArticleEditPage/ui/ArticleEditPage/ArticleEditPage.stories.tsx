import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (props) => <ArticleEditPage {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        scrollFixer: {
            scroll: {},
        },
    }),
];

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [
    StoreDecorator({
        scrollFixer: {
            scroll: {},
        },
    }),
    ThemeDecorator(Theme.DARK),
];
