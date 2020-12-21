import React, { FC } from 'react';
import { useImageIsLoaded } from './ImgTrace';
import { responsiveBreakpoints } from '../utils/design';

export const ImgBlur: FC<{ url: string; alt: string }> = ({
  url,
  alt,
  ...rest
}) => {
  const blurUrl = `${url}&blur=200`;

  const mobileUrl = `${url}&width=${responsiveBreakpoints.phoneLg}`;
  const tabletUrl = `${url}&width=${responsiveBreakpoints.tabletPortrait}`;

  const [ref, onLoad, loaded] = useImageIsLoaded();

  return (
    <>
      <img
        src={blurUrl}
        alt={alt}
        {...rest}
        css={{ '&&&': { display: loaded ? 'none' : undefined }}}
      />
      <picture>
        <img
          src={mobileUrl}
          alt={alt}
          ref={ref}
          onLoad={onLoad}
          css={{ '&&&': { display: loaded ? undefined : 'none' }}}
        />
        <source
          srcSet={tabletUrl}
          media={`(min-width: ${responsiveBreakpoints.tabletPortrait}px`}
        />
        <source
          srcSet={tabletUrl}
          media={`(min-width: ${responsiveBreakpoints.laptop}px`}
        />
      </picture>
    </>
  );
};
