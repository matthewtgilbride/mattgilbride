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
    marginTop: 0,
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
            I think it has the most potential to endure for decades, as opposed to years.
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
        <p>
          {`
            Two things make typescript different.  I'm not sure which is more important.
          `}
        </p>
        <p>
          {`
            The first is that typescript "start's from the same syntax and semantics that millions of javascript developers know today"
            and "compiles to clean, simple javascript".  That means that both typescript source code and the code emitted
            by the compiler can be easily understood by anyone who knows javascript.  Javascript is already assuming
            a larger and larger role in every website, by virtue of the SPA approach I mentioned before.  In 2020,
            front-end developers are javascript developers.  When it comes to adoption by the existing community of 
            developers targeting browsers, being as close to plain javascript as possible gives
            typescript a distinct advantage over the languages mentioned above.
          `}
        </p>
        <p>
          {`
            The second is typescript's approach to static type checking.  Typescript is a gradual type system, which
            means that some variables and expressions can be statically checked at compile time, while others are left
            untyped and checked at runtime.  Type checkers are supposed to help engineers, not hinder them.  Typescript's
            checker can be told to "go away" when it's user can't wrangle the type system to their liking.  That is not
            the case in most other languages.  Python, from version 3.5 and later, supports a similar approach entitled
            type hints.  It has a much lower barrier to entry, since there is no transpilation step.  One can choose to 
            write type hints or not.  The python interpreter ignores the extra syntax, and separate tooling can be stood 
            up to do the type checking.
            Python, however, doesn't run in a browser (yet).  So for now, those of us developing web front ends have to
            make other choices.
          `}
        </p>
        <p>
          {`
            I could say more about typescript.
            The decisions that team has made with regards to soundness and completeness, as well as
            structural vs. nominal typing, are fascinating.  In the end, however, the point is
            that we all want to maximize productivity and minimize bugs.  Typescript helps, and that's all that matters.
          `}
        </p>
      </div>
    </article>
  </Layout>
);

export default Shoemaker; // eslint-disable-line import/no-default-export
