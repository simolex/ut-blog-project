import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleTypesTabs } from './ArticleTypesTabs';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleTypesTabs',
    component: ArticleTypesTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypesTabs>;

const Template: ComponentStory<typeof ArticleTypesTabs> = (props) => (
    <ArticleTypesTabs {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};
