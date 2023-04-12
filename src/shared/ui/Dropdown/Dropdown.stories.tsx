import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (props) => <Dropdown {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button> Open</Button>,
    items: [
        {
            id: '1',
            content: 'first',
        },
        {
            id: '2',
            content: 'second',
        },
        {
            id: '3',
            content: 'third',
        },
    ],
};
