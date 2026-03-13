import React, { FC } from 'react';
import { ExperienceEntry } from '../model';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceBody } from './ExperienceBody';
import { ContentBlocks } from '../ContentBlocks';

export const Experience: FC<{ entry: ExperienceEntry }> = ({ entry }) => (
  <div>
    <ExperienceHeader
      imgUrl={entry.icon.src}
      imgSize={entry.icon.size}
      orgUrl={entry.org.href}
      orgCopy={entry.org.name}
      dateCopy={entry.date}
      titleCopy={entry.title}
    />
    <ExperienceBody>
      <ContentBlocks blocks={entry.content} />
    </ExperienceBody>
  </div>
);
