import { SizeConfig, SpaceProperties } from './size.composite';

export type MakeSpace = (...args: SpaceProperties) => string;

export type ConfigureMakeSpace = (
  config: SizeConfig,
) => { makeSpace: MakeSpace };
