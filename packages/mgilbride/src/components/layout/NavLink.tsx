import React, { FC } from 'react';
import { CSSObject } from '@emotion/serialize';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

const styleNavLink = (active: boolean): CSSObject =>
  active
    ? {
        '&&&': { textDecoration: 'underline' },
      }
    : {};

export const NavLink: FC<LinkProps> = (props) => {
  const { pathname } = useRouter();
  const active = pathname === props.href;
  return (
    <Link {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a css={styleNavLink(active)}>{props.children}</a>
    </Link>
  );
};
