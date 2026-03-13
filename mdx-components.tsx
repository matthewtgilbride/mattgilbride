import type { MDXComponents } from 'mdx/types';
import { ContentImage, GistEmbed } from './src/components/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ContentImage,
    GistEmbed,
  };
}
