import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import { makeSize, makeSpace } from '../utils/design';
import { Layout } from '../components/layout/Layout';
import { RichText, ContentImage, RichTextBlock } from '../components/RichText';
import { NextImageContainer } from '../components/NextImageContainer';
import homeData from '../data/home.json';

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
  profile: ContentImage;
}

interface HomeProps {
  data: HomeDocument;
}

const Home: FC<HomeProps> = ({ data }) => (
  <Layout seo={{ pageTitle: 'Home' }}>
    <div css={styleContainer}>
      <div css={styleContent}>
        <RichText blocks={data.greeting} />
        <NextImageContainer
          cssProp={styleNextImage}
          src={data.profile.url}
          alt={data.profile.alt}
          width={data.profile.dimensions.width}
          height={data.profile.dimensions.height}
        />
        <div>
          <RichText blocks={data.copy} />
        </div>
      </div>
    </div>
  </Layout>
);

export const getStaticProps = async () => ({
  props: {
    data: homeData,
  },
});

export default Home;
