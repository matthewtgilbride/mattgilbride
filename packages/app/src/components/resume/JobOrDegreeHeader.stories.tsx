import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '../layout/Layout';
import { JobHeaderProps, JobOrDegreeHeader } from './JobOrDegreeHeader';

export default {
  title: 'Components/Resume/JobOrDegreeHeader',
  component: JobOrDegreeHeader,
  excludeStories: /.*Props/,
} as Meta;

export const baseProps: JobHeaderProps = {
  orgCopy: 'Chariot Solutions',
  orgUrl: '',
  titleCopy: 'Software Architect',
  dateCopy: 'May 2017 - Present',
  imgUrl: '/assets/svg/chariot.svg',
  imgSize: 36,
};

const Template: Story<JobHeaderProps> = (args) => (
  <JobOrDegreeHeader {...args} />
);

export const Base = Template.bind({});
Base.args = baseProps;

const LayoutTemplate: Story<JobHeaderProps> = (args) => (
  <Layout>
    <JobOrDegreeHeader {...args} />
  </Layout>
);

export const WithLayout = LayoutTemplate.bind({});
WithLayout.args = baseProps;
