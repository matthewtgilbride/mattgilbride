import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeColor, makeSize, makeSpace } from '../../../utils/design';

const styleContainer: CSSObject = {
  display: 'flex',
  alignItems: 'center',
};

const styleIcon: CSSObject = {
  borderRadius: '50%',
  height: makeSize('lg'),
  width: makeSize('lg'),
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  background: makeColor('secondary'),
};

const styleText: CSSObject = {
  paddingLeft: makeSpace('md'),
};

export const SkillHeader: FC<{
  imgSrc: string;
  imgAlt: string;
  text: string;
}> = ({ imgSrc, imgAlt, text }) => (
  <h3 css={styleContainer}>
    <div css={styleIcon}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <div css={styleText}>{text}</div>
  </h3>
);
