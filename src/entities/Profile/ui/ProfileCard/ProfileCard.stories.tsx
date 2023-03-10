import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 21,
        lastname: 'Buggi',
        first: 'Wuggi',
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
