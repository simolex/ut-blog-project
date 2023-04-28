import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleSortSelector } from './ArticleSortSelector';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (props) => (
    <ArticleSortSelector {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};
