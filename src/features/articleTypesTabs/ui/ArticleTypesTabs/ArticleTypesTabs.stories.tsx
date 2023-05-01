import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleTypesTabs } from './ArticleTypesTabs';

export default {
    title: 'features/ArticleTypesTabs',
    component: ArticleTypesTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypesTabs>;

const Template: ComponentStory<typeof ArticleTypesTabs> = (args) => <ArticleTypesTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
