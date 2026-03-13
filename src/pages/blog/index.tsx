import React, { FC, Fragment } from 'react';
import { CSSObject } from '@emotion/react';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { blogIndex, BlogYear } from '../../content/blog-index';

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
  data: BlogYear[];
}

const Blog: FC<BlogProps> = ({ data }) => (
  <Layout seo={{ pageTitle: 'Blog' }}>
    <div css={styleContainer}>
      {data.map(({ year, posts }) => (
        <Fragment key={year}>
          <h2>{year}</h2>
          {posts.map((post) =>
            post.href.startsWith('http') ? (
              <a key={post.title} href={post.href}>
                {post.title}
              </a>
            ) : (
              <Link key={post.title} href={post.href}>
                {post.title}
              </Link>
            ),
          )}
        </Fragment>
      ))}
    </div>
  </Layout>
);

export const getStaticProps = async () => ({
  props: {
    data: blogIndex,
  },
});

export default Blog;
