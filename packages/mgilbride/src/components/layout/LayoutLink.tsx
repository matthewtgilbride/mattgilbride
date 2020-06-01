import { GatsbyLinkProps, Link } from 'gatsby';
import React, { CSSProperties, FC } from 'react';
import { animated } from 'react-spring';
import { CSSObject } from '@emotion/core';
import { makeResponsiveObject } from '../../utils/design';

const styleLayoutLink = (isHome?: 'desktop' | 'mobile'): CSSObject => {
  if (!isHome) return {};
  return isHome === 'desktop'
    ? {
        display: 'none',
        ...makeResponsiveObject({
          beginAt: 'tabletPortrait',
          style: { display: 'inline' },
        }),
      }
    : {
        display: 'inline',
        ...makeResponsiveObject({
          beginAt: 'tabletPortrait',
          style: { display: 'none' },
        }),
      };
};

interface LayoutLinkProps {
  isHome?: 'desktop' | 'mobile';
  to: GatsbyLinkProps<unknown>['to'];
  style: CSSProperties;
}

const AnimatedLink = animated(Link);
export const LayoutLink: FC<LayoutLinkProps> = ({
  isHome,
  style,
  to,
  children,
}) => (
  <AnimatedLink
    css={styleLayoutLink(isHome)}
    style={style}
    to={to}
    activeStyle={{ textDecoration: 'underline' }}
  >
    {children}
  </AnimatedLink>
);
