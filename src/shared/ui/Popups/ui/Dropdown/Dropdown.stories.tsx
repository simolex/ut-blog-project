import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

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
