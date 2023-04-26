import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Select } from './Select';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />;

export const Light = Template.bind({});
Light.args = {
    label: 'Select option',
    options: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Select option',
    options: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
