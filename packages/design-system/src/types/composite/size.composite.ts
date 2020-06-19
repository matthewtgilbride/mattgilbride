import { ratioNames } from 'polished/lib/helpers/modularScale';
import { Size } from 'types/primitive/size.primitive';
import { FontConfig } from './font.composite';

export type SizeUnits = 'em' | 'rem' | 'px';
export type SizeModularScaleRatio = keyof typeof ratioNames | number;
export type SizeHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const isHeadingSize = (
  size: Size | SizeHeadings,
): size is SizeHeadings => ['h1', 'h2', 'h3', 'h4', 'h5'].includes(size);

export type SizeArgs = [Size | SizeHeadings] | [number, SizeUnits];

export type SpaceProperties = [Size] | [number, SizeUnits];

type CSSBoxLong = 'top' | 'right' | 'bottom' | 'left';
type CSSBoxShort = 'vertical' | 'horizontal';
type CSSBox = CSSBoxShort | CSSBoxLong;

export type InsetOutsetProperties = {
  [key in CSSBox]: SpaceProperties;
};

export interface SizeConfig {
  modularScaleRatio: SizeModularScaleRatio;
  sizeUnits: SizeUnits;
  lineHeightFactor: number;
  baselineFontSizeFactor: number;
  baselineGrid: number;
}

export const baseFontSize = (config: SizeConfig): number =>
  config.baselineGrid * config.baselineFontSizeFactor;

export const baselineGridMismatchWarning = (
  config: SizeConfig,
  value: number,
): void => {
  if (value % config.baselineGrid !== 0) {
    // eslint-disable-next-line no-console
    console.warn(`${value}" is not a multiple of your baselineGrid of ${config.baselineGrid}.
  
  You may provide a custom value, but that value should be a multiple of your baselineGrid.
  
  Check the baselineGrid value of your size configuration again and make sure that you're providing a spacing value that is a correct multiple of your grid system.
  
  `);
  }
};

export type MakeSize = (...size: SizeArgs) => string;

export type ConfigureMakeSize = (config: {
  fontConfig: FontConfig;
  sizeConfig: SizeConfig;
}) => { makeSize: MakeSize; makeLineHeight: MakeSize };
