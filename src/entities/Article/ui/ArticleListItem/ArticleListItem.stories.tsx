import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/types/article';
import { articleTestData as article } from '../../model/const';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (props) => <ArticleListItem {...props} />;

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
    article,
};

export const Grid = Template.bind({});

Grid.args = {
    view: ArticleView.GRID,
    article,
};
