import React, { FC } from 'react';
import { useImageIsLoaded } from './ImgTrace';

export const ImgBlur: FC<{ url: string; alt: string }> = ({
  url,
  alt,
  ...rest
}) => {
  const blurUrl = `${url}&blur=200`;

  const [ref, onLoad, loaded] = useImageIsLoaded();

  return (
    <>
      <img
        src={blurUrl}
        alt={alt}
        {...rest}
        css={{ display: loaded ? 'none' : undefined }}
      />
      <img
        src={url}
        alt={alt}
        {...rest}
        css={{ display: loaded ? undefined : 'none' }}
        ref={ref}
        onLoad={onLoad}
      />
    </>
  );
};
