import { ReactNode } from 'react';

export interface SkillSubgroup {
  title?: string;
  items: string[];
}

export interface SkillGroup {
  title: string;
  icon: { src: string; size: number };
  subgroups: SkillSubgroup[];
}

export type ContentBlock =
  | { type: 'paragraph'; text: string; link?: { text: string; href: string } }
  | { type: 'heading5'; text: string }
  | { type: 'heading6'; text: string }
  | { type: 'list-item'; text: string };

export interface ExperienceEntry {
  kind: 'experience' | 'education';
  title: string;
  date: string;
  icon: { src: string; size: number };
  org: { name: string; href: string };
  content: ContentBlock[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Code',
    icon: { src: '/assets/svg/coding.svg', size: 24 },
    subgroups: [
      {
        title: 'Day to Day',
        items: [
          'Javascript \u2022 Typescript \u2022 Node \u2022 React',
          'Java \u2022 Spring',
          'Python \u2022 Flask',
        ],
      },
      {
        title: 'Previous Projects',
        items: ['Scala \u2022 Akka', 'Vue'],
      },
      {
        title: 'Dabbled',
        items: ['Rust', 'Clojure', 'Haskell'],
      },
    ],
  },
  {
    title: 'Data',
    icon: { src: '/assets/svg/server.svg', size: 24 },
    subgroups: [
      {
        title: 'Relational',
        items: ['Postgres', 'MySQL', 'Oracle DB'],
      },
      {
        title: 'Non-Relational',
        items: ['Redis', 'DynamoDB', 'Cassandra', 'Neo4j'],
      },
      {
        title: 'Analytics',
        items: ['Snowflake', 'Apache Spark'],
      },
    ],
  },
  {
    title: 'Infrastructure',
    icon: { src: '/assets/svg/cloud-computing.svg', size: 24 },
    subgroups: [
      {
        title: 'AWS',
        items: [
          'VPC \u2022 EC2 \u2022 ECS \u2022 ALB',
          'Lambda',
          'Route 53',
          'IAM \u2022 Cognito',
          'Cloudformation \u2022 Terraform \u2022 CDK',
        ],
      },
      {
        title: 'General',
        items: [
          'nginx \u2022 Apache Tomcat',
          'Apache Kafka',
          'Docker',
          'Jenkins',
        ],
      },
    ],
  },
  {
    title: 'Architecture',
    icon: { src: '/assets/svg/sketch.svg', size: 24 },
    subgroups: [
      {
        title: 'Systems Design',
        items: [
          'Event Sourcing \u2022 CQRS',
          'Domain Driven Design',
          'Actor Systems',
          'Message Brokers',
          'REST',
        ],
      },
      {
        title: 'Process',
        items: [
          'Git',
          'Agile/Scrum',
          'Continuous Integration \u2022 Continuous Deployment',
          'Test Driven Development',
          'Behavior Driven Development',
        ],
      },
    ],
  },
];

export const experiences: ExperienceEntry[] = [
  {
    kind: 'experience',
    title: 'Software Engineer - Android Platform Security',
    date: 'March 2022 - Present',
    icon: { src: '/assets/svg/google.svg', size: 36 },
    org: {
      name: 'Google',
      href: 'https://www.android.com/',
    },
    content: [
      {
        type: 'paragraph',
        text: 'I work on security features of the Android Operating System. Our team is responsible for protecting billions of Android users from a wide range of security threats.',
      },
      {
        type: 'paragraph',
        text: 'Some of the user-facing features I have contributed to include:',
      },
      {
        type: 'list-item',
        text: 'Android Safe Browsing \u2014 protecting users from dangerous websites and downloads across the platform.',
      },
      {
        type: 'list-item',
        text: 'Android Advanced Protection Mode \u2014 providing the strongest security settings for users at elevated risk, such as journalists and public officials.',
      },
      {
        type: 'paragraph',
        text: "Beyond these visible features, I've worked across a range of platform security efforts that are harder to summarize but equally critical to keeping Android secure.",
      },
    ],
  },
  {
    kind: 'experience',
    title: 'Lead Software Engineer - Platforms Data & Architecture',
    date: 'December 2020 - March 2022',
    icon: { src: '/images/c1.webp', size: 44 },
    org: {
      name: 'Capital One',
      href: 'https://www.capitalone.com/tech/software-engineering/',
    },
    content: [
      {
        type: 'paragraph',
        text: "I worked within Capital One's retail banking line of business, handling the tech that drives consumer products like checking and savings accounts. My group focused on developing enterprise-scale solutions for maintaining product and customer information, including lifting and shifting legacy technology stacks onto modern, cloud-native, microservices-based architectures.",
      },
      {
        type: 'list-item',
        text: 'Synchronizing updates to customer data with Apache Kafka.',
      },
      {
        type: 'list-item',
        text: 'Creating a singular home for product definition, via services written in Node and Python.',
      },
      {
        type: 'list-item',
        text: 'Driving the adoption of enterprise CI/CD pipeline technology.',
      },
      {
        type: 'list-item',
        text: 'Replacing a legacy Angular application with React.',
      },
    ],
  },
  {
    kind: 'experience',
    title: 'Software Architect',
    date: 'May 2017 - December 2020',
    icon: { src: '/assets/svg/chariot.svg', size: 36 },
    org: { name: 'Chariot Solutions', href: 'https://chariotsolutions.com/' },
    content: [
      {
        type: 'paragraph',
        text: 'Chariot builds software products with small teams of highly capable engineers, or integrates into existing teams to help them get things done.',
      },
      {
        type: 'paragraph',
        text: "I loved it there for many reasons. Mainly the people. That includes my fellow Charioteers as well as the various engineering organizations I got to work with. The most rewarding part of the job was the opportunity it provided me to learn rapidly. I enjoy having a deeply technical role that still includes interacting with people regularly, and that's exactly what I had at Chariot.",
      },
      {
        type: 'paragraph',
        text: 'Here are some of the things I worked on:',
      },
      {
        type: 'heading5',
        text: 'A DATA MANAGEMENT PLATFORM FOR NEUROSCIENCE RESEARCHERS',
      },
      { type: 'heading6', text: 'December 2019 - June 2020' },
      {
        type: 'paragraph',
        text: 'I joined an incredibly talented team at a local startup. Their product facilitates the creation and publication of massive scientific datasets. I was given the opportunity to contribute across the entirety of their stack, which included the following:',
      },
      {
        type: 'list-item',
        text: 'Web apps written in Vue, some of which used Nuxt to generate static sites.',
      },
      {
        type: 'list-item',
        text: 'A Node service, written in Typescript, for streaming large zip archives to the web clients.',
      },
      {
        type: 'list-item',
        text: 'A core REST API, written in Scala, backed by an RDS Postgres instance and files of various sizes written to S3.',
      },
      {
        type: 'list-item',
        text: 'Another REST API for managing graph data structures, written in Python, backed by a Neo4j database.',
      },
      { type: 'list-item', text: 'An nginx API gateway.' },
      {
        type: 'list-item',
        text: 'Lots of AWS infrastructure provisioned via Terraform. Most services run in ECS containers, but other work involved a mix of S3, CloudWatch Logs, Kinesis Firehose, and Lambda.',
      },
      {
        type: 'heading5',
        text: 'USING IOT ENABLED OUTLETS TO MANAGE INDUSTRIAL PLUG LOAD',
      },
      { type: 'heading6', text: 'June 2019 - November 2019' },
      {
        type: 'paragraph',
        text: 'I lead a project to build a web application and backing REST API for another local startup. Our client had built an impressive machine learning pipeline leveraging IOT data from smart outlets. They offered clients who operate large industrial or office buildings a way to reduce energy costs associated with devices plugged into outlets.',
      },
      {
        type: 'paragraph',
        text: 'What they needed was an application that allowed users to monitor and manage that system. The features we built included a variety of data visualizations, interactive data grids, and basic CRUD operations. We used the following technologies to get the job done:',
      },
      {
        type: 'list-item',
        text: 'A Node REST service written in Typescript, backed by a Postgres RDS database.',
      },
      {
        type: 'list-item',
        text: 'A web app written in React, with Typescript.',
      },
      {
        type: 'list-item',
        text: 'A separate library of React components encapsulating a custom design system.',
      },
      { type: 'list-item', text: 'User authentication with Cognito' },
      {
        type: 'list-item',
        text: 'Run in ECS, deployed via CodeBuild, and provisioned with Cloudformation',
      },
      {
        type: 'heading5',
        text: 'A BANKING SYSTEM TO MANAGE THE PROCESSING OF WIRE TRANSFERS',
      },
      { type: 'heading6', text: 'May 2017 - May 2019' },
      {
        type: 'paragraph',
        text: 'I joined a small team developing a wire transfer application serving small and medium sized financial institutions. The business requirements included providing a detailed audit trail of all actions taken, by whom, and when. Additionally, the system needed to support highly customizable workflows driven by the various financial processes in which wire transfers are involved.',
      },
      {
        type: 'paragraph',
        text: 'We addressed those requirements by building with the following stack:',
      },
      { type: 'list-item', text: 'A web app written in React' },
      {
        type: 'list-item',
        text: 'Multiple microservices written in Scala and Akka HTTP, using a CQRS and Event Sourcing architectural pattern. Events were written to Cassandra, with projections written to Postgres.',
      },
      { type: 'list-item', text: 'User authentication with Keycloak' },
      { type: 'list-item', text: 'An nginx API gateway' },
    ],
  },
  {
    kind: 'experience',
    title: 'Senior Software Engineer',
    date: 'Aug. 2015 - May 2017',
    icon: { src: '/assets/svg/reuters.svg', size: 36 },
    org: {
      name: 'Thomson Reuters',
      href: 'https://legal.thomsonreuters.com/en/products/c-track',
    },
    content: [
      {
        type: 'paragraph',
        text: 'I was a senior developer on an enterprise Court Management System (CMS). The software serves courts in the U.S. and abroad, streamlining processes such as document management, courtroom scheduling, financial accounting, and much more.',
      },
      {
        type: 'paragraph',
        text: 'As a member of the accounting team, I helped implement a configurable financial system to support various processes including fee calculation, payment processing, and general ledger accounting.',
      },
    ],
  },
  {
    kind: 'experience',
    title: 'Senior Application Consultant',
    date: 'Dec. 2011 - Aug. 2015',
    icon: { src: '/assets/svg/sap.svg', size: 36 },
    org: {
      name: 'SAP',
      href: 'https://www.sap.com/products/digital-supply-chain/supply-chain-logistics.html',
    },
    content: [
      {
        type: 'paragraph',
        text: "I implemented highly configurable SAP products in the logistics space. I focused on two products; Transportation Management (TM) and Extended Warehouse Management (EWM). This job was technical in nature, but didn't overtly require programming skills. I spent much of my time understanding whether complex business requirements could be solved via configuration alone, or required more technical enhancements.",
      },
      {
        type: 'paragraph',
        text: "After some time, I had spent enough time debugging the software to be able to develop those enhancements on my own. I really enjoyed the work for a period of time. I love the logistics space, so although I wanted to spend more of my days writing code, I was happy with a more hands-on role that involved walking the warehouse floor.",
      },
      {
        type: 'paragraph',
        text: 'Eventually, a desire to travel less and code more meant I had to move on.',
      },
    ],
  },
  {
    kind: 'experience',
    title: 'Supply Chain Analyst',
    date: 'Aug. 2009 - Nov. 2011',
    icon: { src: '/assets/svg/boeing.svg', size: 28 },
    org: { name: 'Boeing', href: 'https://www.boeing.com/' },
    content: [
      {
        type: 'paragraph',
        text: 'As a supply chain major coming out of undergraduate school, this was a great job. A lot of things I did revolved around spreadsheets, and involved interacting on a production floor. I fell in love with coding via the Microsoft Office Suite (Excel, VBA, and Access).',
      },
      {
        type: 'paragraph',
        text: "Little did I know, a decade later Microsoft would be popular for different things and I would be a Typescript fanboy.",
      },
    ],
  },
  {
    kind: 'education',
    title: 'M.S. Computer Science',
    date: 'Fall 2013 - Spring 2017',
    icon: { src: '/assets/svg/drexel.svg', size: 36 },
    org: {
      name: 'Drexel University',
      href: 'https://drexel.edu/cci/academics/computer-science-department/',
    },
    content: [
      { type: 'paragraph', text: 'GPA: 3.9' },
      {
        type: 'paragraph',
        text: 'After too many years of dabbling, I committed to a technical career by pursuing a technical education.',
      },
      {
        type: 'paragraph',
        text: "The final few quarters of my degree were spent with a research group studying graph databases, specifically the exploration of graph data structures as they evolve over time. I worked with a brilliant Ph.D student named Vera Zaychik Moffitt. We have all moved on since then. If you\u00a0d like to know more about the work, the website (which I built, don't judge) still exists\u00a0",
        link: { text: 'here', href: 'https://portaldb.github.io/' },
      },
    ],
  },
  {
    kind: 'education',
    title: 'B.S. Supply Chain Info. Systems',
    date: 'Fall 2005 - Spring 2009',
    icon: { src: '/assets/svg/penn-state.svg', size: 36 },
    org: {
      name: 'Penn State University',
      href: 'https://www.smeal.psu.edu/scis',
    },
    content: [
      { type: 'paragraph', text: 'GPA: 3.8' },
      {
        type: 'paragraph',
        text: "I studied Supply Chain Information Systems, and minored in Spanish and International Business. SCIS was a degree from Penn State's business college. It was like a business degree combined with an industrial engineering degree, with less physics and more accounting.",
      },
    ],
  },
];
