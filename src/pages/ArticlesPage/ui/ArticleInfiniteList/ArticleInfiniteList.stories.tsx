import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'shared/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (props) => <ArticleInfiniteList {...props} />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
