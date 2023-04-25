import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/Theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            isLoading: false,
            readonly: true,
            form: { username: 'admin', age: 21, lastname: 'Buggi', first: 'Wuggi', avatar },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            isLoading: false,
            readonly: true,
            form: { username: 'admin', age: 21, lastname: 'Buggi', first: 'Wuggi', avatar },
        },
    }),
];
