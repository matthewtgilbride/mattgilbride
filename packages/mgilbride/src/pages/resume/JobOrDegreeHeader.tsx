import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeFontSize, makeSpace } from '../../utils/design';

export const styleContainer: CSSObject = {
  '> h3': {
    marginBottom: 0,
  },
  h5: {
    margin: `${makeSpace('xxs')} 0 0 0`,
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    ' > h5': {
      fontWeight: 'normal',
      fontSize: makeFontSize('xs'),
      margin: 0,
    },
  },
};

export interface JobHeaderProps {
  orgCopy: string;
  locationCopy: string;
  titleCopy: string;
  dateCopy: string;
}

export const JobOrDegreeHeader: FC<JobHeaderProps> = ({
  orgCopy,
  dateCopy,
  locationCopy,
  titleCopy,
}) => (
  <div css={styleContainer}>
    <h3>{titleCopy}</h3>
    <h5>{orgCopy}</h5>
    <div>
      <h5>{locationCopy}</h5>
      <h5>{dateCopy}</h5>
    </div>
  </div>
);
