import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text } from '@/shared/ui/Text/Text';
import { Card } from './Card';
import { Theme } from '@/shared/const/Theme';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (props) => <Card {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text" />,
};

export const NormalDark = Template.bind({});
NormalDark.args = { children: <Text title="test" text="text text" /> };
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
