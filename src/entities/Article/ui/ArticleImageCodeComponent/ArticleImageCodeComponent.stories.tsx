import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ArticleImageCodeComponent } from './ArticleImageCodeComponent';

export default {
    title: 'entities/ArticleImageCodeComponent',
    component: ArticleImageCodeComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageCodeComponent>;

const Template: ComponentStory<typeof ArticleImageCodeComponent> = (props) => (
    <ArticleImageCodeComponent {...props} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
