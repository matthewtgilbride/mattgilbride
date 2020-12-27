import React, { FC, Fragment } from 'react';
import { CSSObject } from '@emotion/core';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { RichTextBlock } from 'prismic-reactjs';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import {
  linkResolver,
  PrismicClient,
  PrismicContent,
  PrismicLink,
} from '../../prismic';

const styleContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  padding: makeSpace('md'),
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  h2: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('md')} 0`,
    textAlign: 'center',
  },
  a: {
    textAlign: 'center',
    marginBottom: makeSpace('md'),
  },
  h3: {
    margin: `${makeSpace('sm')} 0`,
    textAlign: 'center',
  },
};

interface BlogProps {
  data: {
    body: {
      primary: { year: RichTextBlock[] };
      items: {
        title: string;
        link: PrismicLink;
      }[];
    }[];
  };
}

const Blog: FC<BlogProps> = ({ data }) => (
  <Layout seo={{ pageTitle: 'Blog' }}>
    <div css={styleContainer}>
      {data.body.map(({ items, primary }) => (
        <Fragment key={JSON.stringify({ items, primary })}>
          <PrismicContent richText={primary.year} />
          {items.map((item) => {
            if (item.link.link_type === 'Web') {
              return (
                <a key={item.title} href={item.link.url}>
                  {item.title}
                </a>
              );
            }
            return (
              <Link key={item.title} href={linkResolver(item.link)}>
                {item.title}
              </Link>
            );
          })}
        </Fragment>
      ))}
      <h3>...more coming soon...</h3>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<BlogProps> = async ({
  preview = null,
  previewData = {},
}) => {
  const doc = await PrismicClient().getSingle('blog', previewData);
  return {
    props: {
      data: doc.data,
      preview,
    },
  };
};

export default Blog;
