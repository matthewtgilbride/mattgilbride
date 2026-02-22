import React, { FC } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
  makeResponsiveObject,
  makeSize,
  responsiveBreakpoints,
} from 'utils/design';

export interface CodeProps {
  language: string;
  block: string;
}

export const Code: FC<CodeProps> = ({ language, block }) => (
  <div
    css={{
      maxWidth: '80vw',
      margin: 'auto',
      ...makeResponsiveObject({
        beginAt: 'tabletPortrait',
        style: {
          maxWidth: `calc(${responsiveBreakpoints.tabletPortrait}px - 4rem)`,
        },
      }),
    }}
  >
    <Prism
      language={language}
      style={vscDarkPlus}
      customStyle={{ borderRadius: makeSize('sm') }}
    >
      {block}
    </Prism>
  </div>
);
