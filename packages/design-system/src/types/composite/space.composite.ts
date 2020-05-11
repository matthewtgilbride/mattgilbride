import { SizeConfig, SpaceProperties } from './size.composite';

export type MakeSpace = (space: SpaceProperties) => string;

export type ConfigureMakeSpace = (
  config: SizeConfig,
) => { makeSpace: MakeSpace };
