export interface BlogLink {
  title: string;
  href: string;
}

export interface BlogYear {
  year: string;
  posts: BlogLink[];
}

export const blogIndex: BlogYear[] = [
  {
    year: '2021',
    posts: [
      {
        title: 'The Prodigal Java Returns',
        href: '/blog/coming-back-to-java',
      },
      {
        title: '(Mis)Adventures in Rust',
        href: '/blog/misadventures-in-rust',
      },
      {
        title: "Next > Gatsby and you don't need GraphQL",
        href: '/blog/next-gatsby',
      },
    ],
  },
  {
    year: '2020',
    posts: [
      {
        title: 'Using the AWS CDK in real life - part two',
        href: 'https://chariotsolutions.com/blog/post/using-the-aws-cdk-irl-part-2/',
      },
      {
        title: 'Vue 3.0 might be a big deal',
        href: 'https://chariotsolutions.com/blog/post/vue-3-0-might-be-a-big-deal/',
      },
      {
        title: 'Using the AWS CDK in real life',
        href: 'https://chariotsolutions.com/blog/post/using-the-aws-cdk-in-real-life/',
      },
      {
        title: 'Giving the shoemaker shoes',
        href: '/blog/shoemaker',
      },
    ],
  },
];
