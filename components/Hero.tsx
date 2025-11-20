'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Github, Linkedin, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { language } = useLanguage();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const content = {
    title: {
      en: 'Mike Folepe',
      fr: 'Mike Folepe',
    },
    subtitle: {
      en: 'Software Engineer, PhD Student, Founder',
      fr: 'Ingénieur Logiciel, Doctorant, Fondateur',
    },
    tagline: {
      en: 'I build systems, automate processes, and design applied AI solutions for high-impact environments',
      fr: 'Je construis des systèmes, automatise des processus et conçois des solutions d\'IA appliquée pour des environnements à fort impact',
    },
    keywords: [
      { en: 'System Automation', fr: 'Automatisation Système' },
      { en: 'Distributed Systems', fr: 'Systèmes Distribués' },
      { en: 'Applied AI', fr: 'IA Appliquée' },
      { en: 'Network Automation', fr: 'Automatisation Réseau' },
    ],
    downloadCV: { en: 'Download Resume', fr: 'Télécharger CV' },
  };

  return (
    <section className="py-24 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center overflow-hidden">
          <Image
            src={`${basePath}/profile.jpeg`}
            alt="Mike Folepe"
            width={144}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {content.title[language]}
        </h1>

        <h1 className="text-=xl md:text-4xl font-bold mb-4 leading-tight">
          {content.subtitle[language]}
        </h1>

        <p className="text-xl text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
          {content.tagline[language]}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8 text-[var(--color-text-secondary)]">
          {content.keywords.map((keyword, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-[var(--color-primary)]">•</span>
              {keyword[language]}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/mikefolepe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-all hover:-translate-y-0.5"
          >
            <Github size={20} />
            GitHub →
          </a>
          <a
            href="https://linkedin.com/in/mikefolepe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href={`${basePath}/resume.pdf`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
          >
            <Download size={20} />
            {content.downloadCV[language]}
          </a>
        </div>
      </div>
    </section>
  );
}
