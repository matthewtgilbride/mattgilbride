import React, { FC, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { CSSObject } from '@emotion/core';
import {
  ScrollableSectionHeader,
  ScrollableSectionHeaderProps,
} from './ScrollableSectionHeader';

const styleBody: CSSObject = {
  transformOrigin: 'top',
};

export const Section: FC<{
  defaultClosed?: boolean;
  headerProps: Omit<ScrollableSectionHeaderProps, 'onClick' | 'open'>;
}> = ({ defaultClosed, headerProps, children }) => {
  const [open, setOpen] = useState(!defaultClosed);

  const transitions = useTransition(open, null, {
    from: { opacity: 0, transform: 'scaleY(0)' },
    enter: { opacity: 1, transform: 'scaleY(1)' },
    leave: { opacity: 0, maxHeight: 0, transform: 'scaleY(0)' },
  });

  return (
    <div>
      <ScrollableSectionHeader
        {...{ ...headerProps, open, onClick: () => setOpen(!open) }}
      />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} css={styleBody}>
              {children}
            </animated.div>
          ),
      )}
    </div>
  );
};
