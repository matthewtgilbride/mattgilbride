import { MakeColor, Palette } from './color.composite';
import {
  MakeResponsiveObject,
  MakeResponsiveString,
  ResponsiveBreakpoints,
} from './responsive.composite';
import { MakeSize, SizeConfig } from './size.composite';
import { FontConfig } from './font.composite';
import { MakeSpace } from './space.composite';

export interface DesignConfig {
  palette: Palette;
  responsiveBreakpoints: ResponsiveBreakpoints;
  sizeConfig: SizeConfig;
  fontConfig: FontConfig;
}

export type ConfigureDesignUtils = (
  config: DesignConfig,
) => {
  makeColor: MakeColor;
  makeResponsiveString: MakeResponsiveString;
  makeResponsiveObject: MakeResponsiveObject;
  makeSize: MakeSize;
  makeFontSize: MakeSize;
  makeSpace: MakeSpace;
};
