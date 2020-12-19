import { Size } from 'types/primitive/size.primitive';
import { SizeHeadings } from 'types/composite/size.composite';
import { FontFaceConfiguration } from 'polished/lib/types/fontFaceConfiguration';
import { Color } from '../../utils/color/palette';

export type FontSize = Size & SizeHeadings;
export type FontFamilyType = 'system' | 'user-defined' | 'google';
export type FontFamily = 'system' | 'Montserrat' | 'Raleway';
export type FontStyle = 'normal' | 'italic';
export type FontWeightValue =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type FontWeightName =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';
export type FontOS = 'OSX' | 'windows' | 'android' | 'ubuntu';

export interface FontProperties {
  fontSize: Size | SizeHeadings;
  lineHeight?: Size;
  fontFamily?: FontFamily;
  fontWeight?: FontWeightName;
  fontStyle?: FontStyle;
  fontColor?: Color;
  custom?: {
    fontSize: number;
    lineHeight?: number;
    fontFamily?: FontFamily;
    fontWeight?: FontWeightName;
    fontStyle?: FontStyle;
    fontColor: Color;
  };
}

export interface FontFamilyDefinitionOptions {
  family: FontFamily;
  variants: {
    [type in Exclude<FontStyle, 'bold'>]: FontWeightValue[];
  };
}

export interface FontFamilyDefinition {
  source: FontFamilyType;
  options: FontFamilyDefinitionOptions | FontFaceConfiguration;
}

export interface FontConfig {
  defaults: {
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeightName;
    fontColor?: Color;
  };
  headingSizeMap: {
    [key in SizeHeadings]: Size;
  };
  fontWeightMap: {
    [key in FontWeightName]: FontWeightValue;
  };
  fontFamilyDefinitions: FontFamilyDefinition[];
}

export interface Font {
  fontSize: string;
  lineHeight: string;
  fontFamily: FontFamily;
  fontWeight: number;
  fontStyle: FontStyle;
  color?: string;
}

export type MakeFont = (config: FontProperties) => Font;

export type ConfigureMakeFont = (
  fontConfig: FontConfig,
) => { makeFont: MakeFont };
