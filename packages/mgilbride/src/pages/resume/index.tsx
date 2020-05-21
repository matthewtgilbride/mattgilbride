import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../../components/Layout';
import {
  makeSpace,
  responsiveBreakpoints,
  makeFontSize,
} from '../../utils/design';
import { JobOrDegreeHeader } from './JobOrDegreeHeader';

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
  'h1, h3': {
    fontStyle: 'italic',
    margin: `${makeSpace('sm')} 0`,
  },
  h3: {
    fontWeight: 'normal',
  },
  '.first': {
    marginTop: 0,
  },
  h5: {
    margin: `${makeSpace('xs')} 0 0 0`,
    fontWeight: 'normal',
  },
  ul: {
    padding: `0 ${makeSpace('sm')}`,
    margin: 0,
  },
  li: {
    margin: `${makeSpace('xxs')} 0`,
    fontSize: makeFontSize('xs'),
    listStyleType: 'none',
    fontWeight: 'bold',
  },
  a: {
    textDecoration: 'underline',
  },
  p: {
    fontSize: makeFontSize('xs'),
  },
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <div>
        <h1 className="first">Skills</h1>
        <h3>Languages / Frameworks</h3>
        <h5>Day to Day</h5>
        <ul>
          <li>Javascript, Typescript, Node</li>
          <li>React, Vue, HTML, CSS</li>
          <li>Scala, Akka, Python, Flask</li>
          <li>SQL, Postgres</li>
        </ul>
        <h5>Previous Projects</h5>
        <ul>
          <li>Java, Spring</li>
          <li>Neo4j, Apache Spark</li>
        </ul>
        <h5>Dabbled</h5>
        <ul>
          <li>Clojure, Haskell</li>
        </ul>
        <h3>Infrastructure</h3>
        <h5>General</h5>
        <ul>
          <li>Git, GitHub, GitLab</li>
          <li>Docker</li>
          <li>Jenkins</li>
        </ul>
        <h5>AWS</h5>
        <ul>
          <li>EC2, ECS</li>
          <li>Lambda</li>
          <li>Cognito</li>
        </ul>
        <h3>Architecture</h3>
        <ul>
          <li>REST</li>
          <li>Event Sourcing and CQRS</li>
          <li>Domain Driven Design</li>
        </ul>
        <h3>Process</h3>
        <ul>
          <li>Agile/Scrum</li>
          <li>Specification writing</li>
          <li>User acceptance testing</li>
          <li>Go-live and production support</li>
        </ul>
        <h1>Experience</h1>
        <JobOrDegreeHeader
          orgCopy="Chariot Solutions"
          dateCopy="May 2017 - Present"
          titleCopy="Software Architect"
          locationCopy="Fort Washington, PA."
        />
        <p>
          I&apos;m a consultant at Chariot. We build software products with
          small teams of highly capable engineers, or integrate into existing
          engineering teams to help them do things better.
        </p>
        <p>I love it here for many reasons. Mainly the people.</p>
        <JobOrDegreeHeader
          orgCopy="Thomson Reuters"
          dateCopy="Aug. 2015 - May 2018"
          titleCopy="Senior Software Engineer"
          locationCopy="Media, PA."
        />
        <p>
          I was a senior developer on an enterprise Court Management System
          (CMS). The software serves courts in the U.S. and abroad, streamlining
          processes such as document management, courtroom scheduling, financial
          accounting, and much more.
        </p>
        <p>
          As a member of the accounting team, I helped implement a configurable
          financial system to support various processes including fee
          calculation, payment processing, and general ledger accounting.
        </p>
        <JobOrDegreeHeader
          orgCopy="SAP"
          dateCopy="Dec. 2011 - Aug. 2015"
          titleCopy="Senior Application Consultant"
          locationCopy="Newtown Square, PA."
        />
        <p>
          I consulted for large scale ERP implementations. My favorite part was
          the coding.
        </p>
        <p>I loved it there, but didn&apos;t get to code enough.</p>
        <JobOrDegreeHeader
          orgCopy="Boeing"
          dateCopy="Aug. 2009 - Nov. 2011"
          titleCopy="Supply Chain Analyst"
          locationCopy="Ridley Park, PA."
        />
        <p>
          I fell in love with coding via the Microsoft Office Suite (Excel, VBA,
          and Access).
        </p>
        <p>Little did I know a decade later I would be a Typescript fanboy.</p>
        <h1>Education</h1>
        <JobOrDegreeHeader
          titleCopy="M.S. Computer Science"
          orgCopy="Drexel University"
          dateCopy="Fall 2013 - Spring 2017"
          locationCopy="Philadelphia, PA."
        />
        <p>
          After too many years of dabbling, I committed to a technical career by
          pursuing a technical education.
        </p>
        <JobOrDegreeHeader
          titleCopy="B.S. Supply Chain Info. Systems"
          orgCopy="Penn State University"
          dateCopy="Fall 2005 - Spring 2009"
          locationCopy="University Park, PA."
        />
        <p>
          I studied Supply Chain and minored in Spanish and International
          Business.
        </p>
      </div>
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
