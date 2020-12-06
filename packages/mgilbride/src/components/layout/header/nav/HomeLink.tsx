import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { animated, useSpring } from 'react-spring';
import { useActiveStyle } from './NavLink';
import { darkGray, white } from '../../Layout.styles';

export const HomeLink: FC<LinkProps & { open: boolean }> = ({
  open,
  href,
  children,
}) => {
  const style = useActiveStyle(href);
  const spring = useSpring({
    from: {
      opacity: 0,
      color: open ? darkGray : white,
    },
    to: {
      opacity: 1,
      color: open ? darkGray : white,
    },
  });
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <animated.a css={style} style={spring}>
        {children}
      </animated.a>
    </Link>
  );
};
