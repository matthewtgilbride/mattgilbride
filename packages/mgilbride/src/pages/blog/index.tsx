import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';

const styleContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  padding: makeSpace('md'),
  maxWidth: responsiveBreakpoints.tabletPortrait,
  h2: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xl')} 0`,
    textAlign: 'center',
  },
  a: {
    textAlign: 'center',
  },
  h3: {
    margin: `${makeSpace('xl')} 0`,
    textAlign: 'center',
  },
};

const Blog: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <h2>2020</h2>
      <Link href="/blog/shoemaker">giving the shoemaker shoes</Link>
      <a href="https://chariotsolutions.com/blog/post/using-the-aws-cdk-in-real-life/">
        using the AWS CDK in real life
      </a>
      <a href="https://chariotsolutions.com/blog/post/vue-3-0-might-be-a-big-deal/">
        Vue 3.0 might be a big deal
      </a>
      <a href="https://chariotsolutions.com/blog/post/using-the-aws-cdk-irl-part-2/">
        using the AWS CDK in real life - part two
      </a>
      <h3>...more coming soon...</h3>
    </div>
  </Layout>
);

export default Blog; // eslint-disable-line import/no-default-export
