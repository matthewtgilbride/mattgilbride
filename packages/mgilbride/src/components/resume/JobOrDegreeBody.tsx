import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import { makeSize, makeSpace } from '../../utils/design';

const styleContainer: CSSObject = {
  padding: `${makeSpace('xxs')} 0 ${makeSpace('lg')} 0`,
  p: {
    fontSize: makeSize('sm'),
    padding: `0 ${makeSpace('md')}`,
  },
  li: {
    marginTop: makeSpace('sm'),
  },
};

export const JobOrDegreeBody: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
