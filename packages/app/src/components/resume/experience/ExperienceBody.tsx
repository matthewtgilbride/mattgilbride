import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeSize, makeSpace, palette } from '../../../utils/design';

const styleContainer: CSSObject = {
  margin: `${makeSpace('xl')} 0 ${makeSpace('xl')} 0`,
  h5: {
    color: palette.primary(),
  },
  h6: {
    color: palette.secondary(),
    fontSize: makeSize('xs'),
  },
  p: {
    fontSize: makeSize('sm'),
    margin: `${makeSpace('sm')} 0`,
  },
  ul: {
    paddingInlineStart: makeSpace('sm'),
  },
  li: {
    margin: `${makeSpace('sm')} 0`,
    listStyleType: 'disc',
  },
};

export const ExperienceBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
