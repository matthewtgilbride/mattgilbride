const createMDX = require('@next/mdx');

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
  },
});

module.exports = withMDX({
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
});
