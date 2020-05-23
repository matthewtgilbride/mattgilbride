import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeColor,
  makeFontSize,
  makeSize,
  makeSpace,
} from '../../utils/design';

export const styleContainer: CSSObject = {
  display: 'flex',
  alignItems: 'center',
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
      fontSize: makeFontSize('sm'),
      margin: 0,
    },
  },
};

export interface JobHeaderProps {
  orgCopy: string;
  locationCopy: string;
  titleCopy: string;
  dateCopy: string;
  imgUrl?: string;
  imgAlt?: string;
}

const styleIcon: CSSObject = {
  borderRadius: '50%',
  height: makeSize('lg'),
  width: makeSize('lg'),
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  background: makeColor('light'),
};

const styleTitle: CSSObject = {
  paddingLeft: makeSpace('md'),
};

const styleOrg: CSSObject = {
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'right',
};

export const JobOrDegreeHeader: FC<JobHeaderProps> = ({
  orgCopy,
  dateCopy,
  titleCopy,
  imgUrl,
  imgAlt,
}) => (
  <div css={styleContainer}>
    <div css={styleIcon}>{imgUrl && <img src={imgUrl} alt={imgAlt} />}</div>
    <div css={styleTitle}>
      <h3>{titleCopy}</h3>
    </div>
    <div css={styleOrg}>
      <h5>{orgCopy}</h5>
      <h5>{dateCopy}</h5>
    </div>
  </div>
);
