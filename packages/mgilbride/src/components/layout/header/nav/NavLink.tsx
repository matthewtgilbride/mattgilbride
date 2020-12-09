import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const useActiveStyle = (href: LinkProps['href']): CSSObject => {
  const { pathname } = useRouter();
  const active = pathname === href;

  return active
    ? {
        '&&&': { textDecoration: 'underline' },
      }
    : {};
};

export const NavLink: FC<LinkProps> = (props) => {
  const activeStyle = useActiveStyle(props.href);
  const style: CSSObject = {
    textTransform: 'uppercase',
  };
  return (
    <Link {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a css={{ ...style, ...activeStyle }}>{props.children}</a>
    </Link>
  );
};
