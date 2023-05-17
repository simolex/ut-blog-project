import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoaderGrid } from './LoaderGrid';

export default {
    title: 'shared/LoaderGrid',
    component: LoaderGrid,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoaderGrid>;

const Template: ComponentStory<typeof LoaderGrid> = (args) => <LoaderGrid {...args} />;

export const Light = Template.bind({});
Light.args = {};
