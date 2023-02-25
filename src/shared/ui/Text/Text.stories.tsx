import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text, TextVariant } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (props) => <Text {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    title: 'Далеко-далеко',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    title: 'Далеко-далеко',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    variant: TextVariant.ERROR,
};
