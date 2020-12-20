import React, { ReactNode } from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<{ footer?: ReactNode; children?: ReactNode }> = (
  args,
) => <Layout {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  children: <div style={{ height: 10000 }}>Tall content</div>,
  footer: <div>Footer Content</div>,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Desktop = Template.bind({});
Desktop.args = {
  children: <div style={{ height: 10000 }}>Tall content</div>,
  footer: <div>Footer Content</div>,
};
