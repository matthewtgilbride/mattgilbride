import React, { FC } from 'react';
import Head from 'next/head';

/**
 * provides twitter SEO headers
 */
export const SEOTwitter: FC<{
  type?: string;
  username?: string;
  title: string;
  description: string;
  image: string;
}> = ({ type, username, title, description, image }) => (
  <Head>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={description} />
  </Head>
);
