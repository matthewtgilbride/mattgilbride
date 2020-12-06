import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MenuButton, MenuButtonProps } from './MenuButton';

export default {
  title: 'Components/Layout/Header/MenuButton',
  component: MenuButton,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />;

export const Open = Template.bind({});
Open.args = { open: true, onClick: action('clicked') };

export const Closed = Template.bind({});
Closed.args = { open: false, onClick: action('clicked') };
Closed.parameters = {
  backgrounds: { default: 'dark' },
};
