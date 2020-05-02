import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../components/Layout';
import profilePhoto from '../assets/images/profile_circle.png';

const styleContainer: CSSObject = {
  height: '100vh',
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  img: {
    height: '50vh',
  }
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      Yo
      <img src={profilePhoto} alt="Profile" />
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
