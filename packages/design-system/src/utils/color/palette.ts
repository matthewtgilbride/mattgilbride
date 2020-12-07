import { mix } from 'polished';

export type ColorStateful = 'success' | 'warning' | 'error';
export type ColorApplication =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'text'
  | 'contrast'
  | 'gray';
export type Color = ColorStateful | ColorApplication;

/**
 * @todo Convert ColorHex to actual type-checked regex value
 * once this issue has been closed
 * https://github.com/Microsoft/TypeScript/issues/6579
 * (maybe CSSType will handle it right away, and then it will just be a matter of upgrading that)
 */
export type ColorHex = string;

export type PaletteConfig = { [key in Color]: ColorHex };

export type ColorFunction = (shade?: number) => ColorHex;

export type Palette = { [key in Color]: ColorFunction };

export type ConfigurePalette = (palette: PaletteConfig) => Palette;

const shadeFunction = (color: Color, hex: string) => (scale = 0) => {
  if (scale >= -100 && scale <= 100) {
    return scale > 0
      ? mix(scale / 100, 'white', hex)
      : mix(-scale / 100, 'black', hex);
  }
  throw new Error(
    'scale argument should be a number between negative and positive 100 representing a percentage to lighten or darken the palette color',
  );
};

/**
 * takes a palette and returns a makeColor function that can darken/lighten colors of the palette
 */
export const configurePalette: ConfigurePalette = (config: PaletteConfig) =>
  Object.entries(config).reduce(
    (palette, [color, hex]) => ({
      [color]: shadeFunction(color as Color, hex),
      ...palette,
    }),
    {} as Palette,
  );
