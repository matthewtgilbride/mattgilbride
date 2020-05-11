import { ratioNames } from 'polished/lib/helpers/modularScale';
import { Size } from 'types/primitive/size.primitive';
import { ResponsiveDeviceTypes } from '../primitive/responsive.primitive';
import { FontConfig } from './font.composite';

export type SizeUnits = 'em' | 'rem' | 'px';
export type SizeModularScaleRatio = keyof typeof ratioNames | number;
export type SizeScales = { [key in Size]: number };
export type SizeHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const isHeadingSize = (
  size: Size | SizeHeadings,
): size is SizeHeadings => ['h1', 'h2', 'h3', 'h4', 'h5'].includes(size);

export type SizeArgs = [Size | SizeHeadings] | [number, SizeUnits];

// Space
export type SpaceScale = 'linear' | 'exponential';
export type SpaceLinearValues = number[];

export type SpaceProperties = Size | 'auto' | number;

type CSSBoxLong = 'top' | 'right' | 'bottom' | 'left';
type CSSBoxShort = 'vertical' | 'horizontal';
type CSSBox = CSSBoxShort | CSSBoxLong;

export type InsetOutsetProperties = {
  [key in CSSBox]: SpaceProperties;
};

export interface SizeConfig {
  documentFontSize: number;
  modularScaleRatio: SizeModularScaleRatio;
  baseFontSize: number;
  sizeUnits: SizeUnits;
  lineHeight: number;
  baselineGrid: number;
  responsiveFontScaler?: number;
  responsiveFontSizes?: { [key in ResponsiveDeviceTypes]: number };
  fontSizeScaleMap: SizeScales;
  // space
  spaceScale: SpaceScale;
}

export type MakeSize = (...size: SizeArgs) => string;

export type ConfigureMakeSize = (config: {
  fontConfig: FontConfig;
  sizeConfig: SizeConfig;
}) => { makeSize: MakeSize };
