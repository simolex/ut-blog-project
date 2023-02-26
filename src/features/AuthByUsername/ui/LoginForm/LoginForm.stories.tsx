import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (props) => <LoginForm {...props} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ loginForm: { username: 'user', password: '111' } })];

export const LightWithError = Template.bind({});
LightWithError.args = {};
LightWithError.decorators = [
    StoreDecorator({
        loginForm: { username: 'user', password: '111', error: 'Error' },
    }),
];

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {};
LightIsLoading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
