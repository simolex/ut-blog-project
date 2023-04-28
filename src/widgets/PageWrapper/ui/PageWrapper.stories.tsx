import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { PageWrapper } from './PageWrapper';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/PageWrapper',
    component: PageWrapper,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageWrapper>;

const Template: ComponentStory<typeof PageWrapper> = (props) => <PageWrapper {...props} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({
        scrollFixer: {
            scroll: {},
        },
    }),
];
