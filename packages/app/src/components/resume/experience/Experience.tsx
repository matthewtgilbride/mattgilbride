import React, { FC } from 'react';
import { ExperienceSlice } from '../model';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceBody } from './ExperienceBody';
import { PrismicContent } from '../../../prismic';

export const Experience: FC<{ slice: ExperienceSlice }> = ({ slice }) => (
  <div>
    <ExperienceHeader
      imgUrl={slice.primary.icon.url}
      imgSize={slice.primary.icon_size}
      orgUrl={slice.primary.link.url as string}
      orgCopy={slice.primary.link_text}
      dateCopy={slice.primary.date}
      titleCopy={slice.primary.title}
    />
    <ExperienceBody>
      <PrismicContent richText={slice.primary.copy} />
    </ExperienceBody>
  </div>
);
