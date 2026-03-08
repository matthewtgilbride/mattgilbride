import React, { FC, PropsWithChildren, useRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { animated, useSpring } from 'react-spring';
import { CSSObject } from '@emotion/core';
import { useActiveStyle } from '../NavLink';
import { usePalette } from '../../../utils/usePalette';

export const HomeLink: FC<PropsWithChildren<LinkProps & { open: boolean }>> = ({
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
    <animated.span ref={ref} style={spring}>
      <Link href={href} css={{ ...style, ...activeStyle }}>
        {children}
      </Link>
    </animated.span>
  );
};
