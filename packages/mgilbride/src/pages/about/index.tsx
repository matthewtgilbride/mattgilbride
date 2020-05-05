import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Link } from 'gatsby';
import { Layout } from '../../components/Layout';
import profilePhoto from '../../assets/images/profile_circle.png';

const styleContainer: CSSObject = {
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  img: {
    height: '50vh',
    paddingBottom: 16,
  },
  p: {
    textAlign: 'right',
    padding: '8px 0',
    margin: 0,
    a: {
      textDecoration: 'underline',
      textTransform: 'initial',
    },
  },
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      Yo this shit is under construction
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
