'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight } from 'lucide-react';

export default function Ventures() {
  const { language } = useLanguage();

  const content = {
    title: {
      en: 'Ventures & Entrepreneurship',
      fr: 'Entreprises & Entrepreneuriat',
    },
    subtitle: {
      en: 'Building companies at the intersection of technology and impact',
      fr: 'Construction d\'entreprises à l\'intersection de la technologie et de l\'impact',
    },
    ventures: [
      {
        name: 'FoleTech Labs',
        tagline: {
          en: 'Software consulting for modern organizations',
          fr: 'Conseil logiciel pour organisations modernes',
        },
        description: {
          en: 'Helping SMEs, technical teams, and public organizations modernize their systems, automate processes, and integrate AI into their operations through custom software solutions.',
          fr: 'Aider les PME, équipes techniques et organisations publiques à moderniser leurs systèmes, automatiser leurs processus et intégrer l\'IA dans leurs opérations via des solutions logicielles sur mesure.',
        },
        cta: { en: 'In Building →', fr: 'En construction →' },
      },
      {
        name: 'MafHoney',
        tagline: {
          en: 'Premium artisanal honey brand',
          fr: 'Marque de miel artisanal premium',
        },
        description: {
          en: 'Crafting and importing high-quality artisanal honey with a focus on authenticity, traceability, and sustainable practices.',
          fr: 'Fabrication et importation de miel artisanal de haute qualité avec un focus sur l\'authenticité, la traçabilité et les pratiques durables.',
        },
        cta: { en: 'In Building →', fr: 'En construction →' },
      },
    ],
  };

  return (
    <section id="ventures" className="py-16 px-8 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {content.title[language]}
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          {content.subtitle[language]}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {content.ventures.map((venture, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{venture.name}</h3>
              <p className="text-[var(--color-text-secondary)] italic mb-4">
                {venture.tagline[language]}
              </p>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                {venture.description[language]}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-all"
              >
                {venture.cta[language]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}