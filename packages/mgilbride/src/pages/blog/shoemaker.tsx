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
  'h1, h2': {
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
          <li>Typescript</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Emotion</li>
          <li>React-spring</li>
        </ul>
        <p>
          {`
            Let's talk about each of those.
          `}
        </p>
        <h2>Typescript</h2>
        <p>
          {`
            Of the five items listed above, Typescript is the most important to me.  So, this section
            is going to be the longest.
            I think Typescript has the most potential to endure for decades, as opposed to years.
            The Javascript ecosystem is notoriously fickle.  Today, in 2020, React
            feels like the gold standard of web development tooling.  It's easy to forget
            that it was released in 2013.  That was 7 years ago...an
            eon in Javascript time...but not very long in the grand scheme of things.
          `}
        </p>
        <p>
          {`
            What few people realize is that Typescript is actually older than React.
            It was open sourced in 2012.  Contrary to React, which surged in popularity
            in 2015 when large companies like Netflix and AirBnb adopted it, the Typescript
            hype train didn't depart until recently.  But now that the train has left the station,
            it's accelerating rapidly.
          `}
        </p>
        <p>
          {`
            The static vs. dynamic type checking dichotomy is about as old as computer programming itself.
            LISP, widely accepted as the first dynamically typed language, was created in 1959.  That's just two
            years after FORTRAN, possibly the oldest language still in use today.  And Typescript is
            far from the first attempt to bring static type checking to web programming.  Coffeescript,
            Elm, Dart, and Scala.js are just a few of many alternatives for those
            wishing to write statically checked code that transpiles to javascript, and thus can run in the browser.
          `}
        </p>
        <p>
          {`
            Two things make Typescript different.  I'm not sure which is more important.
          `}
        </p>
        <p>
          {`
            The first is that Typescript "start's from the same syntax and semantics that millions of javascript developers know today"
            and "compiles to clean, simple javascript".  That means that both Typescript source code and the code emitted
            by the compiler can be easily understood by anyone who knows Javascript.  Javascript is already assuming
            a larger and larger role in every website, by virtue of the SPA approach I mentioned before.  In 2020,
            front-end developers are Javascript developers.  When it comes to adoption by the existing community of 
            developers targeting browsers, being as close to plain Javascript as possible gives
            Typescript a distinct advantage over the languages mentioned above.
          `}
        </p>
        <p>
          {`
            The second is Typescript's approach to static type checking.  Typescript is a gradual type system, which
            means that some variables and expressions can be statically checked at compile time, while others are left
            untyped and checked at runtime.  Type checkers are supposed to help engineers, not hinder them.  Typescript's
            checker can be told to "go away" when it's user can't wrangle the type system to their liking.  That is not
            the case in most other languages.  Python, from version 3.5 and later, supports a similar approach entitled
            type hints.  It has a much lower barrier to entry, since there is no transpilation step.  One can choose to 
            write type hints or not.  The Python interpreter ignores the extra syntax, and separate tooling can be stood 
            up to do the type checking.
            Python, however, doesn't run in a browser (yet).  So for now, those of us developing web front ends have to
            make other choices.
          `}
        </p>
        <p>
          {`
            I could say more about Typescript.
            The decisions that team has made with regards to soundness and completeness, as well as
            structural vs. nominal typing, are fascinating.  In the end, however, the point is
            that we all want to maximize productivity and minimize bugs.  Typescript helps, and that's all that matters.
          `}
        </p>
        <h2>React</h2>
        <p>
          {`
            For many, React is considered the top framework for front-end development in 2020.
            Angular and Vue lurk close behind, with Vue gaining momentum quickly.  React is my favorite,
            and also the one that I have the most experience with, so it was a simple choice to use it for
            this project.
          `}
        </p>
        <p>
          {`
            I've never done anything substantial in Angular, though I have dabbled in a few very small
            applications.  I have had the opportunity to do substantial development in Vue over the last year.
            In fact, a post entitled "10 things I like and don't like about Vue" is high on my list of things
            to write about in the immediate future.  Vue 3 might change things a lot, so take the next
            few points with a grain of salt. 
          `}
        </p>
        <p>
          {`
            Templates vs. JSX...
          `}
        </p>
        <p>
          {`
            Hooks and Context API...
          `}
        </p>
        <h2>Gatsby</h2>
        <p>
          {`
            Frankly, I don't have much to say about Gatsby at this point.  The community support seems great,
            it seems mature enough, and things are working so far.  I'll just harken back to my previous point,
            however.  I know I'm not alone in my suspicions of the fact that in 2020 we are writing SPA's in
            Javascript frameworks just to turn around and generate static sites out of them.  Call me crazy...
          `}
        </p>
        <p>
          {`
            ...and this is in no way critical of the creators and maintainers of the Gatsby project.  From what I
            can tell it's a great project and a great community.
          `}
        </p>
        <h2>Emotion</h2>
        <p>
          {`
            Yes, I am a fan of CSS-in-JS.  We are already writing Typescript, which transpiles to Javascript
            (but also JSX, which compiles to Javascript), which then transpiles to more Javascript, which emits DOM.
            We live in a crazy world, so we might as well write Javascript that emits CSS as well because, well, who
            the hell cares at this point anyway?  The thing I like about CSS-in-JS is that is can also be CSS-in-TS,
            which can be statically checked at compile time.  See my rant on Typescript above.    
          `}
        </p>
        <p>
          {`
            Throughout this project's source I use Emotions support for writing CSS styles as Javascript objects
            instead of string interpolations for exactly the same reason.  I can leverage the great CSSType
            project to ensure that I'm using the right values for the right properties, and that is great
            for someone like me, who is far from a CSS expert.   
          `}
        </p>
        <p>
          {`
            I shouldn't say too much more in this blog post, however.  If you want to hear more of my opinions
            on this subject you can check out my talk at Philly ETE 2020 with the guy who taught me everything
            I know about styling <here>.
          `}
        </p>
        <h2>React-spring</h2>
        <p>
          {`
            This is another spot where I don't have much of an opinion yet.
          `}
        </p>
        <h1>so are they sandals, cross-trainers, or hiking boots?</h1>
        <p>
          {`
            Conclusion
          `}
        </p>
      </div>
    </article>
  </Layout>
);

export default Shoemaker; // eslint-disable-line import/no-default-export
