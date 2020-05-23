import React, { FC, useCallback, useEffect, useRef } from 'react';
import { CSSObject } from '@emotion/core';
import { makeColor, makeSpace } from '../../../utils/design';

const styleHeader = (first?: boolean): CSSObject => ({
  fontStyle: 'italic',
  margin: first ? `0 0 ${makeSpace('md')} 0` : `${makeSpace('md')} 0`,
  '> a': {
    color: makeColor('primary', 1),
  },
});

export interface ScrollableSectionHeaderProps {
  firstSection?: boolean;
  pathname: Location['pathname'];
  hash: Location['hash'];
  hashTarget: string;
}

export const ScrollableSectionHeader: FC<ScrollableSectionHeaderProps> = ({
  firstSection,
  hash,
  pathname,
  hashTarget,
  children,
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
    <h1 css={styleHeader(firstSection)} ref={el}>
      <a href={`${pathname}${hashTarget}`}>{children}</a>
    </h1>
  );
};
