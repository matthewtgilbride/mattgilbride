import React, { FC, ReactNode, useCallback, useState } from 'react';
import { CSSObject, Global } from '@emotion/core';
import { Header } from './header/Header';
import { ContentContainer } from './content/ContentContainer';
import { NavMenu } from './NavMenu';
import { responsiveBreakpoints } from '../../utils/design';
import { documentReset, fontMontserrat, meyerReset } from './Layout.styles';
import { PageSEOProperties } from './seo/model';
import { SEO } from './seo/SEORoot';
import { Footer } from './Footer';

const styleContainer: CSSObject = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  maxWidth: responsiveBreakpoints.desktop,
  margin: 'auto',
};

export interface LayoutProps {
  seo: PageSEOProperties;
  footer?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, seo, footer }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen(!open), [open]);

  return (
    <>
      <SEO {...seo} />
      <Global styles={fontMontserrat} />
      <Global styles={meyerReset} />
      <Global styles={documentReset} />
      <div css={styleContainer}>
        <Header {...{ open, toggleOpen }} />
        <NavMenu open={open} />
        <ContentContainer footer={footer ?? <Footer />}>
          {children}
        </ContentContainer>
      </div>
    </>
  );
};
