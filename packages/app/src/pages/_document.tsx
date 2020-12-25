import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { websiteConfig } from '../components/layout/seo/SEORoot';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render(): JSX.Element {
    return (
      <Html lang={websiteConfig.siteMetadataConfig.siteLanguage}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
