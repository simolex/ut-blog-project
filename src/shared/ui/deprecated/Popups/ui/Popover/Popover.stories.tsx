import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@/shared/ui/deprecated/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (props) => <Popover {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button> Open</Button>,
    children:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которой, они несколько своих бросил о встретил коварный выйти путь собрал дороге, силуэт над пустился вдали агентство дорогу? Моей, речью?',
};
