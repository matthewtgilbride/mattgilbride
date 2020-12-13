import React, { ReactNode } from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from './Layout2';

export default {
  title: 'Components/Layout/Two',
  component: Layout,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<{ footer?: ReactNode }> = (args) => <Layout {...args} />;

export const NoContent = Template.bind({});

export const ShortContent = Template.bind({});
ShortContent.args = {
  children: <div>Content</div>,
};

export const TallContent = Template.bind({});
TallContent.args = {
  children: <div style={{ height: 10000 }}>Tall content</div>,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  footer: <div>Footer Content</div>,
};

export const TallContentWithFooter = Template.bind({});
TallContentWithFooter.args = {
  children: <div style={{ height: 10000 }}>Tall content</div>,
  footer: <div>Footer Content</div>,
};
