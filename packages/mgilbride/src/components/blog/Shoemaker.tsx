import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeSpace, responsiveBreakpoints, makeSize } from '../../utils/design';
import { Layout } from '../layout/Layout';

const styleContainer: CSSObject = {
  display: 'grid',
  gridTemplateRows: 'min-content',
  justifySelf: 'center',
  justifyItems: 'center',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  // because shoemaker is a long word in iphone SE
  wordWrap: 'break-word',
  h1: {
    fontSize: makeSize('h1'),
  },
  h2: {
    fontSize: makeSize('h2'),
  },
  h4: {
    fontSize: makeSize('h4'),
  },
  'h1, h2': {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  a: {
    textDecoration: 'underline',
  },
  ul: {
    paddingInlineStart: makeSpace('sm'),
    li: {
      margin: `${makeSpace('md')} 0`,
    },
  },
};

export const Shoemaker: FC = ({ children }) => (
  <Layout>
    <article css={styleContainer}>
      <div>{children}</div>
    </article>
  </Layout>
);
