import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { usePalette } from '../../utils/usePalette';

const styleFooter = (palette: Palette): CSSObject => ({
  backgroundColor: palette.contrast(),
  display: 'flex',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  justifyContent: 'space-between',
  margin: `${makeSpace('xxs')} auto`,
  padding: `0 ${makeSpace('xxs')}`,
  div: {
    display: 'flex',
    alignSelf: 'center',
  },
  a: {
    textDecoration: 'none',
  },
});

const styleButton = (palette: Palette): CSSObject => ({
  backgroundColor: palette.primary(),
  cursor: 'pointer',
  borderColor: palette.accent(-25),
  borderStyle: 'solid',
  borderRadius: 4,
  width: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: makeSpace('xxs'),
  marginLeft: makeSpace('xxs'),
  color: palette.accent(),
  ':hover,:active': {
    backgroundColor: palette.primary(-25),
  },
  '> p': {
    padding: `0 ${makeSpace('xxs')}`,
  },
  '> img': {
    height: makeSize('xs'),
  },
});

export const Footer: FC = () => {
  const { palette } = usePalette();
  return (
    <div css={styleFooter(palette)}>
      <div>
        <p>Need a copy?</p>
      </div>
      <div>
        <a href="/static/Gilbride_Matthew Resume_2021_03.docx">
          <button css={styleButton(palette)}>
            <img src="/assets/svg/doc.svg" alt="doc" />
            <p>.docx</p>
          </button>
        </a>
        <a href="/static/Gilbride_Matthew Resume_2021_03.pdf">
          <button css={styleButton(palette)}>
            <img src="/assets/svg/pdf.svg" alt="pdf" />
            <p>.pdf</p>
          </button>
        </a>
      </div>
    </div>
  );
};
