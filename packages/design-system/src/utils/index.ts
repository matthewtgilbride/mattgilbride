import { ConfigureDesignUtils } from '../types/composite';
import { configureMakeResponsive } from './makeResponsive';
import { configureMakeSize } from './makeSize';
import { configureMakeSpace } from './makeSpace';
import { configurePalette } from './color/palette';

export const configureDesignUtils: ConfigureDesignUtils = ({
  paletteConfig,
  responsiveBreakpoints,
  sizeConfig,
  fontConfig,
}) => {
  const responsiveUtils = configureMakeResponsive(responsiveBreakpoints);
  const sizeUtils = configureMakeSize({ sizeConfig, fontConfig });
  const spaceUtils = configureMakeSpace(sizeConfig);
  const palette = configurePalette(paletteConfig);
  return {
    palette,
    ...responsiveUtils,
    ...sizeUtils,
    ...spaceUtils,
  };
};
