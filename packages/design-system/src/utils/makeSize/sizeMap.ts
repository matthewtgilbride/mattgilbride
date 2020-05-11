import { em, modularScale, rem } from 'polished';
import { SizeConfig, SizeUnits } from '../../types/composite/size.composite';
import { Size } from '../../types/primitive/size.primitive';
import { snapToGrid } from './snapToGrid';

type SizeValueMap = { [key in Size]: string };
type SizeUnitValueMap = {
  [key in Size]: { [key in SizeUnits]: string };
};

interface SizeMap {
  size: SizeUnitValueMap;
  fontSize: SizeUnitValueMap;
  lineHeight: SizeUnitValueMap;
}

export const createSizeMap = (sizeConfig: SizeConfig): SizeMap => ({
  size: createSizeUnitMap(sizeConfig, snappedSizeMap(sizeConfig, true)),
  lineHeight: createSizeUnitMap(sizeConfig, snappedSizeMap(sizeConfig, true)),
  fontSize: createSizeUnitMap(sizeConfig, snappedSizeMap(sizeConfig)),
});

function snappedSizeMap(
  sizeConfig: SizeConfig,
  withLineHeight = false,
): SizeValueMap {
  const modularScaleMap = modularScaleSizeValueMap(sizeConfig);

  return Object.entries(modularScaleMap).reduce(
    (sizes, [key, value]) => ({
      ...sizes,
      [key]: snapToGrid(
        value,
        sizeConfig.baselineGrid,
        withLineHeight ? sizeConfig.lineHeight : undefined,
      ),
    }),
    {} as SizeValueMap,
  );
}

const sizeUnitArr: SizeUnits[] = ['px', 'em', 'rem'];
function createSizeUnitMap(
  sizeConfig: SizeConfig,
  sizes: SizeValueMap,
): SizeUnitValueMap {
  return Object.keys(sizes).reduce(
    (sAccum, size) => ({
      ...sAccum,
      [size]: sizeUnitArr.reduce(
        (uAccum, unit) => ({
          ...uAccum,
          [unit]: convertToUnits(
            sizeConfig.documentFontSize,
            sizes[size as Size],
            unit,
          ),
        }),
        {},
      ),
    }),
    {} as SizeUnitValueMap,
  );
}

function modularScaleSizeValueMap(sizeConfig: SizeConfig): SizeValueMap {
  const adjustedBaseFontSize = snapToGrid(
    sizeConfig.baseFontSize,
    'px',
    sizeConfig.baselineGrid,
  );

  return Object.entries(sizeConfig.fontSizeScaleMap).reduce(
    (sizes, [key, value]) => ({
      ...sizes,
      [key]: modularScale(
        value,
        adjustedBaseFontSize,
        sizeConfig.modularScaleRatio,
      ),
    }),
    {} as SizeValueMap,
  );
}

function convertToUnits(
  documentFontSize: number,
  value: string,
  unit: SizeUnits,
): string {
  if (unit === 'em') return em(value, documentFontSize);
  if (unit === 'rem') return rem(value, documentFontSize);
  // todo - what if `px` suffix not provided?
  return value;
}
