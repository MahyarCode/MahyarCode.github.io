import { SkillsStructure } from './SkillsStructure';

export type ProjectItemStructure = {
  title: string;
  paragraph: string;
  content: string;
  contentDuty: string;
  screenShot: string;
  logo: string;
  projectUrl: string;
  selectedSkills: SkillsStructure[];
};
