import { mix } from 'polished';
import { ColorScalable } from '../types/primitive/color.primitive';
import {
  ColorBlendRatios,
  ConfigureMakeColor,
  ColorHex,
  ColorMap,
  ColorMapScalable,
  ColorScales,
  Palette,
  MakeColor,
} from '../types/composite/color.composite';

export const configureMakeColor: ConfigureMakeColor = (palette: Palette) => {
  const createColor = (
    scale: ColorBlendRatios,
    color: ColorScalable,
    darken = false,
  ): ColorHex =>
    mix(
      scale,
      darken ? palette.fixed.dark : palette.fixed.light,
      palette.scalable[color],
    );

  const createColorScale = (hex: ColorScalable): ColorScales => ({
    [-3]: createColor(0.75, hex, true),
    [-2]: createColor(0.5, hex, true),
    [-1]: createColor(0.25, hex, true),
    1: createColor(0.25, hex),
    2: createColor(0.5, hex),
    3: createColor(0.75, hex),
  });

  const colorMap: ColorMap = Object.entries(palette)
    .map(([_, colors]) => ({ ...colors }))
    .reduce((flattenedMap, innerMap) => ({ ...flattenedMap, ...innerMap }), {});

  const colorMapScalable = Object.keys(palette.scalable).reduce(
    (resultMap, key) => ({
      ...resultMap,
      [key]: createColorScale(key as ColorScalable),
    }),
    {},
  ) as ColorMapScalable;

  const makeColor: MakeColor = (...config) => {
    if (config.length === 1) {
      return colorMap[config[0]];
    }
    if (config[0] === 'custom') {
      return config[1];
    }
    return colorMapScalable[config[0]][config[1]];
  };

  return { makeColor };
};
