import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { RichText, RichTextBlock } from '../../components/RichText';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { Layout } from '../../components/layout/Layout';
import { ContentBlock, ContentBlockType } from '../../components/ContentBlock';

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

interface BlogPostProps {
  data: {
    title: RichTextBlock[];
    body: ContentBlockType[];
  };
}

const BlogPost: FC<BlogPostProps> = ({ data }) => (
  <Layout seo={{ pageTitle: data.title[0].text ?? 'Matt Gilbride' }}>
    <article css={styleContainer}>
      <div>
        <RichText blocks={data.title} />
        {data.body.map((block: ContentBlockType) => (
          <ContentBlock key={JSON.stringify(block)} block={block} />
        ))}
      </div>
    </article>
  </Layout>
);

export default BlogPost;

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const dataDir = path.join(process.cwd(), 'src', 'data', 'blog-posts');
  const filePath = path.join(dataDir, `${params?.uid}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const post = JSON.parse(raw);
  return {
    props: {
      data: { title: post.title, body: post.body },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dataDir = path.join(process.cwd(), 'src', 'data', 'blog-posts');
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  const paths = files.map((f) => `/blog/${f.replace('.json', '')}`);
  return {
    paths,
    fallback: false,
  };
};
