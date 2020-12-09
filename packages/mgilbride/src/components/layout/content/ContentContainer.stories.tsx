import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentContainer } from './ContentContainer';

export default {
  title: 'Components/Layout/Content',
  component: ContentContainer,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story = (args) => <ContentContainer {...args} />;

export const NoContent = Template.bind({});

export const ShortContent = Template.bind({});
ShortContent.args = {
  children: <div />,
};

export const TallContent = Template.bind({});
TallContent.args = {
  children: <div style={{ height: 10000 }} />,
};
