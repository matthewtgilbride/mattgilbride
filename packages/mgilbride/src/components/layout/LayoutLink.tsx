import React, { CSSProperties, FC } from 'react';
import { animated } from 'react-spring';
import { CSSObject } from '@emotion/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { makeResponsiveObject } from '../../utils/design';

const styleLayoutLink = (
  active: boolean,
  isHome?: 'desktop' | 'mobile',
): CSSObject => {
  const activeProps = active
    ? {
        '&&&': { textDecoration: 'underline' },
      }
    : {};
  if (!isHome) return activeProps;
  return isHome === 'desktop'
    ? {
        ...activeProps,
        display: 'none',
        ...makeResponsiveObject({
          beginAt: 'tabletPortrait',
          style: { display: 'inline' },
        }),
      }
    : {
        ...activeProps,
        display: 'inline',
        ...makeResponsiveObject({
          beginAt: 'tabletPortrait',
          style: { display: 'none' },
        }),
      };
};

interface LayoutLinkProps {
  isHome?: 'desktop' | 'mobile';
  href: LinkProps['href'];
  style: CSSProperties;
}

export const LayoutLink: FC<LayoutLinkProps> = ({
  isHome,
  style,
  href,
  children,
}) => {
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <animated.a css={styleLayoutLink(active, isHome)} style={style}>
        {children}
      </animated.a>
    </Link>
  );
};
