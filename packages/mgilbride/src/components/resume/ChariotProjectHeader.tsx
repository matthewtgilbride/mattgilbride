import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeColor,
  makeSize,
  makeSpace,
  makeResponsiveObject,
} from '../../utils/design';

const styleContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingLeft: makeSpace('md'),
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      flexDirection: 'row',
    },
  }),
};

const styleDescription: CSSObject = {
  textTransform: 'uppercase',
  color: makeColor('primary'),
  margin: 'initial',
};

const styleDate: CSSObject = {
  color: makeColor('secondary'),
  fontSize: makeSize('xs'),
  fontWeight: 'normal',
  margin: 'initial',
};

export const ChariotProjectHeader: FC<{
  description: string;
  date: string;
}> = ({ description, date }) => (
  <div css={styleContainer}>
    <h5 css={styleDescription}>{description}</h5>
    <h5 css={styleDate}>{date}</h5>
  </div>
);
