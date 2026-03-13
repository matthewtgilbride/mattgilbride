import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { Layout } from '../../components/layout/Layout';

const styleContainer: CSSObject = {
  display: 'grid',
  gridTemplateRows: 'min-content',
  justifySelf: 'center',
  justifyItems: 'center',
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  // because shoemaker is a long word in iphone SE
  wordBreak: 'break-word',
  h1: {
    fontSize: makeSize('h1'),
    margin: `${makeSpace('xl')} 0`,
  },
  h2: {
    fontSize: makeSize('h2'),
  },
  h3: {
    fontSize: makeSize('h3'),
    margin: `${makeSpace('lg')} 0`,
  },
  h4: {
    fontSize: makeSize('h4'),
    fontWeight: 'bold',
    margin: `${makeSpace('md')} 0`,
  },
  'h1, h2, h3': {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  'ul, ol': {
    paddingInlineStart: makeSpace('sm'),
    margin: `${makeSpace('lg')} 0`,
    li: {
      margin: `${makeSpace('xs')} 0`,
    },
  },
  ul: {
    li: {
      listStyleType: 'disc',
    },
  },
  ol: {
    li: {
      listStyleType: 'number',
    },
    'li::marker': {
      fontWeight: 'bold',
    },
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

// Each MDX file needs an explicit dynamic() call because webpack can't resolve
// template literal imports like `import(`../../content/blog/${uid}.mdx`)`.
// dynamic() also code-splits so only the viewed post's content is downloaded.
// Trade-off: new blog posts require adding a line here.
const mdxComponents: Record<string, React.ComponentType> = {
  shoemaker: dynamic(() => import('../../content/blog/shoemaker.mdx')),
  'next-gatsby': dynamic(() => import('../../content/blog/next-gatsby.mdx')),
  'misadventures-in-rust': dynamic(
    () => import('../../content/blog/misadventures-in-rust.mdx'),
  ),
  'coming-back-to-java': dynamic(
    () => import('../../content/blog/coming-back-to-java.mdx'),
  ),
};

interface BlogPostProps {
  uid: string;
  title: string;
}

const BlogPost: FC<BlogPostProps> = ({ uid, title }) => {
  const Content = mdxComponents[uid];
  return (
    <Layout seo={{ pageTitle: title }}>
      <article css={styleContainer}>
        <div>
          <Content />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const mdxPath = path.join(contentDir, `${params?.uid}.mdx`);
  const raw = fs.readFileSync(mdxPath, 'utf-8');
  const match = raw.match(/title:\s*"([^"]+)"/);
  const title = match ? match[1] : 'Matt Gilbride';
  return {
    props: { uid: params?.uid as string, title },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
  const paths = files.map((f) => `/blog/${f.replace('.mdx', '')}`);
  return {
    paths,
    fallback: false,
  };
};
