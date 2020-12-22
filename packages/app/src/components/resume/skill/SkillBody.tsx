import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { palette, makeSize, makeSpace } from '../../../utils/design';

const styleContainer: CSSObject = {
  padding: `
    ${makeSpace('xxs')} 
    ${makeSpace('md')} 
    ${makeSpace('xl')} 
    ${makeSpace('md')}
  `,
  h5: {
    margin: `${makeSpace('xs')} 0`,
    color: palette.secondary(),
  },
  ul: {
    backgroundColor: palette.gray(-50),
    borderRadius: makeSpace('xs'),
    padding: `${makeSpace('xxs')} ${makeSpace('xs')}`,
    margin: `${makeSpace('xs')} 0 0 0`,
  },
  li: {
    padding: `${makeSpace('xxs')} 0`,
    fontSize: makeSize('sm'),
    listStyleType: 'none',
  },
};

export const SkillBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
