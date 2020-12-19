import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeSize, makeSpace } from '../../utils/design';

const styleContainer: CSSObject = {
  margin: `${makeSpace('xl')} 0 ${makeSpace('xl')} 0`,
  p: {
    fontSize: makeSize('sm'),
    margin: `${makeSpace('sm')} 0`,
  },
  ul: {
    paddingInlineStart: makeSpace('lg'),
  },
  li: {
    marginTop: makeSpace('sm'),
    listStyleType: 'disc',
  },
};

export const JobOrDegreeBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
