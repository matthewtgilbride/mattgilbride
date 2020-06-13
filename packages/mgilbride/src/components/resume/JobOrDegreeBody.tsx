import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeFontSize, makeSpace } from '../../utils/design';

const styleContainer: CSSObject = {
  padding: `${makeSpace('xxs')} 0 ${makeSpace('lg')} 0`,
  p: {
    fontSize: makeFontSize('sm'),
    padding: `0 ${makeSpace('md')}`,
  },
};

export const JobOrDegreeBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);