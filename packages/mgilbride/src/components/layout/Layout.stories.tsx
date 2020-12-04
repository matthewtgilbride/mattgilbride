import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story = (args) => <Layout {...args} />;

export const Base = Template.bind({});
