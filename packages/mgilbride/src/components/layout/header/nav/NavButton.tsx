import React, { EventHandler, FC, SyntheticEvent } from 'react';
import { CSSObject } from '@emotion/core';
import { animated, useSpring } from 'react-spring';
import { makeSize, palette } from '../../../../utils/design';

export const styleMenuButton = (open: boolean): CSSObject => ({
  backgroundColor: 'transparent',
  border: 'none',
  height: makeSize('md'),
  width: makeSize('md'),
  svg: {
    height: '100%',
    line: {
      display: open ? undefined : 'none',
    },
    rect: {
      display: open ? 'none' : undefined,
    },
  },
});

export interface MenuButtonProps {
  open: boolean;
  onClick: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}

export const NavButton: FC<MenuButtonProps> = ({ open, onClick }) => {
  const spring = useSpring({
    from: {
      stroke: open ? palette.text() : palette.contrast(),
      fill: open ? palette.text() : palette.contrast(),
    },
    to: {
      stroke: open ? palette.contrast() : palette.text(),
      fill: open ? palette.contrast() : palette.text(),
    },
  });

  return (
    <button css={styleMenuButton(open)} onClick={onClick}>
      <svg viewBox="0 0 100 100">
        <animated.line
          style={spring}
          x1="5"
          x2="95"
          y1="0"
          y2="90"
          strokeWidth="10"
        />
        <animated.line
          style={spring}
          x1="5"
          x2="95"
          y1="90"
          y2="0"
          strokeWidth="10"
        />
        <animated.rect style={spring} y="10" width="100" height="10" />
        <animated.rect style={spring} y="45" width="100" height="10" />
        <animated.rect style={spring} y="80" width="100" height="10" />
      </svg>
    </button>
  );
};
