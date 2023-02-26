import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => <Input {...props} />;

export const Light = Template.bind({});
Light.args = {
    value: 'Data',
    placeholder: 'Input',
};

export const Dark = Template.bind({});
Dark.args = {
    value: 'Data',
    placeholder: 'Input',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];