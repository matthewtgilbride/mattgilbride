import React, { FC, useCallback, useState } from 'react';
import { Global } from '@emotion/core';
import { animated } from 'react-spring';
import { MenuIcon } from './MenuIcon';
import { documentReset, styleContainer } from './Layout.styles';
import { useLayoutSprings } from './Layout.springs';
import { LayoutLink } from './LayoutLink';

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
        <LayoutLink isHome="mobile" style={homeLinkSpring} to="/">
          Matt Gilbride
        </LayoutLink>
        <LayoutLink isHome="desktop" style={linkSpring} to="/">
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
