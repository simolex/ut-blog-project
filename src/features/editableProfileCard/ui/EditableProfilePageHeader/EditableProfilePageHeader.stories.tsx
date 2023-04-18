import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { EditableProfilePageHeader } from './EditableProfilePageHeader';

export default {
    title: 'features/editableProfileCard/EditableProfilePageHeader',
    component: EditableProfilePageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfilePageHeader>;

const Template: ComponentStory<typeof EditableProfilePageHeader> = (props) => (
    <EditableProfilePageHeader {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];