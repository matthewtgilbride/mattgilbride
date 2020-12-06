import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Base = Template.bind({});
