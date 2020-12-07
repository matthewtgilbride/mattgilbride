import { useSpring, useTransition } from 'react-spring';
import { darkGray, white } from './Layout.styles';
import { palette, responsiveBreakpoints } from '../../utils/design';

const primary = palette.primary();

const onMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < responsiveBreakpoints.tabletPortrait;
};

export const useLayoutSprings = (isFirstRender: boolean, open: boolean) => {
  const backgroundSpring = useSpring({
    from: isFirstRender
      ? {}
      : {
          backgroundColor: open ? darkGray : primary,
        },
    to: {
      backgroundColor: open ? primary : darkGray,
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

  const navSpring = useSpring({
    from: onMobile()
      ? {
          transform: open ? 'translateY(-120px)' : 'translateY(0px)',
        }
      : {},
    to: onMobile()
      ? {
          transform: open ? 'translateY(0px)' : 'translateY(-120px)',
        }
      : {},
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
    navSpring,
  };
};
