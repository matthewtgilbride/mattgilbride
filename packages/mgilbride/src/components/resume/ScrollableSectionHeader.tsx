import React, { FC, useCallback, useEffect, useRef } from 'react';
import { CSSObject } from '@emotion/core';
import { animated, useSpring } from 'react-spring';
import { makeColor, makeSpace } from '../../utils/design';

const styleHeader = (open: boolean): CSSObject => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `${makeSpace('md')} 0`,
  padding: `${makeSpace('sm')} 0`,
  '> button': {
    backgroundColor: makeColor('gray', -2),
    cursor: 'pointer',
    border: '1px solid',
    borderColor: makeColor('accent'),
    borderRadius: '50%',
    width: 38,
    height: 38,
    ':hover,:focus': {
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: makeColor('gray', -1),
    },
    '> img': {
      height: 16,
      width: 16,
      marginTop: open ? 4 : 2,
      marginRight: open ? undefined : 2,
    },
  },
});

export interface ScrollableSectionHeaderProps {
  pathname: Location['pathname'];
  hash: Location['hash'];
  hashTarget: string;
  onClick: () => void;
  open: boolean;
  text: string;
}

export const ScrollableSectionHeader: FC<ScrollableSectionHeaderProps> = ({
  hash,
  pathname,
  hashTarget,
  onClick,
  open,
  text,
}) => {
  const buttonSpring = useSpring({
    from: {
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    },
    transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
  });

  const el = useRef<HTMLHeadingElement>(null);

  const scrollToElement = useCallback(
    () =>
      setTimeout(() => {
        if (el.current) {
          el.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500),
    [el],
  );

  useEffect(() => {
    if (hash === hashTarget) {
      scrollToElement();
    }
  }, [hash, hashTarget, scrollToElement]);

  return (
    <h1 css={styleHeader(open)} ref={el}>
      <a href={`${pathname}${hashTarget}`}>{text}</a>
      <button onClick={onClick}>
        <animated.img
          style={buttonSpring}
          src="/assets/svg/chevron-down-accent.svg"
          alt="open"
        />
      </button>
    </h1>
  );
};
