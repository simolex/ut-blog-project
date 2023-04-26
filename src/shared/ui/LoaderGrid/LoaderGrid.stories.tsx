import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LoaderGrid } from './LoaderGrid';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/LoaderGrid',
    component: LoaderGrid,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoaderGrid>;

const Template: ComponentStory<typeof LoaderGrid> = (args) => <LoaderGrid {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
