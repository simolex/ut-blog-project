import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (props) => <ListBox {...props} />;

export const Normal = Template.bind({});
Normal.args = {};

// export const NormalDark = Template.bind({});
// NormalDark.args = {};
// NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
