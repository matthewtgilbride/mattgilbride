import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../../components/Layout';
import { makeSpace, responsiveBreakpoints } from '../../utils/design';

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
  'h1, h2': {
    fontStyle: 'italic',
    margin: `${makeSpace('sm')} 0`,
  },
  '.first': {
    marginTop: 0,
  },
  h4: {
    margin: `${makeSpace('xs')} 0 0 0`,
  },
  ul: {
    padding: `0 ${makeSpace('sm')}`,
    margin: 0,
  },
  li: {
    margin: `${makeSpace('xxs')} 0`,
    listStyleType: 'circle',
  },
  a: {
    textDecoration: 'underline',
  },
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <div>
        <h1 className="first">Skills</h1>
        <h2>Languages / Frameworks</h2>
        <h4>Day to Day</h4>
        <ul>
          <li>Javascript, Typescript, Node</li>
          <li>React, Vue, HTML, CSS</li>
          <li>Scala, Akka, Python, Flask</li>
          <li>SQL, Postgres</li>
        </ul>
        <h4>Previous Projects</h4>
        <ul>
          <li>Java, Spring</li>
          <li>Neo4j, Apache Spark</li>
        </ul>
        <h4>Dabbled</h4>
        <ul>
          <li>Clojure, Haskell</li>
        </ul>
        <h2>Architecture</h2>
        <ul>
          <li>REST</li>
          <li>Event Sourcing and CQRS</li>
          <li>Domain Driven Design</li>
        </ul>
        <h2>Infrastructure</h2>
        <ul>
          <li>Git, GitHub, GitLab</li>
          <li>Docker</li>
          <li>Jenkins</li>
        </ul>
        <h4>AWS</h4>
        <ul>
          <li>EC2, ECS</li>
          <li>Lambda</li>
          <li>Cognito</li>
        </ul>
        <h2>Process</h2>
        <ul>
          <li>Agile/Scrum</li>
          <li>Specification writing</li>
          <li>User acceptance testing</li>
          <li>Go-live and production support</li>
        </ul>
        <h1>Work Experience</h1>
        <h1>Education</h1>
      </div>
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
