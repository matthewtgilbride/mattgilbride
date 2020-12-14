import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeSpace,
  responsiveBreakpoints,
  makeSize,
  palette,
} from '../../utils/design';
import { Layout } from '../layout/Layout';

const styleContainer: CSSObject = {
  display: 'grid',
  gridTemplateRows: 'min-content',
  justifySelf: 'center',
  justifyItems: 'center',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  // because shoemaker is a long word in iphone SE
  wordBreak: 'break-word',
  h1: {
    fontSize: makeSize('h1'),
    margin: `${makeSpace('xl')} 0`,
  },
  h2: {
    fontSize: makeSize('h2'),
    margin: `${makeSpace('lg')} 0`,
  },
  h4: {
    fontSize: makeSize('h4'),
    fontWeight: 'bold',
    margin: `${makeSpace('md')} 0`,
  },
  'h1, h2': {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  a: {
    textDecoration: 'underline',
    color: palette.text(),
  },
  ul: {
    paddingInlineStart: makeSpace('sm'),
    li: {
      margin: `${makeSpace('md')} 0`,
      listStyleType: 'disc',
    },
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

export const Shoemaker: FC = ({ children }) => (
  <Layout>
    <article css={styleContainer}>
      <div>{children}</div>
    </article>
  </Layout>
);
