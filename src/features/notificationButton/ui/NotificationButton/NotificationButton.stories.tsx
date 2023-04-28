import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { NotificationButton } from './NotificationButton';
import { Theme } from '@/shared/const/theme';

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
