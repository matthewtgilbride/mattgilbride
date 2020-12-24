import React, { FC } from 'react';
import { useImageIsLoaded } from './ImgTrace';
import { responsiveBreakpoints } from '../utils/design';

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
        width="100%"
        height="100%"
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
          width="100%"
          height="100%"
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
