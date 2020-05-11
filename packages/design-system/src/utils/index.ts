import { ConfigureDesignUtils } from '../types/composite';
import { configureMakeColor } from './makeColor';
import { configureMakeResponsive } from './makeResponsive';
import { configureMakeSize } from './makeSize';
import { configureMakeSpace } from './makeSpace';

export const configureDesignUtils: ConfigureDesignUtils = ({
  palette,
  responsiveBreakpoints,
  sizeConfig,
  fontConfig,
}) => {
  const colorUtils = configureMakeColor(palette);
  const responsiveUtils = configureMakeResponsive(responsiveBreakpoints);
  const sizeUtils = configureMakeSize({ sizeConfig, fontConfig });
  const spaceUtils = configureMakeSpace(sizeConfig);
  return { ...colorUtils, ...responsiveUtils, ...sizeUtils, ...spaceUtils };
};
