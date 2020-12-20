import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { GetStaticProps } from 'next';
import { RichTextBlock } from 'prismic-reactjs';
import { makeSize, makeSpace } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { client, PrismicContent } from '../prismic';
import { ImgBlur } from '../components/ImgBlur';

const styleContainer: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const styleContent: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  img: {
    maxWidth: '40vh',
    padding: makeSpace('lg'),
  },
  h1: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xxs')} 0`,
  },
  p: {
    textAlign: 'center',
    margin: `${makeSpace('sm')} 0`,
  },
};

interface HomeDocument {
  greeting: RichTextBlock[];
  copy: RichTextBlock[];
  profile: {
    url: string;
    alt: string;
  };
}

interface HomeProps {
  data: HomeDocument;
}

const Home: FC<HomeProps> = ({ data }) => (
  <Layout>
    <div css={styleContainer}>
      <div css={styleContent}>
        <PrismicContent richText={data.greeting} />
        <ImgBlur url={data.profile.url} alt={data.profile.alt} />
        <div>
          <PrismicContent richText={data.copy} />
        </div>
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const doc = await client.getSingle('home', {});
  return {
    props: {
      data: doc.data,
    },
  };
};

export default Home;
