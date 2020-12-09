import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { animated, useSpring } from 'react-spring';
import { CSSObject } from '@emotion/core';
import { useActiveStyle } from './NavLink';
import { palette } from '../../../../utils/design';

export const HomeLink: FC<LinkProps & { open: boolean }> = ({
  open,
  href,
  children,
}) => {
  const activeStyle = useActiveStyle(href);
  const style: CSSObject = {
    textTransform: 'uppercase',
  };
  const spring = useSpring({
    from: {
      opacity: 0,
      color: open ? palette.contrast() : palette.text(),
    },
    to: {
      opacity: 1,
      color: open ? palette.contrast() : palette.text(),
    },
  });
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <animated.a css={{ ...style, ...activeStyle }} style={spring}>
        {children}
      </animated.a>
    </Link>
  );
};
