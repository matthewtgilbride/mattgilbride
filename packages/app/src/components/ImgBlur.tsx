import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { responsiveBreakpoints } from '../utils/design';

/**
 * Something about next and/or react
 * causes the onLoad event to not always fire.
 * Use both a ref and the onLoad event to
 * make sure something fires when the image is
 * downloaded to the browser, which seems to work.
 */
const useImageIsLoaded = (): [
  MutableRefObject<HTMLImageElement | null>,
  () => void,
  boolean,
] => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => setLoaded(true), []);

  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (ref.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return [ref, onLoad, loaded];
};

export const ImgBlur: FC<{ url: string; alt: string }> = ({
  url,
  alt,
  ...rest
}) => {
  // TODO: this assumes we're using the same circular images everywhere which might not always be true
  const blurUrl = `${url}&px=50&mask=ellipse&width=${responsiveBreakpoints.phone}`;

  const mobileUrl = `${url}&width=${responsiveBreakpoints.phone}`;
  const tabletUrl = `${url}&width=${responsiveBreakpoints.tabletPortrait}`;

  const [ref, onLoad, loaded] = useImageIsLoaded();

  return (
    <>
      <img
        src={blurUrl}
        width={responsiveBreakpoints.phone}
        height={responsiveBreakpoints.phone}
        loading="lazy"
        ref={ref}
        onLoad={onLoad}
        alt={alt}
        {...rest}
        css={{ '&&&': { display: loaded ? 'none' : undefined } }}
      />
      <picture>
        <img
          src={mobileUrl}
          width={responsiveBreakpoints.phone}
          height={responsiveBreakpoints.phone}
          alt={alt}
          loading="lazy"
          css={{ '&&&': { display: loaded ? undefined : 'none' } }}
        />
        <source
          srcSet={tabletUrl}
          media={`(min-width: ${responsiveBreakpoints.tabletPortrait}px`}
        />
        <source
          srcSet={url}
          media={`(min-width: ${responsiveBreakpoints.laptop}px`}
        />
      </picture>
    </>
  );
};
