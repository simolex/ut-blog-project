import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Code } from './Code';
import { Theme } from '@/shared/const/Theme';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (props) => <Code {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    text: `    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;
    
    const Template: ComponentStory<typeof Code> = (props) => <Code {...props} />;
    `,
};

export const Dark = Template.bind({});
Dark.args = {
    text: `    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;
    
    const Template: ComponentStory<typeof Code> = (props) => <Code {...props} />;
    `,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
