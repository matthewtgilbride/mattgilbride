import React, { FC, useEffect, useRef, useState } from 'react';

export type TraceToWebpImageProps = Record<string, unknown> & {
  path: string;
  alt: string;
};

export const TraceToWebpImage: FC<TraceToWebpImageProps> = ({
  path,
  alt,
  ...rest
}) => {
  /* eslint-disable @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require */
  const { trace } = require(`images/${path}?trace`);
  const webp = require(`images/${path}?webp`);

  const [loaded, setLoaded] = useState(false);
  const [tries, setTries] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (ref.current?.complete) {
      setLoaded(true);
    } else {
      setTimeout(() => setTries(tries + 1), 100);
    }
  }, [tries]);

  return (
    <>
      <img
        src={trace}
        alt={alt}
        {...rest}
        css={{ display: loaded ? 'none' : undefined }}
      />
      <img
        src={webp}
        alt={alt}
        {...rest}
        css={{ display: loaded ? undefined : 'none' }}
        ref={ref}
      />
    </>
  );
};
