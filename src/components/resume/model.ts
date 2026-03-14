import { ExperienceEntry } from '../../content/resume';

export type { ExperienceEntry };

export interface ResumeProps {
  data: {
    experiences: ExperienceEntry[];
    background: string[];
  };
}
