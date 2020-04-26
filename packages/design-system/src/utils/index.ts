import { ConfigureDesignUtils } from '../types/composite';
import { configureMakeColor } from './makeColor';
import { configureMakeResponsive } from './makeResponsive';

export const configureDesignUtils: ConfigureDesignUtils = ({
  palette,
  responsiveBreakpoints,
}) => {
  const colorUtils = configureMakeColor(palette);
  const responsiveUtils = configureMakeResponsive(responsiveBreakpoints);
  return { ...colorUtils, ...responsiveUtils };
};
