import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<PropsWithChildren<LayoutProps>> = (args) => (
  <Layout {...args} />
);

export const Mobile = Template.bind({});
Mobile.args = {
  seo: { pageTitle: 'home' },
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
  seo: { pageTitle: 'home' },
  children: <div style={{ height: 10000 }}>Tall content</div>,
  footer: <div>Footer Content</div>,
};
