import { ResponsiveBreakpoints } from '@mattgilbride/design-system/lib/types/composite/responsive.composite';
import { configureDesignUtils } from '@mattgilbride/design-system/lib/utils';
import { SizeConfig } from '@mattgilbride/design-system/lib/types/composite/size.composite';
import { FontConfig } from '@mattgilbride/design-system/lib/types/composite/font.composite';
import { PaletteConfig } from '@mattgilbride/design-system/lib/utils/color/palette';

const paletteConfig: PaletteConfig = {
  primary: '#00a1ab',
  secondary: '#2fc4b2',
  accent: '#ff5722',
  error: '#dd2c00',
  warning: '#f2a51a',
  success: '#00bdaa',
  contrast: '#1c1d1d',
  text: '#dee3e2',
  gray: '#707677',
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
  modularScaleRatio: 'perfectFourth',
  baselineGrid: 4,
  baselineFontSizeFactor: 4,
  sizeUnits: 'rem',
  lineHeightFactor: 1.5,
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
  makeResponsiveString,
  makeResponsiveObject,
  palette,
  makeLineHeight,
  makeSize,
  makeSpace,
} = configureDesignUtils({
  paletteConfig,
  responsiveBreakpoints,
  sizeConfig,
  fontConfig,
});
