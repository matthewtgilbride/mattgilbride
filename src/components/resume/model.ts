import {
  SkillGroup,
  ExperienceEntry,
} from '../../content/resume';

export type { SkillGroup, ExperienceEntry };

export interface ResumeProps {
  data: {
    skills: SkillGroup[];
    experiences: ExperienceEntry[];
  };
}
