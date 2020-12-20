import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavMenu } from './NavMenu';

export default {
  title: 'Components/Layout/Menu',
  component: NavMenu,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<{ open: boolean }> = (args) => <NavMenu {...args} />;

export const Open = Template.bind({});
Open.args = {
  open: true,
};
Open.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
