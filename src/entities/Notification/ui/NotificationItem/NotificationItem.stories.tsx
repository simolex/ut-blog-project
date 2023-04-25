import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (props) => (
    <NotificationItem {...props} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'Info',
        description: 'Description',
    },
};
