export type Language = 'en' | 'fr';

export interface Translation {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  title: string;
  status: Translation;
  description: Translation;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface ExpertiseArea {
  id: string;
  title: Translation;
  level: Translation;
  description: Translation;
}

export interface BlogPost {
  id: string;
  title: Translation;
  meta: Translation;
  description: Translation;
}

export interface Venture {
  id: string;
  name: string;
  tagline: Translation;
  description: Translation;
  link?: string;
}