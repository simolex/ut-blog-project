import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactNode } from 'react';

import { Flex } from './Flex';

export default {
    title: 'shared/Stack/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const data: ReactNode = (
    <>
        <div>Element-1</div>
        <div>Element-2</div>
        <div>Element-3</div>
        <div>Element-4</div>
        <div>Element-5</div>
    </>
);

const Template: ComponentStory<typeof Flex> = (props) => <Flex {...props} />;

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
    children: data,
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    direction: 'row',
    gap: '8',
    children: data,
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: data,
};
