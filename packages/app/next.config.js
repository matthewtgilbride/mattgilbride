/* eslint-disable @typescript-eslint/no-var-requires,no-param-reassign */
const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages({
  webpack: (config) => {
    config.resolve.alias.images = path.join(__dirname, 'images');
    return config;
  },
});
