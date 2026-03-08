import React, { FC, Fragment } from 'react';
import { CSSObject } from '@emotion/react';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import {
  PrismicContent,
  PrismicLink,
  RichTextBlock,
} from '../../components/PrismicContent';
import blogData from '../../data/blog.json';

const linkResolver = (doc: { type: string; uid?: string }): string => {
  switch (doc.type) {
    case 'blog_post':
      return `/blog/${doc.uid}`;
    default:
      return '/';
  }
};

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
                <a key={item.title} href={(item.link as any).url}>
                  {item.title}
                </a>
              );
            }
            return (
              <Link key={item.title} href={linkResolver(item.link as any)}>
                {item.title}
              </Link>
            );
          })}
        </Fragment>
      ))}
    </div>
  </Layout>
);

export const getStaticProps = async () => ({
  props: {
    data: blogData,
  },
});

export default Blog;
