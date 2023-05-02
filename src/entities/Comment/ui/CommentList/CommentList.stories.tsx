import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (props) => <CommentList {...props} />;

const commentPull = [
    {
        id: '1',
        text: 'Оставте свой комментарий-1',
        user: { id: '1', username: 'Блогер-1' },
    },
    {
        id: '2',
        text: 'Оставте свой комментарий-2',
        user: { id: '2', username: 'Блогер-2' },
    },
    {
        id: '3',
        text: 'Оставте свой комментарий-3',
        user: { id: '3', username: 'Блогер-3' },
    },
];
export const Normal = Template.bind({});
Normal.args = {
    comments: commentPull,
};

export const Loading = Template.bind({});
Loading.args = {
    comments: commentPull,
    isLoading: true,
};
