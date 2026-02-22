import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from './layout/Layout';
import { makeSpace } from '../utils/design';

const styleContainer: CSSObject = {
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  img: {
    height: '50vh',
    paddingBottom: makeSpace('md'),
  },
  p: {
    textAlign: 'right',
    padding: `${makeSpace('xxs')} 0`,
    margin: 0,
    a: {
      textTransform: 'initial',
    },
  },
};

const UnderConstruction: FC = () => (
  <Layout seo={{ pageTitle: 'Under Construction' }}>
    <div css={styleContainer}>Yo this shit is under construction</div>
  </Layout>
);

export default UnderConstruction; // eslint-disable-line import/no-default-export
