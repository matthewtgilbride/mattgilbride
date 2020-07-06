import { config, useSpring, useTransition } from 'react-spring';
import { accent, darkGray, white } from './Layout.styles';

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
  });

  const linkSpring = useSpring({
    from: {
      color: open ? darkGray : white,
    },
    to: {
      color: open ? darkGray : white,
    },
  });

  const homeLinkSpring = useSpring({
    from: {
      opacity: 0,
      color: open ? darkGray : white,
    },
    to: {
      opacity: 1,
      color: open ? darkGray : white,
    },
  });

  const childrenSpring = useTransition(true, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
  });

  return {
    backgroundSpring,
    svgSpring,
    linkSpring,
    homeLinkSpring,
    childrenSpring,
  };
};
