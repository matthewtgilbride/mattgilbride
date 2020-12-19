import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Layout } from '../layout/Layout';
import { SectionHeader, SectionHeaderProps } from './SectionHeader';

export default {
  title: 'Components/Resume/SectionHeader',
  component: SectionHeader,
  excludeStories: /.*Props/,
} as Meta;

export const scrollableSectionHeaderProps: SectionHeaderProps = {
  pathname: '/resume',
  hash: '',
  hashTarget: 'dummy',
  onClick: action('clicked'),
  open: true,
  text: 'Hello World',
};

const Template: Story<SectionHeaderProps> = (args) => (
  <SectionHeader {...args} />
);

export const Base = Template.bind({});
Base.args = scrollableSectionHeaderProps;

const LayoutTemplate: Story<SectionHeaderProps> = (args) => (
  <Layout>
    <SectionHeader {...args} />
  </Layout>
);

export const WithLayout = LayoutTemplate.bind({});
WithLayout.args = scrollableSectionHeaderProps;
