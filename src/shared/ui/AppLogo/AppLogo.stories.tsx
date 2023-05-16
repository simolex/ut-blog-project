import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLogo } from './AppLogo';

export default {
    title: 'shared/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (props) => <AppLogo {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
