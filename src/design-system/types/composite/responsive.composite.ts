import { CSSObject } from '@emotion/react';
import { ResponsiveDeviceTypes } from '../primitive/responsive.primitive';

export type ResponsiveBreakpoints = { [key in ResponsiveDeviceTypes]: number };

interface ResponsiveConfig {
  beginAt?: ResponsiveDeviceTypes;
  endAt?: ResponsiveDeviceTypes;
}

export interface ResponsiveStringConfig extends ResponsiveConfig {
  style: string;
}

export interface ResponsiveObjectConfig extends ResponsiveConfig {
  style: CSSObject;
}

export type MakeResponsiveString = (config: ResponsiveStringConfig) => string;
export type MakeResponsiveObject = (
  config: ResponsiveObjectConfig,
) => CSSObject;
export type ConfigureMakeResponsive = (
  responsiveBreakpoints: ResponsiveBreakpoints,
) => {
  makeResponsiveString: MakeResponsiveString;
  makeResponsiveObject: MakeResponsiveObject;
};
