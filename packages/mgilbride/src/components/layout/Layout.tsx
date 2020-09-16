import React, { FC, useCallback, useState } from 'react';
import { Global } from '@emotion/core';
import { animated } from 'react-spring';
import Head from 'next/head';
import { MenuIcon } from './MenuIcon';
import {
  documentReset,
  styleContainer,
  styleContent,
  styleHeader,
  styleHeaderContainer,
  styleMenuButton,
  styleNav,
} from './Layout.styles';
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
      <Head>
        <title>Matt Gilbride</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={documentReset} />
      <animated.div css={styleContainer} style={backgroundSpring}>
        <div css={styleHeaderContainer}>
          <div css={styleHeader}>
            <button css={styleMenuButton} onClick={onOpen}>
              <MenuIcon open={open} style={svgSpring} />
            </button>
            <LayoutLink isHome="desktop" style={linkSpring} href="/">
              Matt Gilbride
            </LayoutLink>
            <LayoutLink isHome="mobile" style={homeLinkSpring} href="/">
              Matt Gilbride
            </LayoutLink>
          </div>
          <nav css={styleNav(open)}>
            <ul>
              <li>
                <LayoutLink style={linkSpring} href="/about">
                  About
                </LayoutLink>
              </li>
              <li>
                <LayoutLink style={linkSpring} href="/resume">
                  Resume
                </LayoutLink>
              </li>
              <li>
                <LayoutLink style={linkSpring} href="/blog">
                  Blog
                </LayoutLink>
              </li>
              <li>
                <LayoutLink style={linkSpring} href="/contact">
                  Contact
                </LayoutLink>
              </li>
            </ul>
          </nav>
        </div>
        {childrenSpring.map(
          ({ item, key, props }) =>
            item && (
              <animated.div css={styleContent(open)} key={key} style={props}>
                {children}
              </animated.div>
            ),
        )}
      </animated.div>
    </>
  );
};
