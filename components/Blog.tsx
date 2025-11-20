'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Blog() {
  const { language } = useLanguage();

  const content = {
    title: {
      en: 'Writing & Learning',
      fr: 'Écriture & Apprentissage',
    },
    subtitle: {
      en: 'Technical notes, engineering logs, and learning reflections',
      fr: 'Notes techniques, journaux d\'ingénierie et réflexions d\'apprentissage',
    },
    viewAll: { en: 'View All Posts →', fr: 'Voir Tous les Articles →' },
    posts: [
      {
        title: {
          en: 'Building Fault-Tolerant Distributed Systems',
          fr: 'Construction de Systèmes Distribués Tolérants aux Pannes',
        },
        meta: {
          en: 'Engineering Log • 5 min read',
          fr: 'Journal d\'Ingénierie • 5 min de lecture',
        },
        description: {
          en: 'Lessons learned from implementing consensus algorithms and handling network partitions in production environments.',
          fr: 'Leçons tirées de l\'implémentation d\'algorithmes de consensus et gestion de partitions réseau en production.',
        },
      },
      {
        title: {
          en: 'Network Automation Best Practices',
          fr: 'Meilleures Pratiques d\'Automatisation Réseau',
        },
        meta: {
          en: 'Technical Guide • 8 min read',
          fr: 'Guide Technique • 8 min de lecture',
        },
        description: {
          en: 'A practical guide to automating network configurations safely across multi-vendor environments.',
          fr: 'Un guide pratique pour automatiser les configurations réseau en toute sécurité dans environnements multi-fournisseurs.',
        },
      },
      {
        title: {
          en: 'Learning AI: From Theory to Production',
          fr: 'Apprendre l\'IA : De la Théorie à la Production',
        },
        meta: {
          en: 'Learning Notes • 6 min read',
          fr: 'Notes d\'Apprentissage • 6 min de lecture',
        },
        description: {
          en: 'My journey integrating machine learning models into production systems and the challenges of operationalizing AI.',
          fr: 'Mon parcours d\'intégration de modèles ML en production et les défis de l\'opérationnalisation de l\'IA.',
        },
      },
      {
        title: {
          en: 'System Design Patterns for Scalability',
          fr: 'Patrons de Conception Système pour l\'Évolutivité',
        },
        meta: {
          en: 'Technical Summary • 10 min read',
          fr: 'Résumé Technique • 10 min de lecture',
        },
        description: {
          en: 'Common architectural patterns for building scalable distributed systems with practical examples.',
          fr: 'Patrons architecturaux courants pour construire des systèmes distribués évolutifs avec exemples pratiques.',
        },
      },
    ],
  };

  return (
    <section id="blog" className="py-16 px-8 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {content.title[language]}
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          {content.subtitle[language]}
        </p>
        <div className="space-y-4">
          {content.posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">
                {post.title[language]}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                {post.meta[language]}
              </p>
              <p className="text-[var(--color-text-secondary)]">
                {post.description[language]}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
          >
            {content.viewAll[language]}
          </a>
        </div>
      </div>
    </section>
  );
}