import React, { FC, useRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { animated, useSpring } from 'react-spring';
import { CSSObject } from '@emotion/core';
import { useActiveStyle } from '../NavLink';
import { usePalette } from '../../../utils/usePalette';

export const HomeLink: FC<LinkProps & { open: boolean }> = ({
  open,
  href,
  children,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const activeStyle = useActiveStyle(href);
  const style: CSSObject = {
    textTransform: 'uppercase',
  };
  const { palette } = usePalette();
  const spring = useSpring({
    from: ref.current
      ? {
          opacity: 0,
          color: open ? palette.contrast() : palette.text(),
        }
      : {},
    to: {
      opacity: 1,
      color: open ? palette.contrast() : palette.text(),
    },
  });
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <animated.a ref={ref} css={{ ...style, ...activeStyle }} style={spring}>
        {children}
      </animated.a>
    </Link>
  );
};
