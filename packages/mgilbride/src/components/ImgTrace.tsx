import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export type ImgTraceProps = Record<string, unknown> & {
  path: string;
  alt: string;
};

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

export const ImgTrace: FC<ImgTraceProps> = ({ path, alt, ...rest }) => {
  /* eslint-disable @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require */
  const { trace } = require(`images/${path}?trace`);
  const raw = require(`images/${path}`);

  const [ref, onLoad, loaded] = useImageIsLoaded();

  return (
    <>
      <img
        src={trace}
        alt={alt}
        {...rest}
        css={{ display: loaded ? 'none' : undefined }}
      />
      <img
        src={raw}
        alt={alt}
        {...rest}
        css={{ display: loaded ? undefined : 'none' }}
        ref={ref}
        onLoad={onLoad}
      />
    </>
  );
};
