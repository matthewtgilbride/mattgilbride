import { initMakeColor } from '@mgilbride/design-system/lib/utils/makeColor';

export const makeColor = initMakeColor({
  fixed: {
    dark: 'black',
    light: 'white',
  },
  scalable: {
    primary: '#00bcd4',
    secondary: '#b2ebf2',
    accent: '#ff5722',
    error: '#dd2c00',
    warning: '#f2a51a',
    success: '#00bdaa',
    light: '#dee3e2',
    gray: '#707677',
  },
});
