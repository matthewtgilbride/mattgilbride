import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeFontSize, makeSpace, makeColor } from '../../../utils/design';

const styleContainer: CSSObject = {
  padding: `
    ${makeSpace('xxs')} 
    ${makeSpace('md')} 
    ${makeSpace('xl')} 
    ${makeSpace('md')}
  `,
  h5: {
    margin: `${makeSpace('xs')} 0`,
    color: makeColor('secondary'),
  },
  ul: {
    backgroundColor: makeColor('gray', -2),
    borderRadius: makeSpace('xs'),
    padding: `0 ${makeSpace('xxs')}`,
    margin: `${makeSpace('xs')} 0 0 0`,
  },
  li: {
    padding: `${makeSpace('xxs')} 0`,
    fontSize: makeFontSize('sm'),
    listStyleType: 'none',
  },
};

export const SkillBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
