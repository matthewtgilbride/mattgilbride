import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { makeSize, makeSpace } from '../../../utils/design';
import { usePalette } from '../../../utils/usePalette';

const styleContainer = (palette: Palette): CSSObject => ({
  padding: `
    ${makeSpace('xxs')} 
    ${makeSpace('md')} 
    ${makeSpace('xl')} 
    ${makeSpace('md')}
  `,
  h5: {
    margin: `${makeSpace('xs')} 0`,
    color: palette.secondary(),
  },
  ul: {
    backgroundColor: palette.gray(-50),
    borderRadius: makeSpace('xs'),
    padding: `${makeSpace('xxs')} ${makeSpace('xs')}`,
    margin: `${makeSpace('xs')} 0 0 0`,
  },
  li: {
    padding: `${makeSpace('xxs')} 0`,
    fontSize: makeSize('sm'),
    listStyleType: 'none',
  },
});

export const SkillBody: FC = ({ children }) => {
  const { palette } = usePalette();
  return <div css={styleContainer(palette)}>{children}</div>;
};
