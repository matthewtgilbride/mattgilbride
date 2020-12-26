import React, { EventHandler, FC, SyntheticEvent, useRef } from 'react';
import { CSSObject } from '@emotion/core';
import { animated, useSpring } from 'react-spring';
import { makeSize, palette } from '../../../utils/design';

export const styleMenuButton = (open: boolean): CSSObject => ({
  backgroundColor: 'transparent',
  border: 'none',
  height: makeSize('sm'),
  width: makeSize('sm'),
  svg: {
    height: '100%',
    stroke: open ? palette.contrast() : palette.text(),
  },
});

export interface NavButtonProps {
  open: boolean;
  onClick: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}

export const NavButton: FC<NavButtonProps> = ({ open, onClick }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const topSpring = useSpring({
    from: ref.current
      ? {
          y1: 5,
          y2: open ? 5 : 95,
          stroke: open ? palette.contrast() : palette.text(),
        }
      : {},
    to: {
      y1: 5,
      y2: open ? 95 : 5,
      stroke: open ? palette.contrast() : palette.text(),
    },
  });

  const middleSpring = useSpring({
    from: ref.current
      ? {
          opacity: open ? 1 : 0,
        }
      : {},
    to: {
      opacity: open ? 0 : 1,
    },
  });

  const bottomSpring = useSpring({
    from: ref.current
      ? {
          y1: 95,
          y2: open ? 95 : 5,
          stroke: open ? palette.contrast() : palette.text(),
        }
      : {},
    to: {
      y1: 95,
      y2: open ? 5 : 95,
      stroke: open ? palette.contrast() : palette.text(),
    },
  });

  return (
    <button css={styleMenuButton(open)} onClick={onClick} aria-label="menu">
      <svg viewBox="0 0 100 100" ref={ref}>
        <animated.line {...topSpring} x1="0" x2="100" strokeWidth="10" />
        <animated.line
          {...middleSpring}
          x1="0"
          x2="100"
          y1="50"
          y2="50"
          strokeWidth="10"
        />
        <animated.line {...bottomSpring} x1="0" x2="100" strokeWidth="10" />
      </svg>
    </button>
  );
};
