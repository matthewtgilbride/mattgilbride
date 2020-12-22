import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  palette,
  makeSize,
  makeSpace,
  makeResponsiveObject,
} from '../../../utils/design';

export interface JobHeaderProps {
  orgCopy: string;
  orgUrl: string;
  imgUrl: string;
  imgSize: number;
  titleCopy: string;
  dateCopy: string;
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
  h3: {
    fontStyle: 'italic',
    fontSize: makeSize('md'),
  },
  h5: {
    margin: 0,
    fontWeight: 'normal',
    fontSize: makeSize('xs'),
  },
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridTemplateAreas: `
      'left middle right'
      `,
      gridTemplateColumns: '1fr 6fr 2fr',
    },
  }),
};

const styleTitle: CSSObject = {
  gridArea: 'top',
  color: palette.primary(),
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridArea: 'middle',
    },
  }),
};

const styleIcon: CSSObject = {
  borderRadius: '50%',
  height: makeSpace(44, 'px'),
  width: makeSpace(44, 'px'),
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  background: palette.text(),
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
  textTransform: 'uppercase',
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridArea: 'right',
      justifySelf: 'flex-end',
      textAlign: 'right',
    },
  }),
};

const styleDate: CSSObject = {
  color: palette.secondary(),
  textTransform: 'initial',
};

export const ExperienceHeader: FC<JobHeaderProps> = ({
  orgCopy,
  orgUrl,
  dateCopy,
  titleCopy,
  imgUrl,
  imgSize,
}) => (
  <div css={styleContainer}>
    <div css={styleIcon}>
      <img src={imgUrl} alt={orgCopy} height={imgSize} width={imgSize} />
    </div>
    <div css={styleTitle}>
      <h3>{titleCopy}</h3>
    </div>
    <div css={styleOrg}>
      <h5>
        <a href={orgUrl}>{orgCopy}</a>
      </h5>
      <h5 css={styleDate}>{dateCopy}</h5>
    </div>
  </div>
);