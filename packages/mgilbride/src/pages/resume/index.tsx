import React from 'react';
import { CSSObject } from '@emotion/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout__old';
import {
  makeResponsiveObject,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';
import { JobOrDegreeHeader } from '../../components/resume/JobOrDegreeHeader';
import { SkillHeader } from '../../components/resume/SkillHeader';
import { SkillBody } from '../../components/resume/SkillBody';
import { JobOrDegreeBody } from '../../components/resume/JobOrDegreeBody';
import { Section } from '../../components/resume/Section';
import { Footer } from '../../components/resume/Footer';
import { ChariotProjectHeader } from '../../components/resume/ChariotProjectHeader';

const styleContainer: CSSObject = {
  display: 'grid',
  gridAutoRows: 'max-content',
  justifySelf: 'center',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  h3: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    margin: 0,
  },
  a: {
    textDecoration: 'underline',
  },
};

const styleSkills: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridColumnGap: makeSpace('xxl'),
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridTemplateColumns: '1fr 1fr',
    },
  }),
};

const Resume: NextPage = () => {
  const { pathname, asPath } = useRouter();
  const hash = asPath.substr(asPath.lastIndexOf('#'), asPath.length);
  return (
    <Layout>
      <div css={styleContainer}>
        <Section
          defaultClosed
          headerProps={{
            hash,
            pathname,
            hashTarget: '#skills',
            text: 'Skills',
          }}
        >
          <div css={styleSkills}>
            <div>
              <SkillHeader
                imgSrc="/assets/svg/curly-brackets.svg"
                imgSize={24}
                text="Languages / Frameworks"
              />
              <SkillBody>
                <h5>Day to Day</h5>
                <ul>
                  <li>Javascript &bull; Typescript &bull; Node</li>
                  <li>React &bull; Vue &bull; HTML &bull; CSS</li>
                  <li>Scala &bull; Akka &bull; Python &bull; Flask</li>
                  <li>SQL &bull; Postgres</li>
                </ul>
                <h5>Previous Projects</h5>
                <ul>
                  <li>Java &bull; Spring</li>
                  <li>Neo4j &bull; Apache Spark &bull; Cassandra</li>
                </ul>
                <h5>Dabbled</h5>
                <ul>
                  <li>Clojure &bull; Haskell</li>
                </ul>
              </SkillBody>
            </div>
            <div>
              <SkillHeader
                imgSrc="/assets/svg/infrastructure.svg"
                imgSize={24}
                text="Infrastructure"
              />
              <SkillBody>
                <h5>General</h5>
                <ul>
                  <li>Git &bull; GitHub &bull; GitLab</li>
                  <li>nginx &bull; Apache Tomcat</li>
                  <li>Docker</li>
                  <li>Jenkins</li>
                </ul>
                <h5>AWS</h5>
                <ul>
                  <li>EC2 &bull; ECS</li>
                  <li>VPC &bull; ALB &bull; Route 53</li>
                  <li>Lambda &bull; Kinesis</li>
                  <li>IAM &bull; Cognito</li>
                  <li>Cloudformation &bull; Terraform &bull; CDK</li>
                </ul>
              </SkillBody>
            </div>
            <div>
              <SkillHeader
                imgSrc="/assets/svg/architecture.svg"
                imgSize={24}
                text="Architecture"
              />
              <SkillBody>
                <ul>
                  <li>REST</li>
                  <li>Event Sourcing and CQRS</li>
                  <li>Domain Driven Design</li>
                </ul>
              </SkillBody>
            </div>
            <div>
              <SkillHeader
                imgSrc="/assets/svg/process.svg"
                imgSize={28}
                text="Process"
              />
              <SkillBody>
                <ul>
                  <li>Agile/Scrum</li>
                  <li>Specification writing</li>
                  <li>User acceptance testing</li>
                  <li>Go-live and production support</li>
                </ul>
              </SkillBody>
            </div>
          </div>
        </Section>
        <Section
          headerProps={{
            hash,
            pathname,
            hashTarget: '#experience',
            text: 'Experience',
          }}
        >
          <JobOrDegreeHeader
            imgUrl="/assets/svg/chariot.svg"
            imgSize={36}
            orgUrl="http://www.chariotsolutions.com"
            orgCopy="Chariot Solutions"
            dateCopy="May 2017 - Present"
            titleCopy="Software Architect"
          />
          <JobOrDegreeBody>
            <p>
              I&apos;m a consultant at Chariot. We build software products with
              small teams of highly capable engineers, or integrate into
              existing teams to help them get things done.
            </p>
            <p>
              I love it here for many reasons. Mainly the people. That includes
              my fellow Charioteers as well as the various engineering
              organizations I&apos;ve gotten to work with. The most rewarding
              part of this job is the opportunity it provides me to learn
              rapidly. I enjoy having a deeply technical role that still
              includes interacting with people regularly, and that&apos;s
              exactly what I have at Chariot.
            </p>
            <p>Here are some of the things I&apos;ve worked on:</p>
            <ChariotProjectHeader
              description="A data management platform for neuroscience researchers"
              date="December 2019 - June 2020"
            />
            <p>
              I joined an incredibly talented team at a local startup. Their
              product facilitates the creation and publication of massive
              scientific datasets. I was given the opportunity to contribute
              across the entirety of their stack, which included the following:
            </p>
            <ul>
              <li>
                Web apps written in Vue, some of which used Nuxt to generate
                static sites.
              </li>
              <li>
                A Node service, written in Typescript, for streaming large zip
                archives to the web clients.
              </li>
              <li>
                A core REST API, written in Scala, backed by an RDS Postgres
                instance and files of various sizes written to S3.
              </li>
              <li>
                Another REST API for managing graph data structures, written in
                Python, backed by a Neo4j database.
              </li>
              <li>An nginx API gateway.</li>
              <li>
                Lots of AWS infrastructure provisioned via Terraform. Most
                services run in ECS containers, but other work involved a mix of
                S3, CloudWatch Logs, Kinesis Firehose, and Lambda.
              </li>
            </ul>
            <ChariotProjectHeader
              description="Using IOT enabled outlets to manage industrial plug load"
              date="June 2019 - November 2019"
            />
            <p>
              I lead a project to build a web application and backing REST API
              for another local startup. Our client had built an impressive
              machine learning pipeline leveraging IOT data from smart outlets.
              They offered clients who operate large industrial or office
              buildings a way to reduce energy costs associated with devices
              plugged into outlets.
            </p>
            <p>
              What they needed was an application that allowed users to monitor
              and manage that system. The features we built included a variety
              of data visualizations, interactive data grids, and basic CRUD
              operations. We used the following technologies to get the job
              done:
            </p>
            <ul>
              <li>
                A Node REST service written in Typescript, backed by a Postgres
                RDS database.
              </li>
              <li>A web app written in React, with Typescript.</li>
              <li>
                A separate library of React components encapsulating a custom
                design system.
              </li>
              <li>User authentication with Cognito</li>
              <li>
                Run in ECS, deployed via CodeBuild, and provisioned with
                Cloudformation
              </li>
            </ul>
            <ChariotProjectHeader
              description="A banking system to manage the processing of wire transfers"
              date="May 2017 - May 2019"
            />
            <p>
              I joined a small team developing a wire transfer application
              serving small and medium sized financial institutions. The
              business requirements included providing a detailed audit trail of
              all actions taken, by whom, and when. Additionally, the system
              needed to support highly customizable workflows driven by the
              various financial processes in which wire transfers are involved.
            </p>
            <p>
              We addressed those requirements by building with the following
              stack:
            </p>
            <ul>
              <li>A web app written in React</li>
              <li>
                Multiple microservices written in Scala and Akka HTTP, using a
                CQRS and Event Sourcing architectural pattern. Events were
                written to Cassandra, with projections written to Postgres.
              </li>
              <li>User authentication with Keycloak</li>
              <li>An nginx API gateway</li>
            </ul>
          </JobOrDegreeBody>
          <JobOrDegreeHeader
            imgUrl="/assets/svg/reuters.svg"
            imgSize={36}
            orgUrl="https://legal.thomsonreuters.com/en/products/c-track"
            orgCopy="Thomson Reuters"
            dateCopy="Aug. 2015 - May 2017"
            titleCopy="Senior Software Engineer"
          />
          <JobOrDegreeBody>
            <p>
              I was a senior developer on an enterprise Court Management System
              (CMS). The software serves courts in the U.S. and abroad,
              streamlining processes such as document management, courtroom
              scheduling, financial accounting, and much more.
            </p>
            <p>
              As a member of the accounting team, I helped implement a
              configurable financial system to support various processes
              including fee calculation, payment processing, and general ledger
              accounting.
            </p>
          </JobOrDegreeBody>
          <JobOrDegreeHeader
            imgUrl="/assets/svg/sap.svg"
            imgSize={36}
            orgUrl="https://www.sap.com/products/digital-supply-chain/supply-chain-logistics.html"
            orgCopy="SAP"
            dateCopy="Dec. 2011 - Aug. 2015"
            titleCopy="Senior Application Consultant"
          />
          <JobOrDegreeBody>
            <p>
              I implemented highly configurable SAP products in the logistics
              space. I focused on two products; Transportation Management (TM)
              and Extended Warehouse Management (EWM). This job was technical in
              nature, but didn&apos;t overtly require programming skills. I
              spent much of my time understanding whether complex business
              requirements could be solved via configuration alone, or required
              more technical enhancements.
            </p>
            <p>
              After some time, I had spent enough time debugging the software to
              be able to develop those enhancements on my own. I really enjoyed
              the work for a period of time. I love the logistics space, so
              although I wanted to spend more of my days writing code, I was
              happy with a more hands-on role that involved walking the
              warehouse floor.
            </p>
            <p>
              Eventually, a desire to travel less and code more meant I had to
              move on.
            </p>
          </JobOrDegreeBody>
          <JobOrDegreeHeader
            imgUrl="/assets/svg/boeing.svg"
            imgSize={28}
            orgUrl="https://www.boeing.com/"
            orgCopy="Boeing"
            dateCopy="Aug. 2009 - Nov. 2011"
            titleCopy="Supply Chain Analyst"
          />
          <JobOrDegreeBody>
            <p>
              As a supply chain major coming out of undergraduate school, this
              was a great job. A lot of things I did revolved around
              spreadsheets, and involved interacting on a production floor. I
              fell in love with coding via the Microsoft Office Suite (Excel,
              VBA, and Access).
            </p>
            <p>
              Little did I know, a decade later Microsoft would be popular for
              different things and I would be a Typescript fanboy.
            </p>
          </JobOrDegreeBody>
        </Section>
        <Section
          headerProps={{
            hash,
            pathname,
            hashTarget: '#education',
            text: 'Education',
          }}
        >
          <JobOrDegreeHeader
            imgUrl="/assets/svg/drexel.svg"
            imgSize={36}
            orgUrl="https://drexel.edu/cci/academics/computer-science-department/"
            titleCopy="M.S. Computer Science"
            orgCopy="Drexel University"
            dateCopy="Fall 2013 - Spring 2017"
          />
          <JobOrDegreeBody>
            <p>GPA: 3.9</p>
            <p>
              After too many years of dabbling, I committed to a technical
              career by pursuing a technical education.
            </p>
            <p>
              The final few quarters of my degree were spent with a research
              group studying graph databases, specifically the exploration of
              graph datastructures as they evolve over time. I worked with a
              brilliant Ph.D student named Vera Zaychik Moffitt. We have all
              moved on since then. If you&nbsp;d like to know more about the
              work, the website (which I built, don&apos;t judge) still
              exists&nbsp;
              <a href="https://portaldb.github.io/">here</a>.
            </p>
          </JobOrDegreeBody>
          <JobOrDegreeHeader
            imgUrl="/assets/svg/penn-state.svg"
            imgSize={36}
            orgUrl="https://www.smeal.psu.edu/scis"
            titleCopy="B.S. Supply Chain Info. Systems"
            orgCopy="Penn State University"
            dateCopy="Fall 2005 - Spring 2009"
          />
          <JobOrDegreeBody>
            <p>GPA: 3.8</p>
            <p>
              I studied Supply Chain Information Systems, and minored in Spanish
              and International Business. SCIS was a degree from Penn
              State&apos;s business college. It was like a business degree
              combined with an industrial engineering degree, with less physics
              and more accounting.
            </p>
          </JobOrDegreeBody>
        </Section>
      </div>
      <Footer />
    </Layout>
  );
};

export default Resume; // eslint-disable-line import/no-default-export
