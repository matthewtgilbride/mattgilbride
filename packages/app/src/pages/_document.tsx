import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { websiteConfig } from '../components/layout/seo/SEORoot';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render(): JSX.Element {
    return (
      // this line is the only reason the _document file exists: https://github.com/vercel/next.js/issues/19361
      <Html lang={websiteConfig.siteMetadataConfig.siteLanguage}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
