import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/Theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которой, они несколько своих бросил о встретил коварный выйти путь собрал дороге, силуэт над пустился вдали агентство дорогу? Моей, речью?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которой, они несколько своих бросил о встретил коварный выйти путь собрал дороге, силуэт над пустился вдали агентство дорогу? Моей, речью?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
