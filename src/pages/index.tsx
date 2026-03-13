import React from 'react';
import { CSSObject } from '@emotion/react';
import { makeSize, makeSpace, responsiveBreakpoints } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { NextImageContainer } from '../components/NextImageContainer';

const styleContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  margin: 'auto',
};

const styleNextImage: CSSObject = {
  maxWidth: '40vh',
  margin: `${makeSpace('xs')} 0`,
};

const styleHero: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xxs')} 0`,
  },
};

const styleAbout: CSSObject = {
  marginTop: makeSpace('lg'),
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

const Home = () => (
  <Layout seo={{ pageTitle: 'Home' }}>
    <div css={styleContainer}>
      <div css={styleHero}>
        <h1>Hello.</h1>
        <NextImageContainer
          cssProp={styleNextImage}
          src="/images/profile_circle.png"
          alt="profile"
          width={1080}
          height={1080}
        />
      </div>
      <div css={styleAbout}>
        <p>
          I&apos;m a software engineer based in Philadelphia, with over a decade
          of experience across a variety of industries and tech stacks. For the
          last four years, I&apos;ve been working on the Android Platform
          Security team at Google.
        </p>
        <p>
          I have a passion for programming languages, though what it means to be
          proficient in any given language is changing dramatically. I care as
          much about system design and productivity as I do about the code
          itself.
        </p>
        <p>
          Outside of work, I&apos;m a husband and father &mdash; to both a kid
          and a dog. I enjoy racquet sports, root for the Sixers, and am always
          open to connecting &mdash; feel free to reach out!
        </p>
      </div>
    </div>
  </Layout>
);

export default Home;
