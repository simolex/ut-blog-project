import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { VStack } from './VStack';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Stack/VStack',
    component: VStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (props) => <VStack {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
