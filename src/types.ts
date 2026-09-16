export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'WordPress' | 'E-Commerce' | 'Corporate' | 'SEO';
  description: string;
  detailedPoints: string[];
  liveUrl: string;
  secondaryUrl?: string;
  tags: string[];
  dateRange: string;
  featured?: boolean;
  metrics?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  highlightProjects?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  finalProject?: {
    title: string;
    description: string;
    liveUrl: string;
    highlights: string[];
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  score: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    iconName?: string;
  }[];
}
