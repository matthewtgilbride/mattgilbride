import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  palette,
  makeSize,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';

const styleFooter: CSSObject = {
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
};

const styleButton: CSSObject = {
  backgroundColor: palette.primary(-25),
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
  color: palette.text(),
  ':hover,:active': {
    backgroundColor: palette.primary(),
  },
  '> p': {
    padding: `0 ${makeSpace('xxs')}`,
  },
  '> img': {
    height: makeSize('xs'),
  },
};

export const Footer: FC = () => (
  <div css={styleFooter}>
    <div>
      <p>Need a copy?</p>
    </div>
    <div>
      <a href="/static/Gilbride_Matthew Resume_2020_07.docx">
        <button css={styleButton}>
          <img src="/assets/svg/doc.svg" alt="doc" />
          <p>.docx</p>
        </button>
      </a>
      <a href="/static/Gilbride_Matthew Resume_2020_07.pdf">
        <button css={styleButton}>
          <img src="/assets/svg/pdf.svg" alt="pdf" />
          <p>.pdf</p>
        </button>
      </a>
    </div>
  </div>
);
