import { keyframes } from '@emotion/core';
import { makeColor } from '../utils/design';

const white = makeColor('light');
const accent = makeColor('accent');
const darkGray = makeColor('gray', -3);

export const easeAfterPageLoad = (
  animation: ReturnType<typeof keyframes>,
  firstRender: boolean,
  seconds = 1,
): string => (firstRender ? 'none' : `${animation} ease ${seconds}s`);

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 100,
  },
});

export const fadeDarkToAccent = keyframes({
  '0%': {
    color: white,
    backgroundColor: darkGray,
  },
  '100%': {
    color: darkGray,
    backgroundColor: accent,
  },
});

export const fadeAccentToDark = keyframes({
  '0%': {
    color: darkGray,
    backgroundColor: accent,
  },
  '100%': {
    color: white,
    backgroundColor: darkGray,
  },
});

export const fadeWhiteToDark = keyframes({
  '0%': {
    color: white,
  },
  '100%': {
    color: darkGray,
  },
});

export const fadeDarkToWhite = keyframes({
  '0%': {
    color: darkGray,
  },
  '100%': {
    color: white,
  },
});
