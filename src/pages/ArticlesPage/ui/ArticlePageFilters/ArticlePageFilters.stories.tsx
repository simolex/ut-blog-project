import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlePageFilters } from './ArticlePageFilters';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/Articles/ArticlePageFilters',
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
