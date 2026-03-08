import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { Slice, SliceType } from '../../components/Slice';
import aboutData from '../../data/about.json';

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

export const getStaticProps = async () => ({
  props: {
    data: aboutData,
  },
});

export default About;
