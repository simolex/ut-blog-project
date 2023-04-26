import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentItem } from './CommentItem';
import { Theme } from '@/shared/const/theme';

const commentOne = {
    id: '3',
    text: 'Оставте свой комментарий-3',
    user: { id: '3', username: 'Блогер-3' },
};

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (props) => <CommentItem {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: commentOne,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    comment: commentOne,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comment: commentOne,
    isLoading: true,
};
