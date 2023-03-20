import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { CommentItem } from './CommentItem';

const commentOne = {
    id: '3',
    text: 'Оставте свой комментарий-3',
    user: { id: '3', username: 'Блогер-3' },
};

export default {
    title: 'entities/CommentItem',
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
