import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

import { ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (props) => <ArticleList {...props} />;

export const isLoadingList = Template.bind({});
isLoadingList.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.LIST,
};

export const isLoadingGrid = Template.bind({});
isLoadingGrid.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.GRID,
};
isLoadingGrid.decorators = [ThemeDecorator(Theme.DARK)];
