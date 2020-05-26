import React, { FC, useCallback, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { CSSObject } from '@emotion/core';
import {
  ScrollableSectionHeader,
  ScrollableSectionHeaderProps,
} from './ScrollableSectionHeader';

const styleBody: CSSObject = {
  overflowY: 'hidden',
};

export const Section: FC<{
  defaultClosed?: boolean;
  headerProps: Omit<ScrollableSectionHeaderProps, 'onClick' | 'open'>;
}> = ({ defaultClosed, headerProps, children }) => {
  const [hasRenderedOnce, setHasRenderedOnce] = useState(false);
  useEffect(() => setHasRenderedOnce(true), []);

  const [open, setOpen] = useState(true);
  if (defaultClosed && !hasRenderedOnce) {
    // wait a tick to close it so the user sees it can be opened
    setTimeout(() => setOpen(false), 750);
  }

  const [bodyHeight, setBodyHeight] = useState(0);
  const bodyRef = useCallback(
    (node) => {
      if (node !== null && open && bodyHeight === 0) {
        setBodyHeight(node.getBoundingClientRect().height);
      }
    },
    [open, bodyHeight],
  );

  const bodySpring = useSpring({
    from: bodyHeight
      ? {
          opacity: open ? 0 : 1,
          maxHeight: open ? 0 : bodyHeight,
        }
      : {},
    to: bodyHeight
      ? {
          opacity: open ? 1 : 0,
          maxHeight: open ? bodyHeight : 0,
        }
      : {},
  });

  return (
    <div>
      <ScrollableSectionHeader
        {...{ ...headerProps, open, onClick: () => setOpen(!open) }}
      />
      <animated.div ref={bodyRef} style={bodySpring} css={styleBody}>
        {children}
      </animated.div>
    </div>
  );
};
