import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

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
