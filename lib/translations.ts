import { Language } from "./types";

export const translations = {
  nav: {
    about: { en: 'About', fr: 'À propos' },
    projects: { en: 'Projects', fr: 'Projets' },
    ventures: { en: 'Ventures', fr: 'Entreprises' },
    research: { en: 'Research', fr: 'Recherche' },
    blog: { en: 'Blog', fr: 'Blog' },
    contact: { en: 'Contact', fr: 'Contact' },
  },
  hero: {
    title: {
      en: 'Mike Folepe — Software Engineer, PhD Student, Founder',
      fr: 'Mike Folepe — Ingénieur Logiciel, Doctorant, Fondateur',
    },
    tagline: {
      en: 'I build systems, automate processes, and design applied AI solutions for high-impact environments',
      fr: 'Je construis des systèmes, automatise des processus et conçois des solutions d\'IA appliquée pour des environnements à fort impact',
    },
    downloadCV: { en: 'Download Resume', fr: 'Télécharger CV' },
  },
};

export const t = (key: string, lang: Language): string => {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value[lang] || key;
};