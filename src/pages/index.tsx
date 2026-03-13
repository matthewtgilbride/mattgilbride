import React from 'react';
import { CSSObject } from '@emotion/react';
import Link from 'next/link';
import { makeSize, makeSpace } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { NextImageContainer } from '../components/NextImageContainer';
import { homeContent } from '../content/home';

const styleContainer: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const styleNextImage: CSSObject = {
  maxWidth: '40vh',
  margin: `${makeSpace('xs')} 0`,
};

const styleContent: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xxs')} 0`,
  },
  p: {
    textAlign: 'center',
    margin: `${makeSpace('xxs')} 0`,
  },
};

const Home = () => (
  <Layout seo={{ pageTitle: 'Home' }}>
    <div css={styleContainer}>
      <div css={styleContent}>
        <h1>{homeContent.greeting}</h1>
        <NextImageContainer
          cssProp={styleNextImage}
          src={homeContent.profile.src}
          alt={homeContent.profile.alt}
          width={homeContent.profile.width}
          height={homeContent.profile.height}
        />
        <div>
          <p>I&apos;m Matt, from Philly</p>
          <p>I like writing code, and dogs</p>
          <p>
            check out my <Link href="/about">about</Link> page
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
