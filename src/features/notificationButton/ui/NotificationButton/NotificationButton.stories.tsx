import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/notificationButton/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (props) => (
    <NotificationButton {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};
