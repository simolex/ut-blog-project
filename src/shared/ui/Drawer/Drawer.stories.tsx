import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (props) => <Drawer {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которой, они несколько своих бросил о встретил коварный выйти путь собрал дороге, силуэт над пустился вдали агентство дорогу? Моей, речью?',
};
