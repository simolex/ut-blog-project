import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
    title: 'shared/Overlay',
    component: Overlay,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (props) => <Overlay {...props} />;

export const Normal = Template.bind({});
Normal.args = {};
