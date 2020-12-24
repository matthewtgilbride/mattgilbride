import React, { FC } from 'react';
import Head from 'next/head';

/**
 * provides Facebook or LinkedIn SEO headers
 */
export const SEOFacebookLinkedin: FC<{
  url: string;
  type?: string;
  title: string;
  description: string;
  image: string;
  name?: string;
  locale: string;
}> = ({ url, name, type, title, description, image, locale }) => (
  <Head>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={description} />
  </Head>
);
