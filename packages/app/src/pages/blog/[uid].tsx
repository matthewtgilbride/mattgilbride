import React, { FC } from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import { CSSObject } from '@emotion/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from 'prismic-javascript';
import { QueryOptions } from 'prismic-javascript/types/ResolvedApi';
import { PrismicClient, PrismicContent } from '../../prismic';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { Layout } from '../../components/layout/Layout';
import { Slice, SliceType } from '../../components/Slice';

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
    body: SliceType[];
  };
}

const BlogPost: FC<BlogPostProps> = ({ data }) => (
  <Layout seo={{ pageTitle: data.title[0].text ?? 'Matt Gilbride' }}>
    <article css={styleContainer}>
      <div>
        <PrismicContent richText={data.title} />
        {data.body.map((slice: SliceType) => (
          <Slice key={JSON.stringify(slice)} slice={slice} />
        ))}
      </div>
    </article>
  </Layout>
);

export default BlogPost;

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
  preview = false,
  previewData = {},
}) => {
  const post = await PrismicClient().getByUID(
    'blog_post',
    params?.uid as string,
    previewData as QueryOptions,
  );
  return {
    props: {
      data: post.data,
      preview,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await PrismicClient().query(
    Prismic.Predicates.at('document.type', 'blog_post'),
  );

  const paths: string[] = allPosts.results.map((p) => `/blog/${p.uid}`);

  return {
    paths,
    fallback: process.env.NODE_ENV === 'development',
  };
};
