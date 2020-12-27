import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { makeSpace } from '../../../utils/design';
import { usePalette } from '../../../utils/usePalette';

const styleContainer: CSSObject = {
  display: 'flex',
  alignItems: 'center',
};

const styleIcon = (palette: Palette): CSSObject => ({
  borderRadius: '50%',
  height: makeSpace(44, 'px'),
  width: makeSpace(44, 'px'),
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  background: palette.primary(),
});

const styleText: CSSObject = {
  paddingLeft: makeSpace('md'),
};

export const SkillHeader: FC<{
  imgSrc: string;
  imgSize: number;
  text: string;
}> = ({ imgSrc, imgSize, text }) => {
  const { palette } = usePalette();
  return (
    <h3 css={styleContainer}>
      <div css={styleIcon(palette)}>
        <img src={imgSrc} alt={text} height={imgSize} width={imgSize} />
      </div>
      <div css={styleText}>{text}</div>
    </h3>
  );
};
