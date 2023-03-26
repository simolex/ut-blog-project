import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'shared/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (props) => <ArticlePageFilters {...props} />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
