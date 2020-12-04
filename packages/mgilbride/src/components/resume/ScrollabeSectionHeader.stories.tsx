import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  ScrollableSectionHeader,
  ScrollableSectionHeaderProps,
} from './ScrollableSectionHeader';
import { Layout } from '../layout/Layout';

export default {
  title: 'Components/Resume/ScrollableSectionHeader',
  component: ScrollableSectionHeader,
  excludeStories: /.*Props/,
} as Meta;

export const scrollableSectionHeaderProps: ScrollableSectionHeaderProps = {
  pathname: '/resume',
  hash: '',
  hashTarget: 'dummy',
  onClick: action('clicked'),
  open: true,
  text: 'Hello World',
};

const Template: Story<ScrollableSectionHeaderProps> = (args) => (
  <Layout>
    <ScrollableSectionHeader {...args} />
  </Layout>
);

export const base = Template.bind({});
base.args = scrollableSectionHeaderProps;
