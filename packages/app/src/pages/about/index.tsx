import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { GetStaticProps } from 'next';
import { QueryOptions } from 'prismic-javascript/types/ResolvedApi';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { PrismicClient } from '../../prismic';
import { Slice, SliceType } from '../../components/Slice';

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

interface AboutProps {
  data: {
    body: SliceType[];
  };
}

const About: FC<AboutProps> = ({ data }) => (
  <Layout seo={{ pageTitle: 'About' }}>
    <div css={styleContainer}>
      {data.body.map((slice: SliceType) => (
        <Slice key={JSON.stringify(slice)} slice={slice} />
      ))}
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<AboutProps> = async ({
  preview = null,
  previewData = {},
}) => {
  const doc = await PrismicClient().getSingle(
    'about',
    previewData as QueryOptions,
  );
  return {
    props: {
      data: doc.data,
      preview,
    },
  };
};

export default About;
