import React, { FC } from 'react';
import { css, CSSObject, Global } from '@emotion/core';

const clazz: CSSObject = {
  display: 'flex',
};

export const Layout: FC = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    <div css={clazz}>{children}</div>
  </>
);
