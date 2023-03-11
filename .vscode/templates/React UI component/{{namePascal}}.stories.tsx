import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { {{namePascal}} } from './{{namePascal}}';

export default {
    title: 'shared/{{namePascal}}',
    component: {{namePascal}},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof {{namePascal}}>;

const Template: ComponentStory<typeof {{namePascal}}> = (props) => <{{namePascal}} {...props} />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
