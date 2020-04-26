import { Palette } from '@mgilbride/design-system/lib/types/composite/color.composite';
import { ResponsiveBreakpoints } from '@mgilbride/design-system/lib/types/composite/responsive.composite';
import { configureDesignUtils } from '@mgilbride/design-system/lib/utils';

const palette: Palette = {
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
};

const responsiveBreakpoints: ResponsiveBreakpoints = {
  phone: 320,
  phoneMd: 375,
  phoneLg: 425,
  tabletPortrait: 768,
  tabletLandscape: 1024,
  laptop: 1024,
  desktop: 1440,
  '4K': 2560,
};

export const {
  makeColor,
  makeResponsiveString,
  makeResponsiveObject,
} = configureDesignUtils({ palette, responsiveBreakpoints });
