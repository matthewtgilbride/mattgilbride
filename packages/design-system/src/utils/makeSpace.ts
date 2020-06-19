import {
  ConfigureMakeSpace,
  MakeSpace,
} from '../types/composite/space.composite';
import { sizeMapValues } from './makeSize/buildSizeMap';
import { baselineGridMismatchWarning } from '../types/composite/size.composite';

export const configureMakeSpace: ConfigureMakeSpace = (config) => {
  const sizes = sizeMapValues(config);

  const makeSpace: MakeSpace = (...args) => {
    if (args.length === 2) {
      baselineGridMismatchWarning(config, args[0]);
      return `${args[0]}${args[1]}`;
    }

    return sizes[args[0]][config.sizeUnits];
  };

  return { makeSpace };
};
