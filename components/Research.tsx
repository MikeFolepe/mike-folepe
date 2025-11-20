'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Research() {
  const { language } = useLanguage();

  const content = {
    title: { en: 'PhD & Research', fr: 'Doctorat & Recherche' },
    status: {
      en: 'Starting PhD in 2025 focusing on AI systems for high-impact industrial and governmental applications',
      fr: 'Début du doctorat en 2025 avec focus sur systèmes d\'IA pour applications industrielles et gouvernementales à fort impact',
    },
    interestsTitle: { en: 'Research Interests', fr: 'Intérêts de Recherche' },
    interests: [
      {
        title: {
          en: 'AI for Distributed Systems',
          fr: 'IA pour Systèmes Distribués',
        },
        description: {
          en: 'Applying machine learning to optimize distributed system performance, reliability, and resource allocation',
          fr: 'Application du machine learning pour optimiser performance, fiabilité et allocation de ressources des systèmes distribués',
        },
      },
      {
        title: {
          en: 'Explainable AI (XAI)',
          fr: 'IA Explicable (XAI)',
        },
        description: {
          en: 'Developing interpretable AI systems for automation and decision support in critical environments',
          fr: 'Développement de systèmes d\'IA interprétables pour automatisation et aide à la décision dans environnements critiques',
        },
      },
      {
        title: {
          en: 'System Reliability',
          fr: 'Fiabilité des Systèmes',
        },
        description: {
          en: 'Ensuring robustness and fault tolerance in high-stakes distributed architectures',
          fr: 'Assurer la robustesse et la tolérance aux pannes dans architectures distribuées à enjeux élevés',
        },
      },
      {
        title: {
          en: 'Applied AI for Industry',
          fr: 'IA Appliquée pour l\'Industrie',
        },
        description: {
          en: 'Practical AI integration in industrial and governmental contexts with focus on real-world impact',
          fr: 'Intégration pratique de l\'IA dans contextes industriels et gouvernementaux avec focus sur impact réel',
        },
      },
    ],
  };

  return (
    <section id="research" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {content.title[language]}
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 mb-8 text-center">
          <p>
            <strong>Starting PhD in 2025</strong>{' '}
            {language === 'en'
              ? 'focusing on AI systems for high-impact industrial and governmental applications'
              : 'avec focus sur systèmes d\'IA pour applications industrielles et gouvernementales à fort impact'}
          </p>
        </div>
        <h3 className="text-2xl font-semibold text-center mb-6">
          {content.interestsTitle[language]}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {content.interests.map((interest, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4"
            >
              <h4 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">
                {interest.title[language]}
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {interest.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}