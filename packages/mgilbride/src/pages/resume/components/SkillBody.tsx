import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeFontSize, makeSpace } from '../../../utils/design';

const styleContainer: CSSObject = {
  padding: `
    ${makeSpace('xxs')} 
    ${makeSpace('md')} 
    ${makeSpace('xl')} 
    ${makeSpace('md')}
  `,
  h5: {
    margin: `${makeSpace('xs')} 0 0 0`,
  },
  ul: {
    padding: `${makeSpace('xxs')} 0`,
    margin: 0,
  },
  li: {
    margin: `${makeSpace('xxs')} 0`,
    fontSize: makeFontSize('sm'),
    listStyleType: 'none',
  },
};

export const SkillBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
