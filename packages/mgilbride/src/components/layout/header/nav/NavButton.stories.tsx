import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NavButtonProps, NavButton } from './NavButton';

export default {
  title: 'Components/Layout/Header/Nav/Button',
  component: NavButton,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<NavButtonProps> = (args) => <NavButton {...args} />;

export const Open = Template.bind({});
Open.args = { open: true, onClick: action('clicked') };
Open.parameters = {
  backgrounds: { default: 'light' },
};

export const Closed = Template.bind({});
Closed.args = { open: false, onClick: action('clicked') };
Closed.parameters = {
  backgrounds: { default: 'dark' },
};
