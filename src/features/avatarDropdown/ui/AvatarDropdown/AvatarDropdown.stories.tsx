import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/avatarDropdown/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (props) => <AvatarDropdown {...props} />;

export const Normal = Template.bind({});
Normal.decorators = [
    StoreDecorator({
        user: {
            _mounted: true,
            authDate: {},
        },
    }),
];
Normal.args = {};

export const Privileged = Template.bind({});
Privileged.decorators = [
    StoreDecorator({
        user: {
            _mounted: true,
            authDate: {
                roles: [UserRole.ADMIN],
            },
        },
    }),
];
Privileged.args = {};
