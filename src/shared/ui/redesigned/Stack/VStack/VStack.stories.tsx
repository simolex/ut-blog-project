import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

import { VStack } from './VStack';

export default {
    title: 'shared/Stack/VStack',
    component: VStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (props) => <VStack {...props} />;

const data: ReactNode = (
    <>
        <div>Element-1</div>
        <div>Element-2</div>
        <div>Element-3</div>
        <div>Element-4</div>
        <div>Element-5</div>
    </>
);

export const Normal = Template.bind({});
Normal.args = {
    children: data,
};
