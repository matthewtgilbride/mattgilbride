import React, { FC, Fragment } from 'react';
import { SkillGroup } from '../model';
import { SkillHeader } from './SkillHeader';
import { SkillBody } from './SkillBody';

export const Skill: FC<{ group: SkillGroup }> = ({ group }) => (
  <div>
    <SkillHeader
      imgSrc={group.icon.src}
      imgSize={group.icon.size}
      text={group.title}
    />
    <SkillBody>
      {group.subgroups.map((sub) => (
        <Fragment key={sub.title || 'default'}>
          {sub.title && <h5>{sub.title}</h5>}
          <ul>
            {sub.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </SkillBody>
  </div>
);
