import {
  ConfigureMakeSpace,
  MakeSpace,
} from '../types/composite/space.composite';
import { buildSizeMap } from './makeSize/buildSizeMap';
import { baselineGridMismatchWarning } from '../types/composite/size.composite';

export const configureMakeSpace: ConfigureMakeSpace = (config) => {
  const sizeMap = buildSizeMap(config);

  const makeSpace: MakeSpace = (...args) => {
    if (args.length === 2) {
      baselineGridMismatchWarning(config, args[0]);
      return `${args[0]}${args[1]}`;
    }

    return sizeMap.fontSize[args[0]][config.sizeUnits];
  };

  return { makeSpace };
};
