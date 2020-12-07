import { useSpring, useTransition } from 'react-spring';
import { palette, responsiveBreakpoints } from '../../utils/design';

const { primary, contrast, text } = palette;

const onMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < responsiveBreakpoints.tabletPortrait;
};

export const useLayoutSprings = (isFirstRender: boolean, open: boolean) => {
  const backgroundSpring = useSpring({
    from: isFirstRender
      ? {}
      : {
          backgroundColor: open ? contrast() : primary(),
        },
    to: {
      backgroundColor: open ? primary() : contrast(),
    },
  });

  const svgSpring = useSpring({
    from: {
      stroke: open ? text() : contrast(),
      fill: open ? text() : contrast(),
    },
    to: {
      stroke: open ? contrast() : text(),
      fill: open ? contrast() : text(),
    },
  });

  const linkSpring = useSpring({
    from: {
      color: open ? contrast() : text(),
    },
    to: {
      color: open ? contrast() : text(),
    },
  });

  const homeLinkSpring = useSpring({
    from: {
      opacity: 0,
      color: open ? contrast() : text(),
    },
    to: {
      opacity: 1,
      color: open ? contrast() : text(),
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
