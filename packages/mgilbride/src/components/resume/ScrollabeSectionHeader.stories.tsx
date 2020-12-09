import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  ScrollableSectionHeader,
  ScrollableSectionHeaderProps,
} from './ScrollableSectionHeader';

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
  <ScrollableSectionHeader {...args} />
);

export const base = Template.bind({});
base.args = scrollableSectionHeaderProps;
