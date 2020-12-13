import React, { FC, ReactNode, useCallback, useState } from 'react';
import { CSSObject, Global } from '@emotion/core';
import Head from 'next/head';
import { Header } from './header/Header';
import { ContentContainer } from './content/ContentContainer';
import { NavMenu } from './nav/NavMenu';
import { responsiveBreakpoints } from '../../utils/design';
import { documentReset, meyerReset } from './Layout.styles';

const styleContainer: CSSObject = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  maxWidth: responsiveBreakpoints.desktop,
  margin: 'auto',
};

export const Layout: FC<{ footer?: ReactNode }> = ({ children, footer }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen(!open), [open]);

  return (
    <>
      <Head>
        <title>Matt Gilbride</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={meyerReset} />
      <Global styles={documentReset} />
      <div css={styleContainer}>
        <Header {...{ open, toggleOpen }} />
        <NavMenu open={open} />
        <ContentContainer footer={footer}>{children}</ContentContainer>
      </div>
    </>
  );
};
