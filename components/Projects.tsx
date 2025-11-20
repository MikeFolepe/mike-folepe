'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();

  const content = {
    title: { en: 'Projects', fr: 'Projets' },
    subtitle: {
      en: 'Selected technical projects and research work',
      fr: 'Projets techniques sélectionnés et travaux de recherche',
    },
    projects: [
      {
        title: 'DocuFlow',
        status: { en: 'In Development', fr: 'En Développement' },
        description: {
          en: 'Intelligent document management SaaS with automated workflows and AI-powered categorization',
          fr: 'SaaS de gestion documentaire intelligente avec workflows automatisés et catégorisation par IA',
        },
        tags: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
      },
      {
        title: 'AutoTraceAI',
        status: { en: 'In Development', fr: 'En Développement' },
        description: {
          en: 'Automated traceability system for manufacturing and supply chain operations',
          fr: 'Système de traçabilité automatisée pour opérations de fabrication et chaîne d\'approvisionnement',
        },
        tags: ['Python', 'FastAPI', 'ML', 'Docker'],
      },
      {
        title: { en: 'Network Automation Toolkit', fr: 'Toolkit d\'Automatisation Réseau' },
        status: { en: 'Active', fr: 'Actif' },
        description: {
          en: 'CLI tool for automating network device configuration and monitoring across multi-vendor environments',
          fr: 'Outil CLI pour automatiser la configuration et surveillance d\'équipements réseau multi-fournisseurs',
        },
        tags: ['Python', 'Netmiko', 'NAPALM', 'Ansible'],
      },
      {
        title: { en: 'Distributed Task Scheduler', fr: 'Ordonnanceur de Tâches Distribué' },
        status: { en: 'Active', fr: 'Actif' },
        description: {
          en: 'Fault-tolerant distributed task scheduling system with dynamic load balancing',
          fr: 'Système d\'ordonnancement de tâches distribué tolérant aux pannes avec équilibrage de charge dynamique',
        },
        tags: ['Go', 'Redis', 'gRPC', 'Kubernetes'],
      },
      {
        title: { en: 'ML System Optimizer', fr: 'Optimiseur de Système ML' },
        status: { en: 'Research', fr: 'Recherche' },
        description: {
          en: 'Research project exploring reinforcement learning for distributed system optimization',
          fr: 'Projet de recherche explorant l\'apprentissage par renforcement pour l\'optimisation de systèmes distribués',
        },
        tags: ['Python', 'PyTorch', 'Ray', 'Prometheus'],
      },
      {
        title: { en: 'API Gateway Framework', fr: 'Framework API Gateway' },
        status: { en: 'Active', fr: 'Actif' },
        description: {
          en: 'Lightweight, high-performance API gateway with built-in authentication and rate limiting',
          fr: 'Gateway API léger et performant avec authentification et limitation de débit intégrées',
        },
        tags: ['Rust', 'Tokio', 'Redis', 'Docker'],
      },
    ],
  };

  return (
    <section id="projects" className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {content.title[language]}
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          {content.subtitle[language]}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">
                {typeof project.title === 'string' ? project.title : project.title[language]}
              </h3>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-500/10 text-[var(--color-primary)] mb-4">
                {project.status[language]}
              </span>
              <p className="text-[var(--color-text-secondary)] mb-4 text-sm">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-[var(--color-bg)] rounded-md text-[var(--color-text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-[var(--color-primary)] text-sm flex items-center gap-1 hover:underline"
                >
                  <Github size={16} />
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}