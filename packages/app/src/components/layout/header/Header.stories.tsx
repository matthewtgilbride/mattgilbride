import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const MobileOpen = Template.bind({});
MobileOpen.args = {
  open: true,
  toggleOpen: action('clicked'),
};
MobileOpen.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const MobileClosed = Template.bind({});
MobileClosed.args = {
  open: false,
  toggleOpen: action('clicked'),
};
MobileClosed.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Desktop = Template.bind({});
