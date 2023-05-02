import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 10, width: '100%', height: '100%' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которой, они несколько своих бросил о встретил коварный выйти путь собрал дороге, силуэт над пустился вдали агентство дорогу? Моей, речью?',
};
