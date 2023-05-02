import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextSize, TextVariant } from './Text';

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

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    size: TextSize.S,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    title: 'Далеко-далеко',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Далеко-далеко',
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    variant: TextVariant.ERROR,
};
