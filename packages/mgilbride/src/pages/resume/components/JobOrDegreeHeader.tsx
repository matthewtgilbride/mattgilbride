import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeColor,
  makeFontSize,
  makeSize,
  makeSpace,
  makeResponsiveObject,
} from '../../../utils/design';

export interface JobHeaderProps {
  orgCopy: string;
  titleCopy: string;
  dateCopy: string;
  imgUrl?: string;
  imgAlt?: string;
}

export const styleContainer: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gridTemplateAreas: `
    'top top'
    'bottomLeft bottomRight'
  `,
  gridRowGap: makeSpace('sm'),
  alignItems: 'center',
  h5: {
    margin: 0,
    fontWeight: 'normal',
    fontSize: makeFontSize('xs'),
  },
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridTemplateAreas: `
      'left middle right'
      `,
      gridTemplateColumns: '1fr 7fr 2fr',
    },
  }),
};

const styleTitle: CSSObject = {
  gridArea: 'top',
  color: makeColor('secondary'),
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridArea: 'middle',
    },
  }),
};

const styleIcon: CSSObject = {
  borderRadius: '50%',
  height: makeSize('lg'),
  width: makeSize('lg'),
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  background: makeColor('light'),
  gridArea: 'bottomLeft',
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridArea: 'left',
    },
  }),
};

const styleOrg: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '2 / 3',
  gridArea: 'bottomRight',
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridArea: 'right',
      justifySelf: 'flex-end',
    },
  }),
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
