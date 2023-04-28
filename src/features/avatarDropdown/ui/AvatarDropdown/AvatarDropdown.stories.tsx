import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/avatarDropdown/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (props) => <AvatarDropdown {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
