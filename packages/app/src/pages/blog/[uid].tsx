import React, { FC } from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import { CSSObject } from '@emotion/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from 'prismic-javascript';
import { client, PrismicContent } from '../../prismic';
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
  ul: {
    paddingInlineStart: makeSpace('sm'),
    li: {
      margin: `${makeSpace('md')} 0`,
      listStyleType: 'disc',
    },
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

interface BlogPostProps {
  data: {
    title: RichTextBlock[];
    body: [
      {
        primary: {
          text: RichTextBlock[];
        };
      },
    ];
  };
}

const BlogPost: FC<BlogPostProps> = ({ data }) => (
  <Layout>
    <article css={styleContainer}>
      <div>
        <PrismicContent richText={data.title} />
        <PrismicContent richText={data.body[0].primary.text} />
      </div>
    </article>
  </Layout>
);

export default BlogPost;

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const post = await client.getByUID('blog_post', params?.uid as string, {});
  return {
    props: {
      data: post.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
  );

  const paths: string[] = allPosts.results.map((p) => `/blog/${p.uid}`);

  return {
    paths,
    fallback: false,
  };
};
