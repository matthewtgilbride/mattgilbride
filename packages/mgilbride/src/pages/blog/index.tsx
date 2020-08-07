import React, { FC } from 'react';
import { Link } from 'gatsby';
import { CSSObject } from '@emotion/core';
import { Layout } from '../../components/layout/Layout';
import { makeSpace, responsiveBreakpoints } from '../../utils/design';

const styleContainer: CSSObject = {
  display: 'grid',
  justifySelf: 'center',
  justifyItems: 'center',
  padding: makeSpace('md'),
  maxWidth: responsiveBreakpoints.tabletPortrait,
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  h1: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  a: {
    textDecoration: 'underline',
  },
};

const Blog: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <div>
        <h1>2020</h1>
        <Link to="/blog/shoemaker">giving the shoemaker shoes</Link>
        <a href="https://chariotsolutions.com/blog/post/using-the-aws-cdk-in-real-life/">
          using the AWS CDK in real life
        </a>
      </div>
    </div>
    <div css={{ margin: 'auto' }}>...more coming soon...</div>
  </Layout>
);

export default Blog; // eslint-disable-line import/no-default-export
