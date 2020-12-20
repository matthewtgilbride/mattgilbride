import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeSize, makeSpace, palette } from '../../utils/design';

const styleContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: `${makeSpace('md')} 0`,
};

const styleDescription: CSSObject = {
  textTransform: 'uppercase',
  color: palette.primary(),
  margin: 'initial',
};

const styleDate: CSSObject = {
  color: palette.secondary(),
  fontSize: makeSize('xs'),
  fontWeight: 'normal',
  margin: 'initial',
  alignSelf: 'flex-start',
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
