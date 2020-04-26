import { MakeColor, Palette } from './color.composite';
import {
  MakeResponsiveObject,
  MakeResponsiveString,
  ResponsiveBreakpoints,
} from './responsive.composite';

export interface DesignConfig {
  palette: Palette;
  responsiveBreakpoints: ResponsiveBreakpoints;
}

export type ConfigureDesignUtils = (
  config: DesignConfig,
) => {
  makeColor: MakeColor;
  makeResponsiveString: MakeResponsiveString;
  makeResponsiveObject: MakeResponsiveObject;
};
