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
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (props) => <CommentItem {...props} />;

// export const WithEveryTheme = <T extends (...args: unknown[]) => JSX.Element>(
//     TemplateP: ComponentStory<T>,
//     args: Partial<unknown>,
// ) => {
//     const stories: Partial<Record<string, ComponentStory<T>>> = {};
//     Object.entries(Theme).forEach(([key, value]) => {
//         const story = TemplateP.bind({ ...args });
//         story.args = args;
//         story.decorators = [ThemeDecorator(value)];
//         stories[key] = story;
//     });
//     return stories as Record<string, ComponentStory<T>>;
// };
// export const { ...stories } = WithEveryTheme(Template, {});

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
