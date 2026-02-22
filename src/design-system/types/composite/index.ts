import {
  MakeResponsiveObject,
  MakeResponsiveString,
  ResponsiveBreakpoints,
} from './responsive.composite';
import { MakeSize, SizeConfig } from './size.composite';
import { FontConfig } from './font.composite';
import { MakeSpace } from './space.composite';
import { Palette, PaletteConfig } from '../../utils/color/palette';

export interface DesignConfig {
  paletteConfig: PaletteConfig;
  responsiveBreakpoints: ResponsiveBreakpoints;
  sizeConfig: SizeConfig;
  fontConfig: FontConfig;
}

export type ConfigureDesignUtils = (
  config: DesignConfig,
) => {
  palette: Palette;
  makeResponsiveString: MakeResponsiveString;
  makeResponsiveObject: MakeResponsiveObject;
  makeSize: MakeSize;
  makeLineHeight: MakeSize;
  makeSpace: MakeSpace;
};
