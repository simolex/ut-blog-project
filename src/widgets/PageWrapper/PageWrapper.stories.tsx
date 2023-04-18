import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { PageWrapper } from './PageWrapper';

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

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [
    StoreDecorator({
        scrollFixer: {
            scroll: {},
        },
    }),
    ThemeDecorator(Theme.DARK),
];
