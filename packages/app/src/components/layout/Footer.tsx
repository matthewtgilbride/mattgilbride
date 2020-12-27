import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { makeSize, makeSpace, palette } from 'utils/design';
import { Github, Linkedin } from '../svg/generated';

const clazz: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  a: {
    margin: `0 ${makeSpace('lg')}`,
    height: makeSize('md'),
    width: makeSize('md'),
  },
  svg: {
    fill: palette.text(),
    height: '100%',
    width: '100%',
  },
};

export const Footer: FC = () => (
  <div css={clazz}>
    <a href="https://github.com/matthewtgilbride" aria-label="github">
      <Github />
    </a>
    <a
      href="https://www.linkedin.com/in/matthewgilbride/"
      aria-label="linkedin"
    >
      <Linkedin />
    </a>
  </div>
);
