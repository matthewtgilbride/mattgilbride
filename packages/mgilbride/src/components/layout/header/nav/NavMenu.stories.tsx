import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavMenu } from './NavMenu';

export default {
  title: 'Components/Layout/Header/Nav/Menu',
  component: NavMenu,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story = (args) => <NavMenu {...args} />;

export const Open = Template.bind({});
Open.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
