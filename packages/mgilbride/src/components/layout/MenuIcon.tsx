import React, { CSSProperties, FC } from 'react';
import { animated } from 'react-spring';
import { CSSObject } from '@emotion/core';

const styleMenu = (open: boolean): CSSObject => ({
  display: open ? 'none' : undefined,
});

const styleClose = (open: boolean): CSSObject => ({
  display: open ? undefined : 'none',
});

export const MenuIcon: FC<{ open: boolean; style: CSSProperties }> = ({
  open,
  style,
}) => (
  <>
    <svg viewBox="0 0 100 100" width="40" height="40">
      <animated.line
        css={styleClose(open)}
        style={style}
        x1="0"
        x2="80"
        y1="0"
        y2="80"
        strokeWidth="10"
      />
      <animated.line
        css={styleClose(open)}
        style={style}
        x1="0"
        x2="80"
        y1="80"
        y2="0"
        strokeWidth="10"
      />
      <animated.rect
        css={styleMenu(open)}
        style={style}
        width="100"
        height="10"
      />
      <animated.rect
        css={styleMenu(open)}
        style={style}
        y="30"
        width="100"
        height="10"
      />
      <animated.rect
        css={styleMenu(open)}
        style={style}
        y="60"
        width="100"
        height="10"
      />
    </svg>
  </>
);
