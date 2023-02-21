import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'button',
  theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'button',
  theme: ThemeButton.OUTLINE
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'button',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'button',
  theme: ThemeButton.CLEAR
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'button',
  theme: ThemeButton.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]