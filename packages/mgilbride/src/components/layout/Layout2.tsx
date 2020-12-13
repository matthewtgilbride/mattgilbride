import React, { FC, ReactNode, useCallback, useState } from 'react';
import { CSSObject } from '@emotion/core';
import { Header } from './header/Header';
import { ContentContainer } from './content/ContentContainer';
import { NavMenu } from './nav/NavMenu';

const styleContainer: CSSObject = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const Layout: FC<{ footer?: ReactNode }> = ({ children, footer }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen(!open), [open]);

  return (
    <div css={styleContainer}>
      <Header {...{ open, toggleOpen }} />
      <NavMenu open={open} />
      <ContentContainer footer={footer}>{children}</ContentContainer>
    </div>
  );
};
