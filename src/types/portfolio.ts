export interface Education {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  gpaLabel?: string;
  honors?: string[];
  certificateUrl?: string;
  institutionUrl?: string;
  context?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  companyDescription?: string;
  industry?: string;
  role: string;
  roleScope?: string;
  startDate: string;
  endDate: string;
  summary: string;
  metrics?: string;
  bullets: ExperienceBullet[];
  companyUrl?: string;
}

export interface ExperienceBullet {
  text: string;
  tools?: string[];
  projectUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  techStack: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface Skill {
  name: string;
  context?: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  issuerContext?: string;
  date: string;
  certificateUrl?: string;
  thumbnailUrl?: string;
}

export interface LeadershipBullet {
  text: string;
  context?: string;
  linkedProjectId?: string;
}

export interface Leadership {
  id: string;
  organization: string;
  organizationLogo?: string;
  organizationDescription?: string;
  role: string;
  roleScope?: string;
  startDate: string;
  endDate: string;
  bullets: LeadershipBullet[];
  organizationUrl?: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'twitter' | 'portfolio' | 'email';
  url: string;
  label: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  portraitUrl?: string;
  socialLinks: SocialLink[];
  education: Education[];
  experience: Experience[];
  leadership: Leadership[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
}
