import React, { FC } from 'react';

import { Article, WebSite, WithContext } from 'schema-dts';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PageSEOProperties, WebsiteConfig } from './model';
import { SEOFacebookLinkedin } from './SEOFacebookLinkedin';
import { SEOTwitter } from './SEOTwitter';

const getSiteUrl = (): string => {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    return window.location.origin;
  }
  if (process.env.NODE_ENV !== 'production') {
    return process.env.PWA_APP_URL as string;
  }
  return 'http://isomorphic-stub.com';
};

export const websiteConfig: WebsiteConfig = {
  pathPrefix: '/',
  siteMetadataConfig: {
    sitePathPrefix: '',
    siteTitle: 'Matt Gilbride',
    siteTitleAlt: 'Matt Gilbride ',
    siteDescription: "Matt Gilbride's personal website",
    siteImage: 'src/images/cesium-logo.png',
    siteUrl: getSiteUrl(),
    siteHeadline: 'Matt Gilbride',
    siteLanguage: 'en',
    siteOgLanguage: 'en_US',
    siteAuthor: 'Matt Gilbride',
    siteBaseKeywords: ['Matt Gilbride'],
    linkedinProfileUrl: 'https://www.linkedin.com/company/cesium-gs/',
  },
};

/**
 * Provides necessary SEO headers
 */
export const SEO: FC<PageSEOProperties> = ({
  pageTitle,
  pageDescription,
  pageImage,
  pageKeywords = [],
  pageAuthor,
  pageType = 'WebSite',
}) => {
  const { pathname } = useRouter();

  const siteMetadata = websiteConfig.siteMetadataConfig;

  const baseKeywords = siteMetadata.siteBaseKeywords ?? [];

  const metaTitle = `${pageTitle} | ${siteMetadata.siteTitle}`;
  const metaDescription = pageDescription ?? siteMetadata.siteDescription;
  const metaAuthor = pageAuthor ?? siteMetadata.siteAuthor;
  const metaImage = pageImage ?? siteMetadata.siteImage;
  const metaKeywords = [...pageKeywords, ...baseKeywords];
  const metaUrl = `${siteMetadata.siteUrl}${pathname}`;

  const jsonLD: WithContext<WebSite | Article> = {
    '@context': 'https://schema.org',
    '@type': pageType,
    description: metaDescription,
    author: metaAuthor,
    image: metaImage,
    keywords: metaKeywords,
    url: metaUrl,
  };

  /**
   * React Helmet can't have nested fragments so that's why they're
   * put inline with each other inside of a fragment
   *
   * https://github.com/nfl/react-helmet#example
   */
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <html lang={siteMetadata.siteLanguage} />
        <script type="application/ld+json" id="website-json-ld">
          {JSON.stringify(jsonLD, null, 2)}
        </script>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="noodp" />
        <meta name="image" content={metaImage} />
        <meta name="author" content={metaAuthor} />
        <meta name="keywords" content={metaKeywords.join(', ')} />
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Head>
      {siteMetadata.facebookProfileUrl && (
        <SEOFacebookLinkedin
          description={metaDescription}
          image={metaImage}
          title={metaTitle}
          type={pageType}
          url={metaUrl}
          locale={siteMetadata.siteOgLanguage}
          name={siteMetadata.facebookProfileUrl}
        />
      )}
      {siteMetadata.linkedinProfileUrl && (
        <SEOFacebookLinkedin
          description={metaDescription}
          image={metaImage}
          title={metaTitle}
          type={pageType}
          url={metaUrl}
          locale={siteMetadata.siteOgLanguage}
          name={siteMetadata.linkedinProfileUrl}
        />
      )}
      {siteMetadata.twitterHandle && (
        <SEOTwitter
          title={metaTitle}
          image={metaImage}
          description={metaDescription}
          username={siteMetadata.twitterHandle}
        />
      )}
    </>
  );
};
