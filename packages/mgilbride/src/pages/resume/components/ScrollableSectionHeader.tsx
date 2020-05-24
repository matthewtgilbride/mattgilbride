import React, { FC, useCallback, useEffect, useRef } from 'react';
import { CSSObject } from '@emotion/core';
import { makeColor, makeSpace } from '../../../utils/design';
import ChevronDown from '../../../assets/svg/chevron-down-accent.svg';

const styleHeader = (open: boolean, first?: boolean): CSSObject => ({
  fontStyle: 'italic',
  display: 'flex',
  justifyContent: 'space-between',
  margin: first ? `0 0 ${makeSpace('md')} 0` : `${makeSpace('md')} 0`,
  '> a': {
    color: makeColor('primary', 1),
  },
  '> button': {
    backgroundColor: makeColor('gray', -2),
    border: 'none',
    borderRadius: '50%',
    width: 38,
    ':hover': {
      backgroundColor: makeColor('gray', -1),
    },
    '> img': {
      height: 16,
      width: 16,
      marginTop: open ? 4 : 2,
      marginRight: open ? undefined : 2,
      transform: open ? undefined : 'rotate(90deg)',
    },
  },
});

export interface ScrollableSectionHeaderProps {
  firstSection?: boolean;
  pathname: Location['pathname'];
  hash: Location['hash'];
  hashTarget: string;
  onClick: () => void;
  open: boolean;
  text: string;
}

export const ScrollableSectionHeader: FC<ScrollableSectionHeaderProps> = ({
  firstSection,
  hash,
  pathname,
  hashTarget,
  onClick,
  open,
  text,
}) => {
  const el = useRef<HTMLHeadingElement>(null);

  const scrollToElement = useCallback(
    () =>
      setTimeout(() => {
        if (el.current) {
          el.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250),
    [el],
  );

  useEffect(() => {
    if (hash === hashTarget) {
      scrollToElement();
    }
  }, [hash, hashTarget, scrollToElement]);

  return (
    <h1 css={styleHeader(open, firstSection)} ref={el}>
      <a href={`${pathname}${hashTarget}`}>{text}</a>
      <button onClick={onClick}>
        <img src={ChevronDown} alt="open" />
      </button>
    </h1>
  );
};
