import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (props) => <ListBox {...props} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: 'Open',
    items: [
        {
            content: 'content',
            value: '11',
        },
        {
            content: 'content',
            value: '12',
        },
        {
            content: 'content',
            value: '13',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: 'Open',
    items: [
        {
            content: 'content',
            value: '11',
        },
        {
            content: 'content',
            value: '12',
        },
        {
            content: 'content',
            value: '13',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: 'Open',
    items: [
        {
            content: 'content',
            value: '11',
        },
        {
            content: 'content',
            value: '12',
        },
        {
            content: 'content',
            value: '13',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: 'Open',
    items: [
        {
            content: 'content',
            value: '11',
        },
        {
            content: 'content',
            value: '12',
        },
        {
            content: 'content',
            value: '13',
        },
    ],
};
// export const NormalDark = Template.bind({});
// NormalDark.args = {};
// NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
