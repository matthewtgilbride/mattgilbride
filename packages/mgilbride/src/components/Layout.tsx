import React, { FC, useCallback, useState } from 'react';
import { Global } from '@emotion/core';
import { Link } from 'gatsby';
import { makeColor } from '../utils/design';
import { Bars } from './svg/Bars';
import { Close } from './svg/Close';
import { styleContainer } from './Layout.styles';

export const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isFirstRender, setFirstRender] = useState(true);

  const onOpen = useCallback(() => {
    setFirstRender(() => false);
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            backgroundColor: makeColor('gray', -2),
            color: makeColor('light'),
            // plagiarized from the react docs site
            fontFamily:
              '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
          },
        }}
      />
      <div css={styleContainer(open, isFirstRender)}>
        <button onClick={onOpen}>{open ? <Close /> : <Bars />}</button>
        <Link to="/">Matt Gilbride</Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
};
