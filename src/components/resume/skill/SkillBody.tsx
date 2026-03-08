import React, { FC, PropsWithChildren } from 'react';
import { CSSObject } from '@emotion/react';
import { Palette } from 'design-system/utils/color/palette';
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
    backgroundColor: palette.contrast(-10),
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

export const SkillBody: FC<PropsWithChildren> = ({ children }) => {
  const { palette } = usePalette();
  return <div css={styleContainer(palette)}>{children}</div>;
};
