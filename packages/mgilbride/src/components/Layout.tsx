import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';

const clazz: CSSObject = {
  display: 'flex',
};

export const Layout: FC = ({ children }) => <div css={clazz}>{children}</div>;
