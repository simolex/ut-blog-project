import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (props) => <Tabs {...props} />;

const tabsContent = [
    {
        value: 'tab1',
        content: 'content-1',
    },
    {
        value: 'tab2',
        content: 'content-2',
    },
    {
        value: 'tab3',
        content: 'content-3',
    },
    {
        value: 'tab4',
        content: 'content-4',
    },
    {
        value: 'tab5',
        content: 'content-5',
    },
];

export const Normal = Template.bind({});
Normal.args = {
    tabs: tabsContent,
    value: 'tab2',
    onTabClick: action('onTabClick'),
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    tabs: tabsContent,
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
