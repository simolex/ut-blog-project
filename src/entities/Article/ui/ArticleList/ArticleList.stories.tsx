import { ComponentStory, ComponentMeta } from '@storybook/react';
import { articleTestData as article } from '../../model/const';

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

const articles = [
    { ...article, id: '1', index: '1' },
    { ...article, id: '2', index: '2' },
    { ...article, id: '3', index: '3' },
    { ...article, id: '4', index: '4' },
    { ...article, id: '5', index: '5' },
];

export const List = Template.bind({});
List.args = {
    isLoading: false,
    articles,
    view: ArticleView.LIST,
};

export const Grid = Template.bind({});
Grid.args = {
    isLoading: false,
    articles,
    view: ArticleView.GRID,
};
