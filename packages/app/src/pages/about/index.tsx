import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { GetStaticProps } from 'next';
import { RichTextBlock } from 'prismic-reactjs';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { PrismicClient, PrismicContent, PrismicImage } from '../../prismic';
import { NextImageContainer } from '../../components/NextImageContainer';

const styleContainer: CSSObject = {
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  h2: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('md')} 0`,
    textAlign: 'center',
  },
  h4: {
    fontWeight: 'bold',
    fontSize: makeSize('h4'),
    margin: `${makeSpace('sm')} 0`,
    textAlign: 'center',
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

const styleNextImage: CSSObject = {
  maxWidth: '40vh',
  padding: `${makeSpace('sm')} 0`,
  margin: '0 auto',
};

type Slice =
  | {
      slice_type: 'text';
      primary: {
        text: RichTextBlock[];
      };
    }
  | {
      slice_type: 'image';
      primary: {
        image: PrismicImage;
      };
    };

const SliceComponent: FC<{ slice: Slice }> = ({ slice }) => {
  if (slice.slice_type === 'text') {
    return <PrismicContent richText={slice.primary.text} />;
  }
  return (
    <NextImageContainer
      cssProp={styleNextImage}
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      width={slice.primary.image.dimensions.width}
      height={slice.primary.image.dimensions.height}
    />
  );
};

interface AboutProps {
  data: {
    body: Slice[];
  };
}

const About: FC<AboutProps> = ({ data }) => (
  <Layout seo={{ pageTitle: 'About' }}>
    <div css={styleContainer}>
      {data.body.map((slice: Slice) => (
        <SliceComponent key={JSON.stringify(slice)} slice={slice} />
      ))}
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<AboutProps> = async ({
  preview = null,
  previewData = {},
}) => {
  const doc = await PrismicClient().getSingle('about', previewData);
  return {
    props: {
      data: doc.data,
      preview,
    },
  };
};

export default About;
