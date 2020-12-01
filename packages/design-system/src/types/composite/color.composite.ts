import { ColorProperty } from 'csstype';
import { Color, ColorFixed, ColorScalable } from '../primitive/color.primitive';

/**
 * @todo Convert ColorHex to actual type-checked regex value
 * once this issue has been closed
 * https://github.com/Microsoft/TypeScript/issues/6579
 * (maybe CSSType will handle it right away, and then it will just be a matter of upgrading that)
 */
export type ColorHex = ColorProperty;
export type ColorBlendRatios = 0.25 | 0.5 | 0.75;
export type ColorScalePosition = -3 | -2 | -1 | 1 | 2 | 3;
export type ColorScales = { [key in ColorScalePosition]: ColorHex };

export type PaletteFixed = { [key in ColorFixed]: ColorHex };
export type PaletteScalable = { [key in ColorScalable]: ColorHex };
export interface Palette {
  fixed: PaletteFixed;
  scalable: PaletteScalable;
}

export type FixedColorConfig = [Color];
export type ScaledColorConfig = [ColorScalable, ColorScalePosition];
export type CustomColorConfig = ['custom', ColorHex];

export type ColorConfig =
  | FixedColorConfig
  | ScaledColorConfig
  | CustomColorConfig;

export type ColorMap = { [key in Color]: ColorHex };
export type ColorMapScalable = { [key in ColorScalable]: ColorScales };

export type MakeColor = (...config: ColorConfig) => ColorHex;
export type ConfigureMakeColor = (palette: Palette) => { makeColor: MakeColor };
