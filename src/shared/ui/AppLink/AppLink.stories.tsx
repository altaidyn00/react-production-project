import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'link',
    theme: AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'link',
    theme: AppLinkTheme.SECONDARY
};

export const Red = Template.bind({});
Red.args = {
    children: 'link',
    theme: AppLinkTheme.RED
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'link',
    theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'link',
    theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'link',
    theme: AppLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)]