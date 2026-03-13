import React from 'react';
import { CSSObject } from '@emotion/react';
import dynamic from 'next/dynamic';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';

const AboutContent = dynamic(() => import('../../content/about.mdx'));

const styleContainer: CSSObject = {
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  h2: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('md')} 0`,
    textAlign: 'center',
  },
  h4: {
    fontWeight: 'bold',
    fontSize: makeSize('h4'),
    margin: `${makeSpace('sm')} 0`,
    textAlign: 'center',
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

const About = () => (
  <Layout seo={{ pageTitle: 'About' }}>
    <div css={styleContainer}>
      <AboutContent />
    </div>
  </Layout>
);

export default About;
