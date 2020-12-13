import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Link from 'next/link';
import { makeSpace, palette } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { ImgTrace } from '../components/ImgTrace';

const styleContainer: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const styleContent: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  img: {
    maxWidth: '45vh',
    margin: 'auto',
    padding: makeSpace('lg'),
  },
  h3: {
    fontWeight: 'bold',
  },
  p: {
    textAlign: 'center',
    padding: `${makeSpace('xxs')} 0`,
    margin: 0,
    a: {
      textDecoration: 'underline',
      color: palette.text(),
      textTransform: 'initial',
    },
  },
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <div css={styleContent}>
        <h3>
          <p>Yo</p>
        </h3>
        <ImgTrace path="profile_circle.png" alt="profile" />
        <div>
          <p>{`I'm Matt, from Philly`}</p>
          <p>
            I like writing{' '}
            <a href="https://github.com/matthewtgilbride">code</a>, and dogs
          </p>
          <p>
            check out my <Link href="/about">about</Link> page
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
