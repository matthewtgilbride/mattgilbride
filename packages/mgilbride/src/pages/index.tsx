import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Link from 'next/link';
import { makeSpace } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { TraceToWebpImage } from '../components/TraceToWebpImage';

const styleContainer: CSSObject = {
  display: 'grid',
  justifySelf: 'center',
  alignSelf: 'center',
  img: {
    height: '50vh',
    paddingBottom: makeSpace('sm'),
  },
  p: {
    textAlign: 'center',
    padding: `${makeSpace('xxs')} 0`,
    margin: 0,
    a: {
      textDecoration: 'underline',
      textTransform: 'initial',
    },
  },
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <h3>
        <p>Yo</p>
      </h3>
      <TraceToWebpImage path="profile_circle.png" alt="profile" />
      <div>
        <p>{`I'm Matt, from Philly`}</p>
        <p>
          I like writing <a href="https://github.com/matthewtgilbride">code</a>,
          and dogs
        </p>
        <p>
          check out my <Link href="/about">about</Link> page
        </p>
      </div>
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
