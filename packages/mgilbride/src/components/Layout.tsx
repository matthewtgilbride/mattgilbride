import React, { FC, useCallback, useState } from 'react';
import { Global } from '@emotion/core';
import { Link, GatsbyLinkProps } from 'gatsby';
import { Bars } from './svg/Bars';
import { Close } from './svg/Close';
import { documentReset, styleContainer } from './Layout.styles';

interface LayoutLinkProps {
  to: GatsbyLinkProps<unknown>['to'];
}
const LayoutLink: FC<LayoutLinkProps> = ({ to, children }) => (
  <Link to={to} activeStyle={{ textDecoration: 'underline' }}>
    {children}
  </Link>
);

export const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isFirstRender, setFirstRender] = useState(true);

  const onOpen = useCallback(() => {
    setFirstRender(() => false);
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <>
      <Global styles={documentReset} />
      <div css={styleContainer(open, isFirstRender)}>
        <button onClick={onOpen}>{open ? <Close /> : <Bars />}</button>
        <LayoutLink to="/">Matt Gilbride</LayoutLink>
        <nav>
          <ul>
            <li>
              <LayoutLink to="/about">About</LayoutLink>
            </li>
            <li>
              <LayoutLink to="/resume">Resume</LayoutLink>
            </li>
            <li>
              <LayoutLink to="/blog">Blog</LayoutLink>
            </li>
            <li>
              <LayoutLink to="/contact">Contact</LayoutLink>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
};
