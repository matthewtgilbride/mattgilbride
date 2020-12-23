import React, { FC, Fragment } from 'react';
import { SkillSlice } from '../model';
import { SkillHeader } from './SkillHeader';
import { SkillBody } from './SkillBody';
import { PrismicContent } from '../../../prismic';

export const Skill: FC<{ slice: SkillSlice }> = ({ slice }) => (
  <div>
    <SkillHeader
      imgSrc={slice.primary.icon.url}
      imgSize={slice.primary.icon_size}
      text={slice.primary.title}
    />
    <SkillBody>
      {slice.items.map((item) => (
        <Fragment key={JSON.stringify(item)}>
          {item.subgroup_title && <h5>{item.subgroup_title}</h5>}
          <PrismicContent richText={item.subgroup_copy} />
        </Fragment>
      ))}
    </SkillBody>
  </div>
);
