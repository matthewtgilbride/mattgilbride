import {
  ConfigureMakeSpace,
  MakeSpace,
} from '../types/composite/space.composite';
import { convertToUnits, createSizeMap } from './makeSize/sizeMap';
import { Size } from '../types/primitive/size.primitive';

export const configureMakeSpace: ConfigureMakeSpace = (config) => {
  const BaselineGridMismatch = (sizeValue: number): Error =>
    new Error(`"${sizeValue}" is not a multiple of your baselineGrid of "${config.baselineGrid}".
  
  You have elected to use a "${config.spaceScale}" spacing system. This means that you may provide a custom pixel value but that value must be a multiple of your baselineGrid.
  Check the "sizeConfig.baselineGrid" value of your sizeConfig again and make sure that you're providing a spacing value that is a correct multiple of your grid system.`);

  const alignsToBaselineGrid = (sizeValue: number): boolean =>
    sizeValue % config.baselineGrid === 0;

  const createLinearSpaceSize = (sizeValue: number): string => {
    if (alignsToBaselineGrid(sizeValue)) {
      return convertToUnits(config.documentFontSize, `${sizeValue}px`, 'px');
    }
    throw BaselineGridMismatch(sizeValue);
  };

  const createCustomSpaceSize = (sizeValue: number): string => {
    if (!alignsToBaselineGrid(sizeValue)) {
      // eslint-disable-next-line no-console
      console.warn(BaselineGridMismatch(sizeValue).message);
    }
    return convertToUnits(config.documentFontSize, `${sizeValue}px`, 'px');
  };

  const createExponentialSpaceSize = (sizeValue: Size): string => {
    return '100px';
  };

  const sizeMap = createSizeMap(config);

  const makeSpace: MakeSpace = (value) => {
    if (
      typeof value === 'number'
      // && config.spaceScale === 'linear'
    ) {
      return createLinearSpaceSize(value);
    }

    if (value === 'auto') return value;

    return sizeMap.fontSize[value][config.sizeUnits];
  };

  return { makeSpace };
};
