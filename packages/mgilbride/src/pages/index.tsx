import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../components/Layout';
import { makeResponsiveObject } from '../utils/design';
import profilePhoto from '../assets/images/profile_circle.png';

const styleContainer: CSSObject = {
  height: '100vh',
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
};

const styleImage: CSSObject = {
  height: 200,
  width: 200,
  ...makeResponsiveObject({
    beginAt: 'phoneLg',
    style: {
      height: 400,
      width: 400,
    },
  }),
};

const Home: FC = () => (
  <Layout>
    <div css={styleContainer}>
      Yo
      <img css={styleImage} src={profilePhoto} alt="Profile" />
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
