import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HStack } from './HStack';

export default {
    title: 'shared/Stack/HStack',
    component: HStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (props) => <HStack {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
