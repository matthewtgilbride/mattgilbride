import { SizeConfig } from '../../types/composite/size.composite';
import { baseSizeValues } from './buildSizeMap';

describe('baseSizeValues', () => {
  it('produces incremental sizes according to a modular scale', () => {
    const config: SizeConfig = {
      baselineGrid: 4,
      baselineFontSizeFactor: 4,
      modularScaleRatio: 'perfectFourth',
      sizeUnits: 'rem',
      lineHeightFactor: 1.5,
    };

    expect(baseSizeValues(config).map((v) => v[1])).toEqual([
      8,
      12,
      16,
      20,
      28,
      36,
      52,
    ]);
  });
});
