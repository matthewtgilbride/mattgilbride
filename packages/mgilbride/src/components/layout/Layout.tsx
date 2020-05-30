import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { Global } from '@emotion/core';
import { GatsbyLinkProps, Link } from 'gatsby';
import { animated } from 'react-spring';
import { MenuIcon } from './MenuIcon';
import { documentReset, styleContainer } from './Layout.styles';
import { useLayoutSprings } from './Layout.springs';

interface LayoutLinkProps {
  to: GatsbyLinkProps<unknown>['to'];
  style: CSSProperties;
}

const AnimatedLink = animated(Link);
const LayoutLink: FC<LayoutLinkProps> = ({ style, to, children }) => (
  <AnimatedLink
    style={style}
    to={to}
    activeStyle={{ textDecoration: 'underline' }}
  >
    {children}
  </AnimatedLink>
);

export const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isFirstRender, setFirstRender] = useState(true);

  const onOpen = useCallback(() => {
    setFirstRender(() => false);
    setOpen((isOpen) => !isOpen);
  }, []);

  const {
    backgroundSpring,
    svgSpring,
    linkSpring,
    homeLinkSpring,
    childrenSpring,
  } = useLayoutSprings(isFirstRender, open);

  return (
    <>
      <Global styles={documentReset} />
      <animated.div css={styleContainer(open)} style={backgroundSpring}>
        <button onClick={onOpen}>
          <MenuIcon open={open} style={svgSpring} />
        </button>
        <LayoutLink style={homeLinkSpring} to="/">
          Matt Gilbride
        </LayoutLink>
        <nav>
          <ul>
            <li>
              <LayoutLink style={linkSpring} to="/about">
                About
              </LayoutLink>
            </li>
            <li>
              <LayoutLink style={linkSpring} to="/resume">
                Resume
              </LayoutLink>
            </li>
            <li>
              <LayoutLink style={linkSpring} to="/blog">
                Blog
              </LayoutLink>
            </li>
            <li>
              <LayoutLink style={linkSpring} to="/contact">
                Contact
              </LayoutLink>
            </li>
          </ul>
        </nav>
        {childrenSpring.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {children}
              </animated.div>
            ),
        )}
      </animated.div>
    </>
  );
};
