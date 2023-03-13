import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ArticleImageTextComponent } from './ArticleImageTextComponent';

export default {
    title: 'entities/ArticleImageTextComponent',
    component: ArticleImageTextComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageTextComponent>;

const Template: ComponentStory<typeof ArticleImageTextComponent> = (props) => (
    <ArticleImageTextComponent {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
