import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Link } from 'gatsby';
import { Layout } from '../../components/layout/Layout';
import { makeSpace, responsiveBreakpoints } from '../../utils/design';
import phillyGlobe from '../../assets/images/philly-globe.png';
import engineer from '../../assets/images/engineer_thinking.png';
import jamie from '../../assets/images/jamie.png';
import emmy from '../../assets/images/emmy.png';

const styleContainer: CSSObject = {
  display: 'grid',
  justifySelf: 'center',
  justifyItems: 'center',
  padding: makeSpace('md'),
  maxWidth: responsiveBreakpoints.tabletPortrait,
  img: {
    height: '50vh',
    paddingBottom: makeSpace('sm'),
  },
  h1: {
    fontStyle: 'italic',
  },
  h3: {
    paddingTop: makeSpace('lg'),
  },
  a: {
    textDecoration: 'underline',
  },
};

const About: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <h1>tl;dr</h1>
      <h3>{`I'm a software engineer`}</h3>
      <img src={engineer} alt="Profile" />
      <h3>from Philly</h3>
      <img src={phillyGlobe} alt="Philly" />
      <h3>this is my wife</h3>
      <img src={jamie} alt="Jamie" />
      <h3>and this is our dog</h3>
      <img src={emmy} alt="Emmy" />
      <h1 css={{ paddingTop: makeSpace('xl') }}>the long version</h1>
      <div>
        <p>
          I&apos;m a &quot;full stack&quot; engineer by trade. You can check out
          my&nbsp;<Link to="/resume">resume</Link> for more about that.
        </p>
        <p>
          This site serves as a place for people to find out more about me, and
          a place for <Link to="/blog">me to write down my thoughts</Link>. Most
          of those thoughts will be about programming for now, so I&apos;ll keep
          this particular page focused on everything else.
        </p>
        <p>
          I&apos;m a happily married man to my wife Jamie of (almost) four
          years. We have zero kids and one dog named Emmy (for now).
        </p>
        <p>
          I was born and raised here in Philly, though my mom&apos;s family is
          from Barcelona. Many moons ago I was fluent in Spanish. I do my best
          to maintain my skills in that language as well. I prefer travelling to
          Spanish speaking countries not only because I love the culture, but
          also because I love the practice. That&apos;s right, we&apos;re
          talkin&apos; &apos;bout practice.
        </p>
        <p>
          Speaking of practice, I&apos;m a big F.C. Barcelona fan, and an even
          bigger fan of the Philadelphia 76ers. I follow all Philly sports
          closely, but I&apos;d say the passion level goes Sixers, Eagles,
          Flyers, Phillies, in that order. #trusttheprocess
        </p>
        <p>
          I also enjoy playing tennis, hiking, biking, running, skiing, and
          snowboarding, amongst other things. I&apos;m not much of a cook, but
          like most I&apos;m dangerous with a handful of recipes. On the music
          front, my bag is mostly blues and rock but I&apos;ve got a pretty
          eclectic taste.
        </p>
        <p>
          Oh...and my top 3 movies of all time are Forrest Gump, The Shawshank
          Redemption, and The Big Lebowski.
        </p>
        <p>
          That&apos;s all for now. If you are interested in connecting for any
          reason, please don&apos;t hesitate to&nbsp;
          <Link to="/contact">reach out</Link>!
        </p>
      </div>
    </div>
  </Layout>
);

export default About; // eslint-disable-line import/no-default-export
