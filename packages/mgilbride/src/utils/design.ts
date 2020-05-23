import { Palette } from '@mgilbride/design-system/lib/types/composite/color.composite';
import { ResponsiveBreakpoints } from '@mgilbride/design-system/lib/types/composite/responsive.composite';
import { configureDesignUtils } from '@mgilbride/design-system/lib/utils';
import { SizeConfig } from '@mgilbride/design-system/lib/types/composite/size.composite';
import { FontConfig } from '@mgilbride/design-system/lib/types/composite/font.composite';

const palette: Palette = {
  fixed: {
    dark: 'black',
    light: 'white',
  },
  scalable: {
    primary: '#00a1ab',
    secondary: '#2fc4b2',
    accent: '#ff5722',
    error: '#dd2c00',
    warning: '#f2a51a',
    success: '#00bdaa',
    light: '#dee3e2',
    gray: '#707677',
  },
};

export const responsiveBreakpoints: ResponsiveBreakpoints = {
  phone: 320,
  phoneMd: 375,
  phoneLg: 425,
  tabletPortrait: 768,
  tabletLandscape: 1024,
  laptop: 1260,
  desktop: 1440,
  '4K': 2560,
};

const sizeConfig: SizeConfig = {
  documentFontSize: 16,
  modularScaleRatio: 'perfectFourth',
  baseFontSize: 14,
  sizeUnits: 'rem',
  lineHeight: 1.5,
  baselineGrid: 4,
  spaceScale: 'linear',
  fontSizeScaleMap: {
    xxs: -2,
    xs: -1,
    sm: 0,
    md: 1,
    lg: 2,
    xl: 3,
    xxl: 4,
  },
};

const fontConfig: FontConfig = {
  defaults: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'regular',
    fontColor: undefined,
  },
  headingSizeMap: {
    h1: 'xxl',
    h2: 'xl',
    h3: 'lg',
    h4: 'md',
    h5: 'sm',
  },
  fontWeightMap: {
    thin: '100',
    'extra-light': '200',
    light: '300',
    regular: '400',
    medium: '500',
    'semi-bold': '600',
    bold: '700',
    'extra-bold': '800',
    black: '900',
  },
  fontFamilyDefinitions: [
    {
      source: 'google',
      options: {
        family: 'Montserrat',
        variants: {
          italic: ['400', '500'],
          normal: [
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ],
        },
      },
    },
    {
      source: 'google',
      options: {
        family: 'Raleway',
        variants: {
          italic: ['300', '400'],
          normal: [
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ],
        },
      },
    },
  ],
};

export const {
  makeColor,
  makeResponsiveString,
  makeResponsiveObject,
  makeSize,
  makeFontSize,
  makeSpace,
} = configureDesignUtils({
  palette,
  responsiveBreakpoints,
  sizeConfig,
  fontConfig,
});
