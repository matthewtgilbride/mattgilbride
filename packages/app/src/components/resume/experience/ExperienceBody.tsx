import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { makeSize, makeSpace } from '../../../utils/design';
import { usePalette } from '../../../utils/usePalette';

const styleContainer = (palette: Palette): CSSObject => ({
  margin: `${makeSpace('xl')} 0 ${makeSpace('xl')} 0`,
  h5: {
    color: palette.primary(),
  },
  h6: {
    color: palette.secondary(),
    fontSize: makeSize('xs'),
  },
  p: {
    fontSize: makeSize('sm'),
    margin: `${makeSpace('sm')} 0`,
  },
  ul: {
    paddingInlineStart: makeSpace('sm'),
  },
  li: {
    margin: `${makeSpace('sm')} 0`,
    listStyleType: 'disc',
  },
});

export const ExperienceBody: FC = ({ children }) => {
  const { palette } = usePalette();
  return <div css={styleContainer(palette)}>{children}</div>;
};
