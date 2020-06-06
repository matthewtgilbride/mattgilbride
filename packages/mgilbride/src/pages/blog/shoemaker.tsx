import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../../components/layout/Layout';
import { makeSpace, responsiveBreakpoints } from '../../utils/design';

const styleContainer: CSSObject = {
  display: 'grid',
  gridTemplateRows: 'min-content',
  justifySelf: 'center',
  justifyItems: 'center',
  padding: makeSpace('md'),
  maxWidth: responsiveBreakpoints.tabletPortrait,
  h1: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  a: {
    textDecoration: 'underline',
  },
};

const Shoemaker: FC = () => (
  <Layout>
    <article css={styleContainer}>
      <div>
        <h1>giving the shoemaker shoes</h1>
        <p>
          {`
            I built this site because I'm a software developer, and like many software developers,
            I do a lot of work on web applications.  Unfortunately, many (but not all) engineers don't
            have a website of their own.  That used to be me.
          `}
        </p>
        <p>
          {`
            We build web apps with Single Page Application (SPA) frameworks these days.  Then, we use
            static site generators to turn them into multi-page, static websites.  Well isn't that lovely.  
            While I do think the SPA approach is an improvement over the architectures that preceded it, 
            count me amongst the many that think it's reign as the de-facto way to build web apps won't last forever.
            In any case, this being 2020, I've chosen to build this thing using the the tools du jour, and that
            includes the following:
          `}
        </p>
        <ul>
          <li>typescript</li>
          <li>react</li>
          <li>gatsby</li>
          <li>emotion</li>
          <li>react-spring</li>
        </ul>
        <p>
          {`
            Let's talk about each of those.
          `}
        </p>
        <h1>typescript</h1>
        <p>
          {`
            Of the five items listed above, Typescript is the most important to me.
            I think it has the most potential to endure decades, as opposed to years.
            The javascript ecosystem is notoriously fickle.  Today, in 2020, React
            feels like the gold standard of web development tooling.  It's easy to forget
            that it was released in 2013.  That was 7 years ago...an
            eon in javascript time...but not very long in the grand scheme of things.
          `}
        </p>
        <p>
          {`
            What few people realize is that typescript is actually older than React.
            It was open sourced in 2012.  Contrary to React, which surged in popularity
            in 2015 when large companies like Netflix and AirBnb adopted it, the typescript
            hype train didn't depart until recently.  But now that the train has left the station,
            it's accelerating rapidly.
          `}
        </p>
        <p>
          {`
            The static vs. dynamic type checking dichotomy is about as old as computer programming itself.
            LISP, widely accepted as the first dynamically typed language, was created in 1959.  That's just two
            years after FORTRAN, possibly the oldest language still in use today.  And typescript is
            far from the first attempt to bring static type checking to web programming.  Coffeescript,
            Elm, Dart, and Scala.js are just a few of many alternatives for those
            wishing to write statically checked code that transpiles to javascript, and thus can run in the browser.
          `}
        </p>
      </div>
    </article>
  </Layout>
);

export default Shoemaker; // eslint-disable-line import/no-default-export
