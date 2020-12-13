import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { animated, useTransition } from 'react-spring';
import {
  makeResponsiveObject,
  makeSpace,
  palette,
} from '../../../utils/design';
import { NavItems } from './NavItems';
import { headerHeight } from '../header/Header';
import { beginAt } from '../Layout.styles';

const styleContainer: CSSObject = {
  position: 'fixed',
  top: headerHeight,
  zIndex: 999,
  left: 0,
  right: 0,
  margin: makeSpace('sm'),
  marginTop: makeSpace('xxs'),
  backgroundColor: palette.primary(),
  color: palette.contrast(),
  borderRadius: makeSpace('xxs'),
  ...makeResponsiveObject({
    beginAt,
    style: {
      display: 'none',
    },
  }),
};

const styleNavItems: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  margin: makeSpace('xs'),
  padding: makeSpace('md'),
  li: {
    padding: `${makeSpace('md')} 0`,
  },
};

export const NavMenu: FC<{ open: boolean }> = ({ open }) => {
  const transitions = useTransition(open, null, {
    from: { transform: 'translateY(-400px)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(-400px)' },
  });
  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div css={styleContainer} key={key} style={props}>
              <NavItems childCss={styleNavItems} />
            </animated.div>
          ),
      )}
    </>
  );
};
