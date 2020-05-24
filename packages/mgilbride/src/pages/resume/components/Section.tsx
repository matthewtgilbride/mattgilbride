import React, { FC, useState } from 'react';
import { CSSObject } from '@emotion/core';
import {
  ScrollableSectionHeader,
  ScrollableSectionHeaderProps,
} from './ScrollableSectionHeader';

const styleBody = (open: boolean): CSSObject => ({
  display: open ? undefined : 'none',
});

export const Section: FC<{
  defaultClosed?: boolean;
  headerProps: Omit<ScrollableSectionHeaderProps, 'onClick' | 'open'>;
}> = ({ defaultClosed, headerProps, children }) => {
  const [open, setOpen] = useState(!defaultClosed);

  return (
    <div>
      <ScrollableSectionHeader
        {...{ ...headerProps, open, onClick: () => setOpen(!open) }}
      />
      <div css={styleBody(open)}>{children}</div>
    </div>
  );
};
