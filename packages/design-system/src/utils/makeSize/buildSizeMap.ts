import { em, modularScale, rem } from 'polished';
import {
  baseFontSize,
  SizeConfig,
  SizeUnits,
} from '../../types/composite/size.composite';
import { Size } from '../../types/primitive/size.primitive';

export type SizeUnitValueMap = {
  [key in Size]: { [unitKey in SizeUnits]: string };
};

interface SizeMap {
  fontSize: SizeUnitValueMap;
  lineHeight: SizeUnitValueMap;
}

export const baseSizeValues = (config: SizeConfig): [Size, number][] => {
  const steps: [Size, number][] = [
    ['xxs', -2],
    ['xs', -1],
    ['sm', 0],
    ['md', 1],
    ['lg', 2],
    ['xl', 3],
    ['xxl', 4],
  ];

  return steps.map(([size, step]) => {
    const modularScaleValue = Number(
      modularScale(step, baseFontSize(config), config.modularScaleRatio),
    );

    const snappedValue =
      Math.round(modularScaleValue / config.baselineGrid) * config.baselineGrid;

    return [size, snappedValue];
  });
};

export const convertToUnits = (
  documentFontSize: number,
  value: number,
  unit: SizeUnits,
): string => {
  switch (unit) {
    case 'px':
      return `${value}px`;
    case 'rem':
      return rem(value, documentFontSize);
    case 'em':
    default:
      return em(value, documentFontSize);
  }
};

export const sizeMapValues = (
  config: SizeConfig,
  isLineHeight = false,
): SizeUnitValueMap =>
  baseSizeValues(config)
    .map<[Size, { [key in SizeUnits]: string }]>(([size, value]) => [
      size,
      {
        px: convertToUnits(
          baseFontSize(config),
          value * (isLineHeight ? config.lineHeightFactor : 1),
          'px',
        ),
        em: convertToUnits(
          baseFontSize(config),
          value * (isLineHeight ? config.lineHeightFactor : 1),
          'em',
        ),
        rem: convertToUnits(
          baseFontSize(config),
          value * (isLineHeight ? config.lineHeightFactor : 1),
          'rem',
        ),
      },
    ])
    .reduce(
      (result, [size, unitValues]) => ({ ...result, [size]: unitValues }),
      {} as SizeUnitValueMap,
    );

export const buildSizeMap = (config: SizeConfig): SizeMap => {
  return {
    fontSize: sizeMapValues(config),
    lineHeight: sizeMapValues(config, true),
  };
};
