import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { GetStaticProps } from 'next';
import { RichTextBlock } from 'prismic-reactjs';
import { makeSize, makeSpace } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { PrismicClient, PrismicContent, PrismicImage } from '../prismic';
import { NextImageContainer } from '../components/NextImageContainer';

const styleContainer: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const styleNextImage: CSSObject = {
  maxWidth: '40vh',
  margin: `${makeSpace('xs')} 0`,
};

const styleContent: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xxs')} 0`,
  },
  p: {
    textAlign: 'center',
    margin: `${makeSpace('xxs')} 0`,
  },
};

interface HomeDocument {
  greeting: RichTextBlock[];
  copy: RichTextBlock[];
  profile: PrismicImage;
}

interface HomeProps {
  data: HomeDocument;
}

const Home: FC<HomeProps> = ({ data }) => (
  <Layout seo={{ pageTitle: 'Home' }}>
    <div css={styleContainer}>
      <div css={styleContent}>
        <PrismicContent richText={data.greeting} />
        <NextImageContainer
          cssProp={styleNextImage}
          src={data.profile.url}
          alt={data.profile.alt}
          width={data.profile.dimensions.width}
          height={data.profile.dimensions.height}
        />
        <div>
          <PrismicContent richText={data.copy} />
        </div>
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  preview = null,
  previewData = {},
}) => {
  const doc = await PrismicClient().getSingle('home', previewData);
  return {
    props: {
      data: doc.data,
      preview,
    },
  };
};

export default Home;
