import {
  ConfigureMakeSize,
  isHeadingSize,
  SizeArgs,
} from '../../types/composite/size.composite';
import { createSizeMap } from './sizeMap';

export const configureMakeSize: ConfigureMakeSize = ({
  sizeConfig,
  fontConfig,
}) => {
  const sizeMap = createSizeMap(sizeConfig);

  // TODO: remove this or only put it on in dev mode
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  window.sizeMap = sizeMap; // eslint-disable-line no-undef

  const makeSize = (...args: SizeArgs): string => {
    if (args.length === 2) {
      return `${args[0]}${args[1]}`;
    }
    const [size] = args;
    if (isHeadingSize(size)) {
      return sizeMap.size[fontConfig.headingSizeMap[size]][
        sizeConfig.sizeUnits
      ];
    }
    return sizeMap.size[size][sizeConfig.sizeUnits];
  };

  const makeFontSize = (...args: SizeArgs): string => {
    if (args.length === 2) {
      return `${args[0]}${args[1]}`;
    }
    const [size] = args;
    if (isHeadingSize(size)) {
      return sizeMap.fontSize[fontConfig.headingSizeMap[size]][
        sizeConfig.sizeUnits
      ];
    }
    return sizeMap.fontSize[size][sizeConfig.sizeUnits];
  };

  return { makeSize, makeFontSize };
};
