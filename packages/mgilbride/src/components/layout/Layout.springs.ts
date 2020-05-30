import { config, useSpring, useTransition } from 'react-spring';
import { accent, darkGray, white } from './Layout.styles';
import { responsiveBreakpoints } from '../../utils/design';

export const useLayoutSprings = (isFirstRender: boolean, open: boolean) => {
  const backgroundSpring = useSpring({
    from: isFirstRender
      ? {}
      : {
          backgroundColor: open ? darkGray : accent,
        },
    to: {
      backgroundColor: open ? accent : darkGray,
    },
    config: config.molasses,
  });

  const svgSpring = useSpring({
    from: {
      stroke: open ? white : darkGray,
      fill: open ? white : darkGray,
    },
    to: {
      stroke: open ? darkGray : white,
      fill: open ? darkGray : white,
    },
    config: config.molasses,
  });

  const linkSpring = useSpring({
    from: {
      color: open ? darkGray : white,
    },
    to: {
      color: open ? darkGray : white,
    },
    config: config.molasses,
  });

  const homeLinkSpring = useSpring({
    from: {
      opacity:
        window.innerWidth <= responsiveBreakpoints.tabletPortrait ? 0 : 1,
      color: open ? darkGray : white,
    },
    to: {
      opacity: 1,
      color: open ? darkGray : white,
    },
    config: config.molasses,
  });

  const childrenSpring = useTransition(true, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    config: config.molasses,
  });

  return {
    backgroundSpring,
    svgSpring,
    linkSpring,
    homeLinkSpring,
    childrenSpring,
  };
};
