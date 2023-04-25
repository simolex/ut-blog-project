import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPage from './ArticlesPage';
import { Theme } from '@/shared/const/Theme';

export default {
    title: 'pages/Articles/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (props) => <ArticlesPage {...props} />;

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
