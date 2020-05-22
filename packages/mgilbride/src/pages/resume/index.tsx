import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Link } from 'gatsby';
import { Layout } from '../../components/Layout';
import {
  makeFontSize,
  makeResponsiveObject,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';
import { JobOrDegreeHeader } from './JobOrDegreeHeader';
import CurlyBrackets from '../../assets/svg/curly-brackets.svg';
import Architecture from '../../assets/svg/architecture.svg';
import Infrastructure from '../../assets/svg/infrastructure.svg';
import Process from '../../assets/svg/process.svg';
import { SkillHeader } from './SkillHeader';

const styleContainer: CSSObject = {
  display: 'grid',
  justifySelf: 'center',
  justifyItems: 'center',
  padding: makeSpace('md'),
  maxWidth: responsiveBreakpoints.tabletPortrait,
  'h1, h3': {
    fontStyle: 'italic',
  },
  h1: {
    margin: `${makeSpace('sm')} 0`,
  },
  h3: {
    fontWeight: 'normal',
    margin: 0,
  },
  h5: {
    margin: `${makeSpace('xs')} 0 0 0`,
  },
  ul: {
    padding: `0 ${makeSpace('sm')}`,
    margin: 0,
  },
  li: {
    margin: `${makeSpace('xxs')} 0`,
    fontSize: makeFontSize('sm'),
    listStyleType: 'none',
  },
  a: {
    textDecoration: 'underline',
  },
  p: {
    fontSize: makeFontSize('xs'),
  },
};

const styleSkills: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  '> div': {
    '> div': {
      padding: `${makeSpace('xxs')} ${makeSpace('md')} ${makeSpace(
        'xl',
      )} ${makeSpace('md')}`,
    },
  },
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridTemplateColumns: '1fr 1fr',
    },
  }),
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <div>
        <h1 css={{ marginTop: 0 }}>Skills</h1>
        <div css={styleSkills}>
          <div>
            <SkillHeader
              imgSrc={CurlyBrackets}
              imgAlt="brackets"
              text="Languages / Frameworks"
            />
            <div>
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
            </div>
          </div>
          <div>
            <SkillHeader
              imgSrc={Infrastructure}
              imgAlt="infrastructure"
              text="Infrastructure"
            />
            <div>
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
            </div>
          </div>
          <div>
            <SkillHeader
              imgSrc={Architecture}
              imgAlt="architecture"
              text="Architecture"
            />
            <div>
              <ul>
                <li>REST</li>
                <li>Event Sourcing and CQRS</li>
                <li>Domain Driven Design</li>
              </ul>
            </div>
          </div>
          <div>
            <SkillHeader imgSrc={Process} imgAlt="process" text="Process" />
            <div>
              <ul>
                <li>Agile/Scrum</li>
                <li>Specification writing</li>
                <li>User acceptance testing</li>
                <li>Go-live and production support</li>
              </ul>
            </div>
          </div>
        </div>
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
          teams to help them do things better.
        </p>
        <p>
          I love it here for many reasons. Mainly the people. That includes my
          fellow Charioteers as well as the various engineering organizations
          I&apos;ve gotten to work with. The most rewarding part of this job is
          the opportunity it provides me to learn rapidly. I enjoy having a
          deeply technical role that still includes interacting with people
          regularly, and that&apos;s exactly what I have at Chariot.
        </p>
        <p>
          Check out my <Link to="/blog">blog</Link> for more on what I&apos;ve
          been working on.
        </p>
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
          I implemented highly configurable SAP products in the logistics space.
          I focused on two products; Transportation Management (TM) and Extended
          Warehouse Management (EWM). This job was technical in nature, but
          didn&apos;t overtly require programming skills. I spent much of my
          time understanding whether complex business requirements could be
          solved via configuration alone, or required more technical
          enhancements.
        </p>
        <p>
          After some time, I had spent enough time debugging the software to be
          able to develop those enhancements on my own. I really enjoyed the
          work for a period of time. I love the logistics space, so although I
          wanted to spend more of my days writing code, I was happy with a more
          hands-on role that involved walking the warehouse floor.
        </p>
        <p>
          Eventually, a desire to travel less and code more meant I had to move
          on.
        </p>
        <JobOrDegreeHeader
          orgCopy="Boeing"
          dateCopy="Aug. 2009 - Nov. 2011"
          titleCopy="Supply Chain Analyst"
          locationCopy="Ridley Park, PA."
        />
        <p>
          As a supply chain major coming out of undergraduate school, this was a
          great job. A lot of things I did revolved around spreadsheets, and
          involved interacting on a production floor. I fell in love with coding
          via the Microsoft Office Suite (Excel, VBA, and Access).
        </p>
        <p>
          Little did I know, a decade later Microsoft would be popular for
          different things and I would be a Typescript fanboy.
        </p>
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
        <p>
          The final few quarters of my degree were spent with a research group
          studying graph databases, specifically the exploration of graph
          datastructures as they evolve over time. I worked with a brilliant
          Ph.D student named Vera Zaychik Moffitt. We have all moved on since
          then. If you&nbsp;d like to know more about the work, the website
          (which I built, don&apos;t judge) still exists&nbsp;
          <a href="https://portaldb.github.io/">here</a>.
        </p>
        <JobOrDegreeHeader
          titleCopy="B.S. Supply Chain Info. Systems"
          orgCopy="Penn State University"
          dateCopy="Fall 2005 - Spring 2009"
          locationCopy="University Park, PA."
        />
        <p>
          I studied Supply Chain Information Systems, and minored in Spanish and
          International Business. SCIS was a degree from Penn State&apos;s
          business college. It was like a business degree combined with an
          industrial engineering degree, with less physics and more accounting.
        </p>
      </div>
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
