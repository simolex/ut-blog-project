import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

import { HStack } from './HStack';

export default {
    title: 'shared/Stack/HStack',
    component: HStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (props) => <HStack {...props} />;

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
