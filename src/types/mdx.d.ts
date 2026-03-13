declare module '*.mdx' {
  import { ComponentType } from 'react';

  export const metadata: {
    title: string;
    uid: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
