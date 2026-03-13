import { ContentImage, ContentLink, RichTextBlock } from '../RichText';

export interface SkillSlice {
  slice_type: 'skill_group';
  primary: {
    title: string;
    icon: ContentImage;
    icon_size: number;
  };
  items: {
    subgroup_title?: string;
    subgroup_copy: RichTextBlock[];
  }[];
}

export interface ExperienceSlice {
  slice_type: 'experience_group';
  primary: {
    type: 'experience' | 'education';
    date: string;
    link_text: string;
    link: ContentLink;
    title: string;
    icon: ContentImage;
    icon_size: number;
    copy: RichTextBlock[];
  };
}

export type Slice = SkillSlice | ExperienceSlice;

export interface ResumeProps {
  data: {
    body: Slice[];
  };
}
