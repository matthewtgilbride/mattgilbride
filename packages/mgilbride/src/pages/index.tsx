import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../components/Layout';
import { makeColor } from '../utils/design';
import profilePhoto from '../assets/images/profile_circle.png'

const clazz: CSSObject = {
  backgroundColor: makeColor('gray', -2),
  color: makeColor('light'),
  height: '100vh',
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  '& img': {
    height: 200,
    width: 200,
  }
};

const Home: FC = () => (
  <Layout>
    <div css={clazz}>
      Yo
      <img src={profilePhoto} alt="Profile Photo" />
    </div>
  </Layout>
);

export default Home; // eslint-disable-line import/no-default-export
