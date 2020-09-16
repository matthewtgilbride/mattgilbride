/* eslint-disable @typescript-eslint/no-var-requires,no-param-reassign */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages(
  withMDX({
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    trailingSlash: true,
    webpack: (config) => {
      config.resolve.alias.images = path.join(__dirname, 'images');
      return config;
    },
  }),
);
