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

export const background: string[] = [
  "I have a deep appreciation for programming languages and type systems. I prefer languages with robust type systems that shift bugs and design problems as far left as possible. That said, I've worked professionally in over a dozen languages, and if my career has taught me anything, it's that the best tool is the one that fits the problem \u2014 and that I can pick up new ones quickly. With AI transforming how we write software, that adaptability matters more than ever. These days, markdown might be the most important programming language of all \u2014 and I've been leaning into that.",
  'At Google, I work on Android Platform Security, writing Rust, Java, Kotlin, C, and C++ across the platform. My current focus is a system using uprobes and eBPF for rapid deployment of telemetry and abuse mitigation. I\'ve also contributed to user-facing features like Safe Browsing and Advanced Protection Mode, and developed static analysis tooling with Android Lint.',
  'I started my career in supply chain and logistics, where I fell in love with programming through Excel and VBA. That led me to SAP, where I went from configuring warehouse systems to debugging and extending them in ABAP.',
  'A master\'s degree in computer science opened the door to full-time software engineering. At Thomson Reuters, I worked on a large-scale enterprise Java application. At Chariot Solutions, I got to work across a wide variety of stacks on short-cycle consulting projects \u2014 Scala and Akka for event-sourced systems, React and Vue on the frontend, Node and Python for APIs, all deployed on AWS with Terraform and CloudFormation.',
  'At Capital One, I worked on cloud-native microservices in a large retail banking organization \u2014 building data synchronization pipelines with Kafka, services in Node and Python, and driving CI/CD adoption.',
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
        text: "I worked within Capital One's retail banking line of business, building enterprise-scale solutions for product and customer data. The work involved modernizing legacy systems onto cloud-native microservices architectures using Node, Python, React, and Kafka.",
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
        text: 'Chariot builds software products with small teams of highly capable engineers. I worked on three consulting projects spanning fintech, IoT energy management, and neuroscience data platforms. The variety was the best part \u2014 each project brought a different stack, a different domain, and a different team.',
      },
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
        text: 'I implemented and extended SAP products in the logistics space, focusing on Transportation Management and Extended Warehouse Management. The role started as configuration but evolved into development as I learned to build custom enhancements in ABAP.',
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
