import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VStack } from './VStack';

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
