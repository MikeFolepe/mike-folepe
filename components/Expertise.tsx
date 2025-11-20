'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Expertise() {
  const { language } = useLanguage();

  const content = {
    title: { en: 'Expertise', fr: 'Expertise' },
    subtitle: {
      en: 'Core technical skills and areas of focus',
      fr: 'Compétences techniques clés et domaines de concentration',
    },
    areas: [
      {
        title: { en: 'System Automation', fr: 'Automatisation Système' },
        level: { en: 'Advanced', fr: 'Avancé' },
        description: {
          en: 'Building automated workflows, CI/CD pipelines, and infrastructure automation',
          fr: 'Construction de workflows automatisés, pipelines CI/CD et automatisation d\'infrastructure',
        },
      },
      {
        title: { en: 'Network Automation', fr: 'Automatisation Réseau' },
        level: { en: 'Advanced', fr: 'Avancé' },
        description: {
          en: 'Automating network configurations, monitoring, and orchestration',
          fr: 'Automatisation des configurations réseau, surveillance et orchestration',
        },
      },
      {
        title: { en: 'Distributed Systems', fr: 'Systèmes Distribués' },
        level: { en: 'Advanced', fr: 'Avancé' },
        description: {
          en: 'Designing resilient, scalable distributed architectures',
          fr: 'Conception d\'architectures distribuées résilientes et évolutives',
        },
      },
      {
        title: { en: 'Software Integrations', fr: 'Intégrations Logicielles' },
        level: { en: 'Advanced', fr: 'Avancé' },
        description: {
          en: 'API design, system integrations, and internal tooling development',
          fr: 'Conception d\'API, intégrations système et développement d\'outils internes',
        },
      },
      {
        title: { en: 'Applied AI', fr: 'IA Appliquée' },
        level: { en: 'Developing', fr: 'En développement' },
        description: {
          en: 'ML/AI integration in production systems, focus on practical applications',
          fr: 'Intégration ML/IA dans systèmes de production, focus sur applications pratiques',
        },
      },
      {
        title: { en: 'Cybersecurity', fr: 'Cybersécurité' },
        level: { en: 'Developing', fr: 'En développement' },
        description: {
          en: 'Security best practices, threat modeling, and secure system design',
          fr: 'Meilleures pratiques de sécurité, modélisation des menaces et conception sécurisée',
        },
      },
    ],
  };

  return (
    <section id="expertise" className="py-16 px-8 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {content.title[language]}
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          {content.subtitle[language]}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.areas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span>{area.title[language]}</span>
                <span className="text-xs text-[var(--color-text-secondary)] font-normal">
                  ({area.level[language]})
                </span>
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {area.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}