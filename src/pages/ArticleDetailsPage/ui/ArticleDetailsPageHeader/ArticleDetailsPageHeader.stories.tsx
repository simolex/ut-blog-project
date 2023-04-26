import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticleDetails/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (props) => (
    <ArticleDetailsPageHeader {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {},
        user: {},
    }),
];

export const NormalEditable = Template.bind({});
NormalEditable.args = {};
NormalEditable.decorators = [
    StoreDecorator({
        articleDetails: {
            data: {
                user: {
                    id: '1',
                },
            },
        },
        user: {
            authDate: {
                id: '1',
            },
        },
    }),
];

export const NormalDarkEditable = Template.bind({});
NormalDarkEditable.args = {};
NormalDarkEditable.decorators = [
    StoreDecorator({
        articleDetails: {
            data: {
                user: {
                    id: '1',
                },
            },
        },
        user: {
            authDate: {
                id: '1',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [StoreDecorator({ articleDetails: {} }), ThemeDecorator(Theme.DARK)];
